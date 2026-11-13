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
  { id: 'fist',     group: 'hands', icon: '🤜', name: 'Пачка в кулаці',            desc: '+1 $ за тап',                         type: 'tap',  price: 10,  effect: 1,   unlock: 'tartak' },
  { id: 'gloves',   group: 'hands', icon: '🚣', name: 'Катамаран о 3 ночі в Тартаку',       desc: 'Катання до ранку: +1 $ за тап',                         type: 'tap',  price: 25,  effect: 1,   unlock: 'tartak' },
  { id: 'lanos1',   group: 'lanos', icon: '🚗', name: 'Ланос з гаража',            desc: 'Таксує по Тартаку: +0.5 $/с',         type: 'auto', price: 10,  effect: 0.5, unlock: 'tartak' },
  { id: 'lanos2',   group: 'lanos', icon: '🥔', name: 'Ланос возить картоплю',     desc: 'Рейси на Корчовку: +1 $/с',            type: 'auto', price: 35,  effect: 1,   unlock: 'tartak' },
  { id: 'lanos3',   group: 'lanos', icon: '🔗', name: 'Причіп від Артмашу на Ланос', desc: 'Возить усе підряд: +2 $/с', type: 'auto', price: 60, effect: 2,   unlock: 'tartak' },
  { id: 'lanosB0',  group: 'lanos', icon: '🌲', name: 'Ялинка-пахучка в Ланос',    desc: 'Усі Ланоси ×1.5',                      type: 'boost', target: 'lanos', price: 75, effect: 1.5, unlock: 'tartak', max: 1 },

  // ── Вінниця ──
  { id: 'count',    group: 'hands', icon: '🧮', name: 'Рахує як касир',            desc: '+3 $ за тап',                         type: 'tap',  price: 500,  effect: 3,  unlock: 'vinnytsia' },
  { id: 'draw1',    group: 'hands', icon: '📐', name: 'Білий креслить деталі для Артмашу', desc: '+5 $ за тап',                type: 'tap',  price: 1250,  effect: 5,  unlock: 'vinnytsia' },
  { id: 'barsetka', group: 'hands', icon: '👝', name: 'Барсетка з Сектора',        desc: '+8 $ за тап',                         type: 'tap',  price: 2500, effect: 8,  unlock: 'vinnytsia' },
  { id: 'lanos4',   group: 'lanos', icon: '🚕', name: 'Ланос-таксі по Вінниці',    desc: '+4 $/с',                               type: 'auto', price: 350,  effect: 4,  unlock: 'vinnytsia' },
  { id: 'lanos5',   group: 'lanos', icon: '⛽', name: 'Ланос на газу',             desc: 'Їздить вдвічі дешевше: +8 $/с',        type: 'auto', price: 750,  effect: 8,  unlock: 'vinnytsia' },
  { id: 'lanos6',   group: 'lanos', icon: '🏭', name: 'Ланос возить зміну на Артмаш', desc: '+14 $/с',                           type: 'auto', price: 1500,  effect: 14, unlock: 'vinnytsia' },
  { id: 'lanos7',   group: 'lanos', icon: '🐷', name: 'Бомж Хрюня стереже Ланос біля АТБ', desc: '+25 $/с', type: 'auto', price: 3000, effect: 25, unlock: 'vinnytsia' },
  { id: 'lanos8',   group: 'lanos', icon: '🏪', name: 'Стоянка Ланосів на Секторі', desc: '+40 $/с',                             type: 'auto', price: 5000, effect: 40, unlock: 'vinnytsia' },
  { id: 'lanosB1',  group: 'lanos', icon: '🔥', name: 'Турбіна на Ланос',          desc: 'Усі Ланоси ×2',                        type: 'boost', target: 'lanos', price: 4000, effect: 2, unlock: 'vinnytsia', max: 1 },

  // ── Варшава ──
  { id: 'pulse',    group: 'hands', icon: '🫀', name: 'Рука на пульсі',            desc: '+20 $ за тап',                        type: 'tap',  price: 10000,  effect: 20,  unlock: 'warsaw' },
  { id: 'goldfinger', group: 'hands', icon: '💍', name: 'Золотий палець',          desc: '+40 $ за тап',                        type: 'tap',  price: 30000, effect: 40,  unlock: 'warsaw' },
  { id: 'lanos9',   group: 'lanos', icon: '🚐', name: 'Ланос-бус Вінниця–Варшава', desc: '+70 $/с',                              type: 'auto', price: 10000,  effect: 70,  unlock: 'warsaw' },
  { id: 'lanos10',  group: 'lanos', icon: '🇵🇱', name: 'Ланос на польських номерах', desc: '+110 $/с',      type: 'auto', price: 17500,  effect: 110, unlock: 'warsaw' },
  { id: 'lanos11',  group: 'lanos', icon: '📜', name: 'Ланос везе креслення Білого', desc: 'Артмаш — у Польщу: +180 $/с',       type: 'auto', price: 30000, effect: 180, unlock: 'warsaw' },
  { id: 'lanos12',  group: 'lanos', icon: '🅿️', name: 'Автопарк Ланосів біля ТЕЦ', desc: '+300 $/с',                             type: 'auto', price: 47500, effect: 300, unlock: 'warsaw' },
  { id: 'lanos13',  group: 'lanos', icon: '🚂', name: 'Ланоси потягом через Жмеринку', desc: '+500 $/с',                         type: 'auto', price: 87500, effect: 500, unlock: 'warsaw' },
  { id: 'lanosB2',  group: 'lanos', icon: '✨', name: 'Золоті диски на Ланос',     desc: 'Усі Ланоси ×2',                        type: 'boost', target: 'lanos', price: 62500, effect: 2, unlock: 'warsaw', max: 1 },

  // ════════ ВУЙКО ════════
  // ── Тарасівка ──
  { id: 'vhand1',   group: 'hands', icon: '💪', name: 'Хватка Вуйка',              desc: '+80 $ за тап',                        type: 'tap',  price: 200000, effect: 80,  unlock: 'tarasivka' },
  { id: 'vuyko1',   group: 'vuyko', icon: '🔑', name: 'Позичити восьмерку у Вуйка', desc: '+300 $/с',                            type: 'auto', price: 100000, effect: 300, unlock: 'tarasivka' },
  { id: 'vuyko2',   group: 'vuyko', icon: '🔧', name: 'Вуйко перебрав двигун',     desc: 'Восьмерка знову на ходу: +550 $/с',    type: 'auto', price: 200000, effect: 550, unlock: 'tarasivka' },
  { id: 'vuyko3',   group: 'vuyko', icon: '🤝', name: 'Вєталь з Вуйком на восьмерці', desc: '+900 $/с',                  type: 'auto', price: 350000, effect: 900, unlock: 'tarasivka' },
  { id: 'vuyko4',   group: 'vuyko', icon: '🏄', name: 'Катання на даху восьмерки',        desc: '+1 500 $/с',                          type: 'auto', price: 625000, effect: 1500, unlock: 'tarasivka' },
  { id: 'vuykoB1',  group: 'vuyko', icon: '⚙️', name: 'Карбюратор від Вуйка',      desc: 'Уся Восьмерка ×2',                     type: 'boost', target: 'vuyko', price: 450000, effect: 2, unlock: 'tarasivka', max: 1 },
  { id: 'tarasivkax1', group: 'vuyko', icon: '🚐', name: 'Вуйко возить туристів до водоспаду', desc: '+2 550 $/с', type: 'auto', price: 1220000, effect: 2550, unlock: 'tarasivka' },
  { id: 'tarasivkax2', group: 'vuyko', icon: '💒', name: 'Восьмерка на сільському весіллі', desc: '+4 200 $/с', type: 'auto', price: 2010000, effect: 4200, unlock: 'tarasivka' },

  // ── Фазенда ──
  { id: 'vhand2',   group: 'hands', icon: '🤝', name: 'Рукостискання на Фазенді',  desc: '+200 $ за тап',                       type: 'tap',  price: 1000000, effect: 200, unlock: 'fazenda' },
  { id: 'vhand3',   group: 'hands', icon: '📞', name: 'Вуйко все вирішує по телефону', desc: '+350 $ за тап',                   type: 'tap',  price: 2000000, effect: 350, unlock: 'fazenda' },
  { id: 'vuyko5',   group: 'vuyko', icon: '🏡', name: 'Восьмерка під\'їжджає до Фазенди', desc: '+2 500 $/с',                    type: 'auto', price: 750000, effect: 2500, unlock: 'fazenda' },
  { id: 'vuyko6',   group: 'vuyko', icon: '🧍', name: 'Вєталь катається на даху восьмерки',       desc: 'Вся Фазенда знімає: +4 000 $/с',      type: 'auto', price: 1250000, effect: 4000, unlock: 'fazenda' },
  { id: 'vuyko7',   group: 'vuyko', icon: '🛞', name: 'Восьмерка на дисках R15',   desc: '+6 500 $/с',                          type: 'auto', price: 2500000, effect: 6500, unlock: 'fazenda' },
  { id: 'vuyko8',   group: 'vuyko', icon: '🥂', name: 'Банкет на Фазенді до ранку',  desc: '+10 000 $/с',                         type: 'auto', price: 4000000, effect: 10000, unlock: 'fazenda' },
  { id: 'vuyko9',   group: 'vuyko', icon: '🛞', name: 'Вуйко міняє колеса всьому району',  desc: '+16 000 $/с',  type: 'auto', price: 6250000, effect: 16000, unlock: 'fazenda' },
  { id: 'vuykoB2',  group: 'vuyko', icon: '🏎️', name: 'Спорт-тюнінг восьмерки',  desc: 'Уся Восьмерка ×3',                     type: 'boost', target: 'vuyko', price: 6250000, effect: 3, unlock: 'fazenda', max: 1 },
  { id: 'fazendax1', group: 'vuyko', icon: '🅿️', name: 'Парковка восьмерок біля Фазенди', desc: '+27 200 $/с', type: 'auto', price: 12200000, effect: 27200, unlock: 'fazenda' },
  { id: 'fazendax2', group: 'vuyko', icon: '🎧', name: 'Вуйко — діджей на Фазенді', desc: '+44 800 $/с', type: 'auto', price: 20100000, effect: 44800, unlock: 'fazenda' },

  // ── Одеса ──
  { id: 'vhand4',   group: 'hands', icon: '💎', name: 'Перстень з Аркадії',        desc: '+800 $ за тап',                       type: 'tap',  price: 75000000, effect: 800, unlock: 'odesa' },
  { id: 'vuyko10',  group: 'vuyko', icon: '🌊', name: 'Восьмерка-кабріолет в Аркадії', desc: 'Катає туристів: +30 000 $/с',     type: 'auto', price: 62500000, effect: 30000, unlock: 'odesa' },
  { id: 'vuyko11',  group: 'vuyko', icon: '🐟', name: 'Восьмерка на Привозі',  desc: 'Возить рибу: +50 000 $/с',                         type: 'auto', price: 100000000, effect: 50000, unlock: 'odesa' },
  { id: 'vuyko12',  group: 'vuyko', icon: '🌀', name: 'Дрифт на восьмерці в Аркадії', desc: 'Збирає натовп: +80 000 $/с',         type: 'auto', price: 175000000, effect: 80000, unlock: 'odesa' },
  { id: 'vuyko13',  group: 'vuyko', icon: '⚓', name: 'Вуйко продає восьмерки в порту', desc: '+130 000 $/с',     type: 'auto', price: 300000000, effect: 130000, unlock: 'odesa' },
  { id: 'vuykoB3',  group: 'vuyko', icon: '👑', name: 'Вуйко — король Аркадії',    desc: 'Увесь дохід ×2',                       type: 'boost', target: 'all', price: 250000000, effect: 2, unlock: 'odesa', max: 1 },
  { id: 'odesax1', group: 'vuyko', icon: '🏖️', name: 'Восьмерка на пляжі Ланжерон', desc: '+221 000 $/с', type: 'auto', price: 586000000, effect: 221000, unlock: 'odesa' },
  { id: 'odesax2', group: 'vuyko', icon: '🌆', name: 'Вуйко катає по Дерибасівській', desc: '+364 000 $/с', type: 'auto', price: 966000000, effect: 364000, unlock: 'odesa' },

  // ════════ МАСКІМ — КОВА ════════
  // ── maxim1 ──
  { id: 'kvh1', group: 'hands', icon: '🛏️', name: 'Ночівля на гаражі', desc: '+15 000 $ за тап', type: 'tap', price: 125000000, effect: 15000, unlock: 'maxim1' },
  { id: 'kv11', group: 'kova', icon: '🔑', name: 'Маскім заводить Кову', desc: 'З третього разу: +4M $/с', type: 'auto', price: 750000000, effect: 4000000, unlock: 'maxim1' },
  { id: 'kv12', group: 'kova', icon: '⛓️', name: 'Новий ланцюг на Кову', desc: '+7M $/с', type: 'auto', price: 1250000000, effect: 7000000, unlock: 'maxim1' },
  { id: 'kv13', group: 'kova', icon: '🌙', name: 'Нічні покатушки на Кові', desc: '+12M $/с', type: 'auto', price: 2000000000, effect: 12000000, unlock: 'maxim1' },
  { id: 'kv14', group: 'kova', icon: '🏭', name: 'Маскім возить метал з Артмашу', desc: 'На Кові з причепом: +20M $/с', type: 'auto', price: 3500000000, effect: 20000000, unlock: 'maxim1' },
  { id: 'kv15', group: 'kova', icon: '☕', name: 'Кава зі стаканчика в цеху', desc: 'Заряд на всю зміну: +30M $/с', type: 'auto', price: 5000000000, effect: 30000000, unlock: 'maxim1' },
  { id: 'kvB1', group: 'kova', icon: '🪖', name: 'Новий шолом для Маскіма', desc: 'Уся Кова ×2', type: 'boost', target: 'kova', price: 4000000000, effect: 2, unlock: 'maxim1', max: 1 },
  { id: 'maxim1x1', group: 'kova', icon: '🍱', name: 'Кова розвозить обіди по цехах', desc: '+51M $/с', type: 'auto', price: 9770000000, effect: 51000000, unlock: 'maxim1' },
  { id: 'maxim1x2', group: 'kova', icon: '📦', name: 'Маскім — кур\'єр Артмашу', desc: '+84M $/с', type: 'auto', price: 16100000000, effect: 84000000, unlock: 'maxim1' },
  // ── maxim2 ──
  { id: 'kvh2', group: 'hands', icon: '✊', name: 'Газ на повну', desc: '+50 000 $ за тап', type: 'tap', price: 2000000000, effect: 50000, unlock: 'maxim2' },
  { id: 'kv21', group: 'kova', icon: '💨', name: 'Кова з прямотоком', desc: 'Чути на весь Ермітаж: +40M $/с', type: 'auto', price: 32500000000, effect: 40000000, unlock: 'maxim2' },
  { id: 'kv22', group: 'kova', icon: '🌊', name: 'Квадроцикли по воді', desc: 'Маскім ганяє по річці: +70M $/с', type: 'auto', price: 62500000000, effect: 70000000, unlock: 'maxim2' },
  { id: 'kv23', group: 'kova', icon: '🏍️', name: 'Під\'їзд на Кові до Ермітажу', desc: '+120M $/с', type: 'auto', price: 100000000000, effect: 120000000, unlock: 'maxim2' },
  { id: 'kv24', group: 'kova', icon: '🍕', name: 'Доставка піци на Кові', desc: '+200M $/с', type: 'auto', price: 150000000000, effect: 200000000, unlock: 'maxim2' },
  { id: 'kv25', group: 'kova', icon: '🍾', name: 'Розпиття водки на Ермітажі', desc: 'Кова чекає на парковці: +300M $/с', type: 'auto', price: 250000000000, effect: 300000000, unlock: 'maxim2' },
  { id: 'kvB2', group: 'kova', icon: '🛞', name: 'Нова гума на Кову', desc: 'Уся Кова ×3', type: 'boost', target: 'kova', price: 250000000000, effect: 3, unlock: 'maxim2', max: 1 },
  { id: 'maxim2x1', group: 'kova', icon: '🌃', name: 'Нічна парковка Ков біля Ермітажу', desc: '+510M $/с', type: 'auto', price: 489000000000, effect: 510000000, unlock: 'maxim2' },
  { id: 'maxim2x2', group: 'kova', icon: '🕴️', name: 'Маскім — фейсконтроль на Ермітажі', desc: '+840M $/с', type: 'auto', price: 805000000000, effect: 840000000, unlock: 'maxim2' },
  { id: 'maxim2x3', group: 'kova', icon: '🚕', name: 'Кова-таксі додому після Ермітажу', desc: '+1.4B $/с', type: 'auto', price: 1290000000000, effect: 1350000000, unlock: 'maxim2' },
  // ── maxim3 ──
  { id: 'kvh3', group: 'hands', icon: '📘', name: 'Залікова книжка Маскіма', desc: '+200 000 $ за тап', type: 'tap', price: 27500000000, effect: 200000, unlock: 'maxim3' },
  { id: 'kv31', group: 'kova', icon: '🎬', name: 'Трюки на задньому колесі', desc: 'Мільйон переглядів: +450M $/с', type: 'auto', price: 1250000000000, effect: 450000000, unlock: 'maxim3' },
  { id: 'kv32', group: 'kova', icon: '🏍️', name: 'Мотоклуб Маскіма', desc: '+800M $/с', type: 'auto', price: 2250000000000, effect: 800000000, unlock: 'maxim3' },
  { id: 'kv33', group: 'kova', icon: '🚣', name: 'Стрибок через ставок у Тартаку', desc: '+1.4B $/с', type: 'auto', price: 4000000000000, effect: 1400000000, unlock: 'maxim3' },
  { id: 'kv34', group: 'kova', icon: '🧑‍🎓', name: 'Маскім возить одногрупників на Кові', desc: '+2.4B $/с', type: 'auto', price: 6250000000000, effect: 2400000000, unlock: 'maxim3' },
  { id: 'kv35', group: 'kova', icon: '🏭', name: 'Спонсор — Артмаш', desc: '+4B $/с', type: 'auto', price: 10000000000000, effect: 4000000000, unlock: 'maxim3' },
  { id: 'kvB3', group: 'kova', icon: '🎓', name: 'Маскім — легенда бурсітєту', desc: 'Увесь дохід ×2', type: 'boost', target: 'all', price: 5000000000000, effect: 2, unlock: 'maxim3', max: 1 },
  { id: 'maxim3x1', group: 'kova', icon: '📝', name: 'Маскім здає залік на Кові', desc: '+6.8B $/с', type: 'auto', price: 19600000000000, effect: 6800000000, unlock: 'maxim3' },
  { id: 'maxim3x2', group: 'kova', icon: '🏫', name: 'Кова на парковці бурсітєту', desc: '+11.2B $/с', type: 'auto', price: 32200000000000, effect: 11200000000, unlock: 'maxim3' },

  // ════════ ШЛЯПА — CLAUDE / CODEX ════════
  // ── hat1 ──
  { id: 'shh1', group: 'hands', icon: '🕶️', name: 'Шляпа в райбенах', desc: 'Стиль +100: +900 000 $ за тап', type: 'tap', price: 1500000000000, effect: 900000, unlock: 'hat1' },
  { id: 'sh11', group: 'code', icon: '💬', name: 'Шляпа відкрив Claude', desc: 'Перший промпт: +240M $/с', type: 'auto', price: 7500000000000, effect: 240000000, unlock: 'hat1' },
  { id: 'sh12', group: 'code', icon: '🧩', name: 'Codex пише код за Шляпу', desc: '+420M $/с', type: 'auto', price: 12500000000000, effect: 420000000, unlock: 'hat1' },
  { id: 'sh13', group: 'code', icon: '🔁', name: 'Промпт з третьої спроби', desc: 'Зате працює: +720M $/с', type: 'auto', price: 22500000000000, effect: 720000000, unlock: 'hat1' },
  { id: 'sh14', group: 'code', icon: '🌳', name: 'Вайб-кодинг на природі в Станіславчику', desc: 'Ноут на пеньку: +1.2B $/с', type: 'auto', price: 35000000000000, effect: 1200000000, unlock: 'hat1' },
  { id: 'sh15', group: 'code', icon: '🏭', name: 'Сайт для Артмашу', desc: '+1.8B $/с', type: 'auto', price: 50000000000000, effect: 1800000000, unlock: 'hat1' },
  { id: 'shB1', group: 'code', icon: '🧠', name: 'Підписка на Claude', desc: 'Увесь вайб-кодинг ×2', type: 'boost', target: 'code', price: 40000000000000, effect: 2, unlock: 'hat1', max: 1 },
  { id: 'hat1x1', group: 'code', icon: '🎣', name: 'Шляпа пише бота для риболовлі', desc: '+3.1B $/с', type: 'auto', price: 97800000000000, effect: 3060000000, unlock: 'hat1' },
  { id: 'hat1x2', group: 'code', icon: '🍢', name: 'Claude планує шашлики', desc: '+5B $/с', type: 'auto', price: 161000000000000, effect: 5040000000, unlock: 'hat1' },
  // ── hat2 ──
  { id: 'shh2', group: 'hands', icon: '⌨️', name: 'Механічна клавіатура Шляпи', desc: '+3M $ за тап', type: 'tap', price: 425000000000, effect: 3000000, unlock: 'hat2' },
  { id: 'sh21', group: 'code', icon: '🎮', name: 'Шляпа робить Telegram-гру', desc: 'Оцю саму: +2.4B $/с', type: 'auto', price: 6250000000000, effect: 2400000000, unlock: 'hat2' },
  { id: 'sh22', group: 'code', icon: '😴', name: 'Claude і Codex працюють, поки Шляпа спить', desc: '+4.2B $/с', type: 'auto', price: 10000000000000, effect: 4200000000, unlock: 'hat2' },
  { id: 'sh23', group: 'code', icon: '🐛', name: 'Фікс багів о 4 ранку', desc: '+7.2B $/с', type: 'auto', price: 20000000000000, effect: 7200000000, unlock: 'hat2' },
  { id: 'sh24', group: 'code', icon: '🏛️', name: 'Сайт для Чорнятинського палацу', desc: 'Пам\'ятка архітектури онлайн: +12B $/с', type: 'auto', price: 35000000000000, effect: 12000000000, unlock: 'hat2' },
  { id: 'sh25', group: 'code', icon: '📱', name: 'Застосунок у топі App Store', desc: '+18B $/с', type: 'auto', price: 50000000000000, effect: 18000000000, unlock: 'hat2' },
  { id: 'shB2', group: 'code', icon: '⚡', name: 'Шляпа відкрив Claude Code', desc: 'Увесь вайб-кодинг ×3', type: 'boost', target: 'code', price: 50000000000000, effect: 3, unlock: 'hat2', max: 1 },
  { id: 'hat2x1', group: 'code', icon: '🗺️', name: 'Екскурсія палацом з ШІ-гідом', desc: '+30.6B $/с', type: 'auto', price: 97800000000000, effect: 30600000000, unlock: 'hat2' },
  { id: 'hat2x2', group: 'code', icon: '🏡', name: 'Шляпа робить сайт для села', desc: '+50.4B $/с', type: 'auto', price: 161000000000000, effect: 50400000000, unlock: 'hat2' },
  // ── hat3 ──
  { id: 'shh3', group: 'hands', icon: '😎', name: 'Райбени в золотій оправі', desc: '+12M $ за тап', type: 'tap', price: 3000000000000, effect: 12000000, unlock: 'hat3' },
  { id: 'sh31', group: 'code', icon: '🚀', name: 'Стартап Шляпи', desc: '+27B $/с', type: 'auto', price: 150000000000000, effect: 27000000000, unlock: 'hat3' },
  { id: 'sh32', group: 'code', icon: '💸', name: 'Інвестори в черзі', desc: '+48B $/с', type: 'auto', price: 250000000000000, effect: 48000000000, unlock: 'hat3' },
  { id: 'sh33', group: 'code', icon: '🌍', name: 'ШІ-агенти по всьому світу', desc: '+84B $/с', type: 'auto', price: 450000000000000, effect: 84000000000, unlock: 'hat3' },
  { id: 'sh34', group: 'code', icon: '🚆', name: 'Застосунок з розкладом потягів', desc: '+144B $/с', type: 'auto', price: 750000000000000, effect: 144000000000, unlock: 'hat3' },
  { id: 'sh35', group: 'code', icon: '🧳', name: 'Шляпа кодить у залі очікування', desc: 'Поки потяг запізнюється: +240B $/с', type: 'auto', price: 1250000000000000, effect: 240000000000, unlock: 'hat3' },
  { id: 'shB3', group: 'code', icon: '🎩', name: 'Шляпа — гуру вайб-кодингу', desc: 'Увесь дохід ×2', type: 'boost', target: 'all', price: 625000000000000, effect: 2, unlock: 'hat3', max: 1 },
  { id: 'hat3x1', group: 'code', icon: '🎫', name: 'Бот, що продає квитки', desc: '+408B $/с', type: 'auto', price: 2440000000000000, effect: 408000000000, unlock: 'hat3' },
  { id: 'hat3x2', group: 'code', icon: '🚂', name: 'Шляпа вайб-кодить у потязі', desc: '+672B $/с', type: 'auto', price: 4020000000000000, effect: 672000000000, unlock: 'hat3' },

  // ════════ ВЄТЕЛЬ — RAV4 ════════
  // ── vet1 ──
  { id: 'vth1', group: 'hands', icon: '🗝️', name: 'Ключ від RAV4 на пальці', desc: '+54M $ за тап', type: 'tap', price: 250000000000000, effect: 54000000, unlock: 'vet1' },
  { id: 'vt11', group: 'rav4', icon: '🚙', name: 'Катання на RAV4', desc: 'Вєталь катає всіх: +14.4B $/с', type: 'auto', price: 1500000000000000, effect: 14400000000, unlock: 'vet1' },
  { id: 'vt12', group: 'rav4', icon: '🐗', name: 'Кабани за забором у Вєталя', desc: 'Охороняють RAV4: +25.2B $/с', type: 'auto', price: 2500000000000000, effect: 25200000000, unlock: 'vet1' },
  { id: 'vt13', group: 'rav4', icon: '🧽', name: 'RAV4 після мийки', desc: 'Блищить на весь двір: +43.2B $/с', type: 'auto', price: 4250000000000000, effect: 43200000000, unlock: 'vet1' },
  { id: 'vt14', group: 'rav4', icon: '🌽', name: 'Вєталь годує кабанів', desc: '+72B $/с', type: 'auto', price: 7500000000000000, effect: 72000000000, unlock: 'vet1' },
  { id: 'vt15', group: 'rav4', icon: '🍖', name: 'Шашлик у дворі з видом на RAV4', desc: '+108B $/с', type: 'auto', price: 10000000000000000, effect: 108000000000, unlock: 'vet1' },
  { id: 'vtB1', group: 'rav4', icon: '💎', name: 'Повний фарш RAV4', desc: 'Усі RAV4 ×2', type: 'boost', target: 'rav4', price: 7500000000000000, effect: 2, unlock: 'vet1', max: 1 },
  { id: 'vet1x1', group: 'rav4', icon: '🐖', name: 'RAV4 возить корм кабанам', desc: '+184B $/с', type: 'auto', price: 19600000000000000, effect: 184000000000, unlock: 'vet1' },
  { id: 'vet1x2', group: 'rav4', icon: '🅿️', name: 'Вєталь здає двір під паркінг', desc: '+302B $/с', type: 'auto', price: 32200000000000000, effect: 302000000000, unlock: 'vet1' },
  // ── vet2 ──
  { id: 'vth2', group: 'hands', icon: '😏', name: 'Вєталь знайомиться', desc: '+180M $ за тап', type: 'tap', price: 100000000000000, effect: 180000000, unlock: 'vet2' },
  { id: 'vt21', group: 'rav4', icon: '💃', name: 'Поїздка в Гнівань за подругами', desc: 'На RAV4: +144B $/с', type: 'auto', price: 1750000000000000, effect: 144000000000, unlock: 'vet2' },
  { id: 'vt22', group: 'rav4', icon: '🔊', name: 'Музика на весь RAV4', desc: '+252B $/с', type: 'auto', price: 3000000000000000, effect: 252000000000, unlock: 'vet2' },
  { id: 'vt23', group: 'rav4', icon: '🔋', name: 'RAV4 Hybrid', desc: 'Економія на подруг: +432B $/с', type: 'auto', price: 5000000000000000, effect: 432000000000, unlock: 'vet2' },
  { id: 'vt24', group: 'rav4', icon: '🪩', name: 'Дискотека в Гнівані', desc: '+720B $/с', type: 'auto', price: 8750000000000000, effect: 720000000000, unlock: 'vet2' },
  { id: 'vt25', group: 'rav4', icon: '🌃', name: 'Нічний рейс Гнівань–Вінниця', desc: '+1.1T $/с', type: 'auto', price: 12500000000000000, effect: 1080000000000, unlock: 'vet2' },
  { id: 'vtB2', group: 'rav4', icon: '🔥', name: 'Вєталь тюнінгує RAV4', desc: 'Усі RAV4 ×3', type: 'boost', target: 'rav4', price: 12500000000000000, effect: 3, unlock: 'vet2', max: 1 },
  { id: 'vet2x1', group: 'rav4', icon: '🚖', name: 'RAV4-таксі для подруг', desc: '+1.8T $/с', type: 'auto', price: 24500000000000000, effect: 1840000000000, unlock: 'vet2' },
  { id: 'vet2x2', group: 'rav4', icon: '🕺', name: 'Вєталь танцює до ранку', desc: '+3T $/с', type: 'auto', price: 40200000000000000, effect: 3020000000000, unlock: 'vet2' },
  // ── vet3 ──
  { id: 'vth3', group: 'hands', icon: '🎸', name: 'Гітара Вєталя', desc: '+720M $ за тап', type: 'tap', price: 250000000000000, effect: 720000000, unlock: 'vet3' },
  { id: 'vt31', group: 'rav4', icon: '🏔️', name: 'Поїздка в Карпати', desc: 'Гастролі на RAV4: +1.6T $/с', type: 'auto', price: 10000000000000000, effect: 1620000000000, unlock: 'vet3' },
  { id: 'vt32', group: 'rav4', icon: '🎶', name: 'Вєталь грає на капоті RAV4', desc: '+2.9T $/с', type: 'auto', price: 20000000000000000, effect: 2880000000000, unlock: 'vet3' },
  { id: 'vt33', group: 'rav4', icon: '🔊', name: 'Комбік Marshall у багажнику', desc: '+5T $/с', type: 'auto', price: 32500000000000000, effect: 5040000000000, unlock: 'vet3' },
  { id: 'vt34', group: 'rav4', icon: '🎤', name: 'RAV4 на сцені концерту', desc: '+8.6T $/с', type: 'auto', price: 50000000000000000, effect: 8640000000000, unlock: 'vet3' },
  { id: 'vt35', group: 'rav4', icon: '🤘', name: 'Вєталь — гітарист хедлайнера', desc: '+14.4T $/с', type: 'auto', price: 87500000000000000, effect: 14400000000000, unlock: 'vet3' },
  { id: 'vtB3', group: 'rav4', icon: '⭐', name: 'Вєталь — зірка концерту', desc: 'Увесь дохід ×2', type: 'boost', target: 'all', price: 45000000000000000, effect: 2, unlock: 'vet3', max: 1 },
  { id: 'vet3x1', group: 'rav4', icon: '👕', name: 'Мерч Вєталя з RAV4', desc: '+24.5T $/с', type: 'auto', price: 171000000000000000, effect: 24500000000000, unlock: 'vet3' },
  { id: 'vet3x2', group: 'rav4', icon: '🎟️', name: 'Аншлаг: усі квитки на Вєталя', desc: '+40.3T $/с', type: 'auto', price: 282000000000000000, effect: 40300000000000, unlock: 'vet3' },
];
