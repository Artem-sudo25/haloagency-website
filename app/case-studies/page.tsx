import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Кейсы", href: "/case-studies" },
];

export const metadata: Metadata = buildMetadata({
  title:
    "Кейсы HaloAgency | Сайты, реклама и автоматизация для бизнеса в Чехии",
  description:
    "Реальные кейсы HaloAgency: разработка сайтов, Google Ads, Meta Ads, аналитика и автоматизация для бизнеса в Чехии. Смотрите подход, задачи и результаты.",
  path: "/case-studies",
  openGraphTitle: "Кейсы HaloAgency",
  openGraphDescription:
    "Кейсы по сайтам, рекламе, аналитике и автоматизации для бизнеса в Чехии. Практические результаты и примеры проектов.",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: "Кейсы HaloAgency",
            description:
              "Реальные кейсы HaloAgency: разработка сайтов, Google Ads, Meta Ads, аналитика и автоматизация для бизнеса в Чехии. Смотрите подход, задачи и результаты.",
            path: "/case-studies",
          }),
        ]}
      />
      <CaseStudiesPageClient />
    </>
  );
}
