import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import {
  blogCategoryTranslationKey,
  getLocalizedBlogPostBySlug,
  type SupportedBlogLocale,
} from "@/app/[locale]/blog/_content/posts";
import { OgImageCard } from "@/components/seo/OgImageCard";
import { getTranslations } from "next-intl/server";

export const runtime = "edge";
export const alt = "HaloAgency blog article";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const accentColors = {
  Сайты: "#FFD166",
  Реклама: "#FF3366",
  "Трекинг и аналитика": "#06D6A0",
} as const;

const variants = {
  Сайты: "sites",
  Реклама: "ads",
  "Трекинг и аналитика": "tracking",
} as const;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const blogLocale: SupportedBlogLocale = locale === "cs" ? "cs" : "ru";
  const post = getLocalizedBlogPostBySlug(slug, blogLocale);
  const tc = await getTranslations({ locale, namespace: "blogCard" });

  if (!post || post.status !== "published") {
    notFound();
  }

  const categoryLabel = tc(blogCategoryTranslationKey[post.category]);
  const eyebrow = locale === "cs" ? "Blog" : "Блог";
  const footerLabels =
    locale === "cs"
      ? {
          sites: "Struktura • Důvěra • SEO",
          ads: "Kliky • Poptávky • Prodeje",
          tracking: "Data • Události • Atribuce",
        }
      : {
          sites: "Структура • Доверие • SEO",
          ads: "Клики • Лиды • Продажи",
          tracking: "Данные • События • Атрибуция",
        };

  return new ImageResponse(
    <OgImageCard
      eyebrow={eyebrow}
      category={categoryLabel}
      title={post.title}
      description={post.description}
      variant={variants[post.category]}
      accentColor={accentColors[post.category]}
      footerLabel={footerLabels[variants[post.category]]}
    />,
    size,
  );
}
