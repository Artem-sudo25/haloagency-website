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
  title: "HaloAgency - Технический маркетинг для бизнеса в Чехии",
  description: "Современные сайты за 3-7 дней, server-side tracking с точностью 70-85%, реклама на данных. Быстро, прозрачно, измеримо. От 15,000 CZK.",
  keywords: ["веб разработка", "реклама", "аналитика", "tracking", "Next.js", "Google Ads", "Meta Ads", "server-side tracking", "Прага", "Чехия"],
  openGraph: {
    title: "HaloAgency - Технический маркетинг для бизнеса в Чехии",
    description: "Современные сайты за 3-7 дней, server-side tracking с точностью 70-85%, реклама на данных.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function Home() {
  return (
    <main className="bg-ha-bg pt-20">
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
