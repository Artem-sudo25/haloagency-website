import {
  BarChart3,
  Megaphone,
  Rocket,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/seo";
import AdsServicePage from "../_components/AdsServicePage";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Реклама", href: "/ads" },
  { label: "Google Ads", href: "/ads/google-ads" },
];

const googleAdsFaqs = [
  {
    question: "Сколько стоит настройка и ведение Google Ads?",
    answer:
      "Базовое ведение обычно стартует от 8 000 Kč в месяц, но итог зависит от количества кампаний, географии, спроса и сложности воронки.",
  },
  {
    question: "Подойдёт ли Google Ads, если я ещё ни разу не запускал рекламу?",
    answer:
      "Да. Именно поэтому первый шаг здесь — разбор и план. Сначала понимаем, подходит ли поиск вашему бизнесу и какие кампании запускать первыми.",
  },
  {
    question: "Нужен ли сайт, чтобы запускать Google Ads?",
    answer:
      "Почти всегда нужна хотя бы внятная посадочная страница. Если страница слабая, реклама лишь ускорит потерю денег. Поэтому мы сразу смотрим на путь до заявки и CTA.",
  },
  {
    question: "Вы работаете только с Google Ads?",
    answer:
      "Нет. Но Google Ads и Meta Ads лучше разбирать отдельно, потому что это разный тип спроса и разная логика запуска.",
  },
];

export const metadata: Metadata = {
  title: "Google Ads в Чехии | Настройка и ведение рекламы — HaloAgency",
  description:
    "Google Ads для бизнеса в Чехии: запуск с нуля, аудит текущего аккаунта, план кампаний, посадочных страниц и аналитики. Подходит для локальных услуг, сервиса и интернет-магазинов.",
  openGraph: {
    title: "Google Ads в Чехии — HaloAgency",
    description:
      "Разбираем, когда бизнесу подходит Google Ads, как его запускать и как связать поиск с сайтом, заявками и продажами.",
  },
};

export default function GoogleAdsServicePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          serviceJsonLd({
            name: "Google Ads в Чехии",
            description:
              "Google Ads для бизнеса в Чехии: запуск с нуля, аудит текущего аккаунта, план кампаний, посадочных страниц и аналитики. Подходит для локальных услуг, сервиса и интернет-магазинов.",
            path: "/ads/google-ads",
            serviceType: "Google Ads management",
          }),
          faqPageJsonLd(googleAdsFaqs),
        ]}
      />
      <AdsServicePage
        eyebrow="Для бизнеса с существующим спросом"
        badge="Google Ads"
        title="Google Ads для заявок, звонков и продаж в Чехии"
        description="Если ваши услуги уже ищут в Google, здесь можно построить самый прямой путь от запроса к заявке. Помогаем либо навести порядок в текущем аккаунте, либо запустить Google Ads с нуля без хаоса в структуре, страницах и аналитике."
        chips={[
          "Поиск, ремаркетинг, Performance Max",
          "Под локальный бизнес и интернет-магазины",
          "Ведение от 8 000 Kč / мес",
        ]}
        proofs={[
          "Понимаем, какие запросы и кампании реально нужны бизнесу, а какие только сжигают бюджет.",
          "Смотрим не только на кабинет, но и на путь из поиска в форму, звонок или продажу.",
          "Если аналитика слабая, сразу показываем, что нужно исправить до масштабирования.",
        ]}
        intentTitle="Когда Google Ads подходит лучше всего"
        intentDescription="Google Ads особенно силён там, где человек уже ищет услугу или товар и готов перейти к следующему шагу."
        intentCards={[
          {
            title: "Запуск с нуля",
            subtitle: "Когда нужен понятный старт",
            description:
              "Помогаем понять, какие кампании запускать первыми, какой бюджет нужен и на какую страницу вести трафик.",
            icon: Rocket,
          },
          {
            title: "Реклама уже идёт",
            subtitle: "Когда нужен порядок",
            description:
              "Показываем, где теряются лиды и деньги: запросы, структура, оффер, посадочная страница или аналитика.",
            icon: BarChart3,
          },
          {
            title: "Нужно ведение",
            subtitle: "Когда важна системность",
            description:
              "Берём запуск и оптимизацию на себя, если нужен не разовый сетап, а постоянная работа с результатом.",
            icon: Target,
          },
        ]}
        offerTitle="Что можно запускать и вести в Google Ads"
        offerDescription="Выбираем не весь стек подряд, а связку под спрос, географию, цикл сделки и коммерческую задачу."
        offerCards={[
          {
            title: "Поисковая реклама",
            subtitle: "Под горячий спрос",
            description:
              "Самый прямой формат, если у бизнеса уже есть понятная услуга и люди реально ищут её в Google.",
            icon: Search,
          },
          {
            title: "Кампании на лиды и звонки",
            subtitle: "Для локального сервиса",
            description:
              "Подходит, когда бизнесу нужны формы, звонки, записи и консультации, а не просто посещения сайта.",
            icon: Megaphone,
          },
          {
            title: "Ремаркетинг и масштабирование",
            subtitle: "После первых данных",
            description:
              "Подключаем дополнительные сценарии, когда уже видно, какие запросы и страницы дают лучший результат.",
            icon: Sparkles,
          },
        ]}
        includedTitle="Что входит в стоимость"
        includedItems={[
          "Настройка и ведение рекламных кампаний",
          "Оптимизация запросов, ставок и бюджета",
          "Ежемесячный отчёт с понятными цифрами",
          "Рекомендации по посадочным страницам",
          "Креативы — в зависимости от объёма и тарифа",
        ]}
        priceLabel="Ведение Google Ads"
        priceValue="от 8,000 Kč / мес"
        priceNote="Рекламный бюджет оплачивается отдельно. Финальный объём подтверждаем после короткого разбора."
        accentColor="#06D6A0"
        faqTitle="Частые вопросы по Google Ads"
        faqDescription="Это вопросы, которые обычно возникают до запуска или перед переходом в ведение."
        faqs={googleAdsFaqs.map((item) => ({
          q: item.question,
          a: item.answer,
        }))}
        finalTitle="Если спрос уже есть, Google Ads должен быть понятным каналом"
        finalText="Оставьте задачу, ссылку на сайт или текущую рекламу. Разберём, что именно запускать, где теряются деньги и какой следующий шаг даст самый быстрый эффект."
        formConfig={{
          formId: "google-ads-form",
          badge: "Google Ads",
          title: "Получите разбор и план",
          subtitle:
            "Если реклама уже идёт — покажем, где теряются заявки. Если ещё нет — дадим план запуска и структуру аккаунта.",
          successMessage:
            "Свяжемся с вами в рабочее время и обсудим Google Ads, текущую ситуацию и следующий шаг.",
          presenceLabel: "Сайт, Instagram или текущая реклама (если есть)",
          presencePlaceholder: "https://... или @ваш_профиль",
          consentText:
            "Согласен(а) на обработку данных. Мы используем контакт только для ответа по Google Ads и плану запуска.",
          cta: "Получить разбор и план",
          whatsappHref:
            "https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20Google%20Ads%20%D0%B8%20%D0%BF%D0%BB%D0%B0%D0%BD%20%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B.",
          whatsappLabel: "Написать в WhatsApp →",
          leadType: "google-ads-plan",
          source: "ads_service_google",
          service: "Google Ads",
          fbContentName: "ads_service_google_ads",
          dataLayerEvent: "generate_lead_google_ads",
          accentColor: "#06D6A0",
        }}
      />
    </>
  );
}
