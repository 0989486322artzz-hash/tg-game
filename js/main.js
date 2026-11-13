// Запуск гри: Telegram, завантаження, цикл, події.
import { RULES } from './config.js';
import { state, load, save, reset } from './state.js';
import * as E from './engine.js';
import { setBackground, renderMain, showOverlay, travelHtml, levelDoneHtml, offlineHtml } from './ui/screens.js';
import { initMenu, renderShop, toggle } from './ui/menu.js';
import { initEffects, floatText, haptic, sfx, unlockAudio, pulse } from './ui/effects.js';

const tg = window.Telegram?.WebApp;
const $ = (id) => document.getElementById(id);
const DEBUG = new URLSearchParams(location.search).has('debug');
let timeScale = 1;

function initTelegram() {
  if (!tg) return;
  try {
    tg.ready();
    tg.expand();
    tg.disableVerticalSwipes?.();
    tg.setHeaderColor?.('#0b0f0c');
    tg.setBackgroundColor?.('#0b0f0c');
    tg.enableClosingConfirmation?.();
  } catch {}
}

// ── Тап по сцені
function onTap(e) {
  if (state.levelDone) return;
  unlockAudio();
  const v = E.tap();
  const r = $('app').getBoundingClientRect();
  floatText(e.clientX - r.left, e.clientY - r.top, `+${E.fmt(v)} $`);
  haptic('light');
  sfx.tap();
  $('scene').classList.add('tapped');
  pulse($('money').parentElement);
  renderMain();
}

function onBuy(id) {
  unlockAudio();
  if (E.buy(id)) {
    haptic('medium');
    sfx.buy();
    renderMain();
    renderShop();
    save();
    return true;
  }
  haptic('error');
  sfx.fail();
  return false;
}

function onMove() {
  const res = E.advance();
  if (!res) return;
  toggle(null);
  save();
  haptic('success');
  sfx.win();
  if (res === 'location') {
    setBackground();
    renderMain();
    showOverlay(travelHtml(E.location()), 'Погнали! 💵');
  } else {
    renderMain();
    showOverlay(levelDoneHtml(E.level()), 'Круто!');
  }
}

// ── Цикл
let last = performance.now();
let acc = 0;
let saveAcc = 0;
function frame(now) {
  const dt = ((now - last) / 1000) * timeScale;
  last = now;
  E.tick(Math.min(dt, RULES.maxDt * timeScale));
  acc += dt;
  saveAcc += dt / timeScale;
  if (acc >= 0.1) { // рендер ~10 разів/с
    acc = 0;
    renderMain();
    renderShop();
    if (DEBUG) renderDebug();
  }
  if (saveAcc >= RULES.autosaveSec) { saveAcc = 0; save(); }
  requestAnimationFrame(frame);
}

// ── Debug (?debug=1)
window.renderGameToText = () => JSON.stringify({
  money: Math.floor(state.money), total: Math.floor(state.total),
  level: E.level()?.name, location: E.location()?.name,
  locEarned: Math.floor(state.locEarned), goal: E.location()?.goal,
  tap: E.tapValue(), perSec: E.perSecond(), owned: state.owned, levelDone: state.levelDone,
});

function renderDebug() {
  const d = $('debug');
  const txt = d.querySelector('pre');
  if (txt) txt.textContent = window.renderGameToText().replace(/,"/g, ',\n"');
}

function initDebug() {
  const d = $('debug');
  d.classList.remove('hidden');
  d.innerHTML = `<pre></pre>
    <button data-a="m">+1000 $</button><button data-a="t">час ×10</button><button data-a="r">скинути</button>`;
  d.addEventListener('click', (e) => {
    const a = e.target.dataset?.a;
    if (a === 'm') { E.earn(1000); }
    if (a === 't') { timeScale = timeScale === 1 ? 10 : 1; e.target.textContent = `час ×${timeScale === 1 ? 10 : 1}`; }
    if (a === 'r') { reset(); location.reload(); }
  });
}

// ── Старт
async function start() {
  initTelegram();
  initEffects($('fx'));
  initMenu({ onBuy });
  await load();

  const gain = E.applyOffline(state.lastSeen);
  setBackground();
  renderMain();
  renderShop();

  $('scene').addEventListener('pointerdown', onTap);
  $('moveBtn').addEventListener('click', onMove);
  $('soundBtn').addEventListener('click', () => {
    state.sound = !state.sound;
    unlockAudio();
    renderMain();
    save();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) save();
    else last = performance.now();
  });
  window.addEventListener('pagehide', save);
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  if (gain > 0) showOverlay(offlineHtml(gain), 'Забрати 💵');
  else if (state.levelDone) showOverlay(levelDoneHtml(E.level()), 'Ок');

  if (DEBUG) initDebug();
  save();
  requestAnimationFrame((t) => { last = t; requestAnimationFrame(frame); });
}

start();
