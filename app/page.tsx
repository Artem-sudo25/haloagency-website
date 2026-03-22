import type { Metadata } from "next";
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

export const metadata: Metadata = buildMetadata({
  title: "HaloAgency — маркетинговое агентство в Праге | Сайты и реклама",
  description:
    "Создание сайтов, таргетированная реклама в Instagram и Facebook, контекстная реклама в Google. Помогаем бизнесу в Чехии привлекать клиентов и расти.",
  path: "/",
  openGraphTitle: "HaloAgency — сайты и реклама для бизнеса в Чехии",
  keywords: [
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
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          webSiteJsonLd(),
          webPageJsonLd({
            name: "HaloAgency — маркетинговое агентство в Праге",
            description:
              "Сайты, реклама, аналитика и автоматизация для бизнеса в Чехии. Главная страница HaloAgency с услугами, кейсами и понятным следующим шагом.",
            path: "/",
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
