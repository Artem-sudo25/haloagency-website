import { BarChart3, LineChart, Rocket, Search, Settings } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Коротко понимаем задачу",
    timeline: "Шаг 1",
    icon: Search,
    description:
      "Нам достаточно ссылки на текущий сайт, рекламу или короткого описания ситуации, чтобы понять, что сейчас мешает росту.",
  },
  {
    number: "2",
    title: "Смотрим, что уже есть",
    timeline: "Шаг 2",
    icon: Settings,
    description:
      "Проверяем страницу, рекламу, аналитику и обработку заявок. Часто проблема не там, где её ищут вначале.",
  },
  {
    number: "3",
    title: "Предлагаем понятный формат работы",
    timeline: "Шаг 3",
    icon: BarChart3,
    description:
      "Говорим, что лучше делать первым: новый сайт, рекламный запуск, настройку аналитики, автоматизацию или точечный фикс.",
  },
  {
    number: "4",
    title: "Делаем и измеряем",
    timeline: "Шаг 4",
    icon: Rocket,
    description:
      "Запускаем работу, подключаем данные и смотрим на заявки, звонки, продажи и качество потока, а не на абстрактные ощущения.",
  },
  {
    number: "5",
    title: "Дальше усиливаем то, что работает",
    timeline: "Дальше",
    icon: LineChart,
    description:
      "Когда база собрана правильно, можно спокойно усиливать рекламу, добавлять новые страницы и автоматизировать процессы без лишнего хаоса.",
    isFinal: true,
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:gap-12">
        <div className="mb-4 flex flex-col items-center gap-3 text-center md:mb-8 md:gap-4">
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Как выглядит следующий шаг
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[#1A1A1A]/70 md:mt-4 md:text-lg">
            Без длинной бюрократии. Важно быстро понять задачу и предложить
            первый разумный шаг, который реально поможет бизнесу.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {steps.slice(0, 4).map((step, index) => (
            <div
              key={step.number}
              className={`relative overflow-hidden rounded-xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] md:p-6 ${index === 3 ? "hidden md:block" : ""}`}
            >
              <div
                className="pointer-events-none absolute -right-4 -top-8 z-0 text-8xl font-extrabold text-[#1A1A1A]/5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-white text-[#FF3366]">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF3366]">
                  {step.timeline}
                </span>
                <h3
                  className="mb-2 mt-2 text-lg font-bold md:mb-3 md:text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#1A1A1A]/70 md:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {steps[4] && (
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] p-6 text-white shadow-[6px_6px_0px_0px_#1A1A1A] md:flex-row md:items-center md:gap-8 md:p-10">
            <div
              className="pointer-events-none absolute -right-6 -top-10 z-0 text-[10rem] font-extrabold leading-none text-[#1A1A1A]/20"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {steps[4].number}
            </div>
            <div className="relative z-10 flex max-w-2xl flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                {steps[4].timeline}
              </span>
              <h3
                className="text-xl font-bold md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {steps[4].title}
              </h3>
              <p className="text-[13px] leading-relaxed text-white/80 md:text-base">
                {steps[4].description}
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 flex-shrink-0 whitespace-nowrap rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-3 text-sm font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-x-1 active:translate-y-1 active:shadow-none md:px-8 md:text-base"
            >
              Отправить вводные
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
