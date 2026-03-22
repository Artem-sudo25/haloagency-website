import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/seo";
import TrackingPageClient from "./TrackingPageClient";
import { trackingFaqs } from "./tracking-content";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Трекинг", href: "/tracking" },
];

export const metadata: Metadata = {
  title:
    "Server-side tracking и аналитика в Чехии | Meta CAPI, GA4 — HaloAgency",
  description:
    "Настройка server-side tracking, Meta CAPI и аналитики для бизнеса в Чехии. Помогаем видеть больше реальных конверсий и принимать решения на основе данных.",
  openGraph: {
    title: "Server-side tracking и аналитика в Чехии — HaloAgency",
    description:
      "Server-side tracking, Meta CAPI, GA4 и точная аналитика для бизнеса в Чехии. Больше данных, точнее атрибуция, лучше реклама.",
  },
};

export default function TrackingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          serviceJsonLd({
            name: "Server-side tracking и аналитика в Чехии",
            description:
              "Настройка server-side tracking, Meta CAPI и аналитики для бизнеса в Чехии. Помогаем видеть больше реальных конверсий и принимать решения на основе данных.",
            path: "/tracking",
            serviceType: "Server-side tracking and analytics",
          }),
          faqPageJsonLd(trackingFaqs),
        ]}
      />
      <TrackingPageClient />
    </>
  );
}
