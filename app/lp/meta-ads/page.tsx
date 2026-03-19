import type { Metadata } from "next";
import MetaAdsLPClient from "./MetaAdsLPClient";

export const metadata: Metadata = {
  title: "Meta Ads в Чехии | Таргетированная реклама Instagram и Facebook",
  description:
    "Настройка и ведение Meta Ads для бизнеса в Чехии. Разберём текущий таргет или дадим план запуска с нуля. Подходит для русскоязычного бизнеса в Праге и по Чехии.",
  robots: { index: false, follow: false },
};

export default function MetaAdsLPPage() {
  return <MetaAdsLPClient />;
}
