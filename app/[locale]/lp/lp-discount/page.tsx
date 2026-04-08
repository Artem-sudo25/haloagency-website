import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import LPDiscountClient from "./LPDiscountClient";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Akční landing page se slevou 40 % | HaloAgency",
          description:
            "Českou verzi akční stránky dokončujeme. Pokud potřebujete landing page pro reklamu v Česku, napište nám a navrhneme další krok.",
        }
      : {
          title:
            "Landing page со скидкой 40% | 6 000 Kč вместо 10 000 Kč - HaloAgency",
          description:
            "До воскресенья, 5 апреля 2026, landing page за 6 000 Kč вместо 10 000 Kč. Страница под один оффер, рекламу и заявки для бизнеса в Чехии.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/lp-discount",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function LPDiscountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Akční landing page pro reklamu"
        description="Jde o časově omezenou nabídku pro jednoduchou landing page pod jeden konkrétní offer. Pokud to chcete spustit i v češtině, připravíme další krok."
      />
    );
  }
  return <LPDiscountClient initialNow={Date.now()} />;
}
