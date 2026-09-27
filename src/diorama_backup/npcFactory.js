import * as THREE from 'three';

const npcs = []; // track all active NPCs for idle animation
let clock = new THREE.Clock();

export function buildNPC({ name, color, position }) {
  const group = new THREE.Group();
  group.userData.name = name;
  group.userData.baseY = position[1] || 0;
  
  // Body: cylinder
  const bodyGeo = new THREE.CylinderGeometry(0.3, 0.35, 1.0, 8);
  const bodyMat = new THREE.MeshStandardMaterial({ color, flatShading: true });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.y = 0.5;
  group.add(body);
  
  // Head: sphere
  const headGeo = new THREE.SphereGeometry(0.25, 8, 6);
  const headMat = new THREE.MeshStandardMaterial({ color, flatShading: true });
  const head = new THREE.Mesh(headGeo, headMat);
  head.position.y = 1.2;
  group.add(head);
  
  group.position.set(...position);
  
  const npcData = { group, name, baseY: position[1] || 0 };
  npcs.push(npcData);
  
  return npcData;
}

// Call in render loop — bobs all NPCs gently on Y axis
export function updateNPCs() {
  const t = clock.getElapsedTime();
  for (const npc of npcs) {
    npc.group.position.y = npc.baseY + Math.sin(t * 1.0 + npcs.indexOf(npc) * 1.5) * 0.08;
  }
}

export function clearNPCs(scene) {
  for (const npc of npcs) {
    scene.remove(npc.group);
  }
  npcs.length = 0;
}

export function getNPCs() {
  return npcs;
}
