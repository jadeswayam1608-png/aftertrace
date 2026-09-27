// src/main.js - Entry point booting AFTERTRACE 3D Third-Person Zombie Survival Shooter
import { ShooterGame } from './shooter/game.js';

function boot() {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) {
    console.error('[AFTERTRACE] Canvas element not found!');
    return;
  }

  const game = new ShooterGame(canvas);
  game.run();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
