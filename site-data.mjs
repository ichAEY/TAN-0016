const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
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
    "address": "улица Коминтерна, 15",
    "mapCardAddress": "улица Коминтерна, 15",
    "schedule": "По предварительной записи",
    "scheduleCapitalized": "По предварительной записи",
    "timeZone": "Europe/Moscow",
    "openTime": "00:00",
    "closeTime": "00:00"
  },
  "contacts": {
    "phoneDisplay": "+7 (916) 967-77-77",
    "phoneHref": "tel:+79169677777",
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
    "logo": "",
    "portrait": `${publicBase}/placeholder.svg`,
    "about": `${publicBase}/placeholder.svg`,
    "favicon": `${publicBase}/favicon-source.png`,
    "heroDecoration": `${publicBase}/assets/template/hair-tools.png`,
    "beforeAfter": [],
    "gallery": []
  },
  "services": {
    "groups": [
      {
        "id": "manicure",
        "label": "Маникюр",
        "services": [
          {
            "name": "Маникюр с покрытием",
            "price": "1 500–2 000 ₽",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Женский маникюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Мужской маникюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Детский маникюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "SPA-маникюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "pedicure",
        "label": "Педикюр",
        "services": [
          {
            "name": "Женский педикюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Комбинированный педикюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Аппаратный педикюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "SMART-педикюр",
            "price": "",
            "time": "",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "extension",
        "label": "Наращивание",
        "services": [
          {
            "name": "Наращивание ногтей",
            "price": "",
            "time": "",
            "description": "",
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
        "Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.": "I provide manicure and pedicure, nail extensions and corrections.",
        "Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.": "I work with sterile instruments and pay close attention to precision, shape and the quality of the result.",
        "Маникюр и педикюр": "Manicure and pedicure",
        "Наращивание и коррекция": "Extensions and corrections",
        "Стерильные инструменты": "Sterile instruments",
        "колорист и мастер по волосам": "colorist and hair specialist",
        "парикмахер-стилист": "hair stylist",
        "парикмахер-колорист": "hair colorist",
        "технолог-колорист": "hair technologist and colorist",
        "Колорист": "Colorist",
        "Парикмахер-стилист": "Hair stylist",
        "Парикмахер-колорист": "Hair colorist",
        "Технолог-колорист": "Hair technologist and colorist",
        "эксперт по волосам": "hair expert",
        "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.": "Haircuts, coloring, blonding, care and styling with attention to hair condition, tone and your look.",
        "Специализируюсь на стрижках и окрашивании, blond и сложных техниках, уходе и реконструкции волос.": "I specialize in haircuts and coloring, blond and complex techniques, hair care and reconstruction.",
        "Работаю с формой, цветом и состоянием волос, чтобы результат выглядел цельно и подходил именно вам.": "I work with shape, color and hair condition so the result looks cohesive and suits you.",
        "Стрижки и окрашивание": "Haircuts and coloring",
        "Blond и сложные техники": "Blond and complex techniques",
        "Уход и реконструкция волос": "Hair care and reconstruction",
        "Москва": "Moscow",
        "Щёлково": "Shchyolkovo",
        "Беляево": "Belyayevo",
        "Печатники": "Pechatniki",
        "По предварительной записи": "By appointment",
        "Строго по предварительной записи": "Strictly by appointment",
        "Пн–Сб 10:00–22:00": "Mon–Sat 10:00–22:00",
        "Ежедневно 10:00–22:00": "Daily 10:00–22:00",
        "Мария Майер": "Maria Mayer",
        "улица Коминтерна, 15": "15 Kominterna Street, Moscow",
        "Маникюр": "Manicure",
        "Маникюр с покрытием": "Manicure with coating",
        "Женский маникюр": "Women's manicure",
        "Мужской маникюр": "Men's manicure",
        "Детский маникюр": "Children's manicure",
        "SPA-маникюр": "SPA manicure",
        "Педикюр": "Pedicure",
        "Женский педикюр": "Women's pedicure",
        "Комбинированный педикюр": "Combined pedicure",
        "Аппаратный педикюр": "Hardware pedicure",
        "SMART-педикюр": "SMART pedicure",
        "Наращивание": "Extensions",
        "Наращивание ногтей": "Nail extensions",
        "Я Мария — эксперт по маникюру и педикюру.": "I am Maria — a manicure and pedicure expert."
      }
    }
  },
  "reviews": [
    {
      "author": "Вета Мун",
      "text": "Ходила к Марии на маникюр несколько раз и могу с радостью сказать, что это профессионал своего дела. Впервые сталкиваюсь, чтобы так быстро делали маникюр и ни капли качество не терялось. Обычно в салонах сидела минимум по 2 часа на гель-лаке+однотон. А Мария аж за час-полтора максимум может выполнить всю работу и ни капли хуже качество маникюра не станет. Очень советую мастера маникюра, с выбором не прогадаете!",
      "source": "Яндекс Карты"
    },
    {
      "author": "Нина К",
      "text": "Мастер работает аккуратно, профессионально, хорошо владеет техникой обработки педикюрным аппаратом. Форму ногтей сделала идеально и безупречно покрыла лаком. Всё действо заняло час 15 мин. без спешки. Мария очень доброжелательна и деликатна в общении, что создаёт прекрасную атмосферу. Огромное спасибо!",
      "source": "Яндекс Карты"
    },
    {
      "author": "Елена К.",
      "text": "Мария, очень приятный мастер , работу выполняет быстро , и качественно. Само покрытие не толстое, маникюр носится долго. Так же хочу отметить очень уютная и удобная студия ! Большая палитра оттенков . Буду рада новой встрече 🥰",
      "source": "Яндекс Карты"
    }
  ],
  "promotions": [],
  "amenities": [],
  "seo": {
    "siteUrl": "https://ichaey.github.io/TAN-0016/",
    "title": "Мария Майер — мастер маникюра и педикюра",
    "description": "Маникюр, педикюр и наращивание ногтей у Марии Майер в Москве. Запись по телефону.",
    "keywords": [
      "Мария Майер",
      "маникюр Москва",
      "педикюр Москва",
      "Maria Mayer Nails"
    ],
    "locale": "ru_RU"
  },
  "analytics": {
    "yandexMetrikaId": ""
  }
};
