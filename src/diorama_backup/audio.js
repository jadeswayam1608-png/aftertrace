// audio.js — Web Audio API synth for ambient ocean/wind loop + event chime
let audioCtx = null;
let ambientGain = null;
let isMuted = false;
let isInitialized = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function initAudio() {
  if (isInitialized) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  isInitialized = true;

  try {
    startAmbientNoise(ctx);
  } catch (e) {
    console.warn('[Audio] Failed to start ambient audio:', e);
  }
}

function startAmbientNoise(ctx) {
  // Generate 4 seconds of brown/pink noise
  const bufferSize = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    // Simple brownian noise filter
    lastOut = (lastOut + (0.02 * white)) / 1.02;
    data[i] = lastOut * 3.5;
  }

  const noiseSource = ctx.createBufferSource();
  noiseSource.buffer = buffer;
  noiseSource.loop = true;

  // Filter to mimic distant surf and wind
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(380, ctx.currentTime);

  // Slow LFO to mimic waves swelling and breaking
  const lfo = ctx.createOscillator();
  lfo.frequency.setValueAtTime(0.15, ctx.currentTime); // ~6.6s wave cycle
  const lfoGain = ctx.createGain();
  lfoGain.gain.setValueAtTime(180, ctx.currentTime);
  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);

  ambientGain = ctx.createGain();
  ambientGain.gain.setValueAtTime(isMuted ? 0 : 0.09, ctx.currentTime);

  noiseSource.connect(filter);
  filter.connect(ambientGain);
  ambientGain.connect(ctx.destination);

  noiseSource.start();
  lfo.start();
}

/**
 * Play a resonant story event chime
 */
export function playChime() {
  const ctx = getAudioContext();
  if (!ctx || isMuted) return;

  try {
    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now); // E5
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(987.77, now); // B5

    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.3);
    osc2.stop(now + 2.3);
  } catch (e) {
    console.warn('[Audio] Chime failed:', e);
  }
}

export function toggleMute() {
  isMuted = !isMuted;
  if (ambientGain && audioCtx) {
    ambientGain.gain.setValueAtTime(isMuted ? 0 : 0.09, audioCtx.currentTime);
  }
  return isMuted;
}
