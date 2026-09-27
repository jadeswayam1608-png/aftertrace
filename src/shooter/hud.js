// src/shooter/hud.js - Free Fire style Shooter HUD, Mobile Layout, DOM Thrash Prevention & Progression HUD
import { toggleAudioMute, playRadioStatic, playTypewriterClick, playChoiceSelectSound, playWaveChime } from './audio.js';
import { DIFFICULTY_PRESETS } from './difficulty.js';
import { CHARACTERS, getCharacterById } from './characters.js';
import { WEAPONS } from './weapons.js';
import { progressionManager } from './progression.js';
import { WEAPON_UNLOCKS } from '../data/progressionConfig.js';
import { narrationManager } from '../narrative/narrationManager.js';
import { storyEngine, narrativeEngine } from '../narrative/storyEngine.js';
import { STARTING_STORIES } from '../data/startingStories.js';

export class ShooterHUD {
  constructor(inputManager) {
    this.input = inputManager;

    // Cache elements
    this.container = document.getElementById('shooter-hud');
    this.healthBarFill = document.getElementById('health-bar-fill');
    this.healthNumber = document.getElementById('health-number');

    // Progression HUD & Floating XP Elements
    this.progressHud = document.getElementById('player-progress-hud');
    this.levelBadge = document.getElementById('player-level-badge');
    this.xpCounter = document.getElementById('player-xp-counter');
    this.xpBarFill = document.getElementById('player-xp-bar-fill');
    this.floatingXpContainer = document.getElementById('floating-xp-container');
    this.levelUpBanner = document.getElementById('level-up-banner');
    this.levelUpSubtitle = document.getElementById('level-up-subtitle');
    this.levelUpUnlock = document.getElementById('level-up-unlock');
    this.weaponLockedAlert = document.getElementById('weapon-locked-alert');
    this.weaponLockedText = document.getElementById('weapon-locked-text');
    this.loadoutGrid = document.getElementById('loadout-grid');
    this.debriefingModal = document.getElementById('campaign-debriefing-modal');
    this.ttsVoiceToggleBtn = document.getElementById('tts-voice-toggle-btn');

    // Weapon button & ammo display
    this.weaponSelectBtn = document.getElementById('weapon-select-btn');
    this.weaponIcon = document.getElementById('weapon-icon');
    this.weaponName = document.getElementById('weapon-name');
    this.ammoDisplay = document.getElementById('ammo-display');
    this.ammoText = document.getElementById('ammo-counter-text');

    this.reloadPrompt = document.getElementById('desktop-reload-prompt');
    this.mobileReloadBtn = document.getElementById('mobile-reload-btn');
    this.waveBanner = document.getElementById('wave-banner');
    this.waveTitle = document.getElementById('wave-title');
    this.waveSubtitle = document.getElementById('wave-subtitle');
    this.waveBadge = document.getElementById('wave-badge');
    this.crosshair = document.getElementById('crosshair');
    this.damageVignette = document.getElementById('damage-vignette');
    this.sniperScopeOverlay = document.getElementById('sniper-scope-overlay');
    this.mobileAimBtn = document.getElementById('mobile-aim-btn');
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.titleScreen = document.getElementById('title-screen');
    this.aimAssistBtn = document.getElementById('aim-assist-toggle');
    this.soundBtn = document.getElementById('sound-toggle-btn');
    this.sensToggleBtn = document.getElementById('sensitivity-toggle');
    this.fullscreenBtn = document.getElementById('fullscreen-toggle-btn');
    this.sensSlider = document.getElementById('sensitivity-slider');
    this.sensValueText = document.getElementById('sens-value-text');
    this.healingBanner = document.getElementById('healing-banner');
    this.healingTimeout = null;
    this._damageFlashTimeout = null;
    this._levelUpTimeout = null;
    this._lockedTimeout = null;

    this.selectedDifficulty = 'medium';
    this.selectedCharacter = 'maya';
    this.bannerTimeout = null;

    this.onWeaponSwitchRequest = null;
    this.onCharacterSelect = null;

    // DOM State Cache (prevents 60 FPS layout recalculations & DOM thrashing)
    this._lastHp = -1;
    this._lastMaxHp = -1;
    this._lastHealthClass = '';
    this._lastWeaponId = '';
    this._lastAmmoStr = '';
    this._lastIsReloading = null;
    this._lastIsMagEmpty = null;
    this._lastWaveBadgeText = '';
    this._lastIsSniperADS = null;
    this._lastIsAiming = null;
    this._lastLevel = -1;
    this._lastXPStr = '';
    this._lastProgressPct = -1;

    this.selectedStartingStoryId = 'story_01';
    this.storySelectionModal = document.getElementById('story-selection-modal');
    this.storyIntroModal = document.getElementById('story-intro-modal');
    this.storyDebugPanel = document.getElementById('story-debug-panel');

    this.initControls();
    this.initCharacterSelector();
    this.initStorySelectionUI();
    this.initStoryDebugPanel();
    this.initProgressionListeners();
    this.initDebugTools();
    this.initNarrativeDisplay();
  }

  initControls() {
    // Sound & Music toggle
    if (this.soundBtn) {
      this.soundBtn.addEventListener('click', () => {
        const muted = toggleAudioMute();
        const iconSpan = this.soundBtn.querySelector('.music-icon') || this.soundBtn;
        iconSpan.textContent = muted ? '🔇' : '🔊';
      });
    }

    // Aim Assist toggle
    if (this.aimAssistBtn) {
      this.aimAssistBtn.addEventListener('click', () => {
        this.input.autoAimEnabled = !this.input.autoAimEnabled;
        this.aimAssistBtn.classList.toggle('active', this.input.autoAimEnabled);
        this.aimAssistBtn.textContent = `AIM: ${this.input.autoAimEnabled ? 'ON' : 'OFF'}`;
      });
    }

    // Sensitivity HUD Toggle button (0.8x -> 1.0x -> 1.4x -> 1.8x -> 0.8x)
    const sensPresets = [0.8, 1.0, 1.4, 1.8];
    const updateSensDisplay = (val) => {
      if (this.sensToggleBtn) this.sensToggleBtn.textContent = `SENS: ${val.toFixed(1)}x`;
      if (this.sensSlider) this.sensSlider.value = val.toString();
      if (this.sensValueText) this.sensValueText.textContent = `${val.toFixed(1)}x`;
    };

    updateSensDisplay(this.input.sensitivity);

    if (this.sensToggleBtn) {
      this.sensToggleBtn.addEventListener('click', () => {
        const curr = this.input.sensitivity;
        let next = sensPresets[0];
        for (let i = 0; i < sensPresets.length; i++) {
          if (Math.abs(curr - sensPresets[i]) < 0.05) {
            next = sensPresets[(i + 1) % sensPresets.length];
            break;
          }
        }
        this.input.setSensitivity(next);
        updateSensDisplay(next);
      });
    }

    // Sensitivity Slider in Title Screen
    if (this.sensSlider) {
      this.sensSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.input.setSensitivity(val);
        updateSensDisplay(val);
      });
    }

    // Fullscreen Toggle Button & 'F' Keyboard Shortcut
    if (this.fullscreenBtn) {
      const toggleFS = () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      };

      this.fullscreenBtn.addEventListener('click', toggleFS);

      // Shortcut 'F'
      window.addEventListener('keydown', (e) => {
        if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.altKey && !e.metaKey) {
          if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
            return;
          }
          toggleFS();
        }
      });

      const updateFSIcon = () => {
        const isFS = !!document.fullscreenElement;
        this.fullscreenBtn.innerHTML = isFS
          ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
               <path d="M4 14h6m0 0v6m0-6l-7 7m17-7h-6m0 0v6m0-6l7 7M4 10h6m0 0V4m0 6L3 3m17 7h-6m0 0V4m0 6l7-7"/>
             </svg>`
          : `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
               <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
             </svg>`;
      };

      document.addEventListener('fullscreenchange', updateFSIcon);
    }

    // Weapon Button Click / Tap (Top-Right of screen)
    // Supports pointerdown + click with debounce so it fires IMMEDIATELY while running without releasing joystick!
    if (this.weaponSelectBtn) {
      let lastSwitchTime = 0;
      const handleSwitch = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const now = performance.now();
        if (now - lastSwitchTime < 180) return; // 180ms debounce
        lastSwitchTime = now;

        if (this.onWeaponSwitchRequest) {
          this.onWeaponSwitchRequest();
        }
      };

      this.weaponSelectBtn.addEventListener('pointerdown', handleSwitch);
      this.weaponSelectBtn.addEventListener('click', handleSwitch);
    }

    // Difficulty Mode Selector buttons
    const diffButtons = document.querySelectorAll('.diff-btn');
    const diffDescEl = document.getElementById('difficulty-description');

    diffButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const diffKey = btn.getAttribute('data-diff');
        if (!diffKey || !DIFFICULTY_PRESETS[diffKey]) return;

        this.selectedDifficulty = diffKey;

        diffButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const preset = DIFFICULTY_PRESETS[diffKey];
        if (diffDescEl) {
          diffDescEl.textContent = preset.description;
        }
      });
    });
  }

  initCharacterSelector() {
    const grid = document.getElementById('character-grid');
    const traitInfo = document.getElementById('character-trait-info');
    if (!grid) return;

    grid.innerHTML = '';

    CHARACTERS.forEach(char => {
      const card = document.createElement('div');
      card.className = `char-card ${char.id === this.selectedCharacter ? 'active' : ''}`;
      card.setAttribute('data-char', char.id);

      card.innerHTML = `
        <div class="char-avatar" style="border-color:${char.color}">
          <span class="char-initial">${char.name[0]}</span>
        </div>
        <div class="char-meta">
          <span class="char-name">${char.name}</span>
          <span class="char-role">${char.title}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        this.selectedCharacter = char.id;
        document.querySelectorAll('.char-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        if (traitInfo) {
          traitInfo.innerHTML = `<strong>${char.name}</strong> • <em>${char.trait}</em> — ${char.traitDesc}`;
        }

        if (this.onCharacterSelect) {
          this.onCharacterSelect(char.id);
        }
      });

      grid.appendChild(card);
    });
  }

  update(player, waveManager) {
    // 1. Health Bar (Only update DOM when HP changes!)
    const hp = player.health;
    const maxHp = player.maxHealth;

    if (hp !== this._lastHp || maxHp !== this._lastMaxHp) {
      this._lastHp = hp;
      this._lastMaxHp = maxHp;
      const pct = Math.max(0, Math.min(100, (hp / maxHp) * 100));

      if (this.healthBarFill) {
        this.healthBarFill.style.width = `${pct}%`;
        const healthClass = pct > 50 ? 'healthy' : (pct > 20 ? 'damaged' : 'critical');
        if (healthClass !== this._lastHealthClass) {
          this.healthBarFill.className = healthClass;
          this._lastHealthClass = healthClass;
        }
      }

      if (this.healthNumber) {
        this.healthNumber.textContent = `${Math.ceil(hp)} / ${maxHp}`;
      }

      // Immediately remove damage vignette when player is at full health
      if (hp >= maxHp && this.damageVignette) {
        this.damageVignette.classList.remove('flash');
        this.damageVignette.style.opacity = '0';
        if (this._damageFlashTimeout) {
          clearTimeout(this._damageFlashTimeout);
          this._damageFlashTimeout = null;
        }
      }
    }

    // 2. Weapon & Ammo Counter (Only update DOM on weapon or ammo changes!)
    const activeWeapon = player.activeWeapon;
    if (activeWeapon.id !== this._lastWeaponId) {
      this._lastWeaponId = activeWeapon.id;
      if (this.weaponIcon) this.weaponIcon.textContent = activeWeapon.icon;
      if (this.weaponName) this.weaponName.textContent = activeWeapon.name;
    }

    const ammoStr = `${player.magazine} / ${player.reserveAmmo}`;
    if (ammoStr !== this._lastAmmoStr) {
      this._lastAmmoStr = ammoStr;
      if (this.ammoText) {
        this.ammoText.textContent = ammoStr;
      }
    }

    if (player.isReloading !== this._lastIsReloading) {
      this._lastIsReloading = player.isReloading;
      if (this.ammoDisplay) {
        this.ammoDisplay.classList.toggle('reloading', player.isReloading);
      }
    }

    // 3. Reload Prompts (strictly when magazine is empty, reserve ammo exists, player is alive and not reloading)
    const isMagEmpty = player.isAlive() && player.magazine === 0 && player.reserveAmmo > 0 && !player.isReloading;
    if (isMagEmpty !== this._lastIsMagEmpty) {
      this._lastIsMagEmpty = isMagEmpty;
      if (this.reloadPrompt) {
        this.reloadPrompt.style.display = isMagEmpty ? 'block' : 'none';
        this.reloadPrompt.style.opacity = isMagEmpty ? '1' : '0';
      }
      if (this.mobileReloadBtn) {
        this.mobileReloadBtn.classList.toggle('pulse-empty', isMagEmpty);
      }
    }

    // 4. Wave badge in HUD
    const remaining = waveManager.getRemainingCount();
    const waveBadgeText = `WAVE ${waveManager.currentWave} • ${remaining} REMAINING`;
    if (waveBadgeText !== this._lastWaveBadgeText) {
      this._lastWaveBadgeText = waveBadgeText;
      if (this.waveBadge) {
        this.waveBadge.textContent = waveBadgeText;
      }
    }

    // 5. Sniper Scope Optical Overlay (ADS with sniper)
    const isSniperADS = !!(this.input.isAiming && player.currentWeapon === 'sniper');
    if (isSniperADS !== this._lastIsSniperADS) {
      this._lastIsSniperADS = isSniperADS;
      if (this.sniperScopeOverlay) {
        this.sniperScopeOverlay.classList.toggle('active', isSniperADS);
      }
    }

    // 6. Mobile Aim Button state sync
    if (this.input.isAiming !== this._lastIsAiming) {
      this._lastIsAiming = this.input.isAiming;
      if (this.mobileAimBtn) {
        this.mobileAimBtn.classList.toggle('aiming', this.input.isAiming);
      }
    }

    // 7. Update Top-Center Level & Progression HUD
    this.updateProgressionHUD(progressionManager.getProgress());
  }

  initProgressionListeners() {
    progressionManager.on('xpAdded', ({ amount, progress, metadata }) => {
      this.showFloatingXP(amount, metadata?.isStoryChoice);
      this.updateProgressionHUD(progress);
    });

    progressionManager.on('levelUp', ({ newLevel, unlockedWeapons, progress }) => {
      this.showLevelUpBanner(newLevel, unlockedWeapons);
      this.updateProgressionHUD(progress);
      this.renderLoadoutArsenal();
    });

    progressionManager.on('weaponUnlocked', () => {
      this.renderLoadoutArsenal();
    });

    progressionManager.on('progressReset', () => {
      this.updateProgressionHUD(progressionManager.getProgress());
      this.renderLoadoutArsenal();
      this.showFloatingXP('RESET');
    });

    this.renderLoadoutArsenal();
    this.updateProgressionHUD(progressionManager.getProgress());
  }

  updateProgressionHUD(progress) {
    if (!progress || !this.progressHud) return;

    if (progress.level !== this._lastLevel) {
      this._lastLevel = progress.level;
      if (this.levelBadge) {
        this.levelBadge.textContent = `LVL ${progress.level}`;
      }
    }

    const xpStr = `${progress.currentXP} / ${progress.xpNeeded} XP`;
    if (xpStr !== this._lastXPStr) {
      this._lastXPStr = xpStr;
      if (this.xpCounter) {
        this.xpCounter.textContent = xpStr;
      }
    }

    if (progress.progressPct !== this._lastProgressPct) {
      this._lastProgressPct = progress.progressPct;
      if (this.xpBarFill) {
        this.xpBarFill.style.width = `${progress.progressPct}%`;
      }
    }
  }

  showFloatingXP(amount, isStory = false) {
    if (!this.floatingXpContainer) return;
    const el = document.createElement('div');
    el.className = 'floating-xp-text';
    el.textContent = typeof amount === 'number' ? `+${amount} XP${isStory ? ' ★' : ''}` : String(amount);

    const offsetX = 50 + (Math.random() - 0.5) * 16;
    const offsetY = 44 + (Math.random() - 0.5) * 10;
    el.style.left = `${offsetX}%`;
    el.style.top = `${offsetY}%`;

    this.floatingXpContainer.appendChild(el);
    setTimeout(() => {
      el.remove();
    }, 1250);
  }

  showLevelUpBanner(newLevel, unlockedWeapons = []) {
    if (!this.levelUpBanner) return;
    if (this.levelUpSubtitle) {
      this.levelUpSubtitle.textContent = `REACHED LEVEL ${newLevel}`;
    }
    if (this.levelUpUnlock) {
      if (unlockedWeapons && unlockedWeapons.length > 0) {
        const names = unlockedWeapons.map(w => w.name || w.id).join(', ');
        this.levelUpUnlock.textContent = `UNLOCKED: ${names}!`;
        this.levelUpUnlock.style.display = 'block';
      } else {
        this.levelUpUnlock.style.display = 'none';
      }
    }
    this.levelUpBanner.style.display = 'block';
    playWaveChime();

    if (this._levelUpTimeout) clearTimeout(this._levelUpTimeout);
    this._levelUpTimeout = setTimeout(() => {
      this.levelUpBanner.style.display = 'none';
    }, 3200);
  }

  showWeaponLockedAlert(weaponId) {
    if (!this.weaponLockedAlert) return;
    const unlockEntry = Object.entries(WEAPON_UNLOCKS).find(([lvl, w]) => w.id === weaponId);
    const reqLevel = unlockEntry ? unlockEntry[0] : '5';
    const name = WEAPONS[weaponId]?.name || weaponId.toUpperCase();
    if (this.weaponLockedText) {
      this.weaponLockedText.textContent = `LOCKED: ${name} requires Level ${reqLevel}`;
    }
    this.weaponLockedAlert.style.display = 'flex';
    if (this._lockedTimeout) clearTimeout(this._lockedTimeout);
    this._lockedTimeout = setTimeout(() => {
      this.weaponLockedAlert.style.display = 'none';
    }, 2200);
  }

  renderLoadoutArsenal() {
    if (!this.loadoutGrid) return;
    const weapons = [
      { id: 'pistol', reqLevel: 1 },
      { id: 'smg', reqLevel: 2 },
      { id: 'shotgun', reqLevel: 3 },
      { id: 'rifle', reqLevel: 4 },
      { id: 'sniper', reqLevel: 5 }
    ];

    this.loadoutGrid.innerHTML = '';
    weapons.forEach(({ id, reqLevel }) => {
      const def = WEAPONS[id];
      if (!def) return;
      const isUnlocked = progressionManager.isWeaponUnlocked(id);
      const card = document.createElement('div');
      card.className = `loadout-card ${isUnlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="loadout-card-name">${def.icon} ${def.name}</div>
        <div class="loadout-card-status">${isUnlocked ? '✓ UNLOCKED' : `🔒 LEVEL ${reqLevel}`}</div>
      `;
      this.loadoutGrid.appendChild(card);
    });
  }

  initDebugTools() {
    document.getElementById('dbg-add-xp')?.addEventListener('click', () => {
      progressionManager.debugAddXP(100);
    });
    document.getElementById('dbg-level-up')?.addEventListener('click', () => {
      progressionManager.debugLevelUp();
    });
    document.getElementById('dbg-unlock-weapon')?.addEventListener('click', () => {
      const weapons = ['pistol', 'smg', 'shotgun', 'rifle', 'sniper'];
      const nextLocked = weapons.find(w => !progressionManager.isWeaponUnlocked(w));
      if (nextLocked) {
        progressionManager.debugUnlockWeapon(nextLocked);
      } else {
        this.showFloatingXP('ALL UNLOCKED');
      }
    });
    document.getElementById('dbg-reset-prog')?.addEventListener('click', () => {
      progressionManager.resetProgress();
    });

    if (this.ttsVoiceToggleBtn) {
      this.ttsVoiceToggleBtn.addEventListener('click', () => {
        const muted = narrationManager.toggleMute();
        this.ttsVoiceToggleBtn.classList.toggle('active', !muted);
        const textSpan = this.ttsVoiceToggleBtn.querySelector('.tts-text') || this.ttsVoiceToggleBtn;
        const iconSpan = this.ttsVoiceToggleBtn.querySelector('.tts-icon') || this.ttsVoiceToggleBtn;
        textSpan.textContent = muted ? 'VOICE: OFF' : 'VOICE: ON';
        iconSpan.textContent = muted ? '🔇' : '🔊';
      });
    }
  }

  initStorySelectionUI() {
    const browseBtn = document.getElementById('browse-stories-btn');
    const closeBtn = document.getElementById('close-story-selection-btn');
    const randomBtn = document.getElementById('random-story-btn');
    const searchInput = document.getElementById('story-search-input');
    const chipsContainer = document.getElementById('story-filter-chips');

    // 1. Initial preview setup
    const initialStory = storyEngine.getStartingStory(this.selectedStartingStoryId);
    this.updateStartingStoryPreview(initialStory);

    // 2. Open / Close Story Selection Screen
    if (browseBtn) {
      browseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showStorySelectionModal();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.hideStorySelectionModal();
      });
    }

    // 3. Random Story button
    if (randomBtn) {
      randomBtn.addEventListener('click', () => {
        const stories = storyEngine.getAllStartingStories();
        const randStory = stories[Math.floor(Math.random() * stories.length)];
        this.selectStartingStory(randStory.id);
        playChoiceSelectSound();
        this.hideStorySelectionModal();
      });
    }

    // 4. Search input
    let activeFilter = 'all';
    let searchQuery = '';

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        this.renderStoryCards(activeFilter, searchQuery);
      });
    }

    // 5. Category Chips
    if (chipsContainer) {
      chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        chipsContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.dataset.filter || 'all';
        this.renderStoryCards(activeFilter, searchQuery);
      });
    }

    // Initial render of cards
    this.renderStoryCards('all', '');
  }

  updateStartingStoryPreview(story) {
    if (!story) return;
    const numEl = document.getElementById('preview-story-num');
    const tagEl = document.getElementById('preview-story-tag');
    const titleEl = document.getElementById('preview-story-title');
    const descEl = document.getElementById('preview-story-desc');

    if (numEl) numEl.textContent = story.num.toString().padStart(2, '0');
    if (tagEl) tagEl.textContent = story.tags.join(' • ').toUpperCase();
    if (titleEl) titleEl.textContent = story.title.toUpperCase();
    if (descEl) descEl.textContent = `"${story.shortDescription}"`;
  }

  showStorySelectionModal() {
    if (this.storySelectionModal) {
      this.storySelectionModal.style.display = 'flex';
      this.renderStoryCards('all', '');
    }
  }

  hideStorySelectionModal() {
    if (this.storySelectionModal) {
      this.storySelectionModal.style.display = 'none';
    }
  }

  selectStartingStory(storyId) {
    this.selectedStartingStoryId = storyId;
    const story = storyEngine.getStartingStory(storyId);
    this.updateStartingStoryPreview(story);
    if (this.storySelectionModal) {
      const allCards = this.storySelectionModal.querySelectorAll('.story-card-option');
      allCards.forEach(card => {
        card.classList.toggle('active', card.dataset.storyId === storyId);
      });
    }
  }

  renderStoryCards(category = 'all', searchQuery = '') {
    const grid = document.getElementById('stories-grid-container');
    if (!grid) return;
    grid.innerHTML = '';

    const allStories = storyEngine.getAllStartingStories();

    const filtered = allStories.filter(story => {
      if (category !== 'all') {
        const hasTag = story.tags.some(t => t.toLowerCase() === category.toLowerCase());
        if (!hasTag) return false;
      }

      if (searchQuery) {
        const matchTitle = story.title.toLowerCase().includes(searchQuery);
        const matchDesc = story.shortDescription.toLowerCase().includes(searchQuery);
        const matchTags = story.tags.some(t => t.toLowerCase().includes(searchQuery));
        if (!matchTitle && !matchDesc && !matchTags) return false;
      }

      return true;
    });

    filtered.forEach(story => {
      const card = document.createElement('div');
      card.className = `story-card-option ${story.id === this.selectedStartingStoryId ? 'active' : ''}`;
      card.dataset.storyId = story.id;

      card.innerHTML = `
        <div class="card-top-row">
          <div class="card-badge-group">
            <span class="card-num-badge">${story.num.toString().padStart(2, '0')}</span>
            <span class="card-atmosphere-badge">${story.tags.slice(0, 2).join(' • ')}</span>
          </div>
          <span class="card-icon">${story.icon || '📻'}</span>
        </div>
        <div class="card-title">${story.title}</div>
        <div class="card-desc">"${story.shortDescription}"</div>
        <div class="card-meta-bottom">
          <span class="card-atmosphere-badge">ATMOSPHERE: ${story.atmosphere.replace('_', ' ').toUpperCase()}</span>
          <button type="button" class="card-select-btn">BEGIN STORY</button>
        </div>
      `;

      card.onclick = () => {
        playChoiceSelectSound();
        this.selectStartingStory(story.id);
        this.hideStorySelectionModal();
      };

      grid.appendChild(card);
    });
  }

  // 10-30 Second Cinematic Opening for Chosen Starting Story
  showStartingStoryCinematic(story, onComplete) {
    const modal = this.storyIntroModal;
    if (!modal) {
      if (onComplete) onComplete();
      return;
    }

    // Initialize story run: sets starting story and unique seed
    storyEngine.initializeStoryRun(story.id);

    modal.style.display = 'flex';

    const headerBadge = document.getElementById('story-header-badge');
    const titleEl = document.getElementById('story-modal-title');
    const locationEl = document.getElementById('story-location-tag');
    const bodyEl = document.getElementById('story-body-content');
    const rewardBadge = document.getElementById('story-reward-badge');
    const choicesBox = document.getElementById('story-choices');
    const commenceBtn = document.getElementById('commence-survival-btn');
    const skipBtn = document.getElementById('skip-story-btn');

    if (headerBadge) headerBadge.textContent = `PROLOGUE: SCENARIO ${story.num.toString().padStart(2, '0')} • TRANSMISSION DETECTED`;
    if (titleEl) titleEl.textContent = `${story.num.toString().padStart(2, '0')} — ${story.title.toUpperCase()}`;
    if (locationEl) locationEl.textContent = `Location: Sector 4 • Atmosphere: ${story.atmosphere.replace('_', ' ').toUpperCase()} • Status: Active`;
    if (rewardBadge) rewardBadge.style.display = 'none';
    if (choicesBox) choicesBox.style.display = 'none';

    if (commenceBtn) {
      commenceBtn.style.display = 'block';
      commenceBtn.textContent = 'COMMENCE SURVIVAL [ENTER]';
    }

    if (bodyEl) {
      bodyEl.innerHTML = '';
      const p = document.createElement('p');
      p.textContent = story.openingNarration;
      p.style.fontSize = '1.05rem';
      p.style.lineHeight = '1.65';
      bodyEl.appendChild(p);
    }

    let isDone = false;
    const finish = () => {
      if (isDone) return;
      isDone = true;
      narrationManager.stop();
      modal.style.display = 'none';
      window.removeEventListener('keydown', keyHandler);
      if (onComplete) onComplete();
    };

    if (commenceBtn) {
      commenceBtn.onclick = () => {
        playChoiceSelectSound();
        finish();
      };
    }

    if (skipBtn) {
      skipBtn.onclick = () => {
        finish();
      };
    }

    const keyHandler = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        finish();
      }
    };
    window.addEventListener('keydown', keyHandler);
  }

  initNarrativeDisplay() {
    storyEngine.onEventDisplay = (event, onDialogueChoice) => {
      this.displayRandomStoryEventModal(event, onDialogueChoice);
    };
  }

  // Checkpoint Modal for Dynamically Randomized Follow-Up Story Events
  displayRandomStoryEventModal(event, onDialogueChoice) {
    const modal = this.storyIntroModal;
    if (!modal || !event) return;

    modal.style.display = 'flex';

    const headerBadge = document.getElementById('story-header-badge');
    const titleEl = document.getElementById('story-modal-title');
    const locationEl = document.getElementById('story-location-tag');
    const bodyEl = document.getElementById('story-body-content');
    const rewardBadge = document.getElementById('story-reward-badge');
    const rewardText = document.getElementById('story-reward-text');
    const choicesBox = document.getElementById('story-choices');
    const choiceButtonsRow = document.getElementById('story-choice-buttons');
    const choicePrompt = document.getElementById('story-choice-prompt');
    const commenceBtn = document.getElementById('commence-survival-btn');
    const skipBtn = document.getElementById('skip-story-btn');

    if (headerBadge) headerBadge.textContent = `CHECKPOINT • ${event.speaker.toUpperCase()}`;
    if (titleEl) titleEl.textContent = event.title.toUpperCase();
    if (locationEl) locationEl.textContent = `Tags: ${event.tags.join(' • ').toUpperCase()} • Intensity: ${event.intensity.toUpperCase()}`;

    // Rewards
    if (rewardBadge && event.gameplayEffect) {
      rewardBadge.style.display = 'flex';
      if (rewardText) {
        rewardText.textContent = `+${event.gameplayEffect.xp || 40} XP • INTEL DISCOVERED`;
      }
    } else if (rewardBadge) {
      rewardBadge.style.display = 'none';
    }

    // Narration body
    if (bodyEl) {
      bodyEl.innerHTML = '';
      const p = document.createElement('p');
      p.textContent = event.narration;
      p.style.fontSize = '1.05rem';
      p.style.lineHeight = '1.65';
      bodyEl.appendChild(p);
    }

    // Optional dialogue / tactical choice
    if (event.dialogue && event.dialogue.options && choicesBox && choiceButtonsRow) {
      choicesBox.style.display = 'block';
      if (choicePrompt) choicePrompt.textContent = event.dialogue.prompt || 'CHOOSE YOUR TACTICAL ACTION:';
      choiceButtonsRow.innerHTML = '';

      event.dialogue.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'story-choice-btn';
        btn.innerHTML = `
          <span class="choice-icon">⚡</span>
          <div class="choice-text-col">
            <span class="choice-btn-title">${opt.text}</span>
            <span class="choice-reward-tag">+${opt.effect?.xp || 30} XP • STORY INTEL</span>
          </div>
        `;
        btn.onclick = () => {
          playChoiceSelectSound();
          modal.style.display = 'none';
          if (onDialogueChoice) onDialogueChoice(idx);
        };
        choiceButtonsRow.appendChild(btn);
      });

      if (commenceBtn) commenceBtn.style.display = 'none';
    } else {
      if (choicesBox) choicesBox.style.display = 'none';
      if (commenceBtn) {
        commenceBtn.style.display = 'block';
        commenceBtn.textContent = 'CONTINUE MISSION [ENTER]';
        commenceBtn.onclick = () => {
          playChoiceSelectSound();
          modal.style.display = 'none';
          storyEngine.finishCurrentStoryEncounter();
        };
      }
    }

    if (skipBtn) {
      skipBtn.onclick = () => {
        modal.style.display = 'none';
        storyEngine.skipStory();
      };
    }
  }

  triggerPostWaveStory(waveNum, onContinue) {
    const progress = progressionManager.getProgress();
    storyEngine.triggerWaveCheckpoint(waveNum, progress.level, () => {
      const modal = this.storyIntroModal;
      if (modal) modal.style.display = 'none';
      if (onContinue) onContinue();
    });
  }

  showCampaignDebriefing(recap, onContinue) {
    if (!this.debriefingModal || !recap) {
      if (onContinue) onContinue();
      return;
    }

    const startStoryBadge = document.getElementById('debrief-start-story-badge');
    const seedBadge = document.getElementById('debrief-seed-badge');
    const endingTitle = document.getElementById('debrief-ending-title');
    const archEl = document.getElementById('debrief-archetype');
    const lvlEl = document.getElementById('debrief-level-xp');
    const killsEl = document.getElementById('debrief-kills');
    const eventsCountEl = document.getElementById('debrief-events-count');
    const epilogueTextEl = document.getElementById('debrief-epilogue-text');
    const continueBtn = document.getElementById('debrief-continue-btn');

    if (startStoryBadge) startStoryBadge.textContent = `STARTING PREMISE: ${recap.startingStory}`;
    if (seedBadge) seedBadge.textContent = `SEED: ${recap.runSeed}`;
    if (endingTitle) endingTitle.textContent = recap.endingTitle;
    if (archEl) archEl.textContent = recap.archetype;
    if (lvlEl) lvlEl.textContent = `Level ${recap.finalLevel} • ${recap.totalXP} XP`;
    if (killsEl) killsEl.textContent = `${recap.totalKills} Neutralized`;
    if (eventsCountEl) eventsCountEl.textContent = `${recap.eventsExperiencedCount} Narrative Checkpoints`;
    if (epilogueTextEl) epilogueTextEl.textContent = recap.endingNarrative;

    this.debriefingModal.style.display = 'flex';

    if (continueBtn) {
      continueBtn.onclick = () => {
        this.debriefingModal.style.display = 'none';
        if (onContinue) onContinue();
      };
    }
  }

  initStoryDebugPanel() {
    const panel = this.storyDebugPanel;
    const toggleBtn = document.getElementById('dbg-story-debug-toggle');
    const closeBtn = document.getElementById('close-story-debug-btn');
    const rollEventBtn = document.getElementById('dbg-roll-event-btn');
    const newSeedBtn = document.getElementById('dbg-new-seed-btn');
    const forceEndingBtn = document.getElementById('dbg-force-ending-btn');
    const resetStoryBtn = document.getElementById('dbg-reset-story-btn');

    const togglePanel = () => {
      if (!panel) return;
      const isVisible = panel.style.display === 'flex';
      panel.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) this.updateStoryDebugDisplay();
    };

    if (toggleBtn) toggleBtn.addEventListener('click', togglePanel);
    if (closeBtn) closeBtn.addEventListener('click', togglePanel);

    // Keyboard shortcut F9 / ~ to toggle dev story panel
    window.addEventListener('keydown', (e) => {
      if (e.key === 'F9' || e.key === '`' || e.key === '~') {
        togglePanel();
      }
    });

    if (rollEventBtn) {
      rollEventBtn.addEventListener('click', () => {
        const progress = progressionManager.getProgress();
        storyEngine.getNextStoryEvent(2, progress.level);
        this.updateStoryDebugDisplay();
      });
    }

    if (newSeedBtn) {
      newSeedBtn.addEventListener('click', () => {
        storyEngine.setSeed();
        this.updateStoryDebugDisplay();
      });
    }

    if (forceEndingBtn) {
      forceEndingBtn.addEventListener('click', () => {
        const recap = storyEngine.generatePersonalizedRecap({ wavesCleared: 5 });
        this.showCampaignDebriefing(recap, () => {});
      });
    }

    if (resetStoryBtn) {
      resetStoryBtn.addEventListener('click', () => {
        storyEngine.resetStory();
        this.updateStoryDebugDisplay();
      });
    }
  }

  updateStoryDebugDisplay() {
    const seedEl = document.getElementById('dbg-seed');
    const startStoryEl = document.getElementById('dbg-start-story');
    const currEventEl = document.getElementById('dbg-curr-event');
    const visitedEl = document.getElementById('dbg-visited');
    const tagsEl = document.getElementById('dbg-tags');
    const stateFlagsEl = document.getElementById('dbg-state-flags');

    const s = storyEngine.state;
    if (seedEl) seedEl.textContent = s.runSeed || 'None';
    if (startStoryEl) startStoryEl.textContent = s.selectedStartingStoryId || 'story_01';
    if (currEventEl) currEventEl.textContent = s.currentEventId || 'None';
    if (visitedEl) visitedEl.textContent = `${s.visitedEvents.length} events: [${s.visitedEvents.join(', ')}]`;
    if (tagsEl) tagsEl.textContent = s.storyTags.join(', ');
    if (stateFlagsEl) {
      stateFlagsEl.textContent = `Radio:${s.radioContact} | Power:${s.powerRestored} | Underground:${s.undergroundRouteFound} | Clue:${s.majorClueFound}`;
    }
  }

  showHitmarker() {
    if (!this.crosshair) return;
    this.crosshair.classList.remove('hit');
    void this.crosshair.offsetWidth;
    this.crosshair.classList.add('hit');
  }

  flashEmptyAmmo() {
    if (!this.ammoDisplay) return;
    this.ammoDisplay.classList.remove('empty-flash');
    void this.ammoDisplay.offsetWidth;
    this.ammoDisplay.classList.add('empty-flash');
  }

  showDamageFlash() {
    if (!this.damageVignette) return;
    if (this._damageFlashTimeout) {
      clearTimeout(this._damageFlashTimeout);
      this._damageFlashTimeout = null;
    }
    this.damageVignette.classList.remove('flash');
    this.damageVignette.style.opacity = '';
    void this.damageVignette.offsetWidth;
    this.damageVignette.classList.add('flash');

    // Auto-fade damage effect so it never stays stuck
    this._damageFlashTimeout = setTimeout(() => {
      if (this.damageVignette) {
        this.damageVignette.classList.remove('flash');
        this.damageVignette.style.opacity = '0';
      }
      this._damageFlashTimeout = null;
    }, 450);
  }

  showWaveBanner(title, subtitle = '') {
    if (!this.waveBanner) return;

    if (this.bannerTimeout) clearTimeout(this.bannerTimeout);

    this.waveTitle.textContent = title;
    this.waveSubtitle.textContent = subtitle;

    this.waveBanner.classList.add('visible');

    this.bannerTimeout = setTimeout(() => {
      this.waveBanner.classList.remove('visible');
    }, 2200);
  }

  showHealingAlert(text = '+35 HEALTH') {
    if (!this.healingBanner) return;
    if (this.healingTimeout) clearTimeout(this.healingTimeout);

    this.healingBanner.textContent = text;
    this.healingBanner.classList.add('visible');

    this.healingTimeout = setTimeout(() => {
      this.healingBanner.classList.remove('visible');
    }, 1800);
  }

  showGameOver(stats, onRetry) {
    if (!this.gameOverScreen) return;
    if (this.reloadPrompt) {
      this.reloadPrompt.style.display = 'none';
      this.reloadPrompt.style.opacity = '0';
    }
    this._lastIsMagEmpty = false;

    const titleEl = document.getElementById('game-over-title');
    const statsEl = document.getElementById('game-over-stats');
    const retryBtn = document.getElementById('retry-btn');

    if (titleEl) titleEl.textContent = "YOU DIDN'T MAKE IT";

    const operator = getCharacterById(this.selectedCharacter);

    if (statsEl) {
      statsEl.innerHTML = `
        <div class="stat-row"><span>Operator</span><strong>${operator.name} (${operator.title})</strong></div>
        <div class="stat-row"><span>Difficulty</span><strong>${stats.difficulty || 'Balanced'}</strong></div>
        <div class="stat-row"><span>Waves Survived</span><strong>${stats.wavesSurvived}</strong></div>
        <div class="stat-row"><span>Zombies Eliminated</span><strong>${stats.zombiesKilled}</strong></div>
        <div class="stat-row"><span>Time Survived</span><strong>${stats.timeSurvived}</strong></div>
      `;
    }

    if (retryBtn) {
      retryBtn.textContent = 'Try again';
      retryBtn.onclick = () => {
        this.gameOverScreen.classList.remove('visible');
        if (onRetry) onRetry(this.selectedDifficulty, this.selectedCharacter);
      };
    }

    this.gameOverScreen.classList.add('visible');
  }

  showVictory(stats, onRetry) {
    const recap = storyEngine.generatePersonalizedRecap(stats);
    this.showCampaignDebriefing(recap, () => {
      this.displayVictoryCard(stats, onRetry);
    });
  }

  displayVictoryCard(stats, onRetry) {
    if (!this.gameOverScreen) return;
    if (this.reloadPrompt) {
      this.reloadPrompt.style.display = 'none';
      this.reloadPrompt.style.opacity = '0';
    }
    this._lastIsMagEmpty = false;

    const titleEl = document.getElementById('game-over-title');
    const statsEl = document.getElementById('game-over-stats');
    const retryBtn = document.getElementById('retry-btn');

    if (titleEl) titleEl.textContent = "YOU SURVIVED THE AFTERTRACE";

    const operator = getCharacterById(this.selectedCharacter);

    if (statsEl) {
      statsEl.innerHTML = `
        <div class="stat-row"><span>Status</span><strong style="color:#2E7D7A">Island Cleared!</strong></div>
        <div class="stat-row"><span>Operator</span><strong>${operator.name} (${operator.title})</strong></div>
        <div class="stat-row"><span>Difficulty</span><strong>${stats.difficulty || 'Balanced'}</strong></div>
        <div class="stat-row"><span>Total Waves Completed</span><strong>${stats.wavesSurvived} / 5</strong></div>
        <div class="stat-row"><span>Zombies Eliminated</span><strong>${stats.zombiesKilled}</strong></div>
        <div class="stat-row"><span>Survival Duration</span><strong>${stats.timeSurvived}</strong></div>
      `;
    }

    if (retryBtn) {
      retryBtn.textContent = 'Play again';
      retryBtn.onclick = () => {
        this.gameOverScreen.classList.remove('visible');
        if (onRetry) onRetry(this.selectedDifficulty, this.selectedCharacter);
      };
    }

    this.gameOverScreen.classList.add('visible');
  }

  hideTitleScreen() {
    if (this.titleScreen) {
      this.titleScreen.classList.add('hidden');
    }
  }

  showTitleScreen(onStart) {
    if (this.titleScreen) {
      this.titleScreen.classList.remove('hidden');
      const startBtn = document.getElementById('start-game-btn');
      if (startBtn) {
        startBtn.onclick = () => {
          this.hideTitleScreen();
          const story = storyEngine.getStartingStory(this.selectedStartingStoryId);
          this.showStartingStoryCinematic(story, () => {
            if (onStart) onStart(this.selectedDifficulty, this.selectedCharacter);
          });
        };
      }
    }
  }

  // Alias for backward compatibility
  showStoryIntro(onComplete) {
    const story = storyEngine.getStartingStory(this.selectedStartingStoryId);
    this.showStartingStoryCinematic(story, onComplete);
  }
}
