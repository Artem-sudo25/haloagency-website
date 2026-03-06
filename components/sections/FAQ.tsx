"use client";

import { Minus, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items?: FAQItem[];
  title?: ReactNode;
  eyebrow?: string;
  footer?: ReactNode;
};

const defaultFaqs = [
  {
    question: "Вы больше про сайты, рекламу или автоматизацию?",
    answer:
      "Мы работаем с системой целиком. В зависимости от задачи фокус может быть на сайте, рекламе или процессах, но всё выстраивается как единое решение, а не отдельные разрозненные действия.",
  },
  {
    question: "Можно ли начать с одного направления и расширяться позже?",
    answer:
      "Да. Многие клиенты начинают с базового решения и переходят к более комплексному формату по мере роста бизнеса и задач.",
  },
  {
    question: "Подойдёт ли ваш подход малому бизнесу?",
    answer:
      "Да. Мы работаем с малым и средним бизнесом и выстраиваем решения, которые масштабируются — от простого старта до систем с автоматизацией и AI.",
  },
  {
    question: "Сколько участия требуется от меня как от владельца бизнеса?",
    answer:
      "Минимум. Мы берём на себя координацию и операционную часть, чтобы вы могли сосредоточиться на развитии бизнеса, а не на управлении подрядчиками.",
  },
  {
    question: "Как вы принимаете решения и понимаете, что делать дальше?",
    answer:
      "Решения принимаются на основе данных, текущих целей бизнеса и результатов предыдущих шагов. Мы регулярно анализируем ситуацию и предлагаем следующий логичный шаг.",
  },
  {
    question: "Можно ли работать с вами, если у меня уже есть сайт или реклама?",
    answer:
      "Да. Мы часто подключаемся к существующим проектам, улучшаем текущие решения и выстраиваем систему вокруг того, что уже работает.",
  },
  {
    question: "Работаете ли вы с бизнесом в Чехии и ориентируетесь на местный рынок?",
    answer:
      "Да. Мы работаем с бизнесом в Чехии и учитываем особенности локального рынка, конкуренции и поведения клиентов.",
  },
  {
    question: "Как понять, какой пакет мне подойдёт?",
    answer:
      "На старте мы смотрим на цели бизнеса, текущую ситуацию и ресурсы, после чего рекомендуем оптимальный формат работы без переплаты за лишнее.",
  },
  {
    question: "Что если результат не оправдает ожиданий?",
    answer:
      "Мы работаем прозрачно: все данные, аккаунты и доступы остаются у вас. Вы видите, что делается и какие результаты это даёт. Если по ходу работы становится понятно, что формат не подходит, вы не остаетесь «привязаны» к агентству и сохраняете всю историю и настройки.",
  },
  {
    question: "Как начать работу и как с вами связаться?",
    answer:
      "Оставьте заявку через форму на сайте или напишите нам в Telegram или WhatsApp. Мы свяжемся с вами в течение 2 часов в рабочее время и подскажем следующий шаг.",
  },
];

const defaultTitle = <>Частые вопросы</>;

export default function FAQ({
  items = defaultFaqs,
  title = defaultTitle,
  eyebrow = "FAQ",
  footer,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <CSSStagger className="w-full max-w-3xl mx-auto flex flex-col gap-4">
          {items.map((faq, index) => (
            <CSSStaggerItem key={index} index={index}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white p-6 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center transition-all duration-300 mt-0.5 ${openIndex === index
                    ? "bg-[#FFD166] text-[#1A1A1A] rotate-180 shadow-[2px_2px_0px_0px_#1A1A1A]"
                    : "bg-[#F5F5F7] text-[#1A1A1A]"
                    }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 text-[#1A1A1A] font-medium leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </button>
            </CSSStaggerItem>
          ))}
        </CSSStagger>

        {footer ? <div className="mt-6 text-center">{footer}</div> : null}
      </div>
    </section>
  );
}
