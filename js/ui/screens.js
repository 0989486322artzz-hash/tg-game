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
  $('bgBlur').style.backgroundImage = `url("${loc.bg}"), ${loc.fallback}`;
}

export function renderMain() {
  const loc = E.location();
  const lvl = E.level();
  $('money').textContent = E.fmt(state.money);
  $('perTap').textContent = `+${E.fmt(E.tapValue())} ${cur} / тап`;
  $('perSec').textContent = `${E.fmt(E.perSecond())} ${cur} / с`;
  $('where').textContent = `${lvl.name} · ${loc ? loc.name : '—'}`;
  $('hint').textContent = `Тапай — годуй ${E.friend()?.gen || lvl.name} грошима 💵`;

  if (loc) {
    const got = Math.min(E.goalProgress(), loc.goal);
    const next = E.nextLocation();
    $('goalLabel').textContent = RULES.travelSpendsGoal
      ? (next ? `Накопичити на дорогу ${next.to}` : `Накопичити ${loc.where}`)
      : `Заробити ${loc.where}`;
    $('goalNums').textContent = `${E.fmt(got)} / ${E.fmt(loc.goal)} ${cur}`;
    $('goalBar').style.transform = `scaleX(${(got / loc.goal).toFixed(4)})`;
  }

  const btn = $('moveBtn');
  if (E.goalReached() && !state.levelDone) {
    const next = E.nextLocation();
    const cost = RULES.travelSpendsGoal ? ` · −${money(loc.goal)}` : '';
    btn.textContent = next ? `🚗 Поїхати ${next.to}${cost}` : `🏁 Завершити рівень «${lvl.name}»${cost}`;
    btn.classList.toggle('final', !next);
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }

  $('soundBtn').textContent = state.sound ? '🔊' : '🔇';
}

export function renderMap() {
  const list = $('mapList');
  const html = [];
  // Наступні друзі й локації — секрет: показуємо тільки те, до чого вже дійшли.
  LEVELS.forEach((lvl, li) => {
    if (li > state.levelIdx) return;
    html.push(`<div class="group-title">Рівень ${li + 1} · ${lvl.name}</div>`);
    lvl.locations.forEach((id, i) => {
      if (li === state.levelIdx && i > state.locIdx) return;
      const loc = LOCATIONS.find((l) => l.id === id);
      let cls = 'locked', st = '🔒', sub = `Ціль: ${money(loc.goal)}`;
      const done = li < state.levelIdx || (li === state.levelIdx && (i < state.locIdx || state.levelDone));
      const now = li === state.levelIdx && i === state.locIdx && !state.levelDone;
      if (done) { cls = 'done'; st = '✅'; sub = `Накопичено ${money(loc.goal)}`; }
      else if (now) { cls = 'current'; st = '📍'; sub = `${money(Math.min(E.goalProgress(), loc.goal))} з ${money(loc.goal)}`; }
      html.push(`<div class="loc ${cls}">
        <div class="thumb" style='background-image:url("${loc.bg}"), ${loc.fallback}'></div>
        <div><div class="name">${loc.name}</div><div class="sub">${sub}</div></div>
        <div class="st">${st}</div></div>`);
    });
  });
  html.push(`<div class="secret">🔒 Далі — секрет. Накопичуй, щоб дізнатися.</div>`);
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

function newUpgradesLine(loc) {
  const n = E.newUpgradesAt(loc.id);
  return n ? `<div class="newups">🔓 Відкрито нових прокачок: <b>${n}</b></div>` : '';
}

export function travelHtml(loc) {
  return `<div class="road"><span class="car">🚗</span></div>
    <h3>${E.level().name} їде ${loc.to}!</h3>
    <p>Нова ціль: накопичити <b>${money(loc.goal)}</b> ${loc.where}.</p>${newUpgradesLine(loc)}`;
}

// Перехід до нового друга (prev — рівень, який щойно пройшли).
export function newFriendHtml(prev) {
  const loc = E.location();
  return `<div class="big">🏆</div>
    <h3>Рівень «${prev.name}» пройдено!</h3>
    <p>Новий друг: <b>${E.level().name}</b> 🎉<br>Він чекає ${loc.where}. Усі прокачки залишаються з тобою.</p>
    <p>Ціль: накопичити <b>${money(loc.goal)}</b>.</p>${newUpgradesLine(loc)}`;
}

export function gameEndHtml() {
  return `<div class="big">👑</div>
    <h3>Усіх друзів нагодовано!</h3>
    <p>Нові друзі й локації — скоро. Слідкуй за оновленнями.</p>`;
}

export function offlineHtml(gain) {
  return `<div class="big">🖨️</div>
    <h3>Поки тебе не було…</h3>
    <p>Машинки й Ланоси заробили <b>${money(gain)}</b>.</p>`;
}
