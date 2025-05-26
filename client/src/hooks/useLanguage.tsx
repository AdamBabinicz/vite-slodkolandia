
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pl: {
    // Navigation
    'nav.home': 'Strona Główna',
    'nav.about': 'O Nas',
    'nav.offer': 'Oferta',
    'nav.photo': 'Foto',
    'nav.pricing': 'Cennik',
    'nav.contact': 'Kontakt',
    'nav.allAttractions': 'Wszystkie Atrakcje',
    'nav.tents': 'Namioty Imprezowe',
    'nav.inflatables': 'Dmuchańce',
    'nav.catering': 'Sprzęt Cukierniczy',
    'nav.allPhotos': 'Wszystkie Zdjęcia',
    'nav.photoTents': 'Namioty',
    'nav.photoInflatables': 'Dmuchańce',
    'nav.photoCottonCandy': 'Wata Cukrowa',
    'nav.photoPopcorn': 'Popcorn',
    'nav.photoFountains': 'Fontanny Czekoladowe',
    
    // Homepage
    'hero.title': 'SŁODKOLANDIA wita:',
    'hero.subtitle': 'Niezapomniane Atrakcje na Twoją Imprezę!',
    'hero.description': 'Gwarantujemy świetną zabawę i profesjonalną obsługę na każdym evencie!',
    'hero.seeOffer': 'Zobacz naszą ofertę',
    'hero.askDate': 'Zapytaj o termin',
    
    // Services
    'services.title': 'Nasze Główne Atrakcje',
    'services.description': 'Oferujemy kompleksowy wynajem sprzętu eventowego i atrakcji, które sprawią, że Twoja impreza będzie niezapomniana',
    'services.seeAll': 'Zobacz wszystkie atrakcje',
    
    // Categories
    'category.namioty': 'namioty',
    'category.dmuchance': 'dmuchańce', 
    'category.cukiernicze': 'cukiernicze',
    'category.kompleksowa': 'kompleksowa',
    
    // Why Choose Us
    'whyUs.title': 'Dlaczego SŁODKOLANDIA?',
    'whyUs.description': 'Łączymy pasję do tworzenia niezapomnianych chwil z profesjonalnym podejściem do każdego eventu',
    'whyUs.experience': 'Doświadczenie',
    'whyUs.experienceDesc': 'Lata doświadczenia w organizacji eventów różnej skali',
    'whyUs.safety': 'Bezpieczeństwo',
    'whyUs.safetyDesc': 'Certyfikowany sprzęt i pełne ubezpieczenie każdej atrakcji',
    'whyUs.punctuality': 'Punktualność',
    'whyUs.punctualityDesc': 'Zawsze na czasie - dotrzymujemy terminów dostaw i montażu',
    'whyUs.individual': 'Indywidualne Podejście',
    'whyUs.individualDesc': 'Każdy event jest wyjątkowy - dostosowujemy się do Twoich potrzeb',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.offer': 'Offer',
    'nav.photo': 'Photos',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.allAttractions': 'All Attractions',
    'nav.tents': 'Party Tents',
    'nav.inflatables': 'Inflatables',
    'nav.catering': 'Confectionery Equipment',
    'nav.allPhotos': 'All Photos',
    'nav.photoTents': 'Tents',
    'nav.photoInflatables': 'Inflatables',
    'nav.photoCottonCandy': 'Cotton Candy',
    'nav.photoPopcorn': 'Popcorn',
    'nav.photoFountains': 'Chocolate Fountains',
    
    // Homepage
    'hero.title': 'SŁODKOLANDIA welcomes:',
    'hero.subtitle': 'Unforgettable Attractions for Your Event!',
    'hero.description': 'We guarantee great fun and professional service at every event!',
    'hero.seeOffer': 'See our offer',
    'hero.askDate': 'Ask about availability',
    
    // Services
    'services.title': 'Our Main Attractions',
    'services.description': 'We offer comprehensive rental of event equipment and attractions that will make your party unforgettable',
    'services.seeAll': 'See all attractions',
    
    // Categories
    'category.namioty': 'tents',
    'category.dmuchance': 'inflatables',
    'category.cukiernicze': 'confectionery',
    'category.kompleksowa': 'comprehensive',
    
    // Why Choose Us
    'whyUs.title': 'Why SŁODKOLANDIA?',
    'whyUs.description': 'We combine passion for creating unforgettable moments with a professional approach to every event',
    'whyUs.experience': 'Experience',
    'whyUs.experienceDesc': 'Years of experience in organizing events of various scales',
    'whyUs.safety': 'Safety',
    'whyUs.safetyDesc': 'Certified equipment and full insurance for every attraction',
    'whyUs.punctuality': 'Punctuality',
    'whyUs.punctualityDesc': 'Always on time - we meet delivery and assembly deadlines',
    'whyUs.individual': 'Individual Approach',
    'whyUs.individualDesc': 'Every event is unique - we adapt to your needs',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
