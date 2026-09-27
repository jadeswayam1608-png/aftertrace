import * as THREE from 'three';

const mat = (color, opts = {}) => new THREE.MeshStandardMaterial({ 
  color, flatShading: true, ...opts 
});

export function buildDiorama(config) {
  const group = new THREE.Group();
  
  // Ground plane
  const groundGeo = new THREE.BoxGeometry(
    config.groundSize?.[0] || 12, 
    0.2, 
    config.groundSize?.[1] || 12
  );
  const ground = new THREE.Mesh(groundGeo, mat(config.groundColor));
  ground.position.y = -0.1;
  group.add(ground);
  
  // Props
  for (const prop of (config.props || [])) {
    let geo;
    switch (prop.type) {
      case 'box': geo = new THREE.BoxGeometry(...(prop.args || [1,1,1])); break;
      case 'cylinder': geo = new THREE.CylinderGeometry(...(prop.args || [0.5,0.5,1,8])); break;
      case 'cone': geo = new THREE.ConeGeometry(...(prop.args || [0.5,1,8])); break;
      case 'sphere': geo = new THREE.SphereGeometry(...(prop.args || [0.5,8,6])); break;
      case 'icosahedron': geo = new THREE.IcosahedronGeometry(...(prop.args || [1,0])); break;
      default: continue;
    }
    const material = mat(prop.color, prop.materialOpts || {});
    const mesh = new THREE.Mesh(geo, material);
    if (prop.position) mesh.position.set(...prop.position);
    if (prop.rotation) mesh.rotation.set(...prop.rotation);
    if (prop.scale) mesh.scale.set(...prop.scale);
    group.add(mesh);
  }
  
  return group;
}

export const LOCATION_CONFIGS = {
  beach: {
    id: 'beach',
    groundColor: 0xE8DCC8,
    bgColor: 0x1B4B4A,
    props: [
      { type: 'box', color: 0x2E7D7A, position: [-2, -0.2, -4], scale: [16, 0.2, 8], args: [1, 1, 1] }, // Ocean plane
      { type: 'cylinder', color: 0x8B5A2B, position: [3, 1.5, 2], args: [0.2, 0.3, 3, 8], rotation: [0, 0, 0.1] }, // Palm trunk 1
      { type: 'cone', color: 0x228B22, position: [3, 3.5, 2], args: [1.5, 2, 8], rotation: [0, 0, -0.1] }, // Palm leaves 1
      { type: 'cylinder', color: 0x8B5A2B, position: [-2, 1, 4], args: [0.2, 0.3, 2, 8], rotation: [0, 0, -0.2] }, // Palm trunk 2
      { type: 'cone', color: 0x228B22, position: [-2, 2.5, 4], args: [1.2, 1.5, 8], rotation: [0, 0, 0.1] }, // Palm leaves 2
      { type: 'box', color: 0x5C4033, position: [1, 0.5, -1], args: [1.2, 1, 1.2], rotation: [0, 0.4, 0] }, // Crate
      { type: 'box', color: 0xD0C4B4, position: [0.5, 0.05, 1], args: [0.3, 0.1, 0.5], rotation: [0, 0.2, 0] }, // Footprint 1
      { type: 'box', color: 0xD0C4B4, position: [0.8, 0.05, 1.8], args: [0.3, 0.1, 0.5], rotation: [0, 0.3, 0] }, // Footprint 2
      { type: 'sphere', color: 0x4B3621, position: [2.5, 0.2, 2.5], args: [0.2, 8, 6] } // Coconut
    ]
  },
  forest: {
    id: 'forest',
    groundColor: 0x4A3728,
    bgColor: 0x1B3D2A,
    props: [
      { type: 'cylinder', color: 0x3E2723, position: [-4, 2, -3], args: [0.4, 0.6, 4, 8] },
      { type: 'cone', color: 0x1B5E20, position: [-4, 5, -3], args: [2.5, 4, 8] },
      { type: 'cylinder', color: 0x3E2723, position: [3, 1.5, -4], args: [0.3, 0.5, 3, 8] },
      { type: 'cone', color: 0x2E7D32, position: [3, 3.5, -4], args: [2, 3, 8] },
      { type: 'cylinder', color: 0x3E2723, position: [4, 1.5, 3], args: [0.3, 0.5, 3, 8] },
      { type: 'cone', color: 0x1B5E20, position: [4, 3.5, 3], args: [2, 3, 8] },
      { type: 'cylinder', color: 0x3E2723, position: [-3, 1, 4], args: [0.2, 0.4, 2, 8] },
      { type: 'cone', color: 0x388E3C, position: [-3, 2.5, 4], args: [1.5, 2.5, 8] },
      { type: 'cylinder', color: 0x3E2723, position: [1, 2, -1], args: [0.5, 0.7, 4, 8], rotation: [0, 0, 1.5] }, // Fallen log
      { type: 'sphere', color: 0x2E7D32, position: [-2, 0.5, -1], args: [0.8, 8, 6] }, // Bush 1
      { type: 'sphere', color: 0x388E3C, position: [2, 0.4, 1], args: [0.6, 8, 6] }, // Bush 2
      { type: 'cylinder', color: 0xFFE0B2, position: [-1, 0.2, 2], args: [0.05, 0.05, 0.4, 8] }, // Mushroom stalk
      { type: 'cylinder', color: 0xD32F2F, position: [-1, 0.4, 2], args: [0.2, 0.2, 0.1, 8] }, // Mushroom cap
      { type: 'cylinder', color: 0xFFE0B2, position: [-0.6, 0.15, 2.2], args: [0.05, 0.05, 0.3, 8] }, // Mushroom stalk 2
      { type: 'cylinder', color: 0xD32F2F, position: [-0.6, 0.3, 2.2], args: [0.15, 0.15, 0.1, 8] } // Mushroom cap 2
    ]
  },
  cave: {
    id: 'cave',
    groundColor: 0x3A3A3A,
    bgColor: 0x1A1A2E,
    props: [
      { type: 'icosahedron', color: 0x555555, position: [-3, 1.5, -2], args: [2, 0], rotation: [0.1, 0.5, 0] },
      { type: 'icosahedron', color: 0x4A4A4A, position: [3, 2, -2], args: [2.5, 0], rotation: [0, 0.3, 0.2] },
      { type: 'icosahedron', color: 0x505050, position: [0, 3.5, -3], args: [2.2, 0], rotation: [0.4, 0, 0.1] },
      { type: 'box', color: 0x0A0A14, position: [0, 2, -5], args: [8, 4, 4] }, // Dark interior
      { type: 'sphere', color: 0x4DD0E1, position: [-1.5, 0.3, -3], args: [0.3, 8, 6], materialOpts: { emissive: 0x00ACC1, emissiveIntensity: 0.5 } }, // Crystal 1
      { type: 'sphere', color: 0x4DD0E1, position: [1.2, 0.5, -3.5], args: [0.4, 8, 6], materialOpts: { emissive: 0x00ACC1, emissiveIntensity: 0.4 } }, // Crystal 2
      { type: 'sphere', color: 0x4DD0E1, position: [0.2, 0.2, -2], args: [0.2, 8, 6], materialOpts: { emissive: 0x00ACC1, emissiveIntensity: 0.6 } }, // Crystal 3
      { type: 'box', color: 0x4A4A4A, position: [-2, 0.3, 2], args: [0.8, 0.6, 0.7], rotation: [0.2, 0.5, 0] }, // Rubble
      { type: 'box', color: 0x555555, position: [2, 0.2, 3], args: [0.6, 0.4, 0.5], rotation: [0, -0.4, 0.1] }, // Rubble
      { type: 'box', color: 0x404040, position: [0.5, 0.1, 4], args: [0.4, 0.2, 0.3], rotation: [0.1, 0.1, 0] } // Rubble
    ]
  },
  camp: {
    id: 'camp',
    groundColor: 0xE8DCC8,
    bgColor: 0x1B4B4A,
    props: [
      { type: 'box', color: 0x6D4C41, position: [-2, 1.5, -2], args: [0.2, 3, 0.2], rotation: [0, 0, -0.2] }, // Tent pole 1
      { type: 'box', color: 0x6D4C41, position: [-4, 1.5, -2], args: [0.2, 3, 0.2], rotation: [0, 0, 0.2] }, // Tent pole 2
      { type: 'box', color: 0x6D4C41, position: [-3, 2.9, -2], args: [2.5, 0.2, 0.2] }, // Tent crossbar
      { type: 'box', color: 0x8D6E63, position: [-3, 1.5, -2], args: [2.5, 3, 0.1], rotation: [0.5, 0, 0] }, // Tent canvas
      { type: 'cylinder', color: 0x424242, position: [2, 0.1, 1], args: [0.8, 0.8, 0.2, 12] }, // Fire pit ring
      { type: 'sphere', color: 0xFF5722, position: [2, 0.2, 1], args: [0.3, 8, 6], materialOpts: { emissive: 0xE64A19, emissiveIntensity: 0.8 } }, // Embers
      { type: 'box', color: 0x5C4033, position: [1, 0.4, 3], args: [0.8, 0.8, 0.8], rotation: [0, 0.2, 0] }, // Small crate
      { type: 'box', color: 0x5C4033, position: [0.2, 0.3, 2.5], args: [0.6, 0.6, 0.6], rotation: [0, -0.3, 0] }, // Smaller crate
      { type: 'cone', color: 0x8D6E63, position: [3, 0.5, -1], args: [0.1, 1.5, 4], rotation: [0.5, 0, -0.5] }, // Pointed stick
      { type: 'box', color: 0x9E9E9E, position: [-1, 0.25, 0], args: [0.5, 0.5, 0.4], rotation: [0, 0.4, 0] }, // Radio box
      { type: 'cylinder', color: 0x212121, position: [-1.1, 0.6, -0.1], args: [0.02, 0.02, 0.4, 4] } // Radio antenna
    ]
  },
  radio_tower: {
    id: 'radio_tower',
    groundColor: 0xB8A88A,
    bgColor: 0x2A2A3E,
    props: [
      { type: 'cylinder', color: 0x757575, position: [0, 4, 0], args: [0.3, 0.5, 8, 8] }, // Tower main
      { type: 'cylinder', color: 0x616161, position: [0, 2, 0], args: [0.1, 0.1, 1.5, 4], rotation: [0, 0, 1.57] }, // Crossbar 1
      { type: 'cylinder', color: 0x616161, position: [0, 4, 0], args: [0.1, 0.1, 1.2, 4], rotation: [0, 0, 1.57] }, // Crossbar 2
      { type: 'cylinder', color: 0x616161, position: [0, 6, 0], args: [0.1, 0.1, 0.9, 4], rotation: [0, 0, 1.57] }, // Crossbar 3
      { type: 'box', color: 0x9E9E9E, position: [0, 8.2, 0], args: [1.2, 0.2, 1.2], rotation: [0.3, 0, 0] }, // Antenna dish base
      { type: 'cylinder', color: 0x757575, position: [0, 8.4, 0.2], args: [0.05, 0.05, 0.8, 4], rotation: [0.3, 0, 0] }, // Antenna spike
      { type: 'box', color: 0x424242, position: [1.5, 0.5, 1], args: [1, 1, 1.5], rotation: [0, -0.2, 0] }, // Base equipment 1
      { type: 'box', color: 0x616161, position: [-1.2, 0.4, 1.2], args: [0.8, 0.8, 0.8], rotation: [0, 0.3, 0] }, // Base equipment 2
      { type: 'cylinder', color: 0x212121, position: [0.5, 0.05, 1.5], args: [0.05, 0.05, 2, 4], rotation: [1.57, 0, 0.4] }, // Cable on ground
      { type: 'cylinder', color: 0x212121, position: [-0.5, 0.05, 1.2], args: [0.05, 0.05, 1.5, 4], rotation: [1.57, 0, -0.2] }, // Cable on ground
      { type: 'sphere', color: 0xF44336, position: [0, 8.8, 0.3], args: [0.1, 8, 6], materialOpts: { emissive: 0xD32F2F, emissiveIntensity: 1.0 } } // Blinking light
    ]
  },
  survivor_camp: {
    id: 'survivor_camp',
    groundColor: 0xDDD0B8,
    bgColor: 0x1B4B4A,
    props: [
      { type: 'box', color: 0x8D6E63, position: [-3, 1, -2], args: [4, 2, 0.2] }, // Shelter back wall
      { type: 'box', color: 0x8D6E63, position: [-4.9, 1, -1], args: [0.2, 2, 2] }, // Shelter side wall
      { type: 'box', color: 0x6D4C41, position: [-3, 2.1, -1], args: [4.4, 0.2, 2.4], rotation: [0.1, 0, 0] }, // Shelter roof
      { type: 'cylinder', color: 0x424242, position: [2, 0.1, 2], args: [0.8, 0.8, 0.2, 12] }, // Fire pit ring
      { type: 'sphere', color: 0xFF9800, position: [2, 0.2, 2], args: [0.3, 8, 6], materialOpts: { emissive: 0xFF5722, emissiveIntensity: 0.8 } }, // Coals
      { type: 'box', color: 0x5C4033, position: [-2, 0.5, 0], args: [1, 1, 1], rotation: [0, 0.2, 0] }, // Crate 1
      { type: 'box', color: 0x6D4C41, position: [-3.2, 0.4, 0.2], args: [0.8, 0.8, 0.8], rotation: [0, -0.1, 0] }, // Crate 2
      { type: 'box', color: 0x4E342E, position: [-2.5, 1.2, 0.1], args: [0.6, 0.6, 0.6], rotation: [0, 0.4, 0] }, // Crate 3 (stacked)
      { type: 'cylinder', color: 0x1E88E5, position: [0, 0.4, 3], args: [0.3, 0.3, 0.8, 8] }, // Water container 1
      { type: 'cylinder', color: 0x1E88E5, position: [0.7, 0.4, 3.2], args: [0.3, 0.3, 0.8, 8] }, // Water container 2
      { type: 'cone', color: 0x558B2F, position: [3, 1, -2], args: [1.5, 2, 4], rotation: [0, 0.78, 0] } // Small tent
    ]
  }
};
