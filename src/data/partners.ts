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
    description: '',
    logo: '/images/partners/motmot.jpg',
    website: 'https://motmot.cz',
    category: 'sponzor'
  },
  {
    id: 'cans',
    name: 'CANS',
    description: '',
    logo: '/images/partners/cans.jpg',
    website: 'https://cz.cans.com/',
    category: 'sponzor'
  },
  {
    id: 'vinarstvi-valka',
    name: 'Vinařství Válka',
    description: '',
    logo: '/images/partners/vinarstvi-valka.jpg',
    website: 'https://vinarstvivalka.cz/',
    category: 'sponzor'
  },
  {
    id: 'yeahrba',
    name: 'YEAHRBA',
    description: '',
    logo: '/images/partners/yeahrba.jpg',
    website: 'https://yeahrba.cz/',
    category: 'sponzor'
  },
  {
    id: 'euroko',
    name: 'EUROKO',
    description: '',
    logo: '/images/partners/euroko.jpg',
    website: 'https://www.euroko.eu/',
    category: 'sponzor'
  },
  {
    id: 'little-saigon',
    name: 'LITTLE SAIGON',
    description: '',
    logo: '/images/partners/little-saigon.jpg',
    website: 'https://littlesaigon.cz/',
    category: 'sponzor'
  },
  {
    id: 'red-bull',
    name: 'RED BULL',
    description: '',
    logo: '/images/partners/redbull.jpg',
    website: 'https://www.redbull.com/cz-cs',
    category: 'sponzor'
  },
  {
    id: 'ofigo',
    name: 'Ofigo',
    description: '',
    logo: '/images/partners/ofigo.jpg',
    website: 'https://www.ofigo.cz/',
    category: 'sponzor'
  },
  {
    id: 'motivp',
    name: 'MotivP',
    description: '',
    logo: '/images/partners/motivp.jpg',
    website: 'https://www.motivp.cz/',
    category: 'sponzor'
  },
  {
    id: 'ammi',
    name: 'AMMI',
    description: '',
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

