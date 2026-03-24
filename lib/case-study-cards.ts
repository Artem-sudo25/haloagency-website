export type CaseStudyCard = {
  id: number;
  name: string;
  category: string;
  description: string;
  stats: {
    label: string;
    value: string;
  };
  tags: string[];
  focusAreas: string[];
  size: "large" | "small";
  href: string;
  image: string;
  featuredOnHome?: boolean;
};

export type CaseStudyLocale = "ru" | "cs";

export function getCaseStudyCards(locale: CaseStudyLocale): CaseStudyCard[] {
  if (locale === "cs") {
    return [
      {
        id: 1,
        name: "Nejbalonky.cz",
        category: "E-shop",
        description:
          "Obchod, integrace, analytika a reklama v jednom funkčním systému.",
        stats: { label: "Průměrný ROAS", value: "5.6" },
        tags: ["Google Ads", "Meta Ads", "E-shop"],
        focusAreas: ["Ads", "E-commerce", "Tracking"],
        size: "large",
        href: "/case-studies/nejablonky",
        image: "/images/case-studies/nejbalonky-screenshot.png",
        featuredOnHome: true,
      },
      {
        id: 2,
        name: "ProPradlo.cz",
        category: "Web a reklama",
        description:
          "Redesign, lokální viditelnost, automatizace poptávek a start reklamy.",
        stats: { label: "Cena za lead", value: "-40%" },
        tags: ["Landing page", "Google Ads", "Automatizace"],
        focusAreas: ["Web", "Ads", "Tracking"],
        size: "small",
        href: "/case-studies/propradlo",
        image: "/images/case-studies/propradlo-screenshot.png",
        featuredOnHome: true,
      },
      {
        id: 3,
        name: "Segway Tours",
        category: "Turismus",
        description: "SEO a reklama pro růst přímých rezervací bez prostředníků.",
        stats: { label: "Rezervace", value: "+210%" },
        tags: ["SEO", "Google Ads", "Meta Ads"],
        focusAreas: ["Ads", "Web"],
        size: "small",
        href: "/case-studies/segway-tours-budapest",
        image: "/images/case-studies/segway.png",
      },
      {
        id: 4,
        name: "CatCafe",
        category: "HoReCa",
        description:
          "Redesign, struktura pro reklamu a rezervační systém pro provozovnu.",
        stats: { label: "Online rezervace", value: "+240%" },
        tags: ["Redesign webu", "Rezervace", "Google Ads"],
        focusAreas: ["Web", "Ads", "Automation"],
        size: "large",
        href: "/case-studies/catcafe",
        image: "/images/case-studies/catcafe-screenshot.png",
        featuredOnHome: true,
      },
      {
        id: 5,
        name: "DoggyStyle",
        category: "Lokální byznys",
        description:
          "Web, CRM a logika online rezervací pro lokální servisní podnik.",
        stats: { label: "Online rezervace", value: "+180%" },
        tags: ["CRM", "Rezervace", "Web"],
        focusAreas: ["Web", "Automation"],
        size: "small",
        href: "/case-studies/doggy-salon",
        image: "/images/case-studies/doggy-screenshot.png",
      },
    ];
  }

  return [
    {
      id: 1,
      name: "Nejbalonky.cz",
      category: "Интернет-магазин",
      description:
        "Магазин, интеграции, аналитика и реклама в одной рабочей системе.",
      stats: { label: "Средний ROAS", value: "5.6" },
      tags: ["Google Ads", "Meta Ads", "Интернет-магазин"],
      focusAreas: ["Ads", "E-commerce", "Tracking"],
      size: "large",
      href: "/case-studies/nejablonky",
      image: "/images/case-studies/nejbalonky-screenshot.png",
      featuredOnHome: true,
    },
    {
      id: 2,
      name: "ProPradlo.cz",
      category: "Сайт и реклама",
      description:
        "Редизайн, локальная видимость, автоматизация заявок и рекламный запуск.",
      stats: { label: "Стоимость лида", value: "-40%" },
      tags: ["Лендинг", "Google Ads", "Автоматизация"],
      focusAreas: ["Web", "Ads", "Tracking"],
      size: "small",
      href: "/case-studies/propradlo",
      image: "/images/case-studies/propradlo-screenshot.png",
      featuredOnHome: true,
    },
    {
      id: 3,
      name: "Segway Tours",
      category: "Туризм",
      description: "SEO и реклама для роста прямых бронирований без посредников.",
      stats: { label: "Бронирования", value: "+210%" },
      tags: ["SEO", "Google Ads", "Meta Ads"],
      focusAreas: ["Ads", "Web"],
      size: "small",
      href: "/case-studies/segway-tours-budapest",
      image: "/images/case-studies/segway.png",
    },
    {
      id: 4,
      name: "CatCafe",
      category: "HoReCa",
      description:
        "Редизайн, структура под рекламу и система бронирования для заведения.",
      stats: { label: "Бронирований онлайн", value: "+240%" },
      tags: ["Редизайн сайта", "Бронирование", "Google Ads"],
      focusAreas: ["Web", "Ads", "Automation"],
      size: "large",
      href: "/case-studies/catcafe",
      image: "/images/case-studies/catcafe-screenshot.png",
      featuredOnHome: true,
    },
    {
      id: 5,
      name: "DoggyStyle",
      category: "Локальный бизнес",
      description:
        "Сайт, CRM и логика онлайн-записи для локального сервисного бизнеса.",
      stats: { label: "Онлайн-записи", value: "+180%" },
      tags: ["CRM", "Бронирование", "Сайт"],
      focusAreas: ["Web", "Automation"],
      size: "small",
      href: "/case-studies/doggy-salon",
      image: "/images/case-studies/doggy-screenshot.png",
    },
  ];
}
