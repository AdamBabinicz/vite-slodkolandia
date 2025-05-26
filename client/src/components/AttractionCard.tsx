import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { Attraction } from "@/data/attractions";
import Modal from "./Modal";
import { motion } from "framer-motion";

interface AttractionCardProps {
  attraction: Attraction;
  index?: number;
}

export default function AttractionCard({ attraction, index = 0 }: AttractionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getIconElement = (iconClass: string) => {
    // Map Font Awesome classes to Lucide icons or use emojis as fallback
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="card-hover cursor-pointer group h-full">
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={attraction.images[0]}
                alt={attraction.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-slate-800">
                  <span className="text-lg mr-2">{getIconElement(attraction.icon)}</span>
                  {attraction.category}
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{attraction.name}</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                {attraction.shortDescription}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-sky-600">
                  od {attraction.pricing.base} {attraction.pricing.currency}
                  <span className="text-sm text-slate-500 ml-1">/ {attraction.pricing.period}</span>
                </div>
              </div>
              
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="w-full btn-gradient text-white hover:shadow-lg transition-all"
              >
                <Info className="h-4 w-4 mr-2" />
                Szczegóły
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
