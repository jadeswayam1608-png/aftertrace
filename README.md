# AFTERTRACE — 3D Third-Person Zombie Survival Shooter

> **A high-octane 3D survival-horror shooter built with Three.js, featuring a 60-scenario starting premise system, controlled procedural random narrative engine, XP/weapon progression, and full mobile + desktop controls.**

---

## 🎮 Game Overview

**AFTERTRACE** drops players onto the quarantined coast of Sector 4, an island overrun by mutated bio-hazards following a catastrophic containment breach.

At the beginning of each run, players choose **one of 60 distinct starting story premises** (e.g., *The Last Radio Signal*, *The Abandoned Safehouse*, *The Hospital Transmission*, *The Broken Bridge*, *The Last Beacon*). Once chosen, **the random story engine takes over**: subsequent events, tactical checkpoints, emergencies, and revelations are dynamically and coherently selected using a seeded random engine with anti-repetition rules and tag synergy—culminating in a personalized campaign debriefing unique to that run.

---

## ✨ Key Features

### 1. 📖 60 Starting Story Scenarios
- **Single Meaningful Beginning:** Choose from 60 unique opening narratives with distinct themes (Radio, Mystery, Exploration, Medical, Military, Coastal, Subterranean, etc.).
- **Foundation of Your Run:** Your initial choice initializes the narrative state, active tags, and equipment profile.
- **Never Repetitive:** The remaining 59 choices are dismissed for that run—the engine drives all subsequent narrative developments automatically.

### 2. 🎲 Controlled Random Story Engine
- **Seeded Procedural Narrative:** Every run receives a unique seed (e.g., `RUN-84920`) using a 32-bit Mulberry32 PRNG.
- **Same Start ≠ Same Story:** Two runs starting from *The Hospital Transmission* can diverge into entirely different story paths, discoveries, and endings.
- **Anti-Repetition & Coherence:** Events filter by wave intensity curve (early recon → mid infrastructure → late crisis → finale extraction), prevent duplicates (`onceOnly = true`), and enforce thematic continuity.
- **Narrative Audio & Speech Narration:** Procedural Web Audio soundscapes (radio static, underground echoes, mountain storms, helicopter rotors) crossfade on every event, with Web Speech API reading the narrative aloud.

### 3. 🔫 Visceral 3D Combat & Gunplay
- **3D Star-Burst Muzzle Flash:** Dynamic star-burst emissive flashes positioned at the gun barrel.
- **High-Velocity Bullet Tracers:** Glowing golden tracer slugs traveling at 360 m/s along true raycast trajectories.
- **Kinetic Impact & Blood Splatter:** Dual particle bursts featuring golden kinetic ricochet sparks (`0xFFEE55`) and crimson fluid droplets (`0x8A0303`).
- **Telegraphed Attacks:** Zombies feature windup delays and safe spawn radiuses ($\ge 22\text{m}$) to eliminate unfair instant damage.
- **Sniper Optical Scope Overlay:** Right-click aiming with the AWP activates a full-screen optical reticle with precision crosshairs and optical lens darkening.

### 4. 🎖️ XP, Leveling & Weapon Progression
- **Earn XP from Kills & Story:** Normal infected award +20 XP, headshots award +35 XP, and boss abominations award +100 XP.
- **Arsenal Unlocks:**
  - **Level 1:** M4A1 Tactical Assault Rifle (30-round mag, reliable automatic fire)
  - **Level 2:** MP5 Tactical Submachine Gun (high fire-rate close-quarters weapon)
  - **Level 3:** Benelli M4 Tactical Shotgun (8-pellet buckshot spread with heavy knockback)
  - **Level 4:** AWP Precision Sniper Rifle (high-damage bolt-action with optical scope)
  - **Level 5:** Vulcan Rotary Minigun (100-round capacity high-speed suppression)

### 5. 📱 Full Mobile & Desktop Support
- **Desktop:** First/third-person camera rotation with pointer lock, smooth WASD movement, Spacebar jump, Keys 1–5 or Q for weapon swapping, and R for reloading.
- **Mobile Touch Controls:** Responsive virtual thumbstick fixed to viewport touch coordinates, plus dedicated touch buttons for **[AIM]**, **[RELOAD]**, **[JUMP]**, and **[SHOOT]**, along with a top-right quick-switch weapon button.

### 6. 🌅 High-Fidelity 3D Environment & Shadows
- **High-Contrast Directional Sun:** 2.5 intensity sunlight casting crisp contact shadows with $2048 \times 2048$ shadow maps.
- **Procedural Organic Foliage:** Multi-tiered alpine conifers, wind-bent maritime pines, and multi-lobed hardwood canopy trees that cast and receive shadows.
- **Sinusoidal Terrain:** Organic terrain elevation variation with procedural grass and path canvas textures.

### 7. 🏆 Personalized Campaign Epilogues
- Context-aware debriefing dossiers synthesized at the end of every run.
- Explicitly references the starting story, milestones actually achieved (underground routes mapped, power grid restored, antibodies secured, allies saved), total kills, waves survived, and final level.

---

## 🕹️ Controls

| Action | Desktop Controls | Mobile Controls |
| :--- | :--- | :--- |
| **Move** | `W` / `A` / `S` / `D` | Left Virtual Joystick |
| **Look / Aim** | Mouse Movement | Right Screen Drag |
| **Fire Weapon** | Left Mouse Button | `[ SHOOT ]` Button |
| **Aim Down Sights** | Right Mouse Button | `[ AIM ]` Button |
| **Jump** | `Spacebar` | `[ JUMP ]` Button |
| **Reload** | `R` (when magazine empty) | `[ RELOAD ]` Button |
| **Switch Weapon** | Keys `1`, `2`, `3`, `4`, `5` or `Q` | Tap Weapon Card (Top-Right) |
| **Fullscreen** | `F` Key | Top-Left Fullscreen Icon |
| **Dev Story Debug** | `F9` or `~` Key | Title Screen `STORY DEBUG` |

---

## 🚀 Quick Start / Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)

### Installation
```bash
# 1. Clone or extract the project repository
cd aftertrace

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open your browser at:
`http://localhost:5173`

### Production Build
```bash
# Compile optimized bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```text
aftertrace/
├── index.html                   # Main HTML layout, HUD, overlays, and modals
├── style.css                    # Tactical UI styles, animations, responsive rules
├── package.json                 # Project dependencies (Three.js, Vite)
├── vite.config.js               # Vite build and development configuration
├── public/
│   └── assets/
│       ├── character.png        # Canonical hero protagonist artwork
│       ├── zombie.png           # 3D zombie visual texture reference
│       ├── props.jpg            # Environmental atlas
│       ├── skybox.jpg           # Sunset skydome backdrop
│       └── models/              # Optional 3D asset bundles
├── src/
│   ├── main.js                  # Application entry point
│   ├── data/
│   │   ├── startingStories.js   # Exactly 60 starting story premises
│   │   ├── storyEvents.js       # Large pool of dynamic follow-up narrative events
│   │   ├── storyEndings.js      # Contextual ending archetypes & epilogue generators
│   │   └── progressionConfig.js # XP levels, thresholds, and weapon unlock tables
│   ├── narrative/
│   │   ├── storyEngine.js       # Core random story engine (seeded PRNG, weights, anti-repetition)
│   │   ├── narrativeAudioManager.js # Procedural Web Audio soundscapes & crossfading
│   │   └── narrationManager.js  # Web Speech API text-to-speech manager
│   └── shooter/
│       ├── game.js              # Primary 3D game loop, callbacks, and wave handling
│       ├── player.js            # Player physics, health, camera rig, and shooting raycasts
│       ├── characterModel.js    # Procedural 3D hero model & zombie models with hit colliders
│       ├── zombie.js            # Zombie AI states (spawn, wander, chase, attack, hurt, death)
│       ├── waveManager.js       # Wave rounds, zombie spawner, safe radius calculation
│       ├── weapons.js           # 5 weapon definitions, firing rates, spread, and damage
│       ├── progression.js       # XP tracking, level-ups, and stats recorder
│       ├── props.js             # 3D island terrain, foliage, lighting, and health drops
│       ├── characters.js        # Playable operator character traits
│       ├── difficulty.js        # Easy / Medium / Hard balance presets
│       ├── input.js             # Mouse pointer lock, keyboard, and virtual touch joystick
│       └── hud.js               # Tactical HUD, 60-story selector, and debug panel
```

---

## 🌐 Deploying to GitHub Pages

1. In `vite.config.js`, ensure the `base` path matches your repository name if hosting in a subpath:
   ```javascript
   export default defineConfig({
     base: './', // Ensures relative asset paths
     // ...
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the contents of the `dist/` directory to your `gh-pages` branch, or configure GitHub Actions to automatically deploy on push.

---

## 📜 License
This project is open-source and available under the MIT License.
