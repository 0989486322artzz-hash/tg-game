// Ігрова логіка. Без DOM — тільки state і дані.
import { RULES } from './config.js';
import { state } from './state.js';
import { LEVELS } from './data/levels.js';
import { LOCATIONS } from './data/locations.js';
import { UPGRADES } from './data/upgrades.js';
import { FRIENDS } from './data/friends.js';

const locById = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));
// Наскрізний порядок усіх локацій усіх рівнів: tartak=0, vinnytsia=1 …
const ORDER = LEVELS.flatMap((l) => l.locations);
const orderOf = (locId) => ORDER.indexOf(locId);

export const level = () => LEVELS[state.levelIdx];
export const levelLocations = () => (level()?.locations || []).map((id) => locById[id]);
export const location = () => levelLocations()[state.locIdx];
export const nextLocation = () => levelLocations()[state.locIdx + 1] || null;
export const nextLevel = () => LEVELS[state.levelIdx + 1] || null;
export const friend = (lvl = level()) => FRIENDS.find((f) => f.id === lvl?.friendId);
// Скільки локацій уже відкрито (наскрізно).
export const globalIdx = () =>
  LEVELS.slice(0, state.levelIdx).reduce((n, l) => n + l.locations.length, 0) + state.locIdx;
export const locationSeen = (locId) => orderOf(locId) !== -1 && orderOf(locId) <= globalIdx();

export const owned = (id) => state.owned[id] || 0;

// Множник: target 'all' — увесь дохід, інакше — тільки своя група.
export function multiplier(target = 'all') {
  return UPGRADES.filter((u) => u.type === 'boost' && (u.target || 'all') === target)
    .reduce((m, u) => (owned(u.id) ? m * u.effect : m), 1);
}

function sumOf(type) {
  return UPGRADES.filter((u) => u.type === type)
    .reduce((s, u) => s + owned(u.id) * u.effect * multiplier(u.group), 0);
}

export function tapValue() {
  return (RULES.baseTap + sumOf('tap')) * multiplier('all');
}

export function perSecond() {
  return sumOf('auto') * multiplier('all');
}

export function price(u) {
  const g = u.growth ?? (u.type === 'tap' ? RULES.tapPriceGrowth : RULES.priceGrowth);
  return Math.ceil(u.price * Math.pow(g, owned(u.id)));
}

// Прокачка відкрита, якщо гравець уже дійшов до її локації (на будь-якому рівні).
export function isUnlocked(u) {
  return locationSeen(u.unlock);
}

export const newUpgradesAt = (locId) => UPGRADES.filter((u) => u.unlock === locId).length;

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

// Прогрес цілі: накопичені гроші (або зароблені, якщо travelSpendsGoal = false).
export function goalProgress() {
  const loc = location();
  if (!loc) return 0;
  return RULES.travelSpendsGoal ? state.money : state.locEarned;
}

export function goalReached() {
  const loc = location();
  return !!loc && goalProgress() >= loc.goal;
}

// Переїзд: наступна локація → наступний друг → кінець гри (поки що).
export function advance() {
  if (!goalReached()) return null;
  if (RULES.travelSpendsGoal) state.money -= location().goal;
  state.locEarned = 0;
  if (nextLocation()) {
    state.locIdx += 1;
    return 'location';
  }
  if (nextLevel()) {
    state.levelIdx += 1;
    state.locIdx = 0;
    return 'level';
  }
  state.levelDone = true;
  return 'end';
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
  if (n < 1000000) return sign + Math.floor(n).toLocaleString('uk-UA').replace(/\s/g, ' ');
  const units = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  let i = -1;
  while (n >= 1000 && i < units.length - 1) { n /= 1000; i++; }
  return sign + (n < 100 ? n.toFixed(1).replace(/\.0$/, '') : Math.floor(n)) + units[i];
}
