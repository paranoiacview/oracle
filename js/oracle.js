const oracle = [
    "Смысл в глубине.",
    "Сила повсюду.",
    "Простодушие - твоя визитка.",
    "Начинайте анализ с себя.",
    "Всегда лучше читать в оригинале.",
    "Мир породил дизайн.",
    "Свобода - в душе.",
    "Ответная часть определяет.",
    "Уроки уверенности преподает взросление.",
    "Природа не терпит обмана.",
    "Не разбрасывайся шансами.",
    "Дальний путь требует витаминов.",
    "В терновом венке холодно зимой.",
    "Определяет сильнейший.",
    "Чемпионы по бегу часто проигрывают.",
    "Чай в пакетиках - это от нетерпеливости.",
    "Все свое носить с собой еще и удобно.",
    "Золотую середину нельзя проверить золотым сечением.",
    "Состраданием бичуют равнодушных.",
    "Бумага все стерпит.",
    "За мысли не накажут.",
    "Иногда и человек располагает.",
    "Начинай с конца.",
    "Последовательность полезна и на вокзале.",
    "Прости его через час.",
    "Безумие уместно в гомеопатии.",
    "Засуху исцели феном.",
    "Осталось завоевать еще немного.",
    "Излучение цезия остановить никому не под силу.",
    "Размышление тренирует реакцию.",
    "Улыбайтесь иногда без зеркала.",
    "На все воля нейронов.",
    "Что больше - мгновение или песчинка.",
    "Все ответы - выше подбородка.",
    "Святая простота не маринуется.",
    "Неизвестное манит.",
    "Ответ всегда рядом.",
    "Попади в два процента.",
    "Тебе повезет на Яндексе.",
    "Будет и на твоей улице праздник.",
    "Береги сестру.",
    "Не ходи между трещин в асфальте.",
    "Перед бурей наблюдали затишье.",
    "Появление состоялось успешно.",
    "Кому не остановка.",
    "Такой нет вывески.",
    "Симулятор - это не эмулятор.",
    "Патина на душе легко отскребается.",
    "Я знаю, что ничего не знаю.",
    "Безгрешие - порок пострашнее Дома-2.",
    "Ты вошел в храм без пожертвования.",
    "Гора все еще не ходит к Магомету.",
    "Мудрость проявится при любом режиме.",
    'Иногда полезно крикнуть "Лыжню!"',
    "Всевышнее повыше высшего.",
    'Серенький волчок не прийдет.',
    'Все - пыль.',
    'Ответ на странице 77 на третьей сверху строчке в книге, которую ты сейчас читаешь.',
    'Гордыня обязывает ограничиться.',
    'Следи за звездами.',
    'Нужно быть добрее.',
    'У страха глаза велики.',
    'Бери номер четыре.',
    'Счастливы познающие в сравнении.',
    'Почисть апельсин перед едой.',
    'Разнообразие не бесконечно.',
    'Предпоследнее бывает удачным.',
    'Юзерпики часто лгут.',
    'Козырного туза не покроешь.',
    'Бесценность - в мыслях.',
    'Радуга - это так наивно.',
    'Поезд всегда выезжает из депо.',
    'Чувство - не материально.',
    'Готовь сани летом.',
    'Не стоит недооценивать.',
    'Не стоит переоценивать.',
    'Главное не забыть, где закладка.',
    'Твой хлеб - в твоей хлебнице.',
    'Правда в том, что это правда.',
    'Энтропия или турбуленция - выбирай.',
    'Время лечит.',
    'Не только тебе улыбнется.',
    'Частокол делается из бревен.',
    'Спамеры умирают молодыми.',
    'Не распыляй молодые силы.',
    'Поздно приходящим - кости.',
    'Виновник всегда в зеркале.',
    'Полезно сменить логический оператор.',
    'Загляни в свою душу.',
    'Ответ будет ждать тебя на улице.',
    'Сними показания электросчетчика.',
    'Тебя не ждет сюрприз.',
    'Съешьте макароны по-флотски.',
    'Поговорите с подругой.',
    'Не хлебом единым.',
    'Пора переходить на вино.',
    'Смерть прославит недоживших.',
    'Бывают и козлы в овечей шкуре.',
    'Ищи, кому выгодно.',
    'Время всех изменит.',
    'Заюня.',
    'Побольше сомнения.',
    'Жизнь кратка, искусство - долго.',
    'Всегда найдутся завистники.',
    'Зайди со входа на Пушечной улице.',
    'Неопределенность определяет.',
    'Вопросы умнят.',
    'Маленький капучино всегда вкуснее большого.',
    'Все хорошие юзернеймы заняли прошлые поколения.',
    'Суета отвлекает.',
    'Задумайся, пока не поздно.',
    'Билеты продаются в кассах.',
    'Год зайца.',
    'Ее уже нет.',
    'Помни о главном.',
    'Сзади поморгают дальним.',
    'Ищи, любитель парадоксов.',
    'Возьми урок пинг-понга.',
    'Безгрешность подозрительна.',
    'За шансом стоит вероятность.',
    'Есть о чем подумать.',
    'Даже веганы вырастают на мясе.',
    'Прибереги сомнения.',
    'Правда у случайного прохожего.',
    'Сначала было яйцо.',
    'Съешь йогурт.', 'Попробуй новый "Колгейт" с отбеливающим эффектом.',
    'Водопад всегда течет сверху вниз.',
    'Смысл всегда проще.',
    'Не стоит утруждать себя.',
    'Подумайте еще раз.',
    'Реинкарнации не существует.',
    'Осваивайте глубины.',
    'Смешать, но не взбалтывать.',
    'Уважайте личную жизнь других.',
    'Истинная причина в другом.',
    'Запасайся терпением.',
    'Гармония не так быстро наступает.',
    'Пришел, увидел, победил.',
    'Со щитом или на щите.',
    'Пресыщение - пробный камень тусклости.',
    'Предназначение не собьешь с толку.',
    'Куда ты денешься с подводной лодки.',
    'Мягкий знак иногда означает твердость.',
    'Не гневи судьбу.',
    'Бывают важные моменты.',
    'Ты давно не плакал.',
    'Не стой на пути.',
    'Давно ли ты пропалывал записную книжку в телефоне?',
    'Бывают незаезженные штампы.',
    'Одни ответы в голове.',
    'Не подглядывай в книге судьбы.',
    'Стройность ног не спрячешь под черными колготками.',
    'Закон - тайга.',
    'Оракул валяется под столом.',
    'Величие раскроется после.',
    'Слова стратега, которым позавидует и тактик.',
    'Переверни глобус, наивность.',
    'Волнует тебя другое.',
    '«Иди спать, Лиз». (Элизабет Гилберт «Есть, молиться, любить»)'
];