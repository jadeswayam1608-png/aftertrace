// src/shooter/zombie.js - 3D Zombie State Machine, Boss Zombie Support, Floating Overhead Health Bars & Terrain Climbing
import * as THREE from 'three';
import { playZombieDeath } from './audio.js';
import { createProceduralZombie, createProceduralBossZombie } from './characterModel.js';
import { ZOMBIE_XP_REWARDS } from '../data/progressionConfig.js';

export const ZOMBIE_STATE = {
  IDLE: 'idle',
  CHASE: 'chase',
  ATTACK: 'attack',
  STAGGER: 'stagger',
  DEAD: 'dead'
};

const _zombieDir = new THREE.Vector3();
const _zombieForward = new THREE.Vector3();

export class Zombie {
  constructor(scene, spawnPos, speedMultiplier = 1.0, health = 100, attackDamage = 15, isBoss = false, zombieType = null) {
    this.scene = scene;
    this.isBoss = isBoss;
    this.type = isBoss ? 'boss' : (zombieType || 'normal');
    this.id = 'zombie_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    this.xpReward = ZOMBIE_XP_REWARDS[this.type] || 25;
    this.xpAwarded = false;
    this.onDeath = null;

    this.state = ZOMBIE_STATE.IDLE;
    this.health = health;
    this.maxHealth = health;
    this.isAlive = true;
    this.speedMultiplier = speedMultiplier;

    // Movement & detection parameters
    if (this.isBoss) {
      // Boss is noticeably slower, heavier, with long attack reach & 40 damage
      this.baseSpeed = 2.0;
      this.speed = this.baseSpeed;
      this.detectionRadius = 85.0;
      this.attackDistance = 3.4;
      this.attackCooldown = 1.35;
      this.attackTimer = 1.2; // Safe initial cooldown on spawn
      this.attackDamage = attackDamage || 40;
    } else {
      this.baseSpeed = 4.4 * speedMultiplier;
      this.speed = this.baseSpeed;
      this.detectionRadius = 45.0;
      this.attackDistance = 1.70;
      this.attackCooldown = 1.0;
      this.attackTimer = 1.0; // Safe initial cooldown on spawn (no instant strike)
      this.attackDamage = attackDamage;
    }

    // Stagger state (boss is highly resistant to stagger)
    this.staggerTimer = 0;
    this.staggerDuration = this.isBoss ? 0.08 : 0.22;

    // Death state
    this.deathTimer = 0;

    // 3D Procedural Model (Boss vs Regular Zombie variants)
    if (this.isBoss) {
      this.proceduralZombie = createProceduralBossZombie({ scale: 2.85 });
    } else {
      let scale = 0.98 + Math.random() * 0.12;
      if (this.type === 'heavy') scale = 1.25;
      else if (this.type === 'fast') scale = 0.90;
      else if (this.type === 'elite') scale = 1.15;

      this.proceduralZombie = createProceduralZombie({ scale });
    }

    this.mesh = this.proceduralZombie.mesh;
    this.mesh.position.copy(spawnPos);
    this.mesh.position.y = 0;
    this.scene.add(this.mesh);

    // Fast hit collider link for ultra-fast raycasting (1 single cylinder test instead of 50 submeshes)
    this.hitCollider = this.mesh.hitCollider;
    if (this.hitCollider) {
      this.hitCollider.userData.zombie = this;
    }

    // Create 3D Billboarding Overhead Health Bar
    this.createHealthBar();

    this.onStateChange = null;
  }

  createHealthBar() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    this.hbCanvas = canvas;
    this.hbCtx = canvas.getContext('2d');
    this.hbTexture = new THREE.CanvasTexture(canvas);

    const spriteMat = new THREE.SpriteMaterial({
      map: this.hbTexture,
      transparent: true,
      depthTest: false
    });
    this.healthBarSprite = new THREE.Sprite(spriteMat);

    if (this.isBoss) {
      this.healthBarSprite.scale.set(4.2, 1.05, 1.0);
      this.healthBarSprite.position.set(0, 6.4, 0);
    } else {
      this.healthBarSprite.scale.set(1.5, 0.38, 1.0);
      this.healthBarSprite.position.set(0, 2.25, 0);
    }

    this.mesh.add(this.healthBarSprite);
    this.renderHealthBar();
  }

  renderHealthBar() {
    if (!this.hbCtx) return;
    const ctx = this.hbCtx;
    const w = this.hbCanvas.width;
    const h = this.hbCanvas.height;

    ctx.clearRect(0, 0, w, h);

    const pct = Math.max(0, Math.min(1.0, this.health / this.maxHealth));

    // Outer border & dark background
    ctx.fillStyle = 'rgba(15, 18, 22, 0.88)';
    ctx.strokeStyle = this.isBoss ? '#FF2222' : 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = this.isBoss ? 4 : 2;

    ctx.beginPath();
    ctx.roundRect(8, 22, w - 16, 32, 6);
    ctx.fill();
    ctx.stroke();

    // Health Bar Fill
    if (pct > 0) {
      const fillW = Math.max(4, (w - 20) * pct);
      const grad = ctx.createLinearGradient(10, 0, w - 10, 0);
      if (this.isBoss) {
        grad.addColorStop(0, '#FF1111');
        grad.addColorStop(0.7, '#FF5500');
        grad.addColorStop(1.0, '#FFAA00');
      } else {
        grad.addColorStop(0, pct > 0.4 ? '#00E676' : '#FF5252');
        grad.addColorStop(1, pct > 0.4 ? '#69F0AE' : '#FF1744');
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(10, 24, fillW, 28, 4);
      ctx.fill();
    }

    // Overhead Label Text
    ctx.font = this.isBoss ? 'bold 22px sans-serif' : 'bold 17px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.isBoss ? '#FFD700' : (this.type === 'elite' ? '#FFD54F' : '#FFFFFF');
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 4;
    let title = 'Zombie';
    if (this.isBoss) title = '★ BOSS ZOMBIE ★';
    else if (this.type === 'elite') title = '⚡ ELITE ZOMBIE ⚡';
    else if (this.type === 'heavy') title = '■ HEAVY ZOMBIE ■';
    else if (this.type === 'fast') title = '» SPRINTER ZOMBIE «';
    ctx.fillText(title, w / 2, 12);

    this.hbTexture.needsUpdate = true;
  }

  update(delta, player, environment = null) {
    if (!this.isAlive) {
      if (this.state === ZOMBIE_STATE.DEAD) {
        this.deathTimer += delta;
        this.mesh.position.y -= delta * 1.5;
        this.mesh.scale.multiplyScalar(Math.max(0, 1.0 - delta * 1.5));
        if (this.deathTimer > 1.2) {
          this.destroy();
        }
      }
      return;
    }

    // Follow terrain height so zombies smoothly climb and descend the hill
    const terrainY = environment?.getTerrainHeight ? environment.getTerrainHeight(this.mesh.position.x, this.mesh.position.z) : 0;
    this.mesh.position.y = terrainY;

    const distToPlayer = this.mesh.position.distanceTo(player.position);

    if (this.attackTimer > 0) {
      this.attackTimer -= delta;
    }

    // State Machine
    switch (this.state) {
      case ZOMBIE_STATE.IDLE:
        if (distToPlayer <= this.detectionRadius) {
          this.setState(ZOMBIE_STATE.CHASE);
        }
        break;

      case ZOMBIE_STATE.CHASE:
        this.faceTarget(player.position);

        if (distToPlayer <= this.attackDistance) {
          this.setState(ZOMBIE_STATE.ATTACK);
        } else {
          _zombieDir.copy(player.position).sub(this.mesh.position);
          _zombieDir.y = 0;
          _zombieDir.normalize();

          this.mesh.position.addScaledVector(_zombieDir, this.speed * delta);

          // Soft obstacle sliding so zombies don't clip through trees/crates or get stuck
          if (environment && environment.getColliders) {
            const colliders = environment.getColliders();
            const zRadius = this.isBoss ? 1.0 : 0.45;
            for (let i = 0; i < colliders.length; i++) {
              const col = colliders[i];
              const dx = this.mesh.position.x - col.x;
              const dz = this.mesh.position.z - col.z;
              const distSq = dx * dx + dz * dz;
              const minDist = zRadius + col.radius;
              if (distSq < minDist * minDist && distSq > 0.0001) {
                const dist = Math.sqrt(distSq);
                const overlap = minDist - dist;
                this.mesh.position.x += (dx / dist) * overlap;
                this.mesh.position.z += (dz / dist) * overlap;
              }
            }
          }
        }
        break;

      case ZOMBIE_STATE.ATTACK:
        this.faceTarget(player.position);

        if (distToPlayer <= this.attackDistance + 0.40) {
          if (this.attackTimer <= 0) {
            this.attackTimer = this.attackCooldown;
            player.takeDamage(this.attackDamage);

            _zombieDir.copy(player.position).sub(this.mesh.position).normalize();
            this.mesh.position.addScaledVector(_zombieDir, this.isBoss ? 0.35 : 0.22);
          }
        } else {
          this.setState(ZOMBIE_STATE.CHASE);
        }
        break;

      case ZOMBIE_STATE.STAGGER:
        this.staggerTimer -= delta;
        if (this.staggerTimer <= 0) {
          if (this.proceduralZombie.materials && this.proceduralZombie.originalColors) {
            this.proceduralZombie.materials.forEach((mat, idx) => {
              if (this.proceduralZombie.originalColors[idx]) {
                mat.color.setHex(this.proceduralZombie.originalColors[idx]);
              }
            });
          }
          this.setState(ZOMBIE_STATE.CHASE);
        }
        break;
    }

    // 3D animation
    if (this.proceduralZombie) {
      this.proceduralZombie.update(this.state, performance.now() * 0.001, this.speedMultiplier);
    }
  }

  faceTarget(targetPos) {
    const dx = targetPos.x - this.mesh.position.x;
    const dz = targetPos.z - this.mesh.position.z;
    this.mesh.rotation.y = Math.atan2(dx, dz) + Math.PI;
  }

  setState(newState) {
    if (this.state === newState) return;
    this.state = newState;
    if (newState === ZOMBIE_STATE.ATTACK && this.attackTimer < 0.4) {
      this.attackTimer = 0.4; // 400ms telegraph/windup so player has reaction time
    }
    if (this.onStateChange) this.onStateChange(newState);
  }

  takeDamage(amount, hitPoint, hitDetails = {}) {
    if (!this.isAlive) return;

    this.health = Math.max(0, this.health - amount);
    this.renderHealthBar();

    this.setState(ZOMBIE_STATE.STAGGER);
    this.staggerTimer = this.staggerDuration;

    // White hit flash
    if (this.proceduralZombie && this.proceduralZombie.materials) {
      this.proceduralZombie.materials.forEach(mat => mat.color.setHex(0xFFFFFF));
    }

    // Knockback (Boss has higher mass, subtle knockback)
    const knockback = this.isBoss ? 0.08 : (this.type === 'heavy' ? 0.18 : 0.35);
    const sinY = Math.sin(this.mesh.rotation.y);
    const cosY = Math.cos(this.mesh.rotation.y);
    _zombieForward.set(sinY, 0, cosY);
    this.mesh.position.addScaledVector(_zombieForward, knockback);

    if (this.health <= 0) {
      this.die(hitDetails);
    }
  }

  die(hitDetails = {}) {
    if (!this.isAlive) return;
    this.isAlive = false;
    this.setState(ZOMBIE_STATE.DEAD);

    // Instantly hide overhead health bar
    if (this.healthBarSprite) {
      this.healthBarSprite.visible = false;
    }

    if (this.hitCollider) {
      this.hitCollider.visible = false;
      this.hitCollider.userData.zombie = null;
    }
    playZombieDeath();
    this.mesh.rotation.x = Math.PI / 2.3;

    // Guaranteed strictly once XP dispatch
    if (!this.xpAwarded) {
      this.xpAwarded = true;
      if (this.onDeath) {
        this.onDeath(this, hitDetails);
      }
    }
  }

  destroy() {
    if (this.healthBarSprite) {
      this.healthBarSprite.visible = false;
    }
    if (this.hitCollider) {
      this.hitCollider.userData.zombie = null;
    }
    this.scene.remove(this.mesh);
  }
}
