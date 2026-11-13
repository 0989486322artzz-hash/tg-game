// Локації. goal — скільки $ треба НАКОПИЧИТИ, щоб поїхати далі (переїзд їх забирає).
// bg — фон 1080×1920. fallback — фон, якщо картинки ще немає.
export const LOCATIONS = [
  // ── Білий ──
  { id: 'tartak',    name: 'Тартак',    where: 'у Тартаку',    to: 'у Тартак',    bg: 'assets/bg/tartak.jpg',    fallback: 'linear-gradient(160deg,#3b2a1a,#6b4a2b 55%,#1d140c)', goal: 625 },
  { id: 'vinnytsia', name: 'Вінниця',   where: 'у Вінниці',    to: 'у Вінницю',   bg: 'assets/bg/vinnytsia.jpg', fallback: 'linear-gradient(160deg,#10324a,#1f6f8b 55%,#0a1a26)', goal: 8500 },
  { id: 'warsaw',    name: 'Варшава',   where: 'у Варшаві',    to: 'у Варшаву',   bg: 'assets/bg/warsaw.jpg',    fallback: 'linear-gradient(160deg,#3a0f18,#8b1e2f 55%,#1a070b)', goal: 575000 },
  // ── Вуйко ──
  { id: 'tarasivka', name: 'Тарасівка', where: 'у Тарасівці',  to: 'у Тарасівку', bg: 'assets/bg/tarasivka.jpg', fallback: 'linear-gradient(160deg,#1d3a1a,#3f6b2b 55%,#0e1d0c)', goal: 47500000 },
  { id: 'fazenda',   name: 'Фазенда',   where: 'на Фазенді',   to: 'на Фазенду',  bg: 'assets/bg/fazenda.jpg',   fallback: 'linear-gradient(160deg,#3a2a1a,#8b6b4a 55%,#1d140c)', goal: 975000000 },
  { id: 'odesa',     name: 'Одеса',     where: 'в Одесі',      to: 'в Одесу',     bg: 'assets/bg/odesa.jpg',     fallback: 'linear-gradient(160deg,#0f2a4a,#2f8bcf 55%,#071a2e)', goal: 9750000000 },
  // ── Маскім ──
  { id: 'maxim1', name: 'Артмаш', where: 'на Артмаші', to: 'на Артмаш',          bg: 'assets/bg/maxim1.jpg', fallback: 'linear-gradient(160deg,#2a2a2a,#5a5a5a 55%,#111)', goal: 2000000000000 },
  { id: 'maxim2', name: 'Ермітаж', where: 'на Ермітажі', to: 'на Ермітаж',         bg: 'assets/bg/maxim2.jpg', fallback: 'linear-gradient(160deg,#1a1a2a,#44445a 55%,#0b0b14)', goal: 82500000000000 },
  { id: 'maxim3', name: 'Бурсітєт', where: 'у бурсітєті', to: 'в бурсітєт',      bg: 'assets/bg/maxim3.jpg', fallback: 'linear-gradient(160deg,#3a1a0a,#b5531c 55%,#1d0c05)', goal: 1500000000000000 },
  // ── Шляпа ──
  { id: 'hat1',   name: 'Станіславчик', where: 'у Станіславчику', to: 'у Станіславчик', bg: 'assets/bg/hat1.jpg', fallback: 'linear-gradient(160deg,#141a33,#2d3a7a 55%,#090c1a)', goal: 1250000000000000 },
  { id: 'hat2',   name: 'Чорнятин', where: 'у Чорнятині', to: 'у Чорнятин',      bg: 'assets/bg/hat2.jpg',   fallback: 'linear-gradient(160deg,#1a2a33,#2d6a7a 55%,#0a141a)', goal: 8250000000000000 },
  { id: 'hat3',   name: 'Вокзал', where: 'на вокзалі', to: 'на вокзал', bg: 'assets/bg/hat3.jpg', fallback: 'linear-gradient(160deg,#2a1a33,#7a2d7a 55%,#140a1a)', goal: 175000000000000000 },
  // ── Вєталь ──
  { id: 'vet1',   name: 'Корчовка', where: 'на Корчовці', to: 'на Корчовку',       bg: 'assets/bg/vet1.jpg',   fallback: 'linear-gradient(160deg,#331414,#7a2d2d 55%,#1a0909)', goal: 125000000000000000 },
  { id: 'vet2',   name: 'Гнівань', where: 'у Гнівані', to: 'в Гнівань',        bg: 'assets/bg/vet2.jpg',   fallback: 'linear-gradient(160deg,#14332a,#2d7a5f 55%,#091a14)', goal: 450000000000000000 },
  { id: 'vet3',   name: 'Концерт', where: 'на концерті', to: 'на концерт',        bg: 'assets/bg/vet3.jpg',   fallback: 'linear-gradient(160deg,#33301a,#7a722d 55%,#1a180a)', goal: 12500000000000000000 },
];
