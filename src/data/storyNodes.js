// src/data/storyNodes.js - 60 Modular Data-Driven Narrative Nodes for AFTERTRACE
// Spans Act I (Shoreline & Outskirts), Act II (Research Compound), and Act III (Beacon & Extraction)

export const STORY_NODES = {
  // ═══════════════════════════════════════════════════════════════════
  // ACT I: THE SHORELINE & OUTSKIRTS (Nodes 1 to 20)
  // ═══════════════════════════════════════════════════════════════════
  story_001: {
    id: 'story_001',
    act: 1,
    title: 'THE WRECKAGE OF FLIGHT 804',
    speaker: 'NARRATION',
    text: 'Salty brine stings your eyes as you pull yourself onto the black volcanic sand. Behind you, the twin engines of your transport plane hiss into the churning surf. You are alive, but the island is unnervingly silent.',
    audioProfile: 'audio_story_001',
    choices: [
      { text: 'Search the burning fuselage for supplies', setVariables: { scavengedCrash: true }, xpReward: 30, nextNodeId: 'story_002' },
      { text: 'Rush toward the tree line for immediate cover', setVariables: { stealthApproach: true }, xpReward: 25, nextNodeId: 'story_003' }
    ]
  },
  story_002: {
    id: 'story_002',
    act: 1,
    title: 'BURNING AVIONICS',
    speaker: 'AVIONICS RECORDER',
    text: 'A severed cockpit console sparks in the dark. The flight recorder plays on a looped capacitor: "...radar malfunction is not weather-related. Ground control, the quarantine zone has expanded... nothing is permitted to leave."',
    audioProfile: 'audio_story_002',
    choices: [
      { text: 'Pocket the encrypted flight telemetry drive', setVariables: { hasTelemetry: true, storyKnowledge: 1 }, xpReward: 35, nextNodeId: 'story_004' },
      { text: 'Ignore the electronics and salvage weapon cases', setVariables: { extraPistolMags: true }, xpReward: 25, nextNodeId: 'story_004' }
    ]
  },
  story_003: {
    id: 'story_003',
    act: 1,
    title: 'THE SHADOWED CANOPY',
    speaker: 'NARRATION',
    text: 'Beneath the towering coastal palms, damp moss absorbs the sound of your boots. Scratched into the bark of an ironwood tree is a crude military insignia and the digits: 104.7 MHz.',
    audioProfile: 'audio_story_003',
    choices: [
      { text: 'Tune your portable tactical radio to 104.7 MHz', setVariables: { tunedRadio: true }, xpReward: 30, nextNodeId: 'story_005' },
      { text: 'Mark the tree coordinates and scout the ridgeline', setVariables: { ridgeMapped: true }, xpReward: 25, nextNodeId: 'story_006' }
    ]
  },
  story_004: {
    id: 'story_004',
    act: 1,
    title: 'FIRST BLOOD ON THE REEF',
    speaker: 'NARRATION',
    text: 'A guttural rasp breaks the ocean rhythm. A ragged silhouette stumbles past the tide pool, eyes gleaming milky yellow under the twilight crimson sky. It does not breathe; it only hungers.',
    audioProfile: 'audio_story_004',
    choices: [
      { text: 'Take steady aim at its cranial weakpoint', setVariables: { combatFocus: true }, xpReward: 35, nextNodeId: 'story_007' },
      { text: 'Maneuver quietly behind the rock outcrop', setVariables: { evasiveTactic: true }, xpReward: 25, nextNodeId: 'story_007' }
    ]
  },
  story_005: {
    id: 'story_005',
    act: 1,
    title: 'VOICE ON THE WIRE',
    speaker: 'RADIO OPERATOR VANCE',
    text: '"...if any survivors from the downed transport can hear this, do NOT proceed inland through the main pass. The barricades breached twelve hours ago. We have established a rally depot at the old radar tower."',
    audioProfile: 'audio_story_005',
    choices: [
      { text: 'Transmit an affirmative response to Vance', setVariables: { trustRadio: true, vanceContact: true }, xpReward: 30, nextNodeId: 'story_008' },
      { text: 'Maintain strict radio silence to prevent interception', setVariables: { trustRadio: false, silentProtocol: true }, xpReward: 30, nextNodeId: 'story_008' }
    ]
  },
  story_006: {
    id: 'story_006',
    act: 1,
    title: 'THE CLIFFSIDE BEACON',
    speaker: 'NARRATION',
    text: 'From the elevation of the western bluff, the full geography of the island unravels. Across the misty valley stands a decommissioned naval fortress and a massive reinforced concrete dome sealed with biometric locks.',
    audioProfile: 'audio_story_006',
    choices: [
      { text: 'Note the generator substations feeding the dome', setVariables: { powerGridKnown: true }, xpReward: 35, nextNodeId: 'story_009' },
      { text: 'Scan the beaches for additional survivor flares', setVariables: { searchBeaches: true }, xpReward: 25, nextNodeId: 'story_009' }
    ]
  },
  story_007: {
    id: 'story_007',
    act: 1,
    title: 'THE DRIFTWOOD CAMP',
    speaker: 'NARRATION',
    text: 'Charred timber and an extinguished camp kettle sit inside a small clearing. A bloodied combat journal lies half-buried in the embers. The handwriting degenerates into jagged trembling strokes.',
    audioProfile: 'audio_story_007',
    choices: [
      { text: 'Decipher the final pages of the journal', setVariables: { loreCollected: 1, journalRead: true }, xpReward: 40, nextNodeId: 'story_010' },
      { text: 'Check the waterproof ration cannister under the log', setVariables: { extraRations: true }, xpReward: 25, nextNodeId: 'story_010' }
    ]
  },
  story_008: {
    id: 'story_008',
    act: 1,
    title: 'HAZMAT TRAIL',
    speaker: 'NARRATION',
    text: 'Torn yellow chemical suits hang like ribbons from the concertina wire along the gulley. Warning stencils read: "BIO-SAFETY LEVEL 4 — CONTAINMENT FAILURE IMMINENT."',
    audioProfile: 'audio_story_008',
    choices: [
      { text: 'Collect an intact respirator canister', setVariables: { gasProtection: true }, xpReward: 30, nextNodeId: 'story_011' },
      { text: 'Follow the tire tracks toward the drainage tunnel', setVariables: { tunnelRoute: true }, xpReward: 30, nextNodeId: 'story_011' }
    ]
  },
  story_009: {
    id: 'story_009',
    act: 1,
    title: 'THE PATROL SKIFF',
    speaker: 'NARRATION',
    text: 'A coast guard patrol vessel lies beached upon the coral reef, riddled with high-velocity bullet holes from the inside out. The emergency distress transponder continues its steady amber strobe.',
    audioProfile: 'audio_story_009',
    choices: [
      { text: 'Salvage flare launcher and nautical charts', setVariables: { flaresAcquired: true }, xpReward: 35, nextNodeId: 'story_012' },
      { text: 'Disable the transponder before it attracts the horde', setVariables: { stealthIsland: true }, xpReward: 30, nextNodeId: 'story_012' }
    ]
  },
  story_010: {
    id: 'story_010',
    act: 1,
    title: 'ECHOES IN THE MIST',
    speaker: 'NARRATION',
    text: 'The evening mist rolls in from the Pacific, thick with the smell of ozone and burnt sulfur. Far up in the mountains, a siren wails twice and abruptly chokes on its own gears.',
    audioProfile: 'audio_story_010',
    choices: [
      { text: 'Hunker down behind stone ramparts to prepare weapons', setVariables: { defensiveBonus: true }, xpReward: 30, nextNodeId: 'story_013' },
      { text: 'Press forward while the fog conceals your footsteps', setVariables: { aggressivePace: true }, xpReward: 35, nextNodeId: 'story_013' }
    ]
  },
  story_011: {
    id: 'story_011',
    act: 1,
    title: 'TRANSMISSION ANOMALY',
    speaker: 'UNKNOWN BROADCAST',
    text: '"...Subject zero exhibits rapid neurological divergence. Cellular regeneration exceeds tissue decay by two hundred percent. If you are breathing the air on sector seven, you have ninety hours before synaptic latch..."',
    audioProfile: 'audio_story_011',
    choices: [
      { text: 'Record the broadcast frequency for lab analysis', setVariables: { pathogenSampleKnown: true, storyKnowledge: 2 }, xpReward: 40, nextNodeId: 'story_014' },
      { text: 'Switch off the receiver to keep your mind steady', setVariables: { mentalResolve: true }, xpReward: 25, nextNodeId: 'story_014' }
    ]
  },
  story_012: {
    id: 'story_012',
    act: 1,
    title: 'THE MINED PASS',
    speaker: 'NARRATION',
    text: 'Tripwires crisscross the gorge ahead. Warning markers indicate a military minefield designed to prevent anything from leaving the island interior. Several infected corpses lie detonated against the rocks.',
    audioProfile: 'audio_story_012',
    choices: [
      { text: 'Carefully disarm a perimeter mine for salvage', setVariables: { explosiveSalvaged: true }, xpReward: 45, nextNodeId: 'story_015' },
      { text: 'Circumvent the gorge along the coastal sea cliff', setVariables: { cliffBypass: true }, xpReward: 30, nextNodeId: 'story_015' }
    ]
  },
  story_013: {
    id: 'story_013',
    act: 1,
    title: 'THE STRANDED SURVIVOR',
    speaker: 'CORP. KAYA',
    text: 'A wounded soldier in splintered body armor clutches a jammed assault rifle inside a drainage pipe. "Don\'t shoot! I was part of the perimeter squad. They abandoned us when the primary dome collapsed."',
    audioProfile: 'audio_story_013',
    choices: [
      { text: 'Share your trauma field dressing to stabilize her', setVariables: { allyKayaSaved: true, moralCompass: 1 }, xpReward: 50, nextNodeId: 'story_016' },
      { text: 'Take her spare rifle magazine and press on alone', setVariables: { ruthlessSurvival: true }, xpReward: 30, nextNodeId: 'story_016' }
    ]
  },
  story_014: {
    id: 'story_014',
    act: 1,
    title: 'AIRDROP SMOKE',
    speaker: 'NARRATION',
    text: 'A plume of crimson smoke rises two kilometers inland. A high-altitude cargo plane had jettisoned a supply pallet before banking sharply away toward the international maritime border.',
    audioProfile: 'audio_story_014',
    choices: [
      { text: 'Make an immediate sprint for the airdrop crate', setVariables: { sprintAirdrop: true }, xpReward: 40, nextNodeId: 'story_017' },
      { text: 'Set an ambush nearby to eliminate infected prowling the smoke', setVariables: { ambushTactics: true }, xpReward: 40, nextNodeId: 'story_017' }
    ]
  },
  story_015: {
    id: 'story_015',
    act: 1,
    title: 'THE OVERGROWN BUNKER',
    speaker: 'NARRATION',
    text: 'Heavy blast doors stand ajar, draped in bioluminescent creeping vines. The air blowing from the shaft is cold and smells of ozone and formalin.',
    audioProfile: 'audio_story_015',
    choices: [
      { text: 'Descend the steel stairs into Sub-Level 1', setVariables: { enteredBunker: true }, xpReward: 35, nextNodeId: 'story_018' },
      { text: 'Secure the bunker entrance with barricades first', setVariables: { fortifiedEntrance: true }, xpReward: 30, nextNodeId: 'story_018' }
    ]
  },
  story_016: {
    id: 'story_016',
    act: 1,
    title: 'REVELATION OF THE CURE',
    speaker: 'RADIO OPERATOR VANCE',
    text: '"...the synthesis samples exist in the cryogenic lab beneath the central cooling tower. Dr. Thorne was manufacturing an antibody vector before communication severed. If that data is lost, there is no hope for the mainland."',
    audioProfile: 'audio_story_016',
    choices: [
      { text: 'Vow to retrieve the antibody data at all costs', setVariables: { questRetrieveCure: true, storyKnowledge: 3 }, xpReward: 45, nextNodeId: 'story_019' },
      { text: 'Prioritize personal extraction and island evacuation', setVariables: { questSelfPreservation: true }, xpReward: 35, nextNodeId: 'story_019' }
    ]
  },
  story_017: {
    id: 'story_017',
    act: 1,
    title: 'NIGHTFALL DESOLATION',
    speaker: 'NARRATION',
    text: 'The sun sinks entirely below the black ocean horizon. The shadows between the pines deepen to pitch black. All across the ridges, discordant shrieks begin to answer one another in terrifying harmony.',
    audioProfile: 'audio_story_017',
    choices: [
      { text: 'Activate your weapon flashlight and check ammunition', setVariables: { flashlightReady: true }, xpReward: 30, nextNodeId: 'story_020' },
      { text: 'Rely on natural moonlight to preserve your night vision', setVariables: { darkAdapted: true }, xpReward: 35, nextNodeId: 'story_020' }
    ]
  },
  story_018: {
    id: 'story_018',
    act: 1,
    title: 'SECURITY GATE DELTA',
    speaker: 'AUTOMATED INTERCOM',
    text: '"Alert: Biohazard quarantine protocol engaged. External egress locked. Auxiliary emergency power requires manual breaker realignment at Terminal B."',
    audioProfile: 'audio_story_018',
    choices: [
      { text: 'Bypass the breaker relay with your tactical wire cutters', setVariables: { circuitBypassed: true }, xpReward: 40, nextNodeId: 'story_020' },
      { text: 'Locate the chief engineer keycard in the guard booth', setVariables: { hasKeycard: true }, xpReward: 35, nextNodeId: 'story_020' }
    ]
  },
  story_019: {
    id: 'story_019',
    act: 1,
    title: 'BLOOD IN THE TRENCHES',
    speaker: 'NARRATION',
    text: 'You discover the remnants of the final defense line. Machine gun nests with thousands of spent brass casings testify to an overwhelming assault that occurred only days ago.',
    audioProfile: 'audio_story_019',
    choices: [
      { text: 'Collect heavy armor plates from the fallen infantry', setVariables: { reinforcedArmor: true }, xpReward: 40, nextNodeId: 'story_020' },
      { text: 'Inspect the barricade breach points to study horde movements', setVariables: { hordeTacticsAnalyzed: true }, xpReward: 35, nextNodeId: 'story_020' }
    ]
  },
  story_020: {
    id: 'story_020',
    act: 1,
    title: 'CROSSING THE THRESHOLD',
    speaker: 'NARRATION',
    text: 'The coastline is now far behind you. The road leads directly into the concrete belly of the research complex. Whatever answers—or nightmares—exist on this island, they await inside.',
    audioProfile: 'audio_story_020',
    choices: [
      { text: 'Breach the central laboratory bulkhead', setVariables: { act1Completed: true }, xpReward: 60, nextNodeId: 'story_021' },
      { text: 'Ascend the perimeter watchtower to survey the complex first', setVariables: { act1Completed: true, towerScouted: true }, xpReward: 55, nextNodeId: 'story_021' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // ACT II: THE RESEARCH FACILITY & UNDERGROUND (Nodes 21 to 40)
  // ═══════════════════════════════════════════════════════════════════
  story_021: {
    id: 'story_021',
    act: 2,
    title: 'FACILITY SECTOR ZERO',
    speaker: 'NARRATION',
    text: 'Flickering fluorescent tubes illuminate long corridors lined with shattered glass test chambers. Decaying bio-hazard warnings flicker across overhead digital monitors.',
    audioProfile: 'audio_story_021',
    choices: [
      { text: 'Access the security mainframe terminal', setVariables: { terminalHacked: true }, xpReward: 40, nextNodeId: 'story_022' },
      { text: 'Investigate the cryogenic containment storage room', setVariables: { cryoInvestigated: true }, xpReward: 35, nextNodeId: 'story_023' }
    ]
  },
  story_022: {
    id: 'story_022',
    act: 2,
    title: 'THE CHIMERA MANIFESTO',
    speaker: 'A.U.R.A. INTERFACE',
    text: '"PROJECT CHIMERA: Genetic hybridization of extremophile deep-sea fungi with human nervous tissue. Purpose: Rapid muscular regeneration in high-radiation battlefield environments. Containment breached on Day 14."',
    audioProfile: 'audio_story_022',
    choices: [
      { text: 'Download the complete experimental logs to your PDA', setVariables: { hasChimeraLogs: true, storyKnowledge: 4 }, xpReward: 50, nextNodeId: 'story_024' },
      { text: 'Purge the database to prevent weaponization', setVariables: { purgedData: true, moralCompass: 2 }, xpReward: 45, nextNodeId: 'story_024' }
    ]
  },
  story_023: {
    id: 'story_023',
    act: 2,
    title: 'FROZEN IN SPECIMEN JARS',
    speaker: 'NARRATION',
    text: 'Rows of liquid nitrogen cylinders hiss softly. Inside one shattered cylinder lies a hulking organism with mutated bone plates protruding from its torso—identical to the Behemoth zombies you faced outside.',
    audioProfile: 'audio_story_023',
    choices: [
      { text: 'Examine the anatomical weak spots on the mutated plates', setVariables: { bossWeakpointKnown: true }, xpReward: 50, nextNodeId: 'story_025' },
      { text: 'Seal the sub-zero vent to prevent toxic vapor leak', setVariables: { safeBreathing: true }, xpReward: 35, nextNodeId: 'story_025' }
    ]
  },
  story_024: {
    id: 'story_024',
    act: 2,
    title: 'DR. THORNE\'S DESK',
    speaker: 'RECORDED DICTAPHONE',
    text: '"If anyone finds this... we didn\'t create this virus to kill. We created it to cure neural degeneration. But the fungal spores rewrite host behavior, creating an aggressive swarm telepathy. The hive has a central node."',
    audioProfile: 'audio_story_024',
    choices: [
      { text: 'Take Dr. Thorne\'s master elevator override key', setVariables: { hasMasterKey: true }, xpReward: 45, nextNodeId: 'story_026' },
      { text: 'Pocket the experimental adrenaline injector', setVariables: { hasAdrenaline: true }, xpReward: 40, nextNodeId: 'story_026' }
    ]
  },
  story_025: {
    id: 'story_025',
    act: 2,
    title: 'VENTILATION SHADOWS',
    speaker: 'NARRATION',
    text: 'A rhythmic metallic scratching echoes from the ceiling ducts above. Something agile and monstrous is stalking your heat signature through the facility infrastructure.',
    audioProfile: 'audio_story_025',
    choices: [
      { text: 'Aim your shotgun at the rattling ceiling grate', setVariables: { alertReflex: true }, xpReward: 40, nextNodeId: 'story_027' },
      { text: 'Toss an incendiary flare down the corridor to flush it out', setVariables: { flareDistraction: true }, xpReward: 45, nextNodeId: 'story_027' }
    ]
  },
  story_026: {
    id: 'story_026',
    act: 2,
    title: 'POWER RELAY MALFUNCTION',
    speaker: 'AUTOMATED INTERCOM',
    text: '"Warning: Main reactor coolant pump offline. Power will fail in five minutes unless manual water intake valves are opened in Sub-Level 3."',
    audioProfile: 'audio_story_026',
    choices: [
      { text: 'Reroute auxiliary power to maintain security blast doors', setVariables: { blastDoorsHeld: true }, xpReward: 40, nextNodeId: 'story_028' },
      { text: 'Divert power to the weapon synthesis armory', setVariables: { armoryPowered: true }, xpReward: 45, nextNodeId: 'story_028' }
    ]
  },
  story_027: {
    id: 'story_027',
    act: 2,
    title: 'THE HYDROPONICS OVERGROWTH',
    speaker: 'NARRATION',
    text: 'The facility’s indoor agricultural bays are choked with pulsating fungal blossoms. Spores drift through the warm, damp air like glowing snowflakes, fluorescing faintly in violet hues.',
    audioProfile: 'audio_story_027',
    choices: [
      { text: 'Fasten your filtration mask and collect spore samples', setVariables: { sporeSample: true, storyKnowledge: 5 }, xpReward: 45, nextNodeId: 'story_029' },
      { text: 'Torch the root clusters with a thermal charge', setVariables: { burnedFungus: true }, xpReward: 45, nextNodeId: 'story_029' }
    ]
  },
  story_028: {
    id: 'story_028',
    act: 2,
    title: 'ARMORY VAULT 04',
    speaker: 'NARRATION',
    text: 'Heavy steel racks hold military-grade ordnance. A digital display confirms experimental munitions formulated with silver-iodide coatings designed to rupture infected cell membranes.',
    audioProfile: 'audio_story_028',
    choices: [
      { text: 'Equip the advanced tactical ammunition crates', setVariables: { enhancedAmmo: true }, xpReward: 50, nextNodeId: 'story_030' },
      { text: 'Inspect the military terminal for mainland contact logs', setVariables: { contactLogsRead: true }, xpReward: 40, nextNodeId: 'story_030' }
    ]
  },
  story_029: {
    id: 'story_029',
    act: 2,
    title: 'THE HIVE MIND EMERGENCE',
    speaker: 'UNKNOWN BROADCAST',
    text: 'A synthesized chorus whispers through your earpiece: "...do you hear us, survivor? Your pain is only cellular resistance. In the collective, there is no fear... no death... only continuation..."',
    audioProfile: 'audio_story_029',
    choices: [
      { text: 'Rip the earpiece out and fire into the speaker array', setVariables: { mentalFortitude: true }, xpReward: 40, nextNodeId: 'story_031' },
      { text: 'Track the transmission origin to pinpoint the queen node', setVariables: { queenLocationKnown: true }, xpReward: 50, nextNodeId: 'story_031' }
    ]
  },
  story_030: {
    id: 'story_030',
    act: 2,
    title: 'THE INCINERATOR SHAFT',
    speaker: 'NARRATION',
    text: 'A deep subterranean shaft drops into darkness. The walls are scorched by extreme heat. Below, the red emergency beacon of a medical isolation elevator flashes rhythmically.',
    audioProfile: 'audio_story_030',
    choices: [
      { text: 'Rappel down the emergency elevator cable', setVariables: { cableDescent: true }, xpReward: 45, nextNodeId: 'story_032' },
      { text: 'Fight through the spiral staircase guarded by sprinters', setVariables: { stairsCleared: true }, xpReward: 50, nextNodeId: 'story_032' }
    ]
  },
  story_031: {
    id: 'story_031',
    act: 2,
    title: 'DR. THORNE\'S LAB',
    speaker: 'DR. ARIS THORNE',
    text: 'Behind reinforced ballistic glass stands Dr. Thorne himself, coughing blood into a handkerchief. "You made it... I thought everyone on the surface was dead. The antibody is in the centrifuge, but the centrifuge requires three cooling rods to disengage."',
    audioProfile: 'audio_story_031',
    choices: [
      { text: 'Demand explanations about who funded the research', setVariables: { interrogatedDoctor: true }, xpReward: 40, nextNodeId: 'story_033' },
      { text: 'Immediately start collecting the cryogenic cooling rods', setVariables: { coolingRodsQuest: true }, xpReward: 50, nextNodeId: 'story_033' }
    ]
  },
  story_032: {
    id: 'story_032',
    act: 2,
    title: 'SUB-LEVEL FLOODING',
    speaker: 'NARRATION',
    text: 'Cold ocean water pours into the corridor through cracked sea walls. The current is knee-deep and rising fast. Several floating bodies begin to twitch as the cold water stimulates nerve synapses.',
    audioProfile: 'audio_story_032',
    choices: [
      { text: 'Wade quickly to the emergency drainage pumps', setVariables: { drainageActivated: true }, xpReward: 45, nextNodeId: 'story_034' },
      { text: 'Climb onto overhead industrial conduit pipes', setVariables: { pipeTraversal: true }, xpReward: 45, nextNodeId: 'story_034' }
    ]
  },
  story_033: {
    id: 'story_033',
    act: 2,
    title: 'THE ANTIBODY CENTRIFUGE',
    speaker: 'A.U.R.A. INTERFACE',
    text: '"Centrifuge stabilization at 94%. Warning: Bio-magnetic lock failure in adjacent holding pens. Specimen Prime containment breach in progress."',
    audioProfile: 'audio_story_033',
    choices: [
      { text: 'Hold the defensive line until centrifuge completes cycle', setVariables: { cureSecured: true, storyKnowledge: 6 }, xpReward: 60, nextNodeId: 'story_035' },
      { text: 'Eject the incomplete vial and trigger emergency evacuation', setVariables: { partialCure: true }, xpReward: 40, nextNodeId: 'story_035' }
    ]
  },
  story_034: {
    id: 'story_034',
    act: 2,
    title: 'SCREAMS IN THE DARK',
    speaker: 'NARRATION',
    text: 'A sudden power surge plunges the lower complex into total darkness. In the blackness, dozens of pairs of glowing eyes open simultaneously. The infected have gathered in the shadows.',
    audioProfile: 'audio_story_034',
    choices: [
      { text: 'Deploy a tactical road flare and spin with your sidearm', setVariables: { tacticalFlareUsed: true }, xpReward: 45, nextNodeId: 'story_036' },
      { text: 'Back against the bulkhead and fire in short controlled bursts', setVariables: { disciplinedFire: true }, xpReward: 50, nextNodeId: 'story_036' }
    ]
  },
  story_035: {
    id: 'story_035',
    act: 2,
    title: 'DR. THORNE\'S SACRIFICE',
    speaker: 'DR. ARIS THORNE',
    text: '"I\'m infected... I was bitten three hours ago. The antibody will save you, but it cannot reverse full cellular metamorphosis. Take the vial, climb to the lighthouse beacon, and signal the rescue carrier before midnight!"',
    audioProfile: 'audio_story_035',
    choices: [
      { text: 'Hand him his sidearm so he can seal the bulkhead behind you', setVariables: { thorneHonored: true, moralCompass: 3 }, xpReward: 55, nextNodeId: 'story_037' },
      { text: 'Attempt to inject him with the experimental dose', setVariables: { injectedThorne: true }, xpReward: 45, nextNodeId: 'story_037' }
    ]
  },
  story_036: {
    id: 'story_036',
    act: 2,
    title: 'THE INDUSTRIAL CRANE',
    speaker: 'NARRATION',
    text: 'An enormous gantry crane spans the underground canal connecting the complex to the ocean. The control cabin sits twenty meters above, holding the master release switch for the sea gates.',
    audioProfile: 'audio_story_036',
    choices: [
      { text: 'Climb the ladder to lower the bridge platform', setVariables: { bridgeLowered: true }, xpReward: 45, nextNodeId: 'story_038' },
      { text: 'Hotwire the winch motor from the ground terminal', setVariables: { winchHotwired: true }, xpReward: 40, nextNodeId: 'story_038' }
    ]
  },
  story_037: {
    id: 'story_037',
    act: 2,
    title: 'THE SURFACE ELEVATOR',
    speaker: 'NARRATION',
    text: 'Heavy hydraulic gears groan into motion. The industrial freight elevator begins its slow climb toward the upper mountain plateau. Through the mesh cage, you can see hundreds of infected swarming the lower gates.',
    audioProfile: 'audio_story_037',
    choices: [
      { text: 'Snipe the climbing infected off the elevator guide rails', setVariables: { sniperDefense: true }, xpReward: 50, nextNodeId: 'story_039' },
      { text: 'Drop hand grenades down the elevator shaft', setVariables: { shaftExplosion: true }, xpReward: 50, nextNodeId: 'story_039' }
    ]
  },
  story_038: {
    id: 'story_038',
    act: 2,
    title: 'THE GEOTHERMAL VENT',
    speaker: 'NARRATION',
    text: 'Superheated steam erupts from fractured bedrock fissures. The volcanic heat under the island is destabilizing the foundation of the entire complex.',
    audioProfile: 'audio_story_038',
    choices: [
      { text: 'Sprint through the steam vents while timing the valve bursts', setVariables: { agilityTrained: true }, xpReward: 45, nextNodeId: 'story_039' },
      { text: 'Shut down the pressure relief valve to clear a safer route', setVariables: { steamVented: true }, xpReward: 40, nextNodeId: 'story_039' }
    ]
  },
  story_039: {
    id: 'story_039',
    act: 2,
    title: 'BREACH TO THE NIGHT AIR',
    speaker: 'NARRATION',
    text: 'The heavy steel blast hatches burst open into cold night air and torrential rain. You have escaped the subterranean labyrinth, but lightning flashes reveal the mountain ridges swarming with movement.',
    audioProfile: 'audio_story_039',
    choices: [
      { text: 'Take shelter in the old military radar station', setVariables: { radarShelter: true }, xpReward: 45, nextNodeId: 'story_040' },
      { text: 'Sprint directly up the steep stone path toward the lighthouse', setVariables: { directLighthouseRun: true }, xpReward: 50, nextNodeId: 'story_040' }
    ]
  },
  story_040: {
    id: 'story_040',
    act: 2,
    title: 'ACT II RESOLUTION: THE LIGHTHOUSE AWAITS',
    speaker: 'RADIO OPERATOR VANCE',
    text: '"Survivor! I have your radar ping! The carrier fleet has dispatched an extraction helicopter. ETA: fifteen minutes. Ignite the lighthouse beam so the pilots can navigate through the hurricane winds!"',
    audioProfile: 'audio_story_040',
    choices: [
      { text: 'Confirm extraction coordinates and check final munitions', setVariables: { act2Completed: true }, xpReward: 70, nextNodeId: 'story_041' },
      { text: 'Request orbital bombardment on the research complex', setVariables: { act2Completed: true, orbitalStrikeRequested: true }, xpReward: 70, nextNodeId: 'story_041' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // ACT III: THE BEACON, THE TRUTH & EXTRACTION (Nodes 41 to 60)
  // ═══════════════════════════════════════════════════════════════════
  story_041: {
    id: 'story_041',
    act: 3,
    title: 'THE WINDWARD RIDGE',
    speaker: 'NARRATION',
    text: 'Gale-force ocean winds whip rain across your face. Ahead, on the tallest crag of the island, stands the historic stone lighthouse, its massive glass lens dark against the storm.',
    audioProfile: 'audio_story_041',
    choices: [
      { text: 'Advance through the switchback trail using rifle scope', setVariables: { scoutSwitchbacks: true }, xpReward: 45, nextNodeId: 'story_042' },
      { text: 'Cut straight through the pine thicket to save time', setVariables: { fastPathTaken: true }, xpReward: 50, nextNodeId: 'story_042' }
    ]
  },
  story_042: {
    id: 'story_042',
    act: 3,
    title: 'THE FALLEN CHOPPER',
    speaker: 'NARRATION',
    text: 'A Blackhawk helicopter rests on its side among the rocks, rotors snapped like matchsticks. The cockpit glass is painted with claw marks, but the cabin holds an intact heavy weapon crate.',
    audioProfile: 'audio_story_042',
    choices: [
      { text: 'Loot high-explosive ordnance and tactical vest', setVariables: { highExplosives: true }, xpReward: 55, nextNodeId: 'story_043' },
      { text: 'Check the pilot\'s flight tablet for extraction frequency', setVariables: { extractionFreqVerified: true }, xpReward: 45, nextNodeId: 'story_043' }
    ]
  },
  story_043: {
    id: 'story_043',
    act: 3,
    title: 'THE BEHEMOTH\'S ROAR',
    speaker: 'NARRATION',
    text: 'The earth shakes. A roar that sounds like bending steel reverberates up the mountain. Trees crash to the ground as the Titan of the infected horde breaks through the perimeter.',
    audioProfile: 'audio_story_043',
    choices: [
      { text: 'Load armor-piercing rounds into your rifle', setVariables: { apRoundsEquipped: true }, xpReward: 50, nextNodeId: 'story_044' },
      { text: 'Plant proximity detonators along the choke point', setVariables: { trapsPlanted: true }, xpReward: 55, nextNodeId: 'story_044' }
    ]
  },
  story_044: {
    id: 'story_044',
    act: 3,
    title: 'THE LIGHTHOUSE COURTYARD',
    speaker: 'NARRATION',
    text: 'Iron gates stand smashed open. The courtyard is littered with spent flares, broken sandbags, and overturned emergency vehicles. The generator room door is bolted from the outside.',
    audioProfile: 'audio_story_044',
    choices: [
      { text: 'Kick the generator room door open and inspect fuel reserves', setVariables: { generatorFuelChecked: true }, xpReward: 45, nextNodeId: 'story_045' },
      { text: 'Set defensive claymores facing the courtyard entrance', setVariables: { perimeterClaymores: true }, xpReward: 50, nextNodeId: 'story_045' }
    ]
  },
  story_045: {
    id: 'story_045',
    act: 3,
    title: 'DIESEL IN THE DARK',
    speaker: 'NARRATION',
    text: 'The massive 12-cylinder diesel engine is cold. Hand-written instructions on the manifold detail the manual priming sequence: glow plugs, compressed air release, ignition crank.',
    audioProfile: 'audio_story_045',
    choices: [
      { text: 'Follow the precise 3-step ignition procedure', setVariables: { generatorRunning: true }, xpReward: 55, nextNodeId: 'story_046' },
      { text: 'Bypass the glow plugs with an emergency starter charge', setVariables: { quickStartUsed: true }, xpReward: 45, nextNodeId: 'story_046' }
    ]
  },
  story_046: {
    id: 'story_046',
    act: 3,
    title: 'THE SPARK OF POWER',
    speaker: 'NARRATION',
    text: 'With a deafening mechanical thud and a burst of black exhaust, the generator roars to life! Overhead cables hum with high-voltage electricity as floodlights illuminate the bloody courtyard.',
    audioProfile: 'audio_story_046',
    choices: [
      { text: 'Sprint up the 180 spiral stairs to the lighthouse lantern room', setVariables: { ascendingTower: true }, xpReward: 50, nextNodeId: 'story_047' },
      { text: 'Lock the heavy reinforced courtyard gates first', setVariables: { gatesBarred: true }, xpReward: 50, nextNodeId: 'story_047' }
    ]
  },
  story_047: {
    id: 'story_047',
    act: 3,
    title: 'THE LANTERN ROOM',
    speaker: 'NARRATION',
    text: 'Inside the glass dome of the lighthouse, the magnificent Fresnel lens sits pristine. The primary arc-lamp capacitor is humming, awaiting final breaker contact.',
    audioProfile: 'audio_story_047',
    choices: [
      { text: 'Throw the primary breaker to ignite the beam', setVariables: { beamIgnited: true }, xpReward: 60, nextNodeId: 'story_048' },
      { text: 'Sweep the glass dome for incoming sniper threats', setVariables: { areaSecured: true }, xpReward: 45, nextNodeId: 'story_048' }
    ]
  },
  story_048: {
    id: 'story_048',
    act: 3,
    title: 'A PIERCING BEAM IN THE STORM',
    speaker: 'NARRATION',
    text: 'A million candlepower of brilliant white light slices through the rain and out into the Pacific Ocean! The beam sweeps across the foaming waves and cuts through forty miles of black cloud.',
    audioProfile: 'audio_story_048',
    choices: [
      { text: 'Signal SOS toward the western maritime horizon', setVariables: { sosBroadcast: true }, xpReward: 55, nextNodeId: 'story_049' },
      { text: 'Look out the balcony to locate the incoming helicopter', setVariables: { scanningAir: true }, xpReward: 50, nextNodeId: 'story_049' }
    ]
  },
  story_049: {
    id: 'story_049',
    act: 3,
    title: 'EXTRACTION CHOPPER CONTACT',
    speaker: 'PILOT CALLSIGN PEGASUS',
    text: '"Lighthouse survivor, this is Pegasus-Two! We have visual on your beacon! Winds are extreme. We are descending toward the helipad on the eastern cliff. You have four minutes before fuel bingo!"',
    audioProfile: 'audio_story_049',
    choices: [
      { text: 'Pop a green smoke flare on the lighthouse balcony', setVariables: { flareSignaled: true }, xpReward: 55, nextNodeId: 'story_050' },
      { text: 'Transmit wind speed and barometric pressure data to the pilot', setVariables: { flightDataSent: true }, xpReward: 50, nextNodeId: 'story_050' }
    ]
  },
  story_050: {
    id: 'story_050',
    act: 3,
    title: 'THE HORDE ASCENDS',
    speaker: 'NARRATION',
    text: 'The lighthouse beam has caught the attention of every infected creature on the island. A terrifying sea of pale, sprinting bodies surges up the hill, clawing up the stone tower walls.',
    audioProfile: 'audio_story_050',
    choices: [
      { text: 'Use the high ground balcony to snipe the fastest sprinters', setVariables: { sniperDefenseSuccess: true }, xpReward: 60, nextNodeId: 'story_051' },
      { text: 'Rappel down the external service cable to the helipad trail', setVariables: { fastDescentMade: true }, xpReward: 60, nextNodeId: 'story_051' }
    ]
  },
  story_051: {
    id: 'story_051',
    act: 3,
    title: 'THE FINAL STANDOFF CHOKEPOINT',
    speaker: 'NARRATION',
    text: 'The stone walkway leading to the cliff helipad narrows to three meters wide. On one side is a sheer three-hundred-foot drop into the crashing waves; on the other, the burning wreckage of the radar tower.',
    audioProfile: 'audio_story_051',
    choices: [
      { text: 'Dig in behind the sandbags with your assault rifle', setVariables: { heldChokepoint: true }, xpReward: 65, nextNodeId: 'story_052' },
      { text: 'Throw all remaining fragmentation grenades into the horde', setVariables: { explosiveClearing: true }, xpReward: 65, nextNodeId: 'story_052' }
    ]
  },
  story_052: {
    id: 'story_052',
    act: 3,
    title: 'THE TITAN BREACHES THE RIDGE',
    speaker: 'NARRATION',
    text: 'The Boss Zombie crashes through the iron fence. Four meters of grotesque muscle, reinforced with fused calcified bone, blocks the walkway between you and the landing pad.',
    audioProfile: 'audio_story_052',
    choices: [
      { text: 'Target the glowing spinal mutation exposed on its shoulder', setVariables: { targetedBossWeakpoint: true }, xpReward: 75, nextNodeId: 'story_053' },
      { text: 'Lure the behemoth onto the cracked cliff overhang', setVariables: { cliffLureTactic: true }, xpReward: 75, nextNodeId: 'story_053' }
    ]
  },
  story_053: {
    id: 'story_053',
    act: 3,
    title: 'THE TITAN FALLS',
    speaker: 'NARRATION',
    text: 'With a deafening shudder, the behemoth staggers backward. The weakened cliff edge shatters beneath its massive weight. Roaring in fury, the monster plunges into the raging sea below!',
    audioProfile: 'audio_story_053',
    choices: [
      { text: 'Sprint the final hundred meters to the touchdown pad', setVariables: { sprintHelipad: true }, xpReward: 70, nextNodeId: 'story_054' },
      { text: 'Turn to cover the retreat of any other surviving personnel', setVariables: { selflessHero: true, moralCompass: 4 }, xpReward: 75, nextNodeId: 'story_054' }
    ]
  },
  story_054: {
    id: 'story_054',
    act: 3,
    title: 'ROTOR WASH',
    speaker: 'NARRATION',
    text: 'The heavy downdraft of twin turbine rotors flattens the coastal weeds. The rescue chopper’s landing skids touch down on the concrete pad. Crew chief screams over the engine roar: "GET IN! GET IN NOW!"',
    audioProfile: 'audio_story_054',
    choices: [
      { text: 'Leap aboard and secure the cabin door', setVariables: { boardedChopper: true }, xpReward: 80, nextNodeId: 'story_055' },
      { text: 'Man the mounted minigun to suppress pursuers', setVariables: { mannedGun: true }, xpReward: 85, nextNodeId: 'story_055' }
    ]
  },
  story_055: {
    id: 'story_055',
    act: 3,
    title: 'THE PURSUIT AT LIFT-OFF',
    speaker: 'PILOT CALLSIGN PEGASUS',
    text: '"Collective up! We are taking hits on the tail rotor! Weight limit exceeded! Hold on!" The helicopter lifts five feet off the ground as claws scrape against the landing gear.',
    audioProfile: 'audio_story_055',
    choices: [
      { text: 'Kick the clinging infected off the skid into the abyss', setVariables: { skidsCleared: true }, xpReward: 70, nextNodeId: 'story_056' },
      { text: 'Jettison auxiliary cargo crates to regain lift', setVariables: { cargoJettisoned: true }, xpReward: 70, nextNodeId: 'story_056' }
    ]
  },
  story_056: {
    id: 'story_056',
    act: 3,
    title: 'ASCENT INTO THE CLOUDS',
    speaker: 'NARRATION',
    text: 'The helicopter punches through the low storm clouds. Below, the island shrinks into a dark jewel encircled by white surf. Across the ridgelines, millions of sparks flicker in the rain.',
    audioProfile: 'audio_story_056',
    choices: [
      { text: 'Hand the antibody vial to the medical officer on board', setVariables: { cureDelivered: true }, xpReward: 90, nextNodeId: 'story_057' },
      { text: 'Keep the antibody secured in your own tactical pouch', setVariables: { cureHeldPersonal: true }, xpReward: 80, nextNodeId: 'story_057' }
    ]
  },
  story_057: {
    id: 'story_057',
    act: 3,
    title: 'TRANSMISSION TO COMMAND',
    speaker: 'RADIO OPERATOR VANCE',
    text: '"Carrier Strike Group Seven, this is Vance. We have the survivor aboard. Confirmation: Dr. Thorne\'s genetic vector has been retrieved intact. Quarantine protocols held."',
    audioProfile: 'audio_story_057',
    choices: [
      { text: 'Exhale deeply and accept a hot ration drink', setVariables: { restEarned: true }, xpReward: 50, nextNodeId: 'story_058' },
      { text: 'Look back through the open door at the receding lighthouse', setVariables: { solemnContemplation: true }, xpReward: 50, nextNodeId: 'story_058' }
    ]
  },
  story_058: {
    id: 'story_058',
    act: 3,
    title: 'CLEANSING DAWN',
    speaker: 'NARRATION',
    text: 'To the east, over the infinite expanse of the Pacific, the first golden rays of dawn break through the typhoon clouds. The nightmare on the island is finished, but its echoes will never leave you.',
    audioProfile: 'audio_story_058',
    choices: [
      { text: 'Review your mission dossier and survivor record', setVariables: { reviewDossier: true }, xpReward: 50, nextNodeId: 'story_059' },
      { text: 'Close your eyes and listen to the steady thrum of the engine', setVariables: { peacefulRest: true }, xpReward: 50, nextNodeId: 'story_059' }
    ]
  },
  story_059: {
    id: 'story_059',
    act: 3,
    title: 'THE SURVIVOR\'S ODYSSEY',
    speaker: 'NARRATION',
    text: 'You arrived stranded, outgunned, and facing an impossible swarm. Through tactical precision, relentless bravery, and split-second decisions, you survived AFTERTRACE.',
    audioProfile: 'audio_story_059',
    choices: [
      { text: 'Access your final personalized campaign debriefing', setVariables: { epilogueUnlocked: true }, xpReward: 100, nextNodeId: 'story_060' }
    ]
  },
  story_060: {
    id: 'story_060',
    act: 3,
    title: 'EPILOGUE: THE NEW DAWN',
    speaker: 'AFTERTRACE ARCHIVE',
    text: 'Your journey through Sector Four has concluded. The mainland will receive the synthesis, humanity will endure, and your name is entered into the survivor archives as an unbroken legend of the island.',
    audioProfile: 'audio_story_060',
    choices: [
      { text: 'Commence Next Survival Run with Saved Progress', setVariables: { complete: true }, xpReward: 150, nextNodeId: null }
    ]
  }
};
