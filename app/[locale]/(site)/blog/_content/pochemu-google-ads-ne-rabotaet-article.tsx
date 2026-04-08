import {
  BulletList,
  NoteCard,
  SectionHeading,
} from "@/app/[locale]/(site)/blog/_components/article-primitives";
import { Link } from "@/i18n/routing";

type ArticleLocale = "ru" | "cs";

export function WhyGoogleAdsDoesNotWorkArticle({
  locale = "ru",
}: {
  locale?: ArticleLocale;
}) {
  if (locale === "cs") {
    return (
      <>
        <p>
          Když „Google Ads nefunguje“, problém často není v samotných kampaních.
          Člověk už službu hledá, klikne, přijde na web a tam narazí na slabou
          nabídku, špatnou stránku, rozbitou analytiku nebo pomalé zpracování
          poptávek. Proto normální audit Google Ads skoro nikdy nezačíná u
          tlačítek v účtu, ale kontrolou celé cesty od dotazu až po poptávku.
        </p>

        <SectionHeading>
          Proč Google Ads tak často vypadá jako nefunkční kanál
        </SectionHeading>
        <p>
          Google Ads je velmi přímý kanál. Člověk už hledá službu nebo produkt,
          zadá dotaz, uvidí reklamu a přejde na stránku. Pokud pak něco nesedí,
          problém se ukáže velmi rychle.
        </p>
        <p>
          Právě proto je snadné obvinit reklamu jako první. Stojí peníze, je ji
          vidět a v účtu jsou čísla. Samotný účet ale neumí opravit slabou
          nabídku, nepřesnou landing page, špatný mobilní zážitek, nešikovný
          formulář, ztracené události ani chaos ve zpracování poptávek.
        </p>
        <p>
          Google Ads jen rychleji než jiné kanály odhalí, že celý systém není
          poskládaný správně.
        </p>

        <SectionHeading>Důvod 1. Na stránce chybí silná nabídka</SectionHeading>
        <p>Člověk klikne z vyhledávání, ale na webu nepochopí:</p>
        <BulletList
          items={[
            "co přesně nabízíte",
            "čím se to liší od ostatních",
            "proč má nechat poptávku právě teď",
          ]}
        />
        <p>Obvykle to vypadá takto:</p>
        <BulletList
          items={[
            "nadpis je příliš obecný",
            "na první obrazovce není jasné to podstatné",
            "nabídka je rozmazaná",
            "slov je hodně, jasnosti málo",
          ]}
        />
        <p>
          Pokud je stránka slabá významově, Google Ads sám výsledek nezachrání.
        </p>

        <SectionHeading>
          Důvod 2. Vstupní stránka neodpovídá dotazu
        </SectionHeading>
        <p>
          Velmi častý scénář: člověk hledá jednu konkrétní službu, ale dopadne
          na příliš obecné stránce.
        </p>
        <BulletList
          items={[
            "hledal konkrétní službu, ale přišel na obecnou firemní stránku",
            "reklama slibuje jedno, ale na stránce vidí něco jiného",
            "návštěvnost jde na sekci, která člověka nedovede k poptávce",
          ]}
        />
        <p>
          Pokud firma propaguje jednu jasnou nabídku, často funguje lépe
          samostatná{" "}
          <Link
            href="/web/landing-pages"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            landing page
          </Link>
          , ne univerzální část webu.
        </p>

        <SectionHeading>Důvod 3. Web je nepohodlný na mobilu</SectionHeading>
        <p>
          Google Ads často přivádí mobilní návštěvnost. Signály bývají
          jednoduché:
        </p>
        <BulletList
          items={[
            "tlačítko není dost zřejmé",
            "formulář je zbytečně dlouhý",
            "text je příliš hutný",
            "první obrazovka nedává jasnou orientaci",
            "stránka se načítá pomalu",
          ]}
        />
        <p>
          Pokud je mobilní cesta slabá, část poptávek se ztratí ještě před
          formulářem.
        </p>

        <SectionHeading>
          Důvod 4. Formulář nebo cesta ke kontaktu je slabá
        </SectionHeading>
        <p>
          Někdy problém není ani v reklamě, ani v celé stránce, ale v samotném
          přechodu ke kontaktu.
        </p>
        <BulletList
          items={[
            "formulář je příliš dlouhý",
            "telefon je povinný i tam, kde člověk volat nechce",
            "CTA je příliš obecné",
            "člověk musí dlouho hledat, jak vás kontaktovat",
          ]}
        />
        <p>
          Google Ads přivede návštěvníka do momentu rozhodnutí. Co se stane dál,
          už rozhoduje stránka.
        </p>

        <SectionHeading>
          Důvod 5. Analytika ukazuje jen část reality
        </SectionHeading>
        <p>
          To je jeden z nejnebezpečnějších problémů, protože firma pak rozhoduje
          podle křivých dat.
        </p>
        <BulletList
          items={[
            "poptávky existují, ale ne všechny se dostanou do GA4",
            "události do reklamních účtů odcházejí neúplně",
            "část dat mizí kvůli iOS, cookies a blokátorům",
            "formuláře fungují, ale konverze se počítají nestabilně",
          ]}
        />
        <p>
          Pokud je chaos tady, dává smysl nejdřív uklidit{" "}
          <Link
            href="/tracking"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            tracking
          </Link>
          , a teprve potom se hádat o kvalitě kampaní.
        </p>

        <SectionHeading>
          Důvod 6. Zpracování poptávek je pomalé nebo chaotické
        </SectionHeading>
        <p>
          Google Ads může přivést kvalitní poptávku. Pokud ale firma odpovídá
          pozdě, nekonzistentně nebo dotazy rovnou ztrácí, reklama začne vypadat
          jako viník.
        </p>
        <p>Typický scénář je jednoduchý:</p>
        <ol className="list-decimal space-y-2 pl-6 text-[17px] font-medium leading-relaxed text-[#1A1A1A]/80">
          <li>člověk odešle formulář</li>
          <li>nikdo mu neodpoví včas</li>
          <li>odejde ke konkurenci</li>
          <li>firma dojde k závěru, že Google Ads přivádí špatné poptávky</li>
        </ol>
        <p>
          Pokud je slabá tahle vrstva, nestačí řešit jen reklamu. Potřebujete i
          lepší návaznost přes{" "}
          <Link
            href="/automation"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            automatizaci
          </Link>{" "}
          nebo aspoň základní proces práce s poptávkami.
        </p>

        <SectionHeading>
          Důvod 7. Kampaně vedou návštěvnost tam, kde firma ještě není
          připravená
        </SectionHeading>
        <p>Někdy se reklama spouští dřív, než je hotový základ:</p>
        <BulletList
          items={[
            "stránka není dopsaná",
            "nabídka je ještě syrová",
            "analytika není ověřená",
            "CRM nebo formulář nejsou dotažené",
          ]}
        />
        <p>
          V takovou chvíli Google Ads opravdu může „nefungovat“. Ne proto, že by
          byl kanál slabý, ale proto, že firma začala platit za návštěvnost
          dřív, než byla připravená ji normálně přijmout.
        </p>

        <SectionHeading>Co kontrolovat a v jakém pořadí</SectionHeading>
        <p>
          Pokud máte kliky, ale ne poptávky, nechoďte po kruhu. Kontrolujte věci
          shora dolů.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            [
              "1. Dotazy",
              "Na jaká slova lidé chodí? Je to opravdu váš typ poptávky, nebo příliš široká návštěvnost?",
            ],
            [
              "2. Nabídka",
              "Odpovídá nabídka na stránce tomu, co člověk hledal?",
            ],
            [
              "3. Vstupní stránka",
              "Je úvodní obrazovka jasná, cesta logická a mobilní verze v pořádku?",
            ],
            [
              "4. Formulář a CTA",
              "Je jednoduché dojít k poptávce a opravdu ji odeslat?",
            ],
            ["5. Tracking", "Vidíte reálné události a reálné poptávky?"],
            [
              "6. Zpracování poptávky",
              "Co se děje po odeslání? Kdo odpovídá a jak rychle?",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[5px_5px_0px_0px_#1A1A1A]"
            >
              <div className="text-lg font-extrabold text-[#1A1A1A]">
                {title}
              </div>
              <p className="mt-3">{text}</p>
            </div>
          ))}
        </div>

        <SectionHeading>Typická chyba: léčit jen reklamní účet</SectionHeading>
        <p>Nejběžnější scénář vypadá takhle:</p>
        <BulletList
          items={[
            "firma má pocit, že problém je v nastavení",
            "dodavatel přestaví strukturu kampaní",
            "pak změní nabídky",
            "pak upraví texty reklam",
            "ale landing page, formulář a tracking zůstávají stejné",
          ]}
        />
        <p>Za měsíc jsou všichni unavení, peněz ubylo a jasno stále není.</p>
        <p>
          Ve skutečně dobrém auditu{" "}
          <Link
            href="/ads/google-ads"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Google Ads
          </Link>{" "}
          skoro vždy musíte zkontrolovat minimálně tři vrstvy: samotnou
          poptávku, vstupní stránku a analytiku. Bez toho reklamní účet dává jen
          část odpovědi.
        </p>

        <SectionHeading>
          Reálný scénář: když se nemění jen reklama
        </SectionHeading>
        <NoteCard label="Příklad">
          <p>
            Na projektech jako{" "}
            <Link
              href="/case-studies/catcafe"
              className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
            >
              CatCafe
            </Link>{" "}
            je dobře vidět, že růst nepřijde z jedné „magické úpravy“. Obvykle
            se zlepší celá vazba: reklama, vstupní stránka, konverzní logika i
            analytika.
          </p>
          <p>
            V tom je rozdíl mezi pouhou správou účtu a fungujícím systémem, kde
            Google Ads nepracuje sám o sobě, ale společně s webem a trackingem.
          </p>
        </NoteCard>

        <SectionHeading>Pokud máte kliky, ale ne poptávky</SectionHeading>
        <BulletList
          items={[
            "odpovídá stránka konkrétnímu dotazu",
            "je nabídka jasná už na první obrazovce",
            "jde pohodlně odeslat poptávku z mobilu",
            "počítá analytika skutečné poptávky",
            "víte, co se děje po formuláři",
          ]}
        />
        <p>
          Pokud je aspoň u dvou bodů odpověď nejasná, problém už velmi
          pravděpodobně není jen v Google Ads.
        </p>

        <SectionHeading>Časté otázky</SectionHeading>
        <div className="space-y-5">
          {[
            {
              q: "Může být Google Ads pro můj byznys úplně nevhodný?",
              a: "Ano. Pokud je po vaší službě v Google jen minimální poptávka, může být kanál omezený. Mnohem častěji je ale problém v nabídce, stránce nebo analytice.",
            },
            {
              q: "Je nutné nejdřív předělat celý web?",
              a: "Ne vždy. Někdy stačí posílit konkrétní vstupní stránku. Vést placenou návštěvnost na slabý základ je ale skoro vždy špatný nápad.",
            },
            {
              q: "Co je důležitější: Google Ads nebo tracking?",
              a: "Pokud reklama běží, bez normálního trackingu nevíte, co se skutečně děje. Není moc užitečné stavět tyto dvě věci proti sobě. Patří k sobě.",
            },
            {
              q: "Dá se problém poznat bez kompletní přestavby účtu?",
              a: "Ano. V mnoha případech stačí nejdřív normální diagnostika, ne okamžitý restart všeho.",
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
          Google Ads nemá zachraňovat slabý systém okolo sebe. Jen přivádí
          poptávku tam, kde je firma buď připravená, nebo nepřipravená ji
          převést v reálný kontakt.
        </p>
        <p>
          Pokud tedy kliky jsou, ale poptávky ne, dává smysl dívat se nejen do
          účtu, ale na celou cestu: dotaz, nabídku, stránku, formulář, analytiku
          i zpracování poptávky.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Когда Google Ads “не работает”, проблема часто не в кампаниях. Человек
        уже ищет услугу, кликает, заходит на сайт, а дальше упирается в слабый
        оффер, плохую страницу, кривую аналитику или медленную обработку заявок.
        Поэтому нормальный аудит Google Ads почти всегда начинается не с кнопок
        в кабинете, а с проверки всей связки от запроса до лида.
      </p>

      <SectionHeading>
        Почему Google Ads так часто кажется нерабочим
      </SectionHeading>
      <p>
        Google Ads — очень прямой канал. Человек уже ищет услугу или товар. Он
        вводит запрос, видит объявление, переходит на страницу. И если дальше
        что-то не совпадает, проблема всплывает быстро.
      </p>
      <p>
        Именно поэтому рекламу удобно обвинить первой. Она стоит денег. Её
        видно. В кабинете есть цифры. Но сам кабинет не может исправить слабый
        оффер, неудачную страницу, плохую мобильную версию, неудобную форму,
        потерянные события и хаос в обработке заявок.
      </p>
      <p>
        Google Ads просто быстрее других каналов показывает, что система не
        собрана.
      </p>

      <SectionHeading>
        Причина 1. Нет сильного оффера на странице
      </SectionHeading>
      <p>Человек кликает по запросу, но на сайте не понимает:</p>
      <BulletList
        items={[
          "что именно вы предлагаете",
          "чем это отличается",
          "почему стоит оставить заявку сейчас",
        ]}
      />
      <p>Обычно это выглядит так:</p>
      <BulletList
        items={[
          "заголовок слишком общий",
          "на первом экране нет сути",
          "предложение размыто",
          "много слов, мало ясности",
        ]}
      />
      <p>
        Если страница слабая по смыслу, Google Ads не вытянет результат сам.
      </p>

      <SectionHeading>
        Причина 2. Посадочная страница не соответствует запросу
      </SectionHeading>
      <p>
        Очень частая история: человек ищет одну конкретную услугу, а попадает на
        слишком общую страницу.
      </p>
      <BulletList
        items={[
          "искал конкретную услугу, а попал на общую страницу компании",
          "объявление обещает одно, а на странице видно другое",
          "трафик идёт на раздел, который не дожимает до заявки",
        ]}
      />
      <p>
        Если у бизнеса один рекламный оффер, часто лучше работает отдельная{" "}
        <Link
          href="/web/landing-pages"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          посадочная страница
        </Link>
        , а не универсальный раздел сайта.
      </p>

      <SectionHeading>Причина 3. Сайт неудобен на мобильных</SectionHeading>
      <p>
        Google Ads часто приводит мобильный трафик. Признаки обычно простые:
      </p>
      <BulletList
        items={[
          "кнопка неочевидна",
          "форма длинная",
          "текст слишком плотный",
          "первый экран не даёт ясности",
          "сайт грузится медленно",
        ]}
      />
      <p>Если мобильный путь слабый, часть заявок теряется ещё до формы.</p>

      <SectionHeading>
        Причина 4. Форма или путь до заявки слишком слабые
      </SectionHeading>
      <p>
        Иногда проблема не в рекламном трафике и не в странице целиком, а в
        самом переходе к контакту.
      </p>
      <BulletList
        items={[
          "форма слишком длинная",
          "поле телефона обязательно там, где человек не готов звонить",
          "CTA слишком общий",
          "надо слишком долго искать, как связаться",
        ]}
      />
      <p>
        Google Ads приводит человека до момента выбора. Дальше уже решает
        страница.
      </p>

      <SectionHeading>
        Причина 5. Аналитика показывает неполную картину
      </SectionHeading>
      <p>
        Это одна из самых опасных причин, потому что бизнес начинает принимать
        решения по кривым данным.
      </p>
      <BulletList
        items={[
          "заявки есть, но не все доходят в GA4",
          "события в рекламные кабинеты передаются не полностью",
          "часть данных теряется из-за iOS, cookies и блокировщиков",
          "формы срабатывают, а конверсии считаются нестабильно",
        ]}
      />
      <p>
        Если тут хаос, имеет смысл сначала привести в порядок{" "}
        <Link
          href="/tracking"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          трекинг
        </Link>
        , а уже потом спорить о качестве кампаний.
      </p>

      <SectionHeading>
        Причина 6. Обработка заявок медленная или хаотичная
      </SectionHeading>
      <p>
        Google Ads может привести хорошего лида. Но если бизнес отвечает поздно,
        неровно или вообще теряет обращения, реклама начинает выглядеть
        виноватой.
      </p>
      <p>Сценарий обычно такой:</p>
      <ol className="list-decimal space-y-2 pl-6 text-[17px] font-medium leading-relaxed text-[#1A1A1A]/80">
        <li>человек оставил заявку</li>
        <li>ему не ответили вовремя</li>
        <li>он ушёл к конкуренту</li>
        <li>бизнес решил, что Google Ads даёт плохие лиды</li>
      </ol>
      <p>
        Если этот слой слабый, дальше уже нужна не только реклама, но и
        нормальная связка с{" "}
        <Link
          href="/automation"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          автоматизацией
        </Link>{" "}
        или хотя бы базовой логикой обработки.
      </p>

      <SectionHeading>
        Причина 7. Кампании ведут трафик туда, где бизнес ещё не готов его
        принять
      </SectionHeading>
      <p>Иногда реклама включена раньше, чем готова база:</p>
      <BulletList
        items={[
          "страница не дописана",
          "оффер сырой",
          "аналитика не проверена",
          "CRM или форма не собраны",
        ]}
      />
      <p>
        В такой момент Google Ads действительно может “не работать”. Но не
        потому, что канал слабый, а потому, что бизнес слишком рано начал
        платить за трафик.
      </p>

      <SectionHeading>Что проверить в каком порядке</SectionHeading>
      <p>
        Если у вас есть клики, но нет заявок, не ходите по кругу. Проверяйте
        сверху вниз.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {[
          [
            "1. Запросы",
            "По каким словам люди приходят? Это вообще ваш спрос или слишком широкий трафик?",
          ],
          [
            "2. Оффер",
            "Совпадает ли предложение на странице с тем, что искал человек?",
          ],
          [
            "3. Посадочная страница",
            "Есть ли ясный первый экран, логичный путь и нормальная мобильная версия?",
          ],
          ["4. Форма и CTA", "Легко ли дойти до заявки и отправить её?"],
          ["5. Трекинг", "Видите ли вы реальные события и реальные лиды?"],
          [
            "6. Обработка заявки",
            "Что происходит после формы? Кто отвечает? Как быстро?",
          ],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[5px_5px_0px_0px_#1A1A1A]"
          >
            <div className="text-lg font-extrabold text-[#1A1A1A]">{title}</div>
            <p className="mt-3">{text}</p>
          </div>
        ))}
      </div>

      <SectionHeading>Типичная ошибка: лечить только кабинет</SectionHeading>
      <p>Самый частый сценарий выглядит так:</p>
      <BulletList
        items={[
          "бизнесу кажется, что проблема в настройке",
          "подрядчик меняет структуру кампаний",
          "потом меняет ставки",
          "потом меняет тексты объявлений",
          "а посадочная страница, форма и трекинг остаются такими же",
        ]}
      />
      <p>Через месяц все устали, денег стало меньше, а ясности всё ещё нет.</p>
      <p>
        На деле в нормальном аудите{" "}
        <Link
          href="/ads/google-ads"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          Google Ads
        </Link>{" "}
        почти всегда нужно смотреть минимум на три вещи: сам спрос, посадочную
        страницу и аналитику. Без этого рекламный кабинет даёт только часть
        ответа.
      </p>

      <SectionHeading>
        Реальный сценарий: когда меняется не только реклама
      </SectionHeading>
      <NoteCard label="Кейс">
        <p>
          На кейсах вроде{" "}
          <Link
            href="/case-studies/catcafe"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            CatCafe
          </Link>{" "}
          хорошо видно, что рост не появляется из одной “магической настройки”.
          Обычно растёт вся связка: объявление, посадочная страница,
          конверсионная логика и аналитика.
        </p>
        <p>
          В этом и разница между просто ведением кабинета и нормальной системой,
          где Google Ads работает не сам по себе, а вместе с сайтом и трекингом.
        </p>
      </NoteCard>

      <SectionHeading>Если у вас есть клики, но нет заявок</SectionHeading>
      <BulletList
        items={[
          "соответствует ли страница запросу",
          "видно ли предложение на первом экране",
          "удобно ли оставить заявку с телефона",
          "считает ли аналитика реальные заявки",
          "понимаете ли вы, что происходит после формы",
        ]}
      />
      <p>
        Если хотя бы на два пункта ответ неочевиден, проблема, скорее всего, уже
        не только в Google Ads.
      </p>

      <SectionHeading>Частые вопросы</SectionHeading>
      <div className="space-y-5">
        {[
          {
            q: "Может ли Google Ads не подходить моему бизнесу вообще?",
            a: "Да. Если по вашей услуге почти нет спроса в поиске, канал может быть ограничен. Но намного чаще проблема всё же в оффере, странице или аналитике.",
          },
          {
            q: "Нужно ли сначала переделывать сайт?",
            a: "Не всегда. Иногда достаточно усилить конкретную посадочную страницу. Но вести платный трафик на слабую базу — плохая идея.",
          },
          {
            q: "Что важнее: Google Ads или трекинг?",
            a: "Если реклама уже запущена, без нормального трекинга вы просто не понимаете, что происходит. Поэтому спорить, что важнее, не очень полезно. Это одна связка.",
          },
          {
            q: "Можно ли понять проблему без полного переделывания аккаунта?",
            a: "Да. Во многих случаях сначала достаточно нормальной диагностики, а не полного рестарта.",
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

      <SectionHeading>Вывод</SectionHeading>
      <p>
        Google Ads не обязан спасать слабую систему вокруг себя. Он просто
        приводит спрос туда, где бизнес уже готов или не готов его принять.
      </p>
      <p>
        Поэтому если клики есть, а заявок нет, первым делом стоит смотреть не
        только в кабинет, а на весь путь клиента: запрос, оффер, страницу,
        форму, аналитику и обработку.
      </p>
    </>
  );
}
