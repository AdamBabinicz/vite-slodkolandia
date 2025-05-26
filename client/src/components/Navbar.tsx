import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              <span className="brand-title text-xl font-bold text-slate-800 dark:text-white">{t('hero.title')}</span>
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
            
            <a
              href="tel:+48505977940"
              className="btn-gradient text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
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
