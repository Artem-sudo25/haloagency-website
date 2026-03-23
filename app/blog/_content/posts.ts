export type BlogPostCategory = "Сайты" | "Реклама" | "Трекинг и аналитика";

export type BlogPostStatus = "published" | "draft";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: BlogPostCategory;
  status: BlogPostStatus;
  keywords: string[];
  datePublished?: string;
  dateModified?: string;
  readingTime: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  introPoints: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "lending-ili-polnotsennyi-sait-v-chekhii",
    title: "Когда бизнесу в Чехии нужен лендинг, а когда полноценный сайт",
    description:
      "Разбираем, когда бизнесу в Чехии нужен лендинг, а когда полноценный сайт: по офферу, рекламе, SEO, доверию и пути до заявки.",
    excerpt:
      "Если у бизнеса один оффер и трафик идёт из рекламы, чаще нужен лендинг. Если услуг несколько, важны доверие, поиск и нормальная навигация, чаще нужен полноценный сайт.",
    category: "Сайты",
    status: "published",
    keywords: [
      "лендинг или сайт",
      "что лучше лендинг или сайт",
      "сайт для бизнеса в Чехии",
      "когда нужен лендинг",
      "когда нужен многостраничный сайт",
    ],
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
    readingTime: "8 мин",
    primaryCtaLabel: "Обсудить задачу",
    primaryCtaHref: "/contact",
    introPoints: [
      "Когда лендинг действительно лучше полноценного сайта",
      "Когда бизнесу уже тесно в формате одной страницы",
      "Как не переплатить за неправильный формат",
    ],
  },
  {
    slug: "pochemu-google-ads-ne-rabotaet",
    title: "Почему Google Ads не работает: 7 причин, которые не в рекламе",
    description:
      "Клики есть, а заявок нет? Разбираем 7 причин, из-за которых Google Ads часто кажется слабым каналом, хотя проблема не в самой рекламе.",
    excerpt:
      "Google Ads часто обвиняют первым, хотя проблема может сидеть в оффере, странице, аналитике или обработке заявок.",
    category: "Реклама",
    status: "published",
    keywords: [
      "почему google ads не работает",
      "нет заявок с google ads",
      "аудит google ads",
    ],
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
    readingTime: "9 мин",
    primaryCtaLabel: "Обсудить задачу",
    primaryCtaHref: "/contact",
    introPoints: [
      "Где теряются лиды и деньги помимо рекламного кабинета",
      "Как отличить слабую рекламу от слабой системы вокруг неё",
      "Что проверить до того, как снова менять кампании",
    ],
  },
  {
    slug: "normalnyi-treking-dlya-malogo-biznesa",
    title:
      "Что такое нормальный трекинг для малого бизнеса: без BigQuery и боли",
    description:
      "Разбираем, что действительно нужно малому бизнесу для нормальной аналитики: GA4, GTM, события, server-side трекинг и понятная проверка данных.",
    excerpt:
      "Малому бизнесу не нужен тяжёлый стек. Ему нужна понятная система, которой можно верить, когда речь идёт о заявках и рекламе.",
    category: "Трекинг и аналитика",
    status: "published",
    keywords: [
      "настройка аналитики для малого бизнеса",
      "ga4 для бизнеса",
      "настройка gtm",
    ],
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
    readingTime: "8 мин",
    primaryCtaLabel: "Обсудить задачу",
    primaryCtaHref: "/contact",
    introPoints: [
      "Что действительно нужно малому бизнесу для нормальной аналитики",
      "Где чаще всего теряются данные",
      "Когда server-side трекинг реально имеет смысл",
    ],
  },
];

export const publishedBlogPosts = blogPosts.filter(
  (post) => post.status === "published",
);

export const draftBlogPosts = blogPosts.filter(
  (post) => post.status === "draft",
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
