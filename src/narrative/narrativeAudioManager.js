// src/narrative/narrativeAudioManager.js - Procedural Web Audio Soundscapes for 60 Story Profiles
// Implements 500ms crossfading, multi-oscillator tension drones, atmospheric noise, and radar/radio synthesis

export class NarrativeAudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.currentSoundscape = null;
    this.isMuted = false;
    this.fadeDuration = 0.5; // 500ms crossfade
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.22, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    } catch (e) {
      console.warn('[NarrativeAudioManager] Web Audio not supported:', e);
    }
  }

  ensureContext() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Play procedural soundscape for any of the 60 story profiles with smooth 500ms crossfade
  playProfile(profileId) {
    this.ensureContext();
    if (!this.ctx || !this.masterGain) return;

    const profileType = this.mapProfileToType(profileId);
    const now = this.ctx.currentTime;

    // Crossfade out previous soundscape
    if (this.currentSoundscape) {
      const oldNodes = this.currentSoundscape;
      if (oldNodes.gain) {
        oldNodes.gain.gain.cancelScheduledValues(now);
        oldNodes.gain.gain.setValueAtTime(oldNodes.gain.gain.value, now);
        oldNodes.gain.gain.linearRampToValueAtTime(0.0001, now + this.fadeDuration);
      }
      setTimeout(() => {
        try {
          if (oldNodes.stop) oldNodes.stop();
        } catch (e) {}
      }, this.fadeDuration * 1000 + 50);
    }

    // Build new procedural soundscape
    const newSoundscape = this.buildSoundscape(profileType);
    if (newSoundscape) {
      newSoundscape.gain.gain.setValueAtTime(0.0001, now);
      newSoundscape.gain.gain.linearRampToValueAtTime(1.0, now + this.fadeDuration);
      this.currentSoundscape = newSoundscape;
    }
  }

  mapProfileToType(profileId) {
    if (!profileId) return 'ambient_wind';

    const directTypes = [
      'coastal_surf', 'radio_static', 'forest_tension', 'horde_approaching',
      'facility_hum', 'cryo_lab', 'subterranean_alarm', 'mountain_storm',
      'beacon_hum', 'boss_standoff', 'helicopter_rotor', 'dawn_triumph', 'ambient_wind'
    ];
    if (directTypes.includes(profileId)) return profileId;

    // Check aliases
    if (profileId === 'night_transmission') return 'radio_static';
    if (profileId === 'cold_concrete' || profileId === 'server_room') return 'facility_hum';
    if (profileId === 'sterile_horror' || profileId === 'cryo_facility') return 'cryo_lab';
    if (profileId === 'ocean_winds' || profileId === 'murky_water') return 'coastal_surf';
    if (profileId === 'subterranean_damp' || profileId === 'dark_sewer' || profileId === 'toxic_industrial') return 'subterranean_alarm';
    if (profileId === 'high_altitude_wind' || profileId === 'thunderous_summit') return 'beacon_hum';

    const num = parseInt(profileId.toString().replace(/\D/g, ''), 10) || 1;

    if (num === 1 || num === 2) return 'coastal_surf';
    if (num === 5 || num === 11 || num === 29) return 'radio_static';
    if (num >= 3 && num <= 10) return 'forest_tension';
    if (num >= 11 && num <= 20) return 'horde_approaching';
    if (num >= 21 && num <= 28) return 'facility_hum';
    if (num >= 29 && num <= 35) return 'cryo_lab';
    if (num >= 36 && num <= 40) return 'subterranean_alarm';
    if (num >= 41 && num <= 46) return 'mountain_storm';
    if (num >= 47 && num <= 50) return 'beacon_hum';
    if (num >= 51 && num <= 53) return 'boss_standoff';
    if (num >= 54 && num <= 56) return 'helicopter_rotor';
    if (num >= 57) return 'dawn_triumph';

    return 'forest_tension';
  }

  buildSoundscape(type) {
    if (!this.ctx) return null;
    const now = this.ctx.currentTime;
    const soundGain = this.ctx.createGain();
    soundGain.connect(this.masterGain);

    const activeNodes = [];

    const stopAll = () => {
      activeNodes.forEach(n => {
        try {
          if (n.stop) n.stop();
          n.disconnect();
        } catch (e) {}
      });
    };

    switch (type) {
      case 'coastal_surf':
      case 'ambient_wind': {
        // Filtered pink noise wind & slow surf surge
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99 * b0 + white * 0.05;
          b1 = 0.95 * b1 + white * 0.08;
          b2 = 0.90 * b2 + white * 0.12;
          output[i] = b0 + b1 + b2;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(260, now);

        // LFO for ocean wave swells
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.18, now);
        lfoGain.gain.setValueAtTime(140, now);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        whiteNoise.connect(filter);
        filter.connect(soundGain);

        whiteNoise.start(now);
        lfo.start(now);
        activeNodes.push(whiteNoise, lfo);
        break;
      }

      case 'radio_static': {
        // High-pass scratchy radio noise with intermittent tone blips
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.25;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1800, now);
        filter.Q.setValueAtTime(2.0, now);

        noise.connect(filter);
        filter.connect(soundGain);
        noise.start(now);
        activeNodes.push(noise);

        // Morse-like transmission tone
        const tone = this.ctx.createOscillator();
        const toneGain = this.ctx.createGain();
        tone.type = 'sine';
        tone.frequency.setValueAtTime(940, now);
        toneGain.gain.setValueAtTime(0.04, now);
        tone.connect(toneGain);
        toneGain.connect(soundGain);
        tone.start(now);
        activeNodes.push(tone);
        break;
      }

      case 'facility_hum':
      case 'cryo_lab': {
        // Deep sub-bass hum + electrical transformer buzz
        const osc1 = this.ctx.createOscillator();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(60, now); // 60Hz mains buzz

        const osc2 = this.ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(120, now);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(180, now);

        const humGain = this.ctx.createGain();
        humGain.gain.setValueAtTime(0.18, now);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(humGain);
        humGain.connect(soundGain);

        osc1.start(now);
        osc2.start(now);
        activeNodes.push(osc1, osc2);
        break;
      }

      case 'subterranean_alarm': {
        // Slow ominous pulsating klaxon
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);

        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(1.0, now);
        lfoGain.gain.setValueAtTime(120, now);

        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        const klaxonGain = this.ctx.createGain();
        klaxonGain.gain.setValueAtTime(0.12, now);

        osc.connect(klaxonGain);
        klaxonGain.connect(soundGain);

        osc.start(now);
        lfo.start(now);
        activeNodes.push(osc, lfo);
        break;
      }

      case 'mountain_storm':
      case 'boss_standoff': {
        // Heavy roaring wind & deep sub rumble
        const sub = this.ctx.createOscillator();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(45, now);

        const subGain = this.ctx.createGain();
        subGain.gain.setValueAtTime(0.35, now);
        sub.connect(subGain);
        subGain.connect(soundGain);
        sub.start(now);
        activeNodes.push(sub);

        // Thunderous low rumble
        const lfo = this.ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.4, now);
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(12, now);
        lfo.connect(lfoGain);
        lfoGain.connect(sub.frequency);
        lfo.start(now);
        activeNodes.push(lfo);
        break;
      }

      case 'helicopter_rotor': {
        // 4.5Hz rhythmic chopper rotor blade pulse
        const sub = this.ctx.createOscillator();
        sub.type = 'sawtooth';
        sub.frequency.setValueAtTime(55, now);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(220, now);

        const chopperLfo = this.ctx.createOscillator();
        chopperLfo.type = 'square';
        chopperLfo.frequency.setValueAtTime(4.8, now);

        const chopperGain = this.ctx.createGain();
        chopperGain.gain.setValueAtTime(0.2, now);

        sub.connect(filter);
        filter.connect(chopperGain);
        chopperLfo.connect(chopperGain.gain);
        chopperGain.connect(soundGain);

        sub.start(now);
        chopperLfo.start(now);
        activeNodes.push(sub, chopperLfo);
        break;
      }

      case 'dawn_triumph': {
        // Warm major ambient chord (C major: C3, G3, E4)
        const notes = [130.81, 196.00, 329.63];
        notes.forEach(f => {
          const o = this.ctx.createOscillator();
          o.type = 'sine';
          o.frequency.setValueAtTime(f, now);
          const g = this.ctx.createGain();
          g.gain.setValueAtTime(0.08, now);
          o.connect(g);
          g.connect(soundGain);
          o.start(now);
          activeNodes.push(o);
        });
        break;
      }

      default: { // forest_tension & horde_approaching
        const drone = this.ctx.createOscillator();
        drone.type = 'sine';
        drone.frequency.setValueAtTime(65, now);

        const droneGain = this.ctx.createGain();
        droneGain.gain.setValueAtTime(0.25, now);

        drone.connect(droneGain);
        droneGain.connect(soundGain);
        drone.start(now);
        activeNodes.push(drone);
        break;
      }
    }

    return {
      gain: soundGain,
      stop: stopAll
    };
  }

  stop() {
    if (this.currentSoundscape) {
      if (this.ctx && this.currentSoundscape.gain) {
        const now = this.ctx.currentTime;
        this.currentSoundscape.gain.gain.linearRampToValueAtTime(0.0001, now + this.fadeDuration);
      }
      setTimeout(() => {
        try {
          if (this.currentSoundscape && this.currentSoundscape.stop) {
            this.currentSoundscape.stop();
          }
          this.currentSoundscape = null;
        } catch (e) {}
      }, this.fadeDuration * 1000 + 50);
    }
  }

  setMuted(muted) {
    this.isMuted = !!muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.22, this.ctx.currentTime);
    }
  }
}

export const narrativeAudioManager = new NarrativeAudioManager();
