import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import GoogleAdsLPClient from "./GoogleAdsLPClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Google Ads v Česku | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud řešíte Google Ads pro firmu v Česku, napište nám a připravíme další krok.",
        }
      : {
          title: "Google Ads в Чехии | Настройка и ведение контекстной рекламы",
          description:
            "Настройка и ведение Google Ads для бизнеса в Чехии. Разберём текущую рекламу или дадим план запуска с нуля. Подходит для русскоязычного бизнеса в Праге и по Чехии.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/google-ads",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function GoogleAdsLPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Google Ads pro firmy v Česku"
        description="Pomůžeme vám vyhodnotit současné kampaně nebo připravit realistický start od nuly bez zbytečného slibování výsledků."
      />
    );
  }
  return <GoogleAdsLPClient />;
}
