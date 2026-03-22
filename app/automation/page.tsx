import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/seo";
import AutomationPageClient from "./AutomationPageClient";
import { automationFaqs } from "./automation-content";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Автоматизация", href: "/automation" },
];

export const metadata: Metadata = {
  title: "Автоматизация бизнеса и AI в Чехии | CRM, WhatsApp, n8n — HaloAgency",
  description:
    "Автоматизируем заявки, CRM, мессенджеры и рутину с помощью AI, n8n и интеграций. Помогаем бизнесу в Чехии экономить время и не терять клиентов.",
  openGraph: {
    title: "Автоматизация бизнеса и AI в Чехии — HaloAgency",
    description:
      "AI, CRM, WhatsApp, Telegram, n8n и автоматизация процессов для бизнеса в Чехии. Меньше рутины, быстрее обработка заявок, меньше потерь.",
  },
};

export default function AutomationPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          serviceJsonLd({
            name: "Автоматизация бизнеса и AI в Чехии",
            description:
              "Автоматизируем заявки, CRM, мессенджеры и рутину с помощью AI, n8n и интеграций. Помогаем бизнесу в Чехии экономить время и не терять клиентов.",
            path: "/automation",
            serviceType: "Business automation and AI integration",
          }),
          faqPageJsonLd(automationFaqs),
        ]}
      />
      <AutomationPageClient />
    </>
  );
}
