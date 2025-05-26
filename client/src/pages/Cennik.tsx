import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, Phone, Mail, Info, Clock, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { attractions } from "@/data/attractions";

const packageDeals = [
  {
    name: "Pakiet Dziecięcy",
    description: "Idealny na urodziny dziecka",
    items: ["Zamek dmuchany", "Wata cukrowa", "Popcorn"],
    originalPrice: 580,
    packagePrice: 450,
    savings: 130,
    popular: false
  },
  {
    name: "Pakiet Rodzinny",
    description: "Dla większych rodzinnych spotkań",
    items: ["Namiot 6x12m", "Dmuchana zjeżdżalnia", "Wata cukrowa", "Fontanna czekoladowa"],
    originalPrice: 950,
    packagePrice: 750,
    savings: 200,
    popular: true
  },
  {
    name: "Pakiet Eventowy",
    description: "Kompleksowa obsługa większych eventów",
    items: ["Namiot 10x20m", "2x Dmuchańce", "Wata cukrowa", "Popcorn", "Fontanna czekoladowa", "Obsługa"],
    originalPrice: 1400,
    packagePrice: 1100,
    savings: 300,
    popular: false
  }
];

const additionalServices = [
  { name: "Transport (do 15km)", price: "0", unit: "zł" },
  { name: "Transport (15-30km)", price: "50", unit: "zł" },
  { name: "Transport (powyżej 30km)", price: "2", unit: "zł/km" },
  { name: "Montaż w godzinach nocnych", price: "100", unit: "zł" },
  { name: "Przedłużenie wynajmu (+1 dzień)", price: "50%", unit: "ceny bazowej" },
  { name: "Obsługa dodatkowa (operator)", price: "150", unit: "zł/dzień" }
];

export default function Cennik() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Wszystkie" },
    { id: "namioty", name: "Namioty" },
    { id: "dmuchance", name: "Dmuchańce" },
    { id: "gastro", name: "Gastro" }
  ];

  const filteredAttractions = selectedCategory === "all" 
    ? attractions 
    : attractions.filter(attr => attr.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Cennik Wynajmu Atrakcji Eventowych | SŁODKOLANDIA Radom"
        description="Sprawdź aktualne ceny wynajmu namiotów imprezowych, dmuchańców i sprzętu gastronomicznego. Pakiety promocyjne i indywidualne wyceny."
        canonical="/cennik"
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
                  <Calculator className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Cennik Naszych Usług
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Oferujemy konkurencyjne ceny i indywidualne wyceny dostosowane do Twojego budżetu i potrzeb. 
                Wszystkie ceny zawierają transport w promieniu 30km od Radomia.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  🚚 Darmowy transport do 15km
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  🛠️ Montaż i demontaż w cenie
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  🛡️ Ubezpieczenie OC
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Package Deals */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Pakiety Promocyjne
              </h2>
              <p className="text-xl text-slate-600">
                Oszczędź wynajmując pakiety atrakcji! Im więcej wynajmujesz, tym więcej oszczędzasz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packageDeals.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`relative h-full ${pkg.popular ? 'ring-2 ring-sky-500 shadow-xl' : 'shadow-lg'}`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-sky-500 text-white px-4 py-1">
                          Najpopularniejszy
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-slate-800">
                        {pkg.name}
                      </CardTitle>
                      <p className="text-slate-600">{pkg.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-sky-600 mb-2">
                          {pkg.packagePrice} zł
                        </div>
                        <div className="text-sm text-slate-500 line-through">
                          Normalnie: {pkg.originalPrice} zł
                        </div>
                        <Badge variant="secondary" className="mt-2 bg-emerald-100 text-emerald-700">
                          Oszczędzasz {pkg.savings} zł
                        </Badge>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">W pakiecie:</h4>
                        <ul className="space-y-2">
                          {pkg.items.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-slate-600">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className={`w-full ${pkg.popular ? 'btn-gradient text-white' : ''}`}
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Zapytaj o pakiet
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Pricing */}
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
                Cennik Indywidualny
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Ceny wynajmu pojedynczych atrakcji na 1 dzień
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate-800 mb-1">
                            {attraction.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {attraction.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-sky-600">
                            {attraction.pricing.base} zł
                          </div>
                          <div className="text-xs text-slate-500">
                            / {attraction.pricing.period}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-4">
                        {attraction.shortDescription}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-slate-500">
                          <Shield className="h-3 w-3 mr-2" />
                          Ubezpieczenie OC
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                          <Clock className="h-3 w-3 mr-2" />
                          Montaż i demontaż
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                          <MapPin className="h-3 w-3 mr-2" />
                          Transport do 15km gratis
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Usługi Dodatkowe
                </h2>
                <div className="space-y-4">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-700">{service.name}</span>
                      <span className="font-semibold text-sky-600">
                        {service.price} {service.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-sky-500 to-emerald-500 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Rabaty i Promocje</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="text-amber-300 text-xl mr-4 mt-1">💰</div>
                        <div>
                          <h4 className="font-semibold mb-2">Pakiety Eventowe</h4>
                          <p className="text-white/90 text-sm">
                            Wynajmij 3 lub więcej atrakcji i otrzymaj 15% rabatu!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-amber-300 text-xl mr-4 mt-1">📅</div>
                        <div>
                          <h4 className="font-semibold mb-2">Długoterminowy Wynajem</h4>
                          <p className="text-white/90 text-sm">
                            Eventy powyżej 2 dni - specjalne ceny!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-amber-300 text-xl mr-4 mt-1">👥</div>
                        <div>
                          <h4 className="font-semibold mb-2">Klienci Stali</h4>
                          <p className="text-white/90 text-sm">
                            Program lojalnościowy dla regularnych klientów
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="tel:+48505977940"
                        className="inline-block bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2 inline" />
                        Zapytaj o Rabat
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <Info className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Ważne Informacje
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center">
                    📋 Warunki Wynajmu
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>• Rezerwacja wymaga wpłaty zadatku 30% wartości zamówienia</p>
                  <p>• Minimalna doba wynajmu - 1 dzień (24 godziny)</p>
                  <p>• Możliwość anulowania do 48h przed eventem</p>
                  <p>• Ceny zawierają VAT 23%</p>
                  <p>• Dla eventów w dni świąteczne - dopłata 20%</p>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center">
                    🚚 Transport i Montaż
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>• Darmowy transport do 15km od Radomia</p>
                  <p>• Montaż i demontaż w standardowych godzinach (8:00-20:00)</p>
                  <p>• Czas montażu: 1-4 godziny w zależności od atrakcji</p>
                  <p>• Wymagane jest zapewnienie dostępu do prądu 230V</p>
                  <p>• Dla dmuchańców - płaska powierzchnia min. 4x4m</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CallToAction />
      </div>
    </>
  );
}
