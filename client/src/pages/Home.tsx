import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Award, Shield, Clock, Heart, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import AttractionCard from "@/components/AttractionCard";
import CallToAction from "@/components/CallToAction";
import { attractions } from "@/data/attractions";
import { heroImages } from "@/data/stockPhotos";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const featuredAttractions = attractions.slice(0, 6);

  return (
    <>
      <SEOHead />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Event setup ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-gradient"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">SŁODKOLANDIA</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-amber-300 mt-2">
                Niezapomniane Atrakcje na Twoją Imprezę!
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-white/90 font-medium">
              Gwarantujemy <strong>świetną zabawę i profesjonalną obsługę</strong> na każdym evencie!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/oferta">
                <Button size="lg" className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg">
                  <Star className="h-5 w-5 mr-2" />
                  Zobacz naszą ofertę
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Zapytaj o termin
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-opacity ${
                index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Arrow */}
        <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white text-2xl" />
        </motion.div>
      </section>

      {/* Main Attractions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nasze Główne Atrakcje</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferujemy kompleksowy wynajem sprzętu eventowego i atrakcji, które sprawią, 
              że Twoja impreza będzie niezapomniana
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction, index) => (
              <AttractionCard 
                key={attraction.id} 
                attraction={attraction} 
                index={index}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/oferta">
              <Button size="lg" className="btn-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all">
                Zobacz wszystkie atrakcje
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Dlaczego SŁODKOLANDIA?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Łączymy pasję do tworzenia niezapomnianych chwil z profesjonalnym podejściem do każdego eventu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-sky-600" />,
                title: "Doświadczenie",
                description: "Lata doświadczenia w organizacji eventów różnej skali",
                color: "bg-sky-100"
              },
              {
                icon: <Shield className="h-8 w-8 text-emerald-600" />,
                title: "Bezpieczeństwo",
                description: "Certyfikowany sprzęt i pełne ubezpieczenie każdej atrakcji",
                color: "bg-emerald-100"
              },
              {
                icon: <Clock className="h-8 w-8 text-amber-600" />,
                title: "Punktualność",
                description: "Zawsze na czasie - dotrzymujemy terminów dostaw i montażu",
                color: "bg-amber-100"
              },
              {
                icon: <Heart className="h-8 w-8 text-purple-600" />,
                title: "Indywidualne Podejście",
                description: "Każdy event jest wyjątkowy - dostosowujemy się do Twoich potrzeb",
                color: "bg-purple-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Eventów zorganizowanych" },
              { number: "50+", label: "Zadowolonych klientów miesięcznie" },
              { number: "5", label: "lat doświadczenia" },
              { number: "30km", label: "promień obsługi" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">
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
    </>
  );
}
