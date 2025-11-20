export interface SocialLink {
  type: 'linkedin' | 'instagram' | 'web';
  url: string;
}

export interface Speaker {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  bio: string;
  keynote?: string;
  annotation?: string;
  socialLinks?: SocialLink[];
  isWorkshop: boolean;
}

export const speakers: Speaker[] = [
  {
    id: 'dalibor-pulkert',
    imageUrl: '/images/speakers/dalibor-pulkert.jpg',
    name: 'Dalibor Pulkert',
    description: 'Zakladatel a vedoucí inovační laboratoře Outboxers, autor knihy 30 hodin, spoluzakladatel StartupBox.cz',
    bio: 'Daliborovou osobní misí je podporovat podnikavost. Založil a vede inovační laboratoř Outboxers. Napsal knihu 30 hodin, praktického průvodce, jak ověřit nápady na trhu. Spoluzaložil také projekt StartupBox.cz, digitálního chytrého průvodce a rozcestník startupového ekosystému. Dalibor se specializuje se na servant leadership, inovace a produktový design. Využívá principy human-centered design pro rozvoj nejen produktů, ale i týmů a organizací. Věří v otevřenost a sdílení což se odráží v jeho práci facilitátora, kouče i mentora.',
    keynote: 'Zatím ne!',
    annotation: 'Chcete něco začít dělat, ale tak nějak se na něco čeká? Ještě nejsem úplně ready. Čekám na ten pravý nápad. Potřebuju do toho parťáka. Teď asi není ten správný čas, ještě musím to či ono... Prostě to rozjedeme, ale ještě ne. Teď ne. Jak z tohohle začarovaného kruhu ven? Jak tohle rozseknout? O tom si popovídáme společně. :)',
    socialLinks: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/daliborpulkert/' }
    ],
    isWorkshop: false
  },
  {
    id: 'petr-brothanek',
    imageUrl: '/images/speakers/petr-brothanek.jpg',
    name: 'Petr Brothánek',
    description: 'Prezident Pokerové federace České republiky, zakladatel velkého vzdělávacího projektu zaměřeného na finance',
    bio: 'Sportovec, karetní hráč a lektor, který minulý rok dokončil Právnickou fakultu MU a letos titul JUDr. na Právnické fakultě UK. Prezident Pokerové federace České republiky a zakladatel velkého vzdělávacího projektu zaměřeného na finance, kterým se snaží změnit některé věci v současném vzdělávacím i finančním systému.',
    keynote: 'Jak zvládnout začátek podnikání aneb peníze nejsou zdaleka jediný problém',
    annotation: 'Smyslem a účelem tohoto workshopu bude především ukázat, co kromě peněz je k rozjezdu podnikání potřeba, na co se mají připravit a co si ujasnit. Přednáška bude vedena hravou formou, aby si účastníci v rámci simulací a příkladů mohli některé věci vyzkoušet a mohli jsme si ukázat nejpodstatnější pilíř rozjezdu podnikání, bez kterého je velmi těžké uspět. Žádný nudný výklad či pouhá prezentace, ale jedna velká simulace se sladkými odměnami.',
    isWorkshop: true
  },
  {
    id: 'boris-vanka',
    imageUrl: '/images/speakers/boris-vanka.jpg',
    name: 'Boris Vanka',
    description: 'Digitální marketér zaměřující se na copywriting a datovou analýzu',
    bio: 'Boris Vanka je digitální marketér zaměřující se na copywriting a datovou analýzu. Během 8 let v oboru se věnoval klientům jako Česká spořitelna, Evropský parlament, Impact Hub nebo Skautský institut. Zároveň pořádá setkání profesionálů, kterým předává své know-how v podobě webinářů. Konzultuje a mentoruje projekty v Česku i zahraničí. Žije v Barceloně.',
    keynote: 'Cesta ke svobodě? Podnikání na volné noze.',
    annotation: 'Chceš podnikat, ale nevíš, kde začít? Společně s Borisem se podíváš na to, jak rozjet vlastní byznys s minimálním rizikem, po malých krůčcích a s větší udržitelností. Freelancing (česky "volná noha") přínáší svobodu ve výběru projektů, specializaci, místa práce i režimu, který ti sedí nejvíc. Zároveň ale vyžaduje zodpovědnost vůči klientům, přehled ve financích a zvládnutý time management. Objevíš základy podnikání s malou vstupní bariérou, velkými možnostmi a šancí dělat práci, která tě opravdu baví. Všechno přímo z praxe – od zkušeného volnonožce.',
    socialLinks: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/vanka/' },
      { type: 'web', url: 'https://borisvanka.com/cs/' }
    ],
    isWorkshop: false
  },
  {
    id: 'katerina-ferbyova',
    imageUrl: '/images/speakers/katerina-ferbyova.jpg',
    name: 'Kateřina Ferbyová',
    description: 'Majitelka Café Zastávka a Café bistro Terakota Pasohlávky',
    bio: 'Majitelka Café Zastávka a Café bistro Terakota Pasohlávky, provozovatelka Dědečkova svařáku na brněnských vánočních trzích, sledovaná autorka na LinkedIn.',
    keynote: 'Jak se stát a zůstat podnikatelem',
    annotation: 'Podnikatelem tělem i duší se člověk nestává schůzkou na živnostenském úřadě. Podnikatelem se člověk stává postupně, odolávajíc neustálým změnám a těžkostem. Zajedeme na hlubinu toho, jak tenhle růst vypadá v praxi.',
    isWorkshop: false
  },
  {
    id: 'jasmina-henni',
    imageUrl: '/images/speakers/jasmina-henni.jpg',
    name: 'Jasmína Henni',
    description: 'Konzultantka pro startupy a živnostníky, bývalá venture kapitalistka',
    bio: 'Jasmína během více než deseti let prošla světem startupů, investic i vlastního podnikání – od technologických projektů a venture kapitálu ve Vídni, přes gastro podnik ve Slovinsku až po Yoga Brunch Brno. Zároveň pracuje se zakladateli startupů i s živnostníky v roli konzultantky. V keynotu sdílí, co jí tahle rozmanitá cesta ukázala o úspěchu, selhání i hledání souladu mezi ambicí, autenticitou a životem samotným. Ukáže, že podnikání může mít mnoho podob – a že klíčem je poznat sebe a tvořit cestu, která ti skutečně sedí.',
    keynote: 'Od startupů po kavárnu: Jak si najít vlastní cestu v podnikání',
    annotation: 'Úspěch znamená pro každého něco jiného – a stejně tak i podnikání. Někdo sní o rychle rostoucím startupu s globálním dopadem, jiný o tvůrčí svobodě a flexibilním životním stylu, další zase o produktu, na který si může sáhnout. A někdo možná zjistí, že podnikání vůbec není jeho cesta.',
    socialLinks: [
      { type: 'linkedin', url: 'http://www.linkedin.com/in/jasmína-henni-12662575' },
      { type: 'instagram', url: 'https://www.instagram.com/ruta_ayni/' }
    ],
    isWorkshop: false
  },
  {
    id: 'karel-dytrych',
    imageUrl: '/images/speakers/karel-dytrych.jpg',
    name: 'Karel Dytrych',
    description: 'Spoluzakladatel a výkonný ředitel společnosti Freelo',
    bio: 'Karel Dytrych (40 let) je spoluzakladatel a výkonný ředitel společnosti Freelo. Ze své role si klade za cíl inovovat produkt společnosti a neustále hledat nové cesty, jak přinášet hodnotu klientům, ale i svému týmu. Jeho zkušenosti sahají od programování sociálních sítí přes vedení digitální agentury až po založení a řízení hostingové firmy. Ze studia informačních technologií na Univerzitě Pardubice si mimo červeného diplomu odnesl také příležitost k založení vlastního byznysu se svými přáteli Janem Kuldou a Karlem Borkovcem. To vedlo ke vzniku společnosti Freelo, platformy pro přehlednou správu projektů a usnadnění týmové spolupráce. V jejím vedení uplatňuje své schopnosti řešit technické výzvy, ale také vést marketingové strategie a podporovat projektové řízení. Karel často a s chutí přednáší na konferencích nebo vede školení pro velké společnosti, například Olympus nebo Nikon.',
    keynote: 'Pár věcí, které bych před 10 lety potřeboval vědět',
    annotation: 'Za dekádu budování Freela jsme udělali tisíce rozhodnutí. Některá byla skvělá, jiná katastrofální. Pojďte se podívat na naše největší lekce – úspěchy i průšvihy – abyste se mohli poučit z našich chyb a inspirovat našimi úspěchy.',
    socialLinks: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/kareldytrych/' },
      { type: 'web', url: 'https://www.freelo.io/cs' }
    ],
    isWorkshop: false
  },
  {
    id: 'marie-froulikova',
    imageUrl: '/images/speakers/marie-froulikova.jpg',
    name: 'Marie Froulíková',
    description: 'Zakladatelka Butterflies For Future, projektu Kamdu a Safezony',
    bio: 'Marie má bohaté zkušenosti ze světa NGO, governmentu i korporátního světa. Její hlavní oblastí zájmu jsou mladí lidé, zástupci Generace Z. Založila Butterflies For Future, pod její hlavičkou se realizuje projekt Kamdu, který cílí na systémovou změnu ve vzdělávání, a Safezonu, která vytváří bezpečný prostor v online pro děti a mladé v oblasti duševního zdraví. Miluje networking a vede platformu Social Business Breakfast. Zajímá se o Social Business, SDGs, CSR a social impact svých aktivit.',
    keynote: 'Jak podnikat se společenským přesahem',
    annotation: 'Svět se zrychluje a pracovní trh se mění – vznikají nové profese, staré zanikají. Už neplatí, že se budeš živit tím, co jsi vystudoval/a. Klíčové jsou tvé skills, na kterých budeš pracovat celý život. Z průzkumů vyplývá, že čím dál tím více mladých lidí upřednostňuje práci se společenským dopadem. Jednou z takových cest může být i rozjezd vlastního podnikání - sociálního podnikání. Jde podnikat s dopadem a měnit svět kolem sebe? ANO, rozhodně - přijď se dozvědět více.',
    isWorkshop: false
  },
  {
    id: 'martin-safarik',
    imageUrl: '/images/speakers/martin-safarik.jpg',
    name: 'Martin Šafařík',
    description: 'CEO ve Fpohybu, lektor MBA programu, moderátor podcast True Leaders Talks',
    bio: 'Martin Šafařík je nadšenec do témat jako jsou wellbeing, leadership, firemní kultura a inovace. Věří, že pro úspěch v pracovním i osobním životě jsou klíčové čtyři základní ingredience - pevné vztahy vycházející z důvěry, smysluplné výsledky, neustálý růst a učení, a péče o fyzické i mentální zdraví. Proto je CEO ve Fpohybu, zblízka sledoval spoustu skvělých lídrů kolem Happiness@Work, spoluzaložil Workshop Box, je lektor MBA programu v European School of Business & Management, nebo moderuje leadershipový podcast True Leaders Talks.',
    keynote: 'Mindset jako konkurenční výhoda',
    annotation: 'Žijeme v exponenciální době a pokud si můžeme být něčím jistí, tak tím, že změn kolem nás bude stále víc a budou přicházet čím dál rychleji. Co když jedna z odpovědí, jak být v tomto světě úspěšní, neleží venku, ale uvnitř nás v našem nastavení mysli?\n\nV této přednášce se podíváme na koncept růstového nastavení mysli (growth mindset). Podívám se na přístup, který nám pomáhá učit se z výzev, převzít zodpovědnost za vlastní situaci a nebát se selhání. Umožňuje nám uvěřit, že naučit se dá cokoliv. Na konkrétních příkladech z praxe i osobního života si zároveň ukážeme, že nikdo z nás není jen „růstový" nebo „fixní". Jde hlavně o cestu, jak zvýšit procento situací, ve kterých zvládneme reagovat růstově.',
    socialLinks: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/martinsafarik/' }
    ],
    isWorkshop: false
  },
  {
    id: 'ondrej-kubak',
    imageUrl: '/images/speakers/ondrej-kubak.jpg',
    name: 'Ondřej Kubák',
    description: 'Kondiční trenér a spoluzakladatel brněnského Strange Training',
    bio: 'Kondiční trenér a spoluzakladatel brněnského Strange Training, kde se potkává silový trénink, fyzioterapie, výživa a vzdělávání. Profesně vyrostl v gymu a na hřišti amerického fotbalu, ne v boardroomech. Věří, že nedostatek je nejcennější učitel: naučí tě prioritizovat, měřit a dělat věci jednoduše – ale pořád pořádně a s velkou dávkou zapálení.',
    keynote: '"Nemáte na to." A proč je to to nejlepší, co můžeš slyšet.',
    annotation: 'Když začínáš, chybí ti všechno — zkušenosti, peníze, kontakty, expertíza. A přesně to tě naučí přemýšlet jinak. Ondřej Kubák, kondiční trenér a spoluzakladatel Strange Training, v přednášce rozebere, jak z „nedostatku" udělat výhodu, jak z chyb vytáhnout lekce a proč je lepší začít teď a nečekat na ten správný moment!',
    isWorkshop: false
  },
  {
    id: 'tereza-hruskova',
    imageUrl: '/images/speakers/tereza-hruskova.jpg',
    name: 'Tereza Hrušková',
    description: 'Psycholožka, lektorka a psychoterapeutka KBT',
    bio: 'Psycholožka, lektorka a psychoterapeutka KBT (kognitivně-behaviorální terapie). Skrze projekt KPsychologovi pomáhá lidem na cestě za psychologem a psychoterapeutem. Stojí za zrodem online programů #nekaslinasebe, emočního fitka a knížky Nekašli na sebe: Tvůj parťák na cestě s emocemi, které pomáhají zorientovat se nejen v sobě, ale i ve svých emocích. Razí #nekaslinasebe v rámci konzistentního staráním se o sebe na www.nekaslinasebe.kpsychologovi.cz. Učí o emocích a destigmatizuje návštěvu psychologa, a to i výzkumně, v rámci svého doktorského studia.',
    keynote: 'Hasíš nebo jedeš udržitelně?',
    annotation: 'Tlak na výkon, hustle culture, perfekcionismus a cíl něčeho v podnikání opravdu dosáhnout. Každý z nás chceme zazářit a být úspěšní v tom, co děláme. Na tom se asi shodneme. Někdy ale můžou přijít náročnější situace či období, kdy o sobě pochybujeme, nedaří se nám nebo nevíme, co se sebou. Náš vnitřní kritik přebírá otěže. Laskavost a starost o sebe jde stranou. Overthinking, imposter syndrom a porovnávání se s ostatními ovlivňuje naše fyzické i duševní zdraví. Jak si ho při podnikaní udržet a jen nehasit? Jak jet dlouhodobě udržitelně a opravdu se o sebe konzistentně starat? To vše si společně rozebereme a ukážeme na příkladech z praxe a konkrétních tipech #nekaslinasebe, jak pracovat se svými emocemi a myšlenkami.',
    isWorkshop: false
  },
  {
    id: 'jiri-kratochvil',
    imageUrl: '/images/speakers/jiri-kratochvil.jpg',
    name: 'Jiří Kratochvíl',
    description: 'Moderátor konferencí a firemních podcastů, vedoucí B2B komunikační agentury DIGITAAL',
    bio: 'Moderuji konference a firemní podcasty, kde čerpám z 21 let zkušeností v marketingu. Vedu B2B komunikační agenturu DIGITAAL a (spolu)organizuji nejnašlapanější people & culture show v Česko-Slovensku - HRko, kam letos přijelo na 1100 účastníků z celého Česka a přes 100 řečníků.',
    keynote: 'Od talentu k flow',
    annotation: 'Každý z nás má jedinečný soubor silných stránek – jen je často nevyužíváme naplno. V této přednášce vám ukážu, jak s nimi pracovat podle metodiky Gallup tak, abyste se dostali do flow, dělali práci, která vás baví, a přitom dosahovali svých cílů. Objevíte, že když využíváte své talenty vědomě, práce přestává být povinností a stává se přirozenou součástí toho, kým jste.',
    isWorkshop: false
  },
  {
    id: 'simon-bellovic',
    imageUrl: '/images/speakers/simon-bellovic.jpg',
    name: 'Šimon Bellovič',
    description: 'Zakladatel značky Vitruvio, expert na energy management a prevenci vyhoření',
    bio: 'Šimon Bellovič provází lidi, kteří chtějí lépe zvládat nároky moderní doby, vztahů a zodpovědnosti bez toho, aby jim obětovali zdraví nebo chuť do života. Jednotlivce i týmy už provádí téměř 18 let – od sportovců a klientů v posilovně, přes manažery až po celé firmy. Dnes se zaměřuje především na budování kapacity, energy management a prevenci vyhoření: pomáhá lidem pochopit, kolik toho jejich systém skutečně unese, kde jim kapacita utíká a jak si budovat dlouhodobě udržitelné návyky. Ve firmách i v individuální práci spojuje práci s tělem, nervovou soustavou a mindsetem do jednoho praktického systému. Místo instantních „hacků" pomáhá zavádět rituály, řád a flexibilitu. Je zakladatelem značky Vitruvio a projektů zaměřených na mužskou a partnerskou tématiku, kde svoje know-how převádí do programů, workshopů a roční transformační cesty. Jeho cílem nejsou supervýkony za každou cenu, ale život, který naplňuje i nese výsledky.',
    keynote: 'Nevzdávat to, nebo to vzdát včas. Životní lekce, které nesou ovoce i v podnikání.',
    annotation: 'Co se stane, když to příliš dlouho „nevzdáváme" – a kde naopak držení zuby nehty ničí zdraví, vztahy i byznys? Budu sdílet příběh svého podnikání, ve kterém se snažím rozlišit zdravou vytrvalost od sebeničení, pracovat se svou kapacitou a rozhodností včas ukončovat projekty, role nebo způsoby, které už neslouží.',
    isWorkshop: true
  },
  {
    id: 'nikola-katolicka',
    imageUrl: '/images/speakers/nikola-katolicka.jpg',
    name: 'Nikola Katolická',
    description: 'Moderátorka sportovních, firemních a společenských akcí',
    bio: 'Nikola je moderátorka, kterou baví posouvat své limity. Na střední se bála prezentací, dnes ji mluvení před lidmi živí. Co se změnilo? Začala si věřit — hlavně díky cestování a studiu v Rakousku a Thajsku. Dnes moderuje česky, anglicky i německy sportovní, firemní i společenské akce. Vidět jste ji mohli třeba na hokejovém MS žen, florbalovém superfinále v O2 aréně nebo na sociálních sítích hokejové extraligy. Střihla si ale i několik akcí v zahraničí — zatím nejdál ji moderování zavedlo do italských Benátek.',
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/nikca.katolicka/' },
      { type: 'linkedin', url: 'https://cz.linkedin.com/in/nikolakatolicka' },
      { type: 'web', url: 'http://nkatolicka.cz' }
    ],
    isWorkshop: false
  }
];
