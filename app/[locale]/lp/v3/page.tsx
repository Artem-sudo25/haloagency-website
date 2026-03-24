import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import LPV3Client from "./LPV3Client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Bezplatné demo webu do 48 hodin | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud chcete rychlý návrh webu pro svůj obor, napište nám.",
        }
      : {
          title: "Бесплатное демо сайта за 48 часов | HaloAgency",
          description:
            "Короткий созвон — и через 48 часов покажем бесплатное демо сайта под ваш бизнес. Без оплаты, без обязательств, с понятным результатом.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/v3",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function LPV3Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Bezplatný návrh webu do 48 hodin"
        description="Po krátkém hovoru připravíme návrh směru webu, který odpovídá vaší nabídce, cíli a tomu, co od stránky opravdu potřebujete."
      />
    );
  }
  return <LPV3Client />;
}
