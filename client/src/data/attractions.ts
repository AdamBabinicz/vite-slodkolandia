import { PageKey, PAGE_KEYS } from "@/config/paths"; // Zaimportuj PageKey i PAGE_KEYS

export interface SpecificationDetail {
  labelKey: string;
  value: string;
  isTranslatableValue?: boolean;
  price?: number;
  currency?: string;
  period?: string;
}

export interface PricingOption {
  base: number;
  currency: string;
  period: string;
  descriptionKey?: string;
  capacityKey?: string;
}

export interface Attraction {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  images: string[];
  icon: string;
  features: string[];
  specifications: SpecificationDetail[];
  pricingOptions: PricingOption[];
  pricingDisplayMode?: "standard" | "itemList";
  offerSectionPageKey?: PageKey; // NOWE POLE
}

export const attractions: Attraction[] = [
  {
    id: "namioty-imprezowe",
    name: "Namioty Imprezowe",
    category: "namioty",
    description: "attractionsData.namioty-imprezowe.description",
    shortDescription: "attractionsData.namioty-imprezowe.shortDescription",
    images: [
      "/img/n/1.avif",
      "/img/n/2.avif",
      "/img/n/3.avif",
      "/img/n/18.avif",
      "/img/n/20.avif",
      "/img/n/21.avif",
    ],
    icon: "fas fa-campground",
    features: [
      "feature.variousSizes",
      "feature.weatherResistant",
      "feature.professionalSetup",
      "feature.optionalFloor",
      "feature.ledLighting",
    ],
    specifications: [
      {
        labelKey: "specification.label.material",
        value: "attractionsData.namioty-imprezowe.materialValue",
        isTranslatableValue: true,
      },
      { labelKey: "specification.label.height", value: "2.5m - 3.5m" },
      {
        labelKey: "specification.label.assemblyTime",
        value: "specification.value.assemblyTime24",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.availableSizes",
        value: "attractionsData.namioty-imprezowe.availableSizesValue",
        isTranslatableValue: true,
      },
    ],
    pricingOptions: [
      {
        base: 600,
        currency: "zł",
        period: "impreza",
        descriptionKey: "attractionsData.namioty-imprezowe.option1.description",
        capacityKey: "attractionsData.namioty-imprezowe.option1.capacity",
      },
      {
        base: 800,
        currency: "zł",
        period: "impreza",
        descriptionKey: "attractionsData.namioty-imprezowe.option2.description",
        capacityKey: "attractionsData.namioty-imprezowe.option2.capacity",
      },
    ],
    pricingDisplayMode: "standard",
    offerSectionPageKey: PAGE_KEYS.OFFER_TENTS,
  },
  {
    id: "stoly-krzesla-obrusy",
    name: "Stoły, Krzesła i Obrusy",
    category: "wyposazenie",
    description: "attractionsData.stoly-krzesla-obrusy.description",
    shortDescription: "attractionsData.stoly-krzesla-obrusy.shortDescription",
    images: ["/img/s/3.avif", "/img/s/19.avif", "/img/s/18.avif"],
    icon: "fas fa-chair",
    features: [
      "feature.tablesFor6",
      "feature.comfortableChairs",
      "feature.elegantTablecloths",
      "feature.decorativeGrass",
      "feature.nightLighting",
      "feature.variousConfigurations",
    ],
    specifications: [
      {
        labelKey: "specification.label.tableRentalItem",
        value: "specification.value.tableRentalDesc",
        isTranslatableValue: true,
        price: 25,
        currency: "zł",
        period: "sztuka/dzień",
      },
      {
        labelKey: "specification.label.chairRentalItem",
        value: "specification.value.chairRentalDesc",
        isTranslatableValue: true,
        price: 10,
        currency: "zł",
        period: "sztuka/dzień",
      },
      {
        labelKey: "specification.label.tableclothRentalItem",
        value: "specification.value.tableclothRentalDesc",
        isTranslatableValue: true,
        price: 20,
        currency: "zł",
        period: "sztuka/dzień",
      },
      {
        labelKey: "specification.label.grassRentalItem",
        value: "specification.value.grassRentalDesc",
        isTranslatableValue: true,
        price: 0,
        currency: "zł",
        period: "gratis",
      },
      {
        labelKey: "specification.label.lightingRentalItem",
        value: "specification.value.lightingRentalDesc",
        isTranslatableValue: true,
        price: 0,
        currency: "zł",
        period: "gratis",
      },
    ],
    pricingOptions: [{ base: 10, currency: "zł", period: "od" }],
    pricingDisplayMode: "itemList",
    offerSectionPageKey: PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS,
  },
  {
    id: "dmuchane-atrakcje",
    name: "Zamki i Zjeżdżalnie Dmuchane",
    category: "dmuchance",
    description: "attractionsData.dmuchane-atrakcje.description",
    shortDescription: "attractionsData.dmuchane-atrakcje.shortDescription",
    images: [
      "/img/d/1.avif",
      "/img/d/2.avif",
      "/img/d/3.avif",
      "/img/d/4.avif",
      "/img/d/5.avif",
      "/img/d/6.avif",
    ],
    icon: "fas fa-castle",
    features: [
      "feature.certifiedSafe",
      "feature.variousThemes",
      "feature.eventSupport",
      "feature.liabilityInsurance",
      "feature.generatorIncluded",
      "feature.protectiveMats",
    ],
    specifications: [
      { labelKey: "specification.label.age", value: "3-12 lat" },
      { labelKey: "specification.label.dimensions", value: "4x4m - 8x6m" },
      { labelKey: "specification.label.height", value: "3-5 metrów" },
      {
        labelKey: "specification.label.capacity",
        value: "specification.value.capacity815children",
        isTranslatableValue: true,
      },
      { labelKey: "specification.label.power", value: "230V/16A" },
    ],
    pricingOptions: [{ base: 800, currency: "zł", period: "impreza" }],
    pricingDisplayMode: "standard",
    offerSectionPageKey: PAGE_KEYS.OFFER_INFLATABLES,
  },
  {
    id: "wata-cukrowa",
    name: "Wata Cukrowa",
    category: "cukiernicze",
    description: "attractionsData.wata-cukrowa.description",
    shortDescription: "attractionsData.wata-cukrowa.shortDescription",
    images: [
      "/img/w/11-.avif",
      "/img/w/22-.avif",
      "/img/w/33-.avif",
      "/img/w/44-.avif",
      "/img/w/55-.avif",
      "/img/w/p5.avif",
    ],
    icon: "fas fa-candy-cane",
    features: [
      "feature.variousFlavorsColors",
      "feature.professionalService",
      "feature.hygienicPackaging",
      "feature.visualAttraction",
      "feature.fastProduction",
      "feature.ecoSugars",
    ],
    specifications: [
      {
        labelKey: "specification.label.flavors",
        value: "specification.value.flavorsCottonCandy",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.colors",
        value: "specification.value.colorsCottonCandy",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.efficiency",
        value: "specification.value.efficiency100150Portions",
        isTranslatableValue: true,
      },
      { labelKey: "specification.label.power", value: "230V" },
      {
        labelKey: "specification.label.operator",
        value: "specification.value.operatorIncluded",
        isTranslatableValue: true,
      },
    ],
    pricingOptions: [{ base: 250, currency: "zł", period: "hour" }],
    pricingDisplayMode: "standard",
    offerSectionPageKey: PAGE_KEYS.OFFER_COTTON_CANDY,
  },
  {
    id: "popcorn",
    name: "Popcorn",
    category: "cukiernicze",
    description: "attractionsData.popcorn.description",
    shortDescription: "attractionsData.popcorn.shortDescription",
    images: [
      "/img/p/1.avif",
      "/img/p/2.avif",
      "/img/p/4.avif",
      "/img/p/p1.avif",
      "/img/p/p2.avif",
      "/img/p/p3.avif",
    ],
    icon: "fas fa-seedling",
    features: [
      "feature.popcornMachines",
      "feature.freshPopcornLive",
      "feature.variousFlavors",
      "feature.attractivePackaging",
      "feature.professionalService",
      "feature.hygieneQuality",
    ],
    specifications: [
      {
        labelKey: "specification.label.flavors",
        value: "specification.value.flavorsPopcorn",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.efficiency",
        value: "specification.value.efficiency200Portions",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.machineType",
        value: "specification.value.machineTypePopcorn",
        isTranslatableValue: true,
      },
      { labelKey: "specification.label.power", value: "230V" },
      {
        labelKey: "specification.label.packaging",
        value: "specification.value.packagingPaper",
        isTranslatableValue: true,
      },
    ],
    pricingOptions: [{ base: 280, currency: "zł", period: "hour" }],
    pricingDisplayMode: "standard",
    offerSectionPageKey: PAGE_KEYS.OFFER_POPCORN,
  },
  {
    id: "fontanna-czekoladowa",
    name: "Fontanna Czekoladowa",
    category: "cukiernicze",
    description: "attractionsData.fontanna-czekoladowa.description",
    shortDescription: "attractionsData.fontanna-czekoladowa.shortDescription",
    images: [
      "/img/f/1.avif",
      "/img/f/2.avif",
      "/img/f/3.avif",
      "/img/f/4.avif",
      "/img/f/5.avif",
      "/img/f/6.avif",
    ],
    icon: "fas fa-birthday-cake",
    features: [
      "feature.variousChocolateTypes",
      "feature.freshFruitIncluded",
      "feature.elegantPresentation",
      "feature.professionalService",
      "feature.hygieneSafety",
      "feature.toppings",
    ],
    specifications: [
      {
        labelKey: "specification.label.chocolateTypes",
        value: "specification.value.chocolateTypesFull",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.fountainHeight",
        value: "specification.value.fountainHeightCm",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.chocolateCapacity",
        value: "specification.value.chocolateCapacityKg",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.toppings",
        value: "specification.value.toppingsFull",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.waiter",
        value: "specification.value.waiterIncluded",
        isTranslatableValue: true,
      },
    ],
    pricingOptions: [{ base: 800, currency: "zł", period: "impreza" }],
    pricingDisplayMode: "standard",
    offerSectionPageKey: PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN,
  },
  {
    id: "kompleksowa-obsluga",
    name: "Kompleksowa Obsługa Eventów",
    category: "uslugi",
    description: "attractionsData.kompleksowa-obsluga.description",
    shortDescription: "attractionsData.kompleksowa-obsluga.shortDescription",
    images: [
      "/img/k/1.avif",
      "/img/k/2.avif",
      "/img/k/3.avif",
      "/img/k/16.avif",
      "/img/k/17.avif",
      "/img/k/18.avif",
    ],
    icon: "fas fa-users",
    features: [
      "feature.consultationPlanning",
      "feature.spaceDesign",
      "feature.deliveryCoordination",
      "feature.professionalSetup",
      "feature.eventSupport",
      "feature.comprehensiveInsurance",
    ],
    specifications: [
      {
        labelKey: "specification.label.experience",
        value: "specification.value.experienceYears",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.team",
        value: "specification.value.teamProfessional",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.area",
        value: "specification.value.areaKm",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.eventTypes",
        value: "specification.value.eventTypesFull",
        isTranslatableValue: true,
      },
      {
        labelKey: "specification.label.realizationTime",
        value: "specification.value.realizationTimeHours",
        isTranslatableValue: true,
      },
    ],
    pricingOptions: [{ base: 500, currency: "zł", period: "event" }],
    pricingDisplayMode: "standard",
  },
];

export const getAttractionsByCategory = (category: string): Attraction[] => {
  return attractions.filter((attraction) => attraction.category === category);
};

export const getAttractionById = (id: string): Attraction | undefined => {
  return attractions.find((attraction) => attraction.id === id);
};
