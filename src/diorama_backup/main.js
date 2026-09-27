import { initScene, setNPCUpdateFn } from './sceneManager.js';
import { updateNPCs, getNPCs } from './npcFactory.js';
import { updateAllEmotes } from './hud.js';
import { startGame } from './dayLoop.js';

// ─── Boot ───

function init() {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) {
    console.error('[AFTERTRACE] Canvas element not found!');
    return;
  }

  // Initialize Three.js scene
  initScene(canvas);

  // Wire NPC update & emote positioning into render loop
  setNPCUpdateFn(() => {
    updateNPCs();
    const npcs = getNPCs();
    if (npcs.length > 0) {
      updateAllEmotes(npcs);
    }
  });

  // Start the game
  startGame();
}

// Wait for DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
