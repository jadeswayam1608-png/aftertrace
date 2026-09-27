import { ACTIONS, TOTAL_DAYS, getEmoteForTrust } from './constants.js';
import { getState } from './gameState.js';
import { getCamera, getRenderer } from './sceneManager.js';
import { initAudio, toggleMute } from './audio.js';
import * as THREE from 'three';

// DOM references
let dayCounterEl, narrativePanelEl, narrationTextEl, npcDialogueEl, npcNameEl, npcLineEl;
let continueBtn, actionBarEl, choicePanelEl, choicePromptEl, choiceButtonsEl;
let loadingOverlayEl, emoteContainerEl, endingScreenEl;

let actionButtons = [];

export function initHUD() {
  dayCounterEl = document.getElementById('day-counter');
  narrativePanelEl = document.getElementById('narrative-panel');
  narrationTextEl = document.getElementById('narration-text');
  npcDialogueEl = document.getElementById('npc-dialogue');
  npcNameEl = document.getElementById('npc-name');
  npcLineEl = document.getElementById('npc-line');
  continueBtn = document.getElementById('continue-btn');
  actionBarEl = document.getElementById('action-bar');
  choicePanelEl = document.getElementById('choice-panel');
  choicePromptEl = document.getElementById('choice-prompt');
  choiceButtonsEl = document.getElementById('choice-buttons');
  loadingOverlayEl = document.getElementById('loading-overlay');
  emoteContainerEl = document.getElementById('emote-container');
  endingScreenEl = document.getElementById('ending-screen');

  // Collect action buttons
  actionButtons = Array.from(actionBarEl.querySelectorAll('.action-btn'));

  // Audio controls
  const audioBtn = document.getElementById('audio-toggle');
  if (audioBtn) {
    audioBtn.onclick = (e) => {
      e.stopPropagation();
      initAudio();
      const muted = toggleMute();
      audioBtn.textContent = muted ? '🔇' : '🔊';
    };
  }

  // Start audio on first user interaction anywhere
  const onFirstInteraction = () => {
    initAudio();
    window.removeEventListener('click', onFirstInteraction);
    window.removeEventListener('keydown', onFirstInteraction);
  };
  window.addEventListener('click', onFirstInteraction);
  window.addEventListener('keydown', onFirstInteraction);

  // Initial state
  hideNarrative();
  hideChoice();
  hideLoading();
  hideEnding();
}

export function updateDayCounter(day) {
  dayCounterEl.textContent = `DAY ${day} OF ${TOTAL_DAYS}`;
}

// ─── Action Bar ───

export function showActionBar(onSelect) {
  actionBarEl.style.display = 'flex';
  actionButtons.forEach(btn => {
    btn.classList.remove('selected', 'disabled', 'loading');
    btn.onclick = () => {
      const action = btn.dataset.action;
      // Mark the clicked one as selected, disable the rest
      actionButtons.forEach(b => {
        if (b === btn) {
          b.classList.add('selected');
        } else {
          b.classList.add('disabled');
        }
        b.onclick = null;
      });
      onSelect(action);
    };
  });
}

export function hideActionBar() {
  actionBarEl.style.display = 'none';
}

export function setActionBarLoading() {
  actionButtons.forEach(btn => {
    btn.classList.add('loading');
    btn.onclick = null;
  });
}

export function disableAction(actionId) {
  const btn = actionButtons.find(b => b.dataset.action === actionId);
  if (btn) {
    btn.classList.add('disabled');
    btn.onclick = null;
  }
}

// ─── Narrative Panel ───

export function showNarrative(narration, npcLine, npcName, isBackgroundBeat) {
  return new Promise(resolve => {
    narrativePanelEl.style.display = 'block';
    narrativePanelEl.classList.remove('hidden');

    // Set narration text
    if (isBackgroundBeat) {
      narrationTextEl.innerHTML = `<div class="background-beat"><div class="background-beat-tag">💭 WHILE YOU WERE AWAY</div>${narration}</div>`;
    } else {
      narrationTextEl.textContent = narration;
    }

    // NPC dialogue
    if (npcLine && npcName) {
      npcDialogueEl.style.display = 'block';
      npcNameEl.textContent = npcName + ':';
      npcLineEl.textContent = npcLine;
    } else {
      npcDialogueEl.style.display = 'none';
    }

    continueBtn.onclick = () => {
      hideNarrative();
      resolve();
    };
  });
}

export function hideNarrative() {
  narrativePanelEl.style.display = 'none';
  narrativePanelEl.classList.add('hidden');
}

// ─── Choice Panel ───

export function showChoice(prompt, options) {
  return new Promise(resolve => {
    choicePanelEl.style.display = 'block';
    choicePanelEl.classList.remove('hidden');
    choicePromptEl.textContent = prompt;
    choiceButtonsEl.innerHTML = '';

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = opt.label;
      btn.onclick = () => {
        hideChoice();
        resolve(opt);
      };
      choiceButtonsEl.appendChild(btn);
    });
  });
}

export function hideChoice() {
  choicePanelEl.style.display = 'none';
  choicePanelEl.classList.add('hidden');
}

// ─── Loading Overlay ───

export function showLoading() {
  loadingOverlayEl.style.display = 'flex';
  loadingOverlayEl.classList.remove('hidden');
  // Also dim action bar
  setActionBarLoading();
}

export function hideLoading() {
  loadingOverlayEl.style.display = 'none';
  loadingOverlayEl.classList.add('hidden');
}

// ─── Emotes ───

const emoteElements = {};

export function showEmote(npcName, emoji, worldPosition) {
  let el = emoteElements[npcName];
  if (!el) {
    el = document.createElement('div');
    el.className = 'emote';
    emoteContainerEl.appendChild(el);
    emoteElements[npcName] = el;
  }
  el.textContent = emoji;
  el.style.display = 'block';

  // Project 3D position to screen
  updateEmotePosition(npcName, worldPosition);
}

export function updateEmotePosition(npcName, worldPosition) {
  const el = emoteElements[npcName];
  if (!el) return;

  const camera = getCamera();
  const renderer = getRenderer();
  if (!camera || !renderer) return;

  const vec = new THREE.Vector3(worldPosition.x, worldPosition.y + 1.8, worldPosition.z);
  vec.project(camera);

  const widthHalf = renderer.domElement.clientWidth / 2;
  const heightHalf = renderer.domElement.clientHeight / 2;

  el.style.left = (vec.x * widthHalf + widthHalf) + 'px';
  el.style.top = (-vec.y * heightHalf + heightHalf) + 'px';
}

export function updateAllEmotes(npcs) {
  const state = getState();
  for (const npc of npcs) {
    const trustLevel = state.npc_trust[npc.name.toLowerCase()] || 0;
    const emoji = getEmoteForTrust(trustLevel);
    const pos = npc.group.position;
    showEmote(npc.name, emoji, pos);
  }
}

export function hideEmotes() {
  for (const key of Object.keys(emoteElements)) {
    emoteElements[key].style.display = 'none';
  }
}

// ─── Ending ───

export function showEnding() {
  endingScreenEl.classList.remove('hidden');
  endingScreenEl.style.display = 'flex';
  hideActionBar();
  hideNarrative();
  hideEmotes();
  dayCounterEl.style.display = 'none';
}

export function hideEnding() {
  endingScreenEl.classList.add('hidden');
  endingScreenEl.style.display = 'none';
}
