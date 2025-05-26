import { stockPhotos } from "./stockPhotos";

export interface Attraction {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  images: string[];
  icon: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  pricing: {
    base: number;
    currency: string;
    period: string;
  };
}

export const attractions: Attraction[] = [
  {
    id: "namioty-imprezowe",
    name: "Namioty Imprezowe",
    category: "namioty",
    description: "Profesjonalne namioty imprezowe w różnych rozmiarach, idealne na wesela, urodziny, eventy firmowe i inne okazje. Nasze namioty są wykonane z wysokiej jakości materiałów, odpornych na warunki atmosferyczne. Zapewniamy pełny serwis montażu i demontażu.",
    shortDescription: "Profesjonalne namioty imprezowe w różnych rozmiarach. Idealne na wesela, urodziny i eventy firmowe.",
    images: stockPhotos.partyTents,
    icon: "fas fa-campground",
    features: [
      "Różne rozmiary dostępne",
      "Odporne na warunki atmosferyczne",
      "Profesjonalny montaż i demontaż",
      "Możliwość dodania podłogi",
      "Oświetlenie LED",
      "Dekoracje ślubne i eventowe"
    ],
    specifications: {
      "Rozmiary": "5x10m, 6x12m, 8x15m, 10x20m",
      "Materiał": "PVC 650g/m²",
      "Wysokość": "2.5m - 3.5m",
      "Montaż": "2-4 godziny",
      "Pojemność": "50-200 osób"
    },
    pricing: {
      base: 350,
      currency: "zł",
      period: "1 dzień"
    }
  },
  {
    id: "dmuchane-atrakcje",
    name: "Dmuchane Atrakcje",
    category: "dmuchance",
    description: "Kolorowe zjeżdżalnie, zamki dmuchane i place zabaw dla dzieci. Nasze atrakcje są bezpieczne, regularnie serwisowane i posiadają wszystkie wymagane certyfikaty. Gwarantujemy radość i bezpieczną zabawę dla dzieci w każdym wieku.",
    shortDescription: "Zjeżdżalnie, zamki dmuchane i place zabaw. Gwarantowana radość dla dzieci w każdym wieku!",
    images: stockPhotos.inflatableCastles,
    icon: "fas fa-castle",
    features: [
      "Certyfikowane i bezpieczne",
      "Różne motywy i rozmiary",
      "Obsługa podczas eventu",
      "Ubezpieczenie OC",
      "Agregat prądotwórczy w zestawie",
      "Maty ochronne"
    ],
    specifications: {
      "Wiek dzieci": "3-12 lat",
      "Wymiary": "4x4m - 8x6m",
      "Wysokość": "3-5 metrów",
      "Pojemność": "8-15 dzieci jednocześnie",
      "Zasilanie": "230V/16A"
    },
    pricing: {
      base: 250,
      currency: "zł",
      period: "1 dzień"
    }
  },
  {
    id: "wata-cukrowa",
    name: "Wata Cukrowa",
    category: "gastro",
    description: "Profesjonalne maszyny do waty cukrowej z kolorowymi smakami i aromatami. Nasza wata cukrowa to nie tylko słodka przekąska, ale także atrakcja wizualna, która zachwyci gości w każdym wieku. Oferujemy różne smaki i kolory.",
    shortDescription: "Profesjonalne maszyny do waty cukrowej z kolorowymi smakami. Słodka atrakcja dla gości!",
    images: stockPhotos.cottonCandyMachine,
    icon: "fas fa-candy-cane",
    features: [
      "Różne smaki i kolory",
      "Profesjonalna obsługa",
      "Higieniczne opakowania",
      "Atrakcja wizualna",
      "Szybka produkcja",
      "Ekologiczne cukry"
    ],
    specifications: {
      "Smaki": "Truskawka, wanilia, malina, jabłko",
      "Kolory": "Różowy, niebieski, żółty, zielony",
      "Wydajność": "100-150 porcji/godzinę",
      "Zasilanie": "230V",
      "Obsługa": "Operator w zestawie"
    },
    pricing: {
      base: 150,
      currency: "zł",
      period: "1 dzień"
    }
  },
  {
    id: "popcorn",
    name: "Popcorn",
    category: "gastro",
    description: "Maszyny do popcornu w stylu retro, które dodają wyjątkowego charakteru każdemu eventowi. Świeży, aromatyczny popcorn przygotowywany na żywo podczas imprezy. Dostępne różne smaki - słony, słodki, karmelowy.",
    shortDescription: "Maszyny do popcornu w stylu retro. Świeży, aromatyczny popcorn na Twoim evencie.",
    images: stockPhotos.popcornMachine,
    icon: "fas fa-seedling",
    features: [
      "Maszyny w stylu retro",
      "Świeży popcorn na żywo",
      "Różne smaki dostępne",
      "Atrakcyjne opakowania",
      "Profesjonalna obsługa",
      "Higiena i jakość"
    ],
    specifications: {
      "Smaki": "Słony, słodki, karmelowy, serowy",
      "Wydajność": "200 porcji/godzinę",
      "Typ maszyny": "Retro cart",
      "Zasilanie": "230V",
      "Opakowania": "Papierowe torby i pudełka"
    },
    pricing: {
      base: 180,
      currency: "zł",
      period: "1 dzień"
    }
  },
  {
    id: "fontanny-czekoladowe",
    name: "Fontanny Czekoladowe",
    category: "gastro",
    description: "Eleganckie fontanny czekoladowe z różnymi rodzajami czekolady - mleczna, gorzka, biała. W zestawie świeże owoce, ciasteczka i inne dodatki do maczania. Idealne na wesela, bankiety i eleganckie przyjęcia.",
    shortDescription: "Eleganckie fontanny czekoladowe z dodatkami. Wykwintna atrakcja dla prawdziwych smakoszy.",
    images: stockPhotos.chocolateFountain,
    icon: "fas fa-birthday-cake",
    features: [
      "Różne rodzaje czekolady",
      "Świeże owoce w zestawie",
      "Elegancka prezentacja",
      "Profesjonalna obsługa",
      "Higiena i bezpieczeństwo",
      "Dodatki do maczania"
    ],
    specifications: {
      "Rodzaje czekolady": "Mleczna, gorzka, biała",
      "Wysokość fontanny": "60-80 cm",
      "Pojemność": "3-5 kg czekolady",
      "Dodatki": "Owoce, ciasteczka, marshmallows",
      "Obsługa": "Kelner w zestawie"
    },
    pricing: {
      base: 200,
      currency: "zł",
      period: "1 dzień"
    }
  },
  {
    id: "kompleksowa-obsluga",
    name: "Kompleksowa Obsługa Eventów",
    category: "kompleksowa",
    description: "Pełna organizacja eventów z naszym doświadczonym zespołem. Od planowania i projektowania, przez organizację przestrzeni, aż po pełną obsługę podczas imprezy. Zajmujemy się wszystkim, abyś mógł cieszyć się swoim eventem.",
    shortDescription: "Pełna organizacja eventów z naszym doświadczonym zespołem. Od planowania po realizację.",
    images: stockPhotos.eventSetup,
    icon: "fas fa-users",
    features: [
      "Konsultacja i planowanie",
      "Projekt aranżacji przestrzeni",
      "Koordynacja dostaw",
      "Montaż i demontaż",
      "Obsługa podczas eventu",
      "Ubezpieczenie kompleksowe"
    ],
    specifications: {
      "Doświadczenie": "Ponad 5 lat",
      "Zespół": "Profesjonalni organizatorzy",
      "Obszar": "Radom i okolice 50km",
      "Rodzaje eventów": "Wesela, urodziny, eventy firmowe",
      "Czas realizacji": "2-8 godzin"
    },
    pricing: {
      base: 500,
      currency: "zł",
      period: "event"
    }
  }
];

export const getAttractionsByCategory = (category: string): Attraction[] => {
  return attractions.filter(attraction => attraction.category === category);
};

export const getAttractionById = (id: string): Attraction | undefined => {
  return attractions.find(attraction => attraction.id === id);
};
