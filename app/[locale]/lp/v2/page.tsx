import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import LPV2Client from "./LPV2Client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;

  const metadata = buildMetadata({
    title: "Бесплатный разбор рекламы за 20 минут | HaloAgency",
    description:
      "Разбираем вашу рекламу, лендинг и трекинг. После звонка — PDF с конкретными точками роста. Бесплатно, без обязательств.",
    path: "/lp/v2",
    locale: "ru",
    robots: { index: false, follow: false },
  });

  return {
    ...metadata,
    alternates: {
      canonical: absoluteUrl("/lp/v2"),
      languages: {
        ru: absoluteUrl("/lp/v2"),
        "x-default": absoluteUrl("/lp/v2"),
      },
    },
    openGraph: {
      ...metadata.openGraph,
      locale: "ru_RU",
    },
  };
}

export default async function LPV2Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    const resolvedSearchParams = await searchParams;
    const query = new URLSearchParams();

    Object.entries(resolvedSearchParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => query.append(key, item));
      } else if (value) {
        query.set(key, value);
      }
    });

    const destination = query.size > 0 ? `/lp/v2?${query.toString()}` : "/lp/v2";
    permanentRedirect(destination);
  }
  return <LPV2Client />;
}
