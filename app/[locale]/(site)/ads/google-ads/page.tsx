import {
  BarChart3,
  Megaphone,
  Rocket,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import AdsServicePage from "../_components/AdsServicePage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.adsGoogle" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/ads/google-ads",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function GoogleAdsServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "googleAdsService" });
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("ads"), href: "/ads" },
    { label: tb("googleAds"), href: "/ads/google-ads" },
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
            path: "/ads/google-ads",
            serviceType: "Google Ads management",
            locale,
          }),
          faqPageJsonLd(faqs),
        ]}
      />
      <AdsServicePage
        eyebrow={t("eyebrow")}
        badge="Google Ads"
        title={t("title")}
        description={t("description")}
        chips={[
          t("chips.0"),
          t("chips.1"),
          t("chips.2"),
        ]}
        proofs={[
          t("proofs.0"),
          t("proofs.1"),
          t("proofs.2"),
        ]}
        intentTitle={t("intentTitle")}
        intentDescription={t("intentDescription")}
        intentCards={[
          {
            title: t("intentCards.0.title"),
            subtitle: t("intentCards.0.subtitle"),
            description: t("intentCards.0.description"),
            icon: Rocket,
          },
          {
            title: t("intentCards.1.title"),
            subtitle: t("intentCards.1.subtitle"),
            description: t("intentCards.1.description"),
            icon: BarChart3,
          },
          {
            title: t("intentCards.2.title"),
            subtitle: t("intentCards.2.subtitle"),
            description: t("intentCards.2.description"),
            icon: Target,
          },
        ]}
        offerTitle={t("offerTitle")}
        offerDescription={t("offerDescription")}
        offerCards={[
          {
            title: t("offerCards.0.title"),
            subtitle: t("offerCards.0.subtitle"),
            description: t("offerCards.0.description"),
            icon: Search,
          },
          {
            title: t("offerCards.1.title"),
            subtitle: t("offerCards.1.subtitle"),
            description: t("offerCards.1.description"),
            icon: Megaphone,
          },
          {
            title: t("offerCards.2.title"),
            subtitle: t("offerCards.2.subtitle"),
            description: t("offerCards.2.description"),
            icon: Sparkles,
          },
        ]}
        includedTitle={t("includedTitle")}
        includedItems={[
          t("includedItems.0"),
          t("includedItems.1"),
          t("includedItems.2"),
          t("includedItems.3"),
          t("includedItems.4"),
        ]}
        priceLabel={t("priceLabel")}
        priceValue={t("priceValue")}
        priceNote={t("priceNote")}
        accentColor="#06D6A0"
        faqTitle={t("faqTitle")}
        faqDescription={t("faqDescription")}
        faqs={faqs.map((item) => ({
          q: item.question,
          a: item.answer,
        }))}
        finalTitle={t("finalTitle")}
        finalText={t("finalText")}
        formConfig={{
          formId: "google-ads-form",
          badge: "Google Ads",
          title: t("formConfig.title"),
          subtitle: t("formConfig.subtitle"),
          successMessage: t("formConfig.successMessage"),
          presenceLabel: t("formConfig.presenceLabel"),
          presencePlaceholder: t("formConfig.presencePlaceholder"),
          consentText: t("formConfig.consentText"),
          cta: t("formConfig.cta"),
          whatsappHref:
            "https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20Google%20Ads%20%D0%B8%20%D0%BF%D0%BB%D0%B0%D0%BD%20%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B.",
          whatsappLabel: t("formConfig.whatsappLabel"),
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
