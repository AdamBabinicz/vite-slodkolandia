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
import { useLanguage } from "@/hooks/useLanguage";

export const SLODKOLANDIA_BASE_URL = "https://www.slodkolandia.cba.pl";

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
      title: "Słodkolandia wita: – Atrakcje na imprezy, dmuchańce i więcej",
      description:
        "Wynajem namiotów imprezowych, zjeżdżalni, zamków dmuchanych. Obsługa waty cukrowej, popcornu, fontanny czekoladowej. Radom, Warszawa, Lublin i okolice",
      ogImage: "/img/n/32.jpg",
    },
    en: {
      title: "Tents, Tables, Chairs, Inflatables, Events: Radom, Warsaw",
      description:
        "Party tent rental, slides, bouncy castles. Cotton candy, popcorn, chocolate fountain services. Radom and surroundings.",
      ogImage: "/img/f/4.avif",
    },
  },
  [PAGE_KEYS.OFFER]: {
    pl: {
      title: "Oferta Atrakcji Imprezowych - SŁODKOLANDIA wita: | Radom",
      description:
        "Poznaj naszą ofertę wynajmu namiotów, dmuchańców, urządzeń gastronomicznych i więcej. Idealne na każdą imprezę w Radomiu.",
      ogImage: "/img/n/32.avif",
    },
    en: {
      title: "Event Attractions Offer - SŁODKOLANDIA wita: | Radom",
      description:
        "Discover our offer of tents, inflatables, catering equipment, and more. Perfect for any event in Radom.",
      ogImage: "/img/n/31.avif",
    },
  },
  [PAGE_KEYS.REVIEWS]: {
    pl: {
      title: "Opinie Klientów - SŁODKOLANDIA wita:",
      description:
        "Przeczytaj, co nasi Klienci mówią o naszych usługach. Profesjonalny wynajem atrakcji na eventy.",
      ogImage: "/img/n/26.jpg",
    },
    en: {
      title: "Client Reviews - SŁODKOLANDIA wita:",
      description:
        "Read what our clients say about our services. Professional event attraction rental.",
      ogImage: "/img/f/6.jpg",
    },
  },
  [PAGE_KEYS.GALLERY]: {
    pl: {
      title: "Galeria Zdjęć - SŁODKOLANDIA wita: Atrakcje | Radom",
      description:
        "Zobacz zdjęcia z naszych realizacji i eventów. Namioty, dmuchańce, wata cukrowa i uśmiechy dzieci w Radomiu.",
      ogImage: "/img/d/27.avif",
    },
    en: {
      title: "Photo Gallery - SŁODKOLANDIA wita: Attractions | Radom",
      description:
        "See photos from our events. Tents, inflatables, cotton candy, and happy children in Radom.",
      ogImage: "/img/d/26.avif",
    },
  },
  [PAGE_KEYS.CONTACT]: {
    pl: {
      title: "Kontakt - SŁODKOLANDIA wita: | Wynajem Atrakcji Radom",
      description:
        "Skontaktuj się z nami, aby wynająć atrakcje na Twoją imprezę. Szybka wycena i profesjonalna obsługa w Radomiu.",
      ogImage: "/img/d/22.avif",
    },
    en: {
      title: "Contact - SŁODKOLANDIA wita: | Attraction Rental Radom",
      description:
        "Contact us to rent attractions for your event. Quick quote and professional service in Radom.",
      ogImage: "/img/d/18.avif",
    },
  },
  [PAGE_KEYS.PRICING]: {
    pl: {
      title: "Cennik Usług - SŁODKOLANDIA wita: Atrakcje Imprezowe | Radom",
      description:
        "Sprawdź nasz cennik wynajmu namiotów, dmuchańców i innych atrakcji. Konkurencyjne ceny w Radomiu.",
      ogImage: "/img/d/23.avif",
    },
    en: {
      title: "Service Pricing - SŁODKOLANDIA wita: Event Attractions | Radom",
      description:
        "Check our price list for renting tents, inflatables, and other attractions. Competitive prices in Radom.",
      ogImage: "/img/d/28.avif",
    },
  },
  [PAGE_KEYS.ABOUT]: {
    pl: {
      title: "O Nas - SŁODKOLANDIA wita: | Pasja do Eventów w Radomiu",
      description:
        "Dowiedz się więcej o firmie SŁODKOLANDIA wita:, naszej misji i doświadczeniu w organizacji niezapomnianych imprez w Radomiu oraz innych miejscowościach.",
      ogImage: "/img/d/30.avif",
    },
    en: {
      title: "About Us - SŁODKOLANDIA wita: | Passion for Events in Radom",
      description:
        "Learn more about SŁODKOLANDIA wita:, our mission, and our experience in organizing unforgettable events in Radom and other locations.",
      ogImage: "/img/d/5.avif",
    },
  },
  [PAGE_KEYS.TERMS]: {
    pl: {
      title: "Regulamin Świadczenia Usług - SŁODKOLANDIA wita:",
      description:
        "Zapoznaj się z regulaminem świadczenia usług przez firmę SŁODKOLANDIA wita:.",
      ogImage: "/img/s/3.avif",
    },
    en: {
      title: "Terms of Service - SŁODKOLANDIA wita:",
      description:
        "Please read the terms of service provided by SLODKOLANDIA wita:.",
      ogImage: "/img/s/18.avif",
    },
  },
  [PAGE_KEYS.PRIVACY_POLICY]: {
    pl: {
      title: "Polityka Prywatności - SŁODKOLANDIA wita:",
      description:
        "Informacje na temat przetwarzania danych osobowych przez firmę SŁODKOLANDIA wita:.",
      ogImage: "/img/s/19.avif",
    },
    en: {
      title: "Privacy Policy - SŁODKOLANDIA wita:",
      description:
        "Information on the processing of personal data by SLODKOLANDIA wita:.",
      ogImage: "/img/p/1.avif",
    },
  },
  [PAGE_KEYS.NOT_FOUND]: {
    pl: {
      title: "Strona Nie Znaleziona (404) - SŁODKOLANDIA wita:",
      description: "Przepraszamy, strona której szukasz nie istnieje.",
      ogImage: "/img/p/4.avif",
    },
    en: {
      title: "Page Not Found (404) - SŁODKOLANDIA wita:",
      description: "Sorry, the page you are looking for does not exist.",
      ogImage: "/img/p/2.avif",
    },
  },
  [PAGE_KEYS.OFFER_TENTS]: {},
  [PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS]: {},
  [PAGE_KEYS.OFFER_INFLATABLES]: {},
  [PAGE_KEYS.OFFER_POPCORN]: {},
  [PAGE_KEYS.OFFER_COTTON_CANDY]: {},
  [PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN]: {},
  [PAGE_KEYS.GALLERY_PHOTO_TENTS]: {},
  [PAGE_KEYS.GALLERY_PHOTO_TABLES_CHAIRS_LINENS]: {},
  [PAGE_KEYS.GALLERY_PHOTO_INFLATABLES]: {},
  [PAGE_KEYS.GALLERY_PHOTO_COTTON_CANDY]: {},
  [PAGE_KEYS.GALLERY_PHOTO_POPCORN]: {},
  [PAGE_KEYS.GALLERY_PHOTO_FOUNTAINS]: {},
};

const localizedPageNamesForBreadcrumbs: Record<
  PageKey,
  Partial<Record<Language, string>>
> = {
  [PAGE_KEYS.HOME]: { pl: "Strona Główna", en: "Home Page" },
  [PAGE_KEYS.OFFER]: { pl: "Oferta", en: "Offer" },
  [PAGE_KEYS.REVIEWS]: { pl: "Opinie Klientów", en: "Client Reviews" },
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
  [PAGE_KEYS.OFFER_INFLATABLES]: { pl: "Dmuchańce", en: "Inflatables" },
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
    pl: "Zdjęcia: Fontanna Czekoladowa",
    en: "Photos: Chocolate Fountain",
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
  const { language } = useLanguage();
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

  let effectivePageKeyForMeta: PageKey = basePageKey;
  if (
    detectedHashKey &&
    pageSpecificSEOMeta[detectedHashKey] &&
    Object.keys(pageSpecificSEOMeta[detectedHashKey]).length > 0
  ) {
    effectivePageKeyForMeta = detectedHashKey;
  }

  const defaultSeoForLang = pageSpecificSEOMeta[PAGE_KEYS.HOME]?.[
    actualLangUsed
  ] || {
    title: "SŁODKOLANDIA wita:",
    description: "Atrakcje eventowe dla każdego.",
    ogImage: "/img/p14.jpg",
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
    : `${SLODKOLANDIA_BASE_URL}/img/og-default-fallback.png`;

  let pathForCanonicalAndAlternate: string;
  if (detectedHashKey) {
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
    "https://www.facebook.com/wata.cukrowa.popcorn",
    "https://www.instagram.com/ewa1989",
    "https://www.youtube.com/channel/UCau05zZiK3kpTe06XtKXNKA",
    "https://twitter.com/popcorn_wata",
    "https://www.pinterest.com/watapopcorn",
    "https://www.google.pl/maps/place/SŁODKOLANDIA+wita:+🎪+✔/@51.3998663,21.1651462,17z",
  ];

  const companyName = "SŁODKOLANDIA wita: - Wypożyczalnia Atrakcji Imprezowych";
  const companyDescriptionForSchema =
    "Wynajem namiotów imprezowych, stołów, krzeseł, obrusów, zjeżdżalni i zamków dmuchanych, urządzeń do waty cukrowej i popcornu oraz fontanny czekoladowej.";
  const streetAddress = "ul. Żeromskiego 95/97";
  const locality = "Radom";
  const postalCode = "26-610";
  const country = "PL";
  const telephone = "+48531890827";
  const email = "mariuszek1989poczta@wp.pl";
  const logoUrl = `${SLODKOLANDIA_BASE_URL}/img/logo.avif`;
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
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: socialLinksHrefs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SŁODKOLANDIA wita:",
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

    if (detectedHashKey) {
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
    if (detectedHashKey) {
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
  if (detectedHashKey) {
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SŁODKOLANDIA wita:" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      <meta name="twitter:url" content={canonicalUrl} />
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
