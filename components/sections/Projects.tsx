"use client";

import { TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { caseStudyCards } from "@/lib/case-study-cards";

const featuredProjects = caseStudyCards.filter(
  (project) => project.featuredOnHome,
);

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-5 border-b-2 border-[#1A1A1A]/10 pb-5 md:flex-row md:items-end md:gap-6 md:pb-6">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Кейсы с реальными
              <br />
              бизнес-результатами
            </h2>
            <p className="text-base text-[#1A1A1A]/60 md:text-lg">
              Проекты, где сайт, реклама, аналитика и процессы помогли получить
              больше заявок, броней или продаж.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-white px-5 py-3 text-base font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:text-[#FF3366] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#1A1A1A] md:px-6 md:text-lg"
          >
            Смотреть все →
          </Link>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 md:gap-20">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.href}
              href={project.href}
              className={`group ${index > 1 ? "hidden md:flex" : "flex"} cursor-pointer flex-col items-center gap-6 rounded-2xl border-2 border-[#1A1A1A] bg-white p-4 shadow-[8px_8px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] md:gap-12 md:p-8 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5 aspect-[16/10] rounded-xl border-2 border-[#1A1A1A] bg-gray-200 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={`Превью кейса ${project.name}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={index < 1}
                />
                <div
                  className={`absolute top-6 ${index % 2 === 1 ? "right-6" : "left-6"} px-4 py-2 bg-[#1A1A1A] text-white rounded-full text-xs font-bold uppercase tracking-wider`}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex w-full flex-col gap-5 md:w-2/5 md:gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-[#FF3366]" />
                </div>
                <h3
                  className="text-2xl font-extrabold leading-tight transition-colors group-hover:text-[#FF3366] md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.name}
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#1A1A1A] md:text-lg">
                  {project.description}
                </p>
                <div className="mt-1 inline-flex w-max items-center gap-2 rounded-lg bg-[#06D6A0]/15 px-3 py-2 text-xs font-bold text-[#1A1A1A] md:mt-2 md:gap-3 md:px-4 md:text-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>{project.stats.value}</span>
                  <span className="text-[#1A1A1A]/55">
                    {project.stats.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F7] px-3 py-1 text-xs font-bold text-[#1A1A1A] ${tagIndex === 2 ? "hidden md:inline-flex" : "inline-flex"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-bold text-[#FF3366]">
                  Открыть кейс →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
