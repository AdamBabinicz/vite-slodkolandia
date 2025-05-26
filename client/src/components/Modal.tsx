import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Attraction } from "@/data/attractions";
import AttractionGallery from "./AttractionGallery";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  attraction: Attraction;
}

export default function Modal({ isOpen, onClose, attraction }: ModalProps) {
  if (!isOpen) return null;

  const getIconElement = (iconClass: string) => {
    const iconMap: { [key: string]: string } = {
      "fas fa-campground": "🏕️",
      "fas fa-castle": "🏰",
      "fas fa-candy-cane": "🍭",
      "fas fa-seedling": "🍿",
      "fas fa-birthday-cake": "🍫",
      "fas fa-users": "👥"
    };
    
    return iconMap[iconClass] || "🎉";
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 modal-backdrop"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{getIconElement(attraction.icon)}</span>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">{attraction.name}</h2>
                <Badge variant="secondary" className="mt-1">
                  {attraction.category}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Content */}
          <ScrollArea className="max-h-[calc(90vh-100px)]">
            <div className="p-6 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Opis</h3>
                <p className="text-slate-600 leading-relaxed">{attraction.description}</p>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Cennik</h3>
                <div className="bg-sky-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-600">
                    od {attraction.pricing.base} {attraction.pricing.currency}
                    <span className="text-lg text-slate-500 ml-2">/ {attraction.pricing.period}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Cena zawiera transport, montaż i obsługę w promieniu 30km od Radomia
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Cechy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {attraction.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Specyfikacja</h3>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(attraction.specifications).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-sm font-semibold text-slate-700">{key}</dt>
                        <dd className="text-sm text-slate-600">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Galeria</h3>
                <AttractionGallery
                  images={attraction.images}
                  title={attraction.name}
                  className="gap-4"
                />
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Zainteresowany?</h3>
                <p className="text-slate-600 mb-4">
                  Skontaktuj się z nami już dziś, aby sprawdzić dostępność i otrzymać indywidualną wycenę.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+48505977940"
                    className="btn-gradient text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    📞 Zadzwoń: +48 505 977 940
                  </a>
                  <a
                    href="/kontakt"
                    className="border border-sky-500 text-sky-600 px-6 py-2 rounded-lg font-semibold hover:bg-sky-50 transition-colors flex items-center justify-center"
                    onClick={onClose}
                  >
                    ✉️ Formularz kontaktowy
                  </a>
                </div>
              </div>
            </div>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
