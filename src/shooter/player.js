import * as THREE from 'three';
import { playWeaponShot, playDryFire, playReload, playZombieHit, playPlayerHurt, playWeaponSwitch, playJumpSound } from './audio.js';
import { createProceduralPlayer } from './characterModel.js';
import { WEAPONS, WEAPON_TYPES, WEAPON_LIST } from './weapons.js';
import { CHARACTERS, getCharacterById } from './characters.js';
import { progressionManager } from './progression.js';

// Pre-allocated scratch objects to eliminate per-frame GC allocations
const _camOffset = new THREE.Vector3();
const _rightVec = new THREE.Vector3();
const _target = new THREE.Vector3();
const _desiredCamPos = new THREE.Vector3();
const _forwardDir = new THREE.Vector3();
const _aimPoint = new THREE.Vector3();
const _camForward = new THREE.Vector3();
const _toZombie = new THREE.Vector3();
const _targetVel = new THREE.Vector3();
const _colliderList = [];

export class Player {
  constructor(scene, camera, characterId = 'maya') {
    this.scene = scene;
    this.camera = camera;

    // Character identity & traits
    this.character = getCharacterById(characterId);

    // Player stats
    this.baseSpeed = 7.5;
    this.speed = this.baseSpeed * (this.character.speedMultiplier || 1.0);
    this.maxHealth = 100 + (this.character.healthBonus || 0);
    this.health = this.maxHealth;
    this.damageResistance = this.character.damageResistance || 1.0;
    this.difficultyReduction = 1.0;
    this.invulnerableTimer = 2.5; // Safe grace period on initial spawn to prevent immediate death

    // Jump physics state
    this.velocityY = 0;
    this.gravity = -24.0;
    this.jumpForce = 8.8;
    this.isGrounded = true;

    // Smooth movement & velocity
    this.velocity = new THREE.Vector3();
    this.currentMeshYaw = Math.PI;

    // Weapons Inventory & State
    this.weaponsState = {};
    WEAPON_LIST.forEach(w => {
      this.weaponsState[w.id] = {
        magazine: w.magSize,
        reserveAmmo: w.defaultReserve
      };
    });

    // Currently equipped weapon (respects unlocked progression state)
    const savedWeapon = progressionManager.getCurrentWeapon();
    const initialWeaponId = progressionManager.isWeaponUnlocked(savedWeapon) ? savedWeapon : 'pistol';
    this.activeWeapon = WEAPONS[initialWeaponId] || WEAPONS[WEAPON_TYPES.PISTOL];
    this.lastFireTime = -10.0;

    // Reload state
    this.isReloading = false;
    this.reloadDuration = this.activeWeapon.reloadTime * (this.character.reloadSpeedMultiplier || 1.0);
    this.reloadTimer = 0;

    // Transform
    this.position = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0.05;

    // Camera settings (Over-the-shoulder Free Fire combat style)
    this.camDistance = 4.2;
    this.camHeight = 1.85;
    this.shoulderOffset = 0.65;

    // Smoothed camera state
    this.currentCamPos = new THREE.Vector3(0, 2.5, 4.2);
    this.currentLookAt = new THREE.Vector3(0, 1.45, -20);
    this.aimPoint = new THREE.Vector3();
    this.forwardDir = new THREE.Vector3();

    // Create 3D representation: Root Group
    this.mesh = new THREE.Group();
    this.mesh.name = 'player-root';

    // Procedural 3D Modular Soldier (two-handed weapon hold, customized to chosen survivor)
    this.proceduralPlayer = createProceduralPlayer(this.character, this.activeWeapon.id);
    this.mesh.add(this.proceduralPlayer.mesh);
    this.scene.add(this.mesh);

    // Muzzle flash light
    this.muzzleLight = new THREE.PointLight(0xFFA500, 0, 7);
    this.scene.add(this.muzzleLight);

    // 3D Visual Muzzle Flash Mesh (Star burst & emissive core)
    this.muzzleFlashGroup = new THREE.Group();
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xFFF2A0,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const flashGeom = new THREE.PlaneGeometry(0.38, 0.38);
    const flashPlane1 = new THREE.Mesh(flashGeom, flashMat);
    const flashPlane2 = new THREE.Mesh(flashGeom, flashMat);
    flashPlane2.rotation.y = Math.PI / 2;
    const flashCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
    );
    this.muzzleFlashGroup.add(flashPlane1, flashPlane2, flashCore);
    this.muzzleFlashGroup.visible = false;
    this.scene.add(this.muzzleFlashGroup);
    this.muzzleFlashTimer = 0;

    // Hitscan raycaster
    this.raycaster = new THREE.Raycaster();

    // Callbacks
    this.onHit = null;
    this.onTracer = null;
    this.onDryFire = null;
    this.onDamageTaken = null;
    this.onWeaponChange = null;
    this.onWeaponLocked = null;
  }

  setCharacter(characterId) {
    this.character = getCharacterById(characterId);
    this.speed = this.baseSpeed * (this.character.speedMultiplier || 1.0);
    this.maxHealth = 100 + (this.character.healthBonus || 0);
    this.health = Math.min(this.health, this.maxHealth);
    this.damageResistance = this.character.damageResistance || 1.0;

    if (this.proceduralPlayer) {
      this.mesh.remove(this.proceduralPlayer.mesh);
    }
    this.proceduralPlayer = createProceduralPlayer(this.character, this.activeWeapon.id);
    this.mesh.add(this.proceduralPlayer.mesh);
  }

  applyDifficulty(preset) {
    if (!preset) return;
    this.maxHealth = preset.playerHealth + (this.character.healthBonus || 0);
    this.health = this.maxHealth;
    this.difficultyReduction = preset.damageReduction !== undefined ? preset.damageReduction : 1.0;
    this.invulnerableTimer = 2.5; // Grace period on difficulty setup or wave start

    WEAPON_LIST.forEach(w => {
      const scale = preset.startingReserve / 120;
      this.weaponsState[w.id] = {
        magazine: preset.id === 'easy' ? Math.round(w.magSize * 1.5) : w.magSize,
        reserveAmmo: Math.round(w.defaultReserve * scale)
      };
    });

    this.isReloading = false;
  }

  // ─── Weapon Switching (Seamless & Instant While Running) ───
  switchWeapon(weaponId) {
    if (!WEAPONS[weaponId]) return;

    // Check if weapon is locked by level progression
    if (!progressionManager.isWeaponUnlocked(weaponId)) {
      if (this.onWeaponLocked) {
        this.onWeaponLocked(weaponId);
      }
      return;
    }

    if (this.activeWeapon.id === weaponId) return;

    this.activeWeapon = WEAPONS[weaponId];
    progressionManager.setCurrentWeapon(weaponId);
    this.isReloading = false;
    this.reloadDuration = this.activeWeapon.reloadTime * (this.character.reloadSpeedMultiplier || 1.0);

    // Instantly toggle 3D weapon visibility in hands with 0ms allocation
    if (this.proceduralPlayer) {
      this.proceduralPlayer.equipWeapon(weaponId);
    }

    playWeaponSwitch();
    if (this.onWeaponChange) {
      this.onWeaponChange(this.activeWeapon);
    }
  }

  getUnlockedWeaponList() {
    const defaultOrder = [
      WEAPON_TYPES.PISTOL,
      WEAPON_TYPES.SMG,
      WEAPON_TYPES.SHOTGUN,
      WEAPON_TYPES.RIFLE,
      WEAPON_TYPES.SNIPER
    ];
    const unlocked = defaultOrder.filter(id => progressionManager.isWeaponUnlocked(id));
    return unlocked.length > 0 ? unlocked : [WEAPON_TYPES.PISTOL];
  }

  nextWeapon() {
    const list = this.getUnlockedWeaponList();
    const currentIndex = list.indexOf(this.activeWeapon.id);
    const nextIndex = (currentIndex + 1) % list.length;
    this.switchWeapon(list[nextIndex]);
  }

  prevWeapon() {
    const list = this.getUnlockedWeaponList();
    const currentIndex = list.indexOf(this.activeWeapon.id);
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    this.switchWeapon(list[prevIndex]);
  }

  get magazine() {
    return this.weaponsState[this.activeWeapon.id]?.magazine || 0;
  }

  set magazine(val) {
    if (this.weaponsState[this.activeWeapon.id]) {
      this.weaponsState[this.activeWeapon.id].magazine = val;
    }
  }

  get reserveAmmo() {
    return this.weaponsState[this.activeWeapon.id]?.reserveAmmo || 0;
  }

  set reserveAmmo(val) {
    if (this.weaponsState[this.activeWeapon.id]) {
      this.weaponsState[this.activeWeapon.id].reserveAmmo = val;
    }
  }

  get magSize() {
    return this.activeWeapon.magSize;
  }

  addHealth(amount) {
    if (!this.isAlive() || amount <= 0) return 0;
    const oldHealth = this.health;
    this.health = Math.min(this.maxHealth, this.health + amount);
    return this.health - oldHealth;
  }

  addAmmo(amount = 30) {
    if (this.weaponsState[this.activeWeapon.id]) {
      this.weaponsState[this.activeWeapon.id].reserveAmmo += amount;
    }
  }

  get currentWeapon() {
    return this.activeWeapon.id;
  }

  update(delta, input, zombies = [], environment = null) {
    // 0. Grace period invulnerability countdown
    if (this.invulnerableTimer > 0) {
      this.invulnerableTimer = Math.max(0, this.invulnerableTimer - delta);
    }

    // 1. Process rotation from mouse / touch aim
    const { yaw: dYaw, pitch: dPitch } = input.resetRotationDeltas();
    this.yaw += dYaw;
    const maxPitch = (85 * Math.PI) / 180;
    this.pitch = Math.max(-maxPitch, Math.min(maxPitch, this.pitch + dPitch));

    // 2. Auto-aim assist (Free Fire style magnetic pull toward nearest zombie)
    if (input.autoAimEnabled && zombies.length > 0) {
      this.applyAutoAimAssist(zombies, delta);
    }

    // Ground elevation from terrain height
    const groundY = environment?.getTerrainHeight ? environment.getTerrainHeight(this.position.x, this.position.z) : 0;

    // 3. Jump processing
    if (input.consumeJump && input.consumeJump()) {
      if (this.isGrounded) {
        this.velocityY = this.jumpForce;
        this.isGrounded = false;
        playJumpSound();
      }
    }

    // Apply vertical physics
    if (!this.isGrounded) {
      this.velocityY += this.gravity * delta;
      this.position.y += this.velocityY * delta;
      if (this.position.y <= groundY) {
        this.position.y = groundY;
        this.velocityY = 0;
        this.isGrounded = true;
      }
    } else {
      // Follow natural terrain slope smoothly
      this.position.y = groundY;
    }

    // 4. Smooth Player Movement (Organic acceleration & natural deceleration)
    const { direction, isMoving } = input.update(this.yaw);

    _targetVel.copy(direction).multiplyScalar(isMoving ? this.speed : 0);
    const accelRate = isMoving ? 18.0 : 22.0;
    this.velocity.lerp(_targetVel, Math.min(1.0, accelRate * delta));
    this.position.addScaledVector(this.velocity, delta);

    // Collision resolution against solid environmental objects (tree trunks, crates, sandbags, barrels, stilts)
    if (environment && environment.getColliders) {
      const colliders = environment.getColliders();
      const playerRadius = 0.45;
      for (let iter = 0; iter < 2; iter++) {
        for (let i = 0; i < colliders.length; i++) {
          const col = colliders[i];
          const dx = this.position.x - col.x;
          const dz = this.position.z - col.z;
          const distSq = dx * dx + dz * dz;
          const minDist = playerRadius + col.radius;
          if (distSq < minDist * minDist && distSq > 0.00001) {
            const dist = Math.sqrt(distSq);
            const overlap = minDist - dist;
            this.position.x += (dx / dist) * overlap;
            this.position.z += (dz / dist) * overlap;
          }
        }
      }
    }

    // Keep player inside expanded island boundary (radius ~66 units)
    const islandRadius = 66;
    const distFromCenter = Math.hypot(this.position.x, this.position.z);
    if (distFromCenter > islandRadius) {
      const factor = islandRadius / distFromCenter;
      this.position.x *= factor;
      this.position.z *= factor;
    }

    // Update ground height after collision adjustment
    const adjustedGroundY = environment?.getTerrainHeight ? environment.getTerrainHeight(this.position.x, this.position.z) : 0;
    if (this.isGrounded) {
      this.position.y = adjustedGroundY;
    } else if (this.position.y < adjustedGroundY) {
      this.position.y = adjustedGroundY;
      this.velocityY = 0;
      this.isGrounded = true;
    }

    this.mesh.position.copy(this.position);

    // 5. Smooth Player Rotation (Faces FORWARD in aim/movement direction away from camera)
    const targetMeshYaw = this.yaw;
    let yawDiff = targetMeshYaw - this.currentMeshYaw;
    while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
    while (yawDiff > Math.PI) yawDiff -= Math.PI * 2;

    const turnSpeed = isMoving ? 18.0 : 22.0;
    this.currentMeshYaw += yawDiff * Math.min(1.0, turnSpeed * delta);
    this.mesh.rotation.y = this.currentMeshYaw;

    // 6. Update Character 3D Animation & Aim Pitch
    const actualIsMoving = this.velocity.lengthSq() > 0.05;
    if (this.proceduralPlayer) {
      this.proceduralPlayer.update(actualIsMoving, this.isGrounded, performance.now() * 0.001, this.pitch);
    }

    // 7. Smooth Third-person Camera & Weapon ADS Scope Zoom
    this.updateCamera(delta, input);

    // 8. Handle Weapon Switch Requests (works seamlessly while running, turning, or aiming!)
    const switchReq = input.consumeWeaponSwitch();
    if (switchReq) {
      if (switchReq === 'next') this.nextWeapon();
      else if (switchReq === 'prev') this.prevWeapon();
      else if (WEAPONS[switchReq]) this.switchWeapon(switchReq);
    }

    // 9. Update Reload timer & animation
    if (this.isReloading) {
      this.reloadTimer -= delta;
      const progress = 1.0 - Math.max(0, this.reloadTimer / this.reloadDuration);
      if (this.proceduralPlayer?.setReloading) {
        this.proceduralPlayer.setReloading(true, progress);
      }
      if (this.reloadTimer <= 0) {
        this.finishReload();
        if (this.proceduralPlayer?.setReloading) {
          this.proceduralPlayer.setReloading(false, 0);
        }
      }
    }

    // 10. Handle Fire input
    if (input.isFiring || input.consumeFire()) {
      this.tryShoot(zombies);
    }

    // 11. Handle Reload input
    if (input.consumeReload()) {
      this.startReload();
    }

    // Muzzle light & 3D mesh flash fade
    if (this.muzzleLight.intensity > 0) {
      this.muzzleLight.intensity = Math.max(0, this.muzzleLight.intensity - delta * 35);
    }
    if (this.muzzleFlashTimer > 0) {
      this.muzzleFlashTimer -= delta;
      if (this.muzzleFlashTimer <= 0) {
        this.muzzleFlashGroup.visible = false;
      }
    }
  }

  updateCamera(delta = 0.016, input = null) {
    const isAiming = !!input?.isAiming;
    let targetFov = 70;
    if (isAiming) {
      switch (this.activeWeapon.id) {
        case 'pistol': targetFov = 55; break;
        case 'shotgun': targetFov = 56; break;
        case 'smg': targetFov = 48; break;
        case 'rifle': targetFov = 40; break;
        case 'sniper': targetFov = 20; break;
        default: targetFov = 50; break;
      }
    }

    // Smooth FOV zoom transition (no sudden screen jump)
    const fovSpeed = 14.0;
    this.camera.fov += (targetFov - this.camera.fov) * Math.min(1.0, fovSpeed * delta);
    this.camera.updateProjectionMatrix();

    // Adjust camera distance & shoulder offset during ADS
    const targetDist = isAiming ? (this.activeWeapon.id === 'sniper' ? 1.6 : 2.5) : 4.2;
    const targetShoulder = isAiming ? 0.82 : 0.65;
    this.camDistance += (targetDist - this.camDistance) * Math.min(1.0, 14.0 * delta);
    this.shoulderOffset += (targetShoulder - this.shoulderOffset) * Math.min(1.0, 14.0 * delta);

    const cosPitch = Math.cos(this.pitch);
    const sinPitch = Math.sin(this.pitch);
    const sinYaw = Math.sin(this.yaw);
    const cosYaw = Math.cos(this.yaw);

    // Behind direction
    _camOffset.set(
      sinYaw * cosPitch * this.camDistance,
      sinPitch * this.camDistance + this.camHeight,
      cosYaw * cosPitch * this.camDistance
    );

    // Right shoulder vector
    _rightVec.set(cosYaw, 0, -sinYaw).multiplyScalar(this.shoulderOffset);

    // Camera target in world
    _target.copy(this.position);
    _target.y += 1.45;

    // Desired camera position
    _desiredCamPos.copy(_target).add(_camOffset).add(_rightVec);
    _desiredCamPos.y = Math.max(0.65, _desiredCamPos.y);

    // Smooth critically-damped camera follow (eliminates camera jitter completely)
    const camFollowSpeed = 22.0;
    this.currentCamPos.lerp(_desiredCamPos, Math.min(1.0, camFollowSpeed * delta));
    this.camera.position.copy(this.currentCamPos);

    // Look at point ahead in aim direction
    const forwardLookDist = 30;
    _forwardDir.set(
      -sinYaw * cosPitch,
      -sinPitch,
      -cosYaw * cosPitch
    );
    _aimPoint.copy(_target).addScaledVector(_rightVec, 0.5).addScaledVector(_forwardDir, forwardLookDist);

    const lookAtSpeed = 28.0;
    this.currentLookAt.lerp(_aimPoint, Math.min(1.0, lookAtSpeed * delta));
    this.camera.lookAt(this.currentLookAt);

    this.aimPoint.copy(_aimPoint);
    this.forwardDir.copy(_forwardDir);
  }

  applyAutoAimAssist(zombies, delta) {
    let bestTarget = null;
    let minAngle = 0.28;

    const camPos = this.camera.position;
    this.camera.getWorldDirection(_camForward);

    for (let i = 0; i < zombies.length; i++) {
      const zombie = zombies[i];
      if (!zombie.isAlive) continue;

      _toZombie.copy(zombie.mesh.position);
      _toZombie.y += 1.0;
      _toZombie.sub(camPos);

      const dist = _toZombie.length();
      if (dist > 35 || dist < 1.0) continue;

      _toZombie.normalize();
      const angle = _camForward.angleTo(_toZombie);

      if (angle < minAngle) {
        minAngle = angle;
        bestTarget = zombie;
      }
    }

    if (bestTarget) {
      const targetPos = bestTarget.mesh.position;
      const dx = targetPos.x - this.position.x;
      const dz = targetPos.z - this.position.z;
      const targetYaw = Math.atan2(-dx, -dz);

      let diff = targetYaw - this.yaw;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;

      this.yaw += diff * Math.min(1.0, 4.0 * delta);
    }
  }

  tryShoot(zombies) {
    const now = performance.now() * 0.001;
    if (now - this.lastFireTime < this.activeWeapon.fireRate) return;
    if (this.isReloading) return;

    this.lastFireTime = now;

    // Check empty magazine
    if (this.magazine <= 0) {
      playDryFire();
      if (this.onDryFire) this.onDryFire();
      return;
    }

    // Deduct ammo
    this.magazine--;

    // Audio & Physical Recoil
    playWeaponShot(this.activeWeapon.sound);
    if (this.proceduralPlayer) {
      this.proceduralPlayer.triggerRecoil(this.activeWeapon.recoilKick);
    }

    // Slight camera pitch impulse for recoil feel
    this.pitch -= this.activeWeapon.recoilKick * 0.035;

    // Muzzle flash light & 3D Star-Burst Mesh at gun barrel tip
    let muzzlePos;
    if (this.proceduralPlayer) {
      muzzlePos = this.proceduralPlayer.getMuzzleWorldPosition();
    } else {
      const rightOffset = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw)).multiplyScalar(0.4);
      muzzlePos = this.position.clone().add(new THREE.Vector3(0, 1.25, 0)).add(rightOffset);
    }
    this.muzzleLight.position.copy(muzzlePos);
    this.muzzleLight.intensity = 4.5;

    // Trigger visible 3D muzzle flash
    if (this.muzzleFlashGroup) {
      this.muzzleFlashGroup.position.copy(muzzlePos);
      this.muzzleFlashGroup.rotation.set(
        (Math.random() - 0.5) * 0.4,
        this.yaw + Math.PI,
        Math.random() * Math.PI * 2
      );
      let flashScale = 1.0;
      if (this.activeWeapon.id === 'rifle') flashScale = 1.35;
      else if (this.activeWeapon.id === 'shotgun') flashScale = 1.60;
      else if (this.activeWeapon.id === 'sniper') flashScale = 1.85;
      else if (this.activeWeapon.id === 'smg') flashScale = 1.15;
      this.muzzleFlashGroup.scale.setScalar(flashScale);
      this.muzzleFlashGroup.visible = true;
      this.muzzleFlashTimer = 0.05;
    }

    // Multi-pellet support for Shotgun
    const pellets = this.activeWeapon.pellets || 1;
    const baseSpread = (this.activeWeapon.spread || 0.02) * (this.character.spreadMultiplier || 1.0);

    // ULTRA-FAST HITBOX RAYCASTING: test ONLY the dedicated hitboxes (1 per zombie, 0 hierarchy traversals!)
    _colliderList.length = 0;
    for (let i = 0; i < zombies.length; i++) {
      const z = zombies[i];
      if (z.isAlive && z.hitCollider) {
        _colliderList.push(z.hitCollider);
      }
    }

    let didHitAny = false;

    for (let p = 0; p < pellets; p++) {
      const spreadX = (Math.random() - 0.5) * baseSpread;
      const spreadY = (Math.random() - 0.5) * baseSpread;
      this.raycaster.setFromCamera(new THREE.Vector2(spreadX, spreadY), this.camera);

      let hitPoint = null;
      if (_colliderList.length > 0) {
        const intersects = this.raycaster.intersectObjects(_colliderList, false);
        if (intersects.length > 0) {
          const hit = intersects[0];
          hitPoint = hit.point;
          const hitZombie = hit.object.userData?.zombie;
          if (hitZombie && hitZombie.isAlive) {
            hitZombie.takeDamage(this.activeWeapon.damage, hit.point);
            didHitAny = true;
            if (this.onHit) this.onHit(hitZombie, hit.point);
          }
        }
      }

      // If bullet did not hit a zombie, trace outward to maximum effective weapon range
      if (!hitPoint) {
        hitPoint = this.raycaster.ray.origin.clone().addScaledVector(
          this.raycaster.ray.direction,
          this.activeWeapon.range || 65
        );
      }

      // Spawn visual bullet tracer from muzzle to impact/target point
      if (this.onTracer) {
        this.onTracer(muzzlePos, hitPoint, this.activeWeapon);
      }
    }

    if (didHitAny) {
      playZombieHit();
    }
  }

  startReload() {
    if (this.isReloading) return;
    if (this.magazine >= this.magSize) return;
    if (this.reserveAmmo <= 0) return;

    this.isReloading = true;
    this.reloadTimer = this.reloadDuration;
    playReload();
  }

  finishReload() {
    this.isReloading = false;
    const needed = this.magSize - this.magazine;
    const toLoad = Math.min(needed, this.reserveAmmo);
    this.magazine += toLoad;
    this.reserveAmmo -= toLoad;
  }

  takeDamage(amount) {
    if (!this.isAlive()) return;
    if (this.invulnerableTimer > 0) return; // Prevent instant death during spawn grace period
    const actualDamage = amount * this.damageResistance * this.difficultyReduction;
    this.health = Math.max(0, this.health - actualDamage);

    playPlayerHurt();
    if (this.onDamageTaken) {
      this.onDamageTaken(actualDamage, this.health);
    }
  }

  isAlive() {
    return this.health > 0;
  }
}
