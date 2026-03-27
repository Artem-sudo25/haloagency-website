import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import LPV3Client from "./LPV3Client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;

  const metadata = buildMetadata({
    title: "Бесплатное демо сайта за 48 часов | HaloAgency",
    description:
      "Короткий созвон — и через 48 часов покажем бесплатное демо сайта под ваш бизнес. Без оплаты, без обязательств, с понятным результатом.",
    path: "/lp/v3",
    locale: "ru",
    robots: { index: false, follow: false },
  });

  return {
    ...metadata,
    alternates: {
      canonical: absoluteUrl("/lp/v3"),
      languages: {
        ru: absoluteUrl("/lp/v3"),
        "x-default": absoluteUrl("/lp/v3"),
      },
    },
    openGraph: {
      ...metadata.openGraph,
      locale: "ru_RU",
    },
  };
}

export default async function LPV3Page({
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

    const destination = query.size > 0 ? `/lp/v3?${query.toString()}` : "/lp/v3";
    permanentRedirect(destination);
  }
  return <LPV3Client />;
}
