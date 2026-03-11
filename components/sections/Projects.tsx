"use client";

import { TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Nejbalonky.cz",
    image: "/images/case-studies/nejbalonky-screenshot.png",
    category: "E-commerce",
    subtitle: "E-commerce система с полной автоматизацией",
    stats: "+45% ROAS",
    statsColor: "bg-[#06D6A0]/20 text-[#06D6A0]",
    description: "E-commerce магазин с полной автоматизацией. Интеграция логистики, складов и 1С-онлайн. Стабильный рост без увеличения штата.",
    href: "/case-studies/nejablonky",
    reverse: false,
  },
  {
    title: "ProPradlo.cz",
    image: "/images/case-studies/propradlo-screenshot.png",
    category: "Web + Ads",
    subtitle: "Цифровая трансформация оптового бизнеса",
    stats: "-30% Time",
    statsColor: "bg-[#A2D2FF]/40 text-[#1A1A1A]",
    description: "Цифровая трансформация оптового бизнеса. Внедрение CRM, B2B-портала, ERP-системы и комплексная автоматизация продаж.",
    href: "/case-studies/propradlo",
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-[#1A1A1A]/10 pb-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Результаты, которыми мы гордимся
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-[#1A1A1A] font-bold hover:text-[#FF3366] transition-all text-lg bg-white px-6 py-3 rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#1A1A1A]"
          >
            Смотреть все →
          </Link>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 md:gap-20">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className={`group flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center cursor-pointer bg-white p-6 md:p-8 rounded-2xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] transition-all`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5 aspect-[16/10] rounded-xl border-2 border-[#1A1A1A] bg-gray-200 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={index < 1}
                />
                <div className={`absolute top-6 ${project.reverse ? 'right-6' : 'left-6'} px-4 py-2 bg-[#1A1A1A] text-white rounded-full text-xs font-bold uppercase tracking-wider`}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/5 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-[#FF3366]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold leading-tight group-hover:text-[#FF3366] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {project.title}
                </h3>
                <p className="text-lg text-[#1A1A1A] font-medium leading-relaxed">
                  {project.description}
                </p>
                <div className={`inline-flex items-center px-4 py-2 ${project.statsColor} rounded-lg font-bold text-sm w-max mt-2`}>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {project.stats}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
