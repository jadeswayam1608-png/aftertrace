// src/shooter/progression.js - Real, Persistent XP & Level Progression System
import {
  ZOMBIE_XP_REWARDS,
  LEVEL_THRESHOLDS,
  WEAPON_UNLOCKS,
  getXPRequiredForLevel,
  getLevelFromXP,
  getLevelProgress
} from '../data/progressionConfig.js';

const STORAGE_KEY = 'zombieGameProgress';

const DEFAULT_STATE = {
  version: 1,
  totalXP: 0,
  level: 1,
  unlockedWeapons: ['pistol'],
  currentWeapon: 'pistol',
  stats: {
    kills: 0,
    headshots: 0,
    bossKills: 0,
    wavesCompleted: 0
  }
};

export class ProgressionManager {
  constructor() {
    this.state = this.loadState();
    this.listeners = {
      xpAdded: [],
      levelUp: [],
      weaponUnlocked: [],
      progressReset: []
    };

    // Ensure state consistency
    this.reconcileLevelAndWeapons();

    // Expose debug tools to global scope for developer evaluation
    if (typeof window !== 'undefined') {
      window.gameProgression = this;
      window.gameDebug = {
        addXP: (amount = 100) => this.debugAddXP(amount),
        levelUp: () => this.debugLevelUp(),
        unlockWeapon: (weaponId) => this.debugUnlockWeapon(weaponId),
        unlockAllWeapons: () => this.debugUnlockAllWeapons(),
        resetProgress: () => this.resetProgress(),
        getProgress: () => this.getProgressSummary()
      };
    }
  }

  // Load and validate progression state from localStorage
  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE, unlockedWeapons: [...DEFAULT_STATE.unlockedWeapons], stats: { ...DEFAULT_STATE.stats } };
      
      const parsed = JSON.parse(raw);
      if (typeof parsed !== 'object' || parsed === null) {
        return { ...DEFAULT_STATE, unlockedWeapons: [...DEFAULT_STATE.unlockedWeapons], stats: { ...DEFAULT_STATE.stats } };
      }

      const totalXP = Math.max(0, Number(parsed.totalXP) || 0);
      const calculatedLevel = getLevelFromXP(totalXP);
      const unlockedWeapons = Array.isArray(parsed.unlockedWeapons) && parsed.unlockedWeapons.length > 0
        ? [...new Set(parsed.unlockedWeapons)]
        : ['pistol'];

      // Always ensure starter pistol is unlocked
      if (!unlockedWeapons.includes('pistol')) {
        unlockedWeapons.unshift('pistol');
      }

      return {
        version: 1,
        totalXP,
        level: calculatedLevel,
        unlockedWeapons,
        currentWeapon: parsed.currentWeapon || 'pistol',
        stats: {
          kills: Number(parsed.stats?.kills) || 0,
          headshots: Number(parsed.stats?.headshots) || 0,
          bossKills: Number(parsed.stats?.bossKills) || 0,
          wavesCompleted: Number(parsed.stats?.wavesCompleted) || 0
        }
      };
    } catch (e) {
      console.warn('[ProgressionManager] Failed to load progress from localStorage, using defaults:', e);
      return { ...DEFAULT_STATE, unlockedWeapons: [...DEFAULT_STATE.unlockedWeapons], stats: { ...DEFAULT_STATE.stats } };
    }
  }

  // Persist state safely to localStorage
  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('[ProgressionManager] Failed to save progress to localStorage:', e);
    }
  }

  // Ensure unlocked weapons reflect current level
  reconcileLevelAndWeapons() {
    const currentLevel = getLevelFromXP(this.state.totalXP);
    this.state.level = currentLevel;

    // Check unlocks up to current level
    for (let lvl = 1; lvl <= currentLevel; lvl++) {
      const unlock = WEAPON_UNLOCKS[lvl];
      if (unlock && !this.state.unlockedWeapons.includes(unlock.id)) {
        this.state.unlockedWeapons.push(unlock.id);
      }
    }

    this.saveState();
  }

  // Award XP strictly on confirmed events (e.g. Zombie kill upon death)
  addXP(amount, metadata = {}) {
    const safeAmount = Math.max(0, Math.floor(Number(amount) || 0));
    if (safeAmount <= 0) return null;

    const oldTotalXP = this.state.totalXP;
    const oldLevel = getLevelFromXP(oldTotalXP);

    this.state.totalXP += safeAmount;
    const newLevel = getLevelFromXP(this.state.totalXP);
    this.state.level = newLevel;

    // Record stats
    if (metadata.isKill) {
      this.state.stats.kills++;
      if (metadata.isBoss) this.state.stats.bossKills++;
      if (metadata.isHeadshot) this.state.stats.headshots++;
    }

    const progress = getLevelProgress(this.state.totalXP);

    // Check for level ups (supports multi-level jumps with zero loss)
    const newlyUnlockedWeapons = [];
    if (newLevel > oldLevel) {
      for (let lvl = oldLevel + 1; lvl <= newLevel; lvl++) {
        const unlock = WEAPON_UNLOCKS[lvl];
        if (unlock && !this.state.unlockedWeapons.includes(unlock.id)) {
          this.state.unlockedWeapons.push(unlock.id);
          newlyUnlockedWeapons.push(unlock);
          this.emit('weaponUnlocked', { weapon: unlock, level: lvl });
        }
      }

      this.emit('levelUp', {
        oldLevel,
        newLevel,
        totalXP: this.state.totalXP,
        unlockedWeapons: newlyUnlockedWeapons,
        progress
      });
    }

    this.emit('xpAdded', {
      amount: safeAmount,
      totalXP: this.state.totalXP,
      progress,
      metadata
    });

    this.saveState();

    return {
      addedXP: safeAmount,
      totalXP: this.state.totalXP,
      level: newLevel,
      leveledUp: newLevel > oldLevel,
      newWeapons: newlyUnlockedWeapons,
      progress
    };
  }

  // Record zombie kill and return awarded XP
  awardZombieKill(zombieType, isBoss = false, isHeadshot = false) {
    const baseReward = ZOMBIE_XP_REWARDS[zombieType] || (isBoss ? 300 : 25);
    const xp = isHeadshot ? Math.round(baseReward * 1.25) : baseReward;

    return this.addXP(xp, {
      isKill: true,
      zombieType,
      isBoss,
      isHeadshot
    });
  }

  // Query progression info
  getProgress() {
    return getLevelProgress(this.state.totalXP);
  }

  getLevel() {
    return this.state.level;
  }

  getTotalXP() {
    return this.state.totalXP;
  }

  isWeaponUnlocked(weaponId) {
    return this.state.unlockedWeapons.includes(weaponId);
  }

  getUnlockedWeapons() {
    return [...this.state.unlockedWeapons];
  }

  setCurrentWeapon(weaponId) {
    if (this.isWeaponUnlocked(weaponId)) {
      this.state.currentWeapon = weaponId;
      this.saveState();
      return true;
    }
    return false;
  }

  getCurrentWeapon() {
    return this.state.currentWeapon;
  }

  getStats() {
    return { ...this.state.stats };
  }

  // Reset progress back to initial Level 1
  resetProgress() {
    this.state = {
      version: 1,
      totalXP: 0,
      level: 1,
      unlockedWeapons: ['pistol'],
      currentWeapon: 'pistol',
      stats: {
        kills: 0,
        headshots: 0,
        bossKills: 0,
        wavesCompleted: 0
      }
    };
    this.saveState();
    this.emit('progressReset', this.state);
    return this.getProgressSummary();
  }

  // Event listener subscription
  on(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    }
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => {
        try {
          cb(data);
        } catch (e) {
          console.error(`[ProgressionManager] Error in listener for "${event}":`, e);
        }
      });
    }
  }

  // Developer Debug Tools
  debugAddXP(amount = 100) {
    console.log(`[Debug Progression] Adding ${amount} XP`);
    return this.addXP(amount, { isDebug: true });
  }

  debugLevelUp() {
    const nextLevel = this.state.level + 1;
    const targetXP = getXPRequiredForLevel(nextLevel);
    const needed = Math.max(10, targetXP - this.state.totalXP);
    console.log(`[Debug Progression] Level up triggered, granting ${needed} XP to reach Level ${nextLevel}`);
    return this.addXP(needed, { isDebug: true });
  }

  debugUnlockWeapon(weaponId) {
    if (!this.state.unlockedWeapons.includes(weaponId)) {
      this.state.unlockedWeapons.push(weaponId);
      this.saveState();
      this.emit('weaponUnlocked', { weapon: { id: weaponId, name: weaponId.toUpperCase() }, level: this.state.level });
      console.log(`[Debug Progression] Unlocked weapon: ${weaponId}`);
    }
  }

  debugUnlockAllWeapons() {
    const all = ['pistol', 'smg', 'shotgun', 'rifle', 'sniper'];
    all.forEach(w => {
      if (!this.state.unlockedWeapons.includes(w)) {
        this.state.unlockedWeapons.push(w);
      }
    });
    this.saveState();
    console.log('[Debug Progression] All weapons unlocked.');
  }

  getProgressSummary() {
    const p = this.getProgress();
    return {
      level: p.level,
      totalXP: p.totalXP,
      currentXP: p.currentXP,
      xpNeeded: p.xpNeeded,
      progressPct: p.progressPct + '%',
      unlockedWeapons: this.state.unlockedWeapons,
      kills: this.state.stats.kills
    };
  }
}

export const progressionManager = new ProgressionManager();
