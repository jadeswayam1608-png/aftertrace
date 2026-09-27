// src/data/storyEndings.js - Personalized & Contextual Branching Endings for AFTERTRACE
// Selects a candidate ending based on visited story tags, state flags, and run achievements.
// Generates a fully personalized epilogue text that references actual events experienced.

export const STORY_ENDINGS = [
  {
    id: "ending_rescue_extraction",
    title: "EXTRACTION CONFIRMED: THE RESCUE HELO",
    archetype: "Airborne Extraction",
    tags: ["rescue", "military", "radio", "hope"],
    requiredState: { minWaves: 3 },
    probabilityWeight: 10,
    audioProfile: "helicopter_rotor",
    generateEpilogue: (runData) => {
      const { startingStory, state, stats, level, totalXP, wavesCleared } = runData;
      const lines = [];

      lines.push(`It began with ${startingStory.title.toUpperCase()}: ${startingStory.shortDescription}`);

      if (state.radioContact) {
        lines.push("Your desperate radio transmissions breached the military blockade, maintaining contact with offshore search and rescue aircraft.");
      }
      if (state.undergroundRouteFound) {
        lines.push("By navigating the subterranean conduits beneath the island, you bypassed deadly perimeter minefields and closed the distance to the extraction zone.");
      }
      if (state.powerRestored) {
        lines.push("Restoring auxiliary high-voltage power to the sector ignited perimeter floodlights, giving rescue pilots an undeniable visual waypoint.");
      }
      if (state.cureSecured) {
        lines.push("Tucked inside your tactical chest rig is the sealed titanium vial containing the genetic antibody—the definitive key to halting the pandemic on the mainland.");
      }
      if (state.allyKayaSaved || state.survivorTrust >= 2) {
        lines.push(`You did not escape alone. Thanks to your tactical leadership, survivor coalition members boarded the extraction ramp alongside you.`);
      }

      lines.push(`With ${stats.kills || 0} hostiles neutralized across ${wavesCleared} ferocious waves, your boots lifted off the island as the helo climbed toward the morning sun.`);
      lines.push("Sector 4 is left in smoldering ruin, but you survived—and carried hope back to the world.");

      return lines.join(" ");
    }
  },
  {
    id: "ending_scientific_discovery",
    title: "THE TRUTH UNLOCKED: THE CURE ARCHIVE",
    archetype: "Truth Seeker",
    tags: ["science", "medical", "intel", "quarantine"],
    requiredState: { minWaves: 3 },
    probabilityWeight: 8,
    audioProfile: "cryo_lab",
    generateEpilogue: (runData) => {
      const { startingStory, state, stats, level, totalXP, wavesCleared } = runData;
      const lines = [];

      lines.push(`Your journey initiated from ${startingStory.title.toUpperCase()}.`);

      if (state.hospitalVisited) {
        lines.push("Penetrating the bio-containment seals of St. Jude's sub-level cryo-vaults uncovered the dark secrets of Project Aegis.");
      }
      if (state.majorClueFound) {
        lines.push("Classified dictaphone logs confirmed that the viral contagion was engineered rather than natural, exposing the high-level military conspiracy.");
      }
      if (state.powerRestored) {
        lines.push("With electrical generators brought back online, you copied terabytes of genetic sequencing data onto encrypted solid-state drives.");
      }
      if (state.cureSecured || state.partialCure) {
        lines.push("The synthesized antibody matrix in your possession proves the pathogen can be arrested before irreversible neural collapse occurs.");
      }

      lines.push(`Reaching Level ${level} with ${totalXP} XP and eliminating ${stats.kills || 0} infected, you secured the scientific truth that will save millions.`);
      lines.push("The island was a crucible, but your survival ensured the cure will reach humanity.");

      return lines.join(" ");
    }
  },
  {
    id: "ending_coastal_breakout",
    title: "MARITIME EVACUATION: THE SEAWARD VOYAGE",
    archetype: "Seaward Navigator",
    tags: ["coastal", "escape", "convoy", "beacon"],
    requiredState: { minWaves: 3 },
    probabilityWeight: 8,
    audioProfile: "coastal_surf",
    generateEpilogue: (runData) => {
      const { startingStory, state, stats, level, totalXP, wavesCleared } = runData;
      const lines = [];

      lines.push(`Setting out from ${startingStory.title.toUpperCase()}, you fought toward the rocky shores of Sector 4.`);

      if (state.convoySeen) {
        lines.push("Salvaging heavy marine diesel fuel from the destroyed convoy route gave you the exact propellant needed to fire the harbor cutter's engines.");
      }
      if (state.undergroundRouteFound) {
        lines.push("Emerging from the seaside drainage conduits, you reached the boat dock without alerting the massive horde roaming the highways.");
      }
      if (state.beaconLit) {
        lines.push("The blinding five-million candlepower beam of the summit lighthouse pierced the offshore fog banks, illuminating a safe channel through the shoals.");
      }

      lines.push(`After surviving ${wavesCleared} intense zombie onslaughts and scoring ${stats.headshots || 0} precision headshots, the ship's twin screws churned the ocean.`);
      lines.push("As the island recedes into salt mist and morning shadows, you look forward toward uninfected horizons.");

      return lines.join(" ");
    }
  },
  {
    id: "ending_fortified_sanctuary",
    title: "HAVEN RECLAIMED: THE PERIMETER REDOUBT",
    archetype: "Guardian of the Safe Zone",
    tags: ["safehouse", "community", "defense", "survivor"],
    requiredState: { minWaves: 3 },
    probabilityWeight: 8,
    audioProfile: "dawn_triumph",
    generateEpilogue: (runData) => {
      const { startingStory, state, stats, level, totalXP, wavesCleared } = runData;
      const lines = [];

      lines.push(`From the moment you chose ${startingStory.title.toUpperCase()}, you resolved not merely to escape, but to build an enduring bastion.`);

      if (state.safehouseEstablished) {
        lines.push("You fortified reinforced blast doors, barricaded windows, and established continuous perimeter patrols.");
      }
      if (state.powerRestored) {
        lines.push("Substation power electrified perimeter fences, incinerating charging infected before they could breach the inner courtyards.");
      }
      if (state.survivorTrust >= 2) {
        lines.push("Scattered survivors rallied around your combat leadership, forming a disciplined coalition capable of defending their home.");
      }

      lines.push(`With ${stats.kills || 0} confirmed kills and ${totalXP} total experience, your redoubt stands impregnable.`);
      lines.push("While the world outside struggles in darkness, the light of your haven continues to burn strong.");

      return lines.join(" ");
    }
  },
  {
    id: "ending_lone_survivor_dawn",
    title: "THE LONE VIGIL: SURVIVOR OF THE ABYSS",
    archetype: "Lone Wolf Survivor",
    tags: ["survival", "tactical", "mystery"],
    requiredState: { minWaves: 1 },
    probabilityWeight: 7,
    audioProfile: "dawn_triumph",
    generateEpilogue: (runData) => {
      const { startingStory, state, stats, level, totalXP, wavesCleared } = runData;
      const lines = [];

      lines.push(`Your ordeal started with ${startingStory.title.toUpperCase()}.`);
      lines.push(`Through sheer grit, tactical marksmanship, and split-second reflexes, you stood alone against ${stats.kills || 0} zombies.`);

      if (state.undergroundRouteFound) {
        lines.push("You mapped the hidden underbelly of the island, staying one step ahead of relentless mutant pursuers.");
      }
      if (state.radioContact) {
        lines.push("Though you received radio whispers from afar, you relied on your own rifle and instinct to see the night through.");
      }

      lines.push(`Surviving all ${wavesCleared} waves and reaching Level ${level}, the sunrise warms your battered leather jacket.`);
      lines.push("You reload your sidearm, shoulder your assault pack, and step toward the horizon. You conquered the impossible.");

      return lines.join(" ");
    }
  }
];
