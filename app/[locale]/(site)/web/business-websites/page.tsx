import { Briefcase, FileText, Globe2, Layers, Users, Zap } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import WebServicePage from "../_components/WebServicePage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.webBusinessWebsites" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/web/business-websites",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function BusinessWebsitesServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "businessWebsitesService" });
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("web"), href: "/web" },
    { label: tb("businessWebsites"), href: "/web/business-websites" },
  ];

  const faqs = [
    { question: t("faqs.0.question"), answer: t("faqs.0.answer") },
    { question: t("faqs.1.question"), answer: t("faqs.1.answer") },
    { question: t("faqs.2.question"), answer: t("faqs.2.answer") },
    { question: t("faqs.3.question"), answer: t("faqs.3.answer") },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          serviceJsonLd({
            name: t("jsonLd.name"),
            description: t("jsonLd.description"),
            path: "/web/business-websites",
            serviceType: "Business website design and development",
            locale,
          }),
          faqPageJsonLd(faqs),
        ]}
      />
      <WebServicePage
        eyebrow={t("eyebrow")}
        badge={t("badge")}
        title={t("title")}
        description={t("description")}
        accentColor="#06D6A0"
        chips={[
          t("chips.0"),
          t("chips.1"),
          t("chips.2"),
        ]}
        proofs={[
          t("proofs.0"),
          t("proofs.1"),
          t("proofs.2"),
          t("proofs.3"),
        ]}
        scenarioTitle={t("scenarioTitle")}
        scenarioDescription={t("scenarioDescription")}
        scenarioCards={[
          {
            title: t("scenarioCards.0.title"),
            subtitle: t("scenarioCards.0.subtitle"),
            description: t("scenarioCards.0.description"),
            icon: Users,
          },
          {
            title: t("scenarioCards.1.title"),
            subtitle: t("scenarioCards.1.subtitle"),
            description: t("scenarioCards.1.description"),
            icon: FileText,
          },
          {
            title: t("scenarioCards.2.title"),
            subtitle: t("scenarioCards.2.subtitle"),
            description: t("scenarioCards.2.description"),
            icon: Globe2,
          },
        ]}
        deliverableTitle={t("deliverableTitle")}
        deliverableDescription={t("deliverableDescription")}
        deliverableCards={[
          {
            title: t("deliverableCards.0.title"),
            subtitle: t("deliverableCards.0.subtitle"),
            description: t("deliverableCards.0.description"),
            icon: Layers,
          },
          {
            title: t("deliverableCards.1.title"),
            subtitle: t("deliverableCards.1.subtitle"),
            description: t("deliverableCards.1.description"),
            icon: Briefcase,
          },
          {
            title: t("deliverableCards.2.title"),
            subtitle: t("deliverableCards.2.subtitle"),
            description: t("deliverableCards.2.description"),
            icon: Zap,
          },
        ]}
        includedTitle={t("includedTitle")}
        includedItems={[
          t("includedItems.0"),
          t("includedItems.1"),
          t("includedItems.2"),
          t("includedItems.3"),
        ]}
        includedBonus={t("includedBonus")}
        priceLabel={t("priceLabel")}
        priceValue={t("priceValue")}
        priceNote={t("priceNote")}
        faqTitle={t("faqTitle")}
        faqDescription={t("faqDescription")}
        faqs={faqs.map((item) => ({
          q: item.question,
          a: item.answer,
        }))}
      />
    </>
  );
}
