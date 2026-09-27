import { ARCHETYPES, TRAIT_NAMES } from './constants.js';

export function applyDeltas(state, response) {
  // Apply profile stat deltas, clamping to 0-10
  if (response.player_stat_deltas) {
    for (const trait of TRAIT_NAMES) {
      if (response.player_stat_deltas[trait] !== undefined) {
        state.profile[trait] = Math.max(0, Math.min(10, 
          state.profile[trait] + response.player_stat_deltas[trait]
        ));
      }
    }
  }

  // Apply resource deltas, clamping to 0-10 (health to 100)
  if (response.resource_deltas) {
    for (const res of ['food', 'water', 'health']) {
      if (response.resource_deltas[res] !== undefined) {
        state.player[res] = Math.max(0, Math.min(
          res === 'health' ? 100 : 10,
          state.player[res] + response.resource_deltas[res]
        ));
      }
    }
  }

  // Apply NPC trust deltas
  if (response.npc_trust_deltas) {
    for (const npc of ['maya', 'leo', 'arun', 'priya']) {
      if (response.npc_trust_deltas[npc] !== undefined) {
        state.npc_trust[npc] += response.npc_trust_deltas[npc];
      }
    }
  }

  // Apply NPC relationship deltas
  if (response.npc_relationship_deltas) {
    for (const pair of ['maya_leo', 'maya_arun', 'leo_arun']) {
      if (response.npc_relationship_deltas[pair] !== undefined) {
        state.npc_relationships[pair] += response.npc_relationship_deltas[pair];
      }
    }
  }

  // Apply world flag updates
  if (response.world_flag_updates) {
    Object.assign(state.world_flags, response.world_flag_updates);
  }

  // Track exploration
  if (response.location && !state.explored_locations.includes(response.location)) {
    state.explored_locations.push(response.location);
  }

  // Increment decision count
  state._decisionsCount = (state._decisionsCount || 0) + 1;
}

export function applyResourceDecay(state) {
  state.player.food = Math.max(0, state.player.food - 1);
  state.player.water = Math.max(0, state.player.water - 1);
  
  if (state.player.food === 0 || state.player.water === 0) {
    state.player.health = Math.max(10, state.player.health - 10);
  }
}

export function getArchetype(profile) {
  let maxTrait = TRAIT_NAMES[0];
  let maxVal = profile[maxTrait];
  
  for (const trait of TRAIT_NAMES) {
    if (profile[trait] > maxVal) {
      maxVal = profile[trait];
      maxTrait = trait;
    }
  }
  
  return {
    trait: maxTrait,
    ...ARCHETYPES[maxTrait]
  };
}

export function getSoftFailNarration(state) {
  const { food, water, health } = state.player;
  if (health <= 20) {
    return "Your vision blurs. Every step costs more than the last. You're running out of time, but the island isn't done with you yet.";
  }
  if (health <= 40) {
    return "Your hands are shaking. You can barely focus. The hunger and thirst are becoming hard to ignore.";
  }
  if (food === 0 && water === 0) {
    return "No food. No water. Your body is starting to shut down, but you keep moving.";
  }
  if (food === 0) {
    return "Your stomach cramps. It's been too long since you've eaten.";
  }
  if (water === 0) {
    return "Your throat is raw. You need water soon.";
  }
  return null;
}

export function getRelationshipSummary(state) {
  const summaries = [];
  const pairs = [
    { key: 'maya_leo', names: ['Maya', 'Leo'] },
    { key: 'maya_arun', names: ['Maya', 'Arun'] },
    { key: 'leo_arun', names: ['Leo', 'Arun'] }
  ];
  
  for (const pair of pairs) {
    const val = state.npc_relationships[pair.key] || 0;
    let desc;
    if (val >= 10) desc = 'became close allies';
    else if (val >= 5) desc = 'found common ground';
    else if (val > -5) desc = 'remained wary of each other';
    else if (val > -10) desc = 'grew apart';
    else desc = 'never reconciled';
    
    summaries.push({ names: pair.names, value: val, description: desc });
  }
  
  return summaries;
}
