import type { Metadata } from "next";
import LPV3Client from "./LPV3Client";

export const metadata: Metadata = {
  title: "Нет сайта? Вы каждый день теряете клиентов | HaloAgency",
  description:
    "Сайт — это точка принятия решения. Разберём бесплатно, сколько клиентов вы теряете без него и что с этим сделать.",
  robots: { index: false, follow: false },
};

export default function LPV3Page() {
  return <LPV3Client />;
}
