import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Images, Filter } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import AttractionGallery from "@/components/AttractionGallery";
import CallToAction from "@/components/CallToAction";
import { stockPhotos } from "@/data/stockPhotos";

const galleryCategories = [
  { id: "all", name: "Wszystkie", images: [...stockPhotos.partyTents, ...stockPhotos.inflatableCastles, ...stockPhotos.cottonCandyMachine, ...stockPhotos.popcornMachine, ...stockPhotos.chocolateFountain, ...stockPhotos.eventSetup] },
  { id: "namioty", name: "Namioty Imprezowe", images: stockPhotos.partyTents },
  { id: "dmuchance", name: "Dmuchane Atrakcje", images: stockPhotos.inflatableCastles },
  { id: "wata", name: "Wata Cukrowa", images: stockPhotos.cottonCandyMachine },
  { id: "popcorn", name: "Popcorn", images: stockPhotos.popcornMachine },
  { id: "fontanny", name: "Fontanny Czekoladowe", images: stockPhotos.chocolateFountain },
  { id: "realizacje", name: "Realizacje Eventów", images: stockPhotos.eventSetup }
];

export default function Galeria() {
  const [activeCategory, setActiveCategory] = useState("all");

  const currentCategory = galleryCategories.find(cat => cat.id === activeCategory);

  return (
    <>
      <SEOHead
        title="Galeria Zdjęć - Zobacz Nasze Atrakcje w Akcji | SŁODKOLANDIA"
        description="Obejrzyj galerię zdjęć z naszych realizacji eventowych. Namioty imprezowe, dmuchańce, wata cukrowa, popcorn i fontanny czekoladowe w akcji."
        canonical="/galeria"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
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
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Zobacz Nasze Atrakcje w Akcji!
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Galeria zdjęć z naszych realizacji eventowych. Odkryj, jak wyglądają nasze atrakcje 
                na prawdziwych imprezach i eventach w Radomiu i okolicach.
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Ponad 500 zrealizowanych eventów
              </Badge>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center mr-4 mb-2">
                <Filter className="h-4 w-4 text-slate-600 mr-2" />
                <span className="text-sm font-medium text-slate-600">Kategorie:</span>
              </div>
              {galleryCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="mb-2"
                >
                  {category.name}
                  <Badge 
                    variant="secondary" 
                    className="ml-2 bg-slate-100 text-slate-600"
                  >
                    {category.images.length}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeCategory === "all" ? (
              <div className="space-y-20">
                {/* Namioty Imprezowe */}
                <div id="foto-namioty">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                      🏕️ Namioty Imprezowe
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Profesjonalne namioty w różnych konfiguracjach - od kameralnych przyjęć po duże eventy firmowe.
                    </p>
                  </motion.div>
                  <AttractionGallery
                    images={stockPhotos.partyTents}
                    title="Namioty Imprezowe"
                  />
                </div>

                {/* Dmuchane Atrakcje */}
                <div id="foto-dmuchance">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                      🏰 Dmuchane Atrakcje
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Bezpieczna zabawa dla dzieci - zjeżdżalnie, zamki dmuchane i place zabaw.
                    </p>
                  </motion.div>
                  <AttractionGallery
                    images={stockPhotos.inflatableCastles}
                    title="Dmuchane Atrakcje"
                  />
                </div>

                {/* Wata Cukrowa */}
                <div id="foto-wata">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                      🍭 Wata Cukrowa
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Kolorowa wata cukrowa w różnych smakach - słodka atrakcja dla gości w każdym wieku.
                    </p>
                  </motion.div>
                  <AttractionGallery
                    images={stockPhotos.cottonCandyMachine}
                    title="Wata Cukrowa"
                  />
                </div>

                {/* Popcorn */}
                <div id="foto-popcorn">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                      🍿 Popcorn
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Aromatyczny popcorn przygotowywany na żywo w stylowych maszynach retro.
                    </p>
                  </motion.div>
                  <AttractionGallery
                    images={stockPhotos.popcornMachine}
                    title="Popcorn"
                  />
                </div>

                {/* Fontanny Czekoladowe */}
                <div id="foto-fontanny">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                      🍫 Fontanny Czekoladowe
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Eleganckie fontanny czekoladowe z dodatkami - wykwintna atrakcja dla smakoszy.
                    </p>
                  </motion.div>
                  <AttractionGallery
                    images={stockPhotos.chocolateFountain}
                    title="Fontanny Czekoladowe"
                  />
                </div>

                {/* Realizacje Eventów */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                      🎉 Realizacje Eventów
                    </h2>
                    <p className="text-slate-600 mb-6">
                      Zobacz jak wyglądają nasze kompleksowe realizacje - od małych przyjęć po duże eventy.
                    </p>
                  </motion.div>
                  <AttractionGallery
                    images={stockPhotos.eventSetup}
                    title="Realizacje Eventów"
                  />
                </div>
              </div>
            ) : (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    {currentCategory?.name}
                  </h2>
                  <p className="text-slate-600">
                    {currentCategory?.images.length} zdjęć w tej kategorii
                  </p>
                </motion.div>
                
                {currentCategory && (
                  <AttractionGallery
                    images={currentCategory.images}
                    title={currentCategory.name}
                  />
                )}
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Nasze Doświadczenie w Liczbach
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Zrealizowanych eventów", icon: "🎪" },
                { number: "1000+", label: "Zadowolonych dzieci", icon: "😊" },
                { number: "50+", label: "Rodzajów atrakcji", icon: "🎨" },
                { number: "30km", label: "Promień obsługi", icon: "🚛" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white rounded-lg p-6 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-sky-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction variant="secondary" className="mx-4 sm:mx-6 lg:mx-8 mb-16" />
      </div>
    </>
  );
}
