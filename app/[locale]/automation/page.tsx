import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import type { SeoFaqItem } from "@/lib/seo";
import AutomationPageClient from "./AutomationPageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.automation" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/automation",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function AutomationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });
  const tf = await getTranslations({ locale, namespace: "automationFaq" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("automation"), href: "/automation" },
  ];
  const seoCopy =
    locale === "cs"
      ? {
          name: "Automatizace byznysu a AI v Česku",
          description:
            "Automatizujeme poptávky, CRM, messengery a rutinu pomocí AI, n8n a integrací. Pomáháme firmám v Česku šetřit čas a neztrácet klienty.",
        }
      : {
          name: "Автоматизация бизнеса и AI в Чехии",
          description:
            "Автоматизируем заявки, CRM, мессенджеры и рутину с помощью AI, n8n и интеграций. Помогаем бизнесу в Чехии экономить время и не терять клиентов.",
        };

  const faqItems: SeoFaqItem[] = Array.from({ length: 8 }, (_, i) => ({
    question: tf(`${i}.question`),
    answer: tf(`${i}.answer`),
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          serviceJsonLd({
            name: seoCopy.name,
            description: seoCopy.description,
            path: "/automation",
            serviceType: "Business automation and AI integration",
            locale,
          }),
          faqPageJsonLd(faqItems),
        ]}
      />
      <AutomationPageClient />
    </>
  );
}
