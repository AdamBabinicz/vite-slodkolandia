import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 z-50 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-sm">
              <Cookie className="h-5 w-5 text-amber-400 flex-shrink-0" />
              <p className="leading-relaxed">
                Ta strona używa plików cookies w celu zapewnienia najlepszej jakości usług. 
                Kontynuując przeglądanie zgadzasz się na ich użycie.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-sky-500 hover:bg-sky-600 text-white font-medium"
              >
                Akceptuję
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                size="sm"
                className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400"
              >
                Odrzuć
              </Button>
              <Button
                onClick={handleReject}
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-white"
                aria-label="Close cookie consent"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
