import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";
import WebPageClient from "./WebPageClient";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Сайты", href: "/web" },
];

export const metadata: Metadata = {
  title:
    "Создание сайтов в Чехии | Лендинги, сайты для бизнеса, интернет-магазины — HaloAgency",
  description:
    "Создаём лендинги, сайты для бизнеса и интернет-магазины в Чехии. Помогаем выбрать правильный формат сайта под рекламу, SEO, заявки и онлайн-продажи.",
  keywords: [
    "создание сайтов",
    "создание сайтов для бизнеса",
    "разработка сайтов",
    "сайт для бизнеса",
    "создание лендинга",
    "создание лендинга под рекламу",
    "создание интернет магазина",
    "создание e shop",
    "создание сайтов чехия",
    "разработка сайтов прага",
    "wordpress сайт",
    "woocommerce интернет магазин",
  ],
  openGraph: {
    title: "Создание сайтов для бизнеса в Чехии — HaloAgency",
    description:
      "Объясняем, когда бизнесу нужен лендинг, сайт для услуг или интернет-магазин, и как сайт должен работать вместе с рекламой, формами и аналитикой.",
  },
};

export default function WebPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: "Сайты HaloAgency",
            description:
              "Лендинги, сайты для бизнеса и интернет-магазины в Чехии. Помогаем выбрать формат сайта под рекламу, SEO, заявки и онлайн-продажи.",
            path: "/web",
          }),
        ]}
      />
      <WebPageClient />
    </>
  );
}
