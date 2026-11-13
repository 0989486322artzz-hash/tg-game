// Прокачки. Білий — Ланос, Вуйко — Восьмерка, Маскім — Кова, Шляпа — Claude/Codex, Вєталь — RAV4 (+ Руки у всіх).
// Куплене зберігається назавжди: Ланоси працюють і на рівні Вуйка.
// type: tap — +$ за тап; auto — +$ за секунду; boost — множник (купується 1 раз).
// boost.target: 'all' — увесь дохід, або id групи. unlock — локація, де прокачка з'являється
// (до того вона прихована — секрет). Ціни підібрані симуляцією.

export const GROUPS = [
  { id: 'hands', icon: '👆', name: 'Руки' },
  { id: 'lanos', icon: '🚗', name: 'Ланос' },
  { id: 'vuyko', icon: '🚘', name: 'Восьмерка' },
  { id: 'kova',  icon: '🏍️', name: 'Кова' },
  { id: 'code',  icon: '🤖', name: 'Claude/Codex' },
  { id: 'rav4',  icon: '🚙', name: 'RAV4' },
];

export const UPGRADES = [
  // ════════ БІЛИЙ ════════
  // ── Тартак ──
  { id: 'fist',     group: 'hands', icon: '🤜', name: 'Пачка в кулаці',            desc: '+2 $ за тап',                         type: 'tap',  price: 10,  effect: 2,   unlock: 'tartak' },
  { id: 'gloves',   group: 'hands', icon: '🚣', name: 'Катамаран о 3 ночі в Тартаку',       desc: 'Катання до ранку: +2 $ за тап',                         type: 'tap',  price: 25,  effect: 2,   unlock: 'tartak' },
  { id: 'lanos1',   group: 'lanos', icon: '🚗', name: 'Ланос з гаража',            desc: 'Таксує по Тартаку: +1 $/с',         type: 'auto', price: 10,  effect: 1, unlock: 'tartak' },
  { id: 'lanos2',   group: 'lanos', icon: '🥔', name: 'Ланос возить картоплю',     desc: 'Рейси на Корчовку: +2 $/с',            type: 'auto', price: 35,  effect: 2,   unlock: 'tartak' },
  { id: 'lanos3',   group: 'lanos', icon: '🔗', name: 'Причіп від Артмашу на Ланос', desc: 'Возить усе підряд: +4 $/с', type: 'auto', price: 60, effect: 4,   unlock: 'tartak' },
  { id: 'lanosB0',  group: 'lanos', icon: '🌲', name: 'Ялинка-пахучка в Ланос',    desc: 'Усі Ланоси ×1.5',                      type: 'boost', target: 'lanos', price: 75, effect: 1.5, unlock: 'tartak', max: 1 },

  // ── Вінниця ──
  { id: 'count',    group: 'hands', icon: '🧮', name: 'Рахує як касир',            desc: '+6 $ за тап',                         type: 'tap',  price: 500,  effect: 6,  unlock: 'vinnytsia' },
  { id: 'draw1',    group: 'hands', icon: '📐', name: 'Білий креслить деталі для Артмашу', desc: '+10 $ за тап',                type: 'tap',  price: 1250,  effect: 10,  unlock: 'vinnytsia' },
  { id: 'barsetka', group: 'hands', icon: '👝', name: 'Барсетка з Сектора',        desc: '+16 $ за тап',                         type: 'tap',  price: 2500, effect: 16,  unlock: 'vinnytsia' },
  { id: 'lanos4',   group: 'lanos', icon: '🚕', name: 'Ланос-таксі по Вінниці',    desc: '+8 $/с',                               type: 'auto', price: 350,  effect: 8,  unlock: 'vinnytsia' },
  { id: 'lanos5',   group: 'lanos', icon: '⛽', name: 'Ланос на газу',             desc: 'Їздить вдвічі дешевше: +16 $/с',        type: 'auto', price: 750,  effect: 16,  unlock: 'vinnytsia' },
  { id: 'lanos6',   group: 'lanos', icon: '🏭', name: 'Ланос возить зміну на Артмаш', desc: '+28 $/с',                           type: 'auto', price: 1500,  effect: 28, unlock: 'vinnytsia' },
  { id: 'lanos7',   group: 'lanos', icon: '🐷', name: 'Бомж Хрюня стереже Ланос біля АТБ', desc: '+50 $/с', type: 'auto', price: 3000, effect: 50, unlock: 'vinnytsia' },
  { id: 'lanos8',   group: 'lanos', icon: '🏪', name: 'Стоянка Ланосів на Секторі', desc: '+80 $/с',                             type: 'auto', price: 5000, effect: 80, unlock: 'vinnytsia' },
  { id: 'lanosB1',  group: 'lanos', icon: '🔥', name: 'Турбіна на Ланос',          desc: 'Усі Ланоси ×2',                        type: 'boost', target: 'lanos', price: 4000, effect: 2, unlock: 'vinnytsia', max: 1 },

  // ── Варшава ──
  { id: 'pulse',    group: 'hands', icon: '🫀', name: 'Рука на пульсі',            desc: '+40 $ за тап',                        type: 'tap',  price: 10000,  effect: 40,  unlock: 'warsaw' },
  { id: 'goldfinger', group: 'hands', icon: '💍', name: 'Золотий палець',          desc: '+80 $ за тап',                        type: 'tap',  price: 30000, effect: 80,  unlock: 'warsaw' },
  { id: 'lanos9',   group: 'lanos', icon: '🚐', name: 'Ланос-бус Вінниця–Варшава', desc: '+140 $/с',                              type: 'auto', price: 10000,  effect: 140,  unlock: 'warsaw' },
  { id: 'lanos10',  group: 'lanos', icon: '🇵🇱', name: 'Ланос на польських номерах', desc: '+220 $/с',      type: 'auto', price: 17500,  effect: 220, unlock: 'warsaw' },
  { id: 'lanos11',  group: 'lanos', icon: '📜', name: 'Ланос везе креслення Білого', desc: 'Артмаш — у Польщу: +360 $/с',       type: 'auto', price: 30000, effect: 360, unlock: 'warsaw' },
  { id: 'lanos12',  group: 'lanos', icon: '🅿️', name: 'Автопарк Ланосів біля ТЕЦ', desc: '+600 $/с',                             type: 'auto', price: 47500, effect: 600, unlock: 'warsaw' },
  { id: 'lanos13',  group: 'lanos', icon: '🚂', name: 'Ланоси потягом через Жмеринку', desc: '+1 000 $/с',                         type: 'auto', price: 87500, effect: 1000, unlock: 'warsaw' },
  { id: 'lanosB2',  group: 'lanos', icon: '✨', name: 'Золоті диски на Ланос',     desc: 'Усі Ланоси ×2',                        type: 'boost', target: 'lanos', price: 62500, effect: 2, unlock: 'warsaw', max: 1 },

  // ════════ ВУЙКО ════════
  // ── Тарасівка ──
  { id: 'vhand1',   group: 'hands', icon: '💪', name: 'Хватка Вуйка',              desc: '+160 $ за тап',                        type: 'tap',  price: 200000, effect: 160,  unlock: 'tarasivka' },
  { id: 'vuyko1',   group: 'vuyko', icon: '🔑', name: 'Позичити восьмерку у Вуйка', desc: '+600 $/с',                            type: 'auto', price: 100000, effect: 600, unlock: 'tarasivka' },
  { id: 'vuyko2',   group: 'vuyko', icon: '🔧', name: 'Вуйко перебрав двигун',     desc: 'Восьмерка знову на ходу: +1 100 $/с',    type: 'auto', price: 200000, effect: 1100, unlock: 'tarasivka' },
  { id: 'vuyko3',   group: 'vuyko', icon: '🤝', name: 'Вєталь з Вуйком на восьмерці', desc: '+1 800 $/с',                  type: 'auto', price: 350000, effect: 1800, unlock: 'tarasivka' },
  { id: 'vuyko4',   group: 'vuyko', icon: '🏄', name: 'Катання на даху восьмерки',        desc: '+3 000 $/с',                          type: 'auto', price: 625000, effect: 3000, unlock: 'tarasivka' },
  { id: 'vuykoB1',  group: 'vuyko', icon: '⚙️', name: 'Карбюратор від Вуйка',      desc: 'Уся Восьмерка ×2',                     type: 'boost', target: 'vuyko', price: 450000, effect: 2, unlock: 'tarasivka', max: 1 },
  { id: 'tarasivkax1', group: 'vuyko', icon: '🚐', name: 'Вуйко возить туристів до водоспаду', desc: '+5 100 $/с', type: 'auto', price: 1220000, effect: 5100, unlock: 'tarasivka' },
  { id: 'tarasivkax2', group: 'vuyko', icon: '💒', name: 'Восьмерка на сільському весіллі', desc: '+8 400 $/с', type: 'auto', price: 2010000, effect: 8400, unlock: 'tarasivka' },

  // ── Фазенда ──
  { id: 'vhand2',   group: 'hands', icon: '🤝', name: 'Рукостискання на Фазенді',  desc: '+400 $ за тап',                       type: 'tap',  price: 1000000, effect: 400, unlock: 'fazenda' },
  { id: 'vhand3',   group: 'hands', icon: '📞', name: 'Вуйко все вирішує по телефону', desc: '+700 $ за тап',                   type: 'tap',  price: 2000000, effect: 700, unlock: 'fazenda' },
  { id: 'vuyko5',   group: 'vuyko', icon: '🏡', name: 'Восьмерка під\'їжджає до Фазенди', desc: '+5 000 $/с',                    type: 'auto', price: 750000, effect: 5000, unlock: 'fazenda' },
  { id: 'vuyko6',   group: 'vuyko', icon: '🧍', name: 'Вєталь катається на даху восьмерки',       desc: 'Вся Фазенда знімає: +8 000 $/с',      type: 'auto', price: 1250000, effect: 8000, unlock: 'fazenda' },
  { id: 'vuyko7',   group: 'vuyko', icon: '🛞', name: 'Восьмерка на дисках R15',   desc: '+13 000 $/с',                          type: 'auto', price: 2500000, effect: 13000, unlock: 'fazenda' },
  { id: 'vuyko8',   group: 'vuyko', icon: '🥂', name: 'Банкет на Фазенді до ранку',  desc: '+20 000 $/с',                         type: 'auto', price: 4000000, effect: 20000, unlock: 'fazenda' },
  { id: 'vuyko9',   group: 'vuyko', icon: '🛞', name: 'Вуйко міняє колеса всьому району',  desc: '+32 000 $/с',  type: 'auto', price: 6250000, effect: 32000, unlock: 'fazenda' },
  { id: 'vuykoB2',  group: 'vuyko', icon: '🏎️', name: 'Спорт-тюнінг восьмерки',  desc: 'Уся Восьмерка ×3',                     type: 'boost', target: 'vuyko', price: 6250000, effect: 3, unlock: 'fazenda', max: 1 },
  { id: 'fazendax1', group: 'vuyko', icon: '🅿️', name: 'Парковка восьмерок біля Фазенди', desc: '+54 400 $/с', type: 'auto', price: 12200000, effect: 54400, unlock: 'fazenda' },
  { id: 'fazendax2', group: 'vuyko', icon: '🎧', name: 'Вуйко — діджей на Фазенді', desc: '+89 600 $/с', type: 'auto', price: 20100000, effect: 89600, unlock: 'fazenda' },

  // ── Одеса ──
  { id: 'vhand4',   group: 'hands', icon: '💎', name: 'Перстень з Аркадії',        desc: '+1 600 $ за тап',                       type: 'tap',  price: 75000000, effect: 1600, unlock: 'odesa' },
  { id: 'vuyko10',  group: 'vuyko', icon: '🌊', name: 'Восьмерка-кабріолет в Аркадії', desc: 'Катає туристів: +60 000 $/с',     type: 'auto', price: 62500000, effect: 60000, unlock: 'odesa' },
  { id: 'vuyko11',  group: 'vuyko', icon: '🐟', name: 'Восьмерка на Привозі',  desc: 'Возить рибу: +100 000 $/с',                         type: 'auto', price: 100000000, effect: 100000, unlock: 'odesa' },
  { id: 'vuyko12',  group: 'vuyko', icon: '🌀', name: 'Дрифт на восьмерці в Аркадії', desc: 'Збирає натовп: +160 000 $/с',         type: 'auto', price: 175000000, effect: 160000, unlock: 'odesa' },
  { id: 'vuyko13',  group: 'vuyko', icon: '⚓', name: 'Вуйко продає восьмерки в порту', desc: '+260 000 $/с',     type: 'auto', price: 300000000, effect: 260000, unlock: 'odesa' },
  { id: 'vuykoB3',  group: 'vuyko', icon: '👑', name: 'Вуйко — король Аркадії',    desc: 'Увесь дохід ×2',                       type: 'boost', target: 'all', price: 250000000, effect: 2, unlock: 'odesa', max: 1 },
  { id: 'odesax1', group: 'vuyko', icon: '🏖️', name: 'Восьмерка на пляжі Ланжерон', desc: '+442 000 $/с', type: 'auto', price: 586000000, effect: 442000, unlock: 'odesa' },
  { id: 'odesax2', group: 'vuyko', icon: '🌆', name: 'Вуйко катає по Дерибасівській', desc: '+728 000 $/с', type: 'auto', price: 966000000, effect: 728000, unlock: 'odesa' },

  // ════════ МАСКІМ — КОВА ════════
  // ── maxim1 ──
  { id: 'kvh1', group: 'hands', icon: '🛏️', name: 'Ночівля на гаражі', desc: '+30 000 $ за тап', type: 'tap', price: 125000000, effect: 30000, unlock: 'maxim1' },
  { id: 'kv11', group: 'kova', icon: '🔑', name: 'Маскім заводить Кову', desc: 'З третього разу: +8M $/с', type: 'auto', price: 750000000, effect: 8000000, unlock: 'maxim1' },
  { id: 'kv12', group: 'kova', icon: '⛓️', name: 'Новий ланцюг на Кову', desc: '+14M $/с', type: 'auto', price: 1250000000, effect: 14000000, unlock: 'maxim1' },
  { id: 'kv13', group: 'kova', icon: '🌙', name: 'Нічні покатушки на Кові', desc: '+24M $/с', type: 'auto', price: 2000000000, effect: 24000000, unlock: 'maxim1' },
  { id: 'kv14', group: 'kova', icon: '🏭', name: 'Маскім возить метал з Артмашу', desc: 'На Кові з причепом: +40M $/с', type: 'auto', price: 3500000000, effect: 40000000, unlock: 'maxim1' },
  { id: 'kv15', group: 'kova', icon: '☕', name: 'Кава зі стаканчика в цеху', desc: 'Заряд на всю зміну: +60M $/с', type: 'auto', price: 5000000000, effect: 60000000, unlock: 'maxim1' },
  { id: 'kvB1', group: 'kova', icon: '🪖', name: 'Новий шолом для Маскіма', desc: 'Уся Кова ×2', type: 'boost', target: 'kova', price: 4000000000, effect: 2, unlock: 'maxim1', max: 1 },
  { id: 'maxim1x1', group: 'kova', icon: '🍱', name: 'Кова розвозить обіди по цехах', desc: '+102M $/с', type: 'auto', price: 9770000000, effect: 102000000, unlock: 'maxim1' },
  { id: 'maxim1x2', group: 'kova', icon: '📦', name: 'Маскім — кур\'єр Артмашу', desc: '+168M $/с', type: 'auto', price: 16100000000, effect: 168000000, unlock: 'maxim1' },
  // ── maxim2 ──
  { id: 'kvh2', group: 'hands', icon: '✊', name: 'Газ на повну', desc: '+100 000 $ за тап', type: 'tap', price: 2000000000, effect: 100000, unlock: 'maxim2' },
  { id: 'kv21', group: 'kova', icon: '💨', name: 'Кова з прямотоком', desc: 'Чути на весь Ермітаж: +80M $/с', type: 'auto', price: 32500000000, effect: 80000000, unlock: 'maxim2' },
  { id: 'kv22', group: 'kova', icon: '🌊', name: 'Квадроцикли по воді', desc: 'Маскім ганяє по річці: +140M $/с', type: 'auto', price: 62500000000, effect: 140000000, unlock: 'maxim2' },
  { id: 'kv23', group: 'kova', icon: '🏍️', name: 'Під\'їзд на Кові до Ермітажу', desc: '+240M $/с', type: 'auto', price: 100000000000, effect: 240000000, unlock: 'maxim2' },
  { id: 'kv24', group: 'kova', icon: '🍕', name: 'Доставка піци на Кові', desc: '+400M $/с', type: 'auto', price: 150000000000, effect: 400000000, unlock: 'maxim2' },
  { id: 'kv25', group: 'kova', icon: '🍾', name: 'Розпиття водки на Ермітажі', desc: 'Кова чекає на парковці: +600M $/с', type: 'auto', price: 250000000000, effect: 600000000, unlock: 'maxim2' },
  { id: 'kvB2', group: 'kova', icon: '🛞', name: 'Нова гума на Кову', desc: 'Уся Кова ×3', type: 'boost', target: 'kova', price: 250000000000, effect: 3, unlock: 'maxim2', max: 1 },
  { id: 'maxim2x1', group: 'kova', icon: '🌃', name: 'Нічна парковка Ков біля Ермітажу', desc: '+1B $/с', type: 'auto', price: 489000000000, effect: 1020000000, unlock: 'maxim2' },
  { id: 'maxim2x2', group: 'kova', icon: '🕴️', name: 'Маскім — фейсконтроль на Ермітажі', desc: '+1.7B $/с', type: 'auto', price: 805000000000, effect: 1680000000, unlock: 'maxim2' },
  { id: 'maxim2x3', group: 'kova', icon: '🚕', name: 'Кова-таксі додому після Ермітажу', desc: '+2.7B $/с', type: 'auto', price: 1290000000000, effect: 2700000000, unlock: 'maxim2' },
  // ── maxim3 ──
  { id: 'kvh3', group: 'hands', icon: '📘', name: 'Залікова книжка Маскіма', desc: '+400 000 $ за тап', type: 'tap', price: 27500000000, effect: 400000, unlock: 'maxim3' },
  { id: 'kv31', group: 'kova', icon: '🎬', name: 'Трюки на задньому колесі', desc: 'Мільйон переглядів: +900M $/с', type: 'auto', price: 1250000000000, effect: 900000000, unlock: 'maxim3' },
  { id: 'kv32', group: 'kova', icon: '🏍️', name: 'Мотоклуб Маскіма', desc: '+1.6B $/с', type: 'auto', price: 2250000000000, effect: 1600000000, unlock: 'maxim3' },
  { id: 'kv33', group: 'kova', icon: '🚣', name: 'Стрибок через ставок у Тартаку', desc: '+2.8B $/с', type: 'auto', price: 4000000000000, effect: 2800000000, unlock: 'maxim3' },
  { id: 'kv34', group: 'kova', icon: '🧑‍🎓', name: 'Маскім возить одногрупників на Кові', desc: '+4.8B $/с', type: 'auto', price: 6250000000000, effect: 4800000000, unlock: 'maxim3' },
  { id: 'kv35', group: 'kova', icon: '🏭', name: 'Спонсор — Артмаш', desc: '+8B $/с', type: 'auto', price: 10000000000000, effect: 8000000000, unlock: 'maxim3' },
  { id: 'kvB3', group: 'kova', icon: '🎓', name: 'Маскім — легенда бурсітєту', desc: 'Увесь дохід ×2', type: 'boost', target: 'all', price: 5000000000000, effect: 2, unlock: 'maxim3', max: 1 },
  { id: 'maxim3x1', group: 'kova', icon: '📝', name: 'Маскім здає залік на Кові', desc: '+13.6B $/с', type: 'auto', price: 19600000000000, effect: 13600000000, unlock: 'maxim3' },
  { id: 'maxim3x2', group: 'kova', icon: '🏫', name: 'Кова на парковці бурсітєту', desc: '+22.4B $/с', type: 'auto', price: 32200000000000, effect: 22400000000, unlock: 'maxim3' },

  // ════════ ШЛЯПА — CLAUDE / CODEX ════════
  // ── hat1 ──
  { id: 'shh1', group: 'hands', icon: '🕶️', name: 'Шляпа в райбенах', desc: 'Стиль +100: +1.8M $ за тап', type: 'tap', price: 1500000000000, effect: 1800000, unlock: 'hat1' },
  { id: 'sh11', group: 'code', icon: '💬', name: 'Шляпа відкрив Claude', desc: 'Перший промпт: +480M $/с', type: 'auto', price: 7500000000000, effect: 480000000, unlock: 'hat1' },
  { id: 'sh12', group: 'code', icon: '🧩', name: 'Codex пише код за Шляпу', desc: '+840M $/с', type: 'auto', price: 12500000000000, effect: 840000000, unlock: 'hat1' },
  { id: 'sh13', group: 'code', icon: '🔁', name: 'Промпт з третьої спроби', desc: 'Зате працює: +1.4B $/с', type: 'auto', price: 22500000000000, effect: 1440000000, unlock: 'hat1' },
  { id: 'sh14', group: 'code', icon: '🌳', name: 'Вайб-кодинг на природі в Станіславчику', desc: 'Ноут на пеньку: +2.4B $/с', type: 'auto', price: 35000000000000, effect: 2400000000, unlock: 'hat1' },
  { id: 'sh15', group: 'code', icon: '🏭', name: 'Сайт для Артмашу', desc: '+3.6B $/с', type: 'auto', price: 50000000000000, effect: 3600000000, unlock: 'hat1' },
  { id: 'shB1', group: 'code', icon: '🧠', name: 'Підписка на Claude', desc: 'Увесь вайб-кодинг ×2', type: 'boost', target: 'code', price: 40000000000000, effect: 2, unlock: 'hat1', max: 1 },
  { id: 'hat1x1', group: 'code', icon: '🎣', name: 'Шляпа пише бота для риболовлі', desc: '+6.1B $/с', type: 'auto', price: 97800000000000, effect: 6120000000, unlock: 'hat1' },
  { id: 'hat1x2', group: 'code', icon: '🍢', name: 'Claude планує шашлики', desc: '+10.1B $/с', type: 'auto', price: 161000000000000, effect: 10080000000, unlock: 'hat1' },
  // ── hat2 ──
  { id: 'shh2', group: 'hands', icon: '⌨️', name: 'Механічна клавіатура Шляпи', desc: '+6M $ за тап', type: 'tap', price: 425000000000, effect: 6000000, unlock: 'hat2' },
  { id: 'sh21', group: 'code', icon: '🎮', name: 'Шляпа робить Telegram-гру', desc: 'Оцю саму: +4.8B $/с', type: 'auto', price: 6250000000000, effect: 4800000000, unlock: 'hat2' },
  { id: 'sh22', group: 'code', icon: '😴', name: 'Claude і Codex працюють, поки Шляпа спить', desc: '+8.4B $/с', type: 'auto', price: 10000000000000, effect: 8400000000, unlock: 'hat2' },
  { id: 'sh23', group: 'code', icon: '🐛', name: 'Фікс багів о 4 ранку', desc: '+14.4B $/с', type: 'auto', price: 20000000000000, effect: 14400000000, unlock: 'hat2' },
  { id: 'sh24', group: 'code', icon: '🏛️', name: 'Сайт для Чорнятинського палацу', desc: 'Пам\'ятка архітектури онлайн: +24B $/с', type: 'auto', price: 35000000000000, effect: 24000000000, unlock: 'hat2' },
  { id: 'sh25', group: 'code', icon: '📱', name: 'Застосунок у топі App Store', desc: '+36B $/с', type: 'auto', price: 50000000000000, effect: 36000000000, unlock: 'hat2' },
  { id: 'shB2', group: 'code', icon: '⚡', name: 'Шляпа відкрив Claude Code', desc: 'Увесь вайб-кодинг ×3', type: 'boost', target: 'code', price: 50000000000000, effect: 3, unlock: 'hat2', max: 1 },
  { id: 'hat2x1', group: 'code', icon: '🗺️', name: 'Екскурсія палацом з ШІ-гідом', desc: '+61.2B $/с', type: 'auto', price: 97800000000000, effect: 61200000000, unlock: 'hat2' },
  { id: 'hat2x2', group: 'code', icon: '🏡', name: 'Шляпа робить сайт для села', desc: '+100.8B $/с', type: 'auto', price: 161000000000000, effect: 100800000000, unlock: 'hat2' },
  // ── hat3 ──
  { id: 'shh3', group: 'hands', icon: '😎', name: 'Райбени в золотій оправі', desc: '+24M $ за тап', type: 'tap', price: 3000000000000, effect: 24000000, unlock: 'hat3' },
  { id: 'sh31', group: 'code', icon: '🚀', name: 'Стартап Шляпи', desc: '+54B $/с', type: 'auto', price: 150000000000000, effect: 54000000000, unlock: 'hat3' },
  { id: 'sh32', group: 'code', icon: '💸', name: 'Інвестори в черзі', desc: '+96B $/с', type: 'auto', price: 250000000000000, effect: 96000000000, unlock: 'hat3' },
  { id: 'sh33', group: 'code', icon: '🌍', name: 'ШІ-агенти по всьому світу', desc: '+168B $/с', type: 'auto', price: 450000000000000, effect: 168000000000, unlock: 'hat3' },
  { id: 'sh34', group: 'code', icon: '🚆', name: 'Застосунок з розкладом потягів', desc: '+288B $/с', type: 'auto', price: 750000000000000, effect: 288000000000, unlock: 'hat3' },
  { id: 'sh35', group: 'code', icon: '🧳', name: 'Шляпа кодить у залі очікування', desc: 'Поки потяг запізнюється: +480B $/с', type: 'auto', price: 1250000000000000, effect: 480000000000, unlock: 'hat3' },
  { id: 'shB3', group: 'code', icon: '🎩', name: 'Шляпа — гуру вайб-кодингу', desc: 'Увесь дохід ×2', type: 'boost', target: 'all', price: 625000000000000, effect: 2, unlock: 'hat3', max: 1 },
  { id: 'hat3x1', group: 'code', icon: '🎫', name: 'Бот, що продає квитки', desc: '+816B $/с', type: 'auto', price: 2440000000000000, effect: 816000000000, unlock: 'hat3' },
  { id: 'hat3x2', group: 'code', icon: '🚂', name: 'Шляпа вайб-кодить у потязі', desc: '+1.3T $/с', type: 'auto', price: 4020000000000000, effect: 1344000000000, unlock: 'hat3' },

  // ════════ ВЄТЕЛЬ — RAV4 ════════
  // ── vet1 ──
  { id: 'vth1', group: 'hands', icon: '🗝️', name: 'Ключ від RAV4 на пальці', desc: '+108M $ за тап', type: 'tap', price: 250000000000000, effect: 108000000, unlock: 'vet1' },
  { id: 'vt11', group: 'rav4', icon: '🚙', name: 'Катання на RAV4', desc: 'Вєталь катає всіх: +28.8B $/с', type: 'auto', price: 1500000000000000, effect: 28800000000, unlock: 'vet1' },
  { id: 'vt12', group: 'rav4', icon: '🐗', name: 'Кабани за забором у Вєталя', desc: 'Охороняють RAV4: +50.4B $/с', type: 'auto', price: 2500000000000000, effect: 50400000000, unlock: 'vet1' },
  { id: 'vt13', group: 'rav4', icon: '🧽', name: 'RAV4 після мийки', desc: 'Блищить на весь двір: +86.4B $/с', type: 'auto', price: 4250000000000000, effect: 86400000000, unlock: 'vet1' },
  { id: 'vt14', group: 'rav4', icon: '🌽', name: 'Вєталь годує кабанів', desc: '+144B $/с', type: 'auto', price: 7500000000000000, effect: 144000000000, unlock: 'vet1' },
  { id: 'vt15', group: 'rav4', icon: '🍖', name: 'Шашлик у дворі з видом на RAV4', desc: '+216B $/с', type: 'auto', price: 10000000000000000, effect: 216000000000, unlock: 'vet1' },
  { id: 'vtB1', group: 'rav4', icon: '💎', name: 'Повний фарш RAV4', desc: 'Усі RAV4 ×2', type: 'boost', target: 'rav4', price: 7500000000000000, effect: 2, unlock: 'vet1', max: 1 },
  { id: 'vet1x1', group: 'rav4', icon: '🐖', name: 'RAV4 возить корм кабанам', desc: '+368B $/с', type: 'auto', price: 19600000000000000, effect: 368000000000, unlock: 'vet1' },
  { id: 'vet1x2', group: 'rav4', icon: '🅿️', name: 'Вєталь здає двір під паркінг', desc: '+604B $/с', type: 'auto', price: 32200000000000000, effect: 604000000000, unlock: 'vet1' },
  // ── vet2 ──
  { id: 'vth2', group: 'hands', icon: '😏', name: 'Вєталь знайомиться', desc: '+360M $ за тап', type: 'tap', price: 100000000000000, effect: 360000000, unlock: 'vet2' },
  { id: 'vt21', group: 'rav4', icon: '💃', name: 'Поїздка в Гнівань за подругами', desc: 'На RAV4: +288B $/с', type: 'auto', price: 1750000000000000, effect: 288000000000, unlock: 'vet2' },
  { id: 'vt22', group: 'rav4', icon: '🔊', name: 'Музика на весь RAV4', desc: '+504B $/с', type: 'auto', price: 3000000000000000, effect: 504000000000, unlock: 'vet2' },
  { id: 'vt23', group: 'rav4', icon: '🔋', name: 'RAV4 Hybrid', desc: 'Економія на подруг: +864B $/с', type: 'auto', price: 5000000000000000, effect: 864000000000, unlock: 'vet2' },
  { id: 'vt24', group: 'rav4', icon: '🪩', name: 'Дискотека в Гнівані', desc: '+1.4T $/с', type: 'auto', price: 8750000000000000, effect: 1440000000000, unlock: 'vet2' },
  { id: 'vt25', group: 'rav4', icon: '🌃', name: 'Нічний рейс Гнівань–Вінниця', desc: '+2.2T $/с', type: 'auto', price: 12500000000000000, effect: 2160000000000, unlock: 'vet2' },
  { id: 'vtB2', group: 'rav4', icon: '🔥', name: 'Вєталь тюнінгує RAV4', desc: 'Усі RAV4 ×3', type: 'boost', target: 'rav4', price: 12500000000000000, effect: 3, unlock: 'vet2', max: 1 },
  { id: 'vet2x1', group: 'rav4', icon: '🚖', name: 'RAV4-таксі для подруг', desc: '+3.7T $/с', type: 'auto', price: 24500000000000000, effect: 3680000000000, unlock: 'vet2' },
  { id: 'vet2x2', group: 'rav4', icon: '🕺', name: 'Вєталь танцює до ранку', desc: '+6T $/с', type: 'auto', price: 40200000000000000, effect: 6040000000000, unlock: 'vet2' },
  // ── vet3 ──
  { id: 'vth3', group: 'hands', icon: '🎸', name: 'Гітара Вєталя', desc: '+1.4B $ за тап', type: 'tap', price: 250000000000000, effect: 1440000000, unlock: 'vet3' },
  { id: 'vt31', group: 'rav4', icon: '🏔️', name: 'Поїздка в Карпати', desc: 'Гастролі на RAV4: +3.2T $/с', type: 'auto', price: 10000000000000000, effect: 3240000000000, unlock: 'vet3' },
  { id: 'vt32', group: 'rav4', icon: '🎶', name: 'Вєталь грає на капоті RAV4', desc: '+5.8T $/с', type: 'auto', price: 20000000000000000, effect: 5760000000000, unlock: 'vet3' },
  { id: 'vt33', group: 'rav4', icon: '🔊', name: 'Комбік Marshall у багажнику', desc: '+10.1T $/с', type: 'auto', price: 32500000000000000, effect: 10080000000000, unlock: 'vet3' },
  { id: 'vt34', group: 'rav4', icon: '🎤', name: 'RAV4 на сцені концерту', desc: '+17.3T $/с', type: 'auto', price: 50000000000000000, effect: 17280000000000, unlock: 'vet3' },
  { id: 'vt35', group: 'rav4', icon: '🤘', name: 'Вєталь — гітарист хедлайнера', desc: '+28.8T $/с', type: 'auto', price: 87500000000000000, effect: 28800000000000, unlock: 'vet3' },
  { id: 'vtB3', group: 'rav4', icon: '⭐', name: 'Вєталь — зірка концерту', desc: 'Увесь дохід ×2', type: 'boost', target: 'all', price: 45000000000000000, effect: 2, unlock: 'vet3', max: 1 },
  { id: 'vet3x1', group: 'rav4', icon: '👕', name: 'Мерч Вєталя з RAV4', desc: '+49T $/с', type: 'auto', price: 171000000000000000, effect: 49000000000000, unlock: 'vet3' },
  { id: 'vet3x2', group: 'rav4', icon: '🎟️', name: 'Аншлаг: усі квитки на Вєталя', desc: '+80.6T $/с', type: 'auto', price: 282000000000000000, effect: 80600000000000, unlock: 'vet3' },
];
