const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";\n\nexport default {
  "basePath": publicBase,
  "template": {
    "specialty": "nails",
    "bookingProvider": "Телефон",
    "reviewSource": "Яндекс Карты"
  },
  "brand": {
    "name": "Мария Майер",
    "subtitle": "Мастер маникюра и педикюра",
    "monogram": "ММ"
  },
  "master": {
    "name": "Мария",
    "dative": "Марии",
    "genitive": "Марии",
    "instrumental": "Марией",
    "monogram": "ММ",
    "profession": "мастер маникюра и педикюра",
    "heroTitle": "",
    "heroEmphasis": "эксперт по маникюру и педикюру",
    "heroCaption": "Мастер маникюра и педикюра",
    "imageAlt": "мастер маникюра и педикюра",
    "heroCopy": "Маникюр, педикюр и уход за ногтями с вниманием к аккуратности, форме и качеству результата.",
    "visitMotto": "",
    "experienceYears": null,
    "experienceAria": "",
    "aboutTitle": "Мария Майер",
    "aboutLead": "",
    "aboutParagraphs": [],
    "skills": []
  },
  "location": {
    "country": "Россия",
    "countryCode": "RU",
    "city": "Москва",
    "metro": "",
    "cityMetro": "Москва",
    "address": "ул. Коминтерна, 15, Москва",
    "mapCardAddress": "ул. Коминтерна, 15, Москва",
    "schedule": "По предварительной записи",
    "scheduleCapitalized": "По предварительной записи",
    "timeZone": "Europe/Moscow",
    "openTime": "00:00",
    "closeTime": "00:00"
  },
  "contacts": {
    "phoneDisplay": "+7 (916) 967-77-77",
    "phoneHref": "tel:+79169677777",
    "channels": [
      {
        "type": "telegram",
        "label": "Telegram",
        "url": "https://t.me/mmayer_nails"
      },
      {
        "type": "whatsapp",
        "label": "WhatsApp",
        "url": "https://wa.me/79169677777?text=Обращение+из+Яндекс+Карт%0AЗдравствуйте!+Меня+заинтересовало+ваше+предложение"
      }
    ],
    "messenger": null
  },
  "links": {
    "bookingUrl": "",
    "reviewsUrl": "https://yandex.com/maps/org/maria_mayer_nails/186899641276/",
    "mapUrl": "https://yandex.com/maps/org/maria_mayer_nails/186899641276/",
    "routeUrl": "https://yandex.com/maps/org/maria_mayer_nails/186899641276/",
    "mobileMapEmbedUrl": "about:blank",
    "desktopMapEmbedUrl": "about:blank",
    "yandexMapHrefMatch": "186899641276"
  },
  "reputation": {
    "rating": "5.0",
    "reviewCount": "75"
  },
  "images": {
    "logo": `${publicBase}/logo.png`,
    "portrait": `${publicBase}/masterpc.webp`,
    "portraitDesktop": `${publicBase}/masterpc.webp`,
    "about": `${publicBase}/master.webp`,
    "favicon": `${publicBase}/favicon-source.png`,
    "heroDecoration": `${publicBase}/assets/template/hair-tools.png`,
    "beforeAfter": [],
    "gallery": [
      {
        "src": `${publicBase}/galery00001.webp`,
        "alt": "Работа Марии — 1"
      },
      {
        "src": `${publicBase}/galery00002.webp`,
        "alt": "Работа Марии — 2"
      },
      {
        "src": `${publicBase}/galery00003.webp`,
        "alt": "Работа Марии — 3"
      },
      {
        "src": `${publicBase}/galery00004.webp`,
        "alt": "Работа Марии — 4"
      },
      {
        "src": `${publicBase}/galery00005.webp`,
        "alt": "Работа Марии — 5"
      },
      {
        "src": `${publicBase}/galery00006.webp`,
        "alt": "Работа Марии — 6"
      },
      {
        "src": `${publicBase}/galery00007.webp`,
        "alt": "Работа Марии — 7"
      },
      {
        "src": `${publicBase}/galery00008.webp`,
        "alt": "Работа Марии — 8"
      },
      {
        "src": `${publicBase}/galery00009.webp`,
        "alt": "Работа Марии — 9"
      },
      {
        "src": `${publicBase}/galery00010.webp`,
        "alt": "Работа Марии — 10"
      }
    ]
  },
  "services": {
    "groups": [
      {
        "id": "manicure",
        "label": "Маникюр",
        "services": [
          {
            "name": "Женский маникюр",
            "price": "от 1 200 ₽",
            "time": "40 мин.",
            "description": "",
            "url": ""
          },
          {
            "name": "Снятие гель-лака",
            "price": "от 600 ₽",
            "time": "20 мин.",
            "description": "",
            "url": ""
          },
          {
            "name": "Снятие наращивания ногтей",
            "price": "от 900 ₽",
            "time": "30 мин.",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "manicure-complex",
        "label": "Маникюр комплекс",
        "services": [
          {
            "name": "Маникюр комплекс Lite",
            "price": "от 2 800 ₽",
            "time": "1 час",
            "description": "Маникюр, выравнивание ногтевой пластины, покрытие гель лаком. Снятие не входит!",
            "url": ""
          },
          {
            "name": "Маникюр комплекс Mid",
            "price": "от 3 200 ₽",
            "time": "1 час 20 мин.",
            "description": "Снятие гель лака, маникюр, выравнивание ногтевой пластины, покрытие гель лаком",
            "url": ""
          },
          {
            "name": "Маникюр комплекс Top",
            "price": "от 3 600 ₽",
            "time": "1 час 30 мин.",
            "description": "Снятие гель лака, маникюр, укрепление ногтевой пластины гелем, покрытие гель лаком",
            "url": ""
          }
        ]
      },
      {
        "id": "pedicure",
        "label": "Педикюр",
        "services": [
          {
            "name": "Педикюр Smart",
            "price": "от 2 800 ₽",
            "time": "1 час",
            "description": "Обработка стоп с помощью смарт дисков и смарт масла без покрытия, придание формы ногтям, обработка кутикулы.",
            "url": ""
          },
          {
            "name": "Педикюр пальчики с покрытием",
            "price": "от 2 800 ₽",
            "time": "40 мин.",
            "description": "Снятие гель лака, обработка пальчиков и покрытие гель лаком",
            "url": ""
          },
          {
            "name": "Решение проблемы вросших ногтей",
            "price": "от 3 000 ₽",
            "time": "40 мин.",
            "description": "Коррекция вросшего ногтя инновационным методом",
            "url": ""
          },
          {
            "name": "Экспресс педикюр пальчики",
            "price": "от 1 500 ₽",
            "time": "30 мин.",
            "description": "Обработка пальчиков ( придание формы ногтям, обработка кутикулы)",
            "url": ""
          }
        ]
      },
      {
        "id": "pedicure-complex",
        "label": "Педикюр комплекс",
        "services": [
          {
            "name": "Педикюр комплекс Lite",
            "price": "от 2 500 ₽",
            "time": "1 час",
            "description": "Полная обработка стоп и пальцев ног в комбинированной технике",
            "url": ""
          },
          {
            "name": "Педикюр комплекс Mid",
            "price": "от 3 600 ₽",
            "time": "1 час 30 мин.",
            "description": "Снятие гель-лака, полная обработка стоп и пальцев ног, покрытие гель-лаком",
            "url": ""
          },
          {
            "name": "Педикюр комплекс Top",
            "price": "от 4 000 ₽",
            "time": "1 час 30 мин.",
            "description": "Снятие гель-лака, полная смарт обработка стоп и пальцев ног, покрытие гель-лаком",
            "url": ""
          }
        ]
      },
      {
        "id": "design",
        "label": "Дизайн",
        "services": [
          {
            "name": "Втирка",
            "price": "от 500 ₽",
            "time": "10 мин.",
            "description": "",
            "url": ""
          },
          {
            "name": "Дизайн простой",
            "price": "от 50 ₽",
            "time": "5 мин.",
            "description": "Наклейки, фигурки, простой рисунок",
            "url": ""
          },
          {
            "name": "Френч",
            "price": "от 600 ₽",
            "time": "20 мин.",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "coating",
        "label": "Виды покрытия",
        "services": [
          {
            "name": "Лечебное покрытие",
            "price": "от 400 ₽",
            "time": "30 мин.",
            "description": "Покрытие лечебным лаком",
            "url": ""
          },
          {
            "name": "Покрытие лаком",
            "price": "от 500 ₽",
            "time": "30 мин.",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "extension",
        "label": "Наращивание ногтей",
        "services": [
          {
            "name": "Коррекция наращенных ногтей",
            "price": "от 3 900 ₽",
            "time": "1 час 40 мин.",
            "description": "",
            "url": ""
          },
          {
            "name": "Наращивание ногтей",
            "price": "от 4 300 ₽",
            "time": "2 часа",
            "description": "Длина 1-4",
            "url": ""
          },
          {
            "name": "Наращивание ногтей 4-6",
            "price": "от 5 000 ₽",
            "time": "2 часа 20 мин.",
            "description": "Длина 5-9",
            "url": ""
          }
        ]
      }
    ]
  },
  "i18n": {
    "localLocale": "ru",
    "locales": [
      {
        "code": "ru",
        "label": "RU"
      },
      {
        "code": "en",
        "label": "EN"
      }
    ],
    "translations": {
      "en": {
        "мастер маникюра и педикюра": "manicure and pedicure specialist",
        "эксперт по маникюру и педикюру": "manicure and pedicure expert",
        "Мастер маникюра и педикюра": "Manicure and pedicure specialist",
        "Маникюр, педикюр и уход за ногтями с вниманием к аккуратности, форме и качеству результата.": "Manicure, pedicure and nail care with attention to precision, shape and quality.",
        "Мария Майер": "Maria Mayer",
        "Я Мария — эксперт по маникюру и педикюру.": "I am Maria — a manicure and pedicure expert.",
        "Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.": "I provide manicure and pedicure, nail extensions and corrections.",
        "Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.": "I work with sterile instruments and pay close attention to precision, shape and the quality of the result.",
        "Маникюр и педикюр": "Manicure and pedicure",
        "Наращивание и коррекция": "Extensions and corrections",
        "Стерильные инструменты": "Sterile instruments",
        "Москва": "Moscow",
        "ул. Коминтерна, 15, Москва": "15 Kominterna St, Moscow",
        "По предварительной записи": "By appointment",
        "Маникюр": "Manicure",
        "Женский маникюр": "Women's manicure",
        "Снятие гель-лака": "Gel polish removal",
        "Снятие наращивания ногтей": "Nail extension removal",
        "Маникюр комплекс": "Manicure packages",
        "Маникюр комплекс Lite": "Manicure package Lite",
        "Маникюр комплекс Mid": "Manicure package Mid",
        "Маникюр комплекс Top": "Manicure package Top",
        "Маникюр, выравнивание ногтевой пластины, покрытие гель лаком. Снятие не входит!": "Manicure, nail plate leveling and gel polish. Removal is not included!",
        "Снятие гель лака, маникюр, выравнивание ногтевой пластины, покрытие гель лаком": "Gel polish removal, manicure, nail plate leveling and gel polish.",
        "Снятие гель лака, маникюр, укрепление ногтевой пластины гелем, покрытие гель лаком": "Gel polish removal, manicure, gel strengthening of the nail plate and gel polish.",
        "Педикюр": "Pedicure",
        "Педикюр Smart": "Smart pedicure",
        "Обработка стоп с помощью смарт дисков и смарт масла без покрытия, придание формы ногтям, обработка кутикулы.": "Foot treatment with smart discs and smart oil without coating, nail shaping and cuticle treatment.",
        "Педикюр пальчики с покрытием": "Toe pedicure with coating",
        "Снятие гель лака, обработка пальчиков и покрытие гель лаком": "Gel polish removal, toe treatment and gel polish.",
        "Решение проблемы вросших ногтей": "Ingrown nail treatment",
        "Коррекция вросшего ногтя инновационным методом": "Ingrown nail correction using an innovative method.",
        "Экспресс педикюр пальчики": "Express toe pedicure",
        "Обработка пальчиков ( придание формы ногтям, обработка кутикулы)": "Toe treatment (nail shaping and cuticle treatment).",
        "Педикюр комплекс": "Pedicure packages",
        "Педикюр комплекс Lite": "Pedicure package Lite",
        "Полная обработка стоп и пальцев ног в комбинированной технике": "Complete treatment of feet and toes using a combined technique.",
        "Педикюр комплекс Mid": "Pedicure package Mid",
        "Снятие гель-лака, полная обработка стоп и пальцев ног, покрытие гель-лаком": "Gel polish removal, complete treatment of feet and toes, and gel polish.",
        "Педикюр комплекс Top": "Pedicure package Top",
        "Снятие гель-лака, полная смарт обработка стоп и пальцев ног, покрытие гель-лаком": "Gel polish removal, complete SMART treatment of feet and toes, and gel polish.",
        "Дизайн": "Design",
        "Втирка": "Chrome powder",
        "Дизайн простой": "Simple design",
        "Наклейки, фигурки, простой рисунок": "Stickers, decorative elements, simple drawing",
        "Френч": "French manicure",
        "Виды покрытия": "Coating types",
        "Лечебное покрытие": "Treatment coating",
        "Покрытие лечебным лаком": "Treatment polish coating",
        "Покрытие лаком": "Nail polish coating",
        "Наращивание ногтей": "Nail extensions",
        "Коррекция наращенных ногтей": "Nail extension correction",
        "Наращивание ногтей 4-6": "Nail extensions 4-6",
        "Длина 1-4": "Length 1-4",
        "Длина 5-9": "Length 5-9",
        "5 мин.": "5 min",
        "10 мин.": "10 min",
        "20 мин.": "20 min",
        "30 мин.": "30 min",
        "40 мин.": "40 min",
        "1 час": "1 hr",
        "1 час 20 мин.": "1 hr 20 min",
        "1 час 30 мин.": "1 hr 30 min",
        "1 час 40 мин.": "1 hr 40 min",
        "2 часа": "2 hr",
        "2 часа 20 мин.": "2 hr 20 min"
      }
    }
  },
  "reviews": [
    {
      "author": "Нина К",
      "text": "Мастер работает аккуратно, профессионально, хорошо владеет техникой обработки педикюрным аппаратом. Форму ногтей сделала идеально и безупречно покрыла лаком. Всё действо заняло час 15 мин. без спешки. Мария очень доброжелательна и деликатна в общении, что создаёт прекрасную атмосферу. Огромное спасибо!",
      "source": "Яндекс Карты"
    },
    {
      "author": "Елена К.",
      "text": "Мария, очень приятный мастер , работу выполняет быстро , и качественно. Само покрытие не толстое, маникюр носится долго. Так же хочу отметить очень уютная и удобная студия ! Большая палитра оттенков . Буду рада новой встрече 🥰",
      "source": "Яндекс Карты"
    },
    {
      "author": "Анна Полушина, свадебный фотограф в Москве",
      "text": "Впервые пришла к Марии по рекомендации подруги и убедилась, что все супер 😊 очень приятно пообщались, мастер порекомендовала что можно сделать со сломанным ногтем, сделала аккуратный и яркий маникюр. Стойкость проверена соленым морем 👍",
      "source": "Яндекс Карты"
    },
    {
      "author": "SABINA",
      "text": "Мария- профессионал своего дела, делает маникюр и педикюр быстро и качественно, поэтому с удовольствием делаю эти две процедуры сразу) К тому же она очень приятный человек, рекомендую!",
      "source": "Яндекс Карты"
    },
    {
      "author": "Татьяна Саварская",
      "text": "Я хожу к Марии уже около года по рекомендации моей одноклассницы, работой мастера довольна, салон тоже очень эстетичный и современный. Мария приятная в общении и очень тактичная, а главное, работает быстро и качественно, что для меня немаловажно, мастера рекомендую",
      "source": "Яндекс Карты"
    },
    {
      "author": "анна Силадий",
      "text": "Очень рекомендую мастера Марию и её студию! Очень аккуратно,качественно, а главное супер быстро, всегда 1-1.10 получается и с отличным результатом! Много интересных цветов, большая палитра, варианты покрытия, рисунки, камушки и тд, на любой каприз )) Однозначно рекомендую, ухожу и я и дочка всегда довольные )",
      "source": "Яндекс Карты"
    },
    {
      "author": "Дарья Ерохина",
      "text": "Уютное место, располагающий и профессиональный мастер Мария. Маникюр выполнен качественно и быстро. Однозначная рекомендация к посещению за уходом и красотой ногтей",
      "source": "Яндекс Карты"
    }
  ],
  "promotions": [],
  "amenities": [],
  "seo": {
    "siteUrl": "https://ichaey.github.io/TAN-0016/",
    "title": "Мария Майер — мастер маникюра и педикюра",
    "description": "Маникюр, педикюр, дизайн и наращивание ногтей у Марии Майер в Москве.",
    "keywords": [
      "Мария Майер",
      "маникюр Москва",
      "педикюр Москва",
      "наращивание ногтей Москва",
      "Maria Mayer Nails"
    ],
    "locale": "ru_RU"
  },
  "analytics": {
    "yandexMetrikaId": ""
  }
};\n