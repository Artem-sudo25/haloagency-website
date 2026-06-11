export type BlogPostCategory = "Сайты" | "Реклама" | "Трекинг и аналитика";

export type BlogPostStatus = "published" | "draft";
export type SupportedBlogLocale = "ru" | "cs";

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

export const blogCategoryTranslationKey = {
  Сайты: "categories.sites",
  Реклама: "categories.ads",
  "Трекинг и аналитика": "categories.tracking",
} as const;

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
  {
    slug: "chto-dolzhno-byt-na-saite-uslug",
    title: "Что должно быть на сайте услуг, чтобы он приводил заявки",
    description:
      "Разбираем, какие блоки, страницы и аргументы действительно нужны сайту услуг, чтобы он не выглядел как брошюра, а приводил заявки.",
    excerpt:
      "Сайт услуг должен не просто рассказывать о компании, а объяснять предложение, вызывать доверие и вести человека к контакту без лишней путаницы.",
    category: "Сайты",
    status: "published",
    keywords: [
      "сайт услуг что должно быть",
      "структура сайта услуг",
      "сайт для сервисного бизнеса",
    ],
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
    readingTime: "8 мин",
    primaryCtaLabel: "Обсудить задачу",
    primaryCtaHref: "/contact",
    introPoints: [
      "Какие страницы и блоки реально помогают получать заявки",
      "Чего обычно не хватает сайту услуг",
      "Как понять, что сайт выглядит нормально, но не продаёт",
    ],
  },
  {
    slug: "meta-ads-ili-google-ads",
    title: "Нужен ли бизнесу Meta Ads или лучше начать с Google Ads",
    description:
      "Сравниваем Meta Ads и Google Ads для малого и среднего бизнеса в Чехии: когда лучше работает спрос, а когда важнее прогрев и повторный контакт.",
    excerpt:
      "Выбирать между Meta Ads и Google Ads нужно не по моде, а по типу спроса, длине сделки и тому, готов ли сайт превратить трафик в заявку.",
    category: "Реклама",
    status: "published",
    keywords: [
      "google ads или facebook ads",
      "meta ads или google ads",
      "какую рекламу выбрать для бизнеса",
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-04-16",
    readingTime: "9 мин",
    primaryCtaLabel: "Обсудить задачу",
    primaryCtaHref: "/contact",
    introPoints: [
      "Когда лучше начинать с Google Ads, а когда с Meta Ads",
      "Почему вопрос не только в рекламной платформе",
      "Как не слить бюджет на неправильный старт",
    ],
  },
  {
    slug: "kak-podgotovit-sait-pod-reklamu",
    title: "Как подготовить сайт под рекламу, чтобы не сливать бюджет",
    description:
      "Практический разбор того, что нужно исправить на сайте до запуска Google Ads или Meta Ads: структура, оффер, формы, аналитика и путь до заявки.",
    excerpt:
      "Реклама редко проваливается только из-за кабинета. Чаще бюджет уходит в слабую страницу, неясный оффер, плохую форму и сломанный трекинг.",
    category: "Сайты",
    status: "published",
    keywords: [
      "сайт под рекламу",
      "лендинг для google ads",
      "как подготовить сайт к рекламе",
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-04-16",
    readingTime: "8 мин",
    primaryCtaLabel: "Обсудить задачу",
    primaryCtaHref: "/contact",
    introPoints: [
      "Что проверить на сайте до запуска рекламы",
      "Где бизнес чаще всего теряет деньги ещё до первого клика",
      "Какая страница реально готова к Google Ads и Meta Ads",
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

const csBlogPostOverrides: Record<
  string,
  Partial<
    Pick<
      BlogPost,
      | "title"
      | "description"
      | "excerpt"
      | "keywords"
      | "readingTime"
      | "primaryCtaLabel"
      | "introPoints"
    >
  >
> = {
  "lending-ili-polnotsennyi-sait-v-chekhii": {
    title: "Kdy firma v Česku potřebuje landing page a kdy plnohodnotný web",
    description:
      "Praktické srovnání, kdy firmě v Česku dává smysl landing page a kdy plnohodnotný web: podle nabídky, reklamy, SEO, důvěry a cesty ke konverzi.",
    excerpt:
      "Když máte jednu nabídku a většina návštěvnosti jde z reklamy, často dává větší smysl landing page. Když máte více služeb, delší rozhodování a potřebujete SEO, bývá lepší plnohodnotný web.",
    keywords: [
      "landing page nebo web",
      "co je lepší landing page nebo web",
      "firemní web v Česku",
      "kdy dává smysl landing page",
      "kdy potřebujete vícestránkový web",
    ],
    readingTime: "8 min",
    primaryCtaLabel: "Probrat zadání",
    introPoints: [
      "Kdy je landing page opravdu lepší než celý web",
      "Kdy už jednu stránku firma přeroste",
      "Jak nevyhodit rozpočet za špatný formát",
    ],
  },
  "pochemu-google-ads-ne-rabotaet": {
    title: "Proč Google Ads nefunguje: 7 důvodů, které nejsou v reklamě",
    description:
      "Máte kliky, ale ne poptávky? Rozebíráme 7 důvodů, proč Google Ads často vypadá jako slabý kanál, i když problém není v samotné reklamě.",
    excerpt:
      "Google Ads bývá na ráně jako první, ale problém může být v nabídce, stránce, analytice nebo zpracování poptávek.",
    keywords: [
      "proč google ads nefunguje",
      "žádné poptávky z google ads",
      "audit google ads",
    ],
    readingTime: "9 min",
    primaryCtaLabel: "Probrat zadání",
    introPoints: [
      "Kde se ztrácejí poptávky a rozpočet mimo reklamní účet",
      "Jak poznat slabou reklamu od slabého systému okolo ní",
      "Co zkontrolovat dřív, než znovu přestavíte kampaně",
    ],
  },
  "normalnyi-treking-dlya-malogo-biznesa": {
    title:
      "Jak má vypadat normální tracking pro malou firmu: bez BigQuery a bolesti",
    description:
      "Rozebíráme, co malá firma opravdu potřebuje pro funkční analytiku: GA4, GTM, eventy, server-side tracking a srozumitelnou kontrolu dat.",
    excerpt:
      "Malá firma nepotřebuje těžký datový stack. Potřebuje systém, kterému se dá věřit, když jde o poptávky a reklamu.",
    keywords: [
      "nastavení analytiky pro malou firmu",
      "ga4 pro firmy",
      "nastavení gtm",
    ],
    readingTime: "8 min",
    primaryCtaLabel: "Probrat zadání",
    introPoints: [
      "Co malá firma opravdu potřebuje pro spolehlivou analytiku",
      "Kde se data nejčastěji ztrácí",
      "Kdy server-side tracking dává skutečný smysl",
    ],
  },
  "chto-dolzhno-byt-na-saite-uslug": {
    title: "Co musí mít web služeb, aby přiváděl poptávky",
    description:
      "Praktický rozbor bloků, stránek a argumentů, které musí mít web služeb, aby nepůsobil jen jako brožura, ale skutečně přiváděl poptávky.",
    excerpt:
      "Web služeb nemá jen popisovat firmu. Musí vysvětlit nabídku, vzbudit důvěru a dovést člověka ke kontaktu bez zbytečného chaosu.",
    keywords: [
      "co má mít web služeb",
      "struktura webu služeb",
      "web pro servisní firmu",
    ],
    readingTime: "8 min",
    primaryCtaLabel: "Probrat zadání",
    introPoints: [
      "Které stránky a bloky opravdu pomáhají získávat poptávky",
      "Co na webech služeb obvykle chybí",
      "Jak poznat web, který vypadá dobře, ale neprodává",
    ],
  },
  "meta-ads-ili-google-ads": {
    title: "Potřebuje moje firma Meta Ads, nebo je lepší začít s Google Ads?",
    description:
      "Srovnání Meta Ads a Google Ads pro malé a střední firmy v Česku: kdy funguje spíš existující poptávka a kdy je důležitější budování zájmu a opakovaný kontakt.",
    excerpt:
      "Volba mezi Meta Ads a Google Ads by se neměla řídit módou, ale typem poptávky, délkou rozhodování a tím, jestli web umí návštěvnost proměnit v poptávku.",
    keywords: [
      "google ads nebo facebook ads",
      "meta ads nebo google ads",
      "jakou reklamu vybrat pro firmu",
    ],
    readingTime: "9 min",
    primaryCtaLabel: "Probrat zadání",
    introPoints: [
      "Kdy je lepší začít s Google Ads a kdy s Meta Ads",
      "Proč nejde jen o reklamní platformu",
      "Jak nespálit rozpočet na špatném startu",
    ],
  },
  "kak-podgotovit-sait-pod-reklamu": {
    title: "Jak připravit web na reklamu, abyste nepálili rozpočet",
    description:
      "Praktický rozbor toho, co je potřeba opravit na webu ještě před spuštěním Google Ads nebo Meta Ads: struktura, nabídka, formuláře, analytika i cesta ke konverzi.",
    excerpt:
      "Reklama málokdy selže jen kvůli účtu. Častěji rozpočet mizí na slabé stránce, nejasné nabídce, špatném formuláři a rozbitém trackingu.",
    keywords: [
      "web pro reklamu",
      "landing page pro google ads",
      "jak připravit web na reklamu",
    ],
    readingTime: "8 min",
    primaryCtaLabel: "Probrat zadání",
    introPoints: [
      "Co zkontrolovat na webu ještě před spuštěním reklamy",
      "Kde firmy nejčastěji ztrácí peníze ještě před prvním klikem",
      "Jak poznat stránku připravenou na Google Ads a Meta Ads",
    ],
  },
};

function localizeBlogPost(
  post: BlogPost,
  locale: SupportedBlogLocale,
): BlogPost {
  if (locale !== "cs") {
    return post;
  }

  const overrides = csBlogPostOverrides[post.slug];
  return overrides ? { ...post, ...overrides } : post;
}

export function getLocalizedPublishedBlogPosts(locale: SupportedBlogLocale) {
  return publishedBlogPosts.map((post) => localizeBlogPost(post, locale));
}

export function getLocalizedDraftBlogPosts(locale: SupportedBlogLocale) {
  return draftBlogPosts.map((post) => localizeBlogPost(post, locale));
}

export function getLocalizedBlogPostBySlug(
  slug: string,
  locale: SupportedBlogLocale,
) {
  const post = getBlogPostBySlug(slug);
  return post ? localizeBlogPost(post, locale) : undefined;
}
