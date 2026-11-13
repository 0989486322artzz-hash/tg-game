# Нагодуй Білого — Telegram-гра (рівень 1)

## Фото (обов'язково)
Скопіюй 3 колажі з папки «телеграм гра» в `assets/bg/` і перейменуй латиницею:

| Було | Стало |
|---|---|
| `бєлий тартак.jpg` | `assets/bg/tartak.jpg` |
| `бєлий вінниця.jpg` | `assets/bg/vinnytsia.jpg` |
| `бєлий варшава.jpg` | `assets/bg/warsaw.jpg` |

Поки фото немає, гра показує кольоровий фон.

## Запуск на комп'ютері
Відкрити папку у VS Code → Live Server (або `npx serve`). Подвійний клік по index.html НЕ працює (модулі JS).
Режим перевірки: додай `?debug=1` до адреси — з'являться кнопки +1000 $, час ×10, скинути.

## Що де міняти
- Цілі локацій: `js/data/locations.js` (`goal`)
- Прокачки, ціни, ефекти: `js/data/upgrades.js`
- Ріст цін, офлайн-дохід: `js/config.js`
- Учасники (рівні) по черзі: `js/data/levels.js` + `js/data/friends.js`
- Фони: `assets/bg/` (Білий: tartak, vinnytsia, warsaw; Вуйко: tarasivka, fazenda, odesa)

## Запуск у Telegram
GitHub Pages → @BotFather → /newbot → Bot Settings → Menu Button → вставити адресу гри.
Бот тут лише кнопка, яка відкриває гру.
