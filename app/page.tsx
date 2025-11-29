import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Packages from "@/components/sections/Packages";
import Contact from "@/components/sections/Contact";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import type { Metadata } from "next";

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
    <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
      <Hero />
      <ScrollAnimation delay={0.2}>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation direction="left">
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <LeadMagnet />
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <Packages />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Contact />
      </ScrollAnimation>
    </main>
  );
}
