import { CalendarEvent } from '@/types/event'

export const events: CalendarEvent[] = [
  {
    id: '1',
    title: 'Zahájení konference',
    type: 'other',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 20),
    speaker: '',
    location: 'Hlavní sál',
    description: ''
  },
  {
    id: '2',
    title: 'Od startupů po kavárnu: Jak si najít vlastní cestu v podnikání',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 40),
    speaker: 'Jasmína Henni',
    location: 'Hlavní sál',
    description: 'Úspěch znamená pro každého něco jiného – a stejně tak i podnikání. Někdo sní o rychle rostoucím startupu s globálním dopadem, jiný o tvůrčí svobodě a flexibilním životním stylu, další zase o produktu, na který si může sáhnout. A někdo možná zjistí, že podnikání vůbec není jeho cesta.'
  },
  {
    id: '3',
    title: 'Pár věcí, které bych před 10 lety potřeboval vědět',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 13, 40),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 0),
    speaker: 'Karel Dytrych',
    location: 'Hlavní sál',
    description: 'Za dekádu budování Freela jsme udělali tisíce rozhodnutí. Některá byla skvělá, jiná katastrofální. Pojďte se podívat na naše největší lekce – úspěchy i průšvihy – abyste se mohli poučit z našich chyb a inspirovat našimi úspěchy.'
  },
  {
    id: '4',
    title: 'Jak podnikat se společenským přesahem',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 20),
    speaker: 'Marie Froulíková',
    location: 'Hlavní sál',
    description: 'Svět se zrychluje a pracovní trh se mění – vznikají nové profese, staré zanikají. Už neplatí, že se budeš živit tím, co jsi vystudoval/a. Klíčové jsou tvé skills, na kterých budeš pracovat celý život. Z průzkumů vyplývá, že čím dál tím více mladých lidí upřednostňuje práci se společenským dopadem. Jednou z takových cest může být i rozjezd vlastního podnikání - sociálního podnikání. Jde podnikat s dopadem a měnit svět kolem sebe? ANO, rozhodně - přijď se dozvědět více.'
  },
  {
    id: '5',
    title: 'Coffee break',
    type: 'other',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 40),
    speaker: '',
    location: 'Hlavní sál',
    description: ''
  },
  {
    id: '6',
    title: 'Cesta ke svobodě? Podnikání na volné noze.',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 40),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 0),
    speaker: 'Boris Vanka',
    location: 'Hlavní sál',
    description: 'Chceš podnikat, ale nevíš, kde začít? Společně s Borisem se podíváš na to, jak rozjet vlastní byznys s minimálním rizikem, po malých krůčcích a s větší udržitelností. Freelancing (česky "volná noha") přínáší svobodu ve výběru projektů, specializaci, místa práce i režimu, který ti sedí nejvíc. Zároveň ale vyžaduje zodpovědnost vůči klientům, přehled ve financích a zvládnutý time management. Objevíš základy podnikání s malou vstupní bariérou, velkými možnostmi a šancí dělat práci, která tě opravdu baví. Všechno přímo z praxe – od zkušeného volnonožce.'
  },
  {
    id: '7',
    title: 'Hasíš nebo jedeš udržitelně?',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 20),
    speaker: 'Tereza Hrušková',
    location: 'Hlavní sál',
    description: 'Tlak na výkon, hustle culture, perfekcionismus a cíl něčeho v podnikání opravdu dosáhnout. Každý z nás chceme zazářit a být úspěšní v tom, co děláme. Na tom se asi shodneme. Někdy ale můžou přijít náročnější situace či období, kdy o sobě pochybujeme, nedaří se nám nebo nevíme, co se sebou. Náš vnitřní kritik přebírá otěže. Laskavost a starost o sebe jde stranou. Overthinking, imposter syndrom a porovnávání se s ostatními ovlivňuje naše fyzické i duševní zdraví. Jak si ho při podnikaní udržet a jen nehasit? Jak jet dlouhodobě udržitelně a opravdu se o sebe konzistentně starat? To vše si společně rozebereme a ukážeme na příkladech z praxe a konkrétních tipech #nekaslinasebe, jak pracovat se svými emocemi a myšlenkami.'
  },
  {
    id: '8',
    title: 'Mindset jako konkurenční výhoda',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 40),
    speaker: 'Martin Šafařík',
    location: 'Hlavní sál',
    description: 'Žijeme v exponenciální době a pokud si můžeme být něčím jistí, tak tím, že změn kolem nás bude stále víc a budou přicházet čím dál rychleji. Co když jedna z odpovědí, jak být v tomto světě úspěšní, neleží venku, ale uvnitř nás v našem nastavení mysli?\n\nV této přednášce se podíváme na koncept růstového nastavení mysli (growth mindset). Podívám se na přístup, který nám pomáhá učit se z výzev, převzít zodpovědnost za vlastní situaci a nebát se selhání. Umožňuje nám uvěřit, že naučit se dá cokoliv. Na konkrétních příkladech z praxe i osobního života si zároveň ukážeme, že nikdo z nás není jen „růstový" nebo „fixní". Jde hlavně o cestu, jak zvýšit procento situací, ve kterých zvládneme reagovat růstově.'
  },
  {
    id: '9',
    title: 'Od talentu k flow',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 40),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 0),
    speaker: 'Jiří Kratochvíl',
    location: 'Hlavní sál',
    description: 'Každý z nás má jedinečný soubor silných stránek – jen je často nevyužíváme naplno. V této přednášce vám ukážu, jak s nimi pracovat podle metodiky Gallup tak, abyste se dostali do flow, dělali práci, která vás baví, a přitom dosahovali svých cílů. Objevíte, že když využíváte své talenty vědomě, práce přestává být povinností a stává se přirozenou součástí toho, kým jste.'
  },
  {
    id: '10',
    title: 'Coffee break',
    type: 'other',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 20),
    speaker: '',
    location: 'Hlavní sál',
    description: ''
  },
  {
    id: '11',
    title: 'Nevzdávat to, nebo to vzdát včas. Životní lekce, které nesou ovoce i v podnikání.',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 40),
    speaker: 'Šimon Bellovič',
    location: 'Hlavní sál',
    description: 'Co se stane, když to příliš dlouho „nevzdáváme" – a kde naopak držení zuby nehty ničí zdraví, vztahy i byznys? Budu sdílet příběh svého podnikání, ve kterém se snažím rozlišit zdravou vytrvalost od sebeničení, pracovat se svou kapacitou a rozhodností včas ukončovat projekty, role nebo způsoby, které už neslouží.'
  },
  {
    id: '12',
    title: 'Jak se stát a zůstat podnikatelem',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 40),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 0),
    speaker: 'Kateřina Ferbyová',
    location: 'Hlavní sál',
    description: 'Podnikatelem tělem i duší se člověk nestává schůzkou na živnostenském úřadě. Podnikatelem se člověk stává postupně, odolávajíc neustálým změnám a těžkostem. Zajedeme na hlubinu toho, jak tenhle růst vypadá v praxi.'
  },
  {
    id: '13',
    title: '"Nemáte na to." A proč je to to nejlepší, co můžeš slyšet.',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 20),
    speaker: 'Ondřej Kubák',
    location: 'Hlavní sál',
    description: 'Když začínáš, chybí ti všechno — zkušenosti, peníze, kontakty, expertíza. A přesně to tě naučí přemýšlet jinak. Ondřej Kubák, kondiční trenér a spoluzakladatel Strange Training, v přednášce rozebere, jak z „nedostatku" udělat výhodu, jak z chyb vytáhnout lekce a proč je lepší začít teď a nečekat na ten správný moment!'
  },
  {
    id: '14',
    title: 'Zatím ne!',
    type: 'lecture',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 20),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 40),
    speaker: 'Dalibor Pulkert',
    location: 'Hlavní sál',
    description: 'Chcete něco začít dělat, ale tak nějak se na něco čeká? Ještě nejsem úplně ready. Čekám na ten pravý nápad. Potřebuju do toho parťáka. Teď asi není ten správný čas, ještě musím to či ono... Prostě to rozjedeme, ale ještě ne. Teď ne. Jak z tohohle začarovaného kruhu ven? Jak tohle rozseknout? O tom si popovídáme společně. :)'
  },
  {
    id: '15',
    title: 'Závěr konference',
    type: 'other',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 40),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 0),
    speaker: '',
    location: 'Hlavní sál',
    description: ''
  },
  {
    id: '16',
    title: 'Ten nejdůležitější krok k větší kapacitě.',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 14, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 15, 0),
    speaker: 'Šimon Bellovič',
    location: 'Workshop Block I.',
    description: 'Co se stane, když to příliš dlouho „nevzdáváme" – a kde naopak držení zuby nehty ničí zdraví, vztahy i byznys? Budu sdílet příběh svého podnikání, ve kterém se snažím rozlišit zdravou vytrvalost od sebeničení, pracovat se svou kapacitou a rozhodností včas ukončovat projekty, role nebo způsoby, které už neslouží.'
  },
  {
    id: '17',
    title: 'Prohlídka Clubca',
    type: 'other',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 0),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 30),
    speaker: '',
    location: 'Clubco',
    description: 'Přidejte se na prohlídku prostor coworkingového centra Clubco.'
  },

  {
    id: '18',
    title: 'Networking',
    type: 'networking',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 18, 30),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 21, 0),
    speaker: '',
    location: 'Hlavní sál',
    description: 'Networkujte s ostatními účastníky.'
  },
  {
    id: '19',
    title: 'Jak zvládnout začátek podnikání aneb peníze nejsou zdaleka jediný problém',
    type: 'workshop',
    start: new Date(2024, new Date().getMonth(), new Date().getDate(), 16, 10),
    end: new Date(2024, new Date().getMonth(), new Date().getDate(), 17, 10),
    speaker: 'Petr Brothánek',
    location: 'Workshop Block I.',
    description: 'Smyslem a účelem tohoto workshopu bude především ukázat, co kromě peněz je k rozjezdu podnikání potřeba, na co se mají připravit a co si ujasnit. Přednáška bude vedena hravou formou, aby si účastníci v rámci simulací a příkladů mohli některé věci vyzkoušet a mohli jsme si ukázat nejpodstatnější pilíř rozjezdu podnikání, bez kterého je velmi těžké uspět. Žádný nudný výklad či pouhá prezentace, ale jedna velká simulace se sladkými odměnami.'
  },
]
