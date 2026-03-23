import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleLayout } from "@/app/blog/_components/BlogArticleLayout";
import { LendingVsSiteArticle } from "@/app/blog/_content/lending-ili-polnotsennyi-sait-article";
import { NormalTrackingForSmallBusinessArticle } from "@/app/blog/_content/normalnyi-treking-dlya-malogo-biznesa-article";
import { WhyGoogleAdsDoesNotWorkArticle } from "@/app/blog/_content/pochemu-google-ads-ne-rabotaet-article";
import {
  getBlogPostBySlug,
  publishedBlogPosts,
} from "@/app/blog/_content/posts";
import { buildMetadata } from "@/lib/seo";

const articleBodies = {
  "lending-ili-polnotsennyi-sait-v-chekhii": LendingVsSiteArticle,
  "normalnyi-treking-dlya-malogo-biznesa":
    NormalTrackingForSmallBusinessArticle,
  "pochemu-google-ads-ne-rabotaet": WhyGoogleAdsDoesNotWorkArticle,
} as const;

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post || post.status !== "published") {
    return {};
  }

  return buildMetadata({
    title: `${post.title} | HaloAgency`,
    description: post.description,
    path: `/blog/${post.slug}`,
    openGraphTitle: post.title,
    openGraphDescription: post.description,
    keywords: post.keywords,
    type: "article",
  });
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const ArticleBody = articleBodies[post.slug as keyof typeof articleBodies];

  if (!ArticleBody) {
    notFound();
  }

  return (
    <BlogArticleLayout post={post}>
      <ArticleBody />
    </BlogArticleLayout>
  );
}
