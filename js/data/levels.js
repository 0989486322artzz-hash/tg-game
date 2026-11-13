// Рівні = учасники. Кожен рівень проходить свої локації по черзі.
export const LEVELS = [
  {
    id: 'bily',
    friendId: 'bily',
    name: 'Білий',
    locations: ['tartak', 'vinnytsia', 'warsaw'],
  },
  {
    id: 'level2',
    friendId: null,
    name: 'Наступний учасник',   // [ВІД ВЛАСНИКА]
    locations: [],
    locked: true,
  },
];
