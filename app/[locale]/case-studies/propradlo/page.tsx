import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";
import { buildMetadata } from "@/lib/seo";

const baseProps = {
  title: "ProPradlo.cz",
  path: "/case-studies/propradlo",
  visualColorClass: "text-teal-500",
  heroImage: "/images/case-studies/propradlo-screenshot.png",
  mobileImage: "/images/case-studies/propradlo-search-mobile.png",
};

const caseStudyContent = {
  ru: {
    metaTitle: "ProPradlo.cz | Кейс HaloAgency",
    metaDescription:
      "Кейс ProPradlo.cz: лендинг, локальное SEO, автоматизация и Google Ads для роста онлайн-заявок прачечной в Праге.",
    openGraphTitle: "ProPradlo.cz - кейс HaloAgency",
    heroImageAlt:
      "Главный экран лендинга ProPradlo.cz для прачечной с заметным CTA",
    mobileImageAlt:
      "Мобильный результат поиска ProPradlo.cz с высокой видимостью в Google",
    subtitle:
      "Цифровая трансформация для прачечной: современный лендинг, автоматизация заказов и доминирование в локальном поиске.",
    tags: ["Лендинг", "Локальное SEO", "Автоматизация", "Лид-магнит", "Google Ads"],
    imageContext: {
      title: "Доминирование в AI и поиске",
      description:
        "Благодаря оптимизации структуры и контента компания ProPradlo вышла в топ-3 органической выдачи Google и стала заметной в AI Overview.",
      items: [
        "Выделенное место в блоке AI Overview",
        "Визуальное присутствие в результатах поиска",
        "Двойное упоминание на первой странице выдачи",
      ],
    },
    mainStats: [
      { label: "Рост заявок", value: "3.5x" },
      { label: "Локальный поиск", value: "TOP 3" },
      { label: "Конверсия сайта", value: "12%" },
      { label: "Экономия времени", value: "20ч/мес" },
    ],
    challenge: {
      title: "Проблема: Ручная обработка и низкая видимость",
      description:
        "Бизнес тратил часы на ручную обработку заказов по телефону. Старый сайт не приносил заявок, а в поиске Google по ключевым запросам компания терялась среди конкурентов.",
      points: [
        "Прием заказов только по телефону или email",
        "Сайт не адаптирован под мобильные устройства",
        "Отсутствие в выдаче Google по ключевым запросам",
        "Нет системы удержания клиентов",
      ],
    },
    solution: {
      title: "Решение: Автоматизация и локальное доминирование",
      description:
        "Мы создали конверсионный лендинг с формой онлайн-заказа, внедрили лид-магнит для сбора базы и оптимизировали профиль компании для локального поиска.",
      technologies: [
        "Next.js",
        "Resend Email API",
        "Google My Business",
        "Framer Motion",
      ],
      features: [
        "Разработали современный лендинг с заметным CTA",
        "Автоматизировали прием заявок через Telegram и email",
        "Запустили локальную рекламу Google Ads",
        "Настроили серверный трекинг для более точного отслеживания конверсий",
        "Внедрили лид-магнит с акцией для новых клиентов",
      ],
    },
    results: {
      title: "Результат: Поток заявок и автопилот",
      description:
        "Теперь 70% заказов приходят онлайн без участия администратора. Прачечная занимает первые позиции по ключевым запросам и заметна в рекомендациях AI.",
      stats: [
        { label: "Доля онлайн-заказов", value: "70%" },
        { label: "Стоимость заявки", value: "↓ 40%" },
        { label: "Повторные обращения", value: "+25%" },
      ],
    },
    relatedRoutes: [
      {
        title: "Лендинг",
        text: "Если вам нужна короткая страница под локальный спрос и понятную заявку.",
        href: "/web/landing-pages",
      },
      {
        title: "Google Ads",
        text: "Если хотите забирать локальный спрос из поиска и управлять стоимостью заявки.",
        href: "/ads/google-ads",
      },
      {
        title: "Автоматизация",
        text: "Если заявки, уведомления и обработка всё ещё завязаны на ручную работу.",
        href: "/automation",
      },
    ],
  },
  cs: {
    metaTitle: "ProPradlo.cz | Reference HaloAgency",
    metaDescription:
      "Reference ProPradlo.cz: landing page, lokální SEO, automatizace a Google Ads pro růst online poptávek prádelny v Praze.",
    openGraphTitle: "ProPradlo.cz - reference HaloAgency",
    heroImageAlt:
      "Hlavní obrazovka landing page ProPradlo.cz s výrazným CTA",
    mobileImageAlt:
      "Mobilní výsledek vyhledávání ProPradlo.cz s vysokou viditelností v Google",
    subtitle:
      "Proměna prádelny: moderní landing page, automatizace objednávek a silná viditelnost v lokálním vyhledávání.",
    tags: ["Landing page", "Lokální SEO", "Automatizace", "Sběr kontaktů", "Google Ads"],
    imageContext: {
      title: "Viditelnost v AI i ve vyhledávání",
      description:
        "Díky optimalizaci struktury a obsahu se ProPradlo dostalo do top 3 organických výsledků v Google a začalo se objevovat i v AI přehledech.",
      items: [
        "Viditelné umístění v AI přehledech",
        "Silná přítomnost ve výsledcích vyhledávání",
        "Dvě zmínky na první stránce výsledků",
      ],
    },
    mainStats: [
      { label: "Růst poptávek", value: "3.5x" },
      { label: "Lokální vyhledávání", value: "TOP 3" },
      { label: "Konverze webu", value: "12%" },
      { label: "Úspora času", value: "20 h/měs." },
    ],
    challenge: {
      title: "Problém: Ruční zpracování a nízká viditelnost",
      description:
        "Firma trávila hodiny ručním zpracováním objednávek po telefonu. Starý web nepřiváděl poptávky a ve výsledcích Google se firma ztrácela mezi konkurenty.",
      points: [
        "Příjem objednávek jen po telefonu nebo e-mailem",
        "Web nebyl přizpůsobený mobilům",
        "Nízká viditelnost na důležitá klíčová slova",
        "Chyběl systém pro udržení klientů",
      ],
    },
    solution: {
      title: "Řešení: Automatizace a lokální dominance",
      description:
        "Postavili jsme konverzní landing page s online objednávkou, zavedli sběr kontaktů přes speciální nabídku a optimalizovali profil firmy pro lokální vyhledávání.",
      technologies: [
        "Next.js",
        "Resend Email API",
        "Google My Business",
        "Framer Motion",
      ],
      features: [
        "Nová landing page s jasným CTA",
        "Automatizovaný příjem poptávek přes Telegram a e-mail",
        "Lokální kampaně v Google Ads",
        "Server-side tracking pro přesnější měření konverzí",
        "Speciální nabídka pro nové klienty výměnou za kontakt",
      ],
    },
    results: {
      title: "Výsledek: Stabilní tok poptávek bez ručního chaosu",
      description:
        "Dnes přichází 70 % objednávek online bez zásahu administrátora. Prádelna drží přední pozice na důležitá klíčová slova a je viditelná i v AI doporučeních.",
      stats: [
        { label: "Podíl online objednávek", value: "70%" },
        { label: "Cena za poptávku", value: "↓ 40%" },
        { label: "Opakované objednávky", value: "+25%" },
      ],
    },
    relatedRoutes: [
      {
        title: "Landing page",
        text: "Pokud potřebujete krátkou stránku pro lokální poptávku a jasnou cestu k odeslání.",
        href: "/web/landing-pages",
      },
      {
        title: "Google Ads",
        text: "Pokud chcete sbírat lokální poptávku z vyhledávání a držet pod kontrolou cenu leadu.",
        href: "/ads/google-ads",
      },
      {
        title: "Automatizace",
        text: "Pokud jsou poptávky, notifikace a zpracování stále ruční práce.",
        href: "/automation",
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

export default async function PropradloPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "cs" ? caseStudyContent.cs : caseStudyContent.ru;

  return <CaseStudyLayout {...baseProps} {...content} />;
}
