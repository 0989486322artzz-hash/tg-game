// Ігрова логіка. Без DOM — тільки state і дані.
import { RULES } from './config.js';
import { state } from './state.js';
import { LEVELS } from './data/levels.js';
import { LOCATIONS } from './data/locations.js';
import { UPGRADES } from './data/upgrades.js';

const locById = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));

export const level = () => LEVELS[state.levelIdx];
export const levelLocations = () => (level()?.locations || []).map((id) => locById[id]);
export const location = () => levelLocations()[state.locIdx];
export const nextLocation = () => levelLocations()[state.locIdx + 1] || null;

export const owned = (id) => state.owned[id] || 0;

export function multiplier() {
  return UPGRADES.filter((u) => u.type === 'boost')
    .reduce((m, u) => (owned(u.id) ? m * u.effect : m), 1);
}

export function tapValue() {
  const add = UPGRADES.filter((u) => u.type === 'tap').reduce((s, u) => s + owned(u.id) * u.effect, 0);
  return (RULES.baseTap + add) * multiplier();
}

export function perSecond() {
  const base = UPGRADES.filter((u) => u.type === 'auto').reduce((s, u) => s + owned(u.id) * u.effect, 0);
  return base * multiplier();
}

export function price(u) {
  return Math.ceil(u.price * Math.pow(RULES.priceGrowth, owned(u.id)));
}

export function isUnlocked(u) {
  const ids = level()?.locations || [];
  const need = ids.indexOf(u.unlock);
  return need !== -1 && need <= state.locIdx;
}

export function isMaxed(u) {
  return u.max != null && owned(u.id) >= u.max;
}

export function canBuy(u) {
  return isUnlocked(u) && !isMaxed(u) && state.money >= price(u);
}

export function earn(amount) {
  if (amount <= 0 || state.levelDone) return;
  state.money += amount;
  state.total += amount;
  state.locEarned += amount;
}

export function tap() {
  const v = tapValue();
  earn(v);
  return v;
}

export function buy(id) {
  const u = UPGRADES.find((x) => x.id === id);
  if (!u || !canBuy(u)) return false;
  state.money -= price(u);
  state.owned[id] = owned(id) + 1;
  return true;
}

export function goalReached() {
  const loc = location();
  return !!loc && state.locEarned >= loc.goal;
}

// Переїзд у наступну локацію або завершення рівня.
export function advance() {
  if (!goalReached()) return null;
  if (nextLocation()) {
    state.locIdx += 1;
    state.locEarned = 0;
    return 'location';
  }
  state.levelDone = true;
  return 'level';
}

export function tick(dt) {
  dt = Math.min(dt, RULES.maxDt);
  earn(perSecond() * dt);
}

// Дохід, поки гру було закрито. Повертає зароблену суму.
export function applyOffline(lastSeen) {
  const o = RULES.offline;
  if (!o.enabled || !lastSeen) return 0;
  const sec = Math.min((Date.now() - lastSeen) / 1000, o.maxHours * 3600);
  if (sec < 30) return 0;
  const gain = perSecond() * sec * o.rate;
  earn(gain);
  return gain;
}

// Форматування: 1.2K / 3.4M …
export function fmt(n) {
  const sign = n < 0 ? '-' : '';
  n = Math.abs(n);
  if (n < 10 && n % 1) return sign + n.toFixed(1);
  if (n < 1000) return sign + Math.floor(n).toString();
  if (n < 100000) return sign + Math.floor(n).toLocaleString('uk-UA').replace(/\s/g, ' ');
  const units = ['K', 'M', 'B', 'T', 'Qa', 'Qi'];
  let i = -1;
  while (n >= 1000 && i < units.length - 1) { n /= 1000; i++; }
  return sign + (n < 100 ? n.toFixed(1).replace(/\.0$/, '') : Math.floor(n)) + units[i];
}
