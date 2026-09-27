// src/shooter/props.js - Island arena, natural procedural vegetation, instanced foliage & pickups
import * as THREE from 'three';
import { playAmmoPickup, playHealthPickup } from './audio.js';

export class IslandEnvironment {
  constructor(scene) {
    this.scene = scene;
    this.ammoPickups = [];
    this.healthPickups = [];
    this.ammoRespawnTime = 14.0;
    this.onHealthPicked = null;
    this.colliders = [];

    this.createLights();
    this.createIsland();
    this.createCrashSite();
    this.createCoverProps();
    this.createLookoutPlatform();
    this.createSurvivorCamp();
    this.createTidalPool();
    this.createNaturalVegetation();
    this.createAmmoPickups();
    this.spawnRoundHealthKits();
  }

  setAmmoRespawnTime(seconds) {
    this.ammoRespawnTime = seconds || 14.0;
  }

  getColliders() {
    return this.colliders;
  }

  createProceduralGrassTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Rich forest/meadow undertone
    ctx.fillStyle = '#2A462B';
    ctx.fillRect(0, 0, 512, 512);

    // Varied moss and loam patches
    for (let i = 0; i < 700; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const rad = 6 + Math.random() * 20;
      const shade = Math.random();
      if (shade < 0.4) ctx.fillStyle = 'rgba(28, 48, 26, 0.55)';
      else if (shade < 0.75) ctx.fillStyle = 'rgba(58, 86, 48, 0.45)';
      else ctx.fillStyle = 'rgba(45, 38, 28, 0.38)';
      ctx.beginPath();
      ctx.arc(x, y, rad, 0, Math.PI * 2);
      ctx.fill();
    }

    // Organic grass blades and sunlit specks
    for (let i = 0; i < 3600; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const len = 3 + Math.random() * 8;
      const angle = (Math.random() - 0.5) * 0.8 - Math.PI / 2;
      const green = Math.random();
      if (green < 0.4) ctx.strokeStyle = 'rgba(56, 102, 52, 0.65)';
      else if (green < 0.8) ctx.strokeStyle = 'rgba(78, 128, 66, 0.55)';
      else ctx.strokeStyle = 'rgba(34, 58, 32, 0.75)';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(16, 16);
    return tex;
  }

  createProceduralSandTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#C8B89E';
    ctx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = 2 + Math.random() * 6;
      ctx.fillStyle = Math.random() < 0.5 ? 'rgba(175, 155, 130, 0.45)' : 'rgba(215, 200, 175, 0.4)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(12, 12);
    return tex;
  }

  // Expanded natural climbable hill at (24, 28) plus gentle natural organic terrain swells
  getTerrainHeight(x, z) {
    let h = 0;

    // Main summit hill at (24, 28)
    const hx = x - 24;
    const hz = z - 28;
    const d2 = hx * hx + hz * hz;
    const r = 26;
    if (d2 < r * r) {
      const dist = Math.sqrt(d2);
      const t = 1 - dist / r;
      const smoothT = (1 - Math.cos(t * Math.PI)) * 0.5;
      h += smoothT * 5.4;
    }

    // Gentle natural rolling terrain across the plateau (organic swells 0.15m - 0.38m)
    const islandDist = Math.hypot(x, z);
    if (islandDist < 52) {
      const rollFactor = Math.max(0, 1.0 - islandDist / 52);
      const swells = (Math.sin(x * 0.09) * Math.cos(z * 0.09) * 0.28 + Math.sin(x * 0.18 + z * 0.14) * 0.14) * rollFactor;
      h += swells;
    }

    return h;
  }

  createLights() {
    // Warm low-angle golden sunset sun matching horizon
    const sunLight = new THREE.DirectionalLight(0xFFC888, 2.5);
    sunLight.position.set(48, 26, -32);
    sunLight.castShadow = true;

    // High quality 2048x2048 shadow map for crisp, soft-edge contact shadows
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 1.0;
    sunLight.shadow.camera.far = 150;
    sunLight.shadow.bias = -0.0004;
    sunLight.shadow.radius = 2.0;
    const d = 58;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    this.scene.add(sunLight);

    // Subtle dusk twilight fill (prevents pitch-black while preserving deep dramatic sunset shadows)
    const ambLight = new THREE.AmbientLight(0x60526B, 0.24);
    this.scene.add(ambLight);

    // Hemisphere light (warm peach dusk sky vs dark pine earth ground bounce)
    const hemiLight = new THREE.HemisphereLight(0xE28872, 0x1A2218, 0.38);
    this.scene.add(hemiLight);
  }

  createIsland() {
    const grassTex = this.createProceduralGrassTexture();
    const sandTex = this.createProceduralSandTexture();

    // Main circular sandy terrain - expanded area with organic texture
    const islandGeo = new THREE.CylinderGeometry(68, 72, 2.5, 48);
    const islandMat = new THREE.MeshStandardMaterial({
      map: sandTex,
      roughness: 0.92,
      metalness: 0.05
    });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.position.y = -1.25;
    island.receiveShadow = true;
    this.scene.add(island);

    // Inner undulating grassy terrain mesh with vertex elevation deformation
    const grassGeo = new THREE.PlaneGeometry(112, 112, 64, 64);
    grassGeo.rotateX(-Math.PI / 2);
    const gPos = grassGeo.attributes.position;
    for (let i = 0; i < gPos.count; i++) {
      const gx = gPos.getX(i);
      const gz = gPos.getZ(i);
      const distFromCenter = Math.hypot(gx, gz);
      if (distFromCenter <= 56) {
        gPos.setY(i, this.getTerrainHeight(gx, gz) + 0.05);
      } else {
        // Slopes gently down to meet the sand beach
        const t = Math.min(1.0, (distFromCenter - 56) / 4);
        gPos.setY(i, (1.0 - t) * 0.05);
      }
    }
    grassGeo.computeVertexNormals();

    const grassMat = new THREE.MeshStandardMaterial({
      map: grassTex,
      roughness: 0.88,
      metalness: 0.04
    });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.receiveShadow = true;
    this.scene.add(grass);

    // 2x Enlarged Climbable Hill with matching organic texture at (24, 0, 28)
    const hillGeo = new THREE.PlaneGeometry(54, 54, 40, 40);
    hillGeo.rotateX(-Math.PI / 2);
    const pos = hillGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const lx = pos.getX(i);
      const lz = pos.getZ(i);
      const wx = lx + 24;
      const wz = lz + 28;
      pos.setY(i, this.getTerrainHeight(wx, wz) + 0.06);
    }
    hillGeo.computeVertexNormals();

    const hillMat = new THREE.MeshStandardMaterial({
      map: grassTex,
      roughness: 0.88,
      metalness: 0.04
    });
    const hill = new THREE.Mesh(hillGeo, hillMat);
    hill.position.set(24, 0, 28);
    hill.receiveShadow = true;
    hill.castShadow = true;
    this.scene.add(hill);

    // Surrounding Ocean with atmospheric reflection
    const oceanGeo = new THREE.PlaneGeometry(480, 480);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x143438,
      roughness: 0.22,
      metalness: 0.35
    });
    const ocean = new THREE.Mesh(oceanGeo, oceanMat);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = -0.5;
    this.scene.add(ocean);
  }

  // Landmark D: Shoreline Crash Site at (-36, 0.05, -14)
  createCrashSite() {
    const site = new THREE.Group();
    site.position.set(-36, 0.05, -14);

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3E2718, roughness: 0.88, flatShading: true });
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x2A2E33, roughness: 0.5, metalness: 0.7 });
    const redGlowMat = new THREE.MeshStandardMaterial({ color: 0xFF2200, emissive: 0xFF1100, emissiveIntensity: 2.2 });

    // Fractured wooden lifeboat hull (partially embedded in the sand at an angle)
    const hullHalf = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.2, 4.6, 12, 1, false, 0, Math.PI), woodMat);
    hullHalf.rotation.z = Math.PI / 2;
    hullHalf.rotation.y = 0.42;
    hullHalf.rotation.x = 0.32;
    hullHalf.position.set(0, 0.35, 0);
    hullHalf.castShadow = true;
    site.add(hullHalf);

    // Broken keel and rib structural beams
    for (let i = -2; i <= 2; i++) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.65, 1.4), woodMat);
      rib.position.set(i * 0.72, 0.35, (i % 2 === 0 ? 0.25 : -0.25));
      rib.rotation.z = 0.18 * i;
      site.add(rib);
    }

    // Smoking supply crate thrown from wreckage
    const crate = this.buildCrate(1.15);
    crate.position.set(2.4, 0.55, 1.2);
    crate.rotation.y = 0.52;
    site.add(crate);

    // Battered military transceiver / radio unit on a driftwood plank
    const radio = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.28, 0.32), darkMetal);
    radio.position.set(1.4, 0.22, -1.1);
    site.add(radio);

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.75, 6), darkMetal);
    antenna.position.set(1.52, 0.62, -1.1);
    antenna.rotation.z = -0.28;
    site.add(antenna);

    // Blinking red emergency distress beacon LED
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), redGlowMat);
    beacon.position.set(1.3, 0.40, -1.0);
    site.add(beacon);

    const beaconLight = new THREE.PointLight(0xFF2200, 1.2, 5.0);
    beaconLight.position.set(1.3, 0.55, -1.0);
    site.add(beaconLight);

    this.scene.add(site);

    // Register solid obstacle colliders
    this.colliders.push({ x: -36, z: -14, radius: 1.85 });
    this.colliders.push({ x: -36 + 2.4, z: -14 + 1.2, radius: 0.95 });
  }

  createCoverProps() {
    // Strategically clustered tactical cover (crates, sandbag redoubts, rusty barrels)
    const propConfigs = [
      { type: 'crate', pos: [7.5, 0, 9.2], scale: 1.25, rot: 0.15 },
      { type: 'crate', pos: [9.2, 0, 10.4], scale: 0.95, rot: -0.35 },
      { type: 'crate', pos: [-11.8, 0, 7.5], scale: 1.35, rot: 0.42 },
      { type: 'crate', pos: [13.5, 0, -14.2], scale: 1.15, rot: 0.28 },
      { type: 'crate', pos: [-15.2, 0, -13.5], scale: 1.25, rot: -0.18 },

      { type: 'sandbags', pos: [-0.5, 0, 13.8], rot: 0.18 },
      { type: 'sandbags', pos: [-9.8, 0, -5.2], rot: -0.55 },
      { type: 'sandbags', pos: [15.4, 0, 3.8], rot: 1.05 },

      { type: 'barrel', pos: [5.8, 0, -9.8] },
      { type: 'barrel', pos: [6.9, 0, -9.1] },
      { type: 'barrel', pos: [-17.5, 0, 1.8] },
      { type: 'barrel', pos: [2.2, 0, -19.4] }
    ];

    propConfigs.forEach(cfg => {
      let mesh;
      switch (cfg.type) {
        case 'crate':
          mesh = this.buildCrate(cfg.scale || 1.0);
          this.colliders.push({ x: cfg.pos[0], z: cfg.pos[2], radius: 0.85 * (cfg.scale || 1.0) });
          break;
        case 'sandbags':
          mesh = this.buildSandbags();
          this.colliders.push({ x: cfg.pos[0], z: cfg.pos[2], radius: 1.25 });
          break;
        case 'barrel':
          mesh = this.buildBarrel();
          this.colliders.push({ x: cfg.pos[0], z: cfg.pos[2], radius: 0.50 });
          break;
      }
      if (mesh) {
        mesh.position.set(cfg.pos[0], this.getTerrainHeight(cfg.pos[0], cfg.pos[2]) + cfg.pos[1], cfg.pos[2]);
        if (cfg.rot) mesh.rotation.y = cfg.rot;
        this.scene.add(mesh);
      }
    });
  }

  // Landmark A: Wooden lookout observation deck at hill summit (24, 5.4, 28)
  createLookoutPlatform() {
    const group = new THREE.Group();
    group.position.set(24, 5.4, 28);
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x6E472A, roughness: 0.85, flatShading: true });
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x482E18, roughness: 0.9, flatShading: true });

    // Platform floor / deck
    const deck = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.16, 4.2), woodMat);
    deck.receiveShadow = true;
    deck.castShadow = true;
    group.add(deck);

    // 4 Corner stilts anchored into summit ground
    const postPositions = [
      [-1.9, -1.8, -1.9],
      [1.9, -1.8, -1.9],
      [-1.9, -1.8, 1.9],
      [1.9, -1.8, 1.9]
    ];
    postPositions.forEach(p => {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.24, 4.2, 0.24), darkWoodMat);
      post.position.set(p[0], -2.1, p[2]);
      post.castShadow = true;
      group.add(post);

      // Register stilt colliders so player cannot walk through platform legs
      this.colliders.push({ x: 24 + p[0], z: 28 + p[2], radius: 0.35 });
    });

    // Perimeter Railings (with walking ramp opening on South-West)
    const railN = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.1, 0.1), woodMat);
    railN.position.set(0, 0.85, -2.0);
    group.add(railN);

    const railE = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 4.2), woodMat);
    railE.position.set(2.0, 0.85, 0);
    group.add(railE);

    const railW = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 4.2), woodMat);
    railW.position.set(-2.0, 0.85, 0);
    group.add(railW);

    const railS = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.1, 0.1), woodMat);
    railS.position.set(1.0, 0.85, 2.0);
    group.add(railS);

    // Observation crate on lookout
    const crate = this.buildCrate(0.75);
    crate.position.set(-1.2, 0.45, -1.2);
    group.add(crate);
    this.colliders.push({ x: 24 - 1.2, z: 28 - 1.2, radius: 0.65 });

    this.scene.add(group);
  }

  // Landmark B: Abandoned survivor camp with extinguished campfire, seating logs & crates at (-26, 0, 8)
  createSurvivorCamp() {
    const camp = new THREE.Group();
    camp.position.set(-26, 0.05, 8);

    // Ring of river stones around fire pit
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x484B4F, roughness: 0.92, flatShading: true });
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * Math.PI * 2;
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28, 0), stoneMat);
      stone.position.set(Math.cos(angle) * 1.2, 0.14, Math.sin(angle) * 1.2);
      stone.rotation.set(Math.random(), Math.random(), Math.random());
      stone.castShadow = true;
      camp.add(stone);
    }

    // Charred ash circle
    const ash = new THREE.Mesh(
      new THREE.CircleGeometry(0.95, 12),
      new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.95, flatShading: true })
    );
    ash.rotation.x = -Math.PI / 2;
    ash.position.y = 0.02;
    camp.add(ash);

    // Burnt criss-crossed wood logs
    const logMat = new THREE.MeshStandardMaterial({ color: 0x2E1D13, roughness: 0.9, flatShading: true });
    const log1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 1.3, 6), logMat);
    log1.rotation.set(0.2, 0.6, Math.PI / 2);
    log1.position.set(0, 0.12, 0);
    camp.add(log1);

    const log2 = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.2, 6), logMat);
    log2.rotation.set(-0.3, -0.7, Math.PI / 2);
    log2.position.set(0, 0.15, 0);
    camp.add(log2);

    // Faint warm ember glow pointlight
    const emberLight = new THREE.PointLight(0xFF6B2B, 0.85, 4.0);
    emberLight.position.set(0, 0.3, 0);
    camp.add(emberLight);

    // 2 Weathered Seating logs
    const seatLogMat = new THREE.MeshStandardMaterial({ color: 0x5C4028, roughness: 0.88, flatShading: true });
    const seat1 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 2.2, 8), seatLogMat);
    seat1.rotation.z = Math.PI / 2;
    seat1.position.set(0, 0.22, 2.2);
    seat1.castShadow = true;
    camp.add(seat1);

    const seat2 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.8, 8), seatLogMat);
    seat2.rotation.x = Math.PI / 2;
    seat2.position.set(-2.2, 0.22, 0);
    seat2.castShadow = true;
    camp.add(seat2);

    // 2 Stacked survivor supply crates
    const crate1 = this.buildCrate(1.1);
    crate1.position.set(1.8, 0.55, -1.8);
    camp.add(crate1);

    const crate2 = this.buildCrate(0.85);
    crate2.position.set(2.0, 1.45, -1.8);
    camp.add(crate2);

    this.scene.add(camp);

    // Register campfire, logs, and supply crate colliders
    this.colliders.push({ x: -26, z: 8, radius: 1.25 });
    this.colliders.push({ x: -26, z: 8 + 2.2, radius: 0.65 });
    this.colliders.push({ x: -26 - 2.2, z: 8, radius: 0.65 });
    this.colliders.push({ x: -26 + 1.8, z: 8 - 1.8, radius: 0.95 });
  }

  // Landmark C: Coastal freshwater tidal pool at (-18, 0, -28)
  createTidalPool() {
    const pool = new THREE.Group();
    pool.position.set(-18, 0.06, -28);

    // Translucent clear turquoise water disc
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x38908F,
      roughness: 0.12,
      metalness: 0.35,
      transparent: true,
      opacity: 0.82
    });
    const water = new THREE.Mesh(new THREE.CircleGeometry(4.2, 24), waterMat);
    water.rotation.x = -Math.PI / 2;
    pool.add(water);

    // Coastal perimeter rock rim
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x3E454B, roughness: 0.85, flatShading: true });
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2 + (Math.random() * 0.2);
      const dist = 4.1 + (Math.random() * 0.5);
      const scale = 0.45 + Math.random() * 0.45;
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(scale, 0), rockMat);
      rock.position.set(Math.cos(angle) * dist, scale * 0.4, Math.sin(angle) * dist);
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.castShadow = true;
      pool.add(rock);
    }

    this.scene.add(pool);

    // Prevent walking into deep tidal pool
    this.colliders.push({ x: -18, z: -28, radius: 3.8 });
  }

  // ─── Procedural Natural Island Vegetation (Dense Forests, Clearings, Organic Distribution) ───
  createNaturalVegetation() {
    // Check if position is safe (not on player spawn, ammo pickup, health kit, or main pathways)
    const isPositionBlocked = (x, z) => {
      // 1. Player spawn clearing (radius 8.5m)
      if (Math.hypot(x, z) < 8.5) return true;

      // 2. Expanded Island perimeter dropoff (radius > 58m)
      if (Math.hypot(x, z) > 58.0) return true;

      // 3. Landmarks exclusions
      if (Math.hypot(x - 24, z - 28) < 9.5) return true; // Hill lookout deck summit
      if (Math.hypot(x - (-26), z - 8) < 6.5) return true; // Survivor camp
      if (Math.hypot(x - (-18), z - (-28)) < 6.5) return true; // Tidal pool
      if (Math.hypot(x - (-36), z - (-14)) < 6.0) return true; // Shore crash site

      // 4. Ammo pickup exclusion radius
      const ammoSpots = [
        [12, 15], [-15, 12], [-18, -16], [15, -18]
      ];
      for (const [ax, az] of ammoSpots) {
        if (Math.hypot(x - ax, z - az) < 3.8) return true;
      }

      // 5. Natural Meandering Pathways (East-West & North-South corridors)
      // Path 1 (winding East-West)
      const path1Z = Math.sin(x * 0.12) * 3.5;
      if (Math.abs(z - path1Z) < 3.2 && Math.abs(x) < 30) return true;

      // Path 2 (winding North-South)
      const path2X = Math.cos(z * 0.12) * 3.5;
      if (Math.abs(x - path2X) < 3.2 && Math.abs(z) < 30) return true;

      return false;
    };

    // 7 Organic Forest Clusters with rich distinct character
    const clusters = [
      // North-West Dense Pine Grove
      { cx: -25, cz: 23, radius: 13, count: 8, types: ['tall', 'tall', 'medium', 'short', 'medium', 'tall'] },
      // South-East Palm Ridge
      { cx: 26, cz: -22, radius: 12, count: 7, types: ['tall', 'tall', 'medium', 'short', 'medium', 'tall'] },
      // East Hardwood Copse
      { cx: 32, cz: 6, radius: 11, count: 6, types: ['medium', 'tall', 'short', 'medium', 'tall'] },
      // South-West Coastal Copse
      { cx: -27, cz: -18, radius: 10, count: 6, types: ['medium', 'tall', 'short', 'short', 'medium'] },
      // North Perimeter Shrubland
      { cx: 7, cz: 36, radius: 10, count: 5, types: ['tall', 'medium', 'short', 'medium'] },
      // Hill North-West Slope Woodlands
      { cx: 10, cz: 36, radius: 9, count: 5, types: ['medium', 'tall', 'short', 'medium'] },
      // South-Central Thicket
      { cx: -5, cz: -28, radius: 9, count: 5, types: ['tall', 'medium', 'short', 'tall'] }
    ];

    // Seeded random tree generation within organic clusters
    const placedTreePositions = [];

    clusters.forEach(c => {
      for (let i = 0; i < c.count; i++) {
        let attempts = 0;
        let placed = false;
        while (attempts < 25 && !placed) {
          attempts++;
          const angle = Math.random() * Math.PI * 2;
          const dist = (Math.random() * 0.72 + 0.28) * c.radius;
          const tx = c.cx + Math.cos(angle) * dist;
          const tz = c.cz + Math.sin(angle) * dist;

          if (isPositionBlocked(tx, tz)) continue;

          // Check distance to other trees to avoid unnatural overlap
          let tooClose = false;
          for (const pos of placedTreePositions) {
            if (Math.hypot(tx - pos[0], tz - pos[1]) < 3.0) {
              tooClose = true;
              break;
            }
          }
          if (tooClose) continue;

          const type = c.types[i % c.types.length];
          const scale = 0.85 + Math.random() * 0.40; // 0.85x to 1.25x variation
          const tree = this.buildTreeVariant(type, scale);
          const treeY = this.getTerrainHeight(tx, tz);
          tree.position.set(tx, treeY, tz);
          tree.rotation.y = Math.random() * Math.PI * 2;
          // Organic ocean wind tilt
          tree.rotation.z = (Math.random() - 0.5) * 0.08;
          tree.rotation.x = (Math.random() - 0.5) * 0.08;
          this.scene.add(tree);

          placedTreePositions.push([tx, tz]);
          // Register tree trunk as solid obstacle collider (radius 0.48m)
          this.colliders.push({ x: tx, z: tz, radius: 0.48 });
          placed = true;
        }
      }
    });

    // Sparse individual trees in open peripheral zones
    const sparseLocations = [
      [-36, 4], [36, -5], [-8, -34], [38, 16], [-32, -6], [42, -14], [-12, 34]
    ];
    sparseLocations.forEach(pos => {
      if (!isPositionBlocked(pos[0], pos[1])) {
        const tree = this.buildTreeVariant('medium', 0.9 + Math.random() * 0.3);
        const treeY = this.getTerrainHeight(pos[0], pos[1]);
        tree.position.set(pos[0], treeY, pos[1]);
        tree.rotation.y = Math.random() * Math.PI * 2;
        this.scene.add(tree);
        placedTreePositions.push(pos);
        // Register tree trunk as solid obstacle collider
        this.colliders.push({ x: pos[0], z: pos[1], radius: 0.48 });
      }
    });

    // ─── HIGH-PERFORMANCE INSTANCED ENVIRONMENT DETAILS (4 Draw Calls Total!) ───
    this.createInstancedGrass(placedTreePositions);
    this.createInstancedRocks(placedTreePositions);
    this.createInstancedBushes(placedTreePositions);
    this.createInstancedFallenLogs(placedTreePositions);
  }

  // 1. Instanced Wild Grass Tufts (Single Draw Call!)
  createInstancedGrass(treePositions) {
    const grassBladeGeo = new THREE.ConeGeometry(0.11, 0.60, 4);
    const grassBladeMat = new THREE.MeshStandardMaterial({
      color: 0x3E7D3B,
      roughness: 0.90,
      flatShading: true
    });

    const count = 720;
    const instancedGrass = new THREE.InstancedMesh(grassBladeGeo, grassBladeMat, count);
    instancedGrass.castShadow = false;
    instancedGrass.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let idx = 0;

    while (idx < count) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 9.0 + Math.random() * 38.0;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      const y = this.getTerrainHeight(x, z) + 0.30;
      dummy.position.set(x, y, z);
      dummy.rotation.y = Math.random() * Math.PI * 2;
      dummy.rotation.z = (Math.random() - 0.5) * 0.28;
      const s = 0.65 + Math.random() * 0.65;
      dummy.scale.set(s, s * (0.8 + Math.random() * 0.4), s);
      dummy.updateMatrix();

      instancedGrass.setMatrixAt(idx, dummy.matrix);
      idx++;
    }

    instancedGrass.instanceMatrix.needsUpdate = true;
    this.scene.add(instancedGrass);
  }

  // 2. Instanced Rocks & Boulders (Single Draw Call!)
  createInstancedRocks(treePositions) {
    const rockGeo = new THREE.DodecahedronGeometry(0.48, 0);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x726E67,
      roughness: 0.92,
      flatShading: true
    });

    const count = 120;
    const instancedRocks = new THREE.InstancedMesh(rockGeo, rockMat, count);
    instancedRocks.castShadow = true;
    instancedRocks.receiveShadow = true;

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      let x, z;
      if (i < 48 && treePositions.length > 0) {
        // Cluster near trees and forest margins
        const parent = treePositions[i % treePositions.length];
        const offsetAngle = Math.random() * Math.PI * 2;
        const offsetDist = 1.2 + Math.random() * 2.5;
        x = parent[0] + Math.cos(offsetAngle) * offsetDist;
        z = parent[1] + Math.sin(offsetAngle) * offsetDist;
      } else {
        // Outer shoreline and ridges
        const angle = Math.random() * Math.PI * 2;
        const dist = 26 + Math.random() * 20;
        x = Math.cos(angle) * dist;
        z = Math.sin(angle) * dist;
      }

      const s = 0.55 + Math.random() * 0.90;
      const y = this.getTerrainHeight(x, z) + (s * 0.42) / 2;
      dummy.position.set(x, y, z);
      dummy.rotation.set(Math.random() * 2, Math.random() * Math.PI * 2, Math.random() * 2);
      dummy.scale.set(s * 1.1, s * 0.65, s * 0.95);
      dummy.updateMatrix();

      instancedRocks.setMatrixAt(i, dummy.matrix);
    }

    instancedRocks.instanceMatrix.needsUpdate = true;
    this.scene.add(instancedRocks);
  }

  // 3. Instanced Bushes & Foliage (Single Draw Call!)
  createInstancedBushes(treePositions) {
    const bushGeo = new THREE.DodecahedronGeometry(0.70, 1);
    const bushMat = new THREE.MeshStandardMaterial({
      color: 0x2A6330,
      roughness: 0.85,
      flatShading: true
    });

    const count = 80;
    const instancedBushes = new THREE.InstancedMesh(bushGeo, bushMat, count);
    instancedBushes.castShadow = true;
    instancedBushes.receiveShadow = true;

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      let x, z;
      if (treePositions.length > 0 && i < 55) {
        const parent = treePositions[i % treePositions.length];
        const offsetAngle = Math.random() * Math.PI * 2;
        const offsetDist = 1.8 + Math.random() * 3.5;
        x = parent[0] + Math.cos(offsetAngle) * offsetDist;
        z = parent[1] + Math.sin(offsetAngle) * offsetDist;
      } else {
        const angle = Math.random() * Math.PI * 2;
        const dist = 12 + Math.random() * 38;
        x = Math.cos(angle) * dist;
        z = Math.sin(angle) * dist;
      }

      const s = 0.70 + Math.random() * 0.65;
      const y = this.getTerrainHeight(x, z) + (s * 0.75) / 2;
      dummy.position.set(x, y, z);
      dummy.rotation.set(0, Math.random() * Math.PI * 2, 0);
      dummy.scale.set(s, s * 0.75, s);
      dummy.updateMatrix();

      instancedBushes.setMatrixAt(i, dummy.matrix);
    }

    instancedBushes.instanceMatrix.needsUpdate = true;
    this.scene.add(instancedBushes);
  }

  // 4. Instanced Weathered Fallen Logs (Single Draw Call!)
  createInstancedFallenLogs(treePositions) {
    const logGeo = new THREE.CylinderGeometry(0.18, 0.24, 2.6, 7);
    const logMat = new THREE.MeshStandardMaterial({
      color: 0x483526,
      roughness: 0.90,
      flatShading: true
    });

    const count = 35;
    const instancedLogs = new THREE.InstancedMesh(logGeo, logMat, count);
    instancedLogs.castShadow = true;
    instancedLogs.receiveShadow = true;

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const parent = treePositions[(i * 3) % treePositions.length] || [0, 0];
      const angle = Math.random() * Math.PI * 2;
      const dist = 2.0 + Math.random() * 3.5;
      const x = parent[0] + Math.cos(angle) * dist;
      const z = parent[1] + Math.sin(angle) * dist;

      const y = this.getTerrainHeight(x, z) + 0.16;
      dummy.position.set(x, y, z);
      // Lay log flat on ground with random heading
      dummy.rotation.set(0, Math.random() * Math.PI * 2, Math.PI / 2);
      const s = 0.85 + Math.random() * 0.35;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();

      instancedLogs.setMatrixAt(i, dummy.matrix);
    }

    instancedLogs.instanceMatrix.needsUpdate = true;
    this.scene.add(instancedLogs);
  }

  buildTreeVariant(type = 'medium', scaleMultiplier = 1.0) {
    const group = new THREE.Group();
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x362518, roughness: 0.94, metalness: 0.04 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x225528, roughness: 0.85, metalness: 0.05 });
    const darkLeafMat = new THREE.MeshStandardMaterial({ color: 0x143D1A, roughness: 0.88, metalness: 0.05 });
    const highlightLeafMat = new THREE.MeshStandardMaterial({ color: 0x3D7532, roughness: 0.82, metalness: 0.05 });
    const canopyTipMat = new THREE.MeshStandardMaterial({ color: 0x52883A, roughness: 0.80, metalness: 0.06 });

    if (type === 'tall') {
      // 1. Towering Island Conifer (15 - 18m) with root flare & layered jagged branch tiers
      const baseTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.82, 4.5, 9), trunkMat);
      baseTrunk.position.y = 2.25;
      baseTrunk.castShadow = true;
      baseTrunk.receiveShadow = true;
      group.add(baseTrunk);

      const upperTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.48, 11.5, 8), trunkMat);
      upperTrunk.position.y = 9.8;
      upperTrunk.castShadow = true;
      upperTrunk.receiveShadow = true;
      group.add(upperTrunk);

      // Tier 1 (Lowest, widest bough)
      const t1 = new THREE.Mesh(new THREE.ConeGeometry(4.6, 4.2, 9), darkLeafMat);
      t1.position.y = 9.2;
      t1.castShadow = true;
      t1.receiveShadow = true;
      group.add(t1);

      // Tier 2
      const t2 = new THREE.Mesh(new THREE.ConeGeometry(3.9, 3.8, 9), leafMat);
      t2.position.y = 11.8;
      t2.castShadow = true;
      t2.receiveShadow = true;
      group.add(t2);

      // Tier 3
      const t3 = new THREE.Mesh(new THREE.ConeGeometry(3.1, 3.4, 8), highlightLeafMat);
      t3.position.y = 14.2;
      t3.castShadow = true;
      t3.receiveShadow = true;
      group.add(t3);

      // Tier 4
      const t4 = new THREE.Mesh(new THREE.ConeGeometry(2.3, 3.0, 7), leafMat);
      t4.position.y = 16.2;
      t4.castShadow = true;
      t4.receiveShadow = true;
      group.add(t4);

      // Tier 5 (Sunlit spire crest)
      const t5 = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2.4, 6), canopyTipMat);
      t5.position.y = 18.0;
      t5.castShadow = true;
      t5.receiveShadow = true;
      group.add(t5);

    } else if (type === 'short') {
      // 2. Coastal Pine / Gnarled Maritime Tree (8 - 11m) with bent trunk & dense rounded canopy
      const trunkLower = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.65, 4.0, 8), trunkMat);
      trunkLower.position.y = 2.0;
      trunkLower.rotation.z = 0.08;
      trunkLower.castShadow = true;
      trunkLower.receiveShadow = true;
      group.add(trunkLower);

      const trunkUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 3.8, 7), trunkMat);
      trunkUpper.position.set(0.25, 4.8, 0);
      trunkUpper.rotation.z = -0.12;
      trunkUpper.castShadow = true;
      trunkUpper.receiveShadow = true;
      group.add(trunkUpper);

      // Multi-lobed organic foliage canopy
      const c1 = new THREE.Mesh(new THREE.IcosahedronGeometry(2.6, 1), darkLeafMat);
      c1.position.set(-0.5, 6.2, 0.4);
      c1.scale.set(1.2, 0.85, 1.15);
      c1.castShadow = true;
      c1.receiveShadow = true;
      group.add(c1);

      const c2 = new THREE.Mesh(new THREE.IcosahedronGeometry(2.8, 1), leafMat);
      c2.position.set(0.6, 6.8, -0.3);
      c2.scale.set(1.25, 0.9, 1.2);
      c2.castShadow = true;
      c2.receiveShadow = true;
      group.add(c2);

      const c3 = new THREE.Mesh(new THREE.IcosahedronGeometry(2.0, 1), highlightLeafMat);
      c3.position.set(0.1, 8.2, 0.1);
      c3.scale.set(1.1, 0.95, 1.1);
      c3.castShadow = true;
      c3.receiveShadow = true;
      group.add(c3);

    } else {
      // 3. Towering Island Broadleaf / Hardwood (12 - 15m) with sprawling organic crown
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.72, 8.0, 9), trunkMat);
      trunk.position.y = 4.0;
      trunk.castShadow = true;
      trunk.receiveShadow = true;
      group.add(trunk);

      // Major branch forks
      const limb1 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 3.2, 6), trunkMat);
      limb1.position.set(-0.8, 7.2, 0.4);
      limb1.rotation.set(0.2, 0, 0.65);
      limb1.castShadow = true;
      limb1.receiveShadow = true;
      group.add(limb1);

      const limb2 = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.30, 3.0, 6), trunkMat);
      limb2.position.set(0.9, 7.4, -0.3);
      limb2.rotation.set(-0.25, 0, -0.6);
      limb2.castShadow = true;
      limb2.receiveShadow = true;
      group.add(limb2);

      // Volumetric organic canopy domes
      const mainCrown = new THREE.Mesh(new THREE.IcosahedronGeometry(3.6, 1), leafMat);
      mainCrown.position.set(0, 9.4, 0);
      mainCrown.scale.set(1.25, 0.9, 1.25);
      mainCrown.castShadow = true;
      mainCrown.receiveShadow = true;
      group.add(mainCrown);

      const westCrown = new THREE.Mesh(new THREE.IcosahedronGeometry(2.8, 1), darkLeafMat);
      westCrown.position.set(-2.0, 8.6, 0.8);
      westCrown.scale.set(1.15, 0.85, 1.15);
      westCrown.castShadow = true;
      westCrown.receiveShadow = true;
      group.add(westCrown);

      const eastCrown = new THREE.Mesh(new THREE.IcosahedronGeometry(2.7, 1), highlightLeafMat);
      eastCrown.position.set(2.1, 8.8, -0.7);
      eastCrown.scale.set(1.15, 0.88, 1.15);
      eastCrown.castShadow = true;
      eastCrown.receiveShadow = true;
      group.add(eastCrown);

      const topCrown = new THREE.Mesh(new THREE.IcosahedronGeometry(2.3, 1), canopyTipMat);
      topCrown.position.set(0.2, 11.4, 0.1);
      topCrown.scale.set(1.1, 0.95, 1.1);
      topCrown.castShadow = true;
      topCrown.receiveShadow = true;
      group.add(topCrown);
    }

    const finalScale = scaleMultiplier || 1.0;
    group.scale.set(finalScale, finalScale, finalScale);
    return group;
  }

  buildCrate(scale = 1.0) {
    const geo = new THREE.BoxGeometry(1.2 * scale, 1.2 * scale, 1.2 * scale);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x8B5A2B,
      roughness: 0.8,
      flatShading: true
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = (1.2 * scale) / 2;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  buildSandbags() {
    const group = new THREE.Group();
    const bagMat = new THREE.MeshStandardMaterial({ color: 0xC4B088, roughness: 0.9 });
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        const bag = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.5), bagMat);
        bag.position.set((col - 1) * 0.85, row * 0.35 + 0.18, 0);
        bag.rotation.y = (Math.random() - 0.5) * 0.1;
        bag.castShadow = true;
        group.add(bag);
      }
    }
    return group;
  }

  buildBarrel() {
    const geo = new THREE.CylinderGeometry(0.42, 0.42, 1.25, 12);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xC15A3A,
      metalness: 0.4,
      roughness: 0.5
    });
    const barrel = new THREE.Mesh(geo, mat);
    barrel.position.y = 0.625;
    barrel.castShadow = true;
    return barrel;
  }

  // ─── AMMO PICKUPS (Golden Glowing Crates) ───
  createAmmoPickups() {
    const pickupLocations = [
      [12, 0, 15],
      [-15, 0, 12],
      [-18, 0, -16],
      [15, 0, -18]
    ];

    pickupLocations.forEach(pos => {
      const groundY = this.getTerrainHeight(pos[0], pos[2]);
      const group = new THREE.Group();
      group.position.set(pos[0], groundY + 0.35, pos[2]);

      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.45, 0.6),
        new THREE.MeshStandardMaterial({
          color: 0xFFAA00,
          emissive: 0xDD8800,
          emissiveIntensity: 0.5,
          metalness: 0.5,
          roughness: 0.3
        })
      );
      group.add(box);

      const light = new THREE.PointLight(0xFFAA00, 1.5, 4);
      light.position.y = 0.6;
      group.add(light);

      this.scene.add(group);

      this.ammoPickups.push({
        group,
        position: new THREE.Vector3(pos[0], groundY, pos[2]),
        isActive: true,
        respawnTimer: 0
      });
    });
  }

  // ─── HEALTH KITS (Medical Emergency Kits) ───
  spawnRoundHealthKits() {
    this.healthPickups.forEach(p => {
      this.scene.remove(p.group);
    });
    this.healthPickups = [];

    const validSpots = [
      [-10, 0, -12],
      [14, 0, 8],
      [-16, 0, 6],
      [8, 0, -16],
      [0, 0, 20],
      [-8, 0, 18],
      [24, 0, 28], // Atop lookout hill
      [-26, 0, 8]  // At survivor camp
    ];

    const shuffled = validSpots.sort(() => Math.random() - 0.5);
    const count = 1 + (Math.random() < 0.6 ? 1 : 0);

    for (let i = 0; i < count; i++) {
      const pos = shuffled[i];
      const groundY = this.getTerrainHeight(pos[0], pos[2]);
      const kitGroup = this.buildHealthKitMesh();
      kitGroup.position.set(pos[0], groundY + 0.45, pos[2]);

      this.scene.add(kitGroup);

      this.healthPickups.push({
        group: kitGroup,
        position: new THREE.Vector3(pos[0], groundY, pos[2]),
        isActive: true
      });
    }
  }

  buildHealthKitMesh() {
    const group = new THREE.Group();
    group.name = 'health-kit-pickup';

    const caseGeo = new THREE.BoxGeometry(0.70, 0.40, 0.48);
    const caseMat = new THREE.MeshStandardMaterial({
      color: 0xF5F7FA,
      roughness: 0.4,
      metalness: 0.15
    });
    const mainCase = new THREE.Mesh(caseGeo, caseMat);
    mainCase.castShadow = true;
    group.add(mainCase);

    const redMat = new THREE.MeshStandardMaterial({
      color: 0xE53935,
      roughness: 0.35,
      metalness: 0.2
    });
    const latchL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.50), redMat);
    latchL.position.set(-0.35, 0, 0);
    group.add(latchL);

    const latchR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.50), redMat);
    latchR.position.set(0.35, 0, 0);
    group.add(latchR);

    // 3D Red Cross on top lid
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.03, 0.10), redMat);
    crossH.position.set(0, 0.21, 0);
    group.add(crossH);

    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.03, 0.32), redMat);
    crossV.position.set(0, 0.21, 0);
    group.add(crossV);

    // Red Cross on front side
    const sideCrossH = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.02), redMat);
    sideCrossH.position.set(0, 0, 0.25);
    group.add(sideCrossH);

    const sideCrossV = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.24, 0.02), redMat);
    sideCrossV.position.set(0, 0, 0.25);
    group.add(sideCrossV);

    const beaconLight = new THREE.PointLight(0x00FF88, 1.4, 4.5);
    beaconLight.position.y = 0.5;
    group.add(beaconLight);

    return group;
  }

  onNewRound(waveNum) {
    this.spawnRoundHealthKits();
  }

  update(delta, player) {
    const now = performance.now() * 0.001;

    // 1. Update Ammo Pickups
    this.ammoPickups.forEach(pickup => {
      if (!pickup.isActive) {
        pickup.respawnTimer -= delta;
        if (pickup.respawnTimer <= 0) {
          pickup.isActive = true;
          pickup.group.visible = true;
        }
        return;
      }

      pickup.group.rotation.y += delta * 1.5;
      pickup.group.position.y = pickup.position.y + 0.35 + Math.sin(now * 3.0) * 0.08;

      if (pickup.position.distanceTo(player.position) < 2.0) {
        pickup.isActive = false;
        pickup.group.visible = false;
        pickup.respawnTimer = this.ammoRespawnTime;

        player.addAmmo(30);
        playAmmoPickup();
      }
    });

    // 2. Update Health Kit Pickups
    for (let i = this.healthPickups.length - 1; i >= 0; i--) {
      const hpKit = this.healthPickups[i];
      if (!hpKit.isActive) continue;

      hpKit.group.rotation.y += delta * 1.2;
      hpKit.group.position.y = hpKit.position.y + 0.45 + Math.sin(now * 2.5 + hpKit.position.x) * 0.09;

      if (hpKit.position.distanceTo(player.position) < 2.0) {
        if (player.health < player.maxHealth) {
          hpKit.isActive = false;
          this.scene.remove(hpKit.group);
          this.healthPickups.splice(i, 1);

          const healed = player.addHealth(35);
          playHealthPickup();

          if (this.onHealthPicked) {
            this.onHealthPicked(healed);
          }
        }
      }
    }
  }
}
