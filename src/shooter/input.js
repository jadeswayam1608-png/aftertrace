// src/shooter/input.js - Unified Desktop & Mobile Touch Input Controller with Mouse Wheel & Zero-Allocation Loops
import * as THREE from 'three';

// Scratch vectors to eliminate per-frame GC allocations
const _inputForward = new THREE.Vector3();
const _inputRight = new THREE.Vector3();
const _inputWorldMove = new THREE.Vector3();

export class InputManager {
  constructor(canvas) {
    this.canvas = canvas;

    // Movement vectors (-1 to 1)
    this.moveX = 0;
    this.moveZ = 0;

    // Camera rotation deltas (yaw and pitch)
    this.yawDelta = 0;
    this.pitchDelta = 0;

    // Actions
    this.isFiring = false;
    this.fireRequested = false;
    this.reloadRequested = false;
    this.jumpRequested = false;
    this.isAiming = false;
    this.weaponSwitchRequested = null; // null | 'next' | 'prev' | 1 | 2 | 3 | 4 | 5

    // Camera Sensitivity (Configurable setting, default 1.0x)
    const savedSens = parseFloat(localStorage.getItem('aftertrace_sensitivity'));
    this.sensitivity = (!isNaN(savedSens) && savedSens >= 0.2 && savedSens <= 3.0) ? savedSens : 1.0;

    // Auto-aim assist
    this.autoAimEnabled = true;

    // Device detection
    this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;
    if (this.isTouchDevice) {
      document.body.classList.add('touch-mode');
    }

    // Desktop mouse tracking
    this.isPointerLocked = false;
    this.isMouseDown = false;

    // Touch tracking state
    this.touchJoystickId = null;
    this.touchAimId = null;
    this.joystickOrigin = { x: 0, y: 0 };
    this.joystickPos = { x: 0, y: 0 };
    this.joystickRadius = 55;

    this.lastTouchAim = { x: 0, y: 0 };

    this.keys = {};

    this.initDesktop();
    this.initMobile();
  }

  setSensitivity(val) {
    this.sensitivity = Math.max(0.2, Math.min(3.0, val));
    try {
      localStorage.setItem('aftertrace_sensitivity', this.sensitivity.toFixed(2));
    } catch (e) {}
  }

  consumeJump() {
    const r = this.jumpRequested;
    this.jumpRequested = false;
    return r;
  }

  consumeWeaponSwitch() {
    const sw = this.weaponSwitchRequested;
    this.weaponSwitchRequested = null;
    return sw;
  }

  initDesktop() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      if (e.code === 'KeyR') {
        this.reloadRequested = true;
      }
      if (e.code === 'Space') {
        this.jumpRequested = true;
        if (!e.target || !e.target.matches('input, textarea')) {
          e.preventDefault();
        }
      }

      // Weapon selection keys: 1-5 and Q
      if (e.code === 'Digit1') this.weaponSwitchRequested = 'rifle';
      else if (e.code === 'Digit2') this.weaponSwitchRequested = 'pistol';
      else if (e.code === 'Digit3') this.weaponSwitchRequested = 'shotgun';
      else if (e.code === 'Digit4') this.weaponSwitchRequested = 'smg';
      else if (e.code === 'Digit5') this.weaponSwitchRequested = 'sniper';
      else if (e.code === 'KeyQ') this.weaponSwitchRequested = 'next';
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    // Mouse wheel weapon switching (Scroll up = next gun, Scroll down = prev gun)
    window.addEventListener('wheel', (e) => {
      if (this.isPointerLocked) {
        this.weaponSwitchRequested = e.deltaY < 0 ? 'prev' : 'next';
      }
    }, { passive: true });

    // Pointer lock for desktop mouse aiming
    this.canvas.addEventListener('click', () => {
      if (!this.isPointerLocked) {
        this.canvas.requestPointerLock?.();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = (document.pointerLockElement === this.canvas);
    });

    // Prevent context menu so right click can be used for ADS / Scope Aim
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      const aimMult = this.isAiming ? 0.55 : 1.0;
      if (this.isPointerLocked) {
        this.yawDelta -= e.movementX * 0.0019 * this.sensitivity * aimMult;
        this.pitchDelta += e.movementY * 0.0019 * this.sensitivity * aimMult;
      } else if (this.isMouseDown && !this.isTouchDevice) {
        this.yawDelta -= e.movementX * 0.0024 * this.sensitivity * aimMult;
        this.pitchDelta += e.movementY * 0.0024 * this.sensitivity * aimMult;
      }
    });

    window.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.isMouseDown = true;
        this.isFiring = true;
        this.fireRequested = true;
      } else if (e.button === 2) {
        this.isAiming = true;
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.isMouseDown = false;
        this.isFiring = false;
      } else if (e.button === 2) {
        this.isAiming = false;
      }
    });
  }

  initMobile() {
    const joyBase = document.getElementById('joystick-base');
    const joyThumb = document.getElementById('joystick-thumb');
    const fireBtn = document.getElementById('mobile-fire-btn');
    const reloadBtn = document.getElementById('mobile-reload-btn');
    const jumpBtn = document.getElementById('mobile-jump-btn');
    const aimBtn = document.getElementById('mobile-aim-btn');
    const mobileHint = document.getElementById('mobile-control-hint');

    const dismissHint = () => {
      if (mobileHint) {
        mobileHint.style.opacity = '0';
        setTimeout(() => mobileHint.remove(), 400);
      }
      window.removeEventListener('touchstart', dismissHint);
    };
    window.addEventListener('touchstart', dismissHint, { passive: true });

    // Touch container for aiming (right half) and joystick (left half)
    window.addEventListener('touchstart', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        const halfWidth = window.innerWidth / 2;

        const target = touch.target;
        if (target && target.closest && (
          target.closest('#mobile-fire-btn') ||
          target.closest('#mobile-aim-btn') ||
          target.closest('#mobile-reload-btn') ||
          target.closest('#mobile-jump-btn') ||
          target.closest('#weapon-select-btn') ||
          target.closest('#sound-toggle-btn') ||
          target.closest('#aim-assist-toggle') ||
          target.closest('#sensitivity-toggle') ||
          target.closest('#game-over-screen') ||
          target.closest('#title-screen')
        )) {
          continue;
        }

        // Left side: Virtual Movement Joystick
        if (touch.clientX < halfWidth && this.touchJoystickId === null) {
          this.touchJoystickId = touch.identifier;
          this.joystickOrigin = { x: touch.clientX, y: touch.clientY };
          this.joystickPos = { x: touch.clientX, y: touch.clientY };

          if (joyBase && joyThumb) {
            joyBase.style.display = 'block';
            joyBase.style.left = `${touch.clientX}px`;
            joyBase.style.top = `${touch.clientY}px`;
            joyThumb.style.transform = `translate(0px, 0px)`;
          }
        }
        // Right side: Drag-to-aim
        else if (touch.clientX >= halfWidth && this.touchAimId === null) {
          this.touchAimId = touch.identifier;
          this.lastTouchAim = { x: touch.clientX, y: touch.clientY };
        }
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];

        if (touch.identifier === this.touchJoystickId) {
          const dx = touch.clientX - this.joystickOrigin.x;
          const dy = touch.clientY - this.joystickOrigin.y;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);

          const clampedDist = Math.min(dist, this.joystickRadius);
          const moveX = (Math.cos(angle) * clampedDist) / this.joystickRadius;
          const moveZ = (Math.sin(angle) * clampedDist) / this.joystickRadius;

          this.moveX = moveX;
          this.moveZ = moveZ;

          if (joyThumb) {
            const thumbX = Math.cos(angle) * clampedDist;
            const thumbY = Math.sin(angle) * clampedDist;
            joyThumb.style.transform = `translate(${thumbX}px, ${thumbY}px)`;
          }
        } else if (touch.identifier === this.touchAimId) {
          const dx = touch.clientX - this.lastTouchAim.x;
          const dy = touch.clientY - this.lastTouchAim.y;

          const aimMult = this.isAiming ? 0.6 : 1.0;
          this.yawDelta -= dx * 0.0035 * this.sensitivity * aimMult;
          this.pitchDelta += dy * 0.0035 * this.sensitivity * aimMult;

          this.lastTouchAim = { x: touch.clientX, y: touch.clientY };
        }
      }
    }, { passive: false });

    const endTouch = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.touchJoystickId) {
          this.touchJoystickId = null;
          this.moveX = 0;
          this.moveZ = 0;
          if (joyBase && joyThumb) {
            joyBase.style.display = 'none';
            joyThumb.style.transform = `translate(0px, 0px)`;
          }
        } else if (touch.identifier === this.touchAimId) {
          this.touchAimId = null;
        }
      }
    };

    window.addEventListener('touchend', endTouch, { passive: true });
    window.addEventListener('touchcancel', endTouch, { passive: true });

    // Dedicated mobile Fire Button
    if (fireBtn) {
      fireBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.isFiring = true;
        this.fireRequested = true;
      });
      fireBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.isFiring = false;
      });
    }

    // Dedicated mobile Reload Button
    if (reloadBtn) {
      reloadBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.reloadRequested = true;
      });
    }

    // Dedicated mobile Jump Button
    if (jumpBtn) {
      jumpBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.jumpRequested = true;
      });
    }

    // Dedicated mobile Aim / Scope Button (Toggle ADS)
    if (aimBtn) {
      aimBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.isAiming = !this.isAiming;
        if (this.isAiming) {
          aimBtn.classList.add('aiming');
        } else {
          aimBtn.classList.remove('aiming');
        }
      });
    }
  }

  // Update loop: reads keyboard + joystick, computes normalized movement with zero GC allocations
  update(cameraYaw) {
    let rawX = this.moveX;
    let rawZ = this.moveZ;

    // Keyboard WASD input (additive to joystick, so keyboard always works)
    let keyX = 0;
    let keyZ = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp']) keyZ -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) keyZ += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) keyX -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) keyX += 1;

    const keyLen = Math.hypot(keyX, keyZ);
    if (keyLen > 0) {
      rawX = keyX / keyLen;
      rawZ = keyZ / keyLen;
    }

    // Transform movement relative to camera yaw using pre-allocated vectors
    _inputForward.set(-Math.sin(cameraYaw), 0, -Math.cos(cameraYaw));
    _inputRight.set(Math.cos(cameraYaw), 0, -Math.sin(cameraYaw));

    _inputWorldMove.set(0, 0, 0);
    _inputWorldMove.addScaledVector(_inputRight, rawX);
    _inputWorldMove.addScaledVector(_inputForward, -rawZ);

    const isMoving = (rawX * rawX + rawZ * rawZ) > 0.001;

    return {
      direction: _inputWorldMove,
      isMoving
    };
  }

  consumeFire() {
    const requested = this.fireRequested;
    this.fireRequested = false;
    return requested;
  }

  consumeReload() {
    const requested = this.reloadRequested;
    this.reloadRequested = false;
    return requested;
  }

  resetRotationDeltas() {
    const yaw = this.yawDelta;
    const pitch = this.pitchDelta;
    this.yawDelta = 0;
    this.pitchDelta = 0;
    return { yaw, pitch };
  }
}
