import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { BlogArticleLayout } from "@/app/[locale]/blog/_components/BlogArticleLayout";
import { WhatServiceWebsiteNeedsArticle } from "@/app/[locale]/blog/_content/chto-dolzhno-byt-na-saite-uslug-article";
import { LendingVsSiteArticle } from "@/app/[locale]/blog/_content/lending-ili-polnotsennyi-sait-article";
import { NormalTrackingForSmallBusinessArticle } from "@/app/[locale]/blog/_content/normalnyi-treking-dlya-malogo-biznesa-article";
import { WhyGoogleAdsDoesNotWorkArticle } from "@/app/[locale]/blog/_content/pochemu-google-ads-ne-rabotaet-article";
import {
  getBlogPostBySlug,
  getLocalizedBlogPostBySlug,
  publishedBlogPosts,
  type SupportedBlogLocale,
} from "@/app/[locale]/blog/_content/posts";
import { buildMetadata } from "@/lib/seo";

const articleBodies = {
  "chto-dolzhno-byt-na-saite-uslug": WhatServiceWebsiteNeedsArticle,
  "lending-ili-polnotsennyi-sait-v-chekhii": LendingVsSiteArticle,
  "normalnyi-treking-dlya-malogo-biznesa":
    NormalTrackingForSmallBusinessArticle,
  "pochemu-google-ads-ne-rabotaet": WhyGoogleAdsDoesNotWorkArticle,
} as const;

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const basePost = getBlogPostBySlug(slug);
  const blogLocale: SupportedBlogLocale = locale === "cs" ? "cs" : "ru";
  const post = getLocalizedBlogPostBySlug(slug, blogLocale);

  if (!basePost || !post || basePost.status !== "published") {
    return {};
  }

  return buildMetadata({
    title: `${post.title} | HaloAgency`,
    description: post.description,
    path: `/blog/${post.slug}`,
    locale,
    openGraphTitle: post.title,
    openGraphDescription: post.description,
    keywords: post.keywords,
    type: "article",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const basePost = getBlogPostBySlug(slug);
  const blogLocale: SupportedBlogLocale = locale === "cs" ? "cs" : "ru";
  const post = getLocalizedBlogPostBySlug(slug, blogLocale);

  if (!basePost || !post || basePost.status !== "published") {
    notFound();
  }

  const ArticleBody = articleBodies[basePost.slug as keyof typeof articleBodies];

  if (!ArticleBody) {
    notFound();
  }

  return (
    <BlogArticleLayout post={post} locale={locale}>
      <ArticleBody locale={blogLocale} />
    </BlogArticleLayout>
  );
}
