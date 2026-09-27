// src/shooter/characterModel.js - Modular 3D Characters, Right-Hand Weapon Attachment, Fast Hit Colliders & Performance Optimization
import * as THREE from 'three';
import { create3DWeaponMesh, WEAPON_TYPES, WEAPON_LIST } from './weapons.js';

// ─── SHARED ZOMBIE GEOMETRIES (Created once, reused across all zombies for 60+ FPS) ───
let _zGeos = null;
function getZombieSharedGeometries() {
  if (!_zGeos) {
    _zGeos = {
      upperChest: new THREE.BoxGeometry(0.50, 0.38, 0.26),
      clavicle: new THREE.BoxGeometry(0.20, 0.04, 0.04),
      rib0: new THREE.BoxGeometry(0.44, 0.045, 0.05),
      rib1: new THREE.BoxGeometry(0.40, 0.045, 0.05),
      rib2: new THREE.BoxGeometry(0.36, 0.045, 0.05),
      sunkenStomach: new THREE.BoxGeometry(0.38, 0.28, 0.20),
      stomachBruise: new THREE.BoxGeometry(0.22, 0.16, 0.22),
      neck: new THREE.CylinderGeometry(0.085, 0.11, 0.16, 8),
      cranium: new THREE.SphereGeometry(0.18, 8, 6),
      face: new THREE.BoxGeometry(0.28, 0.26, 0.24),
      socket: new THREE.BoxGeometry(0.07, 0.07, 0.05),
      eye: new THREE.SphereGeometry(0.035, 6, 6),
      mouth: new THREE.BoxGeometry(0.18, 0.09, 0.16),
      teethUpper: new THREE.BoxGeometry(0.15, 0.03, 0.04),
      teethLower: new THREE.BoxGeometry(0.14, 0.028, 0.04),
      upperArm: new THREE.CylinderGeometry(0.055, 0.065, 0.38, 7),
      forearm: new THREE.CylinderGeometry(0.048, 0.055, 0.42, 7),
      vein: new THREE.CylinderGeometry(0.008, 0.008, 0.30, 4),
      hand: new THREE.BoxGeometry(0.11, 0.09, 0.14),
      claw: new THREE.CylinderGeometry(0.008, 0.015, 0.14, 5),
      pelvis: new THREE.BoxGeometry(0.46, 0.18, 0.28),
      button: new THREE.CylinderGeometry(0.02, 0.02, 0.02, 6),
      pants: new THREE.BoxGeometry(0.20, 0.72, 0.22),
      foot: new THREE.BoxGeometry(0.13, 0.10, 0.26),
      toe: new THREE.BoxGeometry(0.025, 0.04, 0.06),
      // Ultra-fast hit collider cylinder (covers full height of zombie)
      hitCollider: new THREE.CylinderGeometry(0.50, 0.50, 1.90, 8)
    };
  }
  return _zGeos;
}

// Shared constant materials
let _zConstMats = null;
function getZombieSharedConstantMats() {
  if (!_zConstMats) {
    _zConstMats = {
      vein: new THREE.MeshStandardMaterial({ color: 0x38453D, roughness: 0.85, metalness: 0.1 }),
      woundedFlesh: new THREE.MeshStandardMaterial({ color: 0x5C1818, roughness: 0.65, metalness: 0.12 }),
      eye: new THREE.MeshStandardMaterial({ color: 0xFFE082, emissive: 0xFFA000, emissiveIntensity: 1.8, roughness: 0.2 }),
      teeth: new THREE.MeshStandardMaterial({ color: 0xDDD8B8, roughness: 0.55 }),
      hitCollider: new THREE.MeshBasicMaterial({ visible: false })
    };
  }
  return _zConstMats;
}

// ─── Reference-Accurate 3D Zombie Model (Matching media_1790502910366.png) ───
// Bare-chested emaciated build, visible ribcage, sunken stomach, bald sunken skull, glowing eyes,
// open snarling rotting teeth, dark pleated trousers, bare gaunt feet, long claw arms.
export function createProceduralZombie(options = {}) {
  const G = getZombieSharedGeometries();
  const C = getZombieSharedConstantMats();

  const root = new THREE.Group();
  root.name = 'procedural-zombie';

  const skinTones = [0x5E6B5A, 0x546252, 0x667262, 0x4D5A4B, 0x6E7B6C];
  const trouserColors = [0x2A2724, 0x332E29, 0x242426, 0x38332D];

  const skinCol = options.skinColor || skinTones[Math.floor(Math.random() * skinTones.length)];
  const pantsCol = options.pantsColor || trouserColors[Math.floor(Math.random() * trouserColors.length)];

  // Per-instance materials for hit flashes
  const rotSkinMat = new THREE.MeshStandardMaterial({
    color: skinCol,
    roughness: 0.90,
    metalness: 0.05,
    flatShading: true
  });

  const pleatedPantsMat = new THREE.MeshStandardMaterial({
    color: pantsCol,
    roughness: 0.92,
    flatShading: true
  });

  // Dedicated Hit Collider (Single test object for raycasts, 98% faster than traversing submeshes!)
  const hitCollider = new THREE.Mesh(G.hitCollider, C.hitCollider);
  hitCollider.position.set(0, 0.95, 0);
  hitCollider.name = 'zombie-hitbox';
  root.add(hitCollider);
  root.hitCollider = hitCollider;

  // 1. Torso: Gaunt emaciated bare chest with sculpted ribcage & hollow stomach
  const torsoGroup = new THREE.Group();
  torsoGroup.position.set(0, 0.95, 0);
  torsoGroup.rotation.x = 0.20;

  // Upper Chest (only main chest casts shadow to preserve GPU fill rate)
  const upperChest = new THREE.Mesh(G.upperChest, rotSkinMat);
  upperChest.position.y = 0.44;
  upperChest.castShadow = true;
  torsoGroup.add(upperChest);

  // Clavicle Collarbones
  const clavicleL = new THREE.Mesh(G.clavicle, rotSkinMat);
  clavicleL.position.set(-0.12, 0.58, -0.11);
  clavicleL.rotation.z = -0.10;
  torsoGroup.add(clavicleL);

  const clavicleR = new THREE.Mesh(G.clavicle, rotSkinMat);
  clavicleR.position.set(0.12, 0.58, -0.11);
  clavicleR.rotation.z = 0.10;
  torsoGroup.add(clavicleR);

  // Rib cage ridges
  const rib0 = new THREE.Mesh(G.rib0, rotSkinMat);
  rib0.position.set(0, 0.48, -0.12);
  torsoGroup.add(rib0);

  const rib1 = new THREE.Mesh(G.rib1, rotSkinMat);
  rib1.position.set(0, 0.40, -0.12);
  torsoGroup.add(rib1);

  const rib2 = new THREE.Mesh(G.rib2, rotSkinMat);
  rib2.position.set(0, 0.32, -0.12);
  torsoGroup.add(rib2);

  // Sunken Hollow Stomach
  const sunkenStomach = new THREE.Mesh(G.sunkenStomach, rotSkinMat);
  sunkenStomach.position.set(0, 0.16, 0);
  torsoGroup.add(sunkenStomach);

  // Abdomen bruise
  const stomachBruise = new THREE.Mesh(G.stomachBruise, C.woundedFlesh);
  stomachBruise.position.set(0.02, 0.18, -0.01);
  torsoGroup.add(stomachBruise);

  // 2. Head: Bald, gaunt sunken skull, deep dark eye sockets, open snarling rotten teeth
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.68, 0);
  headGroup.rotation.z = -0.09;
  headGroup.rotation.x = 0.08;

  const neck = new THREE.Mesh(G.neck, rotSkinMat);
  neck.position.y = 0.08;
  headGroup.add(neck);

  const cranium = new THREE.Mesh(G.cranium, rotSkinMat);
  cranium.position.set(0, 0.32, -0.02);
  cranium.scale.set(0.9, 1.05, 0.95);
  cranium.castShadow = true;
  headGroup.add(cranium);

  const face = new THREE.Mesh(G.face, rotSkinMat);
  face.position.set(0, 0.22, -0.08);
  headGroup.add(face);

  // Sockets & Glowing eyes
  const socketL = new THREE.Mesh(G.socket, C.woundedFlesh);
  socketL.position.set(-0.075, 0.25, -0.19);
  headGroup.add(socketL);

  const socketR = new THREE.Mesh(G.socket, C.woundedFlesh);
  socketR.position.set(0.075, 0.25, -0.19);
  headGroup.add(socketR);

  const eyeL = new THREE.Mesh(G.eye, C.eye);
  eyeL.position.set(-0.075, 0.25, -0.20);
  headGroup.add(eyeL);

  const eyeR = new THREE.Mesh(G.eye, C.eye);
  eyeR.position.set(0.075, 0.25, -0.20);
  headGroup.add(eyeR);

  const openMouth = new THREE.Mesh(G.mouth, C.woundedFlesh);
  openMouth.position.set(0, 0.12, -0.15);
  openMouth.rotation.x = 0.20;
  headGroup.add(openMouth);

  const upperTeeth = new THREE.Mesh(G.teethUpper, C.teeth);
  upperTeeth.position.set(0, 0.15, -0.21);
  headGroup.add(upperTeeth);

  const lowerTeeth = new THREE.Mesh(G.teethLower, C.teeth);
  lowerTeeth.position.set(0, 0.09, -0.20);
  headGroup.add(lowerTeeth);

  torsoGroup.add(headGroup);

  // 3. Outstretched Long Claw Arms
  const leftArmPivot = new THREE.Group();
  leftArmPivot.position.set(-0.32, 0.54, 0);
  leftArmPivot.rotation.x = -1.42;
  leftArmPivot.rotation.y = 0.18;

  const leftUpperArm = new THREE.Mesh(G.upperArm, rotSkinMat);
  leftUpperArm.position.y = -0.19;
  leftArmPivot.add(leftUpperArm);

  const leftForearm = new THREE.Mesh(G.forearm, rotSkinMat);
  leftForearm.position.set(0, -0.52, -0.04);
  leftForearm.rotation.x = -0.15;
  leftArmPivot.add(leftForearm);

  const leftVein = new THREE.Mesh(G.vein, C.vein);
  leftVein.position.set(-0.03, -0.52, -0.08);
  leftArmPivot.add(leftVein);

  const leftHand = new THREE.Mesh(G.hand, rotSkinMat);
  leftHand.position.set(0, -0.74, -0.08);
  leftArmPivot.add(leftHand);

  for (let f = -1.5; f <= 1.5; f += 1.0) {
    const claw = new THREE.Mesh(G.claw, rotSkinMat);
    claw.position.set(f * 0.032, -0.84, -0.12);
    claw.rotation.x = -0.45;
    leftArmPivot.add(claw);
  }
  torsoGroup.add(leftArmPivot);

  // Right Arm
  const rightArmPivot = new THREE.Group();
  rightArmPivot.position.set(0.32, 0.54, 0);
  rightArmPivot.rotation.x = -1.38;
  rightArmPivot.rotation.y = -0.18;

  const rightUpperArm = new THREE.Mesh(G.upperArm, rotSkinMat);
  rightUpperArm.position.y = -0.19;
  rightArmPivot.add(rightUpperArm);

  const rightForearm = new THREE.Mesh(G.forearm, rotSkinMat);
  rightForearm.position.set(0, -0.52, -0.04);
  rightForearm.rotation.x = -0.15;
  rightArmPivot.add(rightForearm);

  const rightVein = new THREE.Mesh(G.vein, C.vein);
  rightVein.position.set(0.03, -0.52, -0.08);
  rightArmPivot.add(rightVein);

  const rightHand = new THREE.Mesh(G.hand, rotSkinMat);
  rightHand.position.set(0, -0.74, -0.08);
  rightArmPivot.add(rightHand);

  for (let f = -1.5; f <= 1.5; f += 1.0) {
    const claw = new THREE.Mesh(G.claw, rotSkinMat);
    claw.position.set(f * 0.032, -0.84, -0.12);
    claw.rotation.x = -0.45;
    rightArmPivot.add(claw);
  }
  torsoGroup.add(rightArmPivot);

  root.add(torsoGroup);

  // 4. Pelvis & Pleated High-Waisted Trousers
  const pelvis = new THREE.Mesh(G.pelvis, pleatedPantsMat);
  pelvis.position.set(0, 0.96, 0);
  root.add(pelvis);

  const button = new THREE.Mesh(G.button, C.teeth);
  button.rotation.x = Math.PI / 2;
  button.position.set(0, 1.02, -0.15);
  root.add(button);

  // Left Leg & Foot
  const leftLegPivot = new THREE.Group();
  leftLegPivot.position.set(-0.14, 0.94, 0);

  const leftPants = new THREE.Mesh(G.pants, pleatedPantsMat);
  leftPants.position.y = -0.36;
  leftPants.castShadow = true;
  leftLegPivot.add(leftPants);

  const leftFoot = new THREE.Mesh(G.foot, rotSkinMat);
  leftFoot.position.set(0, -0.78, -0.05);
  leftLegPivot.add(leftFoot);

  for (let t = -1; t <= 1; t++) {
    const toe = new THREE.Mesh(G.toe, rotSkinMat);
    toe.position.set(t * 0.035, -0.79, -0.19);
    leftLegPivot.add(toe);
  }
  root.add(leftLegPivot);

  // Right Leg & Foot
  const rightLegPivot = new THREE.Group();
  rightLegPivot.position.set(0.14, 0.94, 0);

  const rightPants = new THREE.Mesh(G.pants, pleatedPantsMat);
  rightPants.position.y = -0.36;
  rightPants.castShadow = true;
  rightLegPivot.add(rightPants);

  const rightFoot = new THREE.Mesh(G.foot, rotSkinMat);
  rightFoot.position.set(0, -0.78, -0.05);
  rightLegPivot.add(rightFoot);

  for (let t = -1; t <= 1; t++) {
    const toe = new THREE.Mesh(G.toe, rotSkinMat);
    toe.position.set(t * 0.035, -0.79, -0.19);
    rightLegPivot.add(toe);
  }
  root.add(rightLegPivot);

  const scale = options.scale || 1.04;
  root.scale.set(scale, scale, scale);

  return {
    mesh: root,
    torsoGroup,
    headGroup,
    leftLegPivot,
    rightLegPivot,
    leftArmPivot,
    rightArmPivot,
    materials: [rotSkinMat, pleatedPantsMat],
    originalColors: [skinCol, pantsCol],
    update: (state, time, speedMultiplier = 1.0) => {
      if (state === 'chase' || state === 'attack') {
        const strideSpeed = 9.5 * speedMultiplier;
        const swing = Math.sin(time * strideSpeed) * 0.65;
        leftLegPivot.rotation.x = swing;
        rightLegPivot.rotation.x = -swing;

        torsoGroup.rotation.z = Math.sin(time * (strideSpeed / 2)) * 0.09;
        torsoGroup.rotation.x = 0.20 + Math.abs(Math.sin(time * strideSpeed)) * 0.07;
        torsoGroup.position.y = 0.95 + Math.abs(Math.sin(time * strideSpeed)) * 0.05;

        if (state === 'attack') {
          leftArmPivot.rotation.x = -0.95 + Math.sin(time * 16) * 0.75;
          rightArmPivot.rotation.x = -0.95 - Math.sin(time * 16) * 0.75;
          headGroup.rotation.x = 0.22 + Math.sin(time * 16) * 0.15;
        } else {
          leftArmPivot.rotation.x = -1.42 + Math.sin(time * (strideSpeed / 2)) * 0.12;
          rightArmPivot.rotation.x = -1.38 - Math.sin(time * (strideSpeed / 2)) * 0.12;
          headGroup.rotation.x = 0.08;
        }
      } else if (state === 'stagger') {
        torsoGroup.rotation.x = -0.28;
        headGroup.rotation.x = -0.35;
      } else {
        leftLegPivot.rotation.x = 0;
        rightLegPivot.rotation.x = 0;
        torsoGroup.rotation.x = 0.20 + Math.sin(time * 2.0) * 0.03;
        torsoGroup.rotation.z = Math.sin(time * 1.5) * 0.02;
        headGroup.rotation.z = -0.09 + Math.sin(time * 1.8) * 0.03;
      }
    }
  };
}

// ─── Procedural Final Round BOSS ZOMBIE (Spawns only in Wave 5) ───
// Features: ~3x height, dark corrupted obsidian mutated flesh, crimson glowing eyes,
// heavy protruding shoulder & back spikes, lethal mutated claw arms, thick armored legs.
export function createProceduralBossZombie(options = {}) {
  const root = new THREE.Group();
  root.name = 'procedural-boss-zombie';

  const bossSkinCol = 0x1E1A18; // Dark corrupted obsidian flesh
  const bossSpikeCol = 0x110F0E; // Hardened bone spikes
  const bossPantsCol = 0x141210;

  const rotSkinMat = new THREE.MeshStandardMaterial({
    color: bossSkinCol,
    roughness: 0.85,
    metalness: 0.15,
    flatShading: true
  });

  const spikeMat = new THREE.MeshStandardMaterial({
    color: bossSpikeCol,
    roughness: 0.5,
    metalness: 0.35,
    flatShading: true
  });

  const pleatedPantsMat = new THREE.MeshStandardMaterial({
    color: bossPantsCol,
    roughness: 0.92,
    flatShading: true
  });

  const crimsonEyeMat = new THREE.MeshStandardMaterial({
    color: 0xFF2222,
    emissive: 0xFF0000,
    emissiveIntensity: 2.8,
    roughness: 0.2
  });

  const teethMat = new THREE.MeshStandardMaterial({ color: 0xDDD8B8, roughness: 0.55 });
  const woundMat = new THREE.MeshStandardMaterial({ color: 0x6E0808, roughness: 0.65, metalness: 0.2 });

  // 1. Torso: Massive mutated chest with jagged bone ribs & shoulder carapaces
  const torsoGroup = new THREE.Group();
  torsoGroup.position.set(0, 0.95, 0);
  torsoGroup.rotation.x = 0.18;

  const upperChest = new THREE.Mesh(new THREE.BoxGeometry(0.70, 0.52, 0.38), rotSkinMat);
  upperChest.position.y = 0.50;
  upperChest.castShadow = true;
  torsoGroup.add(upperChest);

  // Armored mutated ribs
  for (let r = 0; r < 4; r++) {
    const rib = new THREE.Mesh(new THREE.BoxGeometry(0.64 - r * 0.05, 0.06, 0.07), rotSkinMat);
    rib.position.set(0, 0.62 - r * 0.10, -0.18);
    torsoGroup.add(rib);
  }

  // Heavy bone spikes along spine/back
  for (let s = 0; s < 5; s++) {
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.32, 5), spikeMat);
    spike.position.set(0, 0.68 - s * 0.12, 0.22);
    spike.rotation.x = Math.PI / 2 + 0.25;
    torsoGroup.add(spike);
  }

  // Sunken stomach
  const sunkenStomach = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.38, 0.30), rotSkinMat);
  sunkenStomach.position.y = 0.18;
  torsoGroup.add(sunkenStomach);

  // Gory torso wound
  const wound = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.32), woundMat);
  wound.position.set(0.05, 0.22, -0.02);
  torsoGroup.add(wound);

  // 2. Head: Horned demonic skull with piercing crimson eyes & jagged fangs
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.88, -0.06);

  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.26, 8, 8), rotSkinMat);
  cranium.position.y = 0.26;
  headGroup.add(cranium);

  const face = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.34, 0.32), rotSkinMat);
  face.position.set(0, 0.20, -0.08);
  face.castShadow = true;
  headGroup.add(face);

  // Bone Horns / Cranial spikes
  const hornL = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.35, 5), spikeMat);
  hornL.position.set(-0.16, 0.44, -0.08);
  hornL.rotation.set(-0.35, 0, -0.45);
  headGroup.add(hornL);

  const hornR = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.35, 5), spikeMat);
  hornR.position.set(0.16, 0.44, -0.08);
  hornR.rotation.set(-0.35, 0, 0.45);
  headGroup.add(hornR);

  // Glowing Crimson Eyes
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), crimsonEyeMat);
  eyeL.position.set(-0.10, 0.23, -0.25);
  headGroup.add(eyeL);

  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), crimsonEyeMat);
  eyeR.position.set(0.10, 0.23, -0.25);
  headGroup.add(eyeR);

  // Open Snarling Maw with Fangs
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.22), rotSkinMat);
  jaw.position.set(0, 0.06, -0.14);
  headGroup.add(jaw);

  const teethUpper = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.05), teethMat);
  teethUpper.position.set(0, 0.13, -0.24);
  headGroup.add(teethUpper);

  const teethLower = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.04, 0.05), teethMat);
  teethLower.position.set(0, 0.07, -0.23);
  headGroup.add(teethLower);

  torsoGroup.add(headGroup);

  // 3. Arms with massive lethal claws & shoulder carapace
  const leftArmPivot = new THREE.Group();
  leftArmPivot.position.set(-0.46, 0.70, 0);

  const shoulderCarapaceL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, 0.22), spikeMat);
  shoulderCarapaceL.position.set(-0.02, 0.05, 0);
  leftArmPivot.add(shoulderCarapaceL);

  const shoulderSpikeL = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.38, 5), spikeMat);
  shoulderSpikeL.position.set(-0.12, 0.14, 0);
  shoulderSpikeL.rotation.z = 0.55;
  leftArmPivot.add(shoulderSpikeL);

  const upperArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.10, 0.50, 7), rotSkinMat);
  upperArmL.position.y = -0.25;
  upperArmL.castShadow = true;
  leftArmPivot.add(upperArmL);

  const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.55, 7), rotSkinMat);
  forearmL.position.set(0, -0.65, -0.12);
  forearmL.rotation.x = -0.38;
  forearmL.castShadow = true;
  leftArmPivot.add(forearmL);

  for (let c = -1; c <= 1; c++) {
    const claw = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.24, 4), spikeMat);
    claw.position.set(c * 0.045 - 0.02, -0.96, -0.24);
    claw.rotation.x = -0.55;
    leftArmPivot.add(claw);
  }
  torsoGroup.add(leftArmPivot);

  const rightArmPivot = new THREE.Group();
  rightArmPivot.position.set(0.46, 0.70, 0);

  const shoulderCarapaceR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, 0.22), spikeMat);
  shoulderCarapaceR.position.set(0.02, 0.05, 0);
  rightArmPivot.add(shoulderCarapaceR);

  const shoulderSpikeR = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.38, 5), spikeMat);
  shoulderSpikeR.position.set(0.12, 0.14, 0);
  shoulderSpikeR.rotation.z = -0.55;
  rightArmPivot.add(shoulderSpikeR);

  const upperArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.10, 0.50, 7), rotSkinMat);
  upperArmR.position.y = -0.25;
  upperArmR.castShadow = true;
  rightArmPivot.add(upperArmR);

  const forearmR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.55, 7), rotSkinMat);
  forearmR.position.set(0, -0.65, -0.12);
  forearmR.rotation.x = -0.38;
  forearmR.castShadow = true;
  rightArmPivot.add(forearmR);

  for (let c = -1; c <= 1; c++) {
    const claw = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.24, 4), spikeMat);
    claw.position.set(c * 0.045 + 0.02, -0.96, -0.24);
    claw.rotation.x = -0.55;
    rightArmPivot.add(claw);
  }
  torsoGroup.add(rightArmPivot);

  root.add(torsoGroup);

  // 4. Pelvis & Heavy Armored Trousers
  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.24, 0.36), pleatedPantsMat);
  pelvis.position.set(0, 0.96, 0);
  root.add(pelvis);

  // Left Leg
  const leftLegPivot = new THREE.Group();
  leftLegPivot.position.set(-0.20, 0.94, 0);

  const leftPants = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.88, 0.30), pleatedPantsMat);
  leftPants.position.y = -0.44;
  leftPants.castShadow = true;
  leftLegPivot.add(leftPants);

  const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.14, 0.38), rotSkinMat);
  leftFoot.position.set(0, -0.92, -0.06);
  leftLegPivot.add(leftFoot);
  root.add(leftLegPivot);

  // Right Leg
  const rightLegPivot = new THREE.Group();
  rightLegPivot.position.set(0.20, 0.94, 0);

  const rightPants = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.88, 0.30), pleatedPantsMat);
  rightPants.position.y = -0.44;
  rightPants.castShadow = true;
  rightLegPivot.add(rightPants);

  const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.14, 0.38), rotSkinMat);
  rightFoot.position.set(0, -0.92, -0.06);
  rightLegPivot.add(rightFoot);
  root.add(rightLegPivot);

  // Fast Cylinder Hit Collider (covers full ~3x height of Boss)
  const hitCollider = new THREE.Mesh(
    new THREE.CylinderGeometry(0.65, 0.65, 2.3, 8),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  hitCollider.position.set(0, 1.15, 0);
  hitCollider.name = 'boss-hitbox';
  root.add(hitCollider);
  root.hitCollider = hitCollider;

  // Scale root to 2.85x height (imposing final wave boss behemoth)
  const bossScale = options.scale || 2.85;
  root.scale.set(bossScale, bossScale, bossScale);

  return {
    mesh: root,
    torsoGroup,
    headGroup,
    leftLegPivot,
    rightLegPivot,
    leftArmPivot,
    rightArmPivot,
    materials: [rotSkinMat, pleatedPantsMat, spikeMat],
    originalColors: [bossSkinCol, bossPantsCol, bossSpikeCol],
    update: (state, time, speedMultiplier = 1.0) => {
      if (state === 'chase' || state === 'attack') {
        const strideSpeed = 5.5 * speedMultiplier; // Heavy stomping gait
        const swing = Math.sin(time * strideSpeed) * 0.55;
        leftLegPivot.rotation.x = swing;
        rightLegPivot.rotation.x = -swing;

        torsoGroup.rotation.z = Math.sin(time * (strideSpeed / 2)) * 0.06;
        torsoGroup.rotation.x = 0.18 + Math.abs(Math.sin(time * strideSpeed)) * 0.05;
        torsoGroup.position.y = 0.95 + Math.abs(Math.sin(time * strideSpeed)) * 0.04;

        if (state === 'attack') {
          leftArmPivot.rotation.x = -0.80 + Math.sin(time * 12) * 0.65;
          rightArmPivot.rotation.x = -0.80 - Math.sin(time * 12) * 0.65;
          headGroup.rotation.x = 0.20 + Math.sin(time * 12) * 0.12;
        } else {
          leftArmPivot.rotation.x = -1.25 + Math.sin(time * (strideSpeed / 2)) * 0.10;
          rightArmPivot.rotation.x = -1.20 - Math.sin(time * (strideSpeed / 2)) * 0.10;
          headGroup.rotation.x = 0.06;
        }
      } else if (state === 'stagger') {
        torsoGroup.rotation.x = -0.18;
        headGroup.rotation.x = -0.22;
      } else {
        leftLegPivot.rotation.x = 0;
        rightLegPivot.rotation.x = 0;
        torsoGroup.rotation.x = 0.18 + Math.sin(time * 1.5) * 0.02;
        torsoGroup.rotation.z = Math.sin(time * 1.2) * 0.015;
      }
    }
  };
}

// ─── 3D Procedural Player Character (Accurate to media_1790514867463.png) ───
// Features: Brown distressed bomber jacket with wide collar lapels & zipper, charcoal t-shirt,
// dog tag necklace, wristwatch, cargo trousers with side flap pockets, knee pads, lace-up tactical boots,
// and CRITICAL: weapon physically mounted inside RIGHT HAND socket with natural grip & two-handed support!
export function createProceduralPlayer(characterDef = null, initialWeaponId = WEAPON_TYPES.RIFLE) {
  const root = new THREE.Group();
  root.name = 'procedural-player';

  const cosmetics = characterDef?.cosmetics || {
    skinColor: 0xD8B48D,
    hairColor: 0x221814,
    hairType: 'wavy_shaggy',
    jacketColor: 0x5C3B24,
    shirtColor: 0x26282B,
    pantsColor: 0x484236,
    gearColor: 0x1A1C1E,
    bootColor: 0x422B18,
    hasBackpack: true,
    hasHolster: true
  };

  // Materials
  const skinMat = new THREE.MeshStandardMaterial({ color: cosmetics.skinColor, roughness: 0.65 });
  const hairMat = new THREE.MeshStandardMaterial({ color: cosmetics.hairColor, roughness: 0.85 });
  const jacketMat = new THREE.MeshStandardMaterial({ color: cosmetics.jacketColor || 0x5C3B24, roughness: 0.68, flatShading: true });
  const shirtMat = new THREE.MeshStandardMaterial({ color: cosmetics.shirtColor || 0x26282B, roughness: 0.82 });
  const pantsMat = new THREE.MeshStandardMaterial({ color: cosmetics.pantsColor || 0x484236, roughness: 0.85, flatShading: true });
  const gearMat = new THREE.MeshStandardMaterial({ color: cosmetics.gearColor || 0x1A1C1E, roughness: 0.75 });
  const bootMat = new THREE.MeshStandardMaterial({ color: cosmetics.bootColor || 0x422B18, roughness: 0.75, flatShading: true });
  const silverMat = new THREE.MeshStandardMaterial({ color: 0xCCCCCC, roughness: 0.3, metalness: 0.85 });

  // 1. Torso Group (Pitches vertically with camera aim!)
  const torsoGroup = new THREE.Group();
  torsoGroup.position.set(0, 0.95, 0);

  // Shirt underlayer
  const shirt = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.58, 0.32), shirtMat);
  shirt.position.y = 0.30;
  shirt.castShadow = true;
  torsoGroup.add(shirt);

  // Leather Bomber Jacket Back
  const jacketBack = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.58, 0.16), jacketMat);
  jacketBack.position.set(0, 0.30, 0.10);
  jacketBack.castShadow = true;
  jacketBack.receiveShadow = true;
  torsoGroup.add(jacketBack);

  // Tactical Assault Sling Pack on jacket back (crisp silhouette in third-person view)
  const backpackGroup = new THREE.Group();
  backpackGroup.position.set(0, 0.30, 0.20);

  const packMain = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.36, 0.12), gearMat);
  packMain.castShadow = true;
  packMain.receiveShadow = true;
  backpackGroup.add(packMain);

  const packPouch = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 0.06), gearMat);
  packPouch.position.set(0, -0.06, 0.08);
  packPouch.castShadow = true;
  packPouch.receiveShadow = true;
  backpackGroup.add(packPouch);

  const bedroll = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.30, 8), pantsMat);
  bedroll.rotation.z = Math.PI / 2;
  bedroll.position.set(0, -0.22, 0.04);
  bedroll.castShadow = true;
  bedroll.receiveShadow = true;
  backpackGroup.add(bedroll);
  torsoGroup.add(backpackGroup);

  // Tactical harness straps over jacket
  const strapL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.44, 0.24), gearMat);
  strapL.position.set(-0.16, 0.32, 0.02);
  torsoGroup.add(strapL);

  const strapR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.44, 0.24), gearMat);
  strapR.position.set(0.16, 0.32, 0.02);
  torsoGroup.add(strapR);

  // Tactical Comms / Radio Transceiver on left shoulder
  const radio = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.10, 0.045), gearMat);
  radio.position.set(-0.18, 0.44, -0.11);
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.16, 5), silverMat);
  antenna.position.set(-0.18, 0.56, -0.11);
  torsoGroup.add(radio, antenna);

  // Jacket Left/Right front panels
  const jacketFlapL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.56, 0.22), jacketMat);
  jacketFlapL.position.set(-0.21, 0.30, -0.07);
  torsoGroup.add(jacketFlapL);

  const jacketFlapR = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.56, 0.22), jacketMat);
  jacketFlapR.position.set(0.21, 0.30, -0.07);
  torsoGroup.add(jacketFlapR);

  // Wide folded aviator collar lapels with bronze buttons
  const lapelL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.08), jacketMat);
  lapelL.position.set(-0.16, 0.44, -0.16);
  lapelL.rotation.set(0.12, 0.22, -0.15);
  torsoGroup.add(lapelL);

  const lapelR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.08), jacketMat);
  lapelR.position.set(0.16, 0.44, -0.16);
  lapelR.rotation.set(0.12, -0.22, 0.15);
  torsoGroup.add(lapelR);

  // Metallic front center zipper track
  const zipper = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.50, 0.015), silverMat);
  zipper.position.set(0, 0.26, -0.165);
  torsoGroup.add(zipper);

  // Ribbed waistband
  const waistband = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.08, 0.34), gearMat);
  waistband.position.set(0, 0.04, 0);
  torsoGroup.add(waistband);

  // Dog Tag necklace on neck
  const dogTagPlate = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.055, 0.01), silverMat);
  dogTagPlate.position.set(0, 0.38, -0.18);
  torsoGroup.add(dogTagPlate);

  // 2. Head & Sculpted Hair (Matching media_1790514867463.png)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.65, 0);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.11, 0.15, 8), skinMat);
  neck.position.y = 0.08;
  headGroup.add(neck);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.32, 0.30), skinMat);
  head.position.y = 0.26;
  head.castShadow = true;
  headGroup.add(head);

  // Facial sculpting: nose, chin, brow
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.09, 0.06), skinMat);
  nose.position.set(0, 0.24, -0.17);
  headGroup.add(nose);

  const chin = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.14), skinMat);
  chin.position.set(0, 0.12, -0.10);
  headGroup.add(chin);

  const brow = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.035, 0.05), skinMat);
  brow.position.set(0, 0.31, -0.16);
  headGroup.add(brow);

  // Wavy layered dark brown hair (volume, side sweeps, natural waves)
  const hairCrown = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.15, 0.34), hairMat);
  hairCrown.position.set(0, 0.40, 0.01);
  headGroup.add(hairCrown);

  const hairWaveL = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.24, 0.32), hairMat);
  hairWaveL.position.set(-0.16, 0.30, 0.01);
  hairWaveL.rotation.z = -0.12;
  headGroup.add(hairWaveL);

  const hairWaveR = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.24, 0.32), hairMat);
  hairWaveR.position.set(0.16, 0.30, 0.01);
  hairWaveR.rotation.z = 0.12;
  headGroup.add(hairWaveR);

  const hairBangs = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.11, 0.14), hairMat);
  hairBangs.position.set(0.02, 0.36, -0.16);
  hairBangs.rotation.set(-0.25, 0.1, -0.05);
  headGroup.add(hairBangs);

  const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.20, 0.10), hairMat);
  hairBack.position.set(0, 0.24, 0.15);
  headGroup.add(hairBack);

  torsoGroup.add(headGroup);

  // 3. RIGHT ARM & WEAPON SOCKET (Mounted in right hand, raised in forward combat aim pose)
  // Right Shoulder
  const rightArmGroup = new THREE.Group();
  rightArmGroup.position.set(0.25, 0.46, 0.02);
  rightArmGroup.rotation.set(0.65, -0.15, 0);

  // Right Upper Arm (jacket sleeve)
  const rightUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.30, 0.13), jacketMat);
  rightUpperArm.position.set(0, -0.15, 0);
  rightUpperArm.castShadow = true;
  rightArmGroup.add(rightUpperArm);

  // Right Elbow & Forearm
  const rightForearmGroup = new THREE.Group();
  rightForearmGroup.position.set(0, -0.28, 0);
  rightForearmGroup.rotation.set(0.60, 0, 0); // bends forearm forward into ready-fire position

  const rightForearmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.26, 0.11), skinMat);
  rightForearmMesh.position.set(0, -0.12, 0);
  rightForearmGroup.add(rightForearmMesh);

  // Right Hand & Palm Socket (Positioned at wrist end)
  const rightHandSocket = new THREE.Group();
  rightHandSocket.position.set(0, -0.25, 0);
  rightHandSocket.rotation.set(-1.25, 0, 0); // Aligns weapon level & forward along -Z

  // Right Palm & Gripping Fingers
  const palmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 0.08), skinMat);
  palmMesh.position.set(0, -0.02, 0);
  rightHandSocket.add(palmMesh);

  // Curled Trigger Finger around the weapon trigger
  const triggerFinger = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.025, 0.07), skinMat);
  triggerFinger.position.set(-0.035, 0.01, -0.05);
  rightHandSocket.add(triggerFinger);

  // Thumb wrapped around grip
  const thumbMesh = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.05, 0.03), skinMat);
  thumbMesh.position.set(0.038, 0.01, 0.01);
  thumbMesh.rotation.z = -0.4;
  rightHandSocket.add(thumbMesh);

  // WEAPON MOUNT (Centered directly inside the palm at 0,0,0, with 1.28x hero scale)
  const weaponMount = new THREE.Group();
  weaponMount.name = 'right-hand-weapon-mount';
  weaponMount.position.set(0, 0, 0);
  weaponMount.scale.set(1.28, 1.28, 1.28);
  rightHandSocket.add(weaponMount);

  // PRE-CREATE AND ATTACH ALL 5 WEAPONS (Eliminates GC & lag on weapon switch!)
  const weaponMeshes = {};
  WEAPON_LIST.forEach(w => {
    const wMesh = create3DWeaponMesh(w.id);
    wMesh.visible = (w.id === initialWeaponId);
    weaponMount.add(wMesh);
    weaponMeshes[w.id] = wMesh;
  });

  let currentWeaponId = initialWeaponId;

  rightForearmGroup.add(rightHandSocket);
  rightArmGroup.add(rightForearmGroup);
  torsoGroup.add(rightArmGroup);

  // 4. LEFT ARM (Two-handed weapon support stance)
  const leftArmGroup = new THREE.Group();
  leftArmGroup.position.set(-0.25, 0.46, 0.02);
  leftArmGroup.rotation.set(0.68, 0.26, -0.15);

  const leftUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.30, 0.13), jacketMat);
  leftUpperArm.position.set(0, -0.15, 0);
  leftUpperArm.castShadow = true;
  leftArmGroup.add(leftUpperArm);

  const leftForearmGroup = new THREE.Group();
  leftForearmGroup.position.set(0, -0.28, 0);
  leftForearmGroup.rotation.set(0.72, -0.32, 0);

  const leftForearmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.28, 0.11), skinMat);
  leftForearmMesh.position.set(0, -0.12, 0);
  leftForearmGroup.add(leftForearmMesh);

  // Wristwatch on left arm
  const watch = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.12), gearMat);
  watch.position.set(0, -0.18, 0);
  leftForearmGroup.add(watch);

  // Left Hand (Supports weapon front guard)
  const leftHandSocket = new THREE.Group();
  leftHandSocket.position.set(0, -0.26, 0);
  leftHandSocket.rotation.set(-1.35, 0, 0);

  const leftHandMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.09), skinMat);
  leftHandSocket.add(leftHandMesh);

  leftForearmGroup.add(leftHandSocket);
  leftArmGroup.add(leftForearmGroup);
  torsoGroup.add(leftArmGroup);

  root.add(torsoGroup);

  // 5. Lower Body: Khaki Cargo Pants & Tactical Boots
  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.16, 0.28), pantsMat);
  pelvis.position.set(0, 0.94, 0);
  root.add(pelvis);

  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.06, 0.30), gearMat);
  belt.position.set(0, 0.98, 0);
  root.add(belt);

  const holster = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.20, 0.14), gearMat);
  holster.position.set(0.27, 0.82, -0.02);
  root.add(holster);

  // Left Leg
  const leftLegPivot = new THREE.Group();
  leftLegPivot.position.set(-0.15, 0.94, 0);

  const leftThigh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.44, 0.22), pantsMat);
  leftThigh.position.y = -0.22;
  leftThigh.castShadow = true;
  leftLegPivot.add(leftThigh);

  // Tactical flap cargo pocket
  const leftPocket = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.16), pantsMat);
  leftPocket.position.set(-0.11, -0.22, 0);
  leftLegPivot.add(leftPocket);

  const leftShin = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.34, 0.20), pantsMat);
  leftShin.position.y = -0.56;
  leftShin.castShadow = true;
  leftLegPivot.add(leftShin);

  // Reinforced knee pad
  const leftKneePad = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.13, 0.04), gearMat);
  leftKneePad.position.set(0, -0.48, -0.10);
  leftLegPivot.add(leftKneePad);

  const leftBoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.24, 0.32), bootMat);
  leftBoot.position.set(0, -0.80, -0.04);
  leftBoot.castShadow = true;
  leftLegPivot.add(leftBoot);

  const leftBootSole = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.34), gearMat);
  leftBootSole.position.set(0, -0.91, -0.04);
  leftLegPivot.add(leftBootSole);

  root.add(leftLegPivot);

  // Right Leg
  const rightLegPivot = new THREE.Group();
  rightLegPivot.position.set(0.15, 0.94, 0);

  const rightThigh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.44, 0.22), pantsMat);
  rightThigh.position.y = -0.22;
  rightThigh.castShadow = true;
  rightLegPivot.add(rightThigh);

  // Tactical flap cargo pocket
  const rightPocket = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.16), pantsMat);
  rightPocket.position.set(0.11, -0.22, 0);
  rightLegPivot.add(rightPocket);

  const rightShin = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.34, 0.20), pantsMat);
  rightShin.position.y = -0.56;
  rightShin.castShadow = true;
  rightLegPivot.add(rightShin);

  // Reinforced knee pad
  const rightKneePad = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.13, 0.04), gearMat);
  rightKneePad.position.set(0, -0.48, -0.10);
  rightLegPivot.add(rightKneePad);

  const rightBoot = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.24, 0.32), bootMat);
  rightBoot.position.set(0, -0.80, -0.04);
  rightBoot.castShadow = true;
  rightLegPivot.add(rightBoot);

  const rightBootSole = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.34), gearMat);
  rightBootSole.position.set(0, -0.91, -0.04);
  rightLegPivot.add(rightBootSole);

  root.add(rightLegPivot);

  // Animation State
  let recoilOffset = 0;
  let recoilAngle = 0;
  let reloadProgress = 0;
  let isReloading = false;
  let switchAnimProgress = 0;

  // Set initial arm pose according to weapon type
  const applyArmPoseForWeapon = (wId) => {
    if (wId === WEAPON_TYPES.PISTOL) {
      // Two-handed pistol weaver stance (left hand cups right hand underneath)
      leftArmGroup.rotation.set(0.65, 0.35, -0.12);
      leftForearmGroup.rotation.set(0.70, -0.25, 0);
      leftHandSocket.rotation.set(-1.30, 0, 0);
    } else {
      // Long gun stance: Left hand holds front handguard
      leftArmGroup.rotation.set(0.68, 0.26, -0.15);
      leftForearmGroup.rotation.set(0.72, -0.32, 0);
      leftHandSocket.rotation.set(-1.35, 0, 0);
    }
  };

  applyArmPoseForWeapon(initialWeaponId);

  return {
    mesh: root,
    torsoGroup,
    rightArmGroup,
    leftArmGroup,
    rightHandSocket,
    weaponMount,

    // Instant lag-free weapon switching while running or standing
    equipWeapon: (weaponId) => {
      if (weaponMeshes[currentWeaponId]) {
        weaponMeshes[currentWeaponId].visible = false;
      }
      currentWeaponId = weaponId;
      if (weaponMeshes[currentWeaponId]) {
        weaponMeshes[currentWeaponId].visible = true;
      }

      // Smooth switch animation raise
      switchAnimProgress = 1.0;
      applyArmPoseForWeapon(weaponId);
    },

    triggerRecoil: (kickAmount = 0.08) => {
      recoilOffset = kickAmount;
      recoilAngle = kickAmount * 0.85;
    },

    setReloading: (reloading, progress = 0) => {
      isReloading = reloading;
      reloadProgress = progress;
    },

    getMuzzleWorldPosition: () => {
      const pos = new THREE.Vector3();
      weaponMount.getWorldPosition(pos);
      let barrelLength = 0.85;
      if (currentWeaponId === WEAPON_TYPES.PISTOL) barrelLength = 0.35;
      else if (currentWeaponId === WEAPON_TYPES.SNIPER) barrelLength = 1.45;
      else if (currentWeaponId === WEAPON_TYPES.SHOTGUN) barrelLength = 1.05;
      else if (currentWeaponId === WEAPON_TYPES.SMG) barrelLength = 0.65;

      const forward = new THREE.Vector3(0, 0, -barrelLength).applyQuaternion(root.quaternion);
      pos.add(forward);
      return pos;
    },

    update: (isMoving, isGrounded, time, pitch = 0) => {
      // 1. Aim Pitch: Upper torso and held gun pitch smoothly together
      torsoGroup.rotation.x = -pitch * 0.85;

      // 2. Smooth Recoil recovery
      if (recoilOffset > 0.001 || recoilAngle > 0.001) {
        recoilOffset = THREE.MathUtils.lerp(recoilOffset, 0, 0.28);
        recoilAngle = THREE.MathUtils.lerp(recoilAngle, 0, 0.28);
      }
      weaponMount.position.z = recoilOffset;
      weaponMount.rotation.x = -recoilAngle;

      // 3. Weapon Switch animation recovery
      if (switchAnimProgress > 0) {
        switchAnimProgress = THREE.MathUtils.lerp(switchAnimProgress, 0, 0.18);
        weaponMount.position.y = -switchAnimProgress * 0.14;
      } else {
        weaponMount.position.y = 0;
      }

      // 4. Reload animation vs Combat Ready Aim pose
      if (isReloading) {
        const reloadDip = Math.sin(reloadProgress * Math.PI) * 0.35;
        rightArmGroup.rotation.x = 0.65 - reloadDip;
        leftArmGroup.rotation.x = 0.68 - reloadDip * 1.4;
      } else {
        rightArmGroup.rotation.x = 0.65;
        leftArmGroup.rotation.x = (currentWeaponId === WEAPON_TYPES.PISTOL) ? 0.65 : 0.68;
      }

      // 5. Movement vs Jump vs Idle
      if (!isGrounded) {
        leftLegPivot.rotation.x = -0.35;
        rightLegPivot.rotation.x = -0.45;
        torsoGroup.position.y = 0.95;
      } else if (isMoving) {
        const strideSpeed = 12.0;
        const swing = Math.sin(time * strideSpeed) * 0.65;
        leftLegPivot.rotation.x = swing;
        rightLegPivot.rotation.x = -swing;
        torsoGroup.position.y = 0.95 + Math.abs(Math.sin(time * strideSpeed)) * 0.05;
        rightArmGroup.rotation.z = Math.sin(time * strideSpeed) * 0.03;
        leftArmGroup.rotation.z = -Math.sin(time * strideSpeed) * 0.03;
      } else {
        leftLegPivot.rotation.x = THREE.MathUtils.lerp(leftLegPivot.rotation.x, 0, 0.15);
        rightLegPivot.rotation.x = THREE.MathUtils.lerp(rightLegPivot.rotation.x, 0, 0.15);
        torsoGroup.position.y = 0.95 + Math.sin(time * 2.5) * 0.012;
        rightArmGroup.rotation.z = 0;
        leftArmGroup.rotation.z = 0;
      }
    }
  };
}
