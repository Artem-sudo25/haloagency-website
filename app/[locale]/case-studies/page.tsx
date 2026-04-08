import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata.caseStudies",
  });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/case-studies",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });
  const seoCopy =
    locale === "cs"
      ? {
          name: "Reference HaloAgency",
          description:
            "Skutečné reference HaloAgency: tvorba webu, Google Ads, Meta Ads, analytika a automatizace pro firmy v Česku. Uvidíte přístup, zadání i výsledky.",
        }
      : {
          name: "Кейсы HaloAgency",
          description:
            "Реальные кейсы HaloAgency: разработка сайтов, Google Ads, Meta Ads, аналитика и автоматизация для бизнеса в Чехии. Смотрите подход, задачи и результаты.",
        };
  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("caseStudies"), href: "/case-studies" },
  ];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: seoCopy.name,
            description: seoCopy.description,
            path: "/case-studies",
            locale,
          }),
        ]}
      />
      <ScopedNextIntlProvider namespaces={["breadcrumbs", "caseStudiesPage"]}>
        <CaseStudiesPageClient />
      </ScopedNextIntlProvider>
    </>
  );
}
