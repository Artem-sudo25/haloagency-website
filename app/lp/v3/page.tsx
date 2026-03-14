import type { Metadata } from "next";
import LPV3Client from "./LPV3Client";

export const metadata: Metadata = {
  title: "Бесплатное демо сайта за 48 часов | HaloAgency",
  description:
    "Короткий созвон — и через 48 часов покажем бесплатное демо сайта под ваш бизнес. Без оплаты, без обязательств, с понятным результатом.",
  robots: { index: false, follow: false },
};

export default function LPV3Page() {
  return <LPV3Client />;
}
