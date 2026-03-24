import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import { buildMetadata } from "@/lib/seo";
import ExperimentalLPClient from "./ExperimentalLPClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Growth Audit pro firmy v Česku | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud chcete audit růstu, reklamy a webu, napište nám.",
        }
      : {
          title: "Growth Audit для бизнеса в Праге | HaloAgency",
          description:
            "20-мин Growth Audit Call: разберем рекламу, лендинг и трекинг. Получите 30-дневный план действий для бизнеса в Чехии.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/experimental",
    locale,
    robots: { index: false, follow: false },
  });
}

export default async function ExperimentalLPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Growth Audit pro web, reklamu a funnel"
        description="Podíváme se na to, kde se ztrácí růst, jaké jsou největší blokery a co má smysl řešit jako první během nejbližších týdnů."
      />
    );
  }
  return <ExperimentalLPClient />;
}
