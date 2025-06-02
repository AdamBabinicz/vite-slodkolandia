import { Link, useLocation } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [location, navigate] = useLocation();

  const handleFooterLinkClick = (path: string) => {
    if (path.includes("#")) {
      const currentBasePath = location.split("#")[0];
      const targetBasePath = path.split("#")[0];
      const hash = path.split("#")[1];

      if (currentBasePath !== targetBasePath) {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
          const yOffset = -navbarHeight - 20;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      if (location === path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
  };

  return (
    <footer className="bg-slate-700 dark:bg-slate-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">
                  <img
                    src="/img/logo.avif"
                    alt="Logo Słodkolandia wita:"
                    className="w-6 h-6"
                  />
                </span>
              </div>
              <span className="brand-title text-xl font-bold">
                <span className="brand-main">
                  {t("footer.companyName")?.split(" wita:")[0]}
                </span>
                {t("footer.companyName")?.includes(" wita:") && (
                  <span className="brand-suffix"> wita:</span>
                )}
              </span>
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              {t("footer.companyDescription")}
            </p>
            <div className="flex space-x-3 flex-wrap gap-y-3">
              <a
                href="https://www.facebook.com/wata.cukrowa.popcorn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ewa1989"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCau05zZiK3kpTe06XtKXNKA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/popcorn_wata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.pinterest.com/watapopcorn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Pinterest"
              >
                <FaPinterestP className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.pl/maps/place/SŁODKOLANDIA+wita:+🎪+✔/@51.3998663,21.1651462,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  onClick={() => handleFooterLinkClick("/")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  onClick={() => handleFooterLinkClick("/o-nas")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/oferta"
                  onClick={() => handleFooterLinkClick("/oferta")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.offer")}
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  onClick={() => handleFooterLinkClick("/galeria")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.photo")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cennik"
                  onClick={() => handleFooterLinkClick("/cennik")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  onClick={() => handleFooterLinkClick("/kontakt")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.servicesTitle")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-300">
                <Link
                  href="/oferta#namioty"
                  onClick={() => handleFooterLinkClick("/oferta#namioty")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("footer.serviceTents")}
                </Link>
              </li>
              <li className="text-slate-300">
                <Link
                  href="/oferta#dmuchance"
                  onClick={() => handleFooterLinkClick("/oferta#dmuchance")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("footer.serviceInflatables")}
                </Link>
              </li>
              <li className="text-slate-300">
                <Link
                  href="/oferta#wata-cukrowa"
                  onClick={() => handleFooterLinkClick("/oferta#wata-cukrowa")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("footer.serviceCottonCandy")}
                </Link>
              </li>
              <li className="text-slate-300">
                <Link
                  href="/oferta#popcorn"
                  onClick={() => handleFooterLinkClick("/oferta#popcorn")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("footer.servicePopcorn")}
                </Link>
              </li>
              <li className="text-slate-300">
                <Link
                  href="/oferta#fontanna-czekoladowa"
                  onClick={() =>
                    handleFooterLinkClick("/oferta#fontanna-czekoladowa")
                  }
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("footer.serviceFountains")}
                </Link>
              </li>
              <li className="text-slate-300">
                {t("footer.serviceComprehensive")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.contactTitle")}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <a
                  href="tel:+48531890827"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  +48 531 890 827
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <a
                  href="mailto:mariusz1989poczta@wp.pl"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  mariusz1989poczta@wp.pl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {t("footer.address")}
                  <br />
                  <span className="text-xs text-slate-300">
                    {t("footer.addressDetail")}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm mb-4 md:mb-0">
            {t("footer.copyright", { year: currentYear.toString() })}
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/polityka-prywatnosci"
              onClick={() => handleFooterLinkClick("/polityka-prywatnosci")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              href="/regulamin"
              onClick={() => handleFooterLinkClick("/regulamin")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
