import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlogCard } from "@/app/[locale]/(site)/blog/_components/BlogCard";
import {
  getLocalizedDraftBlogPosts,
  getLocalizedPublishedBlogPosts,
  type SupportedBlogLocale,
} from "@/app/[locale]/(site)/blog/_content/posts";
import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/routing";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.blog" });
  const seoCopy =
    locale === "cs"
      ? [
          "blog marketingové agentury",
          "google ads Česko",
          "landing page nebo web",
          "nastavení analytiky pro firmy",
          "marketing pro firmy v Česku",
        ]
      : [
          "блог маркетингового агентства",
          "google ads чехия",
          "лендинг или сайт",
          "настройка аналитики для бизнеса",
          "маркетинг для бизнеса в чехии",
        ];
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/blog",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
    keywords: seoCopy,
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const blogLocale: SupportedBlogLocale = locale === "cs" ? "cs" : "ru";
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });
  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("blog"), href: "/blog" },
  ];
  const publishedBlogPosts = getLocalizedPublishedBlogPosts(blogLocale);
  const draftBlogPosts = getLocalizedDraftBlogPosts(blogLocale);
  const copy =
    locale === "cs"
      ? {
          badge: "Blog",
          title: "Praktické články o webech, reklamě a analytice",
          description:
            "Ne obecné řeči o digitálním marketingu, ale rozbor reálných situací: kdy dává smysl landing page, proč Google Ads nepřináší poptávky a jak má vypadat funkční tracking pro menší firmu.",
          publishedLabel: "Již publikováno",
          publishedTitle: "První články",
          draftsLabel: "Připravujeme",
          draftsTitle: "Další publikace",
          finalTitle:
            "Nechcete číst obecnou teorii? Můžeme rovnou probrat vaše zadání",
          finalDescription:
            "Podíváme se, co konkrétně brzdí růst: web, reklama, analytika nebo samotné zpracování poptávek.",
          finalButton: "Probrat zadání",
          jsonLdName: "Blog HaloAgency",
          jsonLdDescription:
            "Praktické články HaloAgency o webech, reklamě, analytice a automatizaci pro firmy v Česku.",
        }
      : {
          badge: "Блог",
          title: "Практические статьи про сайты, рекламу и аналитику",
          description:
            "Не общий контент про “digital marketing”, а разбор реальных вопросов: когда нужен лендинг, почему Google Ads не даёт заявок и как должен выглядеть нормальный трекинг для малого бизнеса.",
          publishedLabel: "Уже опубликовано",
          publishedTitle: "Первые материалы",
          draftsLabel: "В работе",
          draftsTitle: "Следующие публикации",
          finalTitle:
            "Если не хотите читать общую теорию, можно сразу обсудить задачу",
          finalDescription:
            "Разберём, что именно тормозит рост: сайт, реклама, аналитика или сама логика обработки заявок.",
          finalButton: "Обсудить задачу",
          jsonLdName: "Блог HaloAgency",
          jsonLdDescription:
            "Практические статьи HaloAgency про сайты, рекламу, аналитику и автоматизацию для бизнеса в Чехии.",
        };
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: copy.jsonLdName,
            description: copy.jsonLdDescription,
            path: "/blog",
            locale,
          }),
        ]}
      />
      <ScopedNextIntlProvider namespaces={["blogCard"]}>
        <main className="min-h-screen bg-[#F5F5F7] pt-20">
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[1200px]">
              <Breadcrumbs items={breadcrumbItems} />

              <section className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
                <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  {copy.badge}
                </div>
                <h1
                  className="mt-6 max-w-[900px] text-4xl font-extrabold leading-[1.08] text-[#1A1A1A] sm:text-5xl md:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {copy.title}
                </h1>
                <p className="mt-6 max-w-[760px] text-lg font-medium leading-relaxed text-[#1A1A1A]/75">
                  {copy.description}
                </p>
              </section>

              <section className="mt-10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                      {copy.publishedLabel}
                    </div>
                    <h2
                      className="mt-2 text-3xl font-extrabold text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {copy.publishedTitle}
                    </h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {publishedBlogPosts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                      href={`/blog/${post.slug}`}
                    />
                  ))}
                </div>
              </section>

              {draftBlogPosts.length > 0 && (
                <section className="mt-12">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                    {copy.draftsLabel}
                  </div>
                  <h2
                    className="mt-2 text-3xl font-extrabold text-[#1A1A1A]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {copy.draftsTitle}
                  </h2>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    {draftBlogPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              )}

              <section className="mt-12 rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
                <div className="max-w-[760px]">
                  <h2
                    className="text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {copy.finalTitle}
                  </h2>
                  <p className="mt-4 text-base font-medium leading-relaxed text-[#1A1A1A]/70">
                    {copy.finalDescription}
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      data-cta-track="true"
                      data-cta-name={copy.finalButton}
                      data-cta-location="blog_index_final_cta"
                      data-cta-category="primary"
                      className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    >
                      {copy.finalButton}
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </ScopedNextIntlProvider>
    </>
  );
}
