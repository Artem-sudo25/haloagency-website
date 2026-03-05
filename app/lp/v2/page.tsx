import type { Metadata } from "next";
import LPV2Client from "./LPV2Client";

export const metadata: Metadata = {
  title: "Бесплатный разбор рекламы за 20 минут | HaloAgency",
  description:
    "Разбираем вашу рекламу, лендинг и трекинг. После звонка — PDF с конкретными точками роста. Бесплатно, без обязательств.",
  robots: { index: false, follow: false },
};

export default function LPV2Page() {
  return <LPV2Client />;
}
