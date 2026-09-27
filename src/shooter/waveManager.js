// src/shooter/waveManager.js - Wave spawning, breather intervals, progression & zero-allocation active list
import * as THREE from 'three';
import { Zombie } from './zombie.js';
import { playWaveChime } from './audio.js';
import { DIFFICULTY_PRESETS } from './difficulty.js';

export const WAVE_STATE = {
  PRE_GAME: 'pre_game',
  ACTIVE: 'active',
  BREATHER: 'breather',
  VICTORY: 'victory',
  GAME_OVER: 'game_over'
};

export class WaveManager {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;

    this.currentWave = 1;
    this.maxWaves = 5;
    this.state = WAVE_STATE.PRE_GAME;
    this.difficulty = DIFFICULTY_PRESETS.medium;

    this.zombies = [];
    this._activeZombiesCache = [];
    this.totalZombiesKilled = 0;
    this.startTime = 0;
    this.survivedSeconds = 0;

    // Spawning control based on difficulty
    this.pendingWaveSpawns = 0;
    this.totalWaveZombies = 0;
    this.spawnTimer = 0;

    this.breatherTimer = 0;
    this.breatherDuration = 3.5;
    this.isStoryPaused = false;

    // Callbacks for HUD, Progression & Narrative
    this.onWaveBanner = null;
    this.onWaveChange = null;
    this.onRoundStart = null;
    this.onWaveCleared = null;
    this.onZombieKill = null;
    this.onVictory = null;
    this.onGameOver = null;
  }

  applyDifficulty(preset) {
    this.difficulty = preset || DIFFICULTY_PRESETS.medium;
  }

  start() {
    this.currentWave = 1;
    this.totalZombiesKilled = 0;
    this.startTime = performance.now();
    this.state = WAVE_STATE.ACTIVE;
    this.startWave(this.currentWave);
  }

  determineZombieType(waveNum) {
    const r = Math.random();
    if (waveNum === 1) {
      return r < 0.20 ? 'fast' : 'normal';
    } else if (waveNum === 2) {
      if (r < 0.25) return 'fast';
      if (r < 0.45) return 'heavy';
      return 'normal';
    } else if (waveNum === 3) {
      if (r < 0.15) return 'elite';
      if (r < 0.40) return 'heavy';
      if (r < 0.70) return 'fast';
      return 'normal';
    } else if (waveNum === 4) {
      if (r < 0.28) return 'elite';
      if (r < 0.55) return 'heavy';
      if (r < 0.82) return 'fast';
      return 'normal';
    } else { // Wave 5
      if (r < 0.40) return 'elite';
      if (r < 0.75) return 'heavy';
      return 'fast';
    }
  }

  startWave(waveNum) {
    this.currentWave = waveNum;
    const waveCounts = this.difficulty.waveCounts || [5, 8, 12, 16, 22];
    const total = waveCounts[waveNum - 1] || 15;

    this.pendingWaveSpawns = total;
    this.totalWaveZombies = total;
    this.spawnTimer = 0;
    this.bossSpawned = false;

    playWaveChime();
    if (this.onRoundStart) {
      this.onRoundStart(waveNum);
    }

    if (waveNum === this.maxWaves) {
      if (this.onWaveBanner) {
        this.onWaveBanner('FINAL ROUND: BOSS ZOMBIE', 'Defeat the behemoth to survive!');
      }
      // Boss Zombie spawns ONLY in the final round (Wave 5)
      this.spawnBossZombie();
      this.bossSpawned = true;
    } else {
      if (this.onWaveBanner) {
        this.onWaveBanner(`WAVE ${waveNum} INCOMING`, `${total} zombies inbound`);
      }
    }

    const initialBatch = Math.min(this.pendingWaveSpawns, Math.min(3, this.difficulty.maxActiveZombies));
    for (let i = 0; i < initialBatch; i++) {
      this.spawnSingleZombie();
      this.pendingWaveSpawns--;
    }

    if (this.onWaveChange) {
      this.onWaveChange(this.currentWave, this.getRemainingCount());
    }
  }

  spawnBossZombie() {
    let spawnX = 0;
    let spawnZ = 0;
    const minSafeDist = 26.0;

    for (let attempts = 0; attempts < 10; attempts++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 32.0 + Math.random() * 12.0;

      spawnX = this.player.position.x + Math.cos(angle) * dist;
      spawnZ = this.player.position.z + Math.sin(angle) * dist;

      const islandDist = Math.hypot(spawnX, spawnZ);
      if (islandDist > 56) {
        spawnX = (spawnX / islandDist) * 52;
        spawnZ = (spawnZ / islandDist) * 52;
      }

      const distToPlayer = Math.hypot(spawnX - this.player.position.x, spawnZ - this.player.position.z);
      if (distToPlayer >= minSafeDist) break;
    }

    // 5x formidable durability boss pool (1600 HP base; 1200 on easy, 2000 on hard)
    const bossHealth = Math.round(1600 * (this.difficulty.id === 'hard' ? 1.25 : (this.difficulty.id === 'easy' ? 0.75 : 1.0)));
    const boss = new Zombie(
      this.scene,
      new THREE.Vector3(spawnX, 0, spawnZ),
      0.45, // Heavy menacing slow stride
      bossHealth,
      40,  // Lethal attack damage
      true, // isBoss = true
      'boss'
    );
    boss.onDeath = (z, details) => {
      if (this.onZombieKill) this.onZombieKill(z, details);
    };
    this.zombies.push(boss);
  }

  spawnSingleZombie() {
    let spawnX = 0;
    let spawnZ = 0;
    const minSafeDist = 22.0;

    for (let attempts = 0; attempts < 10; attempts++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 24.0 + Math.random() * 16.0;

      spawnX = this.player.position.x + Math.cos(angle) * dist;
      spawnZ = this.player.position.z + Math.sin(angle) * dist;

      // Keep within expanded island bounds (radius 60)
      const islandDist = Math.hypot(spawnX, spawnZ);
      if (islandDist > 58) {
        spawnX = (spawnX / islandDist) * 54;
        spawnZ = (spawnZ / islandDist) * 54;
      }

      const distToPlayer = Math.hypot(spawnX - this.player.position.x, spawnZ - this.player.position.z);
      if (distToPlayer >= minSafeDist) break;
    }

    const type = this.determineZombieType(this.currentWave);
    let speed = this.difficulty.zombieSpeedMultiplier;
    let health = this.difficulty.zombieHealth;
    let damage = this.difficulty.zombieAttackDamage;

    if (type === 'fast') {
      speed *= 1.35;
      health = Math.round(health * 0.75);
      damage = Math.round(damage * 0.85);
    } else if (type === 'heavy') {
      speed *= 0.75;
      health = Math.round(health * 2.2);
      damage = Math.round(damage * 1.4);
    } else if (type === 'elite') {
      speed *= 1.15;
      health = Math.round(health * 3.0);
      damage = Math.round(damage * 1.6);
    }

    const zombie = new Zombie(
      this.scene,
      new THREE.Vector3(spawnX, 0, spawnZ),
      speed,
      health,
      damage,
      false,
      type
    );
    zombie.onDeath = (z, details) => {
      if (this.onZombieKill) this.onZombieKill(z, details);
    };
    this.zombies.push(zombie);
  }

  update(delta, environment = null) {
    if (this.state === WAVE_STATE.PRE_GAME || this.isStoryPaused) return;

    if (this.state !== WAVE_STATE.GAME_OVER && this.state !== WAVE_STATE.VICTORY) {
      this.survivedSeconds = (performance.now() - this.startTime) / 1000;
    }

    // Check player health
    if (!this.player.isAlive() && this.state !== WAVE_STATE.GAME_OVER) {
      this.state = WAVE_STATE.GAME_OVER;
      if (this.onGameOver) {
        this.onGameOver({
          wavesSurvived: this.currentWave - 1,
          zombiesKilled: this.totalZombiesKilled,
          timeSurvived: this.formatTime(this.survivedSeconds),
          difficulty: this.difficulty.name
        });
      }
      return;
    }

    // Active wave: spawn remaining zombies
    if (this.state === WAVE_STATE.ACTIVE && this.pendingWaveSpawns > 0) {
      this.spawnTimer -= delta;
      if (this.spawnTimer <= 0) {
        const activeCount = this.getActiveZombies().length;
        if (activeCount < this.difficulty.maxActiveZombies) {
          this.spawnSingleZombie();
          this.pendingWaveSpawns--;
          this.spawnTimer = this.difficulty.spawnInterval;

          if (this.onWaveChange) {
            this.onWaveChange(this.currentWave, this.getRemainingCount());
          }
        }
      }
    }

    // Update active zombies
    for (let i = this.zombies.length - 1; i >= 0; i--) {
      const zombie = this.zombies[i];
      zombie.update(delta, this.player, environment);

      if (!zombie.isAlive && zombie.deathTimer > 1.2) {
        this.totalZombiesKilled++;
        this.zombies.splice(i, 1);
        if (this.onWaveChange) {
          this.onWaveChange(this.currentWave, this.getRemainingCount());
        }
      }
    }

    // Wave state checks
    const remainingInWave = this.getRemainingCount();

    if (this.state === WAVE_STATE.ACTIVE) {
      if (remainingInWave === 0) {
        if (this.currentWave >= this.maxWaves) {
          this.state = WAVE_STATE.VICTORY;
          if (this.onVictory) {
            this.onVictory({
              wavesSurvived: this.maxWaves,
              zombiesKilled: this.totalZombiesKilled,
              timeSurvived: this.formatTime(this.survivedSeconds),
              difficulty: this.difficulty.name
            });
          }
        } else {
          this.state = WAVE_STATE.BREATHER;
          this.breatherTimer = 999; // Paused until narrative interaction finishes
          if (this.onWaveBanner) {
            this.onWaveBanner('WAVE CLEARED', 'Tactical Intel Incoming...');
          }
          if (this.onWaveCleared) {
            this.isStoryPaused = true;
            this.onWaveCleared(this.currentWave);
          } else {
            this.resumeBreatherAfterStory();
          }
        }
      }
    } else if (this.state === WAVE_STATE.BREATHER) {
      this.breatherTimer -= delta;
      if (this.breatherTimer <= 0) {
        this.state = WAVE_STATE.ACTIVE;
        this.startWave(this.currentWave + 1);
      }
    }
  }

  resumeBreatherAfterStory() {
    this.isStoryPaused = false;
    this.breatherTimer = 2.5; // Smooth 2.5s breather countdown before next wave
    if (this.onWaveBanner) {
      this.onWaveBanner('INCOMING WAVE', `Next attack starting soon...`);
    }
  }

  getRemainingCount() {
    let alive = 0;
    for (let i = 0; i < this.zombies.length; i++) {
      if (this.zombies[i].isAlive) alive++;
    }
    return alive + this.pendingWaveSpawns;
  }

  getActiveZombies() {
    this._activeZombiesCache.length = 0;
    for (let i = 0; i < this.zombies.length; i++) {
      if (this.zombies[i].isAlive) {
        this._activeZombiesCache.push(this.zombies[i]);
      }
    }
    return this._activeZombiesCache;
  }

  formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = Math.floor(totalSec % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  cleanup() {
    this.zombies.forEach(z => z.destroy());
    this.zombies = [];
    this.pendingWaveSpawns = 0;
  }
}
