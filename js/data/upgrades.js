// Прокачки рівня «Білий».
// type: tap — +$ за тап; auto — +$ за секунду; boost — множник усього доходу (купується 1 раз).
// unlock — з якої локації відкривається. price — стартова ціна.
export const UPGRADES = [
  // ── Тартак ──
  { id: 'fist',     icon: '🤜', name: 'Пачка в кулаці',          desc: '+1 $ за тап',            type: 'tap',  price: 10,   effect: 1,   unlock: 'tartak' },
  { id: 'typer',    icon: '🖨️', name: 'Друкарська машинка грошей', desc: '+1 $/с — друкує сама',  type: 'auto', price: 15,   effect: 1,   unlock: 'tartak' },
  { id: 'garage',   icon: '🚗', name: 'Ланос з гаража',           desc: '+3 $/с — підвозить сусідів', type: 'auto', price: 60, effect: 3,   unlock: 'tartak' },

  // ── Вінниця ──
  { id: 'wallet',   icon: '👛', name: 'Шкіряний лопатник',        desc: '+5 $ за тап',            type: 'tap',  price: 150,  effect: 5,   unlock: 'vinnytsia' },
  { id: 'taxi',     icon: '🚕', name: 'Ланос-таксі по Вінниці',   desc: '+8 $/с',                 type: 'auto', price: 250,  effect: 8,   unlock: 'vinnytsia' },
  { id: 'press',    icon: '🏭', name: 'Друкарський верстат',      desc: '+20 $/с',                type: 'auto', price: 700,  effect: 20,  unlock: 'vinnytsia' },
  { id: 'turbo',    icon: '🔥', name: 'Турбіна на Ланос',         desc: '×2 до всього доходу',    type: 'boost', price: 1200, effect: 2,  unlock: 'vinnytsia', max: 1 },

  // ── Варшава ──
  { id: 'goldfinger', icon: '👆', name: 'Золотий палець',          desc: '+30 $ за тап',           type: 'tap',  price: 1500, effect: 30,  unlock: 'warsaw' },
  { id: 'bus',      icon: '🚐', name: 'Ланос-бус Вінниця–Варшава', desc: '+80 $/с',               type: 'auto', price: 3000, effect: 80,  unlock: 'warsaw' },
  { id: 'rims',     icon: '✨', name: 'Золоті диски на Ланос',     desc: '×2 до всього доходу',    type: 'boost', price: 6000, effect: 2,  unlock: 'warsaw', max: 1 },
  { id: 'kantor',   icon: '💱', name: 'Обмінник на Старому Місті', desc: '+250 $/с',              type: 'auto', price: 9000, effect: 250, unlock: 'warsaw' },
];
