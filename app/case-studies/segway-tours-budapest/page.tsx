import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Segway Tours Budapest | Кейс HaloAgency",
  description:
    "Кейс Segway Tours Budapest: SEO и PPC для туристического оператора с ростом прямых бронирований и снижением зависимости от агрегаторов.",
  path: "/case-studies/segway-tours-budapest",
  openGraphTitle: "Segway Tours Budapest — кейс HaloAgency",
  type: "article",
});

export default function SegwayToursPage() {
  return (
    <CaseStudyLayout
      title="Segway Tours Budapest"
      path="/case-studies/segway-tours-budapest"
      heroImageAlt="Главный экран сайта Segway Tours Budapest для прямых бронирований экскурсий"
      subtitle="Агрессивный SEO и PPC маркетинг для туристического оператора в одной из самых конкурентных столиц Европы."
      tags={["SEO", "Google Ads", "Meta Ads", "Tourism", "Analytics"]}
      visualColorClass="text-amber-500"
      heroImage="/images/case-studies/segway.png"
      mainStats={[
        { label: "Органический трафик", value: "+240%" },
        { label: "Бронирования", value: "+180%" },
        { label: "TripAdvisor", value: "#1" },
        { label: "ROI", value: "450%" },
      ]}
      challenge={{
        title: "Проблема: Высокая конкуренция и зависимость от агрегаторов",
        description:
          "Туристический рынок Будапешта перенасыщен. Компания сильно зависела от дорогих комиссий агрегаторов (Viator, TripAdvisor) и хотела получать больше прямых продаж через свой сайт.",
        points: [
          "Высокие комиссии сторонних платформ (до 30%)",
          "Слабые позиции сайта в органической выдаче Google",
          "Дорогие клики в Google Ads в туристический сезон",
          "Сложно отслеживать эффективность разных каналов",
        ],
      }}
      solution={{
        title: "Решение: Комплексное SEO и смарт-кампании",
        description:
          "Мы сделали ставку на SEO-оптимизацию контента для long-tail запросов и запустили таргетированную рекламу на туристов, которые уже находятся в городе.",
        technologies: [
          "WordPress Optimization",
          "Google Ads (Search + Maps)",
          "Meta Ads (Geo-fencing)",
          "Google Analytics 4",
        ],
        features: [
          "Провели полный технический SEO аудит и оптимизацию",
          "Создали контент-стратегию под низкочастотные запросы",
          "Настроили гипер-локальный таргетинг в Meta Ads",
          "Запустили кампании в Google Maps для туристов 'рядом'",
          "Внедрили систему бронирования на сайте",
        ],
      }}
      results={{
        title: "Результат: Независимость от посредников",
        description:
          "Доля прямых бронирований выросла до 60%, что существенно увеличило маржинальность бизнеса. Сайт стабильно держится в ТОП-3 по ключевым запросам.",
        stats: [
          { label: "Доля прямых продаж", value: "60%" },
          { label: "Видимость в поиске", value: "TOP 3" },
          { label: "Прирост подписчиков", value: "+3k" },
        ],
      }}
      relatedRoutes={[
        {
          title: "Google Ads",
          text: "Если нужно забирать горячий туристический спрос из поиска и карт.",
          href: "/ads/google-ads",
        },
        {
          title: "Meta Ads",
          text: "Если важны гео-аудитории, ретаргетинг и demand generation на месте.",
          href: "/ads/meta-ads",
        },
        {
          title: "Многостраничный сайт",
          text: "Если сайт должен усиливать SEO, прямые бронирования и доверие к компании, а не быть просто витриной.",
          href: "/web/business-websites",
        },
      ]}
    />
  );
}
