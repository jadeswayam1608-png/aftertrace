// src/data/storyEvents.js - Dynamic Event Pool for the Random Story Engine
// The engine dynamically filters, weights, and randomly selects events from this pool
// based on current story state, visited nodes, intensity tier, and compatible tags.

export const STORY_EVENTS = [
  // ==========================================
  // EARLY INTENSITY (Wave 1 - 2: Recon, Discovery, Exploration)
  // ==========================================
  {
    id: "event_abandoned_camp",
    title: "The Abandoned Camp",
    speaker: "Tactical Reconnaissance",
    narration: "Smoldering charcoal and discarded meal rations litter the ravine. Footprints lead toward the perimeter fence, claw marks gouged into the cedar fenceposts. Whoever camped here left in sudden panic—leaving behind tactical munitions and a waterproof map case.",
    tags: ["survivor", "exploration", "supply"],
    compatibleTags: ["radio", "survivor", "exploration", "mystery", "supply"],
    incompatibleTags: [],
    requiredState: { minWave: 1, maxWave: 3 },
    intensity: "early",
    probabilityWeight: 9,
    onceOnly: true,
    audioProfile: "forest_tension",
    gameplayEffect: { xp: 40, ammo: 30 },
    stateUpdates: { survivorTrust: 1, majorClueFound: true },
    dialogue: {
      prompt: "WHAT DO YOU PRIORITIZE AT THE CAMPSITE?",
      options: [
        { text: "Secure military munitions & ammo cache", effect: { ammo: 30 }, stateUpdate: { tacticalFocus: true } },
        { text: "Examine map markings & diary notes", effect: { xp: 35 }, stateUpdate: { mysteryLevel: 1 } }
      ]
    }
  },
  {
    id: "event_frequency_intercept",
    title: "The Frequency Intercept",
    speaker: "Encrypted Radio Intercept",
    narration: "Your radio speaker crackles violently as a burst transmission cuts across the guard frequency: '...if you are reading this on the island... do NOT approach the hospital basement without full CBRN protection. Specimen Zero breached containment from cryogenic vault six.'",
    tags: ["radio", "quarantine", "mystery"],
    compatibleTags: ["radio", "mystery", "medical", "science", "investigation"],
    incompatibleTags: [],
    requiredState: { minWave: 1, maxWave: 4 },
    intensity: "early",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "radio_static",
    gameplayEffect: { xp: 45 },
    stateUpdates: { radioContact: true, mysteryLevel: 1 },
    dialogue: {
      prompt: "HOW DO YOU RESPOND TO THE BURST TRANSMISSION?",
      options: [
        { text: "Transmit digital acknowledgment ping", effect: { xp: 25 }, stateUpdate: { survivorTrust: 1 } },
        { text: "Maintain absolute radio silence", effect: { ammo: 15 }, stateUpdate: { stealthFocus: true } }
      ]
    }
  },
  {
    id: "event_underground_tunnel_entry",
    title: "The Subterranean Conduit",
    speaker: "Environmental Discovery",
    narration: "A rusted iron blast grate in the drainage basin has been pried open with a crowbar. Cool, ozone-scented air drafts up from concrete catacombs below. Fresh combat boot treads lead into the gloom, completely bypassing the razor-wire perimeter above.",
    tags: ["underground", "exploration", "stealth"],
    compatibleTags: ["underground", "exploration", "escape", "bunker", "safehouse"],
    incompatibleTags: [],
    requiredState: { minWave: 1, maxWave: 3 },
    intensity: "early",
    probabilityWeight: 7,
    onceOnly: true,
    audioProfile: "subterranean_alarm",
    gameplayEffect: { xp: 50 },
    stateUpdates: { undergroundRouteFound: true },
    dialogue: {
      prompt: "HOW DO YOU APPROACH THE CONDUIT?",
      options: [
        { text: "Mark coordinates on your survival GPS", effect: { xp: 30 }, stateUpdate: { majorClueFound: true } },
        { text: "Drop a flare down the shaft to check depth", effect: { ammo: 20 }, stateUpdate: { mysteryLevel: 1 } }
      ]
    }
  },
  {
    id: "event_overturned_convoy_truck",
    title: "The Armored Transport Wreck",
    speaker: "Field Inspection",
    narration: "A heavy 6x6 troop transport lies overturned across the fire road. Armor plating on the cab is dented inward by tremendous concussive force. Inside the ruptured cargo hold, an emergency supply crate remains locked behind a biometric thumbprint scanner.",
    tags: ["convoy", "military", "supply"],
    compatibleTags: ["convoy", "military", "tactical", "supply"],
    incompatibleTags: [],
    requiredState: { minWave: 1, maxWave: 3 },
    intensity: "early",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "forest_tension",
    gameplayEffect: { xp: 45, ammo: 40 },
    stateUpdates: { convoySeen: true },
    dialogue: {
      prompt: "HOW DO YOU BREACH THE SECURE CRATE?",
      options: [
        { text: "Use dead driver's biometric clearance", effect: { ammo: 45 }, stateUpdate: { majorClueFound: true } },
        { text: "Force the emergency manual release", effect: { health: 25 }, stateUpdate: { survivorTrust: 1 } }
      ]
    }
  },
  {
    id: "event_strange_cyan_luminescence",
    title: "The Prismatic Aurora",
    speaker: "Atmospheric Phenomenon",
    narration: "A silent shockwave ripples through the high coastal fog, turning the overcast clouds into an incandescent dome of electric sapphire. The hair on your forearms stands on end as electrical discharge hums along the barrel of your weapon.",
    tags: ["mystery", "phenomenon", "science"],
    compatibleTags: ["mystery", "phenomenon", "science", "beacon"],
    incompatibleTags: [],
    requiredState: { minWave: 1, maxWave: 4 },
    intensity: "early",
    probabilityWeight: 6,
    onceOnly: true,
    audioProfile: "facility_hum",
    gameplayEffect: { xp: 50 },
    stateUpdates: { mysteryLevel: 2 },
    dialogue: {
      prompt: "HOW DO YOU ANALYZE THE ELECTROMAGNETIC PULSE?",
      options: [
        { text: "Calibrate survival compass & optical sensor", effect: { xp: 40 }, stateUpdate: { majorClueFound: true } },
        { text: "Take shelter under dense pine canopy", effect: { health: 20 }, stateUpdate: { survivorTrust: 1 } }
      ]
    }
  },
  {
    id: "event_scout_encounter",
    title: "The Perimeter Scout",
    speaker: "Survivor Voice: Corporal Kaya",
    narration: "A laser sight flashes against your chest rig, then drops instantly. A wounded scout wearing torn tactical armor steps from behind a fallen oak: 'Hold your fire, survivor! You're clean. The horde is massing along the north ridge. Take these magazines—we'll need every rifle we've got.'",
    tags: ["survivor", "tactical", "hope"],
    compatibleTags: ["survivor", "tactical", "hope", "rescue", "community"],
    incompatibleTags: [],
    requiredState: { minWave: 1, maxWave: 3 },
    intensity: "early",
    probabilityWeight: 9,
    onceOnly: true,
    audioProfile: "forest_tension",
    gameplayEffect: { xp: 55, ammo: 35 },
    stateUpdates: { survivorTrust: 2, allyKayaSaved: true },
    dialogue: {
      prompt: "HOW DO YOU COORDINATE WITH CORPORAL KAYA?",
      options: [
        { text: "Offer her field dressings & painkillers", effect: { health: 15, xp: 30 }, stateUpdate: { survivorTrust: 3 } },
        { text: "Ask for tactical intel on the ridge horde", effect: { ammo: 25, xp: 30 }, stateUpdate: { majorClueFound: true } }
      ]
    }
  },

  // ==========================================
  // MID INTENSITY (Wave 2 - 4: Infrastructure, Clues, Escalation)
  // ==========================================
  {
    id: "event_power_station_generator",
    title: "The Substation Relay",
    speaker: "Infrastructure Terminal",
    narration: "Heavy electrical transformers loom in the gloom. You find the auxiliary manual restart lever. Throwing the heavy copper breaker sends a deep mechanical vibration shuddering through the earth. High-output perimeter floodlights hum to life across the eastern security fence.",
    tags: ["power", "engineering", "defense"],
    compatibleTags: ["power", "engineering", "defense", "military", "facility"],
    incompatibleTags: [],
    requiredState: { minWave: 2 },
    intensity: "mid",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "facility_hum",
    gameplayEffect: { xp: 65, ammo: 25 },
    stateUpdates: { powerRestored: true, mysteryLevel: 1 },
    dialogue: {
      prompt: "WHERE DO YOU ROUTE AUXILIARY GRID POWER?",
      options: [
        { text: "Route power to perimeter electrified fences", effect: { xp: 40 }, stateUpdate: { defenseGridActive: true } },
        { text: "Power radio relay towers & communications", effect: { xp: 40 }, stateUpdate: { radioContact: true } }
      ]
    }
  },
  {
    id: "event_dr_thorne_audio_diary",
    title: "The Lead Researcher's Tape",
    speaker: "Dr. Thorne's Classified Log",
    narration: "A digital dictaphone in a blood-splattered lab coat plays through static: 'Day 41. The pathogen did not originate from mainland contagion. It was cultured in our own bioreactors. The neural degeneration is irreversible, but the genetic antibody in Batch 99-Omega can neutralize the airborne vector.'",
    tags: ["science", "intel", "conspiracy"],
    compatibleTags: ["science", "intel", "conspiracy", "medical", "quarantine"],
    incompatibleTags: [],
    requiredState: { minWave: 2 },
    intensity: "mid",
    probabilityWeight: 7,
    onceOnly: true,
    audioProfile: "cryo_lab",
    gameplayEffect: { xp: 70 },
    stateUpdates: { majorClueFound: true, mysteryLevel: 2, hospitalVisited: true },
    dialogue: {
      prompt: "HOW DO YOU HANDLE DR. THORNE'S CONFESSION?",
      options: [
        { text: "Copy audio files to your encrypted drive", effect: { xp: 45 }, stateUpdate: { truthSeeker: true } },
        { text: "Extract antibody batch storage coordinates", effect: { health: 25 }, stateUpdate: { cureKnowledge: true } }
      ]
    }
  },
  {
    id: "event_emergency_airdrop",
    title: "The Munitions Airdrop",
    speaker: "Supply Intercept",
    narration: "A transport plane cuts through high storm clouds with low-rpm turboprops. A heavy cargo skid descends under a dual silk parachute, slamming into the meadow fifty meters away. The drop container releases automated green locator strobe lights.",
    tags: ["supply", "military", "tactical"],
    compatibleTags: ["supply", "military", "tactical", "convoy"],
    incompatibleTags: [],
    requiredState: { minWave: 2 },
    intensity: "mid",
    probabilityWeight: 9,
    onceOnly: true,
    audioProfile: "helicopter_rotor",
    gameplayEffect: { xp: 50, ammo: 60, health: 30 },
    stateUpdates: { safehouseEstablished: true },
    dialogue: {
      prompt: "HOW DO YOU SECURE THE DROP ZONE?",
      options: [
        { text: "Distribute munitions for prolonged survival", effect: { ammo: 50 }, stateUpdate: { tacticalFocus: true } },
        { text: "Check container for trauma kits & serum", effect: { health: 35 }, stateUpdate: { survivorTrust: 1 } }
      ]
    }
  },
  {
    id: "event_quarantine_airlock",
    title: "The Cryogenic Vault",
    speaker: "Laboratory Bio-Lock",
    narration: "Hydraulic locks groan as the reinforced steel airlock releases a cloud of sub-zero nitrogen vapor. Frost coats rows of sealed bio-hazard containment canisters. One central pedestal holds a vacuum-sealed titanium container labeled 'ANTIBODY SYNTHESIS MATRIX'.",
    tags: ["medical", "quarantine", "science"],
    compatibleTags: ["medical", "quarantine", "science", "cure", "investigation"],
    incompatibleTags: [],
    requiredState: { minWave: 2 },
    intensity: "mid",
    probabilityWeight: 7,
    onceOnly: true,
    audioProfile: "cryo_lab",
    gameplayEffect: { xp: 75, health: 25 },
    stateUpdates: { majorClueFound: true, cureSecured: true, hospitalVisited: true },
    dialogue: {
      prompt: "HOW DO YOU SECURE THE ANTIBODY MATRIX?",
      options: [
        { text: "Seal matrix in insulated survival pack", effect: { xp: 50 }, stateUpdate: { cureSecured: true } },
        { text: "Synthesize immediate field anti-viral booster", effect: { health: 40 }, stateUpdate: { partialCure: true } }
      ]
    }
  },
  {
    id: "event_sealed_armory_breach",
    title: "The Tactical Weapons Cache",
    speaker: "Security Vault Access",
    narration: "A hardened subterranean police weapons vault sits cracked by an oxy-acetylene torch. Inside are racks of high-capacity magazines, tactical combat optics, and heavy body armor vests bearing island SWAT insignias.",
    tags: ["tactical", "supply", "military"],
    compatibleTags: ["tactical", "supply", "military", "safehouse"],
    incompatibleTags: [],
    requiredState: { minWave: 2 },
    intensity: "mid",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "facility_hum",
    gameplayEffect: { xp: 60, ammo: 50, health: 20 },
    stateUpdates: { tacticalFocus: true },
    dialogue: {
      prompt: "HOW DO YOU OUTFIT YOUR TACTICAL GEAR?",
      options: [
        { text: "Equip reinforced ceramic body armor", effect: { health: 30 }, stateUpdate: { armoredReady: true } },
        { text: "Load high-velocity match ammunition", effect: { ammo: 45 }, stateUpdate: { highDamage: true } }
      ]
    }
  },
  {
    id: "event_survivor_radio_plea",
    title: "The Rooftop Beacon Call",
    speaker: "Distress Transmission",
    narration: "'Mayday! This is Station 4 rooftop redoubt! The lower stairwell doors just gave way. We have sixteen civilians including wounded! If there is an operator with a rifle in Sector 4, draw their attention away from the ladder!'",
    tags: ["survivor", "radio", "rescue"],
    compatibleTags: ["survivor", "radio", "rescue", "community", "hope"],
    incompatibleTags: [],
    requiredState: { minWave: 2 },
    intensity: "mid",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "radio_static",
    gameplayEffect: { xp: 65 },
    stateUpdates: { survivorTrust: 3, radioContact: true },
    dialogue: {
      prompt: "HOW DO YOU ASSIST THE ROOFTOP SURVIVORS?",
      options: [
        { text: "Fire flares to draw horde aggro away", effect: { xp: 50 }, stateUpdate: { heroAction: true } },
        { text: "Transmit extraction coordinates to their radio", effect: { xp: 40, ammo: 20 }, stateUpdate: { survivorTrust: 4 } }
      ]
    }
  },
  {
    id: "event_fog_inversion",
    title: "The Toxic Lowland Fog",
    speaker: "Hazard Advisory",
    narration: "Cold oceanic air traps a dense blanket of sulfurous fog against the forest floor. Visibility drops to ten meters. Through the white mist, glowing yellow eyes and guttural breathing announce that the horde has adapted to hunting by sound and scent.",
    tags: ["hazard", "tension", "weather"],
    compatibleTags: ["hazard", "tension", "weather", "exploration"],
    incompatibleTags: [],
    requiredState: { minWave: 2 },
    intensity: "mid",
    probabilityWeight: 7,
    onceOnly: true,
    audioProfile: "mountain_storm",
    gameplayEffect: { xp: 55, ammo: 20 },
    stateUpdates: { mysteryLevel: 1 },
    dialogue: {
      prompt: "HOW DO YOU COUNTER THE REDUCED VISIBILITY?",
      options: [
        { text: "Mount tactical weapon light & aim carefully", effect: { ammo: 25 }, stateUpdate: { tacticalFocus: true } },
        { text: "Retreat to high rocky elevation", effect: { health: 20 }, stateUpdate: { highGround: true } }
      ]
    }
  },

  // ==========================================
  // LATE INTENSITY (Wave 3 - 5: Crisis, Major Revelations, Heavy Combat)
  // ==========================================
  {
    id: "event_military_satellite_uplink",
    title: "The Satellite Directive",
    speaker: "Mainland Naval Command",
    narration: "The tactical field terminal beeps sharply with high-priority satellite telemetry: 'COMMAND OVERRIDE CONFIRMED. Operation Clean Slate authorization verified. Island bombardment scheduled for dawn. Only survivors holding verified antibody proof will be granted extraction.'",
    tags: ["military", "intel", "crisis"],
    compatibleTags: ["military", "intel", "crisis", "revelation", "escape"],
    incompatibleTags: [],
    requiredState: { minWave: 3 },
    intensity: "late",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "beacon_hum",
    gameplayEffect: { xp: 85 },
    stateUpdates: { majorClueFound: true, finalSequenceStarted: true },
    dialogue: {
      prompt: "HOW DO YOU RESPOND TO OPERATION CLEAN SLATE?",
      options: [
        { text: "Broadcast evidence of island civilian survivors", effect: { xp: 60 }, stateUpdate: { humanitarianHero: true } },
        { text: "Transcribe extraction coordinates for yourself", effect: { ammo: 30 }, stateUpdate: { pragmaticSurvival: true } }
      ]
    }
  },
  {
    id: "event_mutant_biomass_nest",
    title: "The Hive Spire",
    speaker: "Biological Warning",
    narration: "The walls of the subterranean drainage junction are coated in pulsing, bioluminescent fungal growth. Suspended in the organic matrix are mutated infected undergoing rapid biological metamorphosis into towering apex abominations.",
    tags: ["horror", "hazard", "mystery"],
    compatibleTags: ["horror", "hazard", "mystery", "underground"],
    incompatibleTags: [],
    requiredState: { minWave: 3 },
    intensity: "late",
    probabilityWeight: 7,
    onceOnly: true,
    audioProfile: "boss_standoff",
    gameplayEffect: { xp: 80, ammo: 35 },
    stateUpdates: { mysteryLevel: 3 },
    dialogue: {
      prompt: "HOW DO YOU DEAL WITH THE BIOMASS GROWTH?",
      options: [
        { text: "Ignite biomass with high-temp incendiaries", effect: { xp: 55 }, stateUpdate: { biomassDestroyed: true } },
        { text: "Harvest tissue specimen for antibody research", effect: { xp: 70 }, stateUpdate: { specimenSecured: true } }
      ]
    }
  },
  {
    id: "event_defensive_turret_reboot",
    title: "The Automated Sentry Network",
    speaker: "Perimeter Security Console",
    narration: "A computer terminal on the perimeter guard tower chirps: 'RE-ENGAGING SENTRY DEFENSE MATRICES'. Twin 20mm automated turrets rotate toward the treeline with a mechanical whirr, identifying targets and preparing to unleash lethal suppression fire.",
    tags: ["military", "defense", "technology"],
    compatibleTags: ["military", "defense", "technology", "power"],
    incompatibleTags: [],
    requiredState: { minWave: 3 },
    intensity: "late",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "facility_hum",
    gameplayEffect: { xp: 75, ammo: 40 },
    stateUpdates: { defenseGridActive: true },
    dialogue: {
      prompt: "HOW DO YOU CALIBRATE THE SENTRY TURRETS?",
      options: [
        { text: "Set fire priority to heavy & boss infected", effect: { ammo: 30 }, stateUpdate: { bossTargeting: true } },
        { text: "Establish 360-degree perimeter suppression zone", effect: { xp: 50 }, stateUpdate: { perimeterCover: true } }
      ]
    }
  },
  {
    id: "event_radio_operator_last_stand",
    title: "The Broadcaster's Stand",
    speaker: "North Tower Radio Station",
    narration: "You reach the radio transmitter room. The operator is bleeding against the console, but his headphones are still on: 'I held the channel open... coordinates sent to the fleet offshore. Take the master transmitter key. Tell them... tell them we held the line.'",
    tags: ["radio", "tragedy", "heroism"],
    compatibleTags: ["radio", "tragedy", "heroism", "beacon", "climax"],
    incompatibleTags: [],
    requiredState: { minWave: 3 },
    intensity: "late",
    probabilityWeight: 8,
    onceOnly: true,
    audioProfile: "radio_static",
    gameplayEffect: { xp: 90, ammo: 35 },
    stateUpdates: { radioContact: true, survivorTrust: 4, majorClueFound: true },
    dialogue: {
      prompt: "WHAT DO YOU DO AT THE OPERATOR'S CONSOLE?",
      options: [
        { text: "Lock the distress frequency on permanent repeat", effect: { xp: 60 }, stateUpdate: { broadcastLocked: true } },
        { text: "Secure the operator's dog tags & journal", effect: { xp: 50, health: 25 }, stateUpdate: { honorFallen: true } }
      ]
    }
  },

  // ==========================================
  // FINALE INTENSITY (Wave 4+: Climax, Extraction, Epilogue Preparation)
  // ==========================================
  {
    id: "event_beacon_alignment_complete",
    title: "The Summit Lighthouse Ignition",
    speaker: "Emergency Arc-Lamp System",
    narration: "Massive quartz lenses grind into position atop the cliffside tower. High-voltage capacitors discharge with a blinding flash, sending a five-million candlepower beam slicing through the night sky and illuminating the ocean for thirty miles.",
    tags: ["beacon", "climax", "hope"],
    compatibleTags: ["beacon", "climax", "hope", "rescue", "escape"],
    incompatibleTags: [],
    requiredState: { minWave: 4 },
    intensity: "finale",
    probabilityWeight: 10,
    onceOnly: true,
    audioProfile: "beacon_hum",
    gameplayEffect: { xp: 100, ammo: 40 },
    stateUpdates: { beaconLit: true, finalSequenceStarted: true },
    dialogue: {
      prompt: "HOW DO YOU DIRECT THE BEACON BEAM?",
      options: [
        { text: "Sweep horizon to guide naval rescue cutters", effect: { xp: 75 }, stateUpdate: { fleetContact: true } },
        { text: "Illuminate island perimeter to blind the horde", effect: { ammo: 35 }, stateUpdate: { hordeBlinded: true } }
      ]
    }
  },
  {
    id: "event_chopper_inbound_alert",
    title: "The Extraction Helo",
    speaker: "Rescue Pilot: Call Sign Osprey-1",
    narration: "'Survivor on Sector 4! This is Osprey-1 inbound on bearing two-seven-zero! We see your beacon and muzzle flashes through the storm. Clear the landing pad of hostiles—we have three minutes of fuel on station!'",
    tags: ["rescue", "military", "action"],
    compatibleTags: ["rescue", "military", "action", "climax"],
    incompatibleTags: [],
    requiredState: { minWave: 4 },
    intensity: "finale",
    probabilityWeight: 10,
    onceOnly: true,
    audioProfile: "helicopter_rotor",
    gameplayEffect: { xp: 110, ammo: 50 },
    stateUpdates: { extractionInbound: true, finalSequenceStarted: true },
    dialogue: {
      prompt: "HOW DO YOU SECURE THE EXTRACTION ZONE?",
      options: [
        { text: "Deploy smoke flares & hold the center pad", effect: { ammo: 40 }, stateUpdate: { padSecured: true } },
        { text: "Escort surviving allies to the chopper ramp", effect: { xp: 80 }, stateUpdate: { alliesEscorted: true } }
      ]
    }
  },
  {
    id: "event_dawn_horizon_break",
    title: "The First Light of Dawn",
    speaker: "Environmental Climax",
    narration: "A ribbon of pale gold splits the eastern horizon over the cold ocean. The longest night of your life is ending. The shrieks of the infected grow distant as they retreat from the cleansing morning sun, revealing a survivor standing triumphant amidst the ruins.",
    tags: ["dawn", "triumph", "epilogue"],
    compatibleTags: ["dawn", "triumph", "epilogue", "hope"],
    incompatibleTags: [],
    requiredState: { minWave: 4 },
    intensity: "finale",
    probabilityWeight: 9,
    onceOnly: true,
    audioProfile: "dawn_triumph",
    gameplayEffect: { xp: 120, health: 50 },
    stateUpdates: { dawnReached: true, finalSequenceStarted: true },
    dialogue: {
      prompt: "HOW DO YOU GREET THE MORNING SUN?",
      options: [
        { text: "Look out across the sea toward a new world", effect: { xp: 90 }, stateUpdate: { peacefulDawn: true } },
        { text: "Check remaining magazines—the fight continues", effect: { ammo: 50 }, stateUpdate: { warriorVigil: true } }
      ]
    }
  }
];
