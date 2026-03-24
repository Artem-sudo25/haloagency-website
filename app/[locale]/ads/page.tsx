import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import AdsPageClient from "./AdsPageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.ads" });
  const keywords =
    locale === "cs"
      ? [
          "Google Ads Česko",
          "Meta Ads Česko",
          "online reklama pro firmy",
          "správa reklamních kampaní",
          "výkonnostní marketing",
          "marketing Praha",
          "reklama pro firmy v Česku",
        ]
      : [
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
        ];
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/ads",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
    keywords,
  });
}

export default async function AdsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });
  const seoCopy =
    locale === "cs"
      ? {
          name: "Reklama HaloAgency",
          description:
            "Google Ads, Meta Ads a Seznam pro firmy v Česku. Pomáháme pochopit, který kanál se hodí, co připravit před spuštěním a jak měřit výsledek podle poptávek.",
        }
      : {
          name: "Реклама HaloAgency",
          description:
            "Google Ads, Meta Ads и Seznam для бизнеса в Чехии. Помогаем понять, какой канал подойдёт, что нужно подготовить до запуска и как считать результат по заявкам.",
        };
  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("ads"), href: "/ads" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: seoCopy.name,
            description: seoCopy.description,
            path: "/ads",
            locale,
          }),
        ]}
      />
      <AdsPageClient />
    </>
  );
}
