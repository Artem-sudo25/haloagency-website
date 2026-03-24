import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";
import { buildMetadata } from "@/lib/seo";

const baseProps = {
  title: "CatCafe",
  path: "/case-studies/catcafe",
  visualColorClass: "text-amber-500",
  heroImage: "/images/case-studies/catcafe-screenshot.png",
};

const caseStudyContent = {
  ru: {
    metaTitle: "CatCafe | Кейс HaloAgency",
    metaDescription:
      "Кейс CatCafe: редизайн сайта кафе, онлайн-бронирование и синхронизация записей с Google Календарём для роста онлайн-броней.",
    openGraphTitle: "CatCafe - кейс HaloAgency",
    heroImageAlt:
      "Главный экран сайта CatCafe с онлайн-бронированием столиков",
    subtitle:
      "Полный редизайн сайта кафе: современный адаптивный дизайн, оптимизация под рекламу и система онлайн-бронирования с синхронизацией в Google Календарь владельца.",
    tags: [
      "Web Redesign",
      "Booking System",
      "Google Ads",
      "Responsive",
      "Calendar Integration",
    ],
    imageContext: {
      title: "Бронирование прямо в календарь",
      description:
        "Гости выбирают дату, время и количество мест - заявка мгновенно появляется в Google Календаре владельца. Никаких звонков, никакого ручного учета.",
      items: [
        "Онлайн-форма с выбором даты, времени и числа гостей",
        "Автоматическая синхронизация с Google Calendar",
        "Подтверждение брони на email гостю и в Telegram владельцу",
      ],
    },
    mainStats: [
      { label: "Онлайн-броней", value: "+240%" },
      { label: "Конверсия сайта", value: "8.5%" },
      { label: "Скорость загрузки", value: "0.8s" },
      { label: "Ручная работа", value: "↓ 90%" },
    ],
    challenge: {
      title: "Проблема: Устаревший сайт и бронирование по телефону",
      description:
        "Сайт кафе не менялся годами - он плохо отображался на мобильных, не подходил для запуска рекламы и не давал возможности забронировать столик онлайн. Владелец принимал все брони вручную: по телефону, в мессенджерах, записывал в блокнот.",
      points: [
        "Сайт не адаптирован под мобильные устройства",
        "Нет онлайн-записи - только телефон и WhatsApp",
        "Страницы не оптимизированы под Google Ads",
        "Нет системы учета броней - всё в блокноте",
        "Высокий показатель отказов из-за медленной загрузки",
      ],
    },
    solution: {
      title: "Решение: Новый сайт и система бронирования",
      description:
        "Мы полностью переработали сайт: современный дизайн, адаптивная верстка, быстрая загрузка. Встроили систему бронирования с синхронизацией в Google Календарь - владелец видит все записи в одном месте без лишних действий.",
      technologies: [
        "Next.js",
        "Google Calendar API",
        "Resend Email API",
        "Google Ads",
        "Telegram Bot",
        "Vercel",
      ],
      features: [
        "Полный редизайн с фирменным стилем кафе",
        "Адаптивная верстка для всех устройств",
        "Форма бронирования с выбором даты, времени и числа гостей",
        "Автосинхронизация брони с Google Календарем владельца",
        "Уведомления в Telegram при новой записи",
        "Оптимизация посадочных страниц под Google Ads",
      ],
    },
    results: {
      title: "Результат: Расписание заполняется само",
      description:
        "Через месяц после запуска 85% броней приходят онлайн. Владелец перестал принимать звонки для записи - все брони автоматически появляются в его Google Календаре.",
      stats: [
        { label: "Доля онлайн-броней", value: "85%" },
        { label: "Рост броней", value: "+240%" },
        { label: "Время обработки брони", value: "0 мин" },
      ],
    },
    relatedRoutes: [
      {
        title: "Многостраничный сайт",
        text: "Если проекту нужен не просто редизайн, а понятный сайт под услуги, запись и доверие к компании.",
        href: "/web/business-websites",
      },
      {
        title: "Автоматизация",
        text: "Если бронирования, уведомления и внутренняя работа должны идти без ручного хаоса.",
        href: "/automation",
      },
      {
        title: "Пакеты",
        text: "Если сначала нужен ориентир по бюджету и формату работ до разговора.",
        href: "/packages",
      },
    ],
    cta: {
      title: "Нужен похожий результат?",
      text: "Сделаем сайт, который работает на вас - с бронированием, рекламой и автоматизацией.",
    },
  },
  cs: {
    metaTitle: "CatCafe | Reference HaloAgency",
    metaDescription:
      "Reference CatCafe: redesign webu kavárny, online rezervace a synchronizace rezervací s Google Kalendářem pro růst online rezervací.",
    openGraphTitle: "CatCafe - reference HaloAgency",
    heroImageAlt:
      "Hlavní obrazovka webu CatCafe s online rezervací stolů",
    subtitle:
      "Kompletní redesign webu kavárny: moderní responzivní design, příprava pro reklamu a online rezervační systém synchronizovaný do Google Kalendáře majitele.",
    tags: [
      "Redesign webu",
      "Rezervační systém",
      "Google Ads",
      "Responzivní web",
      "Napojení kalendáře",
    ],
    imageContext: {
      title: "Rezervace rovnou do kalendáře",
      description:
        "Host si vybere datum, čas i počet míst a rezervace se okamžitě propíše do Google Kalendáře majitele. Bez telefonátů a bez ručního přepisování.",
      items: [
        "Online formulář s výběrem data, času a počtu hostů",
        "Automatická synchronizace s Google Kalendářem",
        "Potvrzení rezervace e-mailem hostovi a zpráva do Telegramu majiteli",
      ],
    },
    mainStats: [
      { label: "Online rezervace", value: "+240%" },
      { label: "Konverze webu", value: "8.5%" },
      { label: "Rychlost načtení", value: "0.8s" },
      { label: "Ruční práce", value: "↓ 90%" },
    ],
    challenge: {
      title: "Problém: Zastaralý web a rezervace po telefonu",
      description:
        "Web kavárny se roky neměnil. Na mobilu fungoval špatně, nebyl připravený pro reklamu a neumožňoval online rezervaci stolů. Majitel přijímal rezervace ručně po telefonu, v messengerech a zapisoval je do bloku.",
      points: [
        "Web nebyl přizpůsobený mobilům",
        "Žádná online rezervace, jen telefon a WhatsApp",
        "Stránky nebyly připravené pro Google Ads",
        "Bez systému evidence rezervací, všechno se vedlo ručně",
        "Vysoká míra odchodů kvůli pomalému načítání",
      ],
    },
    solution: {
      title: "Řešení: Nový web a rezervační systém",
      description:
        "Web jsme kompletně přepracovali: nový design, responzivní rozvržení a rychlé načítání. Součástí je rezervační systém napojený na Google Kalendář, takže majitel vidí všechny rezervace na jednom místě bez další ruční práce.",
      technologies: [
        "Next.js",
        "Google Calendar API",
        "Resend Email API",
        "Google Ads",
        "Telegram Bot",
        "Vercel",
      ],
      features: [
        "Kompletní redesign ve stylu značky kavárny",
        "Responzivní web pro všechna zařízení",
        "Formulář rezervace s výběrem data, času a počtu hostů",
        "Automatická synchronizace rezervací do Google Kalendáře majitele",
        "Notifikace do Telegramu při nové rezervaci",
        "Optimalizace vstupních stránek pro Google Ads",
      ],
    },
    results: {
      title: "Výsledek: Rezervační kalendář se plní sám",
      description:
        "Do měsíce od spuštění chodilo 85 % rezervací online. Majitel přestal řešit telefonáty kvůli rezervacím, protože všechny termíny se automaticky zapisují do jeho Google Kalendáře.",
      stats: [
        { label: "Podíl online rezervací", value: "85%" },
        { label: "Růst rezervací", value: "+240%" },
        { label: "Čas na zpracování rezervace", value: "0 min" },
      ],
    },
    relatedRoutes: [
      {
        title: "Firemní web",
        text: "Pokud projekt nepotřebuje jen redesign, ale jasný web pro služby, rezervace a důvěru.",
        href: "/web/business-websites",
      },
      {
        title: "Automatizace",
        text: "Pokud mají rezervace, notifikace a interní proces fungovat bez ručního chaosu.",
        href: "/automation",
      },
      {
        title: "Balíčky",
        text: "Pokud si nejdřív potřebujete ujasnit rozpočet a rozsah práce ještě před hovorem.",
        href: "/packages",
      },
    ],
    cta: {
      title: "Potřebujete podobný výsledek?",
      text: "Postavíme web, který pracuje za vás: s rezervacemi, reklamou i automatizací.",
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

export default async function CatCafePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "cs" ? caseStudyContent.cs : caseStudyContent.ru;

  return <CaseStudyLayout {...baseProps} {...content} />;
}
