import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const signatureFont = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  display: "swap",
});

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/about" },
];

const operatingPrinciples = [
  "Сначала разбираемся, как бизнес зарабатывает и где теряются заявки. Потом предлагаем формат работ.",
  "Если проблема не в сайте, говорим об этом прямо и не продаём лишнюю разработку.",
  "Вы общаетесь с одним человеком, но за проектом стоит профильная команда, а не набор случайных подрядчиков.",
  "Каждое решение привязано к заявкам, продажам и нормальной аналитике, а не к визуалу ради визуала.",
];

const clientTestimonials = [
  {
    quote:
      "Заказал аудит контекстной рекламы. Выяснилось, что кампании велись пассивно и почти не тестировались. После внедрения рекомендаций расходы на рекламу снизились, а окупаемость выросла более чем в 2 раза.",
    author: "Алексей Р.",
    details: "Интернет-магазин, Прага",
    focus: "Google Ads и аудит",
    initial: "АР",
    accentClass: "bg-[#FF3366]",
  },
  {
    quote:
      "Раньше все клиенты писали нам в Instagram и постоянно спрашивали цены. На переписку уходило много времени. После запуска сайта стало проще показать услуги и сделать удобную форму записи. Теперь реклама ведёт на сайт, а заявки приходят напрямую.",
    author: "Анна В.",
    details: "Салон красоты, Прага",
    focus: "Сайт под запись и рекламу",
    initial: "А",
    accentClass: "bg-[#FFD166]",
  },
  {
    quote:
      "Думали, что проблема в рекламе, но аудит показал, что не продаёт сам веб-сайт: предложение было неясным, а форма заявки спрятана. После изменения структуры страницы и усиления призыва к действию количество заявок заметно выросло.",
    author: "Роман Г.",
    details: "Прачечная, Прага",
    focus: "Структура сайта и конверсия",
    initial: "РГ",
    accentClass: "bg-[#06D6A0]",
  },
  {
    quote:
      "Давно планировали заказать сайт, но всё никак не доходили руки. Поэтому очень понравился такой подход, где нам сначала показали демо. Мы посмотрели, обсудили правки и решили делать полноценный сайт. В итоге получилось даже лучше, чем ожидали.",
    author: "Катерина М.",
    details: "Кафе, Прага",
    focus: "Демо и запуск сайта",
    initial: "К",
    accentClass: "bg-[#3B82F6]",
  },
];

const teamCards = [
  {
    title: "Кто отвечает за проект",
    text: "Артём ведёт коммуникацию, принимает ключевые решения и держит в фокусе коммерческий результат.",
  },
  {
    title: "Кто делает работу",
    text: "Под задачу подключаются дизайн, разработка, реклама и аналитика. Каждый отвечает за свою часть, без размытой ответственности.",
  },
  {
    title: "Как мы стартуем",
    text: "Сначала смотрим на текущую ситуацию: сайт, рекламу, данные, обработку заявок. Потом предлагаем понятный первый шаг.",
  },
  {
    title: "Что получает клиент",
    text: "Один контакт, ясный план работы и систему, в которой сайт, реклама и аналитика не спорят друг с другом.",
  },
];

const decisionPoints = [
  {
    title: "Когда нужен новый сайт",
    text: "Если текущая структура мешает рекламе, не объясняет оффер и не доводит человека до заявки.",
  },
  {
    title: "Когда сайт не главная проблема",
    text: "Если спрос уже есть, но теряются лиды, не настроены события или хромает обработка обращений.",
  },
  {
    title: "Когда лучше начинать с короткого разбора",
    text: "Если пока неясно, что именно тормозит рост, и нужен спокойный диагноз перед запуском работ.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "О HaloAgency | Кто ведёт проект и как мы работаем",
  description:
    "Как HaloAgency связывает сайт, рекламу, аналитику и автоматизацию в одну рабочую систему для заявок и продаж.",
  path: "/about",
  openGraphTitle: "О HaloAgency",
  openGraphDescription:
    "Сайт, реклама, аналитика и автоматизация как одна система, а не набор отдельных услуг.",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: "О HaloAgency",
            description:
              "Как HaloAgency связывает сайт, рекламу, аналитику и автоматизацию в одну рабочую систему для заявок и продаж.",
            path: "/about",
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

        <div className="relative z-10">
          <section className="px-6 py-12 md:py-24">
            <div className="mx-auto max-w-[1200px]">
              <Breadcrumbs items={breadcrumbItems} />

              <div className="grid grid-cols-1 gap-8 rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:grid-cols-[320px_minmax(0,1fr)] md:gap-10 md:p-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:p-12">
                <div className="w-full max-w-[260px] justify-self-center sm:max-w-[300px] md:max-w-none md:justify-self-start">
                  <div className="relative aspect-[3/4] rounded-3xl border-2 border-[#1A1A1A] bg-[#FFD166] p-4 shadow-[6px_6px_0px_0px_#1A1A1A]">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#1A1A1A]">
                      <Image
                        src="/halo-foundr.jpg"
                        alt="Артём Крицкий — основатель HaloAgency"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 360px"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                    Как мы смотрим на маркетинг
                  </div>

                  <h1
                    className="max-w-[820px] text-4xl font-extrabold leading-[1.1] text-[#1A1A1A] sm:text-5xl md:text-6xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Маркетинг как система,
                    <br />а не набор услуг
                  </h1>

                  <div className="max-w-[820px] space-y-4 text-base font-medium leading-relaxed text-[#1A1A1A]/75 md:text-lg">
                    <p>
                      Я прошёл весь путь онлайн-маркетинга на практике: от
                      создания сайтов и запуска рекламы до аналитики и
                      автоматизации. Работая с сервисными бизнесами и
                      интернет-магазинами, хорошо понимаю реальные задачи и
                      ограничения малого и среднего бизнеса.
                    </p>
                    <p>
                      В основе моего подхода — выстраивать единую систему, где
                      сайт, реклама и внутренние процессы связаны между собой и
                      не требуют постоянного ручного управления.
                    </p>
                    <p>
                      Сегодня я использую AI и автоматизацию не ради моды, а как
                      рабочую основу: для аналитики, оптимизации рекламы и
                      решений на основе данных.
                    </p>
                  </div>

                  <div className="pt-2">
                    <div
                      className={`${signatureFont.className} inline-block rotate-[-4deg] text-4xl leading-none text-[#1A1A1A] md:text-5xl`}
                    >
                      Артём К.
                    </div>
                    <div className="mt-1 ml-1 h-0.5 w-24 rotate-[-3deg] rounded-full bg-[#FF3366]/70" />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      data-cta-track="true"
                      data-cta-name="Обсудить задачу"
                      data-cta-location="about_hero"
                      data-cta-category="primary"
                      className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    >
                      Обсудить задачу
                    </Link>
                    <Link
                      href="/case-studies"
                      data-cta-track="true"
                      data-cta-name="Посмотреть кейсы"
                      data-cta-location="about_hero"
                      data-cta-category="secondary"
                      className="text-sm font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
                    >
                      Посмотреть кейсы →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 pb-12 md:pb-20">
            <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2 xl:grid-cols-4">
              {teamCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                    {card.title}
                  </div>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#1A1A1A]/75">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  Как мы смотрим на задачу
                </div>
                <h2
                  className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Мы не продаём сайт или рекламу вслепую
                </h2>
              </div>

              <ul className="space-y-4">
                {operatingPrinciples.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 rounded-3xl border-2 border-[#1A1A1A] bg-white px-6 py-5 shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FF3366]" />
                    <span className="text-sm font-bold leading-relaxed text-[#1A1A1A]/80 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-8">
                <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  Как понимаем, с чего начинать
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {decisionPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <h3
                      className="text-2xl font-extrabold text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {point.title}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-[#1A1A1A]/75">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[1200px]">
              <div className="max-w-[760px]">
                <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  Что говорят клиенты
                </div>
                <h2
                  className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Отзывы после запуска сайта, рекламы и первых правок
                </h2>
                <p className="mt-4 max-w-[640px] text-base font-medium leading-relaxed text-[#1A1A1A]/70 md:text-lg">
                  Сюда приходят с разными задачами: кому-то нужен сайт, кому-то
                  реклама, кому-то сначала разбор. Но ценят обычно одно и то же:
                  ясность, нормальную коммуникацию и решения, которые реально
                  влияют на заявки.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {clientTestimonials.map((testimonial) => (
                  <article
                    key={`${testimonial.author}-${testimonial.focus}`}
                    className="flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F7] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/75">
                        {testimonial.focus}
                      </div>
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border-2 border-[#1A1A1A] text-sm font-extrabold text-white shadow-[4px_4px_0px_0px_#1A1A1A] ${testimonial.accentClass}`}
                      >
                        {testimonial.initial}
                      </div>
                    </div>

                    <p className="mt-5 flex-grow text-base font-bold leading-relaxed text-[#1A1A1A]/80">
                      &laquo;{testimonial.quote}&raquo;
                    </p>

                    <div className="mt-6 border-t-2 border-dashed border-[#1A1A1A]/15 pt-4">
                      <div className="text-base font-extrabold text-[#1A1A1A]">
                        {testimonial.author}
                      </div>
                      <div className="mt-1 text-sm font-medium text-[#1A1A1A]/60">
                        {testimonial.details}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[960px] rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-6 py-10 text-white shadow-[8px_8px_0px_0px_#FF3366] md:px-10 md:py-12">
              <h2
                className="text-3xl font-extrabold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Если нужен не хаос из подрядчиков, а понятная рабочая система
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/75 md:text-lg">
                Пришлите вводные по задаче. Посмотрим, что у вас уже работает,
                что мешает росту и какой следующий шаг будет самым разумным.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name="Обсудить задачу"
                  data-cta-location="about_final_cta"
                  data-cta-category="primary"
                  className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#FFFFFF]"
                >
                  Обсудить задачу
                </Link>
                <Link
                  href="/growth-plan"
                  data-cta-track="true"
                  data-cta-name="Сначала нужен короткий разбор"
                  data-cta-location="about_final_cta"
                  data-cta-category="secondary"
                  className="text-sm font-bold text-white transition-colors hover:text-[#FFD166]"
                >
                  Сначала нужен короткий разбор →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
