import type { Metadata } from "next";
import ExperimentalLPClient from "./ExperimentalLPClient";

export const metadata: Metadata = {
  title: "Growth Audit для бизнеса в Праге | HaloAgency",
  description:
    "20-мин Growth Audit Call: разберем рекламу, лендинг и трекинг. Получите 30-дневный план действий для бизнеса в Чехии.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExperimentalLPPage() {
  return <ExperimentalLPClient />;
}
