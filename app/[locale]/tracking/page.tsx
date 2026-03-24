import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import TrackingPageClient from "./TrackingPageClient";
import { getTrackingFaqs } from "./tracking-content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.tracking" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/tracking",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function TrackingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });
  const tf = await getTranslations({ locale, namespace: "trackingFaq" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("tracking"), href: "/tracking" },
  ];
  const seoCopy =
    locale === "cs"
      ? {
          name: "Server-side tracking a analytika v Česku",
          description:
            "Nastavení server-side trackingu, Meta CAPI a analytiky pro firmy v Česku. Pomáháme vidět víc reálných konverzí a rozhodovat se podle dat.",
        }
      : {
          name: "Server-side tracking и аналитика в Чехии",
          description:
            "Настройка server-side tracking, Meta CAPI и аналитики для бизнеса в Чехии. Помогаем видеть больше реальных конверсий и принимать решения на основе данных.",
        };

  const trackingFaqs = getTrackingFaqs(tf);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          serviceJsonLd({
            name: seoCopy.name,
            description: seoCopy.description,
            path: "/tracking",
            serviceType: "Server-side tracking and analytics",
            locale,
          }),
          faqPageJsonLd(trackingFaqs),
        ]}
      />
      <TrackingPageClient />
    </>
  );
}
