import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, Globe, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-white dark:bg-slate-900"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="brand-title text-xl font-bold text-slate-800 dark:text-white whitespace-nowrap">SŁODKOLANDIA wita:</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className={cn(
                  "text-base font-medium",
                  !isActive("/") && "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                )}
                onClick={handleLinkClick}
              >
                {t('nav.home')}
              </Button>
            </Link>

            <Link href="/o-nas">
              <Button
                variant={isActive("/o-nas") ? "default" : "ghost"}
                className={cn(
                  "text-base font-medium",
                  !isActive("/o-nas") && "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                )}
                onClick={handleLinkClick}
              >
                {t('nav.about')}
              </Button>
            </Link>

            {/* Oferta Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isActive("/oferta") ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium",
                    !isActive("/oferta") && "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {t('nav.offer')} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/oferta" onClick={handleLinkClick} className="w-full">
                    {t('nav.allAttractions')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oferta#namioty" onClick={handleLinkClick} className="w-full">
                    {t('nav.tents')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oferta#dmuchance" onClick={handleLinkClick} className="w-full">
                    {t('nav.inflatables')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oferta#sprzet-cukiernicze" onClick={handleLinkClick} className="w-full">
                    {t('nav.catering')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Foto Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isActive("/galeria") ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium",
                    !isActive("/galeria") && "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {t('nav.photo')} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/galeria" onClick={handleLinkClick} className="w-full">
                    {t('nav.allPhotos')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-namioty" onClick={handleLinkClick} className="w-full">
                    {t('nav.photoTents')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-dmuchance" onClick={handleLinkClick} className="w-full">
                    {t('nav.photoInflatables')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-wata" onClick={handleLinkClick} className="w-full">
                    {t('nav.photoCottonCandy')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-popcorn" onClick={handleLinkClick} className="w-full">
                    {t('nav.photoPopcorn')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-fontanny" onClick={handleLinkClick} className="w-full">
                    {t('nav.photoFountains')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/cennik">
              <Button
                variant={isActive("/cennik") ? "default" : "ghost"}
                className={cn(
                  "text-base font-medium",
                  !isActive("/cennik") && "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                )}
                onClick={handleLinkClick}
              >
                {t('nav.pricing')}
              </Button>
            </Link>

            <Link href="/kontakt">
              <Button
                variant={isActive("/kontakt") ? "default" : "ghost"}
                className={cn(
                  "text-base font-medium",
                  !isActive("/kontakt") && "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                )}
                onClick={handleLinkClick}
              >
                {t('nav.contact')}
              </Button>
            </Link>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('pl')}>
                  🇵🇱 Polski
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />

            {/* Messenger Button */}
            <a
              href="https://m.me/slodkolandiawita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden lg:inline">Messenger</span>
            </a>

            {/* Review Button */}
            <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="hidden lg:inline">Dodaj opinię</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center">Dodaj opinię o "SŁODKOLANDIA wita:"!</DialogTitle>
                  <DialogDescription className="text-center">
                    Zeskanuj kod QR, aby dodać opinię na Google Maps.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4 py-4">
                  <div className="bg-white p-4 rounded-lg shadow-inner">
                    <img 
                      src="data:image/png;base64,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" 
                      alt="QR Code - Dodaj opinię" 
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Kod QR - Dodaj opinię<br/>
                    lub kliknij w link:
                  </p>
                  <a
                    href="https://g.page/r/CWM4dGuLyfXlEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Dodaj opinię na Google
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            
            <a
              href="tel:+48505977940"
              className="btn-gradient text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2 whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span>+48 505 977 940</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-base font-medium",
                    !isActive("/") && "text-slate-700 dark:text-slate-200"
                  )}
                  onClick={handleLinkClick}
                >
                  {t('nav.home')}
                </Button>
              </Link>

              <Link href="/o-nas">
                <Button
                  variant={isActive("/o-nas") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-base font-medium",
                    !isActive("/o-nas") && "text-slate-700 dark:text-slate-200"
                  )}
                  onClick={handleLinkClick}
                >
                  {t('nav.about')}
                </Button>
              </Link>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  {t('nav.offer')}
                </div>
                <div className="ml-3 space-y-1">
                  <Link href="/oferta">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.allAttractions')}
                    </Button>
                  </Link>
                  <Link href="/oferta#namioty">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.tents')}
                    </Button>
                  </Link>
                  <Link href="/oferta#dmuchance">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.inflatables')}
                    </Button>
                  </Link>
                  <Link href="/oferta#sprzet-cukiernicze">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.catering')}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  {t('nav.photo')}
                </div>
                <div className="ml-3 space-y-1">
                  <Link href="/galeria">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.allPhotos')}
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-namioty">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.photoTents')}
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-dmuchance">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.photoInflatables')}
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-wata">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.photoCottonCandy')}
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-popcorn">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.photoPopcorn')}
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-fontanny">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-slate-700 dark:text-slate-200"
                      onClick={handleLinkClick}
                    >
                      {t('nav.photoFountains')}
                    </Button>
                  </Link>
                </div>
              </div>

              <Link href="/cennik">
                <Button
                  variant={isActive("/cennik") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-base font-medium",
                    !isActive("/cennik") && "text-slate-700 dark:text-slate-200"
                  )}
                  onClick={handleLinkClick}
                >
                  {t('nav.pricing')}
                </Button>
              </Link>

              <Link href="/kontakt">
                <Button
                  variant={isActive("/kontakt") ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-base font-medium",
                    !isActive("/kontakt") && "text-slate-700 dark:text-slate-200"
                  )}
                  onClick={handleLinkClick}
                >
                  {t('nav.contact')}
                </Button>
              </Link>

              <div className="pt-4 space-y-3">
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLanguage('pl')}
                    className={language === 'pl' ? 'bg-sky-100 dark:bg-sky-900' : ''}
                  >
                    🇵🇱 PL
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'bg-sky-100 dark:bg-sky-900' : ''}
                  >
                    🇬🇧 EN
                  </Button>
                  <ThemeToggle />
                </div>
                <a
                  href="tel:+48505977940"
                  className="btn-gradient text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 w-full"
                  onClick={handleLinkClick}
                >
                  <Phone className="h-4 w-4" />
                  <span>Zadzwoń: +48 505 977 940</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
