// src/narrative/storyEngine.js - Core Random Story Engine for AFTERTRACE
// Manages: 60 Starting Stories, Seeded Dynamic Narrative Progression,
// Controlled Non-Repetitive Event Selection, Real-Time Audio Crossfades, and Personalized Epilogues.

import { STARTING_STORIES } from '../data/startingStories.js';
import { STORY_EVENTS } from '../data/storyEvents.js';
import { STORY_ENDINGS } from '../data/storyEndings.js';
import { narrationManager } from './narrationManager.js';
import { narrativeAudioManager } from './narrativeAudioManager.js';
import { progressionManager } from '../shooter/progression.js';

const STORAGE_KEY = 'aftertrace_random_story_state';

// Mulberry32 Seeded Pseudo-Random Number Generator
function createMulberry32(seed) {
  let s = seed >>> 0;
  return function() {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class StoryEngine {
  constructor() {
    this.startingStories = STARTING_STORIES;
    this.eventsPool = STORY_EVENTS;
    this.endings = STORY_ENDINGS;

    this.state = this.getInitialState();
    this.activeStoryEvent = null;
    this.isStoryActive = false;
    this.onEventDisplay = null;
    this.onCloseModal = null;

    this.rng = Math.random;
  }

  getInitialState() {
    return {
      selectedStartingStoryId: null,
      runSeed: this.generateRunSeed(),
      currentEventId: null,
      previousEventId: null,
      visitedEvents: [],
      recentTags: [],
      storyTags: [],
      storyProgress: 0,
      mysteryLevel: 0,
      survivorTrust: 0,
      radioContact: false,
      powerRestored: false,
      hospitalVisited: false,
      safehouseEstablished: false,
      convoySeen: false,
      undergroundRouteFound: false,
      majorClueFound: false,
      cureSecured: false,
      partialCure: false,
      allyKayaSaved: false,
      finalSequenceStarted: false,
      endingType: null,
      choicesMade: []
    };
  }

  generateRunSeed() {
    const num = Math.floor(10000 + Math.random() * 90000);
    return `RUN-${num}`;
  }

  setSeed(seedStr) {
    if (!seedStr) seedStr = this.generateRunSeed();
    this.state.runSeed = seedStr;

    // Convert string seed to 32-bit integer hash
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
      hash = ((hash << 5) - hash + seedStr.charCodeAt(i)) | 0;
    }
    this.rng = createMulberry32(hash);
  }

  seededRandom() {
    return this.rng();
  }

  // Get all 60 starting story options for the selection screen
  getAllStartingStories() {
    return this.startingStories;
  }

  getStartingStory(id) {
    return this.startingStories.find(s => s.id === id) || this.startingStories[0];
  }

  // Player selected ONE starting story out of 60.
  // Initializes narrative state, generates a unique run seed, and kicks off audio & narration.
  initializeStoryRun(startingStoryId, seed = null) {
    const story = this.getStartingStory(startingStoryId);
    this.setSeed(seed || this.generateRunSeed());

    this.state = {
      ...this.getInitialState(),
      selectedStartingStoryId: story.id,
      runSeed: this.state.runSeed,
      storyTags: [...story.tags],
      recentTags: [...story.tags],
      mysteryLevel: story.initialState.mysteryLevel || 0,
      survivorTrust: story.initialState.survivorTrust || 0,
      radioContact: !!story.initialState.radioContact,
      powerRestored: !!story.initialState.powerRestored,
      hospitalVisited: !!story.initialState.hospitalVisited,
      safehouseEstablished: !!story.initialState.safehouseEstablished,
      convoySeen: !!story.initialState.convoySeen,
      undergroundRouteFound: !!story.initialState.undergroundRouteFound,
      majorClueFound: !!story.initialState.majorClueFound
    };

    this.saveState();

    // Crossfade procedural soundscape
    narrativeAudioManager.playProfile(story.audioProfile);

    // Speak opening narrative
    narrationManager.speak(`${story.title}. ${story.openingNarration}`);

    return story;
  }

  loadState() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          this.state = parsed;
          if (this.state.runSeed) {
            this.setSeed(this.state.runSeed);
          }
        }
      }
    } catch (e) {
      console.warn('[StoryEngine] Failed to load state:', e);
    }
  }

  saveState() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      }
    } catch (e) {
      console.warn('[StoryEngine] Failed to save state:', e);
    }
  }

  resetStory() {
    this.state = this.getInitialState();
    this.setSeed(this.state.runSeed);
    this.saveState();
  }

  // Filter available narrative events matching state, progression, and anti-repetition rules
  getEligibleEvents(currentWave = 1, currentLevel = 1) {
    const visited = this.state.visitedEvents || [];

    const candidates = this.eventsPool.filter(event => {
      // 1. Anti-repetition: exclude if onceOnly and already played
      if (event.onceOnly !== false && visited.includes(event.id)) {
        return false;
      }

      // 2. Cooldown check: exclude if visited in last 3 events
      const recentVisited = visited.slice(-3);
      if (recentVisited.includes(event.id)) {
        return false;
      }

      // 3. Intensity curve check
      if (currentWave <= 1 && event.intensity !== 'early') return false;
      if (currentWave === 2 && event.intensity !== 'early' && event.intensity !== 'mid') return false;
      if (currentWave === 3 && event.intensity !== 'mid' && event.intensity !== 'late') return false;
      if (currentWave >= 4 && event.intensity !== 'late' && event.intensity !== 'finale') return false;

      // 4. Requirements check
      const req = event.requiredState || {};
      if (req.minWave && currentWave < req.minWave) return false;
      if (req.maxWave && currentWave > req.maxWave) return false;
      if (req.minLevel && currentLevel < req.minLevel) return false;
      if (req.powerRestored !== undefined && req.powerRestored !== this.state.powerRestored) return false;
      if (req.hospitalVisited !== undefined && req.hospitalVisited !== this.state.hospitalVisited) return false;

      // 5. Incompatible tags check
      if (event.incompatibleTags && event.incompatibleTags.some(t => this.state.storyTags.includes(t))) {
        return false;
      }

      return true;
    });

    // Fallback: If strict filtering left no candidates, take any unvisited event or any event
    if (candidates.length === 0) {
      const fallback = this.eventsPool.filter(e => !visited.includes(e.id));
      return fallback.length > 0 ? fallback : this.eventsPool;
    }

    return candidates;
  }

  // Weighted Seeded Random Selection Algorithm
  selectRandomEvent(currentWave = 1, currentLevel = 1) {
    const candidates = this.getEligibleEvents(currentWave, currentLevel);
    if (!candidates || candidates.length === 0) return null;

    // Calculate weights based on tag synergy and anti-repetition
    const weightedPool = candidates.map(event => {
      let weight = event.probabilityWeight || 5;

      // Tag synergy: +3 for each matching story tag
      if (event.tags && this.state.storyTags) {
        event.tags.forEach(t => {
          if (this.state.storyTags.includes(t)) {
            weight += 3;
          }
        });
      }

      // Anti-repetition: reduce weight if primary tag appeared immediately recently
      const lastTag = this.state.recentTags[this.state.recentTags.length - 1];
      if (event.tags && event.tags[0] === lastTag) {
        weight = Math.max(1, Math.floor(weight * 0.45));
      }

      return { event, weight };
    });

    const totalWeight = weightedPool.reduce((sum, item) => sum + item.weight, 0);
    let r = this.seededRandom() * totalWeight;

    for (let i = 0; i < weightedPool.length; i++) {
      r -= weightedPool[i].weight;
      if (r <= 0) {
        return weightedPool[i].event;
      }
    }

    return weightedPool[weightedPool.length - 1].event;
  }

  // Automatically fetch, execute, and return the next story event
  getNextStoryEvent(currentWave = 1, currentLevel = 1) {
    const event = this.selectRandomEvent(currentWave, currentLevel);
    if (!event) return null;

    this.applyStoryEvent(event);
    return event;
  }

  // Apply narrative event to story state and trigger audio/speech
  applyStoryEvent(event) {
    this.activeStoryEvent = event;
    this.isStoryActive = true;

    this.state.previousEventId = this.state.currentEventId;
    this.state.currentEventId = event.id;
    if (!this.state.visitedEvents.includes(event.id)) {
      this.state.visitedEvents.push(event.id);
    }
    this.state.storyProgress += 1;

    // Update tags
    if (event.tags) {
      event.tags.forEach(t => {
        if (!this.state.storyTags.includes(t)) {
          this.state.storyTags.push(t);
        }
      });
      this.state.recentTags.push(event.tags[0]);
    }

    // Update flags
    if (event.stateUpdates) {
      Object.assign(this.state, event.stateUpdates);
    }

    // Award narrative XP
    if (event.gameplayEffect && event.gameplayEffect.xp) {
      progressionManager.addXP(event.gameplayEffect.xp, { isStoryChoice: true, nodeTitle: event.title });
    }

    this.saveState();

    // 1. Play procedural soundscape profile
    narrativeAudioManager.playProfile(event.audioProfile);

    // 2. Play Web Speech narration
    narrationManager.speak(`${event.title}. ${event.speaker}. ${event.narration}`);

    // 3. Render event in UI
    if (this.onEventDisplay) {
      this.onEventDisplay(event, (choiceIndex) => this.selectPlayerDialogueChoice(choiceIndex));
    }
  }

  // Player selected an optional dialogue / tactical flavor response
  selectPlayerDialogueChoice(choiceIndex) {
    if (!this.activeStoryEvent || !this.activeStoryEvent.dialogue) {
      this.finishCurrentStoryEncounter();
      return;
    }

    const choice = this.activeStoryEvent.dialogue.options[choiceIndex];
    if (choice) {
      this.state.choicesMade.push({
        eventId: this.activeStoryEvent.id,
        choiceText: choice.text,
        timestamp: Date.now()
      });

      if (choice.stateUpdate) {
        Object.assign(this.state, choice.stateUpdate);
      }

      if (choice.effect && choice.effect.xp) {
        progressionManager.addXP(choice.effect.xp, { isStoryChoice: true, nodeTitle: choice.text });
      }

      this.saveState();
    }

    this.finishCurrentStoryEncounter();
  }

  finishCurrentStoryEncounter() {
    narrationManager.stop();
    this.isStoryActive = false;
    this.activeStoryEvent = null;
    if (this.onCloseModal) {
      this.onCloseModal();
      this.onCloseModal = null;
    }
  }

  skipStory() {
    this.finishCurrentStoryEncounter();
  }

  // Triggered between waves by ShooterGame
  triggerWaveCheckpoint(waveNum, currentLevel, onFinish = null) {
    this.onCloseModal = onFinish;
    this.isStoryActive = true;
    const event = this.getNextStoryEvent(waveNum, currentLevel);
    if (!event) {
      this.finishCurrentStoryEncounter();
    }
  }

  // Generate personalized campaign debriefing & ending dossier
  generatePersonalizedRecap(stats = {}) {
    const startStory = this.getStartingStory(this.state.selectedStartingStoryId);
    const progress = progressionManager.getProgress();
    const gameStats = progressionManager.getStats();

    // Filter candidate endings
    const endingCandidates = this.endings.filter(e => {
      const minW = e.requiredState?.minWaves || 1;
      return (stats.wavesCleared || gameStats.roundsSurvived || 1) >= minW;
    });

    // Select ending based on tag compatibility
    let chosenEnding = endingCandidates[0];
    let bestScore = -1;

    endingCandidates.forEach(ending => {
      let score = ending.probabilityWeight || 5;
      if (ending.tags) {
        ending.tags.forEach(t => {
          if (this.state.storyTags.includes(t)) score += 4;
        });
      }
      if (score > bestScore) {
        bestScore = score;
        chosenEnding = ending;
      }
    });

    const runData = {
      startingStory: startStory,
      state: this.state,
      stats: { ...gameStats, ...stats },
      level: progress.level,
      totalXP: progress.totalXP,
      wavesCleared: stats.wavesCleared || gameStats.roundsSurvived || 1
    };

    const personalizedEpilogue = chosenEnding.generateEpilogue(runData);

    // Speak ending narration
    narrationManager.speak(`${chosenEnding.title}. ${personalizedEpilogue}`);
    narrativeAudioManager.playProfile(chosenEnding.audioProfile);

    return {
      startingStory: `${startStory.num.toString().padStart(2, '0')} — ${startStory.title}`,
      startingStoryId: startStory.id,
      runSeed: this.state.runSeed,
      archetype: chosenEnding.archetype,
      endingTitle: chosenEnding.title,
      endingNarrative: personalizedEpilogue,
      eventsExperiencedCount: this.state.visitedEvents.length,
      visitedEventsList: this.state.visitedEvents,
      wavesCleared: runData.wavesCleared,
      totalKills: runData.stats.kills || 0,
      finalLevel: progress.level,
      totalXP: progress.totalXP,
      weaponsUnlocked: progress.unlockedWeapons?.length || 1,
      uniquePathNote: "This story sequence was uniquely generated for this run."
    };
  }
}

export const storyEngine = new StoryEngine();

// Backward compatibility alias for legacy imports
export const narrativeEngine = storyEngine;
