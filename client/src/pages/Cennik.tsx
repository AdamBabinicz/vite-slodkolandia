import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Phone, Info } from "lucide-react";
import { motion } from "framer-motion";
import CallToAction from "@/components/CallToAction";
import { attractions, Attraction } from "@/data/attractions";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocation } from "wouter";
import Modal from "@/components/Modal"; // <-- 1. Importujemy ISTNIEJĄCY Modal.tsx

interface CategoryFilterCennik {
  id: string;
  nameKey: string;
  filterLogic: (attraction: Attraction) => boolean;
}

export default function Cennik() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t, language } = useLanguage();
  const [location] = useLocation();

  // <-- 2. Dodajemy stan do obsługi modala (tak jak poprzednio)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);

  // Funkcja otwierająca modal (tak jak poprzednio)
  const handleDetailsClick = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const handleFooterNavigation = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    };
    document.addEventListener("footerNavigation", handleFooterNavigation);
    return () => {
      document.removeEventListener("footerNavigation", handleFooterNavigation);
    };
  }, []);

  const additionalServices = [
    {
      nameKey: "pricingPage.additionalServiceSnacksInfo",
      price: "",
      unitKey: "",
    },
    {
      nameKey: "pricingPage.additionalServiceExtraChocolate",
      price: "",
      unitKey: "",
    },
    {
      nameKey: "pricingPage.additionalServiceTablecloth",
      price: "",
      unitKey: "",
    },
  ];

  const categories: CategoryFilterCennik[] = [
    {
      id: "all",
      nameKey: "pricingPage.categoryAll",
      filterLogic: (attr) => attr.category !== "uslugi",
    },
    {
      id: "namioty",
      nameKey: "nav.tents",
      filterLogic: (attr) => attr.category === "namioty",
    },
    {
      id: "wyposazenie",
      nameKey: "nav.tablesChairs",
      filterLogic: (attr) => attr.category === "wyposazenie",
    },
    {
      id: "dmuchance",
      nameKey: "nav.inflatables",
      filterLogic: (attr) => attr.category === "dmuchance",
    },
    {
      id: "wata-cukrowa",
      nameKey: "nav.cottonCandy",
      filterLogic: (attr) => attr.id === "wata-cukrowa",
    },
    {
      id: "popcorn",
      nameKey: "nav.popcorn",
      filterLogic: (attr) => attr.id === "popcorn",
    },
    {
      id: "fontanna-czekoladowa",
      nameKey: "nav.chocolateFountain",
      filterLogic: (attr) => attr.id === "fontanna-czekoladowa",
    },
  ];

  const getTranslatedCategoryName = (attractionCategory: string) => {
    if (!attractionCategory) return "";
    const categoryKey = `category.${attractionCategory
      .toLowerCase()
      .replace(/\s+/g, "")}`;
    return t(categoryKey, { defaultValue: attractionCategory });
  };

  const selectedFilter = categories.find((cat) => cat.id === selectedCategory);
  const filteredAttractions = selectedFilter
    ? attractions.filter(selectedFilter.filterLogic)
    : attractions.filter((attr) => attr.category !== "uslugi");

  return (
    <>
      <div className="pt-16">
        {/* ... (sekcje hero, filtry - bez zmian) ... */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-sky-100 to-emerald-100 dark:from-slate-900 dark:to-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                {t("pricingPage.heroTitle")}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                {t("pricingPage.heroDescription")}
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Badge
                  variant="secondary"
                  className="text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 bg-white/80 dark:bg-card dark:text-card-foreground"
                >
                  {t("pricingPage.badgeTransportFree15km")}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 bg-white/80 dark:bg-card dark:text-card-foreground"
                >
                  {t("pricingPage.badgeSetupIncluded")}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 bg-white/80 dark:bg-card dark:text-card-foreground"
                >
                  {t("pricingPage.badgeInsuranceOC")}
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted dark:bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 dark:text-card-foreground/60">
                {t("pricingPage.individualTitle")}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t("pricingPage.individualDescription")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category.id)}
                    size="sm"
                  >
                    {category.nameKey ? t(category.nameKey) : ""}
                  </Button>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredAttractions.map((attraction, index) => {
                const mainPricingOption = attraction.pricingOptions[0];
                if (!mainPricingOption) return null;
                const attractionNameKey = `attractionsData.${attraction.id}.name`;
                const translatedName = t(attractionNameKey, {
                  defaultValue: attraction.name,
                });

                const periodKey = mainPricingOption.period
                  ? `pricing.perPeriod.${mainPricingOption.period
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
                  : "";
                const translatedPeriod = periodKey
                  ? t(periodKey, {
                      defaultValue: mainPricingOption.period,
                    })
                  : mainPricingOption.period;

                const currencyUnitKey = mainPricingOption.currency
                  ? `currencyUnit.${mainPricingOption.currency.toLowerCase()}`
                  : "";
                const currencyUnitText = currencyUnitKey
                  ? t(currencyUnitKey, {
                      defaultValue: mainPricingOption.currency,
                    })
                  : mainPricingOption.currency;

                const shortDescriptionKey = `attractionsData.${attraction.id}.shortDescription`;
                const translatedShortDescription = t(shortDescriptionKey, {
                  defaultValue: attraction.shortDescription,
                });
                const pricingFromText = t("attractionCard.priceFrom");
                const isItemized = attraction.pricingDisplayMode === "itemList";

                return (
                  <motion.div
                    key={attraction.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow bg-card text-card-foreground">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-foreground mb-1 dark:text-card-foreground/60">
                          {translatedName}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="text-xs w-fit border-border text-muted-foreground"
                        >
                          {getTranslatedCategoryName(attraction.category)}
                        </Badge>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-4 min-h-[3rem]">
                            {translatedShortDescription}
                          </p>
                          <div className="text-2xl font-bold text-primary mb-1">
                            {isItemized &&
                            attraction.id === "stoly-krzesla-obrusy"
                              ? t("pricingPage.itemizedPricingLabel")
                              : language === "en" && mainPricingOption.base
                              ? `${pricingFromText}${currencyUnitText} ${mainPricingOption.base}`
                              : mainPricingOption.base
                              ? `${pricingFromText}${mainPricingOption.base} ${currencyUnitText}`
                              : t("pricingPage.askForDate")}
                          </div>
                          {!(
                            isItemized &&
                            attraction.id === "stoly-krzesla-obrusy"
                          ) &&
                            mainPricingOption.base && (
                              <div className="text-xs text-muted-foreground">
                                {" "}
                                / {translatedPeriod}
                              </div>
                            )}
                        </div>
                        {/* <-- 3. Zmieniamy przycisk: usuwamy WouterLink i asChild, dodajemy onClick */}
                        <Button
                          variant="link"
                          className="p-0 h-auto mt-4 text-primary self-start"
                          onClick={() => handleDetailsClick(attraction)}
                        >
                          {t("attractionCard.details")}{" "}
                          <Info className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            {filteredAttractions.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😔</div>
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

        {/* ... (pozostałe sekcje - bez zmian) ... */}
        <section className="py-12 md:py-16 bg-background dark:bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {t("pricingPage.additionalServicesTitle")}
                </h2>
                <div className="space-y-3">
                  {additionalServices.map((service, index) =>
                    service.nameKey ? (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                      >
                        <span className="text-muted-foreground dark:text-card-foreground text-sm md:text-base">
                          {t(service.nameKey)}
                        </span>
                        {service.price && (
                          <span className="font-semibold text-primary text-sm md:text-base">
                            {service.price}{" "}
                            {service.unitKey ? t(service.unitKey) : ""}
                          </span>
                        )}
                      </div>
                    ) : null
                  )}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      {t("pricingPage.discountsTitle")}
                    </h3>
                    <div className="space-y-5">
                      {[
                        {
                          icon: "💰",
                          titleKey: "pricingPage.discountPackages",
                          descKey: "pricingPage.discountPackagesDesc",
                        },
                        {
                          icon: "📅",
                          titleKey: "pricingPage.discountLongTerm",
                          descKey: "pricingPage.discountLongTermDesc",
                        },
                        {
                          icon: "👥",
                          titleKey: "pricingPage.discountLoyal",
                          descKey: "pricingPage.discountLoyalDesc",
                        },
                      ].map((discount) =>
                        discount.titleKey ? (
                          <div
                            key={discount.titleKey}
                            className="flex items-start"
                          >
                            <div className="text-xl mr-3 md:mr-4 mt-0.5">
                              {discount.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                {t(discount.titleKey)}
                              </h4>
                              <p className="text-sm opacity-90">
                                {t(discount.descKey)}
                              </p>
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                    <div className="mt-8">
                      <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-slate-100"
                      >
                        <a
                          href={`tel:${t("contact.phoneValue", {
                            defaultValue: "+48531890827",
                          })}`}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          {t("pricingPage.askForDiscount")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-amber-100/50 dark:bg-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-10"
            >
              <Info className="h-10 w-10 md:h-12 md:w-12 text-amber-600 dark:text-accent mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                {t("pricingPage.importantInfoTitle")}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="border-amber-300 dark:border-accent/30 bg-card">
                <CardHeader>
                  <CardTitle className="text-amber-700 dark:text-accent flex items-center text-lg md:text-xl">
                    {t("pricingPage.rentalConditionsTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2.5 text-sm text-muted-foreground">
                  <p>{t("pricingPage.rentalCondition1")}</p>
                  <p>{t("pricingPage.rentalCondition2")}</p>
                  <p>{t("pricingPage.rentalCondition3")}</p>
                  <p>{t("pricingPage.rentalCondition4")}</p>
                </CardContent>
              </Card>
              <Card className="border-amber-300 dark:border-accent/30 bg-card">
                <CardHeader>
                  <CardTitle className="text-amber-700 dark:text-accent flex items-center text-lg md:text-xl">
                    {t("pricingPage.transportSetupTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2.5 text-sm text-muted-foreground">
                  <p>{t("pricingPage.transportSetup1")}</p>
                  <p>{t("pricingPage.transportSetup2")}</p>
                  <p>{t("pricingPage.transportSetup3")}</p>
                  <p>{t("pricingPage.transportSetup4")}</p>
                  <p>{t("pricingPage.transportSetup5")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CallToAction />
      </div>

      {/* <-- 4. Renderujemy ISTNIEJĄCY Modal warunkowo */}
      {isModalOpen && selectedAttraction && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          attraction={selectedAttraction}
        />
      )}
    </>
  );
}
