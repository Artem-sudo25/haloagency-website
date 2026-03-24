import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import LandingPageLPClient from "./LandingPageLPClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Landing page pro reklamu v Česku | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud potřebujete landing page pro Google Ads nebo Meta Ads, napište nám a navrhneme další krok.",
        }
      : {
          title: "Разработка лендингов в Чехии | Лендинг под рекламу - HaloAgency",
          description:
            "Делаем landing page под Google Ads и Meta для бизнеса в Чехии. Бесплатное демо лендинга за 48 часов и понятный ориентир по стоимости.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/landing-page",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function LandingPageLPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Landing page připravená pro reklamu"
        description="Pomůžeme navrhnout strukturu landing page, která odpovídá konkrétní nabídce, reklamnímu kanálu i očekávanému dalšímu kroku uživatele."
      />
    );
  }
  return <LandingPageLPClient />;
}
