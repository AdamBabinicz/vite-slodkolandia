import { Link } from "wouter";
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
import { getInternalRoutePath, PAGE_KEYS } from "@/config/paths";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const emailLocal = "mariuszek1989poczta";
  const emailDomain = "wp.pl";
  const emailFull = `${emailLocal}@${emailDomain}`;

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
                    loading="lazy"
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
                  href={getInternalRoutePath(PAGE_KEYS.HOME, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href={getInternalRoutePath(PAGE_KEYS.ABOUT, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href={getInternalRoutePath(PAGE_KEYS.OFFER, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("nav.offer")}
                </Link>
              </li>
              <li>
                <Link
                  href={getInternalRoutePath(PAGE_KEYS.GALLERY, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("nav.photo")}
                </Link>
              </li>
              <li>
                <Link
                  href={getInternalRoutePath(PAGE_KEYS.PRICING, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("nav.pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href={getInternalRoutePath(PAGE_KEYS.CONTACT, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.seeAlsoTitle")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={getInternalRoutePath(PAGE_KEYS.REVIEWS, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("footer.clientReviews")}
                </Link>
              </li>
              <li>
                <Link
                  href={getInternalRoutePath(PAGE_KEYS.TERMS, language)}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href={getInternalRoutePath(
                    PAGE_KEYS.PRIVACY_POLICY,
                    language
                  )}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  onClick={handleLinkClick}
                >
                  {t("footer.privacyPolicy")}
                </Link>
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
                  href={`mailto:${emailFull}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {emailFull}
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
        <div className="border-t border-slate-600 mt-12 pt-8 text-center">
          <p className="text-slate-300 text-sm">
            {t("footer.copyright", { year: currentYear.toString() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
