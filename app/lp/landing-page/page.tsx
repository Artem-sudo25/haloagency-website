import type { Metadata } from "next";
import LandingPageLPClient from "./LandingPageLPClient";

export const metadata: Metadata = {
  title: "Разработка лендингов в Чехии | Лендинг под рекламу — HaloAgency",
  description:
    "Делаем landing page под Google Ads и Meta для бизнеса в Чехии. Бесплатное демо лендинга за 48 часов и понятный ориентир по стоимости.",
  robots: { index: false, follow: false },
};

export default function LandingPageLPPage() {
  return <LandingPageLPClient />;
}
