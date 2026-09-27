// src/shooter/game.js - Main 3D Third-Person Shooter Game Controller & Particle Pooling
import * as THREE from 'three';
import { Player } from './player.js';
import { IslandEnvironment } from './props.js';
import { WaveManager, WAVE_STATE } from './waveManager.js';
import { InputManager } from './input.js';
import { ShooterHUD } from './hud.js';
import { initAudio } from './audio.js';
import { assetManager } from './assetManager.js';
import { DIFFICULTY_PRESETS } from './difficulty.js';
import { progressionManager } from './progression.js';
import { storyEngine } from '../narrative/storyEngine.js';

export class ShooterGame {
  constructor(canvas) {
    this.canvas = canvas;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Scene & Perspective Camera
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFFA57E); // Soft glowing sunset peach matching media_1790514959488.jpg
    this.scene.fog = new THREE.FogExp2(0xE09F8C, 0.005); // Soft atmospheric haze with high combat clarity

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );

    // Systems
    this.currentDifficulty = 'medium';
    this.currentCharacter = 'maya';
    this.input = new InputManager(this.canvas);
    this.hud = new ShooterHUD(this.input);
    this.environment = new IslandEnvironment(this.scene);
    this.player = new Player(this.scene, this.camera, this.currentCharacter);
    this.waveManager = new WaveManager(this.scene, this.player);

    // Bullet Tracers & Hit Sparks with Object Pooling (0 per-frame GC allocations)
    this.tracers = [];
    this.particles = [];
    this.particlePool = [];

    // Clock
    this.clock = new THREE.Clock();
    this.isRunning = false;
    this.isPaused = false;

    this.setupCallbacks();
    this.setupResize();
    this.loadCustomAssets();

    // Show Title Screen with Operator & Difficulty Selection
    this.hud.showTitleScreen((selectedDifficulty, selectedCharacter, perk) => {
      this.start(selectedDifficulty, selectedCharacter, perk);
    });
  }

  applyDifficulty(difficultyId) {
    this.currentDifficulty = difficultyId || 'medium';
    const preset = DIFFICULTY_PRESETS[this.currentDifficulty] || DIFFICULTY_PRESETS.medium;
    this.player.applyDifficulty(preset);
    this.waveManager.applyDifficulty(preset);
    this.environment.setAmmoRespawnTime(preset.ammoRespawnTime);
    console.log(`[ShooterGame] Applied difficulty: ${preset.name} (${preset.id})`);
  }

  setupCallbacks() {
    this.player.onHit = (zombie, hitPoint) => {
      this.hud.showHitmarker();
      this.spawnHitParticles(hitPoint);
    };

    this.player.onTracer = (startPos, endPos, weapon) => {
      this.spawnTracer(startPos, endPos, weapon);
    };

    this.player.onDryFire = () => {
      this.hud.flashEmptyAmmo();
    };

    this.player.onDamageTaken = (amount, currentHealth) => {
      this.hud.showDamageFlash();
    };

    // Locked weapon notification
    this.player.onWeaponLocked = (weaponId) => {
      this.hud.showWeaponLockedAlert(weaponId);
    };

    // HUD weapon switch requested (mobile button tap or click)
    this.hud.onWeaponSwitchRequest = () => {
      this.player.nextWeapon();
    };

    // HUD operator change in menu
    this.hud.onCharacterSelect = (charId) => {
      this.currentCharacter = charId;
      this.player.setCharacter(charId);
    };

    // Wave events
    this.waveManager.onRoundStart = (waveNum) => {
      this.environment.onNewRound(waveNum);
    };

    // Zombie kill progression reward (XP awarded strictly once upon death)
    this.waveManager.onZombieKill = (zombie, hitDetails) => {
      progressionManager.awardZombieKill(zombie.type, zombie.isBoss, hitDetails?.isHeadshot);
    };

    // Continuing post-wave narrative checkpoint between rounds (Strictly pauses simulation!)
    this.waveManager.onWaveCleared = (waveNum) => {
      if (waveNum < this.waveManager.maxWaves) {
        this.isPaused = true;
        if (document.pointerLockElement) {
          document.exitPointerLock();
        }

        this.hud.triggerPostWaveStory(waveNum, () => {
          this.isPaused = false;
          if (this.player) {
            this.player.invulnerableTimer = 2.5; // Safe reorientation grace period
          }
          this.waveManager.resumeBreatherAfterStory();
        });
      } else {
        this.waveManager.resumeBreatherAfterStory();
      }
    };

    this.environment.onHealthPicked = (amount) => {
      this.hud.showHealingAlert(`+${amount} HEALTH`);
    };

    this.waveManager.onWaveBanner = (title, subtitle) => {
      this.hud.showWaveBanner(title, subtitle);
    };

    this.waveManager.onGameOver = (stats) => {
      this.hud.showGameOver(stats, (diff, char) => {
        this.restart(diff, char);
      });
    };

    this.waveManager.onVictory = (stats) => {
      this.hud.showVictory(stats, (diff, char) => {
        this.restart(diff, char);
      });
    };
  }

  start(difficultyId, characterId, perk = null) {
    initAudio();
    if (characterId) {
      this.currentCharacter = characterId;
      this.player.setCharacter(characterId);
    }
    this.applyDifficulty(difficultyId || this.currentDifficulty);

    // Apply interactive prologue choice perk
    if (perk === 'ammo') {
      this.player.addAmmo(30);
      this.hud.showHealingAlert('+30 SMG AMMO UNLOCKED');
    } else if (perk === 'armor') {
      this.player.maxHealth += 25;
      this.player.health += 25;
      this.hud.showHealingAlert('+25 ARMOR REINFORCED');
    }

    this.isRunning = true;
    this.waveManager.start();
  }

  restart(difficultyId, characterId) {
    this.waveManager.cleanup();

    if (characterId) {
      this.currentCharacter = characterId;
      this.player.setCharacter(characterId);
    }

    this.applyDifficulty(difficultyId || this.currentDifficulty);

    // Initialize fresh random seed and story state for the replay run
    if (this.hud && this.hud.selectedStartingStoryId) {
      storyEngine.initializeStoryRun(this.hud.selectedStartingStoryId);
    }

    this.player.position.set(0, 0, 0);
    this.player.velocity.set(0, 0, 0);
    this.player.yaw = 0;
    this.player.pitch = 0.05;

    // Reset particles to pool
    this.particles.forEach(p => {
      p.mesh.visible = false;
      this.particlePool.push(p);
    });
    this.particles = [];

    // Reset tracers to pool
    if (this.tracers) {
      this.tracers.forEach(t => {
        t.mesh.visible = false;
        this.tracerPool.push(t);
      });
      this.tracers = [];
    }

    // Respawn round 1 health kits
    this.environment.spawnRoundHealthKits();

    // Restart waves
    this.waveManager.start();
  }

  setupResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  spawnTracer(start, end, weapon) {
    if (!this.tracerPool) this.tracerPool = [];
    let t;
    if (this.tracerPool.length > 0) {
      t = this.tracerPool.pop();
      t.mesh.visible = true;
    } else {
      const geo = new THREE.CylinderGeometry(0.016, 0.016, 1.0, 5);
      geo.rotateX(Math.PI / 2); // Orient along Z axis
      const mat = new THREE.MeshBasicMaterial({
        color: 0xFFEB7A,
        transparent: true,
        opacity: 0.95
      });
      const mesh = new THREE.Mesh(geo, mat);
      this.scene.add(mesh);
      t = {
        mesh,
        current: new THREE.Vector3(),
        dir: new THREE.Vector3(),
        distance: 0,
        traveled: 0,
        speed: 360,
        life: 0.16
      };
    }

    t.current.copy(start);
    t.dir.subVectors(end, start);
    t.distance = t.dir.length();
    if (t.distance > 0.001) {
      t.dir.normalize();
    } else {
      t.dir.set(0, 0, -1);
    }
    t.traveled = 0;
    t.life = 0.16;

    const slugLen = Math.min(2.0, Math.max(0.6, t.distance * 0.25));
    t.mesh.scale.set(1, 1, slugLen);
    t.mesh.position.copy(start);
    t.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), t.dir);
    t.mesh.material.opacity = 0.95;

    this.tracers.push(t);
  }

  spawnHitParticles(point) {
    if (!this._bloodGeo) {
      this._bloodGeo = new THREE.SphereGeometry(0.055, 4, 4);
      this._bloodMat = new THREE.MeshBasicMaterial({ color: 0x8A0303 });
      this._sparkGeo = new THREE.SphereGeometry(0.040, 4, 4);
      this._sparkMat = new THREE.MeshBasicMaterial({ color: 0xFFEE55 });
    }

    // 4 Blood droplets + 4 bright kinetic impact sparks
    const count = 8;
    for (let i = 0; i < count; i++) {
      const isSpark = (i % 2 === 0);
      let p;
      if (this.particlePool.length > 0) {
        p = this.particlePool.pop();
        p.mesh.geometry = isSpark ? this._sparkGeo : this._bloodGeo;
        p.mesh.material = isSpark ? this._sparkMat : this._bloodMat;
        p.mesh.visible = true;
      } else {
        const mesh = new THREE.Mesh(isSpark ? this._sparkGeo : this._bloodGeo, isSpark ? this._sparkMat : this._bloodMat);
        this.scene.add(mesh);
        p = { mesh, vel: new THREE.Vector3(), life: 0.28 };
      }

      p.mesh.position.copy(point);
      const speed = isSpark ? (Math.random() * 5.5 + 2.0) : (Math.random() * 3.5 + 1.0);
      p.vel.set(
        (Math.random() - 0.5) * speed,
        Math.random() * speed * 0.8 + 1.2,
        (Math.random() - 0.5) * speed
      );
      p.life = isSpark ? 0.20 : 0.32;
      this.particles.push(p);
    }
  }

  createSunsetSkyTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Smooth vertical atmospheric sunset gradient matching media_1790514959488.jpg
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0.0, '#5A7292');  // Twilight slate-blue zenith
    grad.addColorStop(0.25, '#827490'); // Soft muted lavender twilight
    grad.addColorStop(0.52, '#C4859A'); // Soft blush lavender-pink haze
    grad.addColorStop(0.74, '#FFA274'); // Warm golden-peach sunset glow
    grad.addColorStop(1.0, '#FFC285');  // Warm golden horizon band
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Glowing low-angle sun on the horizon
    const sunX = canvas.width * 0.62;
    const sunY = canvas.height * 0.74;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 6, sunX, sunY, 150);
    sunGrad.addColorStop(0.0, 'rgba(255, 255, 240, 1.0)');
    sunGrad.addColorStop(0.12, 'rgba(255, 235, 175, 0.95)');
    sunGrad.addColorStop(0.35, 'rgba(255, 175, 105, 0.55)');
    sunGrad.addColorStop(0.70, 'rgba(255, 135, 85, 0.20)');
    sunGrad.addColorStop(1.0, 'rgba(255, 115, 75, 0.0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 150, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
  }

  async loadCustomAssets() {
    // 1. Procedural Atmospheric Sunset Skydome matching media_1790514959488.jpg
    const skyTex = this.createSunsetSkyTexture();
    const skyGeo = new THREE.SphereGeometry(240, 32, 20);
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTex,
      side: THREE.BackSide,
      fog: false
    });
    const skyDome = new THREE.Mesh(skyGeo, skyMat);
    skyDome.rotation.y = Math.PI * 0.4;
    this.scene.add(skyDome);

    // 2. Load UI and weapon icons
    await assetManager.loadAssets();
  }

  run() {
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = Math.min(0.08, this.clock.getDelta());

      if (this.isRunning && !this.isPaused) {
        const activeZombies = this.waveManager.getActiveZombies();

        // 1. Update Player & Camera (Follows terrain elevation)
        this.player.update(delta, this.input, activeZombies, this.environment);

        // 2. Update Wave Progression & Zombies (Follows terrain elevation)
        this.waveManager.update(delta, this.environment);

        // 3. Update Island Props & Ammo Pickups
        this.environment.update(delta, this.player);

        // 4. Update Pooled Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.life -= delta;
          p.mesh.position.addScaledVector(p.vel, delta);
          p.vel.y -= delta * 9.8;
          if (p.life <= 0) {
            p.mesh.visible = false;
            this.particles.splice(i, 1);
            this.particlePool.push(p);
          }
        }

        // 5. Update Pooled Bullet Tracers
        for (let i = this.tracers.length - 1; i >= 0; i--) {
          const t = this.tracers[i];
          const step = t.speed * delta;
          t.traveled += step;
          t.life -= delta;
          t.current.addScaledVector(t.dir, step);
          t.mesh.position.copy(t.current);
          if (t.mesh.material) {
            t.mesh.material.opacity = Math.max(0, (t.life / 0.16) * 0.95);
          }
          if (t.traveled >= t.distance || t.life <= 0) {
            t.mesh.visible = false;
            this.tracers.splice(i, 1);
            this.tracerPool.push(t);
          }
        }

        // 6. Update HUD
        this.hud.update(this.player, this.waveManager);
      }

      // Render 3D Scene
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
}
