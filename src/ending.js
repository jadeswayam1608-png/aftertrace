import { getState } from './gameState.js';
import { getArchetype, getRelationshipSummary } from './profileEngine.js';
import { TRAIT_NAMES, NPCS } from './constants.js';
import { showEnding } from './hud.js';
import { downloadShareCard } from './shareCard.js';
import { playChime } from './audio.js';

// ─── Part A: Who You Became ───

export function showEndingPartA(onContinue) {
  const state = getState();
  const archetype = getArchetype(state.profile);
  const endingPartA = document.getElementById('ending-part-a');
  const endingPartB = document.getElementById('ending-part-b');

  showEnding();
  playChime();

  // Build Part A HTML
  endingPartA.innerHTML = `
    <div class="ending-header">7 DAYS SURVIVED</div>
    <div class="ending-subheader">You made ${state._decisionsCount} decisions. The island remembers.</div>
    <div class="ending-archetype">YOU BECAME: ${archetype.name}</div>
    <div class="ending-description">${archetype.description}</div>
    <div class="trait-bars">
      ${TRAIT_NAMES.map(trait => {
        const val = state.profile[trait];
        const pct = (val / 10) * 100;
        const isDominant = trait === archetype.trait;
        const barColor = isDominant ? 'var(--color-danger)' : 'var(--color-ocean-light)';
        return `
          <div class="trait-bar">
            <span class="trait-bar-label">${trait}</span>
            <div class="trait-bar-track">
              <div class="trait-bar-fill" style="width: ${pct}%; background: ${barColor};"></div>
            </div>
            <span style="font-size: 0.75rem; width: 36px; text-align: right; opacity: 0.8;">${val}/10</span>
          </div>
        `;
      }).join('')}
    </div>
    <div style="margin-top: 8px;">
      ${buildNPCTrustSummary(state)}
    </div>
    <div style="display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; justify-content: center;">
      <button class="ending-transition-btn" id="see-island-btn">See what the island saw</button>
      <button class="ending-share-btn" id="share-ending-btn">Share your ending</button>
    </div>
  `;

  endingPartB.classList.add('hidden');
  endingPartB.style.display = 'none';

  // Animate trait bars after a brief delay
  setTimeout(() => {
    const fills = endingPartA.querySelectorAll('.trait-bar-fill');
    fills.forEach(fill => {
      const target = fill.style.width;
      fill.style.width = '0%';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          fill.style.width = target;
        });
      });
    });
  }, 100);

  document.getElementById('see-island-btn').onclick = () => {
    playChime();
    showEndingPartB();
    if (onContinue) onContinue();
  };

  document.getElementById('share-ending-btn').onclick = () => {
    downloadShareCard(state, archetype);
  };
}

function buildNPCTrustSummary(state) {
  const lines = [];
  for (const [id, npc] of Object.entries(NPCS)) {
    const trust = state.npc_trust[id] || 0;
    let relationship;
    if (trust >= 10) relationship = 'trusted you deeply';
    else if (trust >= 5) relationship = 'saw you as an ally';
    else if (trust > -5) relationship = 'remained uncertain about you';
    else if (trust > -10) relationship = 'kept their distance';
    else relationship = 'did not trust you';

    lines.push(`<div class="ending-relationship"><strong>${npc.name}</strong> ${relationship} (${trust >= 0 ? '+' : ''}${trust}).</div>`);
  }
  return lines.join('');
}

// ─── Part B: What the Island Saw ───

function showEndingPartB() {
  const state = getState();
  const archetype = getArchetype(state.profile);
  const endingPartA = document.getElementById('ending-part-a');
  const endingPartB = document.getElementById('ending-part-b');

  endingPartA.style.display = 'none';
  endingPartB.classList.remove('hidden');
  endingPartB.style.display = 'block';

  const beats = state._backgroundBeats || [];
  const relationships = getRelationshipSummary(state);

  let beatsHTML = '';
  if (beats.length > 0) {
    beatsHTML = beats.map(beat =>
      `<div class="ending-beat"><strong>Day ${beat.day}:</strong> ${beat.text}</div>`
    ).join('');
  } else {
    beatsHTML = `<div class="ending-beat">The island was quiet while you were away. Or maybe you just weren't listening.</div>`;
  }

  let relationshipsHTML = relationships.map(r =>
    `<div class="ending-relationship"><strong>${r.names[0]} and ${r.names[1]}:</strong> ${r.description} (${r.value >= 0 ? '+' : ''}${r.value})</div>`
  ).join('');

  endingPartB.innerHTML = `
    <div class="ending-header">WHILE YOU WEREN'T LOOKING</div>
    <div class="ending-subheader">The island saw everything.</div>
    <div style="max-width: 520px; margin: 24px auto;">
      ${beatsHTML}
    </div>
    <div style="max-width: 440px; margin: 16px auto;">
      <div class="ending-subheader" style="font-size: 1rem; margin-bottom: 12px; opacity: 0.9;">Survivor relationships behind closed doors:</div>
      ${relationshipsHTML}
    </div>
    <div class="ending-final">
      You never saw any of this happen. The island did.
    </div>
    <div style="display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; justify-content: center;">
      <button class="ending-transition-btn" id="play-again-btn">Play Again</button>
      <button class="ending-share-btn" id="share-ending-btn-b">Share your ending</button>
    </div>
  `;

  document.getElementById('play-again-btn').onclick = () => {
    window.location.reload();
  };

  document.getElementById('share-ending-btn-b').onclick = () => {
    downloadShareCard(state, archetype);
  };

  // Scroll to top of ending
  const endingScreen = document.getElementById('ending-screen');
  if (endingScreen) endingScreen.scrollTop = 0;
}
