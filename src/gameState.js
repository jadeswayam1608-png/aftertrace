import { TOTAL_DAYS } from './constants.js';

const initialState = {
  day: 1,
  phase: 'action', // 'action' | 'resolving' | 'narrative' | 'choice' | 'ending-a' | 'ending-b'
  currentLocation: 'beach',
  chosenAction: null,

  player: { food: 5, water: 5, health: 100 },
  explored_locations: ['beach'],

  profile: {
    risk: 5, trust: 5, empathy: 5,
    curiosity: 5, hoarding: 5, planning: 5
  },

  npc_trust: { maya: 0, leo: 0, arun: 0, priya: 0 },
  npc_relationships: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },

  world_flags: {
    storm_incoming: false,
    cave_unexplored: true,
    radio_signal_detected: false,
    camp_looted_day1: false,
    priya_secret_revealed: false,
    shelter_built: false,
    signal_investigated_count: 0
  },

  _backgroundBeats: [],
  _decisionsCount: 0,
  _npcInteractionsThisDay: [],
  _dayActions: [] // track what action was chosen each day
};

export const state = JSON.parse(JSON.stringify(initialState));

export function getState() {
  return state;
}

export function resetState() {
  Object.assign(state, JSON.parse(JSON.stringify(initialState)));
}

export function getDirectorPayload() {
  return {
    day: state.day,
    player: { ...state.player },
    explored_locations: [...state.explored_locations],
    profile: { ...state.profile },
    npc_trust: { ...state.npc_trust },
    npc_relationships: { ...state.npc_relationships },
    world_flags: { ...state.world_flags }
  };
}
