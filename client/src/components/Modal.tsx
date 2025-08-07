import React, { useEffect } from "react";
import { X, Phone, MessageCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Attraction } from "@/data/attractions";
import AttractionGallery from "./AttractionGallery";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { PAGE_KEYS, getInternalRoutePath } from "@/config/paths";
import { Link as WouterLink } from "wouter";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  attraction: Attraction;
}

export default function Modal({ isOpen, onClose, attraction }: ModalProps) {
  const { t, language } = useLanguage();

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      const originalOverflow = window.getComputedStyle(body).overflow;
      const originalPaddingRight = window.getComputedStyle(body).paddingRight;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${
          parseFloat(originalPaddingRight || "0") + scrollbarWidth
        }px`;
      }
      body.setAttribute("data-modal-scroll-locked", "true");

      return () => {
        body.style.overflow = originalOverflow;
        if (scrollbarWidth > 0) {
          body.style.paddingRight = originalPaddingRight;
        }
        body.removeAttribute("data-modal-scroll-locked");
      };
    }
  }, [isOpen]);

  const getIconElement = (iconClass: string) => {
    const iconMap: { [key: string]: string } = {
      "fas fa-campground": "🏕️",
      "fas fa-castle": "🏰",
      "fas fa-candy-cane": "🍭",
      "fas fa-seedling": "🍿",
      "fas fa-birthday-cake": "🍫",
      "fas fa-users": "👥",
      "fas fa-chair": "🪑",
    };
    return iconMap[iconClass] || "🎉";
  };

  const attractionNameKey = `attractionsData.${attraction.id}.name`;
  const attractionDescriptionKey = `attractionsData.${attraction.id}.description`;

  const translatedName = t(attractionNameKey, {
    defaultValue: attraction.name,
  });
  const translatedDescription = t(attractionDescriptionKey, {
    defaultValue: attraction.description,
  });

  const categoryKey = `category.${attraction.category
    .toLowerCase()
    .replace(/\s+/g, "")}`;
  const translatedCategory = t(categoryKey, {
    defaultValue: attraction.category,
  });

  const pricingFromTextGlobal = t("attractionCard.priceFrom");

  const contactPathForLink = getInternalRoutePath(PAGE_KEYS.CONTACT, language);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4 modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 250,
              duration: 0.2,
            }}
            className="bg-card text-card-foreground rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-shrink-0 flex items-center justify-between p-5 md:p-6 border-b dark:border-slate-700">
              <div className="flex items-center space-x-3">
                <span className="text-3xl md:text-4xl">
                  {getIconElement(attraction.icon)}
                </span>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    {translatedName}
                  </h2>
                  <Badge
                    variant="outline"
                    className="mt-1 text-xs dark:border-slate-600 dark:text-slate-400"
                  >
                    {translatedCategory}
                  </Badge>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-muted-foreground hover:bg-muted dark:hover:bg-slate-700 rounded-full"
                aria-label={t("common.close", { defaultValue: "Zamknij" })}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-5 md:p-6 space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("offerPage.sectionDescriptionTitle", {
                      defaultValue: "Opis",
                    })}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {translatedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {attraction.pricingDisplayMode === "itemList"
                      ? t("modal.pricingDetails", {
                          defaultValue: "Szczegóły Cennika",
                        })
                      : t("pricingPage.title", { defaultValue: "Cennik" })}
                  </h3>
                  {attraction.pricingDisplayMode === "itemList" ? (
                    <div className="space-y-2 bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border border-primary/20 dark:border-primary/30">
                      {attraction.specifications
                        .filter(
                          (spec) =>
                            spec.price !== undefined &&
                            spec.currency &&
                            spec.period
                        )
                        .map((item, index) => {
                          const itemPeriodValueFromData = item.period;
                          const itemPeriodKey = item.period
                            ? `pricing.perPeriod.${item.period
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`
                            : "";
                          const itemTranslatedPeriodRaw = item.period
                            ? t(
                                itemPeriodKey,
                                undefined,
                                `FALLBACK_FOR_${item.period}`
                              )
                            : "";

                          const itemCurrencyUnitText = item.currency
                            ? t(`currencyUnit.${item.currency.toLowerCase()}`, {
                                defaultValue: item.currency,
                              })
                            : "";

                          let priceDisplay;
                          if (
                            item.price === 0 &&
                            item.period?.toLowerCase() === "gratis"
                          ) {
                            priceDisplay = t(itemPeriodKey, {
                              defaultValue: item.period,
                            });
                          } else {
                            const formattedBasePrice =
                              language === "en"
                                ? `${itemCurrencyUnitText} ${item.price}`
                                : `${item.price} ${itemCurrencyUnitText}`;

                            if (
                              item.price !== 0 &&
                              item.period &&
                              item.period.toLowerCase() !== "gratis"
                            ) {
                              const displayPeriod =
                                itemTranslatedPeriodRaw.replace(/\//g, " / ");
                              priceDisplay = `${formattedBasePrice} / ${displayPeriod}`;
                            } else {
                              priceDisplay = formattedBasePrice;
                            }
                          }

                          return (
                            <div
                              key={index}
                              className="flex justify-between items-baseline py-1.5 border-b border-primary/10 dark:border-primary/20 last:border-b-0"
                            >
                              <span className="text-sm md:text-base ">
                                {t(item.labelKey)}
                              </span>
                              <span className="font-semibold text-primary whitespace-nowrap">
                                {priceDisplay}
                              </span>
                            </div>
                          );
                        })}
                      {attraction.specifications.some(
                        (spec) =>
                          spec.price === 0 &&
                          spec.period?.toLowerCase() === "gratis"
                      ) && (
                        <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-primary/10 dark:border-primary/20">
                          {t("modal.freeWithTent")}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {attraction.pricingOptions.map((option, index) => {
                        const currencyUnitText = t(
                          `currencyUnit.${option.currency.toLowerCase()}`,
                          { defaultValue: option.currency }
                        );
                        const periodKey = `pricing.perPeriod.${option.period
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`;
                        const translatedPeriod = t(periodKey, {
                          defaultValue: option.period,
                        });

                        return (
                          <div
                            key={index}
                            className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 border border-primary/20 dark:border-primary/30"
                          >
                            {option.descriptionKey && (
                              <p className="text-md font-semibold text-primary mb-1">
                                {t(option.descriptionKey)}
                              </p>
                            )}
                            <div className="text-xl md:text-2xl font-bold text-primary">
                              {language === "en"
                                ? `${pricingFromTextGlobal}${currencyUnitText} ${option.base}`
                                : `${pricingFromTextGlobal}${option.base} ${currencyUnitText}`}
                              {attraction.pricingNoteKey && (
                                <sup className="top-[-0.5em] text-base">*</sup>
                              )}
                              <span className="text-base md:text-lg text-muted-foreground ml-1.5">
                                {" "}
                                / {translatedPeriod}
                              </span>
                            </div>
                            {option.capacityKey && (
                              <p className="text-xs md:text-sm text-muted-foreground mt-1 flex items-center">
                                <Users className="h-3 w-3 mr-1.5 text-primary/80" />
                                {t(option.capacityKey)}
                              </p>
                            )}
                          </div>
                        );
                      })}
                      {attraction.pricingNoteKey && (
                        <p className="text-xs text-muted-foreground mt-2">
                          {t(attraction.pricingNoteKey)}
                        </p>
                      )}
                      <p className="text-xs md:text-sm text-muted-foreground mt-2 text-center">
                        {t("modal.pricingIncludes", {
                          defaultValue:
                            "Cena zawiera transport, montaż i obsługę w promieniu 100 km od Radomia",
                        })}
                      </p>
                    </div>
                  )}
                </div>

                {attraction.features && attraction.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t("modal.featuresTitle", { defaultValue: "Cechy" })}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      {attraction.features.map((featureKey, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2.5"
                        >
                          <Zap className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground text-sm md:text-base">
                            {t(featureKey)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {attraction.specifications &&
                  attraction.specifications.filter(
                    (spec) => spec.value && spec.value.trim() !== ""
                  ).length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        {t("modal.specificationsTitle", {
                          defaultValue: "Specyfikacja",
                        })}
                      </h3>
                      <div className="bg-muted/50 dark:bg-slate-700/30 rounded-lg p-4 border dark:border-slate-700">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                          {attraction.specifications
                            .filter(
                              (spec) => spec.value && spec.value.trim() !== ""
                            )
                            .map((specItem, index) => (
                              <div key={index} className="flex flex-col">
                                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  {t(specItem.labelKey)}
                                </dt>
                                <dd className="text-sm md:text-base font-semibold">
                                  {specItem.isTranslatableValue
                                    ? t(specItem.value)
                                    : specItem.value}
                                </dd>
                              </div>
                            ))}
                        </dl>
                      </div>
                    </div>
                  )}

                {attraction.images && attraction.images.length > 0 && (
                  <>
                    <Separator className="dark:bg-slate-700" />
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {t("modal.galleryTitle", {
                          defaultValue: "Galeria Atrakcji",
                        })}
                      </h3>
                      <AttractionGallery
                        images={attraction.images}
                        title={translatedName}
                        className="gap-2 md:gap-4"
                      />
                    </div>
                  </>
                )}

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-lg p-6 text-center border border-primary/20 dark:border-primary/30">
                  <h3 className="text-xl font-bold mb-2">
                    {t("modal.ctaTitle", {
                      defaultValue: "Zainteresowany?",
                    })}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">
                    {t("modal.ctaDescription", {
                      defaultValue:
                        "Skontaktuj się z nami już dziś, aby sprawdzić dostępność i otrzymać indywidualną wycenę.",
                    })}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg" className="btn-gradient">
                      <a
                        href={`tel:${t("contact.phoneValue", {
                          defaultValue: "+48531890827",
                        })}`}
                      >
                        <Phone className="mr-2 h-4 w-4" /> {t("cta.callNow")}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary bg-transparent hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/20 focus-visible:ring-primary transition-colors duration-200 ease-in-out"
                    >
                      <WouterLink href={contactPathForLink} onClick={onClose}>
                        <MessageCircle className="mr-2 h-4 w-4" />{" "}
                        {t("cta.contactForm")}
                      </WouterLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
