import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import About from "@/components/sections/About";
import GrowthPlanMagnet from "@/components/sections/GrowthPlanMagnet";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildMetadata,
  organizationJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  const keywords =
    locale === "cs"
      ? [
          "marketingová agentura",
          "správa reklamy",
          "Google Ads Česko",
          "Meta Ads Česko",
          "tvorba webu",
          "firemní web",
          "landing page",
          "e-shop na míru",
          "analytika a tracking",
          "marketing Praha",
        ]
      : [
          "маркетинговое агентство",
          "настройка таргетированной рекламы",
          "таргетированная реклама инстаграм",
          "таргетированная реклама фейсбук",
          "реклама в instagram",
          "реклама в facebook",
          "контекстная реклама google",
          "реклама google ads",
          "настройка рекламы гугл",
          "создание сайтов для бизнеса",
          "маркетинг в Чехии",
          "маркетинг Прага",
          "настройка таргет",
          "настройка таргет прага",
        ];

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/",
    openGraphTitle: t("ogTitle"),
    locale,
    keywords,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageCopy =
    locale === "cs"
      ? {
          name: "HaloAgency — marketingová agentura v Praze",
          description:
            "Weby, reklama, analytika a automatizace pro firmy v Česku. Hlavní stránka HaloAgency se službami, referencemi a jasným dalším krokem.",
        }
      : {
          name: "HaloAgency — маркетинговое агентство в Праге",
          description:
            "Сайты, реклама, аналитика и автоматизация для бизнеса в Чехии. Главная страница HaloAgency с услугами, кейсами и понятным следующим шагом.",
        };

  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          webSiteJsonLd({ locale }),
          webPageJsonLd({
            name: pageCopy.name,
            description: pageCopy.description,
            path: "/",
            locale,
          }),
        ]}
      />
      <main className="relative bg-[#F5F5F7] min-h-screen">
        {/* Subtle dot grid texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10">
          <Hero />
          <SocialProof />
          <Services />
          <Projects />
          <About />
          <Process />
          <GrowthPlanMagnet />
        </div>
      </main>
    </>
  );
}
