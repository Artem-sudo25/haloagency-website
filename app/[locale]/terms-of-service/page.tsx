import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { legalEntity } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.termsOfService" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/terms-of-service",
    locale,
  });
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isCzech = locale === "cs";
  const registrationNote = isCzech
    ? "Zapsáno v živnostenském rejstříku (OSVČ)."
    : legalEntity.registrationNote;
  const copy = isCzech
    ? {
        backHome: "Zpět na hlavní stránku",
        badge: "Právní informace",
        title: "Obchodní podmínky",
        effectiveDate: "Datum účinnosti: 23. ledna 2026",
        generalTitle: "1. Obecná ustanovení",
        generalIntro:
          "Tyto obchodní podmínky upravují poskytování služeb marketingové agentury HaloAgency.cz.",
        providerLabel: "Údaje o poskytovateli služeb",
        nameLabel: "Název",
        addressLabel: "Sídlo",
        generalBody:
          "Používáním našeho webu nebo objednáním našich služeb souhlasíte s těmito podmínkami. Vztahy mezi stranami se řídí právním řádem České republiky, zejména občanským zákoníkem č. 89/2012 Sb.",
        servicesTitle: "2. Popis služeb",
        servicesBody:
          "Agentura poskytuje služby v oblasti digitálního marketingu, zejména správu výkonnostní a placené reklamy (Google Ads, Meta Ads), tvorbu webů, nastavení webové analytiky a automatizaci procesů. Konkrétní rozsah služeb je vždy uveden v individuální nabídce nebo smlouvě.",
        obligationsTitle: "3. Povinnosti klienta",
        obligationsList: [
          "Klient je povinen včas dodat všechny potřebné informace, přístupy a materiály pro realizaci prací.",
          "Klient potvrzuje, že má všechna potřebná práva k dodaným materiálům, například obrázkům nebo textům, a že neporušují práva třetích stran.",
          "Klient odpovídá za včasnou úhradu reklamních rozpočtů přímo reklamním platformám, například Google nebo Meta.",
        ],
        paymentTitle: "4. Platba za služby",
        paymentBody:
          "Cena služeb je uvedena v nabídce nebo na faktuře. Pokud není dohodnuto jinak, služby se hradí formou 100% zálohy nebo podle etap uvedených ve smlouvě. Všechny ceny jsou uvedeny bez DPH, pokud je DPH relevantní.",
        liabilityTitle: "5. Omezení odpovědnosti a záruky",
        liabilityIntro:
          "Marketingové služby jsou ze své podstaty závislé na třetích stranách, například na algoritmech reklamních platforem, chování uživatelů, konkurenci nebo změnách legislativy.",
        liabilityList: [
          "Bez záruky konkrétního výsledku: Agentura vyvíjí maximální odborné úsilí, ale negarantuje konkrétní obchodní výsledky, například počet poptávek, prodejů, ROAS nebo zisk. Veškeré odhady jsou orientační.",
          "Blokace účtů: Agentura nenese odpovědnost za zablokování reklamních účtů nebo stránek klienta ze strany třetích platforem, pokud k tomu nedojde přímou vinou nebo hrubou nedbalostí agentury.",
          "Omezení náhrady škody: Odpovědnost agentury za škodu vzniklou v souvislosti s poskytováním služeb je omezena výší odměny skutečně uhrazené klientem za příslušnou část služeb. Agentura neodpovídá za ušlý zisk.",
        ],
        confidentialityTitle: "6. Důvěrnost",
        confidentialityBody:
          "Obě strany se zavazují zachovávat důvěrnost obchodních informací získaných během spolupráce.",
        terminationTitle: "7. Ukončení spolupráce",
        terminationBody:
          "Každá strana může spolupráci ukončit s výpovědní lhůtou 30 dní, pokud není v samostatné smlouvě uvedeno jinak. Služby skutečně poskytnuté do okamžiku ukončení spolupráce podléhají plné úhradě.",
        disputesTitle: "8. Rozhodné právo a řešení sporů",
        disputesBody:
          "Spory se strany nejprve pokusí vyřešit dohodou. Pokud k dohodě nedojde, budou spory řešeny příslušným soudem České republiky podle sídla agentury.",
        contactTitle: "9. Kontaktní údaje",
        contactBodyStart:
          "Ve všech záležitostech týkajících se těchto podmínek nás kontaktujte na adrese ",
        contactBodyEnd: ".",
      }
    : {
        backHome: "На главную",
        badge: "Юридическая информация",
        title: "Условия использования (Terms of Service)",
        effectiveDate: "Дата вступления в силу: 23 января 2026",
        generalTitle: "1. Общие положения",
        generalIntro:
          "Данные Условия использования регулируют предоставление услуг маркетингового агентства HaloAgency.cz.",
        providerLabel: "Сведения о поставщике услуг",
        nameLabel: "Наименование",
        addressLabel: "Юридический адрес",
        generalBody:
          "Используя наш сайт или заказывая наши услуги, вы соглашаетесь с настоящими Условиями. Взаимоотношения сторон регулируются законодательством Чешской Республики, в частности Гражданским кодексом № 89/2012 Sb.",
        servicesTitle: "2. Описание услуг",
        servicesBody:
          "Агентство предоставляет услуги в области цифрового маркетинга, включая настройку контекстной и таргетированной рекламы (Google Ads, Meta Ads), веб-разработку, настройку веб-аналитики и автоматизацию бизнес-процессов. Конкретный объем услуг определяется в индивидуальном предложении или договоре.",
        obligationsTitle: "3. Обязательства Клиента",
        obligationsList: [
          "Клиент обязуется своевременно предоставлять всю необходимую информацию, доступы и материалы для выполнения работ.",
          "Клиент гарантирует, что владеет всеми необходимыми правами на предоставленные материалы, например изображения и тексты, и что они не нарушают права третьих лиц.",
          "Клиент несет ответственность за своевременную оплату рекламных бюджетов непосредственно рекламным платформам, например Google или Meta.",
        ],
        paymentTitle: "4. Оплата услуг",
        paymentBody:
          "Стоимость услуг указывается в коммерческом предложении или счете-фактуре. Если не оговорено иное, услуги оплачиваются на основе 100% предоплаты или согласно этапам, указанным в договоре. Все цены указаны без учета НДС, если НДС применим.",
        liabilityTitle: "5. Ограничение ответственности и гарантии",
        liabilityIntro:
          "Маркетинговые услуги по своей природе зависят от третьих сторон, например алгоритмов рекламных платформ, поведения пользователей, конкурентов и изменений в законодательстве.",
        liabilityList: [
          "Отсутствие гарантии результата: Агентство прикладывает все профессиональные усилия, но не гарантирует получение конкретных коммерческих показателей, например количества продаж, лидов, ROAS или прибыли. Все прогнозы являются ориентировочными.",
          "Блокировки аккаунтов: Агентство не несет ответственности за блокировку рекламных аккаунтов или страниц Клиента со стороны третьих платформ, если это произошло не по прямой вине или грубой неосторожности Агентства.",
          "Ограничение убытков: Ответственность Агентства за ущерб, возникший в связи с предоставлением услуг, ограничивается суммой вознаграждения, фактически выплаченного Клиентом за соответствующий этап услуг. Агентство не несет ответственности за упущенную выгоду.",
        ],
        confidentialityTitle: "6. Конфиденциальность",
        confidentialityBody:
          "Обе стороны обязуются сохранять конфиденциальность коммерческой информации, полученной в ходе сотрудничества.",
        terminationTitle: "7. Расторжение сотрудничества",
        terminationBody:
          "Любая из сторон может прекратить сотрудничество, уведомив другую сторону за 30 дней, если иное не указано в отдельном договоре. Фактически оказанные на момент расторжения услуги подлежат полной оплате.",
        disputesTitle: "8. Применимое право и разрешение споров",
        disputesBody:
          "Все споры стороны сначала пытаются решить путем переговоров. Если договориться не удается, споры подлежат рассмотрению в компетентном суде Чешской Республики по месту нахождения Агентства.",
        contactTitle: "9. Контактная информация",
        contactBodyStart:
          "По всем вопросам, касающимся данных Условий, пожалуйста, обращайтесь по адресу ",
        contactBodyEnd: ".",
      };
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-24 pb-20 px-4">
      {/* Dot grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1A1A1A] font-bold hover:text-[#FF3366] mb-8 transition-colors underline decoration-2 underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" />
          {copy.backHome}
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
          <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
            {copy.badge}
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {copy.title}
        </h1>

        <div className="prose prose-lg max-w-none text-[#1A1A1A]/80 font-medium bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A]">
          <p className="text-sm text-[#1A1A1A]/40 mb-8">{copy.effectiveDate}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.generalTitle}
          </h2>
          <p>{copy.generalIntro}</p>
          <p>
            <strong>{copy.providerLabel}:</strong>
            <br />
            {copy.nameLabel}: <strong>{legalEntity.businessName}</strong>
            <br />
            IČO: <strong>{legalEntity.ico}</strong>
            <br />
            {copy.addressLabel}: <strong>{legalEntity.address}</strong>
            <br />
            {registrationNote}
          </p>
          <p>{copy.generalBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.servicesTitle}
          </h2>
          <p>{copy.servicesBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.obligationsTitle}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {copy.obligationsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.paymentTitle}
          </h2>
          <p>{copy.paymentBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.liabilityTitle}
          </h2>
          <p>{copy.liabilityIntro}</p>
          <ul className="list-disc pl-6 space-y-2">
            {copy.liabilityList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.confidentialityTitle}
          </h2>
          <p>{copy.confidentialityBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.terminationTitle}
          </h2>
          <p>{copy.terminationBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.disputesTitle}
          </h2>
          <p>{copy.disputesBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.contactTitle}
          </h2>
          <p>
            {copy.contactBodyStart}
            <a href={`mailto:${legalEntity.email}`} className="text-[#FF3366]">
              {legalEntity.email}
            </a>
            {copy.contactBodyEnd}
          </p>
        </div>
      </div>
    </main>
  );
}
