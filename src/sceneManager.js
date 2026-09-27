import * as THREE from 'three';

let scene, camera, renderer, currentDiorama;
let npcUpdateFn = null;

export function setNPCUpdateFn(fn) { npcUpdateFn = fn; }

export function initScene(canvas) {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x1B4B4A);

  scene = new THREE.Scene();

  const aspect = window.innerWidth / window.innerHeight;
  const frustum = 8;
  camera = new THREE.OrthographicCamera(
    -frustum * aspect, frustum * aspect,
    frustum, -frustum, 0.1, 100
  );
  camera.position.set(12, 12, 12);
  camera.lookAt(0, 0, 0);

  const dirLight = new THREE.DirectionalLight(0xFFF4E0, 1.5);
  dirLight.position.set(8, 15, 10);
  scene.add(dirLight);

  const ambLight = new THREE.AmbientLight(0xB0C4DE, 0.6);
  scene.add(ambLight);

  window.addEventListener('resize', onResize);
  startRenderLoop();
}

function onResize() {
  const aspect = window.innerWidth / window.innerHeight;
  const frustum = 8;
  camera.left = -frustum * aspect;
  camera.right = frustum * aspect;
  camera.top = frustum;
  camera.bottom = -frustum;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

const baseCamPos = new THREE.Vector3(12, 12, 12);
let renderClock = new THREE.Clock();

function startRenderLoop() {
  function animate() {
    requestAnimationFrame(animate);
    const elapsed = renderClock.getElapsedTime();
    // Idle camera drift: slow sine-wave sway with ~6000ms period
    const sway = Math.sin(elapsed * (Math.PI * 2 / 6.0)) * 0.35;
    camera.position.x = baseCamPos.x + sway;
    camera.position.z = baseCamPos.z - sway;
    camera.lookAt(0, 0, 0);

    if (npcUpdateFn) npcUpdateFn();
    renderer.render(scene, camera);
  }
  animate();
}

export function switchLocation(locationId, locationConfigs, buildDioramaFn) {
  if (currentDiorama) {
    scene.remove(currentDiorama);
  }
  const config = locationConfigs[locationId];
  if (!config) {
    console.warn('Unknown location:', locationId);
    return;
  }
  currentDiorama = buildDioramaFn(config);
  scene.add(currentDiorama);
  if (config.bgColor !== undefined) {
    renderer.setClearColor(config.bgColor);
  }
}

export function getCamera() { return camera; }
export function getScene() { return scene; }
export function getRenderer() { return renderer; }
export function addToScene(obj) { scene.add(obj); }
export function removeFromScene(obj) { scene.remove(obj); }
