// src/data/startingStories.js - Exactly 60 Starting Story Scenarios for AFTERTRACE
// The player selects ONE at the beginning of a run. That choice becomes the foundation.
// The rest of the narrative is subsequently randomized by the story engine.

export const STARTING_STORIES = [
  {
    id: "story_01",
    num: 1,
    title: "The Last Radio Signal",
    icon: "📻",
    shortDescription: "A weak transmission appears on a frequency that should have been silent.",
    openingNarration: "Static hisses across the military shortwave band. Through the white noise, a trembling voice broadcasts coordinates north of the plateau before cutting into static. Someone was alive out there. You check your weapon, calibrate your receiver, and step into the dusk.",
    tags: ["radio", "mystery", "exploration"],
    atmosphere: "night_transmission",
    audioProfile: "radio_static",
    initialState: {
      radioContact: true,
      mysteryLevel: 1,
      powerRestored: false,
      hospitalVisited: false,
      safehouseEstablished: false,
      convoySeen: false,
      undergroundRouteFound: false,
      majorClueFound: false,
      survivorTrust: 0
    },
    compatibleTags: ["radio", "mystery", "exploration", "survivor", "investigation"]
  },
  {
    id: "story_02",
    num: 2,
    title: "The Abandoned Safehouse",
    icon: "🏚️",
    shortDescription: "A reinforced concrete refuge sits unlocked, its defenders vanished without blood.",
    openingNarration: "The blast door hangs ajar on rusted hinges. Inside, cold coffee sits beside fresh ammunition cases and an unrolled topographical map. There are no bodies, no signs of a breach—only a single chalk message on the blast shield: 'They came from beneath the floor.'",
    tags: ["safehouse", "investigation", "supply"],
    atmosphere: "cold_concrete",
    audioProfile: "facility_hum",
    initialState: {
      safehouseEstablished: true,
      mysteryLevel: 1,
      powerRestored: false,
      radioContact: false,
      undergroundRouteFound: false,
      survivorTrust: 0
    },
    compatibleTags: ["safehouse", "investigation", "supply", "underground"]
  },
  {
    id: "story_03",
    num: 3,
    title: "The Hospital Transmission",
    icon: "🏥",
    shortDescription: "A medical distress beacon pulses from the fourth floor of St. Jude's Ward.",
    openingNarration: "The emergency radio crackles with an automated quarantine loop: 'Bio-containment breach confirmed. Zero-patient specimens secured in sub-level cold storage. Requesting immediate sanitization team.' The hospital towers above the tree line, its emergency sirens faintly echoing.",
    tags: ["medical", "quarantine", "mystery"],
    atmosphere: "sterile_horror",
    audioProfile: "cryo_lab",
    initialState: {
      hospitalVisited: true,
      mysteryLevel: 2,
      radioContact: true,
      majorClueFound: true
    },
    compatibleTags: ["medical", "quarantine", "mystery", "investigation"]
  },
  {
    id: "story_04",
    num: 4,
    title: "The Missing Convoy",
    icon: "🚛",
    shortDescription: "Three armored personnel carriers sit abandoned along the northern ridge road.",
    openingNarration: "Heavy diesel smoke still curls into the dusk. Armor plating on the lead vehicle is shredded from the outside. Gun lockers have been broken open, spent brass carpet the gravel, and boot tracks lead east toward the logging trails.",
    tags: ["convoy", "military", "tactical"],
    atmosphere: "smoldering_wreckage",
    audioProfile: "forest_tension",
    initialState: {
      convoySeen: true,
      mysteryLevel: 1,
      survivorTrust: 0
    },
    compatibleTags: ["convoy", "military", "tactical", "supply"]
  },
  {
    id: "story_05",
    num: 5,
    title: "The Cliffside Beacon",
    icon: "🗼",
    shortDescription: "A high-intensity maritime warning strobe flashes high upon the sheer sea bluffs.",
    openingNarration: "Every twelve seconds, a piercing crimson flash illuminates the breaking surf below. Ships have stopped sailing these waters months ago, yet the emergency optic beacon is firing with mechanical precision, guiding something toward the rocks.",
    tags: ["beacon", "coastal", "exploration"],
    atmosphere: "ocean_winds",
    audioProfile: "coastal_surf",
    initialState: {
      mysteryLevel: 1,
      radioContact: false
    },
    compatibleTags: ["beacon", "coastal", "exploration", "mystery"]
  },
  {
    id: "story_06",
    num: 6,
    title: "The Broken Bridge",
    icon: "🌉",
    shortDescription: "The only mainland artery was deliberately detonated from the island side.",
    openingNarration: "Twisted rebar and severed cables dangle into the foggy gorge. Charges were placed with military precision on this end—meaning whoever blew the span was not trying to keep the infected out. They were making sure no one got off.",
    tags: ["military", "escape", "investigation"],
    atmosphere: "foggy_gorge",
    audioProfile: "ambient_wind",
    initialState: {
      mysteryLevel: 2,
      majorClueFound: true
    },
    compatibleTags: ["military", "escape", "investigation", "revelation"]
  },
  {
    id: "story_07",
    num: 7,
    title: "The Locked Metro",
    icon: "🚇",
    shortDescription: "Iron turnstiles and blast gates seal the subterranean transit lines.",
    openingNarration: "Through the iron grates of Station 4, the smell of damp ozone and dried copper wafts up. A security terminal flickers with green phosphor text: 'SUBTERRANEAN VENTILATION: 14% CAPACITY. HOSTILE BIOMASS DETECTED ON TRACKS.'",
    tags: ["underground", "urban", "mystery"],
    atmosphere: "subterranean_damp",
    audioProfile: "subterranean_alarm",
    initialState: {
      undergroundRouteFound: true,
      mysteryLevel: 1
    },
    compatibleTags: ["underground", "urban", "mystery", "exploration"]
  },
  {
    id: "story_08",
    num: 8,
    title: "The Underground Route",
    icon: "🕳️",
    shortDescription: "A drainage culvert offers a concealed bypass beneath the quarantined perimeter.",
    openingNarration: "Water rushes knee-deep through the moss-slick aqueduct. Glowstick remnants mark the path of someone who ran through here recently, leaving bloody handprints on the concrete conduit walls. The tunnel leads straight into the island's restricted interior.",
    tags: ["underground", "exploration", "survival"],
    atmosphere: "dark_sewer",
    audioProfile: "subterranean_alarm",
    initialState: {
      undergroundRouteFound: true,
      mysteryLevel: 1
    },
    compatibleTags: ["underground", "exploration", "survival", "hazard"]
  },
  {
    id: "story_09",
    num: 9,
    title: "The Silent School",
    icon: "🏫",
    shortDescription: "The regional academy was hastily converted into an emergency triage center.",
    openingNarration: "Desks were stacked into barricades across the cafeteria double-doors. Chalkboards list names under columns marked 'STABLE' and 'TRANSFERRED TO VAULT'. In the courtyard, rows of canvas cots stand undisturbed under the evening fog.",
    tags: ["triage", "survivor", "investigation"],
    atmosphere: "eerie_silence",
    audioProfile: "ambient_wind",
    initialState: {
      mysteryLevel: 1,
      survivorTrust: 1
    },
    compatibleTags: ["triage", "survivor", "investigation", "mystery"]
  },
  {
    id: "story_10",
    num: 10,
    title: "The Strange Light",
    icon: "💡",
    shortDescription: "A prismatic cyan luminescence pulses above the forest canopy every three minutes.",
    openingNarration: "It isn't fire and it isn't lightning. An intense sapphire flash illuminates the clouds in rhythmic cycles. The compass needle in your survival pack spins wildly whenever the pulse fires, ionizing the moist air with the scent of ozone.",
    tags: ["mystery", "phenomenon", "exploration"],
    atmosphere: "supernatural_dusk",
    audioProfile: "facility_hum",
    initialState: {
      mysteryLevel: 2
    },
    compatibleTags: ["mystery", "phenomenon", "exploration", "revelation"]
  },
  {
    id: "story_11",
    num: 11,
    title: "The Empty Camp",
    icon: "⛺",
    shortDescription: "A reconnaissance campsite was abandoned mid-meal less than an hour ago.",
    openingNarration: "A portable stove still hisses faintly beneath a kettle of lukewarm broth. Sleeping bags are torn open, satellite radios smashed with rifle butts. Footprints lead in scattered directions toward the dense pines.",
    tags: ["survivor", "investigation", "supply"],
    atmosphere: "haunted_camp",
    audioProfile: "forest_tension",
    initialState: {
      survivorTrust: 0,
      mysteryLevel: 1
    },
    compatibleTags: ["survivor", "investigation", "supply", "forest"]
  },
  {
    id: "story_12",
    num: 12,
    title: "The Handwritten Map",
    icon: "🗺️",
    shortDescription: "A military grid chart marked with red grease-pencil waypoints and evacuation landing zones.",
    openingNarration: "Found inside the jacket pocket of a deceased courier, the map outlines four hidden weapon caches, three collapsed bridges, and a circled sector labeled 'PROJECT AEGIS — LAST SECURE CONSOLE'. A scribbled note warns: 'Do not trust the mainland broadcast.'",
    tags: ["intel", "exploration", "military"],
    atmosphere: "conspiracy",
    audioProfile: "radio_static",
    initialState: {
      majorClueFound: true,
      mysteryLevel: 2
    },
    compatibleTags: ["intel", "exploration", "military", "mystery"]
  },
  {
    id: "story_13",
    num: 13,
    title: "The Emergency Broadcast",
    icon: "📡",
    shortDescription: "An automated civil defense alert loops continuously across all civilian bands.",
    openingNarration: "'Attention island residents: Federal quarantine Protocol 9 is now active. Shelter in place. Do not attempt maritime crossing. Perimeter defense batteries are authorized for lethal interdiction.' The sirens wail rhythmically across the darkening horizon.",
    tags: ["radio", "military", "quarantine"],
    atmosphere: "martial_law",
    audioProfile: "radio_static",
    initialState: {
      radioContact: true,
      mysteryLevel: 1
    },
    compatibleTags: ["radio", "military", "quarantine", "survival"]
  },
  {
    id: "story_14",
    num: 14,
    title: "The Power Station",
    icon: "⚡",
    shortDescription: "The regional hydroelectric substation hums erratically on emergency backup turbines.",
    openingNarration: "High-voltage towers stretch into the dusk, sparking with intermittent blue arcs. Breaker switches have tripped across five sectors, plunging the island into blackness. If you can restore the central generator, perimeter security grids and automated turrets will reactivate.",
    tags: ["power", "engineering", "infrastructure"],
    atmosphere: "industrial_spark",
    audioProfile: "facility_hum",
    initialState: {
      powerRestored: false,
      mysteryLevel: 1
    },
    compatibleTags: ["power", "engineering", "infrastructure", "military"]
  },
  {
    id: "story_15",
    num: 15,
    title: "The Survivor's Message",
    icon: "✉️",
    shortDescription: "A waterproof case lashed to a lookout tower containing a desperate cassette recording.",
    openingNarration: "You press play. A woman's voice speaks through ragged breaths: 'If you find this, Sector 3 is compromised. We're retreating to the weather observatory on the western ridge. We have clean water and antibiotics. Look for the yellow signal flares.'",
    tags: ["survivor", "investigation", "exploration"],
    atmosphere: "desperate_hope",
    audioProfile: "forest_tension",
    initialState: {
      survivorTrust: 1,
      mysteryLevel: 1
    },
    compatibleTags: ["survivor", "investigation", "exploration", "rescue"]
  },
  {
    id: "story_16",
    num: 16,
    title: "The Lost Radio",
    icon: "📻",
    shortDescription: "A military tactical walkie-talkie transmitting live chatter between unknown operators.",
    openingNarration: "You tune into the encrypted channel. Two voices whisper between bursts of rifle fire: 'Bravo team is down... the pathogen mutation is accelerating... fallback to bunker entrance 04!' You key the transmitter, but only a sharp gasp answers back.",
    tags: ["radio", "military", "tactical"],
    atmosphere: "tactical_intercept",
    audioProfile: "radio_static",
    initialState: {
      radioContact: true,
      mysteryLevel: 1
    },
    compatibleTags: ["radio", "military", "tactical", "mystery"]
  },
  {
    id: "story_17",
    num: 17,
    title: "The Watchtower",
    icon: "🔭",
    shortDescription: "A forest ranger tower offering an unobstructed panoramic view of the island's devastation.",
    openingNarration: "Climbing thirty meters of iron rungs brings you above the tree line. Through binoculars, you can see fires smoldering in the harbor district, strange glowing lines along the old airfield, and hundreds of silhouettes shifting along the valley floor.",
    tags: ["recon", "exploration", "survival"],
    atmosphere: "high_vantage",
    audioProfile: "ambient_wind",
    initialState: {
      mysteryLevel: 1,
      majorClueFound: true
    },
    compatibleTags: ["recon", "exploration", "survival", "investigation"]
  },
  {
    id: "story_18",
    num: 18,
    title: "The Supply Cache",
    icon: "📦",
    shortDescription: "A parachute drop container wedged into the branches of a giant maritime pine.",
    openingNarration: "The olive-drab container bears federal emergency relief stencils. Slashing the cords drops the crate to the moss below. Inside: combat rations, sealed 5.56 NATO magazines, and a bio-chem diagnostic kit flashing amber.",
    tags: ["supply", "survival", "tactical"],
    atmosphere: "windy_treeline",
    audioProfile: "forest_tension",
    initialState: {
      mysteryLevel: 0
    },
    compatibleTags: ["supply", "survival", "tactical", "military"]
  },
  {
    id: "story_19",
    num: 19,
    title: "The Mysterious Stranger",
    icon: "👤",
    shortDescription: "A hooded figure on the ridge who fires a flare before disappearing into the brush.",
    openingNarration: "They stood on the rock outcrop, gas mask reflecting the dying sunlight. When they saw your weapon, they lowered their rifle, fired a green phosphorescent flare into the valley sky, and vanished down the cliff trail, leaving a trail of spent brass.",
    tags: ["survivor", "mystery", "investigation"],
    atmosphere: "cryptic_encounter",
    audioProfile: "forest_tension",
    initialState: {
      survivorTrust: 1,
      mysteryLevel: 2
    },
    compatibleTags: ["survivor", "mystery", "investigation", "rescue"]
  },
  {
    id: "story_20",
    num: 20,
    title: "The Closed Checkpoint",
    icon: "🚧",
    shortDescription: "A militarized razor-wire gate guarded by automated sentry turrets that have jammed.",
    openingNarration: "Floodlights hum over sandbag revetments. Sentry guns click impotently against empty ammunition drums. The main gate hydraulic arm is warped, and behind the gatehouse, decontamination sprayers hiss empty vapor into the cold night.",
    tags: ["military", "hazard", "exploration"],
    atmosphere: "perimeter_lockdown",
    audioProfile: "facility_hum",
    initialState: {
      mysteryLevel: 1
    },
    compatibleTags: ["military", "hazard", "exploration", "tactical"]
  },
  {
    id: "story_21",
    num: 21,
    title: "The Evacuation Route",
    icon: "🏃",
    shortDescription: "Signs pointing toward Dock 7 are spray-painted with skulls and warning runes.",
    openingNarration: "Signs reading 'CIVILIAN EVACUATION CORRIDOR' have been aggressively defaced with black spray paint: 'IT IS A SLAUGHTERHOUSE. DO NOT BOARD.' A line of abandoned family luggage and overturned strollers stretches toward the harbor gate.",
    tags: ["investigation", "quarantine", "escape"],
    atmosphere: "tragic_aftermath",
    audioProfile: "ambient_wind",
    initialState: {
      mysteryLevel: 2,
      majorClueFound: true
    },
    compatibleTags: ["investigation", "quarantine", "escape", "revelation"]
  },
  {
    id: "story_22",
    num: 22,
    title: "The Broken Vehicle",
    icon: "🚙",
    shortDescription: "A four-wheel-drive patrol SUV with its battery intact and winch cable engaged.",
    openingNarration: "The SUV is wedged between two granite boulders. Its dashboard radio is alive with background hum, and the high-output halogen spotlights still slice through the mist. The glove box contains a master security keycard for Sector 4.",
    tags: ["supply", "technology", "exploration"],
    atmosphere: "foggy_roadside",
    audioProfile: "forest_tension",
    initialState: {
      mysteryLevel: 1
    },
    compatibleTags: ["supply", "technology", "exploration", "military"]
  },
  {
    id: "story_23",
    num: 23,
    title: "The Hidden Archive",
    icon: "📁",
    shortDescription: "A subterranean records vault beneath the municipal courthouse.",
    openingNarration: "Behind a heavy steel document door lie filing cabinets labeled 'SPECIAL BIOCHEMICAL RESEARCH COMMISSION — 1984–PRESENT'. Red-stamped folders reveal that the epidemic wasn't an accident—it was a planned stress test of the civilian populace.",
    tags: ["intel", "conspiracy", "revelation"],
    atmosphere: "damp_vault",
    audioProfile: "facility_hum",
    initialState: {
      majorClueFound: true,
      mysteryLevel: 3
    },
    compatibleTags: ["intel", "conspiracy", "revelation", "mystery"]
  },
  {
    id: "story_24",
    num: 24,
    title: "The Last Safehouse",
    icon: "🏠",
    shortDescription: "A fortified ranger cabin with reinforced storm shutters and rainwater cisterns.",
    openingNarration: "Solar panels on the cedar roof still hum quietly. Inside, emergency medical supplies are organized neatly, and a wood stove radiates residual warmth. A note on the mantelpiece reads: 'Whoever you are, take what you need to survive. Don't let them take your humanity.'",
    tags: ["safehouse", "survival", "hope"],
    atmosphere: "warm_haven",
    audioProfile: "ambient_wind",
    initialState: {
      safehouseEstablished: true,
      survivorTrust: 1
    },
    compatibleTags: ["safehouse", "survival", "hope", "supply"]
  },
  {
    id: "story_25",
    num: 25,
    title: "The Water Station",
    icon: "💧",
    shortDescription: "The island water treatment plant with chemical filtration tanks overflowing.",
    openingNarration: "Vats of charcoal and zeolite filters are rumbling violently. Purple discoloration stains the effluent runoff channel. A dead lab technician clutching a test vial floats near the intake grates—the contamination entered through the municipal aqueducts.",
    tags: ["hazard", "investigation", "infrastructure"],
    atmosphere: "toxic_industrial",
    audioProfile: "subterranean_alarm",
    initialState: {
      mysteryLevel: 2
    },
    compatibleTags: ["hazard", "investigation", "infrastructure", "medical"]
  },
  {
    id: "story_26",
    num: 26,
    title: "The Second Signal",
    icon: "📶",
    shortDescription: "A response signal answers your military transmitter with unmistakable Morse code.",
    openingNarration: "You transmit three short pulses. Five seconds later, your headphones buzz with three sharp return tones, followed by coordinate letters: 'H-E-L-I-P-A-D-S-O-U-T-H'. Someone with high-level clearance is monitoring your frequency.",
    tags: ["radio", "mystery", "survivor"],
    atmosphere: "electric_anticipation",
    audioProfile: "radio_static",
    initialState: {
      radioContact: true,
      mysteryLevel: 2
    },
    compatibleTags: ["radio", "mystery", "survivor", "rescue"]
  },
  {
    id: "story_27",
    num: 27,
    title: "The Rooftop Distress Call",
    icon: "🏢",
    shortDescription: "A massive 'S.O.S.' spelled in burning tires atop the island's tallest hotel.",
    openingNarration: "Acrid black rubber smoke billows into the twilight sky. Through a sniper scope, you can see a barricade on the roof access stairwell holding off dozens of writhing infected while two survivors reload their sidearms.",
    tags: ["survivor", "rescue", "action"],
    atmosphere: "smoke_fire",
    audioProfile: "boss_standoff",
    initialState: {
      survivorTrust: 2,
      mysteryLevel: 1
    },
    compatibleTags: ["survivor", "rescue", "action", "urban"]
  },
  {
    id: "story_28",
    num: 28,
    title: "The Abandoned Laboratory",
    icon: "🔬",
    shortDescription: "A clandestine subterranean genetics research lab concealed beneath a fish hatchery.",
    openingNarration: "Behind refrigerated storage lockers, an airlock slides open to reveal sterile stainless steel countertops, shattered glass centrifuge units, and cryo-tanks labeled 'PROTOTYPE NEURAL REGRESSOR'. The bio-hazard warning lamps blink in rhythmic amber.",
    tags: ["science", "medical", "mystery"],
    atmosphere: "cryo_facility",
    audioProfile: "cryo_lab",
    initialState: {
      hospitalVisited: true,
      mysteryLevel: 3,
      majorClueFound: true
    },
    compatibleTags: ["science", "medical", "mystery", "quarantine"]
  },
  {
    id: "story_29",
    num: 29,
    title: "The Silent Highway",
    icon: "🛣️",
    shortDescription: "A four-lane coastal causeway clogged with hundreds of gridlocked, empty cars.",
    openingNarration: "Car doors stand open to the wind. Wallets, luggage, and teddy bears are scattered across asphalt coated with dead autumn leaves. Not a single engine runs, but inside several locked vehicles, shadowy silhouettes press their hands against the frosted glass.",
    tags: ["urban", "exploration", "survival"],
    atmosphere: "gridlock_cemetery",
    audioProfile: "ambient_wind",
    initialState: {
      mysteryLevel: 1
    },
    compatibleTags: ["urban", "exploration", "survival", "horror"]
  },
  {
    id: "story_30",
    num: 30,
    title: "The Emergency Shelter",
    icon: "⛺",
    shortDescription: "A church basement converted into a haven with barricaded stained-glass windows.",
    openingNarration: "Candle stubs flicker on the stone altar. Rows of pews have been disassembled into pointed timber pikes braced against the oak doors. A ham radio sits next to a handwritten log of food rations and ammo counts.",
    tags: ["safehouse", "survivor", "community"],
    atmosphere: "sanctuary",
    audioProfile: "forest_tension",
    initialState: {
      safehouseEstablished: true,
      survivorTrust: 1
    },
    compatibleTags: ["safehouse", "survivor", "community", "hope"]
  },
  {
    id: "story_31",
    num: 31,
    title: "The Power Grid",
    icon: "🔌",
    shortDescription: "The central power distribution hub for the entire military perimeter network.",
    openingNarration: "Giant transformer coils tower overhead. If you can rewire the primary substation relay, power will flood the electrified perimeter fences and automated lighting arrays, turning the dark island into a beacon of defensive security.",
    tags: ["power", "engineering", "defense"],
    atmosphere: "electric_hum",
    audioProfile: "facility_hum",
    initialState: {
      powerRestored: false,
      mysteryLevel: 1
    },
    compatibleTags: ["power", "engineering", "defense", "military"]
  },
  {
    id: "story_32",
    num: 32,
    title: "The Underground Bunker",
    icon: "🛡️",
    shortDescription: "A cold-war fallout shelter sealed behind a 20-ton hydraulic blast door.",
    openingNarration: "The keypad glows with emergency yellow digits. Entering the courier's override code triggers pneumatic pressure seals that hiss as stale air from forty years ago vents out. Inside: weapons racks, airtight ration drums, and an intact radio transmitter.",
    tags: ["bunker", "supply", "military"],
    atmosphere: "cold_war_steel",
    audioProfile: "subterranean_alarm",
    initialState: {
      undergroundRouteFound: true,
      safehouseEstablished: true
    },
    compatibleTags: ["bunker", "supply", "military", "safehouse"]
  },
  {
    id: "story_33",
    num: 33,
    title: "The Missing Operator",
    icon: "📡",
    shortDescription: "The chief communications technician whose daily broadcasts kept survivors alive.",
    openingNarration: "His transmission station on North Point is wrecked. Blood leads toward the cliff steps, but next to the microphone sits an encrypted thumb drive labeled 'BROADCAST TO MAINLAND — REVEAL THE CURE PROTOCOL'.",
    tags: ["intel", "radio", "investigation"],
    atmosphere: "tragic_mystery",
    audioProfile: "radio_static",
    initialState: {
      radioContact: true,
      majorClueFound: true,
      mysteryLevel: 2
    },
    compatibleTags: ["intel", "radio", "investigation", "mystery"]
  },
  {
    id: "story_34",
    num: 34,
    title: "The Old Photograph",
    icon: "📷",
    shortDescription: "A faded Polaroid showing scientists celebrating outside the island facility in 2021.",
    openingNarration: "On the back of the photograph, handwritten in red ink: 'Dr. Thorne said the antibody was stable. He lied to save his funding.' One of the faces in the picture matches the corpse of the lead researcher you found in the safehouse.",
    tags: ["intel", "mystery", "conspiracy"],
    atmosphere: "haunting_revelation",
    audioProfile: "ambient_wind",
    initialState: {
      majorClueFound: true,
      mysteryLevel: 2
    },
    compatibleTags: ["intel", "mystery", "conspiracy", "science"]
  },
  {
    id: "story_35",
    num: 35,
    title: "The Forgotten Outpost",
    icon: "🏕️",
    shortDescription: "A concealed sniper nest overlooking the northern coastal marshlands.",
    openingNarration: "Camo netting covers a wooden blind tucked high in a gnarled pine. Inside sits a pristine bolt-action precision rifle, two boxes of match-grade ammunition, and a range-card documenting zombie migration patterns across the salt marsh.",
    tags: ["tactical", "recon", "supply"],
    atmosphere: "silent_vigil",
    audioProfile: "forest_tension",
    initialState: {
      mysteryLevel: 1
    },
    compatibleTags: ["tactical", "recon", "supply", "military"]
  },
  {
    id: "story_36",
    num: 36,
    title: "The Beacon Tower",
    icon: "🚨",
    shortDescription: "The high-frequency radio relay spire that crowns the central island peak.",
    openingNarration: "Towering eighty meters into the swirling coastal mist, the lattice steel spire is the key to contacting naval rescue fleets beyond the quarantine blockade. If you reach its summit, you can transmit an unblockable SOS.",
    tags: ["beacon", "radio", "climax"],
    atmosphere: "high_altitude_wind",
    audioProfile: "beacon_hum",
    initialState: {
      radioContact: false,
      mysteryLevel: 1
    },
    compatibleTags: ["beacon", "radio", "climax", "escape"]
  },
  {
    id: "story_37",
    num: 37,
    title: "The Convoy Route",
    icon: "🚚",
    shortDescription: "The predetermined military evacuation vector marked by chemical flare casings.",
    openingNarration: "Burned phosphorus flares mark a path through the dense forest firebreaks. The tire tracks are massive—belonging to heavy 8x8 armored supply haulers that were attempting to break through the horde toward the eastern docks.",
    tags: ["convoy", "exploration", "military"],
    atmosphere: "charred_forest",
    audioProfile: "forest_tension",
    initialState: {
      convoySeen: true,
      mysteryLevel: 1
    },
    compatibleTags: ["convoy", "exploration", "military", "tactical"]
  },
  {
    id: "story_38",
    num: 38,
    title: "The Locked Warehouse",
    icon: "🏭",
    shortDescription: "A shipping depot sealed with magnetic locks and military bio-containment seals.",
    openingNarration: "Warning placards in four languages declare: 'CLASS 4 BIOLOGICAL HAZARD — AUTHORIZED PERSONNEL ONLY'. Through the industrial bay windows, heavy steel shipping containers sit chained to concrete pylons under motion-sensing floodlights.",
    tags: ["hazard", "quarantine", "supply"],
    atmosphere: "industrial_dread",
    audioProfile: "facility_hum",
    initialState: {
      mysteryLevel: 2
    },
    compatibleTags: ["hazard", "quarantine", "supply", "investigation"]
  },
  {
    id: "story_39",
    num: 39,
    title: "The Flooded District",
    icon: "🌊",
    shortDescription: "A sunken village where brackish seawater covers roads and ground floors.",
    openingNarration: "Broken seawalls have let the ocean reclaim the low-lying quarter. Small motorboats and canoes drift between flooded houses. In the murky water below, pale shapes drift silently, waiting for the unwary to step off the submerged rooftops.",
    tags: ["coastal", "hazard", "exploration"],
    atmosphere: "murky_water",
    audioProfile: "coastal_surf",
    initialState: {
      mysteryLevel: 1
    },
    compatibleTags: ["coastal", "hazard", "exploration", "survival"]
  },
  {
    id: "story_40",
    num: 40,
    title: "The Communications Center",
    icon: "📡",
    shortDescription: "The central telecommunications switching exchange for the entire island.",
    openingNarration: "Fiber optic cables and server racks fill three subterranean floors. Backup battery banks are down to twelve percent charge, but several satellite uplinks remain hot, receiving encrypted telemetry from the mainland defense command.",
    tags: ["technology", "intel", "radio"],
    atmosphere: "server_room",
    audioProfile: "facility_hum",
    initialState: {
      radioContact: true,
      majorClueFound: true,
      mysteryLevel: 2
    },
    compatibleTags: ["technology", "intel", "radio", "mystery"]
  },
  {
    id: "story_41",
    num: 41,
    title: "The Survivor Group",
    icon: "👥",
    shortDescription: "A coalition of armed civilians and former police holding the high ground.",
    openingNarration: "Sandbags, concertina wire, and halogen spotlights turn the civic center into a fortified redoubt. A spotter with a megaphone calls down from the roof: 'Identify yourself, survivor! Are you bitten, or are you looking for a fight?'",
    tags: ["survivor", "community", "diplomacy"],
    atmosphere: "tense_standoff",
    audioProfile: "forest_tension",
    initialState: {
      survivorTrust: 2,
      safehouseEstablished: true
    },
    compatibleTags: ["survivor", "community", "diplomacy", "hope"]
  },
  {
    id: "story_42",
    num: 42,
    title: "The Hidden Tunnel",
    icon: "🚇",
    shortDescription: "An unmapped service tunnel beneath the island perimeter security fence.",
    openingNarration: "Hidden beneath the roots of an ancient cedar tree, an iron trapdoor opens into a hand-carved escape tunnel reinforced with wooden timbers. It bypasses the deadly electrified minefields that ring the island's military sector.",
    tags: ["underground", "stealth", "escape"],
    atmosphere: "earthy_darkness",
    audioProfile: "subterranean_alarm",
    initialState: {
      undergroundRouteFound: true,
      mysteryLevel: 1
    },
    compatibleTags: ["underground", "stealth", "escape", "exploration"]
  },
  {
    id: "story_43",
    num: 43,
    title: "The Final Supply Run",
    icon: "🛒",
    shortDescription: "The last remaining pharmacy in town, surrounded by barricades and tripwires.",
    openingNarration: "Glass display cases are shattered, but behind the locked dispensary door are untouched bottles of broad-spectrum antibiotics, sterile bandages, and morphine injectors. However, the floorboards above creak with heavy, shambling footsteps.",
    tags: ["medical", "supply", "risk"],
    atmosphere: "looted_interior",
    audioProfile: "cryo_lab",
    initialState: {
      hospitalVisited: true
    },
    compatibleTags: ["medical", "supply", "risk", "survival"]
  },
  {
    id: "story_44",
    num: 44,
    title: "The Broken Observatory",
    icon: "🔭",
    shortDescription: "An astronomical research station at the highest peak with its dome shattered.",
    openingNarration: "The giant reflector telescope points toward the stormy sea. Wind howls through the shattered dome glass. On the research computer screens, a telemetry map displays naval blockade vessels surrounding the island in a strict five-mile perimeter.",
    tags: ["science", "recon", "revelation"],
    atmosphere: "mountaintop_chill",
    audioProfile: "mountain_storm",
    initialState: {
      majorClueFound: true,
      mysteryLevel: 2
    },
    compatibleTags: ["science", "recon", "revelation", "escape"]
  },
  {
    id: "story_45",
    num: 45,
    title: "The Night Broadcast",
    icon: "🎙️",
    shortDescription: "A pirate radio station playing eerie jazz records interspersed with survival advice.",
    openingNarration: "'Good evening, Sector 4,' a raspy, calm voice announces between record scratches. 'Stay out of the light tonight. The new strain tracks heat signatures. If you're near the water filtration plant, watch the high catwalks. Stay alive out there.'",
    tags: ["radio", "survivor", "mystery"],
    atmosphere: "nocturnal_jazz",
    audioProfile: "radio_static",
    initialState: {
      radioContact: true,
      survivorTrust: 1
    },
    compatibleTags: ["radio", "survivor", "mystery", "exploration"]
  },
  {
    id: "story_46",
    num: 46,
    title: "The Emergency Terminal",
    icon: "💻",
    shortDescription: "A military field terminal linked to the national defense satellite network.",
    openingNarration: "A hardened green Panasonic laptop sits open inside a command tent. The screen prompts: 'ENTER AUTHORIZATION CODE TO INITIATE EVACUATION PROTOCOL.' A nearby soldier's dogtag has a six-digit cipher etched into its reverse side.",
    tags: ["technology", "military", "escape"],
    atmosphere: "tactical_console",
    audioProfile: "facility_hum",
    initialState: {
      majorClueFound: true,
      mysteryLevel: 2
    },
    compatibleTags: ["technology", "military", "escape", "intel"]
  },
  {
    id: "story_47",
    num: 47,
    title: "The Search Party",
    icon: "🔦",
    shortDescription: "A trio of flashlight beams sweeping through the misty forest below.",
    openingNarration: "You crouch behind a mossy boulder. Three survivors in matching tactical vests and gas masks move with synchronized precision, checking doorways and clearing alleys. Are they mainland rescue rangers, or private contractors cleaning up witnesses?",
    tags: ["survivor", "tactical", "tension"],
    atmosphere: "misty_forest",
    audioProfile: "forest_tension",
    initialState: {
      survivorTrust: 1,
      mysteryLevel: 1
    },
    compatibleTags: ["survivor", "tactical", "tension", "investigation"]
  },
  {
    id: "story_48",
    num: 48,
    title: "The Sealed Facility",
    icon: "☣️",
    shortDescription: "A deep bunker with biohazard warning signs and pressurized airlocks.",
    openingNarration: "The blast door is sealed with lead and concrete, but an emergency access hatch has been blown open from the inside. Fresh bootprints lead out into the snow, accompanied by elongated drag marks that cannot belong to any natural creature.",
    tags: ["quarantine", "hazard", "mystery"],
    atmosphere: "deep_containment",
    audioProfile: "cryo_lab",
    initialState: {
      hospitalVisited: true,
      mysteryLevel: 3
    },
    compatibleTags: ["quarantine", "hazard", "mystery", "horror"]
  },
  {
    id: "story_49",
    num: 49,
    title: "The Last Vehicle",
    icon: "🚒",
    shortDescription: "A heavy off-road fire rescue truck with full diesel tanks and iron grille bars.",
    openingNarration: "Its reinforced bull-bar is coated with grime and blood, but the 8-cylinder turbo diesel engine starts on the first turn of the key. Its water cannon is operational, and the storage lockers are packed with axes, flares, and heavy ropes.",
    tags: ["vehicle", "escape", "supply"],
    atmosphere: "heavy_diesel",
    audioProfile: "forest_tension",
    initialState: {
      mysteryLevel: 1
    },
    compatibleTags: ["vehicle", "escape", "supply", "tactical"]
  },
  {
    id: "story_50",
    num: 50,
    title: "The Evacuation Signal",
    icon: "🎆",
    shortDescription: "Three brilliant emerald parachute flares lighting up the southern coastline.",
    openingNarration: "The flares burn with unearthly brilliance for two full minutes, illuminating the surf and rocky islands. A megaphone horn from an offshore cutter reverberates over the waves: 'FINAL EVACUATION WINDOW CLOSING IN 0600 HOURS. ALL UNITS MOVE TO BEACHHEAD.'",
    tags: ["evacuation", "military", "climax"],
    atmosphere: "emerald_glow",
    audioProfile: "coastal_surf",
    initialState: {
      mysteryLevel: 2,
      radioContact: true
    },
    compatibleTags: ["evacuation", "military", "climax", "escape"]
  },
  {
    id: "story_51",
    num: 51,
    title: "The Darkened City",
    icon: "🏙️",
    shortDescription: "The island's urban center, completely devoid of electrical light or traffic.",
    openingNarration: "Skyscrapers stand like jagged gravestones against the twilight clouds. Broken shopfronts, overturned ambulances, and thousands of spent shell casings line the avenues. Somewhere in the concrete canyons, a car alarm wails and dies.",
    tags: ["urban", "exploration", "survival"],
    atmosphere: "concrete_abyss",
    audioProfile: "ambient_wind",
    initialState: {
      mysteryLevel: 1
    },
    compatibleTags: ["urban", "exploration", "survival", "hazard"]
  },
  {
    id: "story_52",
    num: 52,
    title: "The Unknown Frequency",
    icon: "📻",
    shortDescription: "A bizarre broadcast playing synchronized number sequences in a mechanical voice.",
    openingNarration: "'Seven... Four... Two... Niner... Zero... Breakthrough confirmed in sub-level nine... Repeat sequence.' Deciphering the numbers reveals coordinates to an underground shelter that is not marked on any public island maps.",
    tags: ["radio", "mystery", "cipher"],
    atmosphere: "number_station",
    audioProfile: "radio_static",
    initialState: {
      radioContact: true,
      mysteryLevel: 2,
      majorClueFound: true
    },
    compatibleTags: ["radio", "mystery", "cipher", "underground"]
  },
  {
    id: "story_53",
    num: 53,
    title: "The Hidden Map",
    icon: "📜",
    shortDescription: "A schematic found behind an electrical panel detailing ventilation bypass ducts.",
    openingNarration: "Architectural blue-prints reveal that every major public building on the island was constructed with interconnected emergency drainage and air-filtration tunnels designed to withstand airborne bio-hazards.",
    tags: ["intel", "underground", "exploration"],
    atmosphere: "secret_blueprints",
    audioProfile: "facility_hum",
    initialState: {
      undergroundRouteFound: true,
      majorClueFound: true
    },
    compatibleTags: ["intel", "underground", "exploration", "safehouse"]
  },
  {
    id: "story_54",
    num: 54,
    title: "The Abandoned Command Center",
    icon: "🎖️",
    shortDescription: "The Joint Operations Bunker where senior officers directed the early containment.",
    openingNarration: "Maps on the central command table are covered with red grease-pencil Xs over civilian neighborhoods. The final log entry from the garrison general reads: 'We cannot hold the perimeter. God forgive what we are leaving behind.'",
    tags: ["military", "intel", "tragedy"],
    atmosphere: "command_bunker",
    audioProfile: "facility_hum",
    initialState: {
      majorClueFound: true,
      mysteryLevel: 2
    },
    compatibleTags: ["military", "intel", "tragedy", "revelation"]
  },
  {
    id: "story_55",
    num: 55,
    title: "The Distress Beacon",
    icon: "🚨",
    shortDescription: "An automated emergency locator beacon dropped by a downed rescue helicopter.",
    openingNarration: "The yellow beacon floats in a pond of marsh water, pulsing a high-pitched homing chirp. Fifty meters away in the reeds lies the broken tail rotor of a Coast Guard MH-60 Jayhawk, its cargo hold pried open from the inside.",
    tags: ["beacon", "rescue", "hazard"],
    atmosphere: "swamp_marsh",
    audioProfile: "coastal_surf",
    initialState: {
      mysteryLevel: 1,
      radioContact: true
    },
    compatibleTags: ["beacon", "rescue", "hazard", "military"]
  },
  {
    id: "story_56",
    num: 56,
    title: "The Silent Research Station",
    icon: "🧪",
    shortDescription: "An atmospheric monitoring outpost deep in the highlands with all data logs intact.",
    openingNarration: "Wind turbines spin lazily in the mountain gale. The station is clean, warm, and untouched. Computer screens show real-time aerosol dispersion models proving that the pathogen is decaying rapidly under exposure to oceanic salt spray.",
    tags: ["science", "hope", "intel"],
    atmosphere: "sterile_hope",
    audioProfile: "mountain_storm",
    initialState: {
      hospitalVisited: true,
      majorClueFound: true,
      mysteryLevel: 3
    },
    compatibleTags: ["science", "hope", "intel", "cure"]
  },
  {
    id: "story_57",
    num: 57,
    title: "The Last Transmission",
    icon: "📻",
    shortDescription: "A live voice breaking through all military scramblers with your exact callsign.",
    openingNarration: "'Survivor on Sector 4 grid... this is Captain Vance, offshore cutter Resolute. We have your thermal signature on our satellite feed. If you can eliminate the hostiles blocking Landing Zone Charlie, we will extract you.'",
    tags: ["radio", "rescue", "action"],
    atmosphere: "final_hour",
    audioProfile: "helicopter_rotor",
    initialState: {
      radioContact: true,
      mysteryLevel: 2,
      survivorTrust: 2
    },
    compatibleTags: ["radio", "rescue", "action", "climax"]
  },
  {
    id: "story_58",
    num: 58,
    title: "The Unknown Survivor",
    icon: "🤝",
    shortDescription: "A lone combat medic barricaded inside an armored bank vault with trauma supplies.",
    openingNarration: "Through the vault intercom, she checks your eyes with a fiber-optic camera: 'Negative for retinal hemorrhaging. Come inside quickly. I have blood expanders, sterile scalpel sets, and five boxes of armor-piercing rounds. Let's finish this.'",
    tags: ["survivor", "medical", "ally"],
    atmosphere: "secure_vault",
    audioProfile: "facility_hum",
    initialState: {
      survivorTrust: 3,
      safehouseEstablished: true
    },
    compatibleTags: ["survivor", "medical", "ally", "hope"]
  },
  {
    id: "story_59",
    num: 59,
    title: "The Final Safe Zone",
    icon: "🏕️",
    shortDescription: "The last fortified civilian compound, encircled by automated searchlights and snipers.",
    openingNarration: "High on the rocky promontory, floodlights sweep the valley. Over two hundred survivors are sheltered behind concrete barricades and electric fences. But sirens are beginning to wail as a massive swarm approaches from the lowlands.",
    tags: ["community", "defense", "climax"],
    atmosphere: "perimeter_siege",
    audioProfile: "boss_standoff",
    initialState: {
      safehouseEstablished: true,
      survivorTrust: 3,
      mysteryLevel: 2
    },
    compatibleTags: ["community", "defense", "climax", "rescue"]
  },
  {
    id: "story_60",
    num: 60,
    title: "The Last Beacon",
    icon: "🗼",
    shortDescription: "The maritime super-beacon on the western headland, ready to be ignited for rescue.",
    openingNarration: "The massive tungsten arc-lamp towers ninety meters into the stormy night sky. If you can route high-voltage emergency power to the igniter coils, its blinding five-million candlepower beam will signal every naval vessel within forty nautical miles.",
    tags: ["beacon", "climax", "hope"],
    atmosphere: "thunderous_summit",
    audioProfile: "beacon_hum",
    initialState: {
      mysteryLevel: 2,
      powerRestored: false,
      radioContact: true
    },
    compatibleTags: ["beacon", "climax", "hope", "rescue"]
  }
];
