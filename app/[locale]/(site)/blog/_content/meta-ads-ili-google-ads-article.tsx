import {
  BulletList,
  NoteCard,
  SectionHeading,
  SubHeading,
} from "@/app/[locale]/(site)/blog/_components/article-primitives";
import { Link } from "@/i18n/routing";

type ArticleLocale = "ru" | "cs";

export function MetaAdsVsGoogleAdsArticle({
  locale = "ru",
}: {
  locale?: ArticleLocale;
}) {
  if (locale === "cs") {
    return (
      <>
        <p>
          Otázka „co je lepší: Google Ads nebo Meta Ads?“ zní jednoduše, ale ve
          skutečnosti bývá položená trochu špatně. Problém obvykle není v tom,
          že jedna platforma je silná a druhá slabá. Problém je, že firma často
          vybírá kanál dřív, než pochopí, jak u ní vzniká poptávka a kam má
          návštěvnost po kliku vůbec přivést.
        </p>

        <SectionHeading>Krátká odpověď</SectionHeading>
        <BulletList
          items={[
            "Pokud člověk už aktivně hledá řešení, bývá lepší začít s Google Ads.",
            "Pokud je potřeba nabídku nejdřív ukázat, zahřát poptávku a člověka vracet, bývá silnější Meta Ads.",
            "U lokálních a servisních firem v Česku přivádí Google Ads častěji teplejší návštěvnost. Meta Ads je silná u vizuálních kategorií, retargetingu a delšího rozhodování.",
            "Volba kanálu dává smysl až společně s výběrem stránky, nabídky a trackingu.",
          ]}
        />

        <SectionHeading>
          Google Ads vs Meta Ads podle typu poptávky
        </SectionHeading>
        <div className="overflow-x-auto rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] shadow-[5px_5px_0px_0px_#1A1A1A]">
          <table className="min-w-full text-left text-sm font-medium text-[#1A1A1A]">
            <thead className="border-b-2 border-[#1A1A1A] bg-white">
              <tr>
                <th className="px-5 py-4 font-extrabold">Kritérium</th>
                <th className="px-5 py-4 font-extrabold">Google Ads</th>
                <th className="px-5 py-4 font-extrabold">Meta Ads</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Typ poptávky",
                  "už existuje a člověk ji sám hledá",
                  "je potřeba ji ukázat, rozproudit a vracet se k ní",
                ],
                [
                  "Rychlost rozhodnutí",
                  "často kratší",
                  "často delší nebo více kroků",
                ],
                [
                  "Co funguje na startu",
                  "přímá nabídka a jasná stránka",
                  "silná kreativa, úhel sdělení a retargeting",
                ],
                [
                  "Role webu",
                  "musí rychle odpovědět na konkrétní dotaz",
                  "musí udržet pozornost a vysvětlit nabídku",
                ],
                [
                  "Typická chyba",
                  "vést placený search na obecnou stránku firmy",
                  "spustit kampaně bez silné nabídky a bez dalšího kontaktu",
                ],
              ].map(([label, google, meta]) => (
                <tr
                  key={label}
                  className="border-b border-[#1A1A1A]/10 last:border-b-0"
                >
                  <td className="px-5 py-4 font-bold">{label}</td>
                  <td className="px-5 py-4">{google}</td>
                  <td className="px-5 py-4">{meta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Samotná platforma nic nezachrání. Jen pracuje s jiným momentem
          poptávky.
        </p>

        <SectionHeading>Proč firmy tenhle výběr dělají špatně</SectionHeading>
        <p>Správná otázka většinou nezní „kam nalijeme rozpočet“, ale:</p>
        <BulletList
          items={[
            "lidé už tu službu hledají, nebo je teprve musíme zahřát",
            "rozhodují se rychle, nebo se vrací opakovaně",
            "máme stránku, která je schopná návštěvnost převést",
            "umíme poznat, co se po kliku skutečně stalo",
          ]}
        />
        <p>
          Pokud na tohle odpověď nemáte, kanál se vybírá podle dojmu, doporučení
          kamaráda nebo toho, co právě běží konkurenci. To je nejrychlejší cesta
          k prvnímu zbytečnému rozpočtu.
        </p>

        <SectionHeading>Kdy je lepší začít s Google Ads</SectionHeading>

        <SubHeading>1. Po službě už existuje přímá poptávka</SubHeading>
        <p>Typicky jde o dotazy jako:</p>
        <BulletList
          items={[
            "oprava nebo servis",
            "úklid a lokální služby",
            "právní a zdravotní služby",
            "B2B služby s jasně pojmenovanou potřebou",
          ]}
        />
        <p>
          Tady{" "}
          <Link
            href="/ads/google-ads"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Google Ads
          </Link>{" "}
          nechytá jen zájem o téma, ale reálný úmysl někomu napsat.
        </p>

        <SubHeading>2. Rozhodnutí je potřeba udělat rychle</SubHeading>
        <p>
          Když člověk potřebuje něco vyřešit teď, nejde nejdřív do feedu. Jde do
          vyhledávání. Proto bývá Google Ads u mnoha lokálních a servisních
          firem nejsnazší první test poptávky.
        </p>

        <SubHeading>3. Máte jednu jasnou nabídku a silnou stránku</SubHeading>
        <p>
          Search funguje nejlépe tam, kde reklama slíbí jednu věc a stránka ji
          okamžitě rozvede. Právě proto pod placenou poptávku často funguje
          samostatná{" "}
          <Link
            href="/web/landing-pages"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            landing page
          </Link>
          , ne obecný web.
        </p>

        <SectionHeading>Kdy je silnější Meta Ads</SectionHeading>

        <SubHeading>1. Nabídku je potřeba spíš ukázat než hledat</SubHeading>
        <p>
          Jsou obory, kde člověk nepíše přesný dotaz do Googlu, ale dobře
          reaguje na správnou podanou nabídku. Často jde o vizuálnější
          kategorie, lifestyle segmenty nebo služby, kde rozhoduje dojem a
          kontext.
        </p>

        <SubHeading>2. Rozhodování trvá déle</SubHeading>
        <p>
          Když člověk nenechává poptávku při prvním kontaktu,{" "}
          <Link
            href="/ads/meta-ads"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Meta Ads
          </Link>{" "}
          dává smysl jako systém opakovaných doteků: ukázat nabídku, vrátit se
          retargetingem a být vidět i při dalším zvažování.
        </p>

        <SubHeading>3. Už máte návštěvnost, kterou chcete dohřát</SubHeading>
        <p>Meta bývá velmi silná jako druhý kanál:</p>
        <BulletList
          items={[
            "vracet návštěvníky webu",
            "připomínat nabídku lidem, kteří už ji viděli",
            "doplňovat Google Ads tam, kde nestačí jen první klik",
          ]}
        />

        <SectionHeading>
          Co dělat, když je rozpočet omezený a musíte vybrat jeden start
        </SectionHeading>
        <NoteCard label="Startovací scénář">
          <p>
            Pokud má malá servisní firma v Česku jeden jasný typ poptávky, malý
            rozpočet a potřebuje rychle zjistit, jestli bude chodit kontakt,
            bývá bezpečnější první krok Google Ads na jednu přesnou stránku.
          </p>
          <p>
            Meta Ads má v takové chvíli větší smysl až jako doplněk:
            retargeting, připomínání nabídky a další kontakt poté, co už na web
            někdo přišel.
          </p>
        </NoteCard>

        <SectionHeading>Proč platforma sama o sobě nic nevyřeší</SectionHeading>

        <SubHeading>Slabý web pokazí oba kanály</SubHeading>
        <p>
          Pokud člověk po kliku nepochopí nabídku, nevidí důvěru a nenajde jasný
          další krok, může selhat jak search, tak feed.
        </p>

        <SubHeading>Bez trackingu se rozhodujete podle dojmu</SubHeading>
        <p>
          Když nevidíte reálné leady, kvalitu poptávek a zdroj výsledku, mění se
          volba kanálu ve spor o pocitech. Proto je{" "}
          <Link
            href="/tracking"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            tracking
          </Link>{" "}
          součást reklamní logiky, ne bonus navíc.
        </p>

        <SubHeading>
          Slabé zpracování leadů znehodnotí i dobrou reklamu
        </SubHeading>
        <p>
          Pozdní odpověď, ztracená poptávka nebo chaotická práce s kontakty
          udělají z funkční kampaně zdánlivě špatný kanál.
        </p>

        <SectionHeading>Kde firmy nejčastěji pálí peníze</SectionHeading>
        <BulletList
          items={[
            "spustí Meta Ads bez silné nabídky a bez dalšího kontaktu",
            "vedou Google Ads na obecnou stránku místo na přesný vstup",
            "posuzují výsledek jen podle ceny za lead",
            "řeší platformu dřív než připravenost stránky a analytiky",
          ]}
        />

        <SectionHeading>Reálná logika: kanály se často doplňují</SectionHeading>
        <NoteCard label="Příklad">
          <p>
            Na projektu{" "}
            <Link
              href="/case-studies/nejablonky"
              className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
            >
              Nejbalonky.cz
            </Link>{" "}
            je dobře vidět, že růst obvykle nevzniká z jedné „vítězné
            platformy“. Funguje kombinace nabídky, webu, trackingu a reklamních
            kanálů, které dělají rozdílnou práci v rozdílné fázi poptávky.
          </p>
          <p>
            Proto je praktičtější řešit pořadí a roli kanálů než se snažit
            vybrat jedno „nejlepší řešení navždy“.
          </p>
        </NoteCard>

        <SectionHeading>Krátký checklist před výběrem kanálu</SectionHeading>
        <BulletList
          items={[
            "Je služba něco, co člověk už aktivně hledá?",
            "Máte jednu jasnou stránku pod danou nabídku?",
            "Potřebujete rychlou poptávku, nebo sérii doteků?",
            "Vidíte v analytice, co se po kliku stalo?",
            "Jste schopní lead rychle zpracovat?",
          ]}
        />

        <SectionHeading>Časté otázky</SectionHeading>
        <div className="space-y-5">
          {[
            {
              q: "Má smysl spouštět oba kanály zároveň?",
              a: "Ano, pokud na to máte rozpočet, stránku a tracking. U menší firmy ale často dává větší smysl nejdřív postavit jednu fungující vazbu a teprve pak přidávat druhý kanál.",
            },
            {
              q: "Je Meta Ads jen pro e-shopy?",
              a: "Ne. Jen u servisních firem častěji funguje jako zahřívání poptávky, retargeting nebo doplněk, ne vždy jako první zdroj okamžitého leadu.",
            },
            {
              q: "Když Google Ads nefunguje, mám se hned přesunout na Meta?",
              a: "Ne automaticky. Nejdřív je potřeba zjistit, jestli problém není ve stránce, nabídce, trackingu nebo zpracování poptávek.",
            },
            {
              q: "Co když si pořád nejsem jistý, kde začít?",
              a: "Pak je lepší nerozhodovat to abstraktně podle platformy, ale podle konkrétní nabídky, typu poptávky a stránky, na kterou má návštěvnost přijít.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]"
            >
              <div className="text-xl font-extrabold leading-tight text-[#1A1A1A]">
                {item.q}
              </div>
              <p className="mt-3">{item.a}</p>
            </div>
          ))}
        </div>

        <SectionHeading>Závěr</SectionHeading>
        <p>
          Otázka nestojí tak, která platforma je „lepší obecně“. Správná otázka
          je, jak u vás vzniká poptávka a jestli je byznys připravený přeměnit
          návštěvnost v reálnou poptávku.
        </p>
        <p>
          Pokud potřebujete rozhodnout, jestli má ve vašem případě větší smysl
          začít s{" "}
          <Link
            href="/ads/google-ads"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Google Ads
          </Link>
          ,{" "}
          <Link
            href="/ads/meta-ads"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Meta Ads
          </Link>{" "}
          nebo nejdřív posílit stránku, je nejrychlejší{" "}
          <Link
            href="/contact"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            probrat zadání
          </Link>
          .
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Вопрос «что лучше: Google Ads или Meta Ads?» звучит просто, но в
        реальности почти всегда задан немного неправильно. Проблема обычно не в
        том, что одна платформа сильная, а другая слабая. Проблема в том, что
        бизнес часто выбирает канал раньше, чем понимает, как у него возникает
        спрос и куда этот трафик потом вообще вести.
      </p>

      <SectionHeading>Короткий ответ</SectionHeading>
      <BulletList
        items={[
          "Если человек уже ищет решение, чаще лучше начинать с Google Ads.",
          "Если спрос нужно сначала показать, прогреть и потом вернуть человека, Meta Ads часто подходит лучше.",
          "Для локального и сервисного бизнеса в Чехии Google Ads обычно даёт более горячий трафик. Meta Ads сильнее для визуальных ниш, ретаргетинга и более длинного цикла решения.",
          "Выбор канала почти всегда нужно делать вместе с выбором страницы, оффера и аналитики.",
        ]}
      />

      <SectionHeading>Google Ads и Meta Ads по типу спроса</SectionHeading>
      <div className="overflow-x-auto rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] shadow-[5px_5px_0px_0px_#1A1A1A]">
        <table className="min-w-full text-left text-sm font-medium text-[#1A1A1A]">
          <thead className="border-b-2 border-[#1A1A1A] bg-white">
            <tr>
              <th className="px-5 py-4 font-extrabold">Критерий</th>
              <th className="px-5 py-4 font-extrabold">Google Ads</th>
              <th className="px-5 py-4 font-extrabold">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Тип спроса",
                "спрос уже есть, и человек сам его формулирует",
                "спрос нужно подсветить, разогреть и вернуть повторным контактом",
              ],
              [
                "Скорость решения",
                "чаще короче",
                "чаще длиннее и с несколькими касаниями",
              ],
              [
                "Что работает на старте",
                "ясный оффер и точная страница",
                "сильный креатив, угол подачи и ретаргетинг",
              ],
              [
                "Роль страницы",
                "быстро ответить на конкретный запрос",
                "удержать внимание и нормально объяснить предложение",
              ],
              [
                "Типичная ошибка",
                "вести search-трафик на общую страницу компании",
                "запускать кампании без сильного оффера и без догрева",
              ],
            ].map(([label, google, meta]) => (
              <tr
                key={label}
                className="border-b border-[#1A1A1A]/10 last:border-b-0"
              >
                <td className="px-5 py-4 font-bold">{label}</td>
                <td className="px-5 py-4">{google}</td>
                <td className="px-5 py-4">{meta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Сама по себе платформа ничего не спасает. Она просто работает с разным
        моментом спроса.
      </p>

      <SectionHeading>
        Почему этот выбор часто делают слишком рано
      </SectionHeading>
      <p>Правильный вопрос обычно звучит не «куда лить бюджет», а так:</p>
      <BulletList
        items={[
          "люди уже ищут эту услугу или их ещё нужно подогреть",
          "решение принимается быстро или в несколько касаний",
          "есть ли у нас страница, которая вообще способна конвертировать трафик",
          "можем ли мы понять, что реально произошло после клика",
        ]}
      />
      <p>
        Если ответов на это нет, канал выбирают по ощущениям, совету знакомого
        или тому, что крутится у конкурентов. Это самый короткий путь к
        ненужному первому бюджету.
      </p>

      <SectionHeading>Когда логично начинать с Google Ads</SectionHeading>

      <SubHeading>1. Услугу уже ищут напрямую</SubHeading>
      <p>Чаще всего это такие сценарии:</p>
      <BulletList
        items={[
          "ремонт и сервис",
          "уборка и локальные услуги",
          "юридические и медицинские услуги",
          "B2B-услуги с понятным поисковым запросом",
        ]}
      />
      <p>
        В такой ситуации{" "}
        <Link
          href="/ads/google-ads"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          Google Ads
        </Link>{" "}
        ловит не просто интерес к теме, а реальное намерение кому-то написать.
      </p>

      <SubHeading>2. Решение нужно быстро</SubHeading>
      <p>
        Когда человеку нужен результат сейчас, он редко сначала идёт в ленту. Он
        идёт в поиск. Поэтому для многих сервисных и локальных бизнесов Google
        Ads становится самым понятным первым тестом спроса.
      </p>

      <SubHeading>3. У вас есть одна ясная страница под оффер</SubHeading>
      <p>
        Search работает лучше всего там, где объявление обещает одну вещь, а
        страница сразу её раскрывает. Поэтому под платный спрос часто лучше
        работает отдельный{" "}
        <Link
          href="/web/landing-pages"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          лендинг
        </Link>
        , а не общий сайт.
      </p>

      <SectionHeading>Когда сильнее Meta Ads</SectionHeading>

      <SubHeading>1. Предложение нужно скорее показать, чем найти</SubHeading>
      <p>
        Есть ниши, где человек не формулирует точный запрос в Google, но хорошо
        реагирует на правильную подачу. Обычно это более визуальные категории,
        lifestyle-сегменты и услуги, где решают образ, эмоция и контекст.
      </p>

      <SubHeading>2. Решение созревает не сразу</SubHeading>
      <p>
        Если человек редко оставляет заявку в первое касание,{" "}
        <Link
          href="/ads/meta-ads"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          Meta Ads
        </Link>{" "}
        полезны как система повторных контактов: показать оффер, вернуть
        ретаргетингом и напомнить о себе, когда человек снова готов смотреть.
      </p>

      <SubHeading>3. У вас уже есть трафик, который нужно догреть</SubHeading>
      <p>Meta часто сильна как второй канал:</p>
      <BulletList
        items={[
          "вернуть посетителей сайта",
          "дожать тех, кто уже видел оффер",
          "усилить Google Ads там, где одного клика недостаточно",
        ]}
      />

      <SectionHeading>
        Что делать, если бюджет ограничен и нужно выбрать один старт
      </SectionHeading>
      <NoteCard label="Стартовый сценарий">
        <p>
          Если у малого сервисного бизнеса в Чехии один ясный тип спроса,
          небольшой бюджет и задача быстро проверить, будут ли идти заявки, чаще
          безопаснее начинать с Google Ads на одну точную страницу.
        </p>
        <p>
          Meta Ads в такой ситуации обычно лучше подключать вторым шагом: для
          ретаргетинга, напоминаний и повторного контакта после первого визита
          на сайт.
        </p>
      </NoteCard>

      <SectionHeading>
        Почему платформа сама по себе ничего не решает
      </SectionHeading>

      <SubHeading>Слабый сайт портит оба канала</SubHeading>
      <p>
        Если после клика человек не понимает оффер, не видит доверия и не
        понимает следующий шаг, провалиться может и search, и feed.
      </p>

      <SubHeading>Без аналитики вы спорите по ощущениям</SubHeading>
      <p>
        Когда не видно реальные лиды, качество заявок и источник результата,
        выбор канала превращается в спор о вкусах. Поэтому{" "}
        <Link
          href="/tracking"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          трекинг
        </Link>{" "}
        здесь часть рекламной логики, а не дополнительная услуга.
      </p>

      <SubHeading>
        Слабая обработка лидов убивает даже хороший трафик
      </SubHeading>
      <p>
        Поздний ответ, потерянная заявка и хаотичная работа с контактами легко
        делают из работающей рекламы «плохой канал».
      </p>

      <SectionHeading>Где бизнес чаще всего сжигает деньги</SectionHeading>
      <BulletList
        items={[
          "запускает Meta Ads без сильного оффера и без догрева",
          "ведёт Google Ads на общую страницу вместо точной посадки",
          "смотрит только на стоимость лида",
          "спорит о платформе раньше, чем приводит в порядок страницу и аналитику",
        ]}
      />

      <SectionHeading>
        На практике каналы часто работают в связке
      </SectionHeading>
      <NoteCard label="Пример">
        <p>
          На проекте{" "}
          <Link
            href="/case-studies/nejablonky"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Nejbalonky.cz
          </Link>{" "}
          хорошо видно, что рост обычно не строится на одной «победившей
          платформе». Работает связка оффера, сайта, аналитики и рекламных
          каналов, которые решают разные задачи на разных этапах спроса.
        </p>
        <p>
          Поэтому полезнее определять роль и порядок каналов, чем пытаться
          выбрать один «лучший навсегда».
        </p>
      </NoteCard>

      <SectionHeading>Короткий чек-лист перед выбором канала</SectionHeading>
      <BulletList
        items={[
          "Эту услугу уже ищут напрямую?",
          "Под оффер есть одна сильная страница?",
          "Вам нужен быстрый лид или серия касаний?",
          "В аналитике видно, что произошло после клика?",
          "Вы сможете быстро обработать лид?",
        ]}
      />

      <SectionHeading>Частые вопросы</SectionHeading>
      <div className="space-y-5">
        {[
          {
            q: "Имеет смысл запускать оба канала сразу?",
            a: "Да, если на это хватает бюджета, страницы и аналитики. Но для малого бизнеса чаще полезнее сначала собрать одну работающую связку, а потом добавлять второй канал.",
          },
          {
            q: "Meta Ads подходят только e-commerce?",
            a: "Нет. Просто для сервисного бизнеса Meta чаще работает как прогрев, ретаргетинг или усиление, а не всегда как главный канал первого спроса.",
          },
          {
            q: "Если Google Ads уже не работает, надо сразу переключаться на Meta?",
            a: "Не автоматически. Сначала стоит понять, проблема в канале, странице, аналитике или обработке заявок.",
          },
          {
            q: "Что делать, если всё ещё непонятно, с чего начать?",
            a: "Тогда лучше решать вопрос не абстрактно по платформе, а по конкретному офферу, типу спроса и странице, на которую должен прийти трафик.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]"
          >
            <div className="text-xl font-extrabold leading-tight text-[#1A1A1A]">
              {item.q}
            </div>
            <p className="mt-3">{item.a}</p>
          </div>
        ))}
      </div>

      <SectionHeading>Итог</SectionHeading>
      <p>
        Вопрос не в том, какая платформа «лучше вообще». Правильный вопрос в
        том, как у вас возникает спрос и готов ли бизнес превращать трафик в
        реальную заявку.
      </p>
      <p>
        Если нужно понять, что в вашей ситуации логичнее:{" "}
        <Link
          href="/ads/google-ads"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          Google Ads
        </Link>
        ,{" "}
        <Link
          href="/ads/meta-ads"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          Meta Ads
        </Link>{" "}
        или сначала усилить страницу, проще всего{" "}
        <Link
          href="/contact"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          обсудить задачу
        </Link>
        .
      </p>
    </>
  );
}
