import { ImageResponse } from "next/og";
import { OgImageCard } from "@/components/seo/OgImageCard";

export const runtime = "edge";

export const alt = "HaloAgency blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy =
    locale === "cs"
      ? {
          alt: "Blog HaloAgency",
          eyebrow: "Blog",
          title: "Praktické články o webech, reklamě a analytice",
          description:
            "Rozbor reálných marketingových situací pro firmy v Česku bez agenturního balastu a obecné teorie.",
          footerLabel: "Nové články HaloAgency",
        }
      : {
          alt: "Блог HaloAgency",
          eyebrow: "Блог",
          title: "Практические статьи про сайты, рекламу и аналитику",
          description:
            "Разбор реальных маркетинговых задач для бизнеса в Чехии: без агентского шума и общей теории.",
          footerLabel: "Новые статьи HaloAgency",
        };

  return new ImageResponse(
    <OgImageCard
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      variant="blog"
      accentColor="#FFD166"
      footerLabel={copy.footerLabel}
    />,
    size,
  );
}
