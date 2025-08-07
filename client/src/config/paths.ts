export type Language = "pl" | "en";
export const defaultLang: Language = "pl";
export const supportedLngs: readonly Language[] = ["pl", "en"];

export const PAGE_KEYS = {
  HOME: "home",
  ABOUT: "about",
  OFFER: "offer",
  GALLERY: "gallery",
  PRICING: "pricing",
  CONTACT: "contact",
  PRIVACY_POLICY: "privacy",
  TERMS: "terms",
  REVIEWS: "reviews",
  NOT_FOUND: "notFound",
  OFFER_TENTS: "offer_tents",
  OFFER_TABLES_CHAIRS_LINENS: "offer_tables_chairs_linens",
  OFFER_INFLATABLES: "offer_inflatables",
  OFFER_POPCORN: "offer_popcorn",
  OFFER_COTTON_CANDY: "offer_cotton_candy",
  OFFER_CHOCOLATE_FOUNTAIN: "offer_chocolate_fountain",
  GALLERY_PHOTO_TENTS: "gallery_photo_tents",
  GALLERY_PHOTO_TABLES_CHAIRS_LINENS: "gallery_photo_tables_chairs_linens",
  GALLERY_PHOTO_INFLATABLES: "gallery_photo_inflatables",
  GALLERY_PHOTO_COTTON_CANDY: "gallery_photo_cotton_candy",
  GALLERY_PHOTO_POPCORN: "gallery_photo_popcorn",
  GALLERY_PHOTO_FOUNTAINS: "gallery_photo_fountains",
} as const;

export type PageKey = (typeof PAGE_KEYS)[keyof typeof PAGE_KEYS];

export const OFFER_HASH_KEYS = [
  PAGE_KEYS.OFFER_TENTS,
  PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS,
  PAGE_KEYS.OFFER_INFLATABLES,
  PAGE_KEYS.OFFER_POPCORN,
  PAGE_KEYS.OFFER_COTTON_CANDY,
  PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN,
] as const;

export const GALLERY_HASH_KEYS = [
  PAGE_KEYS.GALLERY_PHOTO_TENTS,
  PAGE_KEYS.GALLERY_PHOTO_TABLES_CHAIRS_LINENS,
  PAGE_KEYS.GALLERY_PHOTO_INFLATABLES,
  PAGE_KEYS.GALLERY_PHOTO_COTTON_CANDY,
  PAGE_KEYS.GALLERY_PHOTO_POPCORN,
  PAGE_KEYS.GALLERY_PHOTO_FOUNTAINS,
] as const;

export type OfferHashKey = (typeof OFFER_HASH_KEYS)[number];
export type GalleryHashKey = (typeof GALLERY_HASH_KEYS)[number];
export type HashKey = OfferHashKey | GalleryHashKey;

export function isOfferHashKey(key: PageKey): key is OfferHashKey {
  return (OFFER_HASH_KEYS as readonly string[]).includes(key);
}

export function isGalleryHashKey(key: PageKey): key is GalleryHashKey {
  return (GALLERY_HASH_KEYS as readonly string[]).includes(key);
}

const slugsConfig: Record<Language, Record<PageKey, string>> = {
  pl: {
    [PAGE_KEYS.HOME]: "",
    [PAGE_KEYS.ABOUT]: "o-nas",
    [PAGE_KEYS.OFFER]: "oferta",
    [PAGE_KEYS.GALLERY]: "galeria",
    [PAGE_KEYS.PRICING]: "cennik",
    [PAGE_KEYS.CONTACT]: "kontakt",
    [PAGE_KEYS.PRIVACY_POLICY]: "polityka-prywatnosci",
    [PAGE_KEYS.TERMS]: "regulamin",
    [PAGE_KEYS.REVIEWS]: "opinie-klientow",
    [PAGE_KEYS.NOT_FOUND]: "404",
    [PAGE_KEYS.OFFER_TENTS]: "namioty",
    [PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS]: "stoly-krzesla-obrusy",
    [PAGE_KEYS.OFFER_INFLATABLES]: "dmuchance",
    [PAGE_KEYS.OFFER_POPCORN]: "popcorn",
    [PAGE_KEYS.OFFER_COTTON_CANDY]: "wata-cukrowa",
    [PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN]: "fontanna-czekoladowa",
    [PAGE_KEYS.GALLERY_PHOTO_TENTS]: "foto-namioty",
    [PAGE_KEYS.GALLERY_PHOTO_TABLES_CHAIRS_LINENS]: "foto-stoly-krzesla-obrusy",
    [PAGE_KEYS.GALLERY_PHOTO_INFLATABLES]: "foto-dmuchance",
    [PAGE_KEYS.GALLERY_PHOTO_COTTON_CANDY]: "foto-wata",
    [PAGE_KEYS.GALLERY_PHOTO_POPCORN]: "foto-popcorn",
    [PAGE_KEYS.GALLERY_PHOTO_FOUNTAINS]: "foto-fontanny",
  },
  en: {
    [PAGE_KEYS.HOME]: "",
    [PAGE_KEYS.ABOUT]: "about-us",
    [PAGE_KEYS.OFFER]: "offer",
    [PAGE_KEYS.GALLERY]: "gallery",
    [PAGE_KEYS.PRICING]: "pricing",
    [PAGE_KEYS.CONTACT]: "contact",
    [PAGE_KEYS.PRIVACY_POLICY]: "privacy-policy",
    [PAGE_KEYS.TERMS]: "terms-of-service",
    [PAGE_KEYS.REVIEWS]: "client-reviews",
    [PAGE_KEYS.NOT_FOUND]: "404",
    [PAGE_KEYS.OFFER_TENTS]: "tents",
    [PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS]: "tables-chairs-linens",
    [PAGE_KEYS.OFFER_INFLATABLES]: "inflatables",
    [PAGE_KEYS.OFFER_POPCORN]: "popcorn",
    [PAGE_KEYS.OFFER_COTTON_CANDY]: "cotton-candy",
    [PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN]: "chocolate-fountain",
    [PAGE_KEYS.GALLERY_PHOTO_TENTS]: "photo-tents",
    [PAGE_KEYS.GALLERY_PHOTO_TABLES_CHAIRS_LINENS]:
      "photo-tables-chairs-linens",
    [PAGE_KEYS.GALLERY_PHOTO_INFLATABLES]: "photo-inflatables",
    [PAGE_KEYS.GALLERY_PHOTO_COTTON_CANDY]: "photo-cotton-candy",
    [PAGE_KEYS.GALLERY_PHOTO_POPCORN]: "photo-popcorn",
    [PAGE_KEYS.GALLERY_PHOTO_FOUNTAINS]: "photo-fountains",
  },
};

export const getLocalizedSlug = (pageKey: PageKey, lang: Language): string => {
  const slug = slugsConfig[lang]?.[pageKey];
  if (typeof slug === "string") return slug;
  const fallbackSlug = slugsConfig[defaultLang]?.[pageKey];
  if (typeof fallbackSlug === "string") {
    return fallbackSlug;
  }
  console.error(
    `[paths.ts] Critical: Slug for pageKey "${pageKey}" not found for lang "${lang}" NOR default. Returning key.`
  );
  return pageKey.toLowerCase().replace(/_/g, "-");
};

export function getInternalRoutePath(pageKey: PageKey, lang: Language): string {
  if (pageKey === PAGE_KEYS.HOME) return "/";
  return `/${getLocalizedSlug(pageKey, lang)}`;
}

export function getLocalizedPath(
  pageKey: PageKey,
  lang: Language,
  hashPageKey?: PageKey
): string {
  const langPrefix = lang === defaultLang ? "" : `/${lang}`;
  let basePathKeyToUse: PageKey = pageKey;
  let actualHashKeyForSlug: PageKey | undefined = hashPageKey;

  if (isOfferHashKey(pageKey)) {
    basePathKeyToUse = PAGE_KEYS.OFFER;
    actualHashKeyForSlug = pageKey;
  } else if (isGalleryHashKey(pageKey)) {
    basePathKeyToUse = PAGE_KEYS.GALLERY;
    actualHashKeyForSlug = pageKey;
  }

  let fullPath: string;

  if (basePathKeyToUse === PAGE_KEYS.HOME) {
    fullPath = langPrefix || "/";
  } else {
    const slug = getLocalizedSlug(basePathKeyToUse, lang);
    if (slug) {
      fullPath = `${langPrefix}/${slug}`;
    } else {
      fullPath = langPrefix || "/";
      console.warn(
        `[getLocalizedPath] Slug for basePathKey "${basePathKeyToUse}" (lang "${lang}") is empty. Resulting path: "${fullPath}"`
      );
    }
  }

  if (actualHashKeyForSlug) {
    const hashSlugValue = getLocalizedSlug(actualHashKeyForSlug, lang);
    if (hashSlugValue) {
      fullPath += `#${hashSlugValue}`;
    }
  }
  return fullPath;
}

export function findPageKeyByLocalizedPath(currentFullPath: string): {
  pageKey: PageKey | null;
  lang: Language;
  hashKey: PageKey | null;
  hashSlug: string | null;
  basePathWithoutLang: string;
} {
  const [pathAndQuery, hashValueFromUrl] = currentFullPath.split("#");
  const pathOnly = pathAndQuery.split("?")[0];

  let detectedLang: Language = defaultLang;
  let slugSegmentsForPathMatching: string[];

  const pathSegments = pathOnly.split("/").filter(Boolean);

  if (
    pathSegments.length > 0 &&
    supportedLngs.includes(pathSegments[0] as Language)
  ) {
    detectedLang = pathSegments[0] as Language;
    slugSegmentsForPathMatching = pathSegments.slice(1);
  } else {
    detectedLang = defaultLang;
    slugSegmentsForPathMatching = pathSegments;
  }

  const slugToAnalyze = slugSegmentsForPathMatching.join("/") || "";
  const basePathWithoutLang = `/${slugToAnalyze}`.replace(/\/+$/, "") || "/";

  let foundPageKey: PageKey | null = null;
  const currentLangSlugs = slugsConfig[detectedLang];
  const pageKeyCandidates = Object.keys(currentLangSlugs) as PageKey[];

  foundPageKey =
    pageKeyCandidates.find(
      (key) =>
        !isOfferHashKey(key) &&
        !isGalleryHashKey(key) &&
        currentLangSlugs[key] === slugToAnalyze
    ) || null;

  if (
    !foundPageKey &&
    slugToAnalyze === "" &&
    currentLangSlugs[PAGE_KEYS.HOME] === ""
  ) {
    foundPageKey = PAGE_KEYS.HOME;
  }

  if (!foundPageKey) {
    foundPageKey = PAGE_KEYS.NOT_FOUND;
  }

  let foundHashKey: PageKey | null = null;
  if (hashValueFromUrl) {
    foundHashKey =
      pageKeyCandidates.find(
        (key) => currentLangSlugs[key] === hashValueFromUrl
      ) || null;
  }

  return {
    pageKey: foundPageKey,
    lang: detectedLang,
    hashKey: foundHashKey,
    hashSlug: hashValueFromUrl || null,
    basePathWithoutLang: basePathWithoutLang,
  };
}
