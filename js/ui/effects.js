// Вібрація, звук, «+$N» і купюри при тапі.
import { state } from '../state.js';

const tg = window.Telegram?.WebApp;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

export function haptic(kind = 'light') {
  try {
    if (kind === 'success' || kind === 'error') tg?.HapticFeedback?.notificationOccurred(kind);
    else tg?.HapticFeedback?.impactOccurred(kind);
  } catch {}
}

// ── Звук (синтез, без файлів). AudioContext — тільки після першого дотику.
let ctx = null;
export function unlockAudio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) ctx = new AC();
  }
  if (ctx?.state === 'suspended') ctx.resume();
}

function beep(freq, dur, type = 'triangle', vol = 0.08, when = 0) {
  if (!ctx || !state.sound) return;
  const t = ctx.currentTime + when;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(ctx.destination);
  o.start(t);
  o.stop(t + dur);
}

export const sfx = {
  tap() { beep(880 + Math.random() * 120, 0.08); },
  buy() { beep(660, 0.09, 'square', 0.05); beep(990, 0.12, 'square', 0.05, 0.07); },
  fail() { beep(180, 0.15, 'sawtooth', 0.05); },
  win() { [523, 659, 784, 1046].forEach((f, i) => beep(f, 0.18, 'triangle', 0.08, i * 0.1)); },
};

// ── Пул елементів «+$N» і купюр
const POOL = 24;
let floats = [];
let bills = [];
let fi = 0;
let bi = 0;

export function initEffects(layer) {
  for (let i = 0; i < POOL; i++) {
    const f = document.createElement('div');
    f.className = 'float';
    layer.appendChild(f);
    floats.push(f);
    const b = document.createElement('div');
    b.className = 'bill';
    b.textContent = '💵';
    layer.appendChild(b);
    bills.push(b);
  }
}

function restart(el, cls) {
  el.classList.remove(cls);
  void el.offsetWidth; // перезапуск анімації
  el.classList.add(cls);
}

export function floatText(x, y, text) {
  const f = floats[fi++ % POOL];
  f.textContent = text;
  f.style.left = x + 'px';
  f.style.top = y + 'px';
  f.style.setProperty('--dx', (Math.random() * 40 - 20).toFixed(0) + 'px');
  restart(f, 'go');
  if (reduced) return;
  for (let i = 0; i < 2; i++) {
    const b = bills[bi++ % POOL];
    b.style.left = x + 'px';
    b.style.top = y + 'px';
    b.style.setProperty('--dx', (Math.random() * 160 - 80).toFixed(0) + 'px');
    b.style.setProperty('--rot', (Math.random() * 120 - 60).toFixed(0) + 'deg');
    restart(b, 'go');
  }
}

export function pulse(el) {
  if (!el || reduced) return;
  restart(el, 'pulse');
}
