// src/shooter/weapons.js - Weapons Arsenal: realistic relative proportions, 3D meshes, and switching mechanics
import * as THREE from 'three';

export const WEAPON_TYPES = {
  PISTOL: 'pistol',
  SHOTGUN: 'shotgun',
  RIFLE: 'rifle',
  SMG: 'smg',
  SNIPER: 'sniper'
};

export const WEAPONS = {
  [WEAPON_TYPES.PISTOL]: {
    id: WEAPON_TYPES.PISTOL,
    name: 'M9 TACTICAL',
    type: 'Pistol',
    damage: 38,
    fireRate: 0.20,
    magSize: 15,
    defaultReserve: 90,
    reloadTime: 1.3,
    range: 45,
    pellets: 1,
    spread: 0.012,
    recoilKick: 0.05,
    sound: 'pistol',
    icon: '🔫',
    description: 'Compact 9mm tactical sidearm. High mobility and fast reload.'
  },
  [WEAPON_TYPES.SHOTGUN]: {
    id: WEAPON_TYPES.SHOTGUN,
    name: 'TRENCH 12G',
    type: 'Shotgun',
    damage: 24,
    fireRate: 0.85,
    magSize: 8,
    defaultReserve: 48,
    reloadTime: 2.2,
    range: 22,
    pellets: 8,
    spread: 0.085,
    recoilKick: 0.16,
    sound: 'shotgun',
    icon: '💥',
    description: 'Devastating close-range pump shotgun. Fires 8 high-impact pellets.'
  },
  [WEAPON_TYPES.RIFLE]: {
    id: WEAPON_TYPES.RIFLE,
    name: 'M4A1 ASSAULT',
    type: 'Assault Rifle',
    damage: 34,
    fireRate: 0.11,
    magSize: 30,
    defaultReserve: 120,
    reloadTime: 2.0,
    range: 65,
    pellets: 1,
    spread: 0.024,
    recoilKick: 0.07,
    sound: 'rifle',
    icon: '⚡',
    description: 'Versatile military assault rifle. Rapid fully-automatic fire.'
  },
  [WEAPON_TYPES.SMG]: {
    id: WEAPON_TYPES.SMG,
    name: 'MP5 SUBMACHINE',
    type: 'SMG',
    damage: 22,
    fireRate: 0.080,
    magSize: 35,
    defaultReserve: 140,
    reloadTime: 1.5,
    range: 36,
    pellets: 1,
    spread: 0.038,
    recoilKick: 0.045,
    sound: 'smg',
    icon: '🌪️',
    description: 'High rate-of-fire tactical submachine gun with swift handling.'
  },
  [WEAPON_TYPES.SNIPER]: {
    id: WEAPON_TYPES.SNIPER,
    name: 'AWP MARKSMAN',
    type: 'Sniper Rifle',
    damage: 140,
    fireRate: 1.20,
    magSize: 5,
    defaultReserve: 30,
    reloadTime: 2.5,
    range: 120,
    pellets: 1,
    spread: 0.0015,
    recoilKick: 0.22,
    sound: 'sniper',
    icon: '🎯',
    description: 'Heavy bolt-action marksman rifle with high-magnification scope. Lethal power.'
  }
};

export const WEAPON_LIST = [
  WEAPONS[WEAPON_TYPES.RIFLE],
  WEAPONS[WEAPON_TYPES.PISTOL],
  WEAPONS[WEAPON_TYPES.SHOTGUN],
  WEAPONS[WEAPON_TYPES.SMG],
  WEAPONS[WEAPON_TYPES.SNIPER]
];

// ─── 3D Procedural Weapon Meshes (Handcrafted with Realistic Proportions & Right-Hand Palm Alignment) ───
// In Right-Hand Socket: (0, 0, 0) is palm center. -Z is barrel forward (aim direction). +Z is stock. +Y is sights.
export function create3DWeaponMesh(weaponId) {
  const group = new THREE.Group();
  group.name = `weapon-${weaponId}`;

  // High-performance shared materials
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x181A1D, roughness: 0.35, metalness: 0.85 });
  const gunMetal = new THREE.MeshStandardMaterial({ color: 0x2C3035, roughness: 0.40, metalness: 0.78 });
  const polymerMat = new THREE.MeshStandardMaterial({ color: 0x141618, roughness: 0.75, metalness: 0.15 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x5C3826, roughness: 0.78, metalness: 0.08 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x224455, roughness: 0.1, metalness: 0.95 });
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, roughness: 0.3, metalness: 0.9 });

  switch (weaponId) {
    case WEAPON_TYPES.PISTOL: {
      // 1. Pistol (M9 Tactical 9mm) ~ 22cm total length
      // Grip (rests right inside the palm)
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.13, 0.065), polymerMat);
      grip.position.set(0, -0.05, 0.015);
      grip.rotation.x = -0.18;
      group.add(grip);

      // Trigger guard
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.045, 0.055), darkMetal);
      guard.position.set(0, -0.01, -0.038);
      group.add(guard);

      // Slide & Frame (length 0.20m, pointing along -Z)
      const slide = new THREE.Mesh(new THREE.BoxGeometry(0.050, 0.065, 0.20), gunMetal);
      slide.position.set(0, 0.04, -0.05);
      slide.castShadow = true;
      group.add(slide);

      // Barrel Tip
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.06, 8), darkMetal);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.04, -0.16);
      group.add(barrel);

      // Front & Rear Sights
      const rearSight = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.016, 0.016), darkMetal);
      rearSight.position.set(0, 0.078, 0.04);
      group.add(rearSight);

      const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.016, 0.016), darkMetal);
      frontSight.position.set(0, 0.078, -0.14);
      group.add(frontSight);
      break;
    }

    case WEAPON_TYPES.SMG: {
      // 2. SMG (MP5 Tactical) ~ 50cm total length
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.13, 0.07), polymerMat);
      grip.position.set(0, -0.05, 0.015);
      grip.rotation.x = -0.20;
      group.add(grip);

      // Receiver
      const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.060, 0.085, 0.26), gunMetal);
      receiver.position.set(0, 0.03, -0.06);
      receiver.castShadow = true;
      group.add(receiver);

      // Curved 9mm Magazine
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.18, 0.065), polymerMat);
      mag.position.set(0, -0.09, -0.13);
      mag.rotation.x = -0.22;
      group.add(mag);

      // Vented Ribbed Handguard
      const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.058, 0.075, 0.16), polymerMat);
      handguard.position.set(0, 0.015, -0.25);
      group.add(handguard);

      // Barrel & 3-lug flash hider
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.22, 8), darkMetal);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.03, -0.32);
      group.add(barrel);

      const hider = new THREE.Mesh(new THREE.CylinderGeometry(0.020, 0.016, 0.06, 6), darkMetal);
      hider.rotation.x = Math.PI / 2;
      hider.position.set(0, 0.03, -0.44);
      group.add(hider);

      // Retractable Wire Stock (+Z towards shoulder)
      const stockRodR = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.22, 6), darkMetal);
      stockRodR.rotation.x = Math.PI / 2;
      stockRodR.position.set(0.032, 0.015, 0.14);
      group.add(stockRodR);

      const stockRodL = stockRodR.clone();
      stockRodL.position.x = -0.032;
      group.add(stockRodL);

      const buttPlate = new THREE.Mesh(new THREE.BoxGeometry(0.070, 0.10, 0.025), polymerMat);
      buttPlate.position.set(0, 0.01, 0.25);
      group.add(buttPlate);
      break;
    }

    case WEAPON_TYPES.RIFLE: {
      // 3. Assault Rifle (M4A1 Carbine) ~ 78cm total length
      // Ergonomic Pistol Grip
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.14, 0.072), polymerMat);
      grip.position.set(0, -0.05, 0.015);
      grip.rotation.x = -0.22;
      group.add(grip);

      // Lower & Upper Receiver
      const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.10, 0.28), gunMetal);
      receiver.position.set(0, 0.03, -0.05);
      receiver.castShadow = true;
      group.add(receiver);

      // STANAG 30-round curved Magazine
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.20, 0.09), darkMetal);
      mag.position.set(0, -0.11, -0.11);
      mag.rotation.x = -0.16;
      group.add(mag);

      // Quad-Rail Handguard
      const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.060, 0.075, 0.24), polymerMat);
      handguard.position.set(0, 0.03, -0.28);
      handguard.castShadow = true;
      group.add(handguard);

      // Barrel & Birdcage Flash Hider
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.26, 8), darkMetal);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.03, -0.50);
      group.add(barrel);

      const flashHider = new THREE.Mesh(new THREE.CylinderGeometry(0.020, 0.016, 0.06, 6), darkMetal);
      flashHider.rotation.x = Math.PI / 2;
      flashHider.position.set(0, 0.03, -0.64);
      group.add(flashHider);

      // Buffer Tube & Collapsible Stock (+Z toward shoulder)
      const bufferTube = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.18, 8), darkMetal);
      bufferTube.rotation.x = Math.PI / 2;
      bufferTube.position.set(0, 0.03, 0.14);
      group.add(bufferTube);

      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.060, 0.12, 0.18), polymerMat);
      stock.position.set(0, 0.01, 0.21);
      stock.castShadow = true;
      group.add(stock);

      // Red Dot Holographic Sight
      const opticBase = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.022, 0.10), darkMetal);
      opticBase.position.set(0, 0.09, -0.05);
      group.add(opticBase);

      const opticHood = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.05, 0.08), darkMetal);
      opticHood.position.set(0, 0.12, -0.05);
      group.add(opticHood);

      const dotGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.032, 0.038), glassMat);
      dotGlass.position.set(0, 0.12, -0.091);
      group.add(dotGlass);
      break;
    }

    case WEAPON_TYPES.SHOTGUN: {
      // 4. Shotgun (Trench 12G Pump) ~ 92cm total length
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.13, 0.08), woodMat);
      grip.position.set(0, -0.05, 0.02);
      grip.rotation.x = -0.28;
      group.add(grip);

      // Solid Wood Buttstock (+Z to shoulder)
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.12, 0.32), woodMat);
      stock.position.set(0, -0.01, 0.24);
      stock.rotation.x = 0.10;
      stock.castShadow = true;
      group.add(stock);

      // Steel Receiver
      const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.070, 0.10, 0.25), darkMetal);
      receiver.position.set(0, 0.03, -0.05);
      receiver.castShadow = true;
      group.add(receiver);

      // 12-Gauge Barrel
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.020, 0.020, 0.58, 8), gunMetal);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.05, -0.44);
      barrel.castShadow = true;
      group.add(barrel);

      // Magazine Tube & Wooden Pump Slide
      const magTube = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.48, 8), darkMetal);
      magTube.rotation.x = Math.PI / 2;
      magTube.position.set(0, 0.01, -0.38);
      group.add(magTube);

      const pump = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.18, 8), woodMat);
      pump.rotation.x = Math.PI / 2;
      pump.position.set(0, 0.012, -0.32);
      group.add(pump);
      break;
    }

    case WEAPON_TYPES.SNIPER: {
      // 5. Sniper Rifle (AWP Marksman) ~ 118cm total length
      // Heavy Tactical Chassis & Grip
      const chassisMat = new THREE.MeshStandardMaterial({ color: 0x2A3B30, roughness: 0.65, metalness: 0.25 });
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.068, 0.12, 0.55), chassisMat);
      chassis.position.set(0, -0.01, 0.10);
      chassis.castShadow = true;
      group.add(chassis);

      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.050, 0.14, 0.08), polymerMat);
      grip.position.set(0, -0.06, 0.015);
      grip.rotation.x = -0.24;
      group.add(grip);

      // Long Fluted Bull Barrel & Muzzle Brake
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.020, 0.016, 0.78, 8), darkMetal);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.04, -0.56);
      barrel.castShadow = true;
      group.add(barrel);

      const brake = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.038, 0.08), darkMetal);
      brake.position.set(0, 0.04, -0.96);
      group.add(brake);

      // Elevated Long-Range Sniper Scope
      const scopeTube = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.32, 8), darkMetal);
      scopeTube.rotation.x = Math.PI / 2;
      scopeTube.position.set(0, 0.12, -0.08);
      group.add(scopeTube);

      const frontBell = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.020, 0.09, 8), darkMetal);
      frontBell.rotation.x = Math.PI / 2;
      frontBell.position.set(0, 0.12, -0.27);
      group.add(frontBell);

      const rearBell = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.018, 0.07, 8), darkMetal);
      rearBell.rotation.x = Math.PI / 2;
      rearBell.position.set(0, 0.12, 0.09);
      group.add(rearBell);

      // Bolt Action Lever
      const boltArm = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.07, 6), brassMat);
      boltArm.position.set(0.05, 0.05, 0.05);
      boltArm.rotation.z = Math.PI / 3;
      group.add(boltArm);

      // Box Magazine
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.13, 0.10), darkMetal);
      mag.position.set(0, -0.08, -0.12);
      group.add(mag);
      break;
    }
  }

  return group;
}
