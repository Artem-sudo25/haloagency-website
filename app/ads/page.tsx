import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";
import AdsPageClient from "./AdsPageClient";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Реклама", href: "/ads" },
];

export const metadata: Metadata = {
  title: "Реклама в Google Ads и Meta Ads в Чехии | HaloAgency",
  description:
    "Google Ads, Meta Ads и Seznam для бизнеса в Чехии. Помогаем понять, какой канал подойдёт, что нужно подготовить до запуска и как считать результат по заявкам.",
  keywords: [
    "реклама в google",
    "google ads чехия",
    "контекстная реклама google",
    "настройка рекламы google",
    "реклама в instagram",
    "реклама в facebook",
    "таргетированная реклама",
    "настройка таргетированной рекламы",
    "таргет instagram",
    "таргет facebook",
    "ведение рекламных кампаний",
    "маркетинговое агентство чехия",
    "реклама для бизнеса в чехии",
    "маркетинг прага",
    "таргет прага",
    "настройка таргет",
  ],
  openGraph: {
    title: "Реклама в Google Ads и Meta Ads в Чехии — HaloAgency",
    description:
      "Помогаем понять, когда бизнесу подходят Google Ads, Meta Ads и Seznam, и что нужно для запуска рекламы с понятным результатом.",
  },
};

export default function AdsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: "Реклама HaloAgency",
            description:
              "Google Ads, Meta Ads и Seznam для бизнеса в Чехии. Помогаем понять, какой канал подойдёт, что нужно подготовить до запуска и как считать результат по заявкам.",
            path: "/ads",
          }),
        ]}
      />
      <AdsPageClient />
    </>
  );
}
