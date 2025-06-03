import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { Attraction } from "@/data/attractions";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

interface AttractionCardProps {
  attraction: Attraction;
  index?: number;
}

export default function AttractionCard({
  attraction,
  index = 0,
}: AttractionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, language } = useLanguage();

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
  const attractionShortDescriptionKey = `attractionsData.${attraction.id}.shortDescription`;

  const translatedName = t(attractionNameKey, undefined, attraction.name);
  const translatedShortDescription = t(
    attractionShortDescriptionKey,
    undefined,
    attraction.shortDescription
  );

  const categoryKey = `category.${attraction.category
    .toLowerCase()
    .replace(/\s+/g, "")}`;
  const translatedCategory = t(categoryKey, undefined, attraction.category);

  const mainPricingOption = attraction.pricingOptions[0];

  if (!mainPricingOption) {
    // Zostawiam console.error, bo to ważna informacja o błędzie w danych
    console.error(`Attraction ${attraction.id} has no pricing options!`);
    return null;
  }

  const periodKey = `pricing.perPeriod.${mainPricingOption.period
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
  const translatedPeriod = t(periodKey, undefined, mainPricingOption.period);

  const pricingFromTextRaw = t("attractionCard.priceFrom");
  const currencyKeyForLookup = `currencyUnit.${mainPricingOption.currency.toLowerCase()}`;
  const currencyUnitTextRaw = t(
    currencyKeyForLookup,
    undefined,
    mainPricingOption.currency
  );

  const isItemized = attraction.pricingDisplayMode === "itemList";
  let formattedPriceText: string;

  if (isItemized && attraction.id === "stoly-krzesla-obrusy") {
    formattedPriceText = t("pricingPage.itemizedPricingLabel");
  } else {
    if (!mainPricingOption.base) {
      formattedPriceText = t("pricingPage.askForDate", {
        defaultValue: "Zapytaj o cenę",
      });
    } else {
      const priceBaseStr = String(mainPricingOption.base);
      const part1 = pricingFromTextRaw.trim();
      const part2 = currencyUnitTextRaw.trim();

      if (language === "en") {
        formattedPriceText = part1 + " " + part2 + " " + priceBaseStr;
      } else {
        formattedPriceText = part1 + " " + priceBaseStr + " " + part2;
      }
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="card-hover cursor-pointer group h-full flex flex-col">
          <CardContent className="p-0 flex-grow flex flex-col">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={attraction.images[0]}
                alt={translatedName}
                className="w-full h-60 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-slate-800 dark:bg-slate-800 dark:text-white px-2 py-1 text-xs"
                >
                  <span className="text-base mr-1.5">
                    {getIconElement(attraction.icon)}
                  </span>
                  {translatedCategory}
                </Badge>
              </div>
            </div>

            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-700  dark:text-slate-800 mb-1.5 line-clamp-2">
                  {translatedName}
                </h3>
                <p className="text-slate-500 dark:text-slate-600 mb-3 text-xs leading-relaxed line-clamp-3 min-h-[3.75rem]">
                  {translatedShortDescription}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-md font-semibold text-sky-700 dark:text-sky-800">
                    {formattedPriceText}
                    {!(
                      isItemized && attraction.id === "stoly-krzesla-obrusy"
                    ) &&
                      mainPricingOption.base && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                          {" "}
                          / {translatedPeriod}
                        </span>
                      )}
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full btn-gradient text-white hover:shadow-lg transition-all text-sm py-2"
              >
                <Info className="h-3.5 w-3.5 mr-1.5" />
                {t("attractionCard.details")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        attraction={attraction}
      />
    </>
  );
}
