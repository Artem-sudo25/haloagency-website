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

export const caseStudyCards: CaseStudyCard[] = [
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
