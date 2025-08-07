// src/components/AttractionDetailModal.tsx

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Attraction, PricingOption } from "@/data/attractions";
import { useLanguage } from "@/hooks/useLanguage";
import { CheckCircle, Phone, X } from "lucide-react";

interface AttractionDetailModalProps {
  attraction: Attraction;
  isOpen: boolean;
  onClose: () => void;
}

export default function AttractionDetailModal({
  attraction,
  isOpen,
  onClose,
}: AttractionDetailModalProps) {
  const { t, language } = useLanguage();

  const renderPrice = (option: PricingOption, isItemList: boolean = false) => {
    if (isItemList) {
      return t("pricingPage.itemizedPricingLabel");
    }
    if (!option.base) return t("pricingPage.askForDate");

    const currencyUnitText = t(`currencyUnit.${option.currency.toLowerCase()}`);
    const periodText = t(
      `pricing.perPeriod.${option.period.toLowerCase().replace(/\s+/g, "-")}`
    );

    if (language === "en") {
      return `${currencyUnitText} ${option.base} / ${periodText}`;
    }
    return `${option.base} ${currencyUnitText} / ${periodText}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader className="pr-10">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
            {t(`attractionsData.${attraction.id}.name`, {
              defaultValue: attraction.name,
            })}
          </DialogTitle>
          <DialogDescription className="text-sm">
            {t(
              `category.${attraction.category
                .toLowerCase()
                .replace(/\s+/g, "")}`
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">{t("common.close")}</span>
        </DialogClose>
        <div className="flex-grow overflow-y-auto pr-2 space-y-6">
          <p className="text-muted-foreground">
            {t(`attractionsData.${attraction.id}.description`, {
              defaultValue: attraction.description,
            })}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                {t("modal.featuresTitle")}
              </h3>
              <ul className="space-y-2">
                {attraction.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {t(featureKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                {t("modal.pricingDetails")}
              </h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                {attraction.pricingDisplayMode === "itemList" ? (
                  <ul className="space-y-3">
                    {attraction.specifications.map(
                      (spec) =>
                        spec.price != null && (
                          <li
                            key={spec.labelKey}
                            className="flex justify-between items-center text-sm"
                          >
                            <span>{t(spec.labelKey)}</span>
                            <span className="font-semibold text-primary">
                              {spec.period === "gratis"
                                ? t("pricing.perPeriod.gratis")
                                : language === "en"
                                ? `${t(
                                    `currencyUnit.${spec.currency?.toLowerCase()}`
                                  )} ${spec.price}`
                                : `${spec.price} ${t(
                                    `currencyUnit.${spec.currency?.toLowerCase()}`
                                  )}`}
                            </span>
                          </li>
                        )
                    )}
                  </ul>
                ) : (
                  attraction.pricingOptions.map((option, index) => (
                    <div key={index} className="mb-2">
                      <p className="font-bold text-xl text-primary">
                        {renderPrice(option)}
                      </p>
                      {option.descriptionKey && (
                        <p className="text-sm text-muted-foreground">
                          {t(option.descriptionKey)}
                        </p>
                      )}
                    </div>
                  ))
                )}
                {attraction.pricingNoteKey && (
                  <p className="text-xs text-muted-foreground mt-3">
                    {t(attraction.pricingNoteKey)}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              {t("modal.galleryTitle")}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {attraction.images.slice(0, 6).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${attraction.name} - ${index + 1}`}
                  className="rounded-md object-cover aspect-video w-full h-full"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t">
          <div className="bg-secondary/50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-primary">{t("modal.ctaTitle")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("modal.ctaDescription")}
              </p>
            </div>
            <Button asChild size="lg">
              <a
                href={`tel:${t("contact.phoneValue", {
                  defaultValue: "+48531890827",
                })}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                {t("cta.callNow")}
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
