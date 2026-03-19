import type { Metadata } from "next";
import GoogleAdsLPClient from "./GoogleAdsLPClient";

export const metadata: Metadata = {
  title: "Google Ads в Чехии | Настройка и ведение контекстной рекламы",
  description:
    "Настройка и ведение Google Ads для бизнеса в Чехии. Разберём текущую рекламу или дадим план запуска с нуля. Подходит для русскоязычного бизнеса в Праге и по Чехии.",
  robots: { index: false, follow: false },
};

export default function GoogleAdsLPPage() {
  return <GoogleAdsLPClient />;
}
