import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-700 dark:bg-slate-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="brand-title text-xl font-bold">SŁODKOLANDIA wita</span>
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Profesjonalny wynajem atrakcji eventowych w Radomiu i okolicach. 
              Tworzymy niezapomniane chwile dla Twoich gości!
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Szybkie Linki</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-slate-300 hover:text-white transition-colors">
                  O Nas
                </Link>
              </li>
              <li>
                <Link href="/oferta" className="text-slate-300 hover:text-white transition-colors">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-slate-300 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/cennik" className="text-slate-300 hover:text-white transition-colors">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-slate-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nasze Usługi</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-300">Namioty Imprezowe</li>
              <li className="text-slate-300">Dmuchańce</li>
              <li className="text-slate-300">Wata Cukrowa</li>
              <li className="text-slate-300">Maszyny do Popcornu</li>
              <li className="text-slate-300">Fontanny Czekoladowe</li>
              <li className="text-slate-300">Kompleksowa Obsługa</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <a 
                  href="tel:+48505977940" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  +48 505 977 940
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sky-400 flex-shrink-0" />
                <a 
                  href="mailto:kontakt@slodkolandia.pl" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  kontakt@slodkolandia.pl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Radom i okolice<br />
                  <span className="text-xs text-slate-400">(promień 30km)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SŁODKOLANDIA. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/polityka-prywatnosci" className="text-slate-400 hover:text-white transition-colors">
              Polityka Prywatności
            </Link>
            <Link href="/regulamin" className="text-slate-400 hover:text-white transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
