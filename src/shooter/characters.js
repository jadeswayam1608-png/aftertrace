// src/shooter/characters.js - Playable Survivors: visual styles, traits, and cosmetics

export const CHARACTERS = [
  {
    id: 'maya',
    name: 'Maya',
    title: 'Tactical Scout',
    role: 'Survivor Scout',
    trait: 'Balanced Operator',
    traitDesc: 'Reliable all-around combat readiness and agility.',
    speedMultiplier: 1.0,
    healthBonus: 0,
    damageResistance: 1.0,
    reloadSpeedMultiplier: 1.0,
    spreadMultiplier: 1.0,
    cosmetics: {
      skinColor: 0xD8B48D,
      hairColor: 0x1A1412,
      hairType: 'ponytail',
      hoodieColor: 0x8C8880, // grey survivor hoodie
      vestColor: 0x3D5C42, // forest tactical green
      pantsColor: 0x383F35, // olive cargo pants
      gearColor: 0x22252A,
      bootColor: 0x1A1A1A,
      hasBackpack: true,
      hasHolster: true
    }
  },
  {
    id: 'kael',
    name: 'Kael',
    title: 'Spec-Ops Infiltrator',
    role: 'Night Infiltrator',
    trait: 'Swift Stride (+6% Speed)',
    traitDesc: 'Lightweight urban night gear allowing faster sprint and flanking.',
    speedMultiplier: 1.06,
    healthBonus: 0,
    damageResistance: 1.0,
    reloadSpeedMultiplier: 1.0,
    spreadMultiplier: 1.0,
    cosmetics: {
      skinColor: 0xCFAC88,
      hairColor: 0x111111,
      hairType: 'helmet_visor', // tactical helmet with glowing cyan night-vision visor
      hoodieColor: 0x1B1E23, // midnight dark urban
      vestColor: 0x16181C, // dark Kevlar
      pantsColor: 0x23272E, // dark tactical camo
      gearColor: 0x0E1012,
      bootColor: 0x121417,
      hasBackpack: true,
      hasHolster: true
    }
  },
  {
    id: 'elena',
    name: 'Elena',
    title: 'Desert Commando',
    role: 'Desert Specialist',
    trait: 'Quick Reload (-20% Reload Time)',
    traitDesc: 'Fast magazine manipulation honed in harsh arid warfare.',
    speedMultiplier: 1.0,
    healthBonus: 0,
    damageResistance: 1.0,
    reloadSpeedMultiplier: 0.8,
    spreadMultiplier: 1.0,
    cosmetics: {
      skinColor: 0xE2BA92,
      hairColor: 0x3B2519,
      hairType: 'braid_scarf', // desert shemagh scarf & braid
      hoodieColor: 0xC8B293, // desert sand
      vestColor: 0x8C7456, // tan leather vest
      pantsColor: 0x6E5C45, // desert khakis
      gearColor: 0x382E22,
      bootColor: 0x4D3F30,
      hasBackpack: true,
      hasHolster: true
    }
  },
  {
    id: 'marcus',
    name: 'Dr. Marcus',
    title: 'Field Medic',
    role: 'Combat Support',
    trait: 'Vital Reserve (+25 Max HP)',
    traitDesc: 'Advanced medical conditioning and self-stabilizing stamina.',
    speedMultiplier: 0.98,
    healthBonus: 25,
    damageResistance: 1.0,
    reloadSpeedMultiplier: 1.0,
    spreadMultiplier: 1.0,
    cosmetics: {
      skinColor: 0xC59E7B,
      hairColor: 0x4A4A4A, // salt-and-pepper short hair
      hairType: 'medic_cap',
      hoodieColor: 0x3A4A58, // slate blue field jacket
      vestColor: 0x2A3540,
      pantsColor: 0x2D3742,
      gearColor: 0x1B222A,
      bootColor: 0x181818,
      hasBackpack: true,
      hasHolster: true,
      hasMedicPatch: true // red cross patch
    }
  },
  {
    id: 'jax',
    name: 'Jax',
    title: 'Heavy Vanguard',
    role: 'Frontline Enforcer',
    trait: 'Reinforced Plates (-15% Damage Taken)',
    traitDesc: 'Heavy ballistic chest plates absorb incoming zombie strikes.',
    speedMultiplier: 0.95,
    healthBonus: 10,
    damageResistance: 0.85,
    reloadSpeedMultiplier: 1.05,
    spreadMultiplier: 1.0,
    cosmetics: {
      skinColor: 0xB88764,
      hairColor: 0x0E0E0E,
      hairType: 'crewcut',
      hoodieColor: 0x3D352B, // heavy canvas
      vestColor: 0x1E222A, // heavy ballistic body armor
      pantsColor: 0x2E3033, // reinforced heavy fatigues
      gearColor: 0x14161A,
      bootColor: 0x111111,
      hasBackpack: true,
      hasHolster: true,
      hasHeavyPlates: true
    }
  },
  {
    id: 'viper',
    name: 'Viper',
    title: 'Recon Sniper',
    role: 'Long-Range Scout',
    trait: 'Deadly Precision (-30% Weapon Spread)',
    traitDesc: 'Steady marksmanship discipline and razor-sharp weapon handling.',
    speedMultiplier: 1.02,
    healthBonus: 0,
    damageResistance: 1.0,
    reloadSpeedMultiplier: 1.0,
    spreadMultiplier: 0.70, // 30% tighter weapon spread
    cosmetics: {
      skinColor: 0xD8B48D,
      hairColor: 0x1A1412,
      hairType: 'beret_headset', // dark green commando beret with tactical headset
      hoodieColor: 0x2A382A, // woodland sniper green
      vestColor: 0x1C281C,
      pantsColor: 0x223022,
      gearColor: 0x141C14,
      bootColor: 0x121812,
      hasBackpack: true,
      hasHolster: true,
      hasGhillieTrim: true
    }
  }
];

export function getCharacterById(id) {
  return CHARACTERS.find(c => c.id === id) || CHARACTERS[0];
}
