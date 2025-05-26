import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEOHead({ 
  title = "SŁODKOLANDIA - Atrakcje Eventowe i Wynajem Sprzętu Imprezowego | Radom",
  description = "Wynajem namiotów imprezowych, zjeżdżalni i zamków dmuchanych dla dzieci. Profesjonalna obsługa urządzeń do waty cukrowej, popcornu i fontann czekoladowych w Radomiu i okolicach.",
  canonical,
  ogImage
}: SEOHeadProps) {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
