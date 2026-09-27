import { getState } from './gameState.js';
import { TOTAL_DAYS, ACTIONS, NPC_LOCATIONS, NPCS } from './constants.js';
import { getFallbackEvent, getBackgroundBeat, DAY1_CAMP_CHOICE } from './fallbackEvents.js';
import { applyDeltas, applyResourceDecay, getSoftFailNarration } from './profileEngine.js';
import { getDirectorResponse } from './director.js';
import { switchLocation, addToScene, removeFromScene, getScene } from './sceneManager.js';
import { LOCATION_CONFIGS, buildDiorama } from './diorama.js';
import { buildNPC, clearNPCs, getNPCs } from './npcFactory.js';
import {
  initHUD, updateDayCounter, showActionBar, hideActionBar,
  showNarrative, hideNarrative, showChoice, hideChoice,
  showLoading, hideLoading, updateAllEmotes, hideEmotes
} from './hud.js';
import { showEndingPartA } from './ending.js';
import { initAudio, playChime } from './audio.js';

// ─── Location helpers ───

function getLocationForAction(action, state) {
  switch (action) {
    case 'explore': return getNextExploreLocation(state);
    case 'hunt': return 'forest';
    case 'build': return 'survivor_camp';
    case 'help': return getNPCLocation(state);
    case 'investigate': return 'radio_tower';
    case 'rest': return 'survivor_camp';
    default: return 'beach';
  }
}

function getNextExploreLocation(state) {
  const order = ['forest', 'cave', 'camp', 'radio_tower', 'survivor_camp', 'beach'];
  for (const loc of order) {
    if (!state.explored_locations.includes(loc)) return loc;
  }
  // All explored — cycle
  return order[state.day % order.length];
}

function getNPCLocation(state) {
  // Rotate through NPC locations by day
  const npcIds = ['maya', 'leo', 'arun', 'priya'];
  const npcId = npcIds[(state.day - 1) % npcIds.length];
  const locs = NPC_LOCATIONS[npcId];
  return locs[0];
}

// ─── NPC spawning ───

function spawnNPCsForLocation(locationId) {
  const scene = getScene();
  clearNPCs(scene);

  const npcPositions = {
    beach: [[-2, 0, 2]],
    forest: [[-3, 0, -1], [2, 0, 3]],
    cave: [[1, 0, -2]],
    camp: [[-1, 0, 1]],
    radio_tower: [[2, 0, 0]],
    survivor_camp: [[-2, 0, -1], [1, 0, 2], [3, 0, -2]]
  };

  const npcsByLocation = {};
  for (const [npcId, locs] of Object.entries(NPC_LOCATIONS)) {
    for (const loc of locs) {
      if (!npcsByLocation[loc]) npcsByLocation[loc] = [];
      npcsByLocation[loc].push(npcId);
    }
  }

  const npcsHere = npcsByLocation[locationId] || [];
  const positions = npcPositions[locationId] || [];

  npcsHere.forEach((npcId, i) => {
    const pos = positions[i] || [i * 2 - 2, 0, 0];
    const npc = buildNPC({
      name: NPCS[npcId].name,
      color: NPCS[npcId].color,
      position: pos
    });
    addToScene(npc.group);
  });
}

// ─── Day 1 Opening ───

const DAY1_OPENING = "You wake up face-down in wet sand. The wreck is gone. So is everyone who was on it — except, maybe, whoever left those footprints heading into the trees.";

// ─── Game Loop ───

export async function startGame() {
  const state = getState();
  initHUD();
  updateDayCounter(1);

  // Show Beach
  switchLocation('beach', LOCATION_CONFIGS, buildDiorama);
  spawnNPCsForLocation('beach');

  // Day 1 opening narration
  await showNarrative(DAY1_OPENING, null, null, false);

  // Start the day loop
  await startDay();
}

async function startDay() {
  const state = getState();

  if (state.day > TOTAL_DAYS) {
    // Trigger ending
    hideActionBar();
    hideEmotes();
    showEndingPartA();
    return;
  }

  updateDayCounter(state.day);
  state.phase = 'action';

  // Show action bar and wait for selection
  showActionBar(async (action) => {
    await resolveAction(action);
  });
}

async function resolveAction(action) {
  initAudio();
  const state = getState();
  state.chosenAction = action;
  state._dayActions.push({ day: state.day, action });

  // Hide action bar
  hideActionBar();

  // Determine location and switch scene
  const location = getLocationForAction(action, state);
  switchLocation(location, LOCATION_CONFIGS, buildDiorama);
  spawnNPCsForLocation(location);
  state.currentLocation = location;

  // Day 1, Explore → special camp choice
  if (state.day === 1 && action === 'explore') {
    // Show explore narration first
    const exploreEvent = getFallbackEvent(1, 'explore', state);
    await showNarrative(exploreEvent.narration, exploreEvent.npc_line, exploreEvent.npc_name, false);
    applyDeltas(state, exploreEvent);

    // Then show the camp choice
    switchLocation('camp', LOCATION_CONFIGS, buildDiorama);
    spawnNPCsForLocation('camp');
    const choice = await showChoice(DAY1_CAMP_CHOICE.prompt, DAY1_CAMP_CHOICE.options);
    playChime();

    // Apply choice
    state.world_flags[choice.flag] = choice.value;
    if (choice.deltas) {
      applyDeltas(state, {
        player_stat_deltas: choice.deltas,
        resource_deltas: choice.resource || {},
        npc_trust_deltas: {},
        npc_relationship_deltas: {},
        world_flag_updates: { [choice.flag]: choice.value }
      });
    }

    const choiceNarration = choice.value
      ? "You stuff the supplies into your pack. They'll keep you alive — that's what matters. You try not to think about who they belonged to."
      : "You leave a marker — a stack of rocks, visible from the path. If whoever was here comes back, they'll know someone's looking for them.";

    await showNarrative(choiceNarration, null, null, false);

    await endDay();
    return;
  }

  // ─── Normal action resolution ───

  // Show loading
  showLoading();

  // Try AI Director first
  let event = await getDirectorResponse(state, action);

  if (!event) {
    // Use fallback
    event = getFallbackEvent(state.day, action, state);
  }

  hideLoading();

  if (!event) {
    // Emergency fallback — should never reach here
    event = {
      narration: "The day passes. You survive.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: {},
      resource_deltas: {},
      npc_trust_deltas: {},
      npc_relationship_deltas: {},
      world_flag_updates: {},
      location: location
    };
  }

  // Switch to event location if different
  if (event.location && event.location !== state.currentLocation) {
    switchLocation(event.location, LOCATION_CONFIGS, buildDiorama);
    spawnNPCsForLocation(event.location);
    state.currentLocation = event.location;
  }

  // Apply deltas
  applyDeltas(state, event);

  // Update emotes
  const npcs = getNPCs();
  if (npcs.length > 0) {
    updateAllEmotes(npcs);
  }

  // Add soft-fail narration if needed
  let narration = event.narration;
  const softFail = getSoftFailNarration(state);
  if (softFail) {
    narration += '\n\n' + softFail;
  }

  // Show narration
  await showNarrative(narration, event.npc_line, event.npc_name, false);

  // Check for background beat
  const beat = getBackgroundBeat(state.day, state);
  if (beat && action !== 'help') {
    // Store the beat
    state._backgroundBeats.push({ day: state.day, text: beat.text });

    // Apply relationship delta if present
    if (beat.npc_pair && beat.npc_relationship_delta) {
      state.npc_relationships[beat.npc_pair] = 
        (state.npc_relationships[beat.npc_pair] || 0) + beat.npc_relationship_delta;
    }

    // Play chime on background beat
    playChime();

    // Show the beat with distinct styling
    await showNarrative(beat.text, null, null, true);
  }

  await endDay();
}

async function endDay() {
  const state = getState();

  // Resource decay
  applyResourceDecay(state);

  // Track NPC interactions
  state._npcInteractionsThisDay = [];

  // Advance day
  state.day++;

  // Escalate world flags on certain days
  if (state.day === 3) {
    state.world_flags.radio_signal_detected = true;
  }
  if (state.day === 5) {
    state.world_flags.storm_incoming = true;
  }

  // Continue to next day
  await startDay();
}
