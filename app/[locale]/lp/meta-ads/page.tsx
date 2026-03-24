import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import MetaAdsLPClient from "./MetaAdsLPClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Meta Ads v Česku | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud řešíte Meta Ads pro firmu v Česku, napište nám a navrhneme další krok.",
        }
      : {
          title: "Meta Ads в Чехии | Таргетированная реклама Instagram и Facebook",
          description:
            "Настройка и ведение Meta Ads для бизнеса в Чехии. Разберём текущий таргет или дадим план запуска с нуля. Подходит для русскоязычного бизнеса в Праге и по Чехии.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/meta-ads",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function MetaAdsLPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Meta Ads pro lokální i výkonnostní kampaně"
        description="Pomůžeme vám rozhodnout, co propagovat, jaký funnel dává smysl a jestli je připravená nabídka, kreativa i vstupní stránka."
      />
    );
  }
  return <MetaAdsLPClient />;
}
