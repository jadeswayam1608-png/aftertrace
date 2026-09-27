// testRun.js — End-to-end verification of AFTERTRACE 7-day loop, state machine & narrative callbacks
import { getState, resetState } from './src/gameState.js';
import { getFallbackEvent, getBackgroundBeat, DAY1_CAMP_CHOICE } from './src/fallbackEvents.js';
import { applyDeltas, applyResourceDecay, getArchetype, getRelationshipSummary } from './src/profileEngine.js';

console.log('=== STARTING 7-DAY SIMULATION TEST ===');
resetState();
const state = getState();

// Day 1
console.log('\n--- DAY 1 ---');
const d1Event = getFallbackEvent(1, 'explore', state);
applyDeltas(state, d1Event);
console.log('Day 1 Explore:', d1Event.narration.substring(0, 60) + '...');

// Special camp choice: player chooses to loot camp
const choice = DAY1_CAMP_CHOICE.options[0]; // Take the supplies
state.world_flags[choice.flag] = choice.value;
applyDeltas(state, {
  player_stat_deltas: choice.deltas,
  resource_deltas: choice.resource || {},
  world_flag_updates: { [choice.flag]: choice.value }
});
console.log('Camp Loot Choice made: camp_looted_day1 =', state.world_flags.camp_looted_day1);
applyResourceDecay(state);
state.day++;

// Day 2 to 7
const actions = ['hunt', 'build', 'investigate', 'rest', 'explore', 'build'];
for (let d = 2; d <= 7; d++) {
  console.log(`\n--- DAY ${d} ---`);
  const action = actions[d - 2];
  const event = getFallbackEvent(d, action, state);
  applyDeltas(state, event);
  console.log(`Action chosen: ${action}`);
  console.log(`Event narration: ${event.narration.substring(0, 80)}...`);
  if (event.npc_line) {
    console.log(`NPC Line (${event.npc_name}): "${event.npc_line}"`);
  }

  // Check camp looted callback on Day 5
  if (d === 5) {
    const mentionsCamp = event.narration.toLowerCase().includes('camp') || 
                         (event.npc_line && event.npc_line.toLowerCase().includes('kessler'));
    console.log(`[VERIFICATION] Day 5 mentions camp loot / Kessler hitch: ${mentionsCamp}`);
    if (!mentionsCamp) throw new Error('Camp loot was not referenced on Day 5!');
  }

  // Check background beat
  const beat = getBackgroundBeat(d, state);
  if (beat && action !== 'help') {
    state._backgroundBeats.push({ day: d, text: beat.text });
    if (beat.npc_pair && beat.npc_relationship_delta) {
      state.npc_relationships[beat.npc_pair] = (state.npc_relationships[beat.npc_pair] || 0) + beat.npc_relationship_delta;
    }
    console.log(`[BACKGROUND BEAT Day ${d}]: "${beat.text.substring(0, 60)}..."`);
  }

  applyResourceDecay(state);
  state.day++;
}

console.log('\n=== SIMULATION REACHED DAY 8 (ENDING TRIGGER) ===');
console.log(`Total decisions recorded: ${state._decisionsCount}`);
console.log(`Background beats witnessed: ${state._backgroundBeats.length}`);
if (state._backgroundBeats.length === 0) throw new Error('No background beats fired!');

const archetype = getArchetype(state.profile);
console.log(`\n[PART A] Archetype: ${archetype.name}`);
console.log(`Archetype description: ${archetype.description}`);
console.log('Profile traits:', state.profile);

const relationships = getRelationshipSummary(state);
console.log('\n[PART B] Final survivor relationships:');
relationships.forEach(r => {
  console.log(`- ${r.names[0]} & ${r.names[1]}: ${r.description} (${r.value >= 0 ? '+' : ''}${r.value})`);
});
console.log('Background beat history in Part B:');
state._backgroundBeats.forEach(b => console.log(`  Day ${b.day}: ${b.text}`));

console.log('\n=== TEST PASSED: 100% SUCCESSFUL RUN ===');
