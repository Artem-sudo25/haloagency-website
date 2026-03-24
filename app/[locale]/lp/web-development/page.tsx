import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import WebDevelopmentLPClient from "./WebDevelopmentLPClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Tvorba webů na míru v Česku | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud potřebujete nový web pro firmu v Česku, napište nám a navrhneme další krok.",
        }
      : {
          title: "Создание сайтов под ключ в Чехии | HaloAgency",
          description:
            "Создаём сайты под ключ для бизнеса в Чехии: лендинги, сайты услуг и корпоративные сайты. Бесплатное демо за 48 часов и ориентир по стоимости.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/web-development",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function WebDevelopmentLPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Web na míru pro firmu v Česku"
        description="Ať řešíte nový web, prodejní landing page nebo přestavbu stávajícího řešení, připravíme smysluplný další krok bez zbytečné omáčky."
      />
    );
  }
  return <WebDevelopmentLPClient />;
}
