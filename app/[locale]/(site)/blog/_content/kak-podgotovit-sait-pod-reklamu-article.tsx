import {
  BulletList,
  NoteCard,
  SectionHeading,
  SubHeading,
} from "@/app/[locale]/(site)/blog/_components/article-primitives";
import { Link } from "@/i18n/routing";

type ArticleLocale = "ru" | "cs";

export function HowToPrepareSiteForAdsArticle({
  locale = "ru",
}: {
  locale?: ArticleLocale;
}) {
  if (locale === "cs") {
    return (
      <>
        <p>
          Jedna z nejdražších chyb malých firem je spustit reklamu na web, který
          na ni není připravený. Formálně vypadá všechno v pořádku: stránka
          existuje, formulář také, tlačítko taky. Po spuštění ale přijdou kliky,
          poptávek je málo a první obvinění míří na reklamní účet. Ve
          skutečnosti reklama jen rychleji odhalila slabá místa stránky.
        </p>

        <SectionHeading>Krátká odpověď</SectionHeading>
        <BulletList
          items={[
            "Web pro reklamu musí rychle vysvětlit nabídku, dovést k jednomu dalšímu kroku a být připravený na měření.",
            "Pokud stránka nesedí s příslibem v reklamě, nevzbuzuje důvěru nebo komplikuje kontakt, rozpočet začne mizet hned.",
            "Před spuštěním reklamy je potřeba zkontrolovat nejen design, ale i strukturu, formulář, analytiku a logiku zpracování poptávky.",
          ]}
        />

        <SectionHeading>Audit připravenosti stránky</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            [
              "Nabídka",
              "Je během pár sekund jasné, co přesně nabízíte a pro koho to je?",
            ],
            [
              "Důvěra",
              "Vidí člověk rychle reference, proces, FAQ nebo jiné důvody, proč vám věřit?",
            ],
            [
              "CTA",
              "Má stránka jeden hlavní další krok místo několika konkurenčních směrů?",
            ],
            [
              "Formulář",
              "Dá se pohodlně odeslat z mobilu a opravdu chodí tam, kam má?",
            ],
            [
              "Analytika",
              "Poznáte, odkud lead přišel a co se po kliknutí skutečně stalo?",
            ],
          ].map(([label, text]) => (
            <div
              key={label}
              className="rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[5px_5px_0px_0px_#1A1A1A]"
            >
              <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
                {label}
              </div>
              <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#1A1A1A]/80">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Pokud alespoň dva bloky kulhají, problém obvykle nevznikne až po
          spuštění reklamy. Jen začne být rychleji vidět.
        </p>

        <SectionHeading>Minimum před prvním spuštěním</SectionHeading>
        <p>Před prvním rozpočtem by firma měla umět odpovědět na 5 otázek:</p>
        <BulletList
          items={[
            "Máme jednu jasnou nabídku, nebo návštěvník padá do směsi více služeb?",
            "Vysvětluje stránka rychle, proč právě nám nechat poptávku?",
            "Je formulář pohodlný a technicky spolehlivý?",
            "Uvidíme, odkud přišel lead?",
            "Budeme na poptávku reagovat rychle a normálně?",
          ]}
        />

        <SectionHeading>Co zkontrolovat před spuštěním reklamy</SectionHeading>

        <SubHeading>1. Sedí nabídka stránky s reklamou?</SubHeading>
        <p>
          Pokud reklama slibuje jednu věc a stránka mluví o něčem jiném, důvěra
          padá během několika sekund.
        </p>
        <BulletList
          items={[
            "v reklamě je konkrétní služba, ale na stránce je obecný popis firmy",
            "reklama staví na ceně nebo rychlosti, stránka to skoro nezmiňuje",
            "reklama vede k jednomu CTA, ale stránka nabízí pět různých směrů",
          ]}
        />

        <SubHeading>2. Chápe člověk hned další krok?</SubHeading>
        <p>
          Po kliku není moc trpělivosti. Návštěvník musí rychle pochopit, že se
          dostal správně, že mu nabídka sedí a co má udělat dál.
        </p>
        <p>
          Právě proto pod reklamu často funguje samostatná{" "}
          <Link
            href="/web/landing-pages"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            landing page
          </Link>
          , ne obecná sekce webu.
        </p>

        <SubHeading>3. Jsou na stránce důvody věřit?</SubHeading>
        <p>
          Ani horká návštěvnost obvykle nekonvertuje na holé stránce bez důkazů.
          Pomáhají hlavně:
        </p>
        <BulletList
          items={[
            "krátké case inserts",
            "reálné reference",
            "srozumitelný proces spolupráce",
            "FAQ a odpovědi na námitky",
            "fotka firmy nebo odpovědné osoby",
          ]}
        />

        <SubHeading>4. Je formulář opravdu použitelný?</SubHeading>
        <p>Podívejte se hlavně na:</p>
        <BulletList
          items={[
            "počet polí",
            "co se stane po odeslání",
            "pohodlí na mobilu",
            "technickou spolehlivost",
            "kam lead skutečně dorazí",
          ]}
        />
        <p>
          Slabý formulář je typické úzké hrdlo, do kterého reklama posílá peníze
          rychleji, než si toho firma všimne.
        </p>

        <SubHeading>5. Není mobilní cesta slabší než desktop?</SubHeading>
        <p>
          U mnoha oborů je mobil hlavní zdroj návštěvnosti. Pokud je CTA moc
          nízko, text těžko čitelný nebo je formulář nepohodlný, část poptávek
          zmizí dřív, než se dostanete k optimalizaci kampaní.
        </p>

        <SubHeading>6. Je nastavená analytika?</SubHeading>
        <p>Bez ní nepoznáte:</p>
        <BulletList
          items={[
            "jestli poptávka opravdu přišla",
            "kolik bylo leadů",
            "který kanál fungoval lépe",
            "kde lidé odpadávají",
          ]}
        />
        <p>
          Pokud v tomhle není pořádek, dává smysl nejdřív uklidit{" "}
          <Link
            href="/tracking"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            tracking
          </Link>
          , a teprve potom stupňovat rozpočet.
        </p>

        <SubHeading>7. Víte, co se stane po leadu?</SubHeading>
        <p>
          Kdo odpoví, jak rychle a kam kontakt spadne? Z hlediska byznysu je
          pozdní reakce stejný problém jako slabá stránka. Jen se projeví o krok
          později.
        </p>

        <SectionHeading>
          Jak vypadá slabá stránka oproti připravené stránce
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <NoteCard label="Slabá stránka">
            <BulletList
              items={[
                "obecný headline bez jasné nabídky",
                "více CTA, která si konkurují",
                "málo důkazů a málo důvěry",
                "těžkopádný formulář",
                "žádná jistota, co měří analytika",
              ]}
            />
          </NoteCard>
          <NoteCard label="Připravená stránka">
            <BulletList
              items={[
                "jeden jasný offer match s reklamou",
                "jedna hlavní akce",
                "rychlá vrstva důvěry",
                "pohodlný formulář pro mobil",
                "jasná měřicí logika a kontrola leadů",
              ]}
            />
          </NoteCard>
        </div>

        <SectionHeading>Kde se rozpočet ztrácí nejčastěji</SectionHeading>
        <BulletList
          items={[
            "placená návštěvnost jde na příliš obecnou stránku",
            "stránka nemá jeden hlavní CTA směr",
            "obsah je dlouhý, ale nejasný",
            "chybí důkazy a záchytné body důvěry",
            "nikdo přesně neví, co se po kliku měří",
          ]}
        />

        <SectionHeading>
          Typický scénář: reklama neutíká, stránka ano
        </SectionHeading>
        <NoteCard label="Příklad">
          <p>
            Na projektu{" "}
            <Link
              href="/case-studies/propradlo"
              className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
            >
              ProPradlo.cz
            </Link>{" "}
            je dobře vidět, že výsledek nevzniká jen spuštěním kampaní. Stránka
            musí mít jasnou logiku, důvěru a návaznost na lead flow, jinak
            reklama jen rychleji ukáže ztráty.
          </p>
          <p>
            Rozdíl bývá právě v tom, že připravená stránka reklamu podpírá,
            zatímco slabá stránka ji přetěžuje.
          </p>
        </NoteCard>

        <SectionHeading>
          Krátký checklist: je stránka opravdu připravená?
        </SectionHeading>
        <BulletList
          items={[
            "Říká reklama a stránka totéž?",
            "Je na stránce jeden jasný offer a jeden hlavní další krok?",
            "Vidí člověk rychle důvěru a odpovědi na námitky?",
            "Je formulář pohodlný a funkční i na mobilu?",
            "Víte, odkud lead přišel a co se s ním stalo potom?",
          ]}
        />

        <SectionHeading>Časté otázky</SectionHeading>
        <div className="space-y-5">
          {[
            {
              q: "Dá se spustit reklama i na existující web bez předělání?",
              a: "Někdy ano, pokud už teď jasně prodává nabídku, vzbuzuje důvěru a vede k poptávce. Když tohle neplní, aspoň část stránky je potřeba zesílit.",
            },
            {
              q: "Je samostatná landing page nutná vždy?",
              a: "Ne vždy. Ale pokud propagujete jednu konkrétní nabídku, samostatná silná stránka obvykle funguje lépe než obecný firemní web.",
            },
            {
              q: "Co je před spuštěním důležitější: web nebo analytika?",
              a: "Oddělovat to moc nejde. Silná stránka bez měření se řídí naslepo a dobrá analytika nezachrání slabou konverzní logiku.",
            },
            {
              q: "Má smysl reklamu pozastavit, když je stránka slabá?",
              a: "Často ano. Pokud je zřejmé, že stránka nesedí s úkolem a nekonvertuje, další rozpočet většinou jen vyrábí dražší důkaz téhož problému.",
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
          Připravit web pro reklamu neznamená jen zkontrolovat, že se stránka
          načítá. Je potřeba ověřit, že stránka sedí s nabídkou, rychle ji
          vysvětluje, budí důvěru, sbírá poptávky a dá se normálně měřit.
        </p>
        <p>
          Pokud potřebujete připravit stránku přímo pro reklamní spuštění,
          podívejte se, jak stavíme{" "}
          <Link
            href="/web/landing-pages"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            landing pages
          </Link>{" "}
          a jak přemýšlíme o{" "}
          <Link
            href="/ads/google-ads"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Google Ads
          </Link>
          . A pokud už návštěvnost běží a potřebujete zjistit, kde výsledek
          mizí, je nejrychlejší{" "}
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
        Одна из самых дорогих ошибок малого бизнеса — запускать рекламу на сайт,
        который к ней не готов. Формально всё выглядит нормально: страница есть,
        форма есть, кнопка тоже. После запуска появляются клики, а заявок мало,
        и первым начинают обвинять рекламный кабинет. На деле реклама просто
        быстрее подсвечивает слабые места страницы.
      </p>

      <SectionHeading>Короткий ответ</SectionHeading>
      <BulletList
        items={[
          "Сайт под рекламу должен быстро объяснять оффер, вести к одному следующему шагу и быть готовым к измерению.",
          "Если страница не совпадает с обещанием объявления, не вызывает доверия или мешает человеку оставить заявку, бюджет начнёт течь сразу.",
          "До запуска рекламы нужно проверить не только дизайн, но и структуру, форму, аналитику и путь обработки лида.",
        ]}
      />

      <SectionHeading>Аудит готовности страницы</SectionHeading>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          [
            "Оффер",
            "За несколько секунд понятно, что вы предлагаете и кому это подходит?",
          ],
          [
            "Доверие",
            "Человек быстро видит кейсы, процесс, FAQ или другие причины вам верить?",
          ],
          [
            "CTA",
            "На странице есть один главный следующий шаг, а не несколько конкурирующих направлений?",
          ],
          [
            "Форма",
            "Её удобно отправить с телефона и заявка реально доходит куда надо?",
          ],
          [
            "Аналитика",
            "Вы сможете понять, откуда пришёл лид и что после клика реально произошло?",
          ],
        ].map(([label, text]) => (
          <div
            key={label}
            className="rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[5px_5px_0px_0px_#1A1A1A]"
          >
            <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
              {label}
            </div>
            <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#1A1A1A]/80">
              {text}
            </p>
          </div>
        ))}
      </div>
      <p>
        Если хотя бы два блока здесь слабые, проблема обычно не появится после
        запуска рекламы. Она просто станет быстрее видна.
      </p>

      <SectionHeading>Минимум готовности перед первым запуском</SectionHeading>
      <p>До первого бюджета бизнесу стоит честно ответить на 5 вопросов:</p>
      <BulletList
        items={[
          "У нас один ясный оффер или человек попадает в путаницу из нескольких услуг?",
          "Страница быстро объясняет, почему заявку стоит оставить именно нам?",
          "Форма удобная и технически надёжная?",
          "Мы увидим, откуда пришёл лид?",
          "Мы быстро и нормально обработаем эту заявку?",
        ]}
      />

      <SectionHeading>Что проверить до запуска рекламы</SectionHeading>

      <SubHeading>1. Совпадает ли оффер страницы с рекламой</SubHeading>
      <p>
        Если реклама обещает одно, а страница говорит о другом, доверие теряется
        в первые секунды.
      </p>
      <BulletList
        items={[
          "в объявлении конкретная услуга, а на странице общий рассказ о компании",
          "в рекламе упор на цену или скорость, а на странице это почти не раскрыто",
          "объявление ведёт к одному действию, а страница предлагает сразу пять направлений",
        ]}
      />

      <SubHeading>2. Понятен ли человеку следующий шаг</SubHeading>
      <p>
        После клика терпения мало. Человек должен быстро понять, что попал туда
        куда нужно, что предложение ему подходит и что делать дальше.
      </p>
      <p>
        Именно поэтому под рекламу часто лучше работает отдельный{" "}
        <Link
          href="/web/landing-pages"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          лендинг
        </Link>
        , а не общий раздел сайта.
      </p>

      <SubHeading>3. Есть ли на странице причины доверять</SubHeading>
      <p>
        Даже горячий трафик редко конвертируется на голой странице без
        доказательств. Обычно помогают:
      </p>
      <BulletList
        items={[
          "короткие кейсы",
          "реальные отзывы",
          "понятный процесс работы",
          "FAQ и ответы на типичные возражения",
          "фото бизнеса или ответственного человека",
        ]}
      />

      <SubHeading>4. Нормальна ли форма</SubHeading>
      <p>Проверьте хотя бы это:</p>
      <BulletList
        items={[
          "сколько в ней полей",
          "что происходит после отправки",
          "удобно ли заполнение с телефона",
          "нет ли технических сбоев",
          "куда реально попадает лид",
        ]}
      />
      <p>
        Слабая форма — классическое узкое горлышко, в которое реклама начинает
        загонять деньги быстрее, чем это замечают.
      </p>

      <SubHeading>5. Не слабее ли мобильный сценарий</SubHeading>
      <p>
        Во многих нишах мобильный трафик основной. Если CTA слишком низко, текст
        тяжело читать или форма неудобна, часть заявок теряется ещё до этапа
        оптимизации кампаний.
      </p>

      <SubHeading>6. Настроена ли аналитика</SubHeading>
      <p>Без неё нельзя понять:</p>
      <BulletList
        items={[
          "была ли заявка на самом деле",
          "сколько пришло лидов",
          "какой канал сработал лучше",
          "на каком шаге люди отваливаются",
        ]}
      />
      <p>
        Если здесь нет порядка, сначала логично привести в чувство{" "}
        <Link
          href="/tracking"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          трекинг
        </Link>
        , а уже потом усиливать расход.
      </p>

      <SubHeading>7. Понимаете ли вы, что будет после лида</SubHeading>
      <p>
        Кто отвечает, как быстро и куда падает контакт? С точки зрения бизнеса
        поздняя обработка — почти такая же проблема, как слабая страница. Просто
        она проявляется на следующем шаге.
      </p>

      <SectionHeading>
        Как выглядит слабая страница и готовая страница
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        <NoteCard label="Слабая страница">
          <BulletList
            items={[
              "общий заголовок без ясного оффера",
              "несколько CTA, которые спорят друг с другом",
              "мало доверия и конкретики",
              "тяжёлая форма",
              "непонятно, что именно меряет аналитика",
            ]}
          />
        </NoteCard>
        <NoteCard label="Готовая страница">
          <BulletList
            items={[
              "один ясный offer match с объявлением",
              "одно главное действие",
              "быстрый слой доверия",
              "удобная форма для мобильного",
              "понятная логика измерения и проверки лидов",
            ]}
          />
        </NoteCard>
      </div>

      <SectionHeading>Где чаще всего сливается бюджет</SectionHeading>
      <BulletList
        items={[
          "платный трафик ведут на слишком общую страницу",
          "у страницы нет одного главного CTA",
          "текст длинный, но неясный",
          "не хватает доказательств и точек доверия",
          "никто не понимает, что реально измеряется после клика",
        ]}
      />

      <SectionHeading>
        Типичный сценарий: проблема не в рекламе, а в странице
      </SectionHeading>
      <NoteCard label="Пример">
        <p>
          На проекте{" "}
          <Link
            href="/case-studies/propradlo"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            ProPradlo.cz
          </Link>{" "}
          хорошо видно, что результат не появляется просто от запуска кампаний.
          Страница должна иметь ясную логику, доверие и связь с lead flow, иначе
          реклама только быстрее показывает потери.
        </p>
        <p>
          Разница обычно именно в этом: готовая страница поддерживает рекламу, а
          слабая страница её перегружает.
        </p>
      </NoteCard>

      <SectionHeading>
        Короткий чек-лист: страница правда готова?
      </SectionHeading>
      <BulletList
        items={[
          "Объявление и страница говорят об одном и том же?",
          "На странице один понятный оффер и один главный следующий шаг?",
          "Доверие и ответы на возражения видны быстро?",
          "Форма удобна и работает с телефона?",
          "Вы видите, откуда пришёл лид и что с ним произошло дальше?",
        ]}
      />

      <SectionHeading>Частые вопросы</SectionHeading>
      <div className="space-y-5">
        {[
          {
            q: "Можно ли запускать рекламу на существующий сайт без переделки?",
            a: "Иногда да, если он уже ясно продаёт оффер, вызывает доверие и ведёт к заявке. Если этого нет, хотя бы часть страницы нужно усилить.",
          },
          {
            q: "Отдельный лендинг нужен всегда?",
            a: "Не всегда. Но если вы рекламируете один конкретный оффер, отдельная сильная страница обычно работает лучше общего сайта.",
          },
          {
            q: "Что важнее перед запуском: сайт или аналитика?",
            a: "Сильно разделять их не стоит. Сильная страница без измерения плохо управляется, а хорошая аналитика не спасёт слабую конверсионную логику.",
          },
          {
            q: "Есть смысл остановить рекламу, если страница слабая?",
            a: "Часто да. Если видно, что страница не соответствует задаче и не конвертирует, дальнейший бюджет обычно только делает тот же вывод дороже.",
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
        Подготовить сайт под рекламу — это не просто проверить, что страница
        открывается. Нужно убедиться, что она совпадает с оффером, быстро
        объясняет предложение, вызывает доверие, собирает заявки и нормально
        измеряется.
      </p>
      <p>
        Если нужно собрать страницу именно под рекламный запуск, посмотрите, как
        мы делаем{" "}
        <Link
          href="/web/landing-pages"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          лендинги
        </Link>{" "}
        и как подходим к{" "}
        <Link
          href="/ads/google-ads"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          Google Ads
        </Link>
        . А если трафик уже идёт и нужно понять, где именно уходит результат,
        проще всего{" "}
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
