import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import WebProcess from "@/components/sections/WebProcess";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import WebPageClient from "./WebPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.web" });
  const keywords =
    locale === "cs"
      ? [
          "tvorba webu",
          "firemní web",
          "landing page",
          "e-shop na míru",
          "vývoj webu Praha",
          "web pro firmy v Česku",
          "web pod reklamu",
        ]
      : [
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
        ];
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/web",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
    keywords,
  });
}

export default async function WebPage({
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
          name: "Weby HaloAgency",
          description:
            "Landing pages, firemní weby a e-shopy v Česku. Pomáháme vybrat správný formát webu pro reklamu, SEO, poptávky a online prodej.",
        }
      : {
          name: "Сайты HaloAgency",
          description:
            "Лендинги, сайты для бизнеса и интернет-магазины в Чехии. Помогаем выбрать формат сайта под рекламу, SEO, заявки и онлайн-продажи.",
        };
  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("web"), href: "/web" },
  ];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: seoCopy.name,
            description: seoCopy.description,
            path: "/web",
            locale,
          }),
        ]}
      />
      <ScopedNextIntlProvider namespaces={["breadcrumbs", "webPage"]}>
        <WebPageClient processSection={<WebProcess />} />
      </ScopedNextIntlProvider>
    </>
  );
}
