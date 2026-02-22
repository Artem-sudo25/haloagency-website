import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import GrowthPlanMagnet from "@/components/sections/GrowthPlanMagnet";
import Packages from "@/components/sections/Packages";
import FAQ from "@/components/sections/FAQ";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import type { Metadata } from "next";

// Unified divider for consistent separation between sections
const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/15 to-transparent border-t border-white/5" />
);

export const metadata: Metadata = {
  title: "HaloAgency — маркетинговое агентство в Праге | Сайты и реклама",
  description:
    "Создание сайтов, таргетированная реклама в Instagram и Facebook, контекстная реклама в Google. Помогаем бизнесу в Чехии привлекать клиентов и расти.",

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

  authors: [{ name: "HaloAgency" }],
  creator: "HaloAgency",
  publisher: "HaloAgency",

  openGraph: {
    title: "HaloAgency — сайты и реклама для бизнеса в Чехии",
    description:
      "Создание сайтов, таргетированная реклама в Instagram и Facebook, контекстная реклама в Google. Помогаем бизнесу в Чехии привлекать клиентов и расти.",
    url: "https://haloagency.cz",
    siteName: "HaloAgency",
    locale: "ru_RU",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="bg-ha-bg">
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Packages />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <GrowthPlanMagnet />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <Contact />
    </main>
  );
}
