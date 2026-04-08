import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import CaseStudyLayout from "@/components/case-studies/CaseStudyLayoutIntl";
import { buildMetadata } from "@/lib/seo";

const baseProps = {
  title: "Segway Tours Budapest",
  path: "/case-studies/segway-tours-budapest",
  visualColorClass: "text-amber-500",
  heroImage: "/images/case-studies/segway.png",
};

const caseStudyContent = {
  ru: {
    metaTitle: "Segway Tours Budapest | Кейс HaloAgency",
    metaDescription:
      "Кейс Segway Tours Budapest: SEO и PPC для туристического оператора с ростом прямых бронирований и снижением зависимости от агрегаторов.",
    openGraphTitle: "Segway Tours Budapest - кейс HaloAgency",
    heroImageAlt:
      "Главный экран сайта Segway Tours Budapest для прямых бронирований экскурсий",
    subtitle:
      "Агрессивный SEO и PPC маркетинг для туристического оператора в одной из самых конкурентных столиц Европы.",
    tags: ["SEO", "Google Ads", "Meta Ads", "Tourism", "Analytics"],
    mainStats: [
      { label: "Органический трафик", value: "+240%" },
      { label: "Бронирования", value: "+180%" },
      { label: "TripAdvisor", value: "#1" },
      { label: "ROI", value: "450%" },
    ],
    challenge: {
      title: "Проблема: Высокая конкуренция и зависимость от агрегаторов",
      description:
        "Туристический рынок Будапешта перенасыщен. Компания сильно зависела от комиссий агрегаторов и хотела получать больше прямых продаж через собственный сайт.",
      points: [
        "Высокие комиссии сторонних платформ",
        "Слабые позиции сайта в органической выдаче Google",
        "Дорогие клики в Google Ads в высокий сезон",
        "Сложно измерять эффективность разных каналов",
      ],
    },
    solution: {
      title: "Решение: Комплексное SEO и смарт-кампании",
      description:
        "Мы сделали ставку на SEO-оптимизацию под long-tail запросы и таргетированную рекламу на туристов, которые уже находятся в городе и готовы бронировать экскурсии напрямую.",
      technologies: [
        "Optimalizace WordPressu",
        "Google Ads Search + Maps",
        "Meta Ads s geolokačním cílením",
        "Google Analytics 4",
      ],
      features: [
        "Полный технический SEO аудит и оптимизация",
        "Контент-стратегия под низкочастотные запросы",
        "Гиперлокальный таргетинг в Meta Ads",
        "Кампании в Google Maps для туристов рядом",
        "Внедрение системы бронирования на сайте",
      ],
    },
    results: {
      title: "Результат: Независимость от посредников",
      description:
        "Доля прямых бронирований выросла до 60%, что заметно увеличило маржинальность бизнеса. Сайт стабильно держится в топ-3 по ключевым запросам.",
      stats: [
        { label: "Доля прямых продаж", value: "60%" },
        { label: "Видимость в поиске", value: "TOP 3" },
        { label: "Прирост подписчиков", value: "+3k" },
      ],
    },
    relatedRoutes: [
      {
        title: "Google Ads",
        text: "Если нужно забирать горячий туристический спрос из поиска и карт.",
        href: "/ads/google-ads",
      },
      {
        title: "Meta Ads",
        text: "Если важны гео-аудитории, ретаргетинг и спрос на месте.",
        href: "/ads/meta-ads",
      },
      {
        title: "Многостраничный сайт",
        text: "Если сайт должен усиливать SEO, прямые бронирования и доверие к компании.",
        href: "/web/business-websites",
      },
    ],
  },
  cs: {
    metaTitle: "Segway Tours Budapest | Reference HaloAgency",
    metaDescription:
      "Reference Segway Tours Budapest: SEO a PPC pro turistického operátora s růstem přímých rezervací a menší závislostí na agregátorech.",
    openGraphTitle: "Segway Tours Budapest - reference HaloAgency",
    heroImageAlt:
      "Hlavní obrazovka webu Segway Tours Budapest pro přímé rezervace výletů",
    subtitle:
      "Silné SEO a PPC pro turistického operátora v jednom z nejkonkurenčnějších hlavních měst Evropy.",
    tags: ["SEO", "Google Ads", "Meta Ads", "Turismus", "Analytika"],
    mainStats: [
      { label: "Organická návštěvnost", value: "+240%" },
      { label: "Rezervace", value: "+180%" },
      { label: "TripAdvisor", value: "#1" },
      { label: "ROI", value: "450%" },
    ],
    challenge: {
      title: "Problém: Silná konkurence a závislost na agregátorech",
      description:
        "Turistický trh v Budapešti je přeplněný a firma byla silně závislá na provizích agregátorů. Cílem bylo zvýšit podíl přímých rezervací přes vlastní web.",
      points: [
        "Vysoké provize externích platforem",
        "Slabé organické pozice v Google",
        "Drahé kliky v Google Ads během sezóny",
        "Obtížné měření výkonnosti jednotlivých kanálů",
      ],
    },
    solution: {
      title: "Řešení: komplexní SEO a chytré kampaně",
      description:
        "Zaměřili jsme se na SEO pro long-tail dotazy a na reklamu cílenou na turisty, kteří už jsou ve městě a jsou připraveni rezervovat přímo.",
      technologies: [
        "Optimalizace WordPressu",
        "Google Ads Search + Maps",
        "Meta Ads s geolokačním cílením",
        "Google Analytics 4",
      ],
      features: [
        "Kompletní technický SEO audit a optimalizace",
        "Obsahová strategie pro nízkofrekvenční dotazy",
        "Hyperlokální cílení v Meta Ads",
        "Kampaně v Google Maps pro turisty v okolí",
        "Zavedení rezervačního systému na webu",
      ],
    },
    results: {
      title: "Výsledek: Menší závislost na prostřednících",
      description:
        "Podíl přímých rezervací vzrostl na 60 %, což výrazně zlepšilo marži. Web se stabilně drží v top 3 na klíčová vyhledávání.",
      stats: [
        { label: "Podíl přímých prodejů", value: "60%" },
        { label: "Viditelnost ve vyhledávání", value: "TOP 3" },
        { label: "Růst publika", value: "+3k" },
      ],
    },
    relatedRoutes: [
      {
        title: "Google Ads",
        text: "Pokud potřebujete sbírat horkou turistickou poptávku z vyhledávání a map.",
        href: "/ads/google-ads",
      },
      {
        title: "Meta Ads",
        text: "Pokud potřebujete geolokační cílení, retargeting a práci s místní poptávkou.",
        href: "/ads/meta-ads",
      },
      {
        title: "Firemní web",
        text: "Pokud má web podporovat SEO, přímé rezervace a důvěru, ne být jen vizitkou.",
        href: "/web/business-websites",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "cs" ? caseStudyContent.cs : caseStudyContent.ru;

  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: baseProps.path,
    locale,
    openGraphTitle: content.openGraphTitle,
    type: "article",
  });
}

export default async function SegwayToursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "cs" ? caseStudyContent.cs : caseStudyContent.ru;

  return <CaseStudyLayout {...baseProps} {...content} />;
}
