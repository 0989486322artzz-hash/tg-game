// Нижнє меню, шторки «Прокачка» і «Мапа», магазин із вкладками.
import { state } from '../state.js';
import { RULES } from '../config.js';
import { UPGRADES, GROUPS } from '../data/upgrades.js';
import { LOCATIONS } from '../data/locations.js';
import * as E from '../engine.js';
import { renderMap } from './screens.js';

const $ = (id) => document.getElementById(id);
const rows = new Map();  // id → елементи рядка
const tabs = new Map();  // groupId → кнопка вкладки
let openSheet = null;
let activeTab = GROUPS[0].id;

export function initMenu({ onBuy }) {
  document.querySelectorAll('.nav button').forEach((b) =>
    b.addEventListener('click', () => toggle(b.dataset.sheet)));
  document.querySelectorAll('.sheet .close').forEach((b) =>
    b.addEventListener('click', () => toggle(null)));
  buildShop(onBuy);
}

export function toggle(id) {
  const target = id && openSheet !== id ? id : null;
  document.querySelectorAll('.sheet').forEach((s) => {
    const on = s.id === target;
    s.classList.toggle('open', on);
    s.setAttribute('aria-hidden', String(!on));
  });
  openSheet = target;
  if (target === 'map') renderMap();
  if (target === 'shop') renderShop();
}

export const isOpen = () => openSheet;

// Закриті прокачки — секрет: їх не видно взагалі. Вкладка без відкритих прокачок теж схована.
function visibleGroups() {
  return new Set(UPGRADES.filter((u) => E.isUnlocked(u)).map((u) => u.group));
}

function setTab(id) {
  const vis = visibleGroups();
  if (!vis.has(id)) id = GROUPS.find((g) => vis.has(g.id))?.id || GROUPS[0].id;
  activeTab = id;
  for (const [gid, t] of tabs) {
    t.classList.toggle('active', gid === id);
    t.classList.toggle('hidden', !vis.has(gid));
  }
  for (const u of UPGRADES) rows.get(u.id).el.classList.toggle('hidden', u.group !== id || !E.isUnlocked(u));
  $('shopList').scrollTop = 0;
}

// Після переїзду: показати нові прокачки й вкладки.
export function rebuildShop() {
  setTab(activeTab);
}

function buildShop(onBuy) {
  const bar = $('shopTabs');
  bar.innerHTML = '';
  for (const g of GROUPS) {
    const t = document.createElement('button');
    t.className = 'tab';
    t.innerHTML = `<span>${g.icon}</span>${g.name}<i class="dot hidden"></i>`;
    t.addEventListener('click', () => setTab(g.id));
    bar.appendChild(t);
    tabs.set(g.id, t);
  }

  const list = $('shopList');
  list.innerHTML = '';
  const locOrder = Object.fromEntries(LOCATIONS.map((l, i) => [l.id, i]));
  const sorted = [...UPGRADES].sort((a, b) =>
    (locOrder[a.unlock] - locOrder[b.unlock]) || (a.price - b.price));
  for (const u of sorted) {
    const el = document.createElement('button');
    el.className = 'up' + (u.type === 'boost' ? ' boost' : '');
    el.innerHTML = `<div class="ico">${u.icon}</div>
      <div><div class="name">${u.name}<span class="lvl"></span></div><div class="desc">${u.desc}</div></div>
      <div class="price"></div>`;
    el.addEventListener('click', () => {
      if (onBuy(u.id)) {
        el.classList.remove('bought'); void el.offsetWidth; el.classList.add('bought');
      }
    });
    list.appendChild(el);
    rows.set(u.id, { el, lvl: el.querySelector('.lvl'), price: el.querySelector('.price') });
  }
  const note = document.createElement('div');
  note.className = 'secret';
  note.textContent = '🔒 Нові прокачки відкриються далі — це секрет';
  list.appendChild(note);
  setTab(activeTab);
}

// Оновлює тільки класи й тексти, без перебудови DOM.
export function renderShop() {
  $('shopMoney').textContent = E.fmt(state.money);
  let anyCan = false;
  const tabCan = {};
  for (const u of UPGRADES) {
    const r = rows.get(u.id);
    const unlocked = E.isUnlocked(u);
    const maxed = E.isMaxed(u);
    const can = E.canBuy(u);
    anyCan ||= can;
    if (can) tabCan[u.group] = true;
    if (!unlocked) continue;
    r.el.classList.toggle('maxed', maxed);
    r.el.classList.toggle('can', can);
    const n = E.owned(u.id);
    r.lvl.textContent = n && !u.max ? ` ×${n}` : '';
    if (maxed) {
      r.price.textContent = '✓ Є';
    } else {
      r.price.textContent = `${E.fmt(E.price(u))} ${RULES.currency}`;
    }
  }
  for (const [gid, t] of tabs) t.querySelector('.dot').classList.toggle('hidden', !tabCan[gid]);
  $('shopDot').classList.toggle('hidden', !anyCan);
}
