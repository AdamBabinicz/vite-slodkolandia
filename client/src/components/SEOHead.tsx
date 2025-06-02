import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import {
  PAGE_KEYS,
  defaultLang,
  supportedLngs,
  Language,
  PageKey,
  getLocalizedSlug,
  getLocalizedPath,
  findPageKeyByLocalizedPath,
} from "@/config/paths";

export const SLODKOLANDIA_BASE_URL =
  "https://www.twoja-nowa-domena-slodkolandia.pl";

interface PageSEOMetaValues {
  title: string;
  description: string;
  ogImage?: string;
}

const pageSpecificSEOMeta: Record<
  PageKey,
  Partial<Record<Language, PageSEOMetaValues>>
> = {
  [PAGE_KEYS.HOME]: {
    pl: {
      title:
        "SŁODKOLANDIA - Atrakcje Eventowe, Wynajem Sprzętu Imprezowego | Radom",
      description:
        "Wynajem namiotów imprezowych, zjeżdżalni, zamków dmuchanych. Obsługa waty cukrowej, popcornu, fontann czekoladowych. Radom i okolice.",
      ogImage: "/images/og-slodkolandia-home.png",
    },
    en: {
      title: "SLODKOLANDIA - Event Attractions, Party Equipment Rental | Radom",
      description:
        "Party tent rental, slides, bouncy castles. Cotton candy, popcorn, chocolate fountain services. Radom and surroundings.",
      ogImage: "/images/og-slodkolandia-home.png",
    },
  },
  [PAGE_KEYS.OFFER]: {
    pl: {
      title: "Oferta Atrakcji Imprezowych - SŁODKOLANDIA | Radom",
      description:
        "Poznaj naszą ofertę wynajmu namiotów, dmuchańców, urządzeń gastronomicznych i więcej. Idealne na każdą imprezę w Radomiu.",
      ogImage: "/images/og-slodkolandia-oferta.png",
    },
    en: {
      title: "Event Attractions Offer - SLODKOLANDIA | Radom",
      description:
        "Discover our offer of tents, inflatables, catering equipment, and more. Perfect for any event in Radom.",
      ogImage: "/images/og-slodkolandia-oferta.png",
    },
  },
  [PAGE_KEYS.GALLERY]: {
    pl: {
      title: "Galeria Zdjęć - SŁODKOLANDIA Atrakcje | Radom",
      description:
        "Zobacz zdjęcia z naszych realizacji i eventów. Namioty, dmuchańce, wata cukrowa i uśmiechy dzieci w Radomiu.",
      ogImage: "/images/og-slodkolandia-galeria.png",
    },
    en: {
      title: "Photo Gallery - SLODKOLANDIA Attractions | Radom",
      description:
        "See photos from our events. Tents, inflatables, cotton candy, and happy children in Radom.",
      ogImage: "/images/og-slodkolandia-galeria.png",
    },
  },
  [PAGE_KEYS.CONTACT]: {
    pl: {
      title: "Kontakt - SŁODKOLANDIA | Wynajem Atrakcji Radom",
      description:
        "Skontaktuj się z nami, aby wynająć atrakcje na Twoją imprezę. Szybka wycena i profesjonalna obsługa w Radomiu.",
      ogImage: "/images/og-slodkolandia-kontakt.png",
    },
    en: {
      title: "Contact - SLODKOLANDIA | Attraction Rental Radom",
      description:
        "Contact us to rent attractions for your event. Quick quote and professional service in Radom.",
      ogImage: "/images/og-slodkolandia-kontakt.png",
    },
  },
  [PAGE_KEYS.PRICING]: {
    pl: {
      title: "Cennik Usług - SŁODKOLANDIA Atrakcje Imprezowe | Radom",
      description:
        "Sprawdź nasz cennik wynajmu namiotów, dmuchańców i innych atrakcji. Konkurencyjne ceny w Radomiu.",
      ogImage: "/images/og-slodkolandia-cennik.png",
    },
    en: {
      title: "Service Pricing - SLODKOLANDIA Event Attractions | Radom",
      description:
        "Check our price list for renting tents, inflatables, and other attractions. Competitive prices in Radom.",
      ogImage: "/images/og-slodkolandia-cennik.png",
    },
  },
  [PAGE_KEYS.ABOUT]: {
    pl: {
      title: "O Nas - SŁODKOLANDIA | Pasja do Eventów w Radomiu",
      description:
        "Dowiedz się więcej o SŁODKOLANDII, naszej misji i doświadczeniu w organizacji niezapomnianych imprez w Radomiu.",
      ogImage: "/images/og-slodkolandia-o-nas.png",
    },
    en: {
      title: "About Us - SLODKOLANDIA | Passion for Events in Radom",
      description:
        "Learn more about SLODKOLANDIA, our mission, and experience in organizing unforgettable events in Radom.",
      ogImage: "/images/og-slodkolandia-o-nas.png",
    },
  },
  [PAGE_KEYS.TERMS]: {
    pl: {
      title: "Regulamin Świadczenia Usług - SŁODKOLANDIA",
      description:
        "Zapoznaj się z regulaminem świadczenia usług przez SŁODKOLANDIA.",
      ogImage: "/images/og-slodkolandia-regulamin.png",
    },
    en: {
      title: "Terms of Service - SLODKOLANDIA",
      description: "Please read the terms of service provided by SLODKOLANDIA.",
      ogImage: "/images/og-slodkolandia-regulamin.png",
    },
  },
  [PAGE_KEYS.PRIVACY_POLICY]: {
    pl: {
      title: "Polityka Prywatności - SŁODKOLANDIA",
      description:
        "Informacje na temat przetwarzania danych osobowych przez SŁODKOLANDIA.",
      ogImage: "/images/og-slodkolandia-polityka.png",
    },
    en: {
      title: "Privacy Policy - SLODKOLANDIA",
      description:
        "Information on the processing of personal data by SLODKOLANDIA.",
      ogImage: "/images/og-slodkolandia-polityka.png",
    },
  },
  [PAGE_KEYS.NOT_FOUND]: {
    pl: {
      title: "Strona Nie Znaleziona (404) - SŁODKOLANDIA",
      description: "Przepraszamy, strona której szukasz nie istnieje.",
      ogImage: "/images/og-slodkolandia-404.png",
    },
    en: {
      title: "Page Not Found (404) - SLODKOLANDIA",
      description: "Sorry, the page you are looking for does not exist.",
      ogImage: "/images/og-slodkolandia-404.png",
    },
  },
  [PAGE_KEYS.OFFER_TENTS]: {
    pl: {
      title: "Wynajem Namiotów Imprezowych - SŁODKOLANDIA | Radom",
      description:
        "Oferujemy wynajem solidnych namiotów imprezowych na każdą okazję w Radomiu. Różne rozmiary dostępne.",
      ogImage: "/images/og-slodkolandia-namioty.png",
    },
    en: {
      title: "Party Tent Rental - SLODKOLANDIA | Radom",
      description:
        "We offer rental of sturdy party tents for every occasion in Radom. Various sizes available.",
      ogImage: "/images/og-slodkolandia-namioty.png",
    },
  },
  [PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS]: {
    pl: {
      title: "Stoły, Krzesła, Obrusy - Wynajem | Słodkolandia Radom",
      description:
        "Kompleksowy wynajem stołów, krzeseł i obrusów na imprezy w Radomiu.",
    },
    en: {
      title: "Tables, Chairs, Linens - Rental | Słodkolandia Radom",
      description:
        "Comprehensive rental of tables, chairs, and linens for events in Radom.",
    },
  },
  [PAGE_KEYS.OFFER_INFLATABLES]: {
    pl: {
      title: "Dmuchance na Wynajem - Zamki, Zjeżdżalnie | Słodkolandia Radom",
      description:
        "Super dmuchance dla dzieci – zamki dmuchane i zjeżdżalnie na wynajem. Radom i okolice.",
    },
    en: {
      title: "Inflatables for Rent - Castles, Slides | Słodkolandia Radom",
      description:
        "Awesome inflatables for kids - bouncy castles and slides for rent. Radom and surroundings.",
    },
  },
  [PAGE_KEYS.OFFER_POPCORN]: {
    pl: {
      title: "Maszyna do Popcornu na Wynajem | Słodkolandia Radom",
      description:
        "Wynajmij profesjonalną maszynę do popcornu z obsługą na swoją imprezę. Radom.",
    },
    en: {
      title: "Popcorn Machine for Rent | Słodkolandia Radom",
      description:
        "Rent a professional popcorn machine with service for your event. Radom.",
    },
  },
  [PAGE_KEYS.OFFER_COTTON_CANDY]: {
    pl: {
      title: "Wata Cukrowa na Wynajem - Maszyna z Obsługą | Słodkolandia Radom",
      description:
        "Kolorowa wata cukrowa dla dzieci i dorosłych. Wynajem maszyny z obsługą w Radomiu.",
    },
    en: {
      title:
        "Cotton Candy for Rent - Machine with Service | Słodkolandia Radom",
      description:
        "Colorful cotton candy for kids and adults. Machine rental with service in Radom.",
    },
  },
  [PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN]: {
    pl: {
      title: "Fontanna Czekoladowa na Wynajem | Słodkolandia Radom",
      description:
        "Wynajem fontanny czekoladowej z najlepszą belgijską czekoladą. Radom i okolice.",
    },
    en: {
      title: "Chocolate Fountain for Rent | Słodkolandia Radom",
      description:
        "Rent a chocolate fountain with the best Belgian chocolate. Radom and surroundings.",
    },
  },
  [PAGE_KEYS.GALLERY_PHOTO_TENTS]: {
    pl: {
      title: "Zdjęcia: Namioty Imprezowe | Słodkolandia Radom",
      description:
        "Zobacz nasze namioty imprezowe w akcji. Galeria zdjęć Słodkolandia.",
      ogImage: "/images/og-slodkolandia-foto-namioty.png",
    },
    en: {
      title: "Photos: Party Tents | Słodkolandia Radom",
      description: "See our party tents in action. Słodkolandia photo gallery.",
      ogImage: "/images/og-slodkolandia-foto-namioty.png",
    },
  },
  [PAGE_KEYS.GALLERY_PHOTO_TABLES_CHAIRS_LINENS]: {
    pl: {
      title: "Zdjęcia: Stoły, Krzesła, Obrusy | Słodkolandia Radom",
      description:
        "Galeria zdjęć wynajmowanych stołów, krzeseł i obrusów na imprezy.",
      ogImage: "/images/og-slodkolandia-foto-stoly.png",
    },
    en: {
      title: "Photos: Tables, Chairs, Linens | Słodkolandia Radom",
      description:
        "Photo gallery of rented tables, chairs, and linens for events.",
      ogImage: "/images/og-slodkolandia-foto-stoly.png",
    },
  },
  [PAGE_KEYS.GALLERY_PHOTO_INFLATABLES]: {
    pl: {
      title: "Zdjęcia: Dmuchance - Zamki, Zjeżdżalnie | Słodkolandia",
      description:
        "Zobacz nasze dmuchance dla dzieci w akcji! Zdjęcia z imprez.",
      ogImage: "/images/og-slodkolandia-foto-dmuchance.png",
    },
    en: {
      title: "Photos: Inflatables - Castles, Slides | Słodkolandia",
      description:
        "See our inflatables for kids in action! Photos from events.",
      ogImage: "/images/og-slodkolandia-foto-dmuchance.png",
    },
  },
  [PAGE_KEYS.GALLERY_PHOTO_COTTON_CANDY]: {
    pl: {
      title: "Zdjęcia: Wata Cukrowa na Imprezach | Słodkolandia",
      description: "Galeria zdjęć z watą cukrową serwowaną na eventach.",
      ogImage: "/images/og-slodkolandia-foto-wata.png",
    },
    en: {
      title: "Photos: Cotton Candy at Events | Słodkolandia",
      description: "Photo gallery of cotton candy served at events.",
      ogImage: "/images/og-slodkolandia-foto-wata.png",
    },
  },
  [PAGE_KEYS.GALLERY_PHOTO_POPCORN]: {
    pl: {
      title: "Zdjęcia: Popcorn na Imprezach | Słodkolandia",
      description:
        "Zobacz, jak wygląda nasz świeży popcorn na eventach. Galeria zdjęć.",
      ogImage: "/images/og-slodkolandia-foto-popcorn.png",
    },
    en: {
      title: "Photos: Popcorn at Events | Słodkolandia",
      description: "See our fresh popcorn at events. Photo gallery.",
      ogImage: "/images/og-slodkolandia-foto-popcorn.png",
    },
  },
  [PAGE_KEYS.GALLERY_PHOTO_FOUNTAINS]: {
    pl: {
      title: "Zdjęcia: Fontanny Czekoladowe | Słodkolandia",
      description: "Galeria zdjęć naszych efektownych fontann czekoladowych.",
      ogImage: "/images/og-slodkolandia-foto-fontanny.png",
    },
    en: {
      title: "Photos: Chocolate Fountains | Słodkolandia",
      description: "Photo gallery of our impressive chocolate fountains.",
      ogImage: "/images/og-slodkolandia-foto-fontanny.png",
    },
  },
};

const localizedPageNamesForBreadcrumbs: Record<
  PageKey,
  Partial<Record<Language, string>>
> = {
  [PAGE_KEYS.HOME]: { pl: "Strona Główna", en: "Home Page" },
  [PAGE_KEYS.OFFER]: { pl: "Oferta", en: "Offer" },
  [PAGE_KEYS.GALLERY]: { pl: "Galeria", en: "Gallery" },
  [PAGE_KEYS.CONTACT]: { pl: "Kontakt", en: "Contact" },
  [PAGE_KEYS.PRICING]: { pl: "Cennik", en: "Pricing" },
  [PAGE_KEYS.ABOUT]: { pl: "O Nas", en: "About Us" },
  [PAGE_KEYS.TERMS]: { pl: "Regulamin", en: "Terms and Conditions" },
  [PAGE_KEYS.PRIVACY_POLICY]: {
    pl: "Polityka Prywatności",
    en: "Privacy Policy",
  },
  [PAGE_KEYS.NOT_FOUND]: { pl: "Nie znaleziono", en: "Not Found" },
  [PAGE_KEYS.OFFER_TENTS]: { pl: "Namioty", en: "Tents" },
  [PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS]: {
    pl: "Stoły, Krzesła, Obrusy",
    en: "Tables, Chairs, Linens",
  },
  [PAGE_KEYS.OFFER_INFLATABLES]: { pl: "Dmuchance", en: "Inflatables" },
  [PAGE_KEYS.OFFER_POPCORN]: { pl: "Popcorn", en: "Popcorn" },
  [PAGE_KEYS.OFFER_COTTON_CANDY]: { pl: "Wata Cukrowa", en: "Cotton Candy" },
  [PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN]: {
    pl: "Fontanna Czekoladowa",
    en: "Chocolate Fountain",
  },
  [PAGE_KEYS.GALLERY_PHOTO_TENTS]: {
    pl: "Zdjęcia: Namioty",
    en: "Photos: Tents",
  },
  [PAGE_KEYS.GALLERY_PHOTO_TABLES_CHAIRS_LINENS]: {
    pl: "Zdjęcia: Stoły i Krzesła",
    en: "Photos: Tables & Chairs",
  },
  [PAGE_KEYS.GALLERY_PHOTO_INFLATABLES]: {
    pl: "Zdjęcia: Dmuchance",
    en: "Photos: Inflatables",
  },
  [PAGE_KEYS.GALLERY_PHOTO_COTTON_CANDY]: {
    pl: "Zdjęcia: Wata Cukrowa",
    en: "Photos: Cotton Candy",
  },
  [PAGE_KEYS.GALLERY_PHOTO_POPCORN]: {
    pl: "Zdjęcia: Popcorn",
    en: "Photos: Popcorn",
  },
  [PAGE_KEYS.GALLERY_PHOTO_FOUNTAINS]: {
    pl: "Zdjęcia: Fontanny Czekoladowe",
    en: "Photos: Chocolate Fountains",
  },
};

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

export default function SEOHead() {
  useLocation();
  const currentBrowserFullPath =
    window.location.pathname + window.location.search + window.location.hash;

  const {
    pageKey: detectedPageKey,
    lang: langUsedInUrl,
    hashKey: detectedHashKey,
  } = findPageKeyByLocalizedPath(currentBrowserFullPath);

  const basePageKey: PageKey = detectedPageKey || PAGE_KEYS.HOME;
  const actualLangUsed = langUsedInUrl || defaultLang;
  const effectivePageKeyForMeta: PageKey = detectedHashKey || basePageKey;

  const defaultSeoForLang = pageSpecificSEOMeta[PAGE_KEYS.HOME]?.[
    actualLangUsed
  ] || {
    title: "SŁODKOLANDIA",
    description: "Atrakcje eventowe.",
    ogImage: "/images/og-slodkolandia-default.png",
  };
  const currentSeoLangSpecific =
    pageSpecificSEOMeta[effectivePageKeyForMeta]?.[actualLangUsed];
  const basePageSeoLangSpecific =
    pageSpecificSEOMeta[basePageKey]?.[actualLangUsed];

  const seoTitle =
    currentSeoLangSpecific?.title ||
    basePageSeoLangSpecific?.title ||
    defaultSeoForLang.title;
  const seoDescription =
    currentSeoLangSpecific?.description ||
    basePageSeoLangSpecific?.description ||
    defaultSeoForLang.description;
  const ogImageRelative =
    currentSeoLangSpecific?.ogImage ||
    basePageSeoLangSpecific?.ogImage ||
    defaultSeoForLang.ogImage;

  const fullOgImageUrl = ogImageRelative
    ? `${SLODKOLANDIA_BASE_URL}${
        ogImageRelative.startsWith("/") ? "" : "/"
      }${ogImageRelative}`
    : `${SLODKOLANDIA_BASE_URL}/images/og-slodkolandia-default.png`;

  let pathForCanonicalAndAlternate: string;
  if (
    detectedHashKey &&
    (basePageKey === PAGE_KEYS.OFFER || basePageKey === PAGE_KEYS.GALLERY)
  ) {
    pathForCanonicalAndAlternate = getLocalizedPath(
      basePageKey,
      actualLangUsed,
      detectedHashKey
    );
  } else {
    pathForCanonicalAndAlternate = getLocalizedPath(
      basePageKey,
      actualLangUsed
    );
  }
  const canonicalUrl = `${SLODKOLANDIA_BASE_URL}${pathForCanonicalAndAlternate}`;

  const socialLinksHrefs = [
    "https://www.facebook.com/SlodkolandiaRadom/",
    "https://www.instagram.com/slodkolandia.radom/",
  ];

  const companyName = "SŁODKOLANDIA - Wypożyczalnia Atrakcji Imprezowych";
  const companyDescriptionForSchema =
    "Wynajem namiotów imprezowych, stołów, krzeseł, obrusów, zjeżdżalni i zamków dmuchanych, urządzeń do waty cukrowej i popcornu oraz fontanny czekoladowej.";
  const streetAddress = "Zalesice ul. Słoneczna 9";
  const locality = "Gózd";
  const postalCode = "26-634";
  const country = "PL";
  const telephone = "+48698071906";
  const email = "kontakt@twoja-nowa-domena-slodkolandia.pl";
  const logoUrl = `${SLODKOLANDIA_BASE_URL}/images/logo-og-slodkolandia.png`;
  const priceRange = "$$";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SLODKOLANDIA_BASE_URL,
    name: companyName,
    description: companyDescriptionForSchema,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: locality,
      postalCode,
      addressCountry: country,
    },
    telephone,
    email,
    url: SLODKOLANDIA_BASE_URL,
    image: logoUrl,
    priceRange,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    sameAs: socialLinksHrefs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SŁODKOLANDIA",
    url: SLODKOLANDIA_BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SLODKOLANDIA_BASE_URL}${
          actualLangUsed === defaultLang ? "" : "/" + actualLangUsed
        }/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: actualLangUsed,
  };

  const getBreadcrumbList = (): BreadcrumbListSchema | null => {
    const itemList: BreadcrumbItem[] = [];
    const homeName =
      localizedPageNamesForBreadcrumbs[PAGE_KEYS.HOME]?.[actualLangUsed] ||
      "Home";
    const homePath = getLocalizedPath(PAGE_KEYS.HOME, actualLangUsed);
    itemList.push({
      "@type": "ListItem",
      position: 1,
      name: homeName,
      item: `${SLODKOLANDIA_BASE_URL}${homePath.split("#")[0]}`,
    });

    if (basePageKey !== PAGE_KEYS.HOME) {
      const pageName =
        localizedPageNamesForBreadcrumbs[basePageKey]?.[actualLangUsed] ||
        getLocalizedSlug(basePageKey, actualLangUsed)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
      const pagePath = getLocalizedPath(basePageKey, actualLangUsed);
      itemList.push({
        "@type": "ListItem",
        position: itemList.length + 1,
        name: pageName,
        item: `${SLODKOLANDIA_BASE_URL}${pagePath.split("#")[0]}`,
      });
    }

    if (
      detectedHashKey &&
      (basePageKey === PAGE_KEYS.OFFER || basePageKey === PAGE_KEYS.GALLERY)
    ) {
      const hashPageName =
        localizedPageNamesForBreadcrumbs[detectedHashKey]?.[actualLangUsed] ||
        getLocalizedSlug(detectedHashKey, actualLangUsed)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
      const fullPathWithHash = getLocalizedPath(
        basePageKey,
        actualLangUsed,
        detectedHashKey
      );
      itemList.push({
        "@type": "ListItem",
        position: itemList.length + 1,
        name: hashPageName,
        item: `${SLODKOLANDIA_BASE_URL}${fullPathWithHash}`,
      });
    }
    if (itemList.length <= 1) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemList,
    };
  };

  const breadcrumbSchema = getBreadcrumbList();

  const alternateLinks: JSX.Element[] = [];
  supportedLngs.forEach((lng) => {
    let alternatePathForLang: string;
    if (
      detectedHashKey &&
      (basePageKey === PAGE_KEYS.OFFER || basePageKey === PAGE_KEYS.GALLERY)
    ) {
      alternatePathForLang = getLocalizedPath(
        basePageKey,
        lng,
        detectedHashKey
      );
    } else {
      alternatePathForLang = getLocalizedPath(basePageKey, lng);
    }
    alternateLinks.push(
      <link
        key={lng}
        rel="alternate"
        hrefLang={lng}
        href={`${SLODKOLANDIA_BASE_URL}${alternatePathForLang}`}
      />
    );
  });

  let xDefaultPath: string;
  if (
    detectedHashKey &&
    (basePageKey === PAGE_KEYS.OFFER || basePageKey === PAGE_KEYS.GALLERY)
  ) {
    xDefaultPath = getLocalizedPath(basePageKey, defaultLang, detectedHashKey);
  } else {
    xDefaultPath = getLocalizedPath(basePageKey, defaultLang);
  }

  return (
    <Helmet>
      <html lang={actualLangUsed} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={canonicalUrl} />
      {alternateLinks}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SLODKOLANDIA_BASE_URL}${xDefaultPath}`}
      />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SŁODKOLANDIA" />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
