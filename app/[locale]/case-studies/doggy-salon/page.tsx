import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";
import { buildMetadata } from "@/lib/seo";

const baseProps = {
  title: "DoggyStyle",
  path: "/case-studies/doggy-salon",
  visualColorClass: "text-orange-500",
  heroImage: "/images/case-studies/doggy-screenshot.png",
};

const caseStudyContent = {
  ru: {
    metaTitle: "DoggyStyle | Кейс HaloAgency",
    metaDescription:
      "Кейс DoggyStyle: сайт для груминг-салона, онлайн-запись, CRM и автоматизация, которые заменили телефонные записи и Excel.",
    openGraphTitle: "DoggyStyle - кейс HaloAgency",
    heroImageAlt:
      "Главный экран сайта DoggyStyle с акцентом на онлайн-запись в груминг-салон",
    subtitle:
      "Конверсионный сайт с онлайн-записью, CRM-системой и автоматизацией для груминг-салона - вместо телефонных звонков и Excel.",
    tags: [
      "Сайт",
      "CRM",
      "Автоматизация записи",
      "Локальное SEO",
      "Интеграция WhatsApp",
    ],
    imageContext: {
      title: "Онлайн-запись вместо телефона",
      description:
        "Клиенты сами выбирают удобное время, мастера видят расписание в CRM, а владелец получает уведомления в Telegram - без единого звонка.",
      items: [
        "Форма онлайн-записи с выбором услуги и мастера",
        "Автоматические напоминания клиентам за 24 часа",
        "CRM с историей питомца и предпочтениями",
      ],
    },
    mainStats: [
      { label: "Онлайн-записи", value: "+180%" },
      { label: "Конверсия сайта", value: "9%" },
      { label: "Экономия времени", value: "15ч/мес" },
      { label: "Повторные клиенты", value: "+35%" },
    ],
    challenge: {
      title: "Проблема: Записи по телефону и потерянные клиенты",
      description:
        "Салон вел запись вручную - по телефону, в WhatsApp и в бумажном блокноте. Владелец тратил часы на согласование расписания, клиенты забывали о повторном визите, а сайт почти не работал как канал продаж.",
      points: [
        "Все записи шли через телефон, администратор был постоянно занят",
        "Без напоминаний клиенты забывали и не приходили",
        "Не было клиентской базы и истории питомца",
        "Сайт не приводил заявки и не работал в поиске",
      ],
    },
    solution: {
      title: "Решение: Сайт, CRM и автоматизация записи",
      description:
        "Мы сделали конверсионный лендинг с онлайн-записью, подключили CRM для клиентской базы и настроили автоматические уведомления без найма дополнительного персонала.",
      technologies: [
        "Next.js",
        "Notion CRM",
        "Calendly API",
        "Telegram Bot",
        "Google My Business",
      ],
      features: [
        "Современный сайт с формой онлайн-записи",
        "CRM с карточкой питомца: порода, размер, пожелания",
        "Напоминания клиентам в WhatsApp или SMS за 24 часа",
        "Уведомления мастерам в Telegram при новой записи",
        "Оптимизация Google My Business для локального поиска",
      ],
    },
    results: {
      title: "Результат: Расписание заполнено на две недели вперед",
      description:
        "Через шесть недель после запуска салон перестал зависеть от телефонных звонков для записи. Расписание заполняется автоматически, а владелец видит всё в одном месте.",
      stats: [
        { label: "Онлайн-записи", value: "85%" },
        { label: "Пустых слотов", value: "↓ 60%" },
        { label: "Повторные визиты", value: "+35%" },
      ],
    },
    relatedRoutes: [
      {
        title: "Многостраничный сайт",
        text: "Если нужен основной сайт с услугами, доверием к компании и понятным путем до записи.",
        href: "/web/business-websites",
      },
      {
        title: "Автоматизация",
        text: "Если CRM, напоминания и обработка клиентов всё ещё завязаны на ручные сообщения.",
        href: "/automation",
      },
      {
        title: "Контакт",
        text: "Если задача уже понятна и хотите быстро обсудить запуск.",
        href: "/contact",
      },
    ],
  },
  cs: {
    metaTitle: "DoggyStyle | Reference HaloAgency",
    metaDescription:
      "Reference DoggyStyle: web pro psí salon, online rezervace, CRM a automatizace, které nahradily telefonické objednávky a Excel.",
    openGraphTitle: "DoggyStyle - reference HaloAgency",
    heroImageAlt:
      "Hlavní obrazovka webu DoggyStyle s důrazem na online rezervaci do psího salonu",
    subtitle:
      "Konverzní web s online rezervací, CRM systémem a automatizací pro psí salon místo telefonátů a Excelu.",
    tags: [
      "Web",
      "CRM",
      "Automatizace rezervací",
      "Lokální SEO",
      "Integrace WhatsApp",
    ],
    imageContext: {
      title: "Online rezervace místo telefonu",
      description:
        "Klienti si sami vybírají termín, tým vidí rozvrh v CRM a majitel dostává notifikace do Telegramu bez jediného telefonátu.",
      items: [
        "Formulář online rezervace s výběrem služby a pracovníka",
        "Automatické připomenutí klientům 24 hodin před návštěvou",
        "CRM s historií mazlíčka a preferencemi",
      ],
    },
    mainStats: [
      { label: "Online rezervace", value: "+180%" },
      { label: "Konverze webu", value: "9%" },
      { label: "Úspora času", value: "15 h/měs." },
      { label: "Opakovaní klienti", value: "+35%" },
    ],
    challenge: {
      title: "Problém: Telefonické rezervace a ztráta klientů",
      description:
        "Salon vedl rezervace ručně po telefonu, přes WhatsApp i v papírovém diáři. Majitel trávil hodiny skládáním rozvrhu, klienti zapomínali na další návštěvu a web prakticky nefungoval jako obchodní kanál.",
      points: [
        "Všechny rezervace šly přes telefon a zbytečně blokovaly kapacitu",
        "Bez připomínek klienti zapomínali a nepřicházeli",
        "Nebyla klientská databáze ani historie mazlíčka",
        "Web nepřiváděl poptávky a nebyl vidět ve vyhledávání",
      ],
    },
    solution: {
      title: "Řešení: Web, CRM a automatizace rezervací",
      description:
        "Vytvořili jsme konverzní landing page s online rezervací, napojili CRM pro klientskou databázi a nastavili automatické notifikace bez potřeby dalšího personálu.",
      technologies: [
        "Next.js",
        "Notion CRM",
        "Calendly API",
        "Telegram Bot",
        "Google My Business",
      ],
      features: [
        "Moderní web s formulářem online rezervace",
        "CRM s kartou mazlíčka: plemeno, velikost, poznámky",
        "Připomenutí klientům přes WhatsApp nebo SMS 24 hodin předem",
        "Notifikace do Telegramu při nové rezervaci",
        "Optimalizace Google My Business pro lokální vyhledávání",
      ],
    },
    results: {
      title: "Výsledek: Kalendář zaplněný na dva týdny dopředu",
      description:
        "Za šest týdnů od spuštění přestal salon spoléhat na telefonické rezervace. Rozvrh se plní automaticky a majitel má vše na jednom místě.",
      stats: [
        { label: "Podíl online rezervací", value: "85%" },
        { label: "Neobsazené sloty", value: "↓ 60%" },
        { label: "Opakované návštěvy", value: "+35%" },
      ],
    },
    relatedRoutes: [
      {
        title: "Firemní web",
        text: "Pokud potřebujete hlavní web se službami, důvěrou a jasnou cestou k rezervaci.",
        href: "/web/business-websites",
      },
      {
        title: "Automatizace",
        text: "Pokud jsou CRM, připomínky a práce s klienty stále ruční procesy.",
        href: "/automation",
      },
      {
        title: "Kontakt",
        text: "Pokud už máte v zadání jasno a chcete rychle probrat spuštění.",
        href: "/contact",
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

export default async function DoggySalonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "cs" ? caseStudyContent.cs : caseStudyContent.ru;

  return <CaseStudyLayout {...baseProps} {...content} />;
}
