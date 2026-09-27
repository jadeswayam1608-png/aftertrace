export const DAY1_CAMP_CHOICE = {
  prompt: "The camp's fire pit is still warm. Whoever was here left in a hurry — food, rope, a half-repaired radio.",
  options: [
    { label: "Take the supplies", flag: 'camp_looted_day1', value: true, deltas: { hoarding: 2, trust: -1 }, resource: { food: 2 } },
    { label: "Leave a marker instead", flag: 'camp_looted_day1', value: false, deltas: { empathy: 2, trust: 1 }, resource: {} }
  ]
};

const events = {
  1: {
    explore: (state) => ({
      narration: "You follow the footprints into the treeline. The forest is dense, but paths have been worn — someone's been here before you. You find a clearing with trampled undergrowth and a view of the whole eastern shore.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 1, trust: 0, empathy: 0, curiosity: 1, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: { cave_unexplored: true },
      location: 'forest'
    }),
    hunt: (state) => ({
      narration: "You stick close to the shoreline, watching the tidal pools for movement. You manage to pin a sizable crab with a sharp stick before it slips away into the rocks.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 0, trust: 0, empathy: 0, curiosity: 0, hoarding: 1, planning: 1 },
      resource_deltas: { food: 2, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'beach'
    }),
    build: (state) => ({
      narration: "The loose driftwood on the beach offers some decent timber. You spend hours dragging logs together, forming a basic windbreak against the incoming breeze.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 0, trust: 0, empathy: 0, curiosity: 0, hoarding: 0, planning: 2 },
      resource_deltas: { food: 0, water: -1, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    }),
    help: (state) => ({
      narration: "You approach a small figure struggling with a heavy canvas tarp. She flinches as you offer a hand, but eventually nods her thanks as you help secure it.",
      npc_line: "I thought I was the only one left. Be careful out there... the cliffs aren't stable.",
      npc_name: "Maya",
      player_stat_deltas: { risk: 0, trust: 2, empathy: 2, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 2, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    }),
    investigate: (state) => ({
      narration: "You notice static crackling from a half-buried radio receiver near the dunes. Brushing off the sand, you realize it's tuned to a frequency that shouldn't be active.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 1, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 1 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: { signal_investigated_count: 1 },
      location: 'beach'
    }),
    rest: (state) => ({
      narration: "Exhaustion claims you early. You curl up against the base of a large palm tree, listening to the crashing waves, trying to forget how you got here.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: -1, trust: 0, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: -1, water: -1, health: 10 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'beach'
    })
  },
  2: {
    explore: (state) => ({
      narration: "Pushing deeper inland, you discover a dark cavern mouth partially hidden by vines. The air blowing from inside is chillingly cold, contrasting with the tropical heat.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 2, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: { cave_unexplored: false },
      location: 'cave'
    }),
    hunt: (state) => ({
      narration: "You craft a makeshift snare from some loose vines and set it along a narrow animal trail. Returning later, you find a small rodent caught in the trap.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 0, trust: 0, empathy: -1, curiosity: 0, hoarding: 1, planning: 2 },
      resource_deltas: { food: 3, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    build: (state) => ({
      narration: "You spend the day reinforcing the perimeter of the main camp with sharpened stakes. It's grueling work, but the sense of security is worth the blistered hands.",
      npc_line: "Not bad. A bit sloppy on the corners, but it'll slow anything down.",
      npc_name: "Leo",
      player_stat_deltas: { risk: -1, trust: 1, empathy: 0, curiosity: 0, hoarding: 0, planning: 2 },
      resource_deltas: { food: -1, water: -1, health: -5 },
      npc_trust_deltas: { maya: 0, leo: 2, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    }),
    help: (state) => ({
      narration: "You find Arun trying to organize a pile of scavenged medical supplies. You sit beside him, silently sorting bandages and pills into usable kits.",
      npc_line: "Thanks. I get overwhelmed sometimes. It's just... a lot to take in.",
      npc_name: "Arun",
      player_stat_deltas: { risk: 0, trust: 1, empathy: 2, curiosity: 0, hoarding: 0, planning: 1 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 2, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 1, leo_arun: 1 },
      world_flag_updates: {},
      location: 'camp'
    }),
    investigate: (state) => ({
      narration: "You follow the peculiar hum of the radio signal inland, finding a cluster of rusted metal debris. It looks less like a shipwreck and more like a downed satellite.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 2, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 1 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: { signal_investigated_count: (state.world_flags.signal_investigated_count || 0) + 1 },
      location: 'forest'
    }),
    rest: (state) => ({
      narration: "You stay in the shade today, avoiding the punishing midday sun. You hear voices arguing faintly in the distance, but choose to conserve your energy.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: -1, trust: -1, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: -1, water: -1, health: 15 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: -1, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    })
  },
  3: {
    explore: (state) => ({
      narration: "Climbing to the high ridge, you get a clear view of the island's interior. You spot unnatural, geometric stone formations rising through the dense canopy to the north.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 2, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 1 },
      resource_deltas: { food: -1, water: -1, health: -5 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    hunt: (state) => ({
      narration: "You track wild pigs through the mud near a freshwater stream. You don't catch a pig, but you manage to forage an armful of starchy tubers from the muddy banks.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 1, trust: 0, empathy: 0, curiosity: 0, hoarding: 2, planning: 0 },
      resource_deltas: { food: 2, water: 2, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    build: (state) => ({
      narration: "Using broad leaves and flexible branches, you construct a rudimentary rainwater catchment system. It's fragile, but every drop counts out here.",
      npc_line: "Smart. Let's hope the wind doesn't tear it apart tonight.",
      npc_name: "Maya",
      player_stat_deltas: { risk: 0, trust: 1, empathy: 0, curiosity: 0, hoarding: 1, planning: 2 },
      resource_deltas: { food: 0, water: 3, health: 0 },
      npc_trust_deltas: { maya: 1, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    }),
    help: (state) => ({
      narration: "Leo is hauling heavy rocks to reinforce the fire pit. You step in to help without asking. He doesn't say much, but matches your rhythm.",
      npc_line: "Keep your back straight. We can't afford anyone pulling a muscle right now.",
      npc_name: "Leo",
      player_stat_deltas: { risk: 0, trust: 1, empathy: 1, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: -1, water: -1, health: -5 },
      npc_trust_deltas: { maya: 0, leo: 2, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 1, maya_arun: 0, leo_arun: 1 },
      world_flag_updates: {},
      location: 'camp'
    }),
    investigate: (state) => ({
      narration: "You trace some bizarre, luminescent fungus growing near the cave entrance. It forms a pattern, almost like an arrow pointing deeper into the dark.",
      npc_line: "You shouldn't follow that. Not yet.",
      npc_name: "Priya",
      player_stat_deltas: { risk: 2, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 2 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'cave'
    }),
    rest: (state) => ({
      narration: "You retreat to your shelter. Your muscles ache with a deep, dull pain. You dream of machinery grinding beneath the earth.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 0, trust: 0, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: -1, water: -1, health: 20 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    })
  },
  4: {
    explore: (state) => ({
      narration: "You press into the northern sector, discovering crumbling stone ruins half-swallowed by the jungle. Strange symbols are etched into the archways.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 1, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: -1, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 1 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'cave'
    }),
    hunt: (state) => ({
      narration: "Spearfishing off the reef yields a good catch today. The colorful fish might be bony, but they're fresh protein. You clean them on the rocks.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 1, trust: 0, empathy: 0, curiosity: 0, hoarding: 2, planning: 0 },
      resource_deltas: { food: 4, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'beach'
    }),
    build: (state) => ({
      narration: "You fashion a makeshift distress signal on the highest visible peak, arranging bright orange tarp fragments. The wind immediately tries to tear it away.",
      npc_line: "Do you really think anyone is looking for us?",
      npc_name: "Arun",
      player_stat_deltas: { risk: 0, trust: 0, empathy: 1, curiosity: 0, hoarding: 0, planning: 2 },
      resource_deltas: { food: -1, water: -1, health: -5 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 1, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 1, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    help: (state) => ({
      narration: "You sit with Maya as she inspects her dwindling rations. You share a small portion of your own, eating in silence as the sun sets.",
      npc_line: "You shouldn't give away your strength. But... thank you.",
      npc_name: "Maya",
      player_stat_deltas: { risk: 0, trust: 2, empathy: 2, curiosity: 0, hoarding: -1, planning: 0 },
      resource_deltas: { food: -1, water: 0, health: 0 },
      npc_trust_deltas: { maya: 3, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 1, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    }),
    investigate: (state) => ({
      narration: "You manage to get the radio partially working. Instead of static, you hear a rhythmic, mechanical pulse. It's not a distress beacon. It's a countdown.",
      npc_line: "Turn it off. Now.",
      npc_name: "Leo",
      player_stat_deltas: { risk: 1, trust: -1, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: -1, arun: 0, priya: 2 },
      npc_relationship_deltas: { maya_leo: -1, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: { signal_investigated_count: (state.world_flags.signal_investigated_count || 0) + 1 },
      location: 'camp'
    }),
    rest: (state) => ({
      narration: "Your body forces you to stop. You sleep heavily through the afternoon, waking only when a sudden, cold breeze sweeps through the camp.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 0, trust: 0, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: -1, water: -1, health: 25 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    })
  },
  5: {
    explore: (state) => ({
      narration: "You brave the dark interior of the cave. The walls are unusually smooth, definitely not a natural formation. You find strange, metallic wiring embedded in the rock.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 2, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'cave'
    }),
    hunt: (state) => ({
      narration: "The animals are acting strange today, skittish and aggressive. You barely manage to gather some edible mushrooms before a wild dog chases you off.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 2, trust: 0, empathy: 0, curiosity: 0, hoarding: 1, planning: 0 },
      resource_deltas: { food: 1, water: 0, health: -10 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    build: (state) => ({
      narration: "You notice the clouds darkening violently on the horizon. You dedicate the day to tying down everything loose in camp, reinforcing the main structures.",
      npc_line: "That storm looks bad. We need to be ready to move if the water rises.",
      npc_name: "Leo",
      player_stat_deltas: { risk: 0, trust: 1, empathy: 0, curiosity: 0, hoarding: 0, planning: 3 },
      resource_deltas: { food: -1, water: -1, health: -5 },
      npc_trust_deltas: { maya: 0, leo: 1, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 1, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    }),
    help: (state) => ({
      narration: "You find Priya staring blankly at the horizon. You sit silently next to her for over an hour before she finally speaks.",
      npc_line: "They aren't coming to rescue us. They're coming to finish the job.",
      npc_name: "Priya",
      player_stat_deltas: { risk: 0, trust: 1, empathy: 2, curiosity: 1, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 3 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'beach'
    }),
    investigate: (state) => ({
      narration: "You dig around the ruins and uncover a sealed container. Inside is a pristine topographical map of the island, marked with locations that don't match reality.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 1, trust: 0, empathy: 0, curiosity: 3, hoarding: 1, planning: 1 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'cave'
    }),
    rest: (state) => ({
      narration: "A nagging headache keeps you awake even as you try to rest. The tension in the camp is palpable. Everyone is waiting for the storm.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 0, trust: 0, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: -1, water: -1, health: 10 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    })
  },
  6: {
    explore: (state) => ({
      narration: "The wind is howling now. Exploring is dangerous, but you push up to the ridge. You see strange lights flashing far out to sea, matching the radio's rhythm.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 3, trust: 0, empathy: 0, curiosity: 2, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: -15 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    hunt: (state) => ({
      narration: "Desperation drives you into the worsening weather. You manage to spear a large fish trapped in a tidal pool, but slip and scrape your leg badly on the coral.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 2, trust: 0, empathy: 0, curiosity: 0, hoarding: 2, planning: 0 },
      resource_deltas: { food: 3, water: 0, health: -10 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'beach'
    }),
    build: (state) => ({
      narration: "You frantically pack sandbags around the camp's lowest points. The sky is a bruised purple. Everyone pitches in, working in terrified silence.",
      npc_line: "This isn't going to hold. We have to make for the caves.",
      npc_name: "Maya",
      player_stat_deltas: { risk: 0, trust: 1, empathy: 1, curiosity: 0, hoarding: 0, planning: 2 },
      resource_deltas: { food: -1, water: -1, health: -10 },
      npc_trust_deltas: { maya: 2, leo: 1, arun: 1, priya: 0 },
      npc_relationship_deltas: { maya_leo: -1, maya_arun: 2, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    }),
    help: (state) => ({
      narration: "Arun is panicking, haphazardly throwing items into his pack. You grab his shoulders, forcing him to look at you, calming him down enough to think straight.",
      npc_line: "I don't want to die here. Please don't let me die here.",
      npc_name: "Arun",
      player_stat_deltas: { risk: 0, trust: 2, empathy: 3, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 3, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 1, leo_arun: 1 },
      world_flag_updates: {},
      location: 'camp'
    }),
    investigate: (state) => ({
      narration: "You corner Priya about the map and the signal. She looks at you with weary acceptance, finally pulling a strange, metallic cylinder from her pocket.",
      npc_line: "I stole the beacon before the crash. I thought if I broke it, we'd be free. I was wrong.",
      npc_name: "Priya",
      player_stat_deltas: { risk: 1, trust: 1, empathy: 1, curiosity: 3, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 0 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 3 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: { priya_secret_revealed: true },
      location: 'camp'
    }),
    rest: (state) => ({
      narration: "You try to rest, but the booming thunder makes sleep impossible. You lie awake, hoarding your remaining strength for whatever tomorrow brings.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 0, trust: -1, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: -1, water: -1, health: 15 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: -1, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'camp'
    })
  },
  7: {
    explore: (state) => ({
      narration: "The storm hits with full fury. Trees are being ripped from the earth. You can barely see two feet in front of you as you stumble through the mud.",
      npc_line: "Get down!",
      npc_name: "Leo",
      player_stat_deltas: { risk: 3, trust: 0, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: -30 },
      npc_trust_deltas: { maya: 0, leo: 1, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    hunt: (state) => ({
      narration: "Hunting is impossible. The island is flooding. You are nearly swept away by a sudden torrent of water, scrambling up a tree just in time.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 3, trust: 0, empathy: 0, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: -20 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    build: (state) => ({
      narration: "You frantically brace the doors of the cave with debris as the others huddle inside. Water pours in, but your barriers hold back the worst of it.",
      npc_line: "We owe you our lives. I won't forget this.",
      npc_name: "Maya",
      player_stat_deltas: { risk: 1, trust: 2, empathy: 1, curiosity: 0, hoarding: 0, planning: 3 },
      resource_deltas: { food: 0, water: 0, health: -10 },
      npc_trust_deltas: { maya: 3, leo: 2, arun: 2, priya: 1 },
      npc_relationship_deltas: { maya_leo: 2, maya_arun: 2, leo_arun: 2 },
      world_flag_updates: {},
      location: 'cave'
    }),
    help: (state) => ({
      narration: "During the chaos, debris pins Arun's leg. You risk the floodwaters to drag him out. You are both battered and bruised, but you make it to high ground.",
      npc_line: "You came back for me. You actually came back.",
      npc_name: "Arun",
      player_stat_deltas: { risk: 3, trust: 3, empathy: 3, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: -25 },
      npc_trust_deltas: { maya: 1, leo: 0, arun: 4, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 2, leo_arun: 2 },
      world_flag_updates: {},
      location: 'camp'
    }),
    investigate: (state) => ({
      narration: "You run to the highest ridge to look at the lights. Through the rain, you see a massive, dark silhouette rising from the ocean. It's not a ship.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: 3, trust: 0, empathy: 0, curiosity: 4, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: -15 },
      npc_trust_deltas: { maya: 0, leo: 0, arun: 0, priya: 0 },
      npc_relationship_deltas: { maya_leo: 0, maya_arun: 0, leo_arun: 0 },
      world_flag_updates: {},
      location: 'forest'
    }),
    rest: (state) => ({
      narration: "You stay down, hiding in the safest crevice you can find. The storm rages above, threatening to tear the island apart. You are helpless, but alive.",
      npc_line: null,
      npc_name: null,
      player_stat_deltas: { risk: -2, trust: 0, empathy: -1, curiosity: 0, hoarding: 0, planning: 0 },
      resource_deltas: { food: 0, water: 0, health: 5 },
      npc_trust_deltas: { maya: -1, leo: -1, arun: -1, priya: -1 },
      npc_relationship_deltas: { maya_leo: -1, maya_arun: -1, leo_arun: -1 },
      world_flag_updates: {},
      location: 'cave'
    })
  }
};

export function getFallbackEvent(day, action, state) {
  const event = events[day][action](state);
  
  if (state.world_flags.camp_looted_day1) {
    if (day === 5) {
      event.narration += " Priya stops mid-sentence and stares at the knot on your pack. She recognizes the gear from the abandoned camp you looted on Day 1.";
      if (!event.npc_line) {
        event.npc_name = "Priya";
        event.npc_line = "That's a Kessler hitch. Only one person on this island ties rope like that.";
      }
    } else if (day > 2 && action === 'explore') {
      event.narration += " You still carry the supplies you took from the abandoned camp on Day 1.";
    }
  }
  
  return event;
}

export function getBackgroundBeat(day, state) {
  if (day === 2) {
    return { 
      text: "Maya and Leo argue fiercely near the fire pit about whether to search for more survivors or fortify the camp.", 
      npc_pair: "maya_leo", 
      npc_relationship_delta: -1 
    };
  }
  if (day === 3) {
    return { 
      text: "Arun found something strange in the forest and showed it quietly to Leo, explicitly avoiding Maya.", 
      npc_pair: "leo_arun", 
      npc_relationship_delta: 1 
    };
  }
  if (day === 4) {
    return { 
      text: "Maya and Arun had a long, hushed conversation. Maya seemed significantly calmer afterward.", 
      npc_pair: "maya_arun", 
      npc_relationship_delta: 2 
    };
  }
  if (day === 5) {
    return { 
      text: "Leo and Maya didn't speak to each other all day. The silence is deafening. Arun definitely noticed.", 
      npc_pair: "maya_leo", 
      npc_relationship_delta: -2 
    };
  }
  if (day === 6) {
    return { 
      text: "Arun mentions, almost as an aside, that Leo and Maya didn't speak at all yesterday. 'Not one word. I don't know what happened between them.'", 
      npc_pair: "maya_leo", 
      npc_relationship_delta: 0 
    };
  }
  
  return null;
}
