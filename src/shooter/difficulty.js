// src/shooter/difficulty.js - Difficulty modes & configuration presets

export const DIFFICULTY_PRESETS = {
  easy: {
    id: 'easy',
    name: 'Casual Survivor',
    label: '[ EASY ]',
    description: 'Slower zombies, weaker hordes, high player endurance. Perfect for relaxed shooting.',
    // Zombie stats
    zombieSpeedMultiplier: 0.6, // 40% slower than default (2.64 u/s)
    zombieHealth: 35, // Low: 1-2 shots to kill
    zombieAttackDamage: 8, // ~50% damage reduction from zombie attacks
    maxActiveZombies: 5, // max 5 at once
    spawnInterval: 5.0, // 1 zombie every 5 seconds
    waveCounts: [4, 6, 8, 10, 14],
    // Player stats
    playerHealth: 150, // 150 HP
    damageReduction: 0.5, // 50% damage reduction
    magSize: 60,
    startingMag: 60,
    startingReserve: 240, // 60 in mag, 240 reserve
    ammoRespawnTime: 8.0 // frequent ammo crate drops
  },
  medium: {
    id: 'medium',
    name: 'Balanced',
    label: '[ MEDIUM ]',
    description: 'Classic zombie wave survival. Requires good aim and movement.',
    // Zombie stats
    zombieSpeedMultiplier: 1.0, // normal 4.4 u/s
    zombieHealth: 70, // 2-3 shots to kill
    zombieAttackDamage: 15,
    maxActiveZombies: 10, // max 10 at once
    spawnInterval: 3.0, // 1 every 3 seconds
    waveCounts: [5, 8, 12, 16, 22],
    // Player stats
    playerHealth: 100, // 100 HP
    damageReduction: 1.0,
    magSize: 30,
    startingMag: 30,
    startingReserve: 120, // 30 in mag, 120 reserve
    ammoRespawnTime: 14.0 // normal crate drops
  },
  hard: {
    id: 'hard',
    name: 'Nightmare',
    label: '[ HARD ]',
    description: 'Relentless sprinting hordes, high lethal damage, scarce ammo. Only for veteran survivors.',
    // Zombie stats
    zombieSpeedMultiplier: 1.95, // ~8.6 u/s (15% faster than player 7.5 u/s)
    zombieHealth: 110, // 4 shots to kill
    zombieAttackDamage: 25, // zombies deal 25 damage per hit (3-4 hits to die)
    maxActiveZombies: 18, // max 18 at once
    spawnInterval: 2.0, // intense horde: spawns every 2 seconds
    waveCounts: [8, 14, 20, 26, 34],
    // Player stats
    playerHealth: 80, // 80 HP
    damageReduction: 1.0,
    magSize: 30,
    startingMag: 30,
    startingReserve: 90, // starts with 30 in mag, 90 reserve
    ammoRespawnTime: 24.0 // scarce ammo drops
  }
};
