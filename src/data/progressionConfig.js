// src/data/progressionConfig.js - Centralized XP, Level, and Weapon progression configuration

export const ZOMBIE_XP_REWARDS = {
  normal: 25,
  fast: 40,
  heavy: 75,
  elite: 125,
  boss: 300
};

// Preferred level thresholds from Level 1 (0 XP) to Level 10 (2700 XP)
export const LEVEL_THRESHOLDS = [
  0,    // Level 1: 0 XP
  100,  // Level 2: 100 XP
  250,  // Level 3: 250 XP
  450,  // Level 4: 450 XP
  700,  // Level 5: 700 XP
  1000, // Level 6: 1000 XP
  1350, // Level 7: 1350 XP
  1750, // Level 8: 1750 XP
  2200, // Level 9: 2200 XP
  2700  // Level 10: 2700 XP
];

// Weapon unlock mapping per level
export const WEAPON_UNLOCKS = {
  1: { id: 'pistol', name: 'M9 TACTICAL', label: 'Starter Pistol', icon: '🔫', description: 'Standard tactical sidearm' },
  2: { id: 'smg', name: 'MP5 TACTICAL', label: 'SMG', icon: '⚡', description: 'Rapid-fire tactical submachine gun' },
  3: { id: 'shotgun', name: 'TRENCH 12G', label: 'Shotgun', icon: '💥', description: 'Devastating close-quarters scattergun' },
  4: { id: 'rifle', name: 'M4A1 ASSAULT', label: 'Assault Rifle', icon: '🎯', description: 'Versatile automatic combat rifle' },
  5: { id: 'sniper', name: 'M24 TACTICAL', label: 'Sniper Rifle', icon: '🔭', description: 'High-caliber extreme range rifle' }
};

// Calculate total XP required to reach a specific level (scalable beyond Level 10)
export function getXPRequiredForLevel(level) {
  if (level <= 1) return 0;
  if (level <= LEVEL_THRESHOLDS.length) {
    return LEVEL_THRESHOLDS[level - 1];
  }
  // Formula for levels beyond 10: Threshold(L) = 25 * L * (L + 1) - 50
  return 25 * level * (level + 1) - 50;
}

// Calculate the player's level from their total accumulated XP
export function getLevelFromXP(totalXP) {
  const safeXP = Math.max(0, Number(totalXP) || 0);
  let lvl = 1;
  while (safeXP >= getXPRequiredForLevel(lvl + 1)) {
    lvl++;
  }
  return lvl;
}

// Calculate current level progress: current XP within level, XP needed for next level, and percentage
export function getLevelProgress(totalXP) {
  const safeXP = Math.max(0, Number(totalXP) || 0);
  const currentLevel = getLevelFromXP(safeXP);
  const currentLevelFloor = getXPRequiredForLevel(currentLevel);
  const nextLevelCeiling = getXPRequiredForLevel(currentLevel + 1);

  const currentXP = safeXP - currentLevelFloor;
  const xpNeeded = nextLevelCeiling - currentLevelFloor;
  const progressPct = Math.min(100, Math.max(0, (currentXP / xpNeeded) * 100));

  return {
    level: currentLevel,
    totalXP: safeXP,
    currentXP,
    xpNeeded,
    progressPct: Math.round(progressPct * 10) / 10
  };
}
