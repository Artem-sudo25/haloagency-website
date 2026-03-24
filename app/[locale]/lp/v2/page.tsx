import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import LPV2Client from "./LPV2Client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Bezplatný rozbor reklamy za 20 minut | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud chcete rychle prověřit reklamu, landing page a tracking, napište nám.",
        }
      : {
          title: "Бесплатный разбор рекламы за 20 минут | HaloAgency",
          description:
            "Разбираем вашу рекламу, лендинг и трекинг. После звонка — PDF с конкретными точками роста. Бесплатно, без обязательств.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/v2",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function LPV2Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Krátký rozbor reklamy, webu a trackingu"
        description="Během krátkého callu ukážeme hlavní úzká místa, která blokují poptávky nebo zkreslují data, a navrhneme další krok bez závazků."
      />
    );
  }
  return <LPV2Client />;
}
