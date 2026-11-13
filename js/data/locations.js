// Локації. goal — скільки $ треба заробити саме в цій локації, щоб поїхати далі.
// bg — колаж 1080×1920. fallback — фон, якщо картинки ще немає.
export const LOCATIONS = [
  {
    id: 'tartak',
    name: 'Тартак',
    where: 'у Тартаку',
    to: 'у Тартак',
    bg: 'assets/bg/tartak.jpg',
    fallback: 'linear-gradient(160deg,#3b2a1a,#6b4a2b 55%,#1d140c)',
    goal: 100,
  },
  {
    id: 'vinnytsia',
    name: 'Вінниця',
    where: 'у Вінниці',
    to: 'у Вінницю',
    bg: 'assets/bg/vinnytsia.jpg',
    fallback: 'linear-gradient(160deg,#10324a,#1f6f8b 55%,#0a1a26)',
    goal: 1000,
  },
  {
    id: 'warsaw',
    name: 'Варшава',
    where: 'у Варшаві',
    to: 'у Варшаву',
    bg: 'assets/bg/warsaw.jpg',
    fallback: 'linear-gradient(160deg,#3a0f18,#8b1e2f 55%,#1a070b)',
    goal: 10000,
  },
];
