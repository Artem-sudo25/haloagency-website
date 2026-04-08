import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import {
  type BlogPost,
  blogCategoryTranslationKey,
} from "@/app/[locale]/(site)/blog/_content/posts";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/routing";
import { articleJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

type BlogArticleLayoutProps = {
  post: BlogPost;
  children: ReactNode;
  locale: string;
};

function formatDate(date: string | undefined, locale: string) {
  if (!date) {
    return null;
  }

  const dateLocale = locale === "cs" ? "cs-CZ" : "ru-RU";

  return new Intl.DateTimeFormat(dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export async function BlogArticleLayout({
  post,
  children,
  locale,
}: BlogArticleLayoutProps) {
  const t = await getTranslations({ locale, namespace: "blogArticle" });
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });
  const tc = await getTranslations({ locale, namespace: "blogCard" });

  const path = `/blog/${post.slug}`;
  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("blog"), href: "/blog" },
    { label: post.title, href: path },
  ];
  const publishedDate = formatDate(post.datePublished, locale);
  const categoryLabel = tc(blogCategoryTranslationKey[post.category]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: post.title,
            description: post.description,
            path,
            type: "Article",
            locale,
          }),
          articleJsonLd({
            headline: post.title,
            description: post.description,
            path,
            keywords: post.keywords,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            articleType: "BlogPosting",
            locale,
          }),
        ]}
      />
      <main className="min-h-screen bg-[#F5F5F7] pt-20">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 px-6 py-12 md:py-20">
          <div className="mx-auto max-w-[920px]">
            <Breadcrumbs items={breadcrumbItems} />

            <section className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
              <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                {categoryLabel}
              </div>

              <h1
                className="mt-6 text-4xl font-extrabold leading-[1.08] text-[#1A1A1A] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h1>

              <p className="mt-6 max-w-[760px] text-lg font-medium leading-relaxed text-[#1A1A1A]/75">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[#1A1A1A]/55">
                {publishedDate && <span>{publishedDate}</span>}
                <span>{post.readingTime}</span>
              </div>

              <div className="mt-8 rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[5px_5px_0px_0px_#1A1A1A]">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                  {t("summary")}
                </div>
                <ul className="mt-4 space-y-3">
                  {post.introPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-base font-semibold leading-relaxed text-[#1A1A1A]"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF3366]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <article className="mt-10 rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
              <div className="space-y-10 text-[17px] font-medium leading-relaxed text-[#1A1A1A]/80">
                {children}
              </div>
            </article>

            <section className="mt-10 rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
              <div className="max-w-[720px]">
                <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#FF3366] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[4px_4px_0px_0px_#1A1A1A]">
                  {t("nextStep")}
                </div>
                <h2
                  className="mt-6 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("ctaTitle")}
                </h2>
                <p className="mt-4 text-base font-medium leading-relaxed text-[#1A1A1A]/70">
                  {t("ctaDescription")}
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href={post.primaryCtaHref}
                    data-cta-track="true"
                    data-cta-name={post.primaryCtaLabel}
                    data-cta-location="blog_final_cta"
                    data-cta-category="primary"
                    className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    {post.primaryCtaLabel}
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
                  >
                    {t("backToBlog")}
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
