// src/shooter/assetManager.js - UI Icon and prop texture asset manager
import * as THREE from 'three';

class AssetManager {
  constructor() {
    this.textures = {};
    this.propMaterials = {};
    this.isLoaded = false;
  }

  async loadAssets() {
    try {
      const [propsImg, iconsImg] = await Promise.all([
        this.loadImage('/assets/props.jpg').catch(() => null),
        this.loadImage('/assets/icons.png').catch(() => null)
      ]);

      // 1. Extract Props from props.jpg if available
      if (propsImg) {
        this.propMaterials.bush1 = this.cropToSpriteMaterial(propsImg, 0.0, 0.0, 0.25, 0.5, true);
        this.propMaterials.bush2 = this.cropToSpriteMaterial(propsImg, 0.25, 0.0, 0.25, 0.5, true);
        this.propMaterials.bush3 = this.cropToSpriteMaterial(propsImg, 0.5, 0.0, 0.25, 0.5, true);
        this.propMaterials.crate = this.cropToSpriteMaterial(propsImg, 0.0, 0.5, 0.24, 0.5, true);
        this.propMaterials.sandbags = this.cropToSpriteMaterial(propsImg, 0.24, 0.5, 0.27, 0.5, true);
        this.propMaterials.barrel = this.cropToSpriteMaterial(propsImg, 0.52, 0.5, 0.20, 0.5, true);
      }

      // 2. Extract UI Icons and inject into DOM
      if (iconsImg) {
        this.injectIcons(iconsImg);
      }

      this.isLoaded = true;
    } catch (e) {
      console.warn('[AssetManager] Asset loading error:', e);
    }
  }

  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  }

  cropToSpriteMaterial(img, rx, ry, rw, rh, removeDarkBg = false) {
    const canvas = document.createElement('canvas');
    const sw = Math.floor(img.width * rw);
    const sh = Math.floor(img.height * rh);
    const sx = Math.floor(img.width * rx);
    const sy = Math.floor(img.height * ry);

    canvas.width = sw;
    canvas.height = sh;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

    if (removeDarkBg) {
      const imgData = ctx.getImageData(0, 0, sw, sh);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (r < 45 && g < 45 && b < 45) {
          data[i + 3] = 0;
        } else if (r < 75 && g < 75 && b < 75) {
          data[i + 3] = Math.max(0, Math.min(255, (r + g + b) / 3 * 3 - 100));
        }
      }
      ctx.putImageData(imgData, 0, 0);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    return new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.15,
      side: THREE.DoubleSide,
      roughness: 0.7,
      metalness: 0.1
    });
  }

  injectIcons(iconsImg) {
    try {
      // Crop Assault rifle icon (top-left of icons.png)
      const gunCanvas = this.cropCanvas(iconsImg, 0.05, 0.15, 0.52, 0.35);
      const weaponDisplay = document.getElementById('weapon-display');
      if (weaponDisplay && !weaponDisplay.querySelector('img')) {
        const img = document.createElement('img');
        img.src = gunCanvas.toDataURL();
        img.style.height = '32px';
        img.style.objectFit = 'contain';
        img.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))';
        weaponDisplay.insertBefore(img, weaponDisplay.firstChild);
      }

      // Crop Reload icon (bottom-right circle with arrow)
      const reloadCanvas = this.cropCanvas(iconsImg, 0.68, 0.5, 0.3, 0.48);
      const mobileReloadBtn = document.getElementById('mobile-reload-btn');
      if (mobileReloadBtn) {
        mobileReloadBtn.innerHTML = `<img src="${reloadCanvas.toDataURL()}" style="width: 32px; height: 32px; object-fit: contain;">`;
      }
    } catch (e) {
      console.warn('[AssetManager] Icon injection failed:', e);
    }
  }

  cropCanvas(img, rx, ry, rw, rh) {
    const canvas = document.createElement('canvas');
    const sw = Math.floor(img.width * rw);
    const sh = Math.floor(img.height * rh);
    const sx = Math.floor(img.width * rx);
    const sy = Math.floor(img.height * ry);

    canvas.width = sw;
    canvas.height = sh;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
    return canvas;
  }
}

export const assetManager = new AssetManager();
