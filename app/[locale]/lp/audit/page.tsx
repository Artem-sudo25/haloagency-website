import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LocalizedLpPlaceholder from "@/app/[locale]/lp/_components/LocalizedLpPlaceholder";
import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import { buildMetadata } from "@/lib/seo";
import AuditLPClient from "./AuditLPClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          title: "Bezplatný marketingový rozbor za 15 minut | HaloAgency",
          description:
            "Českou verzi této stránky dokončujeme. Pokud chcete rychle zjistit, kde vám utíkají klienti, napište nám.",
        }
      : {
          title: "Бесплатный разбор маркетинга за 15 минут | HaloAgency",
          description:
            "Запишитесь на бесплатную консультацию. Разберём, где вы теряете клиентов и что делать первым. Для бизнеса в Чехии.",
        };

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/lp/audit",
    locale,
    robots: { index: false, follow: false },
  });
}

type AvatarType = "insta" | "burned" | "deadsite";

export default async function AuditLPPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ a?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "cs") {
    return (
      <LocalizedLpPlaceholder
        title="Krátký marketingový rozbor bez závazků"
        description="Rychle ukážeme, kde se ztrácí poptávky, co je rozbité v reklamě nebo na webu a jaký první krok má dnes největší smysl."
      />
    );
  }
  const resolvedSearchParams = await searchParams;
  const avatar = ["insta", "burned", "deadsite"].includes(
    resolvedSearchParams.a || "",
  )
    ? (resolvedSearchParams.a as AvatarType)
    : undefined;

  return (
    <ScopedNextIntlProvider namespaces={["validation.auditConsultation"]}>
      <AuditLPClient avatar={avatar} />
    </ScopedNextIntlProvider>
  );
}
