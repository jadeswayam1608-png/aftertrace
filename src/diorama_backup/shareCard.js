// shareCard.js — Generates a downloadable 9:16 phone-ready personality result card
import { TRAIT_NAMES, NPCS } from './constants.js';

export function createShareCard(state, archetype) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 1920);
  bgGrad.addColorStop(0, '#1B2026');
  bgGrad.addColorStop(0.5, '#22252A');
  bgGrad.addColorStop(1, '#15171A');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1920);

  // Outer decorative frame
  ctx.strokeStyle = '#E8DCC8';
  ctx.lineWidth = 3;
  ctx.strokeRect(60, 60, 960, 1800);

  ctx.strokeStyle = 'rgba(232, 220, 200, 0.2)';
  ctx.lineWidth = 1;
  ctx.strokeRect(76, 76, 928, 1768);

  // Top header branding
  ctx.fillStyle = '#E8DCC8';
  ctx.font = '700 36px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '8px';
  ctx.fillText('AFTERTRACE', 540, 160);

  ctx.fillStyle = '#2E7D7A';
  ctx.font = '500 22px "Inter", sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('7 DAYS SURVIVED • ISLAND PSYCHOMETRIC PROFILE', 540, 210);

  // Divider
  ctx.strokeStyle = 'rgba(46, 125, 122, 0.4)';
  ctx.beginPath();
  ctx.moveTo(180, 260);
  ctx.lineTo(900, 260);
  ctx.stroke();

  // "YOU BECAME" label
  ctx.fillStyle = 'rgba(244, 239, 230, 0.7)';
  ctx.font = '600 28px "Space Grotesk", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('YOU BECAME', 540, 360);

  // Archetype title
  ctx.fillStyle = '#C15A3A';
  ctx.font = '700 76px "Space Grotesk", sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText(archetype.name, 540, 460);

  // Archetype description (wrapped)
  ctx.fillStyle = '#F4EFE6';
  ctx.font = '400 30px "Inter", sans-serif';
  ctx.letterSpacing = '0px';
  wrapText(ctx, archetype.description, 540, 540, 800, 48);

  // Trait bars section header
  const traitStartY = 800;
  ctx.fillStyle = '#E8DCC8';
  ctx.font = '700 26px "Space Grotesk", sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('BEHAVIORAL TRAIT MATRIX', 540, traitStartY);

  // 6 Trait bars
  TRAIT_NAMES.forEach((trait, index) => {
    const y = traitStartY + 70 + (index * 80);
    const val = state.profile[trait] || 0;
    const isDominant = trait === archetype.trait;

    // Label
    ctx.textAlign = 'left';
    ctx.font = isDominant ? '700 24px "Space Grotesk", sans-serif' : '500 22px "Space Grotesk", sans-serif';
    ctx.fillStyle = isDominant ? '#C15A3A' : '#F4EFE6';
    ctx.fillText(trait.toUpperCase(), 160, y + 22);

    // Track
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    roundRect(ctx, 360, y, 460, 28, 14, true, false);

    // Fill
    const fillWidth = Math.max(14, (val / 10) * 460);
    ctx.fillStyle = isDominant ? '#C15A3A' : '#2E7D7A';
    roundRect(ctx, 360, y, fillWidth, 28, 14, true, false);

    // Score number
    ctx.textAlign = 'right';
    ctx.fillStyle = isDominant ? '#C15A3A' : '#E8DCC8';
    ctx.font = '700 24px "Inter", sans-serif';
    ctx.fillText(`${val}/10`, 900, y + 22);
  });

  // Survivor Trust Section
  const trustStartY = 1380;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#E8DCC8';
  ctx.font = '700 24px "Space Grotesk", sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('SURVIVOR PERCEPTION', 540, trustStartY);

  const npcKeys = Object.keys(NPCS);
  const colWidth = 800 / npcKeys.length;
  npcKeys.forEach((key, i) => {
    const npc = NPCS[key];
    const trust = state.npc_trust[key] || 0;
    const x = 180 + (i * colWidth) + (colWidth / 2);
    const y = trustStartY + 60;

    let sentiment = 'Neutral';
    let color = '#E8DCC8';
    if (trust >= 10) { sentiment = 'Trusted'; color = '#2E7D7A'; }
    else if (trust >= 5) { sentiment = 'Ally'; color = '#2E7D7A'; }
    else if (trust < -5) { sentiment = 'Distrusted'; color = '#C15A3A'; }

    ctx.textAlign = 'center';
    ctx.fillStyle = '#F4EFE6';
    ctx.font = '700 22px "Space Grotesk", sans-serif';
    ctx.fillText(npc.name, x, y);

    ctx.fillStyle = color;
    ctx.font = '500 18px "Inter", sans-serif';
    ctx.fillText(sentiment, x, y + 32);

    ctx.fillStyle = 'rgba(244, 239, 230, 0.6)';
    ctx.font = '400 16px "Inter", sans-serif';
    ctx.fillText(`${trust >= 0 ? '+' : ''}${trust}`, x, y + 56);
  });

  // Footer quote & watermark
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(244, 239, 230, 0.5)';
  ctx.font = 'italic 20px "Inter", sans-serif';
  ctx.fillText('"You never saw any of this happen. The island did."', 540, 1680);

  ctx.fillStyle = 'rgba(232, 220, 200, 0.4)';
  ctx.font = '500 18px "Space Grotesk", sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText('PLAY AT AFTERTRACE • 10-MIN SURVIVAL SIMULATION', 540, 1740);

  return canvas;
}

export function downloadShareCard(state, archetype) {
  const canvas = createShareCard(state, archetype);
  
  canvas.toBlob((blob) => {
    if (!blob) return;

    // Use Web Share API if available with files
    const file = new File([blob], 'aftertrace-ending.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({
        files: [file],
        title: `AFTERTRACE: I became ${archetype.name}`,
        text: `I survived 7 days on the island in AFTERTRACE. You became: ${archetype.name}.`
      }).catch(() => {
        triggerDownload(blob);
      });
    } else {
      triggerDownload(blob);
    }
  }, 'image/png');
}

function triggerDownload(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'aftertrace-ending.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let curY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, curY);
      line = words[n] + ' ';
      curY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, curY);
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}
