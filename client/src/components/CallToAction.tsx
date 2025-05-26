import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

interface CallToActionProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CallToAction({ variant = "primary", className = "" }: CallToActionProps) {
  if (variant === "secondary") {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-r from-sky-50 to-emerald-50 rounded-xl p-6 ${className}`}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2">Gotowy na niezapomnianą imprezę?</h3>
          <p className="text-slate-600 mb-4">
            Skontaktuj się z nami już dziś i zarezerwuj termin!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+48505977940"
              className="btn-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Zadzwoń teraz</span>
            </a>
            <Link href="/kontakt">
              <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                <Calendar className="h-4 w-4 mr-2" />
                Zapytaj o termin
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`py-20 bg-gradient-to-br from-sky-500 to-emerald-500 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          <Star className="h-12 w-12 mx-auto mb-6 text-amber-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zorganizujmy razem Twoją wymarzą imprezę!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i sprawdź dostępność na Twój termin. 
            Gwarantujemy profesjonalną obsługę i niezapomniane wrażenia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48505977940"
              className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-colors transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>+48 505 977 940</span>
            </a>
            <Link href="/kontakt">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Formularz kontaktowy
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
