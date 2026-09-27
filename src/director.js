import { getDirectorPayload } from './gameState.js';

// ─── System Prompt ───

const SYSTEM_PROMPT = `You are the Island Director for a survival narrative game called AFTERTRACE.

You will receive a JSON object describing: the player's resources, a six-trait
behavioral profile built from their choices, a trust score between the player
and each NPC, and a relationship score between each pair of NPCs.

Your job each turn is to return ONE JSON object, and nothing else, with this
shape:

{
  "narration": "2-4 sentences of second-person present-tense narration",
  "npc_line": "one line of dialogue from an NPC, or null",
  "npc_name": "name of the speaking NPC, or null",
  "player_stat_deltas": { "risk": 0, "trust": 0, "empathy": 0, "curiosity": 0, "hoarding": 0, "planning": 0 },
  "resource_deltas": { "food": 0, "water": 0, "health": 0 },
  "npc_trust_deltas": { "maya": 0, "leo": 0, "arun": 0, "priya": 0 },
  "npc_relationship_deltas": { "maya_leo": 0, "maya_arun": 0, "leo_arun": 0 },
  "world_flag_updates": {},
  "location": "beach"
}

Rules:
- Never invent a callback to an event that isn't present in world_flags or
  explored_locations — only reference things the state confirms happened.
- Roughly one turn in three, prefer generating a "background beat": something
  that happened between two NPCs the player did not witness directly,
  delivered as an offhand remark, a found note, or a change noticed the next
  morning. This is the signature beat of the game — do not skip it too often.
- Keep narration tight. No more than 4 sentences. No purple prose.
- If profile stats are extreme in one direction (any trait at 8+), let
  dialogue from NPCs start to explicitly name that pattern in the player's
  behavior, the way a person who's noticed a habit would.
- Escalate world_flags gradually across the 7 days — the mystery should
  thicken, not resolve early.
- Return ONLY the JSON object. No prose before or after it.`;

// ─── API Configuration ───

function getApiKey() {
  // Check URL param first, then localStorage
  const params = new URLSearchParams(window.location.search);
  const urlKey = params.get('key');
  if (urlKey) return urlKey;

  return localStorage.getItem('aftertrace_api_key') || null;
}

function getApiUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('api_url') || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
}

// ─── JSON Repair ───

function repairJSON(raw) {
  if (!raw || typeof raw !== 'string') return null;

  let text = raw.trim();

  // Strip markdown code fences
  text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  text = text.trim();

  // Try direct parse
  try {
    return JSON.parse(text);
  } catch (e) {
    // ignore
  }

  // Try extracting first {...} block
  const match = text.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      return JSON.parse(match[0]);
    } catch (e) {
      // ignore
    }
  }

  return null;
}

// ─── Schema Validation ───

function validateResponse(obj) {
  if (!obj || typeof obj !== 'object') return false;
  if (typeof obj.narration !== 'string' || obj.narration.length === 0) return false;
  if (!obj.player_stat_deltas || typeof obj.player_stat_deltas !== 'object') return false;

  // Validate stat deltas are numbers
  for (const key of ['risk', 'trust', 'empathy', 'curiosity', 'hoarding', 'planning']) {
    if (obj.player_stat_deltas[key] !== undefined && typeof obj.player_stat_deltas[key] !== 'number') {
      return false;
    }
  }

  // Fill in missing fields with defaults
  if (!obj.npc_line) obj.npc_line = null;
  if (!obj.npc_name) obj.npc_name = null;
  if (!obj.resource_deltas) obj.resource_deltas = { food: 0, water: 0, health: 0 };
  if (!obj.npc_trust_deltas) obj.npc_trust_deltas = { maya: 0, leo: 0, arun: 0, priya: 0 };
  if (!obj.npc_relationship_deltas) obj.npc_relationship_deltas = { maya_leo: 0, maya_arun: 0, leo_arun: 0 };
  if (!obj.world_flag_updates) obj.world_flag_updates = {};
  if (!obj.location) obj.location = 'beach';

  return true;
}

// ─── Main Export ───

export async function getDirectorResponse(state, action, fallbackFn) {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.log('[Director] No API key configured, using fallback.');
    return null; // caller uses fallback
  }

  const payload = getDirectorPayload();
  const userMessage = `The player chose action: "${action}" on Day ${payload.day}.

Current game state:
${JSON.stringify(payload, null, 2)}

Generate the event for this action.`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const url = `${getApiUrl()}?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: [{
          parts: [{ text: userMessage }]
        }],
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 1024,
          responseMimeType: 'application/json'
        }
      })
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`[Director] API returned ${response.status}, using fallback.`);
      return null;
    }

    const data = await response.json();

    // Extract text from Gemini response format
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.warn('[Director] No text in response, using fallback.');
      return null;
    }

    const parsed = repairJSON(text);
    if (!parsed) {
      console.warn('[Director] JSON repair failed, using fallback.');
      return null;
    }

    if (!validateResponse(parsed)) {
      console.warn('[Director] Validation failed, using fallback.');
      return null;
    }

    console.log('[Director] AI response accepted.');
    return parsed;

  } catch (err) {
    if (err.name === 'AbortError') {
      console.warn('[Director] Request timed out (6s), using fallback.');
    } else {
      console.warn('[Director] Network error, using fallback:', err.message);
    }
    return null;
  }
}
