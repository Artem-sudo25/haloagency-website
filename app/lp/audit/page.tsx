import { Metadata } from "next";
import AuditLPClient from "./AuditLPClient";

export const metadata: Metadata = {
  title: "Бесплатный разбор маркетинга за 15 минут | HaloAgency",
  description:
    "Запишитесь на бесплатную консультацию. Разберём, где вы теряете клиентов и что делать первым. Для бизнеса в Чехии.",
  robots: {
    index: false,
    follow: false,
  },
};

type AvatarType = "insta" | "burned" | "deadsite";

export default async function AuditLPPage({
  searchParams,
}: {
  searchParams: Promise<{ a?: string }>;
}) {
  const params = await searchParams;
  const avatar = ["insta", "burned", "deadsite"].includes(params.a || "")
    ? (params.a as AvatarType)
    : undefined;

  return <AuditLPClient avatar={avatar} />;
}
