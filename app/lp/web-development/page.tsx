import type { Metadata } from "next";
import WebDevelopmentLPClient from "./WebDevelopmentLPClient";

export const metadata: Metadata = {
  title: "Создание сайтов под ключ в Чехии | HaloAgency",
  description:
    "Создаём сайты под ключ для бизнеса в Чехии: лендинги, сайты услуг и корпоративные сайты. Бесплатное демо за 48 часов и ориентир по стоимости.",
  robots: { index: false, follow: false },
};

export default function WebDevelopmentLPPage() {
  return <WebDevelopmentLPClient />;
}
