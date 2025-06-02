import { useState, useEffect } from "react"; // Usunięto useEffect, jeśli niepotrzebny
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Images, Filter } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import AttractionGallery from "@/components/AttractionGallery";
import CallToAction from "@/components/CallToAction";
import { stockPhotos } from "@/data/stockPhotos";
import { useLanguage } from "@/hooks/useLanguage"; // Używamy Twojego hooka językowego
// Usunięto useLocation i navigate, jeśli nie zmieniamy URL
import {
  getLocalizedPath,
  PAGE_KEYS,
  // getLocalizedSlug, // Niepotrzebne, jeśli ID sekcji są statyczne
  // getInternalRoutePath, // Niepotrzebne wewnątrz tego komponentu, jeśli nie generuje linków
} from "@/config/paths";
import { attractions } from "@/data/attractions"; // Dla tablesChairsImages

// Definicja kategorii, jak w Twoim Foto.txt, ale z nameKey dla i18n
interface SimpleGalleryCategory {
  id: string; // Proste, statyczne ID, np. "namioty", "all", "realizacje"
  nameKey: string; // Klucz do tłumaczenia nazwy
  images: string[];
  descriptionKey?: string; // Opcjonalny klucz do tłumaczenia opisu
  // Dodajemy htmlId, jeśli chcemy mieć możliwość linkowania do sekcji, nawet jeśli nie używamy tego aktywnie
  htmlId?: string; // Np. "foto-namioty" - może być statyczne lub generowane, jeśli potrzebne
}

// Definicja kategorii, staraj się używać prostych, stałych ID
// pageKeyForSlug nie jest tu potrzebne, jeśli ID HTML są statyczne lub nie używane do nawigacji URL
const sourceGalleryCategories: SimpleGalleryCategory[] = [
  {
    id: "all",
    nameKey: "galleryPage.categoryAll",
    images: [
      ...(stockPhotos.partyTents || []),
      ...(attractions.find((attr) => attr.id === "stoly-krzesla-obrusy")
        ?.images || []),
      ...(stockPhotos.inflatableCastles || []),
      ...(stockPhotos.cottonCandyMachine || []),
      ...(stockPhotos.popcornMachine || []),
      ...(stockPhotos.chocolateFountain || []),
      ...(stockPhotos.eventSetup || []),
    ].filter(Boolean) as string[], // Upewnij się, że to tablica stringów
    htmlId: "gallery-all-content", // Opcjonalne ID dla całej sekcji "wszystkie"
  },
  {
    id: "namioty",
    nameKey: "galleryPage.categoryTents",
    htmlId: "foto-namioty",
    images: stockPhotos.partyTents || [],
    descriptionKey: "galleryPage.sectionTentsDesc",
  },
  {
    id: "stoly",
    nameKey: "galleryPage.categoryTablesChairs",
    htmlId: "foto-stoly",
    images:
      attractions.find((attr) => attr.id === "stoly-krzesla-obrusy")?.images ||
      [],
    descriptionKey: "galleryPage.sectionTablesChairsDescription",
  },
  {
    id: "dmuchance",
    nameKey: "galleryPage.categoryInflatables",
    htmlId: "foto-dmuchance",
    images: stockPhotos.inflatableCastles || [],
    descriptionKey: "galleryPage.sectionInflatablesDesc",
  },
  {
    id: "wata",
    nameKey: "galleryPage.categoryCottonCandy",
    htmlId: "foto-wata",
    images: stockPhotos.cottonCandyMachine || [],
    descriptionKey: "galleryPage.sectionCottonCandyDesc",
  },
  {
    id: "popcorn",
    nameKey: "galleryPage.categoryPopcorn",
    htmlId: "foto-popcorn",
    images: stockPhotos.popcornMachine || [],
    descriptionKey: "galleryPage.sectionPopcornDesc",
  },
  {
    id: "fontanny",
    nameKey: "galleryPage.categoryFountains",
    htmlId: "foto-fontanny",
    images: stockPhotos.chocolateFountain || [],
    descriptionKey: "galleryPage.sectionFountainsDesc",
  },
  {
    id: "realizacje",
    nameKey: "galleryPage.categoryEventSetups",
    htmlId: "foto-realizacje",
    images: stockPhotos.eventSetup || [],
    descriptionKey: "galleryPage.sectionEventSetupsDesc",
  },
];

export default function Galeria() {
  const [activeCategory, setActiveCategory] = useState("all"); // Używa prostych ID: "all", "namioty", "dmuchance"
  const { t, language } = useLanguage();

  // Opcjonalny useEffect do odczytania hasha TYLKO przy pierwszym załadowaniu strony
  // i ewentualnego przewinięcia, jeśli ktoś wejdzie z linku z hashem.
  // Ten hash NIE będzie aktualizowany przez kliknięcia filtrów.
  useEffect(() => {
    const hashFromUrl = window.location.hash.replace("#", "");
    if (hashFromUrl) {
      const categoryMatchingHash = sourceGalleryCategories.find(
        (cat) => cat.htmlId === hashFromUrl
      );
      if (categoryMatchingHash) {
        setActiveCategory(categoryMatchingHash.id); // Ustawia wewnętrzny filtr

        setTimeout(() => {
          const element = document.getElementById(hashFromUrl);
          if (element) {
            console.log(
              `[Galeria initial load] Scrolling to element id="${hashFromUrl}"`
            );
            const navbarElement = document.querySelector("nav");
            const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;
            const yOffset = -(navbarHeight + 24);
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          } else {
            console.warn(
              `[Galeria initial load] Element with id="${hashFromUrl}" not found for scrolling.`
            );
          }
        }, 150);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Uruchom tylko raz przy montowaniu

  const currentCategoryData = sourceGalleryCategories.find(
    (cat) => cat.id === activeCategory
  );
  const currentImages = currentCategoryData ? currentCategoryData.images : [];
  const currentCategoryName = currentCategoryData
    ? t(currentCategoryData.nameKey)
    : t("galleryPage.categoryAll");

  const handleFilterButtonClick = (filterId: string) => {
    setActiveCategory(filterId);
    // Jeśli chcesz przewinąć do góry sekcji galerii po zmianie filtra:
    const galleryContainer = document.getElementById("gallery-content-area");
    if (galleryContainer) {
      const navbarElement = document.querySelector("nav");
      const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;
      const yOffset = -(navbarHeight + 0); // Możesz dostosować offset
      const y =
        galleryContainer.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <SEOHead
        title={t("galleryPage.seoTitle")}
        description={t("galleryPage.seoDescription")}
        canonical={getLocalizedPath(PAGE_KEYS.GALLERY, language)} // pageKey, language
      />

      <div className="pt-16">
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
                  <Images className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                {t("galleryPage.heroTitle")}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                {t("galleryPage.heroDescription")}
              </p>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white/80 dark:bg-card dark:text-card-foreground"
              >
                {t("galleryPage.badgeEventsDone")}
              </Badge>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <div className="flex items-center mr-4 mb-2 md:mb-0">
                <Filter className="h-4 w-4 text-slate-600 dark:text-slate-400 mr-2" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {t("galleryPage.filterLabel")}:
                </span>
              </div>
              {sourceGalleryCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => handleFilterButtonClick(category.id)}
                  size="sm"
                  className="mb-2 md:mb-0 whitespace-nowrap"
                >
                  {t(category.nameKey)}
                  {category.images && category.images.length > 0 && (
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
                      {category.images.length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Dodajemy ID do tego kontenera, aby móc do niego przewijać po zmianie filtra */}
        <section
          id="gallery-content-area"
          className="py-12 md:py-16 bg-background dark:bg-background scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeCategory === "all" ? (
              <div className="space-y-16 md:space-y-20">
                {sourceGalleryCategories
                  .filter((cat) => cat.id !== "all")
                  .map((category) => (
                    <div
                      key={category.id}
                      id={category.htmlId || category.id} // Użyj htmlId, jeśli jest, inaczej proste id
                      className="scroll-mt-24" // Ważne dla offsetu, dostosuj wartość
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-8"
                      >
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                          {t(category.nameKey)}
                        </h2>
                        {category.descriptionKey && (
                          <p className="text-slate-600 dark:text-slate-300 mb-6">
                            {t(category.descriptionKey)}
                          </p>
                        )}
                      </motion.div>
                      {category.images && category.images.length > 0 ? (
                        <AttractionGallery
                          images={category.images}
                          title={t(category.nameKey)}
                        />
                      ) : (
                        <p className="text-center text-slate-500 dark:text-slate-400 py-4">
                          {t("galleryPage.noPhotosInCategory")}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              // Widok pojedynczej kategorii - użyj htmlId jeśli istnieje, inaczej proste id dla elementu
              <div id={currentCategoryData?.htmlId || currentCategoryData?.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                    {currentCategoryName}
                  </h2>
                  {currentCategoryData?.descriptionKey && (
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      {t(currentCategoryData.descriptionKey)}
                    </p>
                  )}
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("galleryPage.currentCategoryInfo", {
                      count: currentImages.length.toString(),
                    })}
                  </p>
                </motion.div>

                {currentCategoryData && currentImages.length > 0 ? (
                  <AttractionGallery
                    images={currentImages}
                    title={currentCategoryName}
                  />
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🖼️</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t("galleryPage.noPhotosInCategory")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("galleryPage.noPhotosInCategoryDescription")}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-slate-50 dark:bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {t("galleryPage.statsTitle")}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  number: "500+",
                  labelKey: "galleryPage.statEvents",
                  icon: "🎪",
                },
                {
                  number: "1000+",
                  labelKey: "galleryPage.statKids",
                  icon: "😊",
                },
                {
                  number: "50+",
                  labelKey: "galleryPage.statAttractions",
                  icon: "🎨",
                },
                {
                  number: "100km",
                  labelKey: "galleryPage.statRadius",
                  icon: "🚛",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-card text-card-foreground dark:bg-slate-800/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary dark:text-sky-400 mb-1.5">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              ))}
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
