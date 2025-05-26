import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import AttractionCard from "@/components/AttractionCard";
import CallToAction from "@/components/CallToAction";
import { attractions, getAttractionsByCategory } from "@/data/attractions";

const categories = [
  { id: "all", name: "Wszystkie", count: attractions.length },
  { id: "namioty", name: "Namioty Imprezowe", count: getAttractionsByCategory("namioty").length },
  { id: "dmuchance", name: "Dmuchane Atrakcje", count: getAttractionsByCategory("dmuchance").length },
  { id: "gastro", name: "Sprzęt Gastronomiczny", count: getAttractionsByCategory("gastro").length },
  { id: "kompleksowa", name: "Kompleksowa Obsługa", count: getAttractionsByCategory("kompleksowa").length },
];

export default function Oferta() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAttractions = activeCategory === "all" 
    ? attractions 
    : getAttractionsByCategory(activeCategory);

  return (
    <>
      <SEOHead
        title="Oferta - Wynajem Atrakcji Eventowych | SŁODKOLANDIA"
        description="Poznaj naszą pełną ofertę atrakcji eventowych: namioty imprezowe, dmuchańce, wata cukrowa, popcorn, fontanny czekoladowe. Profesjonalny wynajem w Radomiu."
        canonical="/oferta"
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
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Nasza Oferta Atrakcji Eventowych
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Odkryj pełną gamę profesjonalnych atrakcji i usług eventowych. 
                Od namiotów imprezowych po kompleksową obsługę wydarzeń.
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Radom i okolice (30km)
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
              {categories.map((category) => (
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
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-slate-800">
                {activeCategory === "all" 
                  ? `Wszystkie atrakcje (${filteredAttractions.length})`
                  : `${categories.find(c => c.id === activeCategory)?.name} (${filteredAttractions.length})`
                }
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Brak atrakcji w tej kategorii
                </h3>
                <p className="text-slate-600">
                  Wybierz inną kategorię lub skontaktuj się z nami w sprawie indywidualnych rozwiązań.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Categories Overview */}
        <section id="namioty" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    🏕️ Namioty Imprezowe
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Profesjonalne namioty w różnych rozmiarach, idealne na wesela, urodziny i eventy firmowe. 
                    Oferujemy pełny serwis montażu i demontażu z możliwością dodania podłogi i oświetlenia.
                  </p>
                </div>

                <div id="dmuchance">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    🏰 Dmuchane Atrakcje
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Bezpieczne i certyfikowane dmuchańce dla dzieci. Zjeżdżalnie, zamki i place zabaw 
                    z profesjonalną obsługą i ubezpieczeniem OC.
                  </p>
                </div>

                <div id="sprzet-gastro">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    🍭 Sprzęt Gastronomiczny
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Maszyny do waty cukrowej, popcornu i eleganckie fontanny czekoladowe. 
                    Wszystko z profesjonalną obsługą i świeżymi produktami.
                  </p>
                </div>
              </motion.div>

              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-6">
                    Co zawierają nasze usługi?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Transport i montaż</h4>
                          <p className="text-sm text-slate-600">Pełny serwis dostawy i ustawienia</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Profesjonalna obsługa</h4>
                          <p className="text-sm text-slate-600">Doświadczony personel podczas eventu</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Ubezpieczenie OC</h4>
                          <p className="text-sm text-slate-600">Pełne pokrycie ubezpieczeniowe</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Certyfikowany sprzęt</h4>
                          <p className="text-sm text-slate-600">Bezpieczne i sprawne urządzenia</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Elastyczne terminy</h4>
                          <p className="text-sm text-slate-600">Dostosowane do Twoich potrzeb</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Konsultacje</h4>
                          <p className="text-sm text-slate-600">Pomoc w planowaniu eventu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction variant="secondary" className="mx-4 sm:mx-6 lg:mx-8 mb-16" />
      </div>
    </>
  );
}
