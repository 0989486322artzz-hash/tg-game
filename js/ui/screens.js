// Відображення головного екрана, мапи й оверлеїв. Тільки читає state.
import { state } from '../state.js';
import { RULES } from '../config.js';
import { LEVELS } from '../data/levels.js';
import { LOCATIONS } from '../data/locations.js';
import * as E from '../engine.js';

const $ = (id) => document.getElementById(id);
const cur = RULES.currency;
const money = (n) => `${E.fmt(n)} ${cur}`;

let lastBg = '';
export function setBackground() {
  const loc = E.location();
  if (!loc) return;
  const key = loc.id;
  if (key === lastBg) return;
  lastBg = key;
  // Якщо картинки немає — видно запасний градієнт.
  $('bg').style.backgroundImage = `url("${loc.bg}"), ${loc.fallback}`;
}

export function renderMain() {
  const loc = E.location();
  const lvl = E.level();
  $('money').textContent = E.fmt(state.money);
  $('perTap').textContent = `+${E.fmt(E.tapValue())} ${cur} / тап`;
  $('perSec').textContent = `${E.fmt(E.perSecond())} ${cur} / с`;
  $('where').textContent = `${lvl.name} · ${loc ? loc.name : '—'}`;

  if (loc) {
    const got = Math.min(state.locEarned, loc.goal);
    $('goalLabel').textContent = `Заробити ${loc.where}`;
    $('goalNums').textContent = `${E.fmt(got)} / ${E.fmt(loc.goal)} ${cur}`;
    $('goalBar').style.transform = `scaleX(${(got / loc.goal).toFixed(4)})`;
  }

  const btn = $('moveBtn');
  if (E.goalReached() && !state.levelDone) {
    const next = E.nextLocation();
    btn.textContent = next ? `🚗 Поїхати ${next.to}` : `🏁 Завершити рівень «${lvl.name}»`;
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }

  $('soundBtn').textContent = state.sound ? '🔊' : '🔇';
}

export function renderMap() {
  const list = $('mapList');
  const html = [];
  LEVELS.forEach((lvl, li) => {
    html.push(`<div class="group-title">Рівень ${li + 1} · ${lvl.name}</div>`);
    if (lvl.locked || !lvl.locations.length) {
      html.push(`<div class="loc locked"><div class="thumb" style="background:#222;display:grid;place-items:center;font-size:24px">❔</div>
        <div><div class="name">${lvl.name}</div><div class="sub">Відкриється після ${LEVELS[li - 1]?.name || ''}</div></div><div class="st">🔒</div></div>`);
      return;
    }
    lvl.locations.forEach((id, i) => {
      const loc = LOCATIONS.find((l) => l.id === id);
      let cls = 'locked', st = '🔒', sub = `Ціль: ${money(loc.goal)}`;
      const done = li < state.levelIdx || (li === state.levelIdx && (i < state.locIdx || state.levelDone));
      const now = li === state.levelIdx && i === state.locIdx && !state.levelDone;
      if (done) { cls = 'done'; st = '✅'; sub = `Зароблено ${money(loc.goal)}`; }
      else if (now) { cls = 'current'; st = '📍'; sub = `${money(Math.min(state.locEarned, loc.goal))} з ${money(loc.goal)}`; }
      html.push(`<div class="loc ${cls}">
        <div class="thumb" style='background-image:url("${loc.bg}"), ${loc.fallback}'></div>
        <div><div class="name">${loc.name}</div><div class="sub">${sub}</div></div>
        <div class="st">${st}</div></div>`);
    });
  });
  list.innerHTML = html.join('');
}

// ── Оверлеї
export function showOverlay(html, btnText, onClose) {
  const ov = $('overlay');
  $('overlayCard').innerHTML = `${html}<button class="btn" id="ovBtn">${btnText}</button>`;
  ov.classList.remove('hidden');
  $('ovBtn').addEventListener('click', () => {
    ov.classList.add('hidden');
    onClose?.();
  }, { once: true });
}

export function travelHtml(loc) {
  return `<div class="road"><span class="car">🚗</span></div>
    <h3>Білий їде ${loc.to}!</h3>
    <p>Новий Ланос, нова ціль: заробити <b>${money(loc.goal)}</b> ${loc.where}. Нові прокачки вже відкриті.</p>`;
}

export function levelDoneHtml(lvl) {
  const next = LEVELS[state.levelIdx + 1];
  const last = E.levelLocations().at(-1);
  return `<div class="big">🏆</div>
    <h3>${lvl.name} підняв ${money(last.goal)} ${last.where}!</h3>
    <p>Рівень «${lvl.name}» пройдено. ${next ? `Далі: <b>${next.name}</b> — скоро.` : ''}</p>`;
}

export function offlineHtml(gain) {
  return `<div class="big">🖨️</div>
    <h3>Поки тебе не було…</h3>
    <p>Машинки й Ланоси заробили <b>${money(gain)}</b>.</p>`;
}
