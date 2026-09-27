// src/narrative/narrationManager.js - Web Speech API Read-Aloud Narration System
// Provides high-performance text-to-speech with play, pause, resume, skip, rate, and mute controls

export class NarrationManager {
  constructor() {
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.isMuted = false;
    this.rate = 1.02;
    this.pitch = 0.98;
    this.voices = [];
    this.preferredVoice = null;
    this.onStart = null;
    this.onEnd = null;
    this.onError = null;

    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    try {
      this.voices = this.synth.getVoices() || [];
      // Pick best English voice (prefer natural or deep resonant narrator)
      this.preferredVoice = this.voices.find(v => 
        v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('David') || v.name.includes('Google') || v.name.includes('Daniel') || v.name.includes('James'))
      ) || this.voices.find(v => v.lang.startsWith('en')) || this.voices[0] || null;
    } catch (e) {
      console.warn('[NarrationManager] Could not get voices:', e);
    }
  }

  speak(text, onComplete = null) {
    if (!this.synth || this.isMuted || !text) {
      if (onComplete) onComplete();
      return;
    }

    try {
      // Cancel any ongoing speech
      this.stop();

      const cleanText = text.replace(/[*_#]/g, ' ').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;
      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }

      utterance.onstart = () => {
        if (this.onStart) this.onStart();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        if (this.onEnd) this.onEnd();
        if (onComplete) onComplete();
      };

      utterance.onerror = (err) => {
        console.warn('[NarrationManager] Speech error:', err);
        this.currentUtterance = null;
        if (this.onError) this.onError(err);
        if (onComplete) onComplete();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (e) {
      console.warn('[NarrationManager] speak() failed:', e);
      if (onComplete) onComplete();
    }
  }

  pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
    }
  }

  resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this.currentUtterance = null;
  }

  skip() {
    this.stop();
  }

  setMuted(muted) {
    this.isMuted = !!muted;
    if (this.isMuted) {
      this.stop();
    }
  }

  toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  isSpeaking() {
    return !!(this.synth && this.synth.speaking && !this.synth.paused);
  }
}

export const narrationManager = new NarrationManager();
