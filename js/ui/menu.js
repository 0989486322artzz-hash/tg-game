// Нижнє меню, шторки «Прокачка» і «Мапа», список покращень.
import { state } from '../state.js';
import { RULES } from '../config.js';
import { UPGRADES } from '../data/upgrades.js';
import { LOCATIONS } from '../data/locations.js';
import * as E from '../engine.js';
import { renderMap } from './screens.js';

const $ = (id) => document.getElementById(id);
const rows = new Map(); // id → елементи рядка
let openSheet = null;

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

function buildShop(onBuy) {
  const list = $('shopList');
  list.innerHTML = '';
  let group = null;
  for (const u of UPGRADES) {
    if (u.unlock !== group) {
      group = u.unlock;
      const loc = LOCATIONS.find((l) => l.id === group);
      const t = document.createElement('div');
      t.className = 'group-title';
      t.textContent = loc ? loc.name : group;
      list.appendChild(t);
    }
    const el = document.createElement('button');
    el.className = 'up';
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
}

// Оновлює тільки класи й тексти, без перебудови DOM.
export function renderShop() {
  $('shopMoney').textContent = E.fmt(state.money);
  let anyCan = false;
  for (const u of UPGRADES) {
    const r = rows.get(u.id);
    const unlocked = E.isUnlocked(u);
    const maxed = E.isMaxed(u);
    const can = E.canBuy(u);
    anyCan ||= can;
    r.el.classList.toggle('locked', !unlocked);
    r.el.classList.toggle('maxed', maxed);
    r.el.classList.toggle('can', can);
    const n = E.owned(u.id);
    r.lvl.textContent = n && !u.max ? ` ×${n}` : '';
    if (!unlocked) {
      const loc = LOCATIONS.find((l) => l.id === u.unlock);
      r.price.textContent = `🔒 ${loc?.name || ''}`;
    } else if (maxed) {
      r.price.textContent = '✓ Є';
    } else {
      r.price.textContent = `${E.fmt(E.price(u))} ${RULES.currency}`;
    }
  }
  $('shopDot').classList.toggle('hidden', !anyCan);
}
