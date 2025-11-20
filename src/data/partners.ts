export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  category: 'generalni_partner' | 'cestny_partner' | 'medialni_partner' | 'sponzor';
}

export const partners: Partner[] = [
  // Generální partner
  {
    id: 'ctp',
    name: 'CTP',
    description: 'Společnost CTP je předním developerem a správcem průmyslových, logistických nemovitostí v České republice a Evropě. Do jejího portfolia patří také prémiové office parky Spielberk, Ponávka a Vlněna, coworkingový prostor Clubco, ubytovací komplexy Domeq, a také Hotel Courtyard by Marriott Brno včetně exkluzivní brněnské scény Jazzmin Bar & Dining. CTP aktivně spolupracuje s městy, regionálními organizacemi a univerzitami na rozvoji mladých talentů a podpoře místních aktivit a projektů. Příkladem je revitalizace starých průmyslových zón, jako jsou například areály Vlněna, Ponávka a bývalý Zetor v CTParku Brno-Líšeň.',
    logo: '/images/partners/ctp.jpg',
    website: 'https://ctp.eu',
    category: 'generalni_partner'
  },
  // Čestný partner
  {
    id: 'jic',
    name: 'JIC',
    description: 'Jsme inovační agentura, kterou v roce 2003 založilo město Brno společně s Jihomoravským krajem a brněnskými univerzitami. Už více než 20 let tvoříme globálně úspěšné firmy a aktivně se staráme o inovační ekosystém. Věříme, že rozvoj podnikání s vysokou přidanou hodnotou posiluje ekonomickou stabilitu Evropy a je jedním z nejefektivnějších řešení globálních výzev.',
    logo: '/images/partners/jic.jpg',
    website: 'https://www.jic.cz/cz/',
    category: 'cestny_partner'
  },
  // Sponzoři
  {
    id: 'motmot',
    name: 'MOTMOT',
    description: 'MOTMOT je moderní značka přinášející kvalitní produkty a služby.',
    logo: '/images/partners/motmot.jpg',
    website: 'https://motmot.cz',
    category: 'sponzor'
  },
  {
    id: 'cans',
    name: 'CANS',
    description: 'CANS je společnost zaměřená na inovativní řešení.',
    logo: '/images/partners/cans.jpg',
    website: 'https://cz.cans.com/',
    category: 'sponzor'
  },
  {
    id: 'vinarstvi-valka',
    name: 'Vinařství Válka',
    description: 'Rodinné vinařství s tradicí a kvalitou.',
    logo: '/images/partners/vinarstvi-valka.jpg',
    website: 'https://vinarstvivalka.cz/',
    category: 'sponzor'
  },
  {
    id: 'yeahrba',
    name: 'YEAHRBA',
    description: 'YEAHRBA - moderní řešení pro váš byznys.',
    logo: '/images/partners/yeahrba.jpg',
    website: 'https://yeahrba.cz/',
    category: 'sponzor'
  },
  {
    id: 'euroko',
    name: 'EUROKO',
    description: 'EUROKO je evropský lídr ve svém oboru.',
    logo: '/images/partners/euroko.jpg',
    website: 'https://www.euroko.eu/',
    category: 'sponzor'
  },
  {
    id: 'little-saigon',
    name: 'LITTLE SAIGON',
    description: 'Autentická vietnamská kuchyně v srdci Brna.',
    logo: '/images/partners/little-saigon.jpg',
    website: 'https://littlesaigon.cz/',
    category: 'sponzor'
  },
  {
    id: 'red-bull',
    name: 'RED BULL',
    description: 'Red Bull - dodává ti křídla.',
    logo: '/images/partners/red-bull.jpg',
    website: 'https://www.redbull.com/cz-cs',
    category: 'sponzor'
  },
  {
    id: 'ofigo',
    name: 'Ofigo',
    description: 'Ofigo - váš partner pro inspirativní literaturu.',
    logo: '/images/partners/ofigo.jpg',
    website: 'https://www.ofigo.cz/',
    category: 'sponzor'
  },
  {
    id: 'motivp',
    name: 'MotivP',
    description: 'MotivP - motivace a osobní rozvoj.',
    logo: '/images/partners/motivp.jpg',
    website: 'https://www.motivp.cz/',
    category: 'sponzor'
  },
  {
    id: 'ammi',
    name: 'AMMI',
    description: 'AMMI - váš spolehlivý partner.',
    logo: '/images/partners/ammi.jpg',
    website: 'https://ammi.cz/',
    category: 'sponzor'
  },
];

export const getCategoryLabel = (category: Partner['category']): string => {
  const labels = {
    generalni_partner: 'Generální partner',
    cestny_partner: 'Čestný partner',
    medialni_partner: 'Mediální partneři',
    sponzor: 'Sponzoři'
  };
  return labels[category];
};

export const getPartnersByCategory = (category: Partner['category']): Partner[] => {
  return partners.filter(p => p.category === category);
};

