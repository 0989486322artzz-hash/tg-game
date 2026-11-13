// Єдине джерело правди + збереження (Telegram CloudStorage → localStorage).
import { RULES } from './config.js';

const tg = window.Telegram?.WebApp;

export function freshState() {
  return {
    version: RULES.saveVersion,
    money: 0,          // гроші на руках
    total: 0,          // зароблено за всю гру
    levelIdx: 0,       // поточний учасник
    locIdx: 0,         // поточна локація в рівні
    locEarned: 0,      // зароблено в поточній локації (для цілі)
    owned: {},         // { upgradeId: кількість }
    levelDone: false,  // рівень пройдено
    sound: true,
    lastSeen: Date.now(),
  };
}

export const state = freshState();

function migrate(s) {
  if (!s || typeof s !== 'object') return null;
  // тут з'являтимуться перетворення старих версій збереження
  return { ...freshState(), ...s, version: RULES.saveVersion };
}

function hasCloud() {
  return !!(tg?.CloudStorage && tg.isVersionAtLeast?.('6.9'));
}

function readLocal() {
  try { return JSON.parse(localStorage.getItem(RULES.saveKey)); } catch { return null; }
}

function readCloud() {
  return new Promise((resolve) => {
    if (!hasCloud()) return resolve(null);
    try {
      tg.CloudStorage.getItem(RULES.saveKey, (err, val) => {
        if (err || !val) return resolve(null);
        try { resolve(JSON.parse(val)); } catch { resolve(null); }
      });
    } catch { resolve(null); }
    setTimeout(() => resolve(null), 2500); // не чекати вічно
  });
}

export async function load() {
  const [cloud, local] = await Promise.all([readCloud(), Promise.resolve(readLocal())]);
  // беремо новіше збереження
  const pick = [cloud, local].filter(Boolean).sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0))[0];
  const data = migrate(pick);
  if (data) Object.assign(state, data);
  return !!data;
}

export function save() {
  state.lastSeen = Date.now();
  const json = JSON.stringify(state);
  try { localStorage.setItem(RULES.saveKey, json); } catch {}
  if (hasCloud()) {
    try { tg.CloudStorage.setItem(RULES.saveKey, json, () => {}); } catch {}
  }
}

export function reset() {
  Object.assign(state, freshState());
  state.owned = {};
  save();
}
