// testShooter.js - Headless simulation test of Shooter mechanics
import * as THREE from 'three';
import { Player } from './src/shooter/player.js';
import { Zombie, ZOMBIE_STATE } from './src/shooter/zombie.js';
import { WaveManager, WAVE_STATE } from './src/shooter/waveManager.js';
import { InputManager } from './src/shooter/input.js';

console.log('=== STARTING SHOOTER MECHANICS VALIDATION ===');

// Mock scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);

// Initialize player
const player = new Player(scene, camera);
console.log('1. Player Initialized: HP =', player.health, 'Ammo =', `${player.magazine}/${player.reserveAmmo}`);

// Test Gunshot & Ammo consumption
player.tryShoot([]);
console.log('2. After 1 Shot: Magazine =', player.magazine);
if (player.magazine !== 29) throw new Error('Gunshot did not decrement magazine!');

// Empty magazine
player.magazine = 0;
player.tryShoot([]);
console.log('3. Empty Magazine Dry Fire: Magazine remains', player.magazine);
if (player.magazine !== 0) throw new Error('Empty mag error!');

// Test Reload logic
player.startReload();
console.log('4. Reload Started: isReloading =', player.isReloading, 'Timer =', player.reloadTimer);
if (!player.isReloading) throw new Error('Reload failed to start!');

// Try shooting during reload (must be blocked)
player.magazine = 5;
player.tryShoot([]);
if (player.magazine !== 5) throw new Error('Shooting allowed during reload!');
console.log('5. Firing while reloading: Correctly blocked!');

// Finish reload
player.magazine = 0;
player.finishReload();
console.log('6. Reload Finished: Magazine =', player.magazine, 'Reserve =', player.reserveAmmo);
if (player.magazine !== 30 || player.reserveAmmo !== 90) throw new Error('Reload ammo pool math incorrect!');

// Test Zombie State Machine
const spawnPos = new THREE.Vector3(15, 0, 15);
const zombie = new Zombie(scene, spawnPos);
console.log('\n7. Zombie Spawned: State =', zombie.state, 'HP =', zombie.health);
if (zombie.state !== ZOMBIE_STATE.IDLE) throw new Error('Zombie should start in IDLE state!');

// Update zombie (player within detection radius 40)
zombie.update(0.1, player);
console.log('8. Zombie detects player at dist ~21: State =', zombie.state);
if (zombie.state !== ZOMBIE_STATE.CHASE) throw new Error('Zombie should transition to CHASE!');

// Move zombie to contact range
zombie.mesh.position.set(0, 0, 1.2);
zombie.update(0.1, player);
console.log('9. Zombie in contact range (1.2m): State =', zombie.state);
if (zombie.state !== ZOMBIE_STATE.ATTACK) throw new Error('Zombie should transition to ATTACK!');

// Test Zombie Stagger on hit
zombie.takeDamage(34, new THREE.Vector3(0, 1, 1.2));
console.log('10. Zombie shot (damage 34): State =', zombie.state, 'HP =', zombie.health);
if (zombie.state !== ZOMBIE_STATE.STAGGER || zombie.health !== 66) throw new Error('Zombie stagger or damage failed!');

// Kill zombie
zombie.takeDamage(70, new THREE.Vector3(0, 1, 1.2));
console.log('11. Zombie fatal hit: State =', zombie.state, 'isAlive =', zombie.isAlive);
if (zombie.state !== ZOMBIE_STATE.DEAD || zombie.isAlive) throw new Error('Zombie death failed!');

// Test Wave progression
const waveManager = new WaveManager(scene, player);
waveManager.start();
console.log('\n12. Wave Manager Started: Wave =', waveManager.currentWave, 'Zombies spawned =', waveManager.zombies.length);
if (waveManager.zombies.length !== 5) throw new Error('Wave 1 should spawn 5 zombies!');

// Simulate clearing wave 1
waveManager.zombies.forEach(z => { z.health = 0; z.isAlive = false; z.deathTimer = 2.0; });
waveManager.update(0.1);
console.log('13. Wave 1 Cleared: State =', waveManager.state);
if (waveManager.state !== WAVE_STATE.BREATHER) throw new Error('Should enter BREATHER state!');

console.log('\n=== ALL SHOOTER MECHANICS VALIDATED SUCCESSFULLY ===');
