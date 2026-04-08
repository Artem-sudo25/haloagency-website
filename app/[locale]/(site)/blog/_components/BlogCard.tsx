"use client";

import { useTranslations } from "next-intl";
import type { BlogPost } from "@/app/[locale]/(site)/blog/_content/posts";
import { Link } from "@/i18n/routing";

const categoryStyles: Record<BlogPost["category"], string> = {
  Сайты: "bg-[#FFD166]",
  Реклама: "bg-[#FF3366] text-white",
  "Трекинг и аналитика": "bg-[#06D6A0]",
};

const categoryKey: Record<
  BlogPost["category"],
  "categories.sites" | "categories.ads" | "categories.tracking"
> = {
  Сайты: "categories.sites",
  Реклама: "categories.ads",
  "Трекинг и аналитика": "categories.tracking",
};

type BlogCardProps = {
  post: BlogPost;
  href?: string;
};

export function BlogCard({ post, href }: BlogCardProps) {
  const t = useTranslations("blogCard");

  const content = (
    <article className="flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A1A] transition-transform duration-200 hover:-translate-y-1">
      <div
        className={`inline-flex w-fit rounded-full border-2 border-[#1A1A1A] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] ${categoryStyles[post.category]}`}
      >
        {t(categoryKey[post.category])}
      </div>

      <h2
        className="mt-5 text-2xl font-extrabold leading-tight text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {post.title}
      </h2>

      <p className="mt-4 text-sm font-medium leading-relaxed text-[#1A1A1A]/70">
        {post.excerpt}
      </p>

      <ul className="mt-5 space-y-2">
        {post.introPoints.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-[#1A1A1A]/80"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF3366]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 text-sm font-bold text-[#1A1A1A]/60">
        {post.status === "published" ? post.readingTime : t("comingSoon")}
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
