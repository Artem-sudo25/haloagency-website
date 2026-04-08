import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import CaseStudyLayout from "@/components/case-studies/CaseStudyLayoutIntl";
import { buildMetadata } from "@/lib/seo";

const baseProps = {
  title: "Nejbalonky.cz",
  path: "/case-studies/nejablonky",
  visualColorClass: "text-blue-500",
  heroImage: "/images/case-studies/nejbalonky-screenshot.png",
  analyticsImage: "/images/case-studies/nejbalonky-analytics.png",
};

const caseStudyContent = {
  ru: {
    metaTitle: "Nejbalonky.cz | Кейс HaloAgency",
    metaDescription:
      "Кейс Nejbalonky.cz: интернет-магазин с рекламой, серверным трекингом, логистикой и аналитикой продаж в одной рабочей системе.",
    openGraphTitle: "Nejbalonky.cz - кейс HaloAgency",
    heroImageAlt:
      "Главный экран интернет-магазина Nejbalonky.cz с каталогом товаров для праздника",
    analyticsImageAlt:
      "Дашборд аналитики Nejbalonky.cz с рекламными и продажными метриками",
    subtitle:
      "Создание и продвижение интернет-магазина с интеграцией логистики, оплаты, склада, кассы, аналитики и рекламы в единую систему продаж.",
    tags: [
      "Интернет-магазин",
      "WooCommerce",
      "Google Ads",
      "Meta Ads",
      "Серверный трекинг",
      "AI-поиск",
    ],
    mainStats: [
      { label: "ROAS Google Ads", value: "6+" },
      { label: "Онлайн-заказов", value: "5000+" },
      { label: "AI-поиск", value: "Есть видимость" },
    ],
    challenge: {
      title:
        "Проблема: запуск интернет-магазина с нуля в нише товаров для праздника",
      description:
        "Проект стартовал в условиях, где ошибки в рекламе, логистике или ценообразовании сразу приводят к убыточным заказам. Нужно было построить модель, в которой каждый заказ остается экономически оправданным, а рост не увеличивает операционную нагрузку.",
      points: [
        "Выход на рынок без брендового спроса",
        "Ограниченный маркетинговый бюджет на старте",
        "Отсутствие данных для обучения рекламных алгоритмов",
        "Необходимость автоматизации логистики и бухгалтерии",
        "Корректный расчет доставки для локальных и дальних заказов",
      ],
    },
    solution: {
      title: "Решение: реклама, аналитика и системная интеграция",
      description:
        "Мы собрали магазин, где реклама, аналитика, логистика, склад и оплата работают согласованно. Главный фокус был на предсказуемой экономике заказов и росте без лишней ручной работы.",
      technologies: [
        "WooCommerce",
        "Google Ads",
        "Meta Ads",
        "GTM Server-Side",
        "Meta CAPI",
        "iDoklad API",
        "PPL Integration",
        "Google Maps API",
      ],
      features: [
        "Интернет-магазин с локальными методами оплаты",
        "Автоматическая фактурация через iDoklad",
        "Интеграция логистики PPL",
        "Расчет стоимости доставки по расстоянию через Google Maps API",
        "Серверный трекинг для более стабильной атрибуции",
        "Кампании в Google и Meta с фокусом на окупаемость",
      ],
    },
    results: {
      title: "Результат: рост продаж с ROAS 6+",
      description:
        "Проект стабильно закрепился на чешском рынке товаров для праздника. Автоматизация ключевых процессов позволила масштабировать продажи без роста операционной нагрузки, а Google Ads стабильно держит средний ROAS выше 6.",
      stats: [
        { label: "", value: "Стабильный результат даже с учетом сезонности" },
        {
          label: "",
          value: "Автоматизация ключевых этапов обработки заказов",
        },
        {
          label: "",
          value: "Видимость бизнеса в AI-поиске и поисковых системах",
        },
      ],
    },
    relatedRoutes: [
      {
        title: "Интернет-магазин",
        text: "Если нужен магазин с каталогом, оплатой, аналитикой и запасом для роста.",
        href: "/web/ecommerce",
      },
      {
        title: "Google Ads",
        text: "Если у бизнеса уже есть спрос и нужен управляемый канал продаж из поиска.",
        href: "/ads/google-ads",
      },
      {
        title: "Трекинг",
        text: "Если рекламе уже не хватает данных по покупкам и выручке для нормальной оптимизации.",
        href: "/tracking",
      },
    ],
    cta: {
      title: "Готовы обсудить похожий проект?",
      text: "Каждый проект начинается с понимания экономики бизнеса, а не с запуска рекламы вслепую.",
    },
  },
  cs: {
    metaTitle: "Nejbalonky.cz | Reference HaloAgency",
    metaDescription:
      "Reference Nejbalonky.cz: e-shop s reklamou, server-side trackingem, logistikou a analytikou prodeje v jednom funkčním systému.",
    openGraphTitle: "Nejbalonky.cz - reference HaloAgency",
    heroImageAlt:
      "Hlavní obrazovka e-shopu Nejbalonky.cz s katalogem party sortimentu",
    analyticsImageAlt:
      "Dashboard analytiky Nejbalonky.cz s metrikami reklamy a prodeje",
    subtitle:
      "Vytvoření a růst e-shopu s integrací logistiky, plateb, skladu, pokladny, analytiky i reklamy do jednoho prodejního systému.",
    tags: [
      "E-shop",
      "WooCommerce",
      "Google Ads",
      "Meta Ads",
      "Server-side tracking",
      "AI vyhledávání",
    ],
    mainStats: [
      { label: "ROAS Google Ads", value: "6+" },
      { label: "Online objednávek", value: "5000+" },
      { label: "AI vyhledávání", value: "Viditelnost" },
    ],
    challenge: {
      title: "Problém: spuštění e-shopu od nuly v náročné kategorii",
      description:
        "Projekt startoval v oboru, kde chyba v reklamě, logistice nebo cenotvorbě znamená ztrátovou objednávku. Bylo potřeba postavit model, ve kterém je každá objednávka ekonomicky smysluplná a růst nezvyšuje provozní chaos.",
      points: [
        "Vstup na trh bez brandové poptávky",
        "Omezený marketingový rozpočet na startu",
        "Chyběla data pro učení reklamních algoritmů",
        "Bylo nutné automatizovat logistiku i účetnictví",
        "Správný výpočet dopravy pro lokální i vzdálené objednávky",
      ],
    },
    solution: {
      title: "Řešení: reklama, analytika a systémové integrace",
      description:
        "Postavili jsme e-shop, kde reklama, analytika, logistika, sklad i platby fungují jako jeden systém. Cílem byla předvídatelná ekonomika objednávek a růst bez zbytečné ruční práce.",
      technologies: [
        "WooCommerce",
        "Google Ads",
        "Meta Ads",
        "GTM Server-Side",
        "Meta CAPI",
        "iDoklad API",
        "PPL Integration",
        "Google Maps API",
      ],
      features: [
        "E-shop s lokálními platebními metodami",
        "Automatická fakturace přes iDoklad",
        "Napojení logistiky PPL",
        "Výpočet dopravy podle vzdálenosti přes Google Maps API",
        "Server-side tracking pro stabilnější atribuci",
        "Kampaně v Google a Meta s důrazem na návratnost",
      ],
    },
    results: {
      title: "Výsledek: růst prodeje s ROAS 6+",
      description:
        "Projekt se stabilně prosadil na českém trhu party sortimentu. Automatizace klíčových procesů umožnila růst prodeje bez růstu provozní zátěže a Google Ads drží dlouhodobě průměrný ROAS nad 6.",
      stats: [
        { label: "", value: "Stabilní výkon i při sezónních výkyvech" },
        {
          label: "",
          value: "Automatizované klíčové kroky zpracování objednávek",
        },
        {
          label: "",
          value: "Viditelnost značky v AI vyhledávání i v Google",
        },
      ],
    },
    relatedRoutes: [
      {
        title: "E-shop",
        text: "Pokud potřebujete obchod s katalogem, platbami, analytikou a rezervou pro růst.",
        href: "/web/ecommerce",
      },
      {
        title: "Google Ads",
        text: "Pokud už poptávka existuje a potřebujete řízený prodejní kanál z vyhledávání.",
        href: "/ads/google-ads",
      },
      {
        title: "Tracking",
        text: "Pokud reklamě chybí data o objednávkách a tržbách pro smysluplnou optimalizaci.",
        href: "/tracking",
      },
    ],
    cta: {
      title: "Chcete probrat podobný projekt?",
      text: "Každý projekt začíná pochopením ekonomiky firmy, ne bezhlavým spuštěním reklamy.",
    },
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

export default async function NejablonkyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "cs" ? caseStudyContent.cs : caseStudyContent.ru;

  return <CaseStudyLayout {...baseProps} {...content} />;
}
