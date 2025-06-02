import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { motion } from "framer-motion";
// import SEOHead from "@/components/SEOHead";
import AttractionCard from "@/components/AttractionCard";
import CallToAction from "@/components/CallToAction";
import {
  attractions,
  getAttractionsByCategory,
  Attraction,
} from "@/data/attractions";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocation } from "wouter";
import {
  getLocalizedPath,
  getLocalizedSlug,
  PageKey,
  Language,
  PAGE_KEYS,
  getInternalRoutePath, // Potrzebne do generowania ścieżki dla navigate
  defaultLang, // Potrzebne do logiki
} from "@/config/paths";

interface CategoryFilter {
  id: string;
  nameKey: string;
  pageKeyForHash: PageKey | null;
  count?: number;
  filterLogic: (attraction: Attraction) => boolean;
}

// Ta funkcja pomocnicza deriveInternalPathFromLocalized nie jest już potrzebna,
// jeśli WouterLink i navigate używają poprawnych ścieżek względem base

export default function Oferta() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t, language } = useLanguage();
  const [location, navigate] = useLocation(); // location to ścieżka względna do base

  const categories: CategoryFilter[] = [
    {
      id: "all",
      nameKey: "nav.allAttractions",
      pageKeyForHash: null,
      count: attractions.filter((attr) => attr.category !== "uslugi").length,
      filterLogic: (attr) => attr.category !== "uslugi",
    },
    {
      id: "namioty",
      nameKey: "nav.tents",
      pageKeyForHash: PAGE_KEYS.OFFER_TENTS,
      count: getAttractionsByCategory("namioty").length,
      filterLogic: (attr) => attr.category === "namioty",
    },
    {
      id: "stoly-krzesla-obrusy",
      nameKey: "nav.tablesChairs",
      pageKeyForHash: PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS,
      count: getAttractionsByCategory("wyposazenie").length,
      filterLogic: (attr) => attr.category === "wyposazenie",
    },
    {
      id: "dmuchance",
      nameKey: "nav.inflatables",
      pageKeyForHash: PAGE_KEYS.OFFER_INFLATABLES,
      count: getAttractionsByCategory("dmuchance").length,
      filterLogic: (attr) => attr.category === "dmuchance",
    },
    {
      id: "wata-cukrowa",
      nameKey: "nav.cottonCandy",
      pageKeyForHash: PAGE_KEYS.OFFER_COTTON_CANDY,
      count: attractions.filter((a) => a.id === "wata-cukrowa").length,
      filterLogic: (attr) => attr.id === "wata-cukrowa",
    },
    {
      id: "popcorn",
      nameKey: "nav.popcorn",
      pageKeyForHash: PAGE_KEYS.OFFER_POPCORN,
      count: attractions.filter((a) => a.id === "popcorn").length,
      filterLogic: (attr) => attr.id === "popcorn",
    },
    {
      id: "fontanna-czekoladowa",
      nameKey: "nav.chocolateFountain",
      pageKeyForHash: PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN,
      count: attractions.filter((a) => a.id === "fontanna-czekoladowa").length,
      filterLogic: (attr) => attr.id === "fontanna-czekoladowa",
    },
  ];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    // location z useLocation() to ścieżka WZGLĘDNA do base routera
    // np. jeśli base="/en" i URL to /en/offer#tents, location to "/offer#tents"

    const categoryFromHash = categories.find((cat) => {
      if (cat.id === "all" && !hash) return true;
      if (
        cat.pageKeyForHash &&
        hash === getLocalizedSlug(cat.pageKeyForHash, language)
      )
        return true;
      return false;
    });

    const internalOfferPathForLang = getInternalRoutePath(
      PAGE_KEYS.OFFER,
      language
    ); // np. "/offer" lub "/oferta"

    if (categoryFromHash) {
      if (activeCategory !== categoryFromHash.id) {
        console.log(
          `[Oferta useEffect] Setting activeCategory from hash: ${categoryFromHash.id}`
        );
        setActiveCategory(categoryFromHash.id);
      }
    } else if (!hash && location.startsWith(internalOfferPathForLang)) {
      // Sprawdź, czy jesteśmy na bazowej ścieżce oferty
      if (activeCategory !== "all") {
        console.log(
          `[Oferta useEffect] No hash, on offer base path. Setting activeCategory to "all"`
        );
        setActiveCategory("all");
      }
    }
  }, [location, language]); // Usunięto categories z zależności, bo jest stała

  const selectedFilter = categories.find((cat) => cat.id === activeCategory);
  const filteredAttractions = selectedFilter
    ? attractions.filter(selectedFilter.filterLogic)
    : attractions.filter((attr) => attr.category !== "uslugi");

  const activeCategoryName = selectedFilter?.nameKey || "nav.allAttractions";

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId); // Ustaw kategorię lokalnie od razu dla UI
    const categoryObject = categories.find((c) => c.id === categoryId);

    // Generujemy ścieżkę WEWNĘTRZNĄ (względną do base) dla Woutera
    let pathForWouter = getInternalRoutePath(PAGE_KEYS.OFFER, language); // np. "/offer" lub "/oferta"
    let hashTargetSlug = "";

    if (
      categoryObject &&
      categoryObject.id !== "all" &&
      categoryObject.pageKeyForHash
    ) {
      hashTargetSlug = getLocalizedSlug(
        categoryObject.pageKeyForHash,
        language
      );
      if (hashTargetSlug) pathForWouter += `#${hashTargetSlug}`;
    }

    console.log(
      `[Oferta handleCategoryChange] Target path for Wouter navigate: "${pathForWouter}" (current language: ${language})`
    );

    // location z useLocation() to już ścieżka względna do base.
    // Porównujemy ją z nowo wygenerowaną ścieżką względną.
    if (location !== pathForWouter) {
      navigate(pathForWouter, { replace: true });
    } else {
      console.log(
        `[Oferta handleCategoryChange] Wouter location already "${location}", no navigation needed.`
      );
    }
  };

  return (
    <>
      {/* <SEOHead
        title={t("seo.offerTitle")}
        description={t("seo.offerDescription")}
        canonical={getLocalizedPath(PAGE_KEYS.OFFER, language)}
      /> */}

      <div className="pt-16">
        <section className="py-12 md:py-20 bg-gradient-to-br from-sky-100 to-emerald-100 dark:from-slate-900 dark:to-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                {t("offerPage.heroTitle")}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                {t("offerPage.heroDescription")}
              </p>
              <Badge
                variant="secondary"
                className="text-base md:text-lg px-4 py-2 bg-white/80 dark:bg-card dark:text-card-foreground"
              >
                {t("offerPage.badgeLocation")}
              </Badge>
            </motion.div>
          </div>
        </section>

        <section className="py-6 bg-white dark:bg-muted-foreground border-b border-border sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <div className="w-full md:w-auto flex items-center justify-center md:justify-start mb-2 md:mb-0 md:mr-4">
                <Filter className="h-4 w-4 text-muted-foreground mr-1.5" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {t("offerPage.filterLabel")}
                </span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => handleCategoryChange(category.id)}
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {t(category.nameKey)}
                  {category.count !== undefined && category.count > 0 && (
                    <Badge
                      variant={
                        activeCategory === category.id ? "outline" : "secondary"
                      }
                      className={`ml-2 ${
                        activeCategory === category.id
                          ? "border-primary-foreground/50 text-primary-foreground/80"
                          : "bg-muted text-muted-foreground dark:bg-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gradient-to-tl from-sky-100 to-emerald-100 dark:from-slate-900 dark:to-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {activeCategory === "all"
                  ? t("offerPage.allAttractionsCount", {
                      count: filteredAttractions.length.toString(),
                    })
                  : t("offerPage.categoryAttractionsCount", {
                      categoryName: t(activeCategoryName),
                      count: filteredAttractions.length.toString(),
                    })}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredAttractions.map((attraction, index) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  index={index}
                />
              ))}
            </div>

            {filteredAttractions.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎪</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t("offerPage.noAttractionsTitle")}
                </h3>
                <p className="text-muted-foreground">
                  {t("offerPage.noAttractionsDescription")}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted dark:bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div id={getLocalizedSlug(PAGE_KEYS.OFFER_TENTS, language)}>
                  <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-3 flex items-center text-shadow-subtle">
                    {t("offerPage.sectionTentsTitle")}
                  </h2>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    {t("offerPage.sectionTentsDescription")}
                  </p>
                </div>
                <div
                  id={getLocalizedSlug(
                    PAGE_KEYS.OFFER_TABLES_CHAIRS_LINENS,
                    language
                  )}
                >
                  <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-3 flex items-center text-shadow-subtle">
                    {t("offerPage.sectionTablesChairsTitle")}
                  </h2>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    {t("offerPage.sectionTablesChairsDescription")}
                  </p>
                </div>
                <div
                  id={getLocalizedSlug(PAGE_KEYS.OFFER_INFLATABLES, language)}
                >
                  <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-3 flex items-center text-shadow-subtle">
                    {t("offerPage.sectionInflatablesTitle")}
                  </h2>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    {t("offerPage.sectionInflatablesDescription")}
                  </p>
                </div>
                <div
                  id={getLocalizedSlug(PAGE_KEYS.OFFER_COTTON_CANDY, language)}
                  className="pt-2"
                >
                  <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-3 flex items-center text-shadow-subtle">
                    {t("nav.cottonCandy")}
                  </h2>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    {t("attractionsData.wata-cukrowa.description")}
                  </p>
                </div>
                <div
                  id={getLocalizedSlug(PAGE_KEYS.OFFER_POPCORN, language)}
                  className="pt-2"
                >
                  <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-3 flex items-center text-shadow-subtle">
                    {t("nav.popcorn")}
                  </h2>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    {t("attractionsData.popcorn.description")}
                  </p>
                </div>
                <div
                  id={getLocalizedSlug(
                    PAGE_KEYS.OFFER_CHOCOLATE_FOUNTAIN,
                    language
                  )}
                  className="pt-2"
                >
                  <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-3 flex items-center text-shadow-subtle">
                    {t("nav.chocolateFountain")}
                  </h2>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    {t("attractionsData.fontanna-czekoladowa.description")}
                  </p>
                </div>
              </motion.div>

              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 md:p-8 shadow-lg"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-shadow-subtle">
                    {t("offerPage.servicesIncludeTitle")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        {
                          titleKey: "offerPage.serviceTransport",
                          descKey: "offerPage.serviceTransportDesc",
                          color: "bg-sky-500",
                        },
                        {
                          titleKey: "offerPage.serviceProfessional",
                          descKey: "offerPage.serviceProfessionalDesc",
                          color: "bg-emerald-500",
                        },
                        {
                          titleKey: "offerPage.serviceInsurance",
                          descKey: "offerPage.serviceInsuranceDesc",
                          color: "bg-amber-500",
                        },
                      ].map((service) => (
                        <div
                          key={service.titleKey}
                          className="flex items-start space-x-3"
                        >
                          <div
                            className={`w-2 h-2 ${service.color} rounded-full mt-1.5 flex-shrink-0`}
                          ></div>
                          <div>
                            <h4 className="font-semibold text-foreground dark:text-card-foreground/60">
                              {t(service.titleKey)}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {t(service.descKey)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          titleKey: "offerPage.serviceCertified",
                          descKey: "offerPage.serviceCertifiedDesc",
                          color: "bg-purple-500",
                        },
                        {
                          titleKey: "offerPage.serviceFlexible",
                          descKey: "offerPage.serviceFlexibleDesc",
                          color: "bg-pink-500",
                        },
                        {
                          titleKey: "offerPage.serviceConsultations",
                          descKey: "offerPage.serviceConsultationsDesc",
                          color: "bg-indigo-500",
                        },
                      ].map((service) => (
                        <div
                          key={service.titleKey}
                          className="flex items-start space-x-3"
                        >
                          <div
                            className={`w-2 h-2 ${service.color} rounded-full mt-1.5 flex-shrink-0`}
                          ></div>
                          <div>
                            <h4 className="font-semibold text-foreground dark:text-card-foreground/60">
                              {t(service.titleKey)}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {t(service.descKey)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction
          variant="secondary"
          className="mx-4 sm:mx-6 lg:mx-8 my-12 md:my-16"
        />
      </div>
    </>
  );
}
