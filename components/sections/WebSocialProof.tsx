"use client";

import { MessageSquare, Star } from "lucide-react";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const testimonials = [
  {
    id: 1,
    name: "Мартин К.",
    company: "ProPradlo",
    message: "Сайт работает быстрее конкурентов. Заявки выросли на 40%.",
    rating: 5,
    avatar: "MK",
    color: "bg-[#FF3366]",
  },
  {
    id: 2,
    name: "Анна С.",
    company: "Beauty Studio",
    message: "Наконец-то сайт, который не стыдно показать клиентам. Отличная работа!",
    rating: 5,
    avatar: "АС",
    color: "bg-[#06D6A0]",
  },
  {
    id: 3,
    name: "Петр Н.",
    company: "LogiTrans",
    message: "Сделали за 10 дней то, что другие обещали за 2 месяца.",
    rating: 5,
    avatar: "ПН",
    color: "bg-[#FFD166]",
  },
];

export default function WebSocialProof() {
  return (
    <section className="py-16 md:py-24 bg-white relative border-y-2 border-[#1A1A1A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#FF3366]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#06D6A0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-6">
            <MessageSquare className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A]">Отзывы клиентов</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Что говорят клиенты
          </h2>
          <p className="text-[#1A1A1A]/70 font-medium text-lg md:text-xl max-w-2xl mx-auto">
            Реальные отзывы от компаний, с которыми мы работали
          </p>
        </CSSScrollAnimation>

        {/* Testimonials Grid */}
        <CSSStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <CSSStaggerItem key={testimonial.id} index={index}>
              <div className="h-full bg-[#F5F5F7] p-8 rounded-3xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-xl border-2 border-[#1A1A1A] ${testimonial.color} shadow-[4px_4px_0px_0px_#1A1A1A] flex items-center justify-center flex-shrink-0`}>
                    <span className="text-lg font-extrabold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-xl text-[#1A1A1A]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#1A1A1A]/60 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FF3366] fill-[#FF3366]"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-[#1A1A1A] font-bold text-lg leading-relaxed flex-grow">
                  &ldquo;{testimonial.message}&rdquo;
                </p>
              </div>
            </CSSStaggerItem>
          ))}
        </CSSStagger>
      </div>
    </section>
  );
}
