export const LOCATION_IDS = {
  BEACH: 'beach',
  FOREST: 'forest',
  CAVE: 'cave',
  CAMP: 'camp',
  RADIO_TOWER: 'radio_tower',
  SURVIVOR_CAMP: 'survivor_camp'
};

export const ACTION_IDS = {
  EXPLORE: 'explore',
  HUNT: 'hunt',
  BUILD: 'build',
  HELP: 'help',
  INVESTIGATE: 'investigate',
  REST: 'rest'
};

export const ACTIONS = [
  { id: 'explore', icon: '🧭', label: 'Explore', location: null }, // cycles through unexplored
  { id: 'hunt', icon: '🏹', label: 'Hunt & Gather', location: 'forest' },
  { id: 'build', icon: '🔨', label: 'Build', location: 'survivor_camp' },
  { id: 'help', icon: '🤝', label: 'Help a Survivor', location: null }, // depends on NPC location
  { id: 'investigate', icon: '📡', label: 'Investigate Signal', location: 'radio_tower' },
  { id: 'rest', icon: '😴', label: 'Rest', location: 'survivor_camp' }
];

export const TRAIT_NAMES = ['risk', 'trust', 'empathy', 'curiosity', 'hoarding', 'planning'];

export const NPCS = {
  maya: { name: 'Maya', color: 0x7B9EA8, description: 'Warm, protective' },
  leo: { name: 'Leo', color: 0xA67C52, description: 'Pragmatic, guarded' },
  arun: { name: 'Arun', color: 0x8B6F47, description: 'Curious, impressionable' },
  priya: { name: 'Priya', color: 0x6B4C6E, description: 'Secretive, connected to the signal' }
};

export const NPC_LOCATIONS = {
  maya: ['beach', 'forest', 'survivor_camp'],
  leo: ['forest', 'cave', 'survivor_camp'],
  arun: ['survivor_camp', 'beach'],
  priya: ['radio_tower', 'cave']
};

export const ARCHETYPES = {
  risk: {
    name: 'THE DAREDEVIL',
    description: 'You walked into every danger the island offered. The cave, the storm, the unknown signal — you chose them all. You trusted your instincts over caution, and the island tested every one of them.'
  },
  trust: {
    name: 'THE DIPLOMAT',
    description: 'You believed in people, even when the evidence said otherwise. You shared resources, extended trust, and tried to hold the group together. Whether that made you wise or naive, the island will decide.'
  },
  empathy: {
    name: 'THE PROTECTOR',
    description: 'You carried everyone\'s weight, including your own. When someone was struggling, you were there. You put their survival above yours, again and again.'
  },
  curiosity: {
    name: 'THE SEEKER',
    description: 'You needed to know. Every signal, every fragment, every locked door — the answers mattered more than being safe. The island had secrets, and you couldn\'t leave them buried.'
  },
  hoarding: {
    name: 'THE HOARDER',
    description: 'You prioritized resources over relationships. You explored dangerous places often. You trusted only sparingly. When the storm came, you had enough to survive it. But no one came looking for you.'
  },
  planning: {
    name: 'THE ARCHITECT',
    description: 'You built systems. Shelter, supply chains, routines. People were variables in your survival equation. You optimized for outcomes, not connections.'
  }
};

export const EMOTES = {
  uncertain: '💭',
  trusting: '❤️',
  tense: '⚠️',
  withholding: '🤐'
};

export function getEmoteForTrust(trustLevel) {
  if (trustLevel >= 10) return EMOTES.trusting;
  if (trustLevel >= 0) return EMOTES.uncertain;
  if (trustLevel >= -10) return EMOTES.withholding;
  return EMOTES.tense;
}

export const RELATIONSHIP_PAIRS = ['maya_leo', 'maya_arun', 'leo_arun'];

export const TOTAL_DAYS = 7;
