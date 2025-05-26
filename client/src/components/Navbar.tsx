import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-slate-800">SŁODKOLANDIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="text-base font-medium"
                onClick={handleLinkClick}
              >
                Strona Główna
              </Button>
            </Link>

            <Link href="/o-nas">
              <Button
                variant={isActive("/o-nas") ? "default" : "ghost"}
                className="text-base font-medium"
                onClick={handleLinkClick}
              >
                O Nas
              </Button>
            </Link>

            {/* Oferta Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isActive("/oferta") ? "default" : "ghost"}
                  className="text-base font-medium"
                >
                  Oferta <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/oferta" onClick={handleLinkClick} className="w-full">
                    Wszystkie Atrakcje
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oferta#namioty" onClick={handleLinkClick} className="w-full">
                    Namioty Imprezowe
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oferta#dmuchance" onClick={handleLinkClick} className="w-full">
                    Dmuchane Atrakcje
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oferta#sprzet-gastro" onClick={handleLinkClick} className="w-full">
                    Sprzęt Gastronomiczny
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Foto Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isActive("/galeria") ? "default" : "ghost"}
                  className="text-base font-medium"
                >
                  Foto <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/galeria" onClick={handleLinkClick} className="w-full">
                    Wszystkie Zdjęcia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-namioty" onClick={handleLinkClick} className="w-full">
                    Namioty
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-dmuchance" onClick={handleLinkClick} className="w-full">
                    Dmuchańce
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-wata" onClick={handleLinkClick} className="w-full">
                    Wata Cukrowa
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-popcorn" onClick={handleLinkClick} className="w-full">
                    Popcorn
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/galeria#foto-fontanny" onClick={handleLinkClick} className="w-full">
                    Fontanny Czekoladowe
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/cennik">
              <Button
                variant={isActive("/cennik") ? "default" : "ghost"}
                className="text-base font-medium"
                onClick={handleLinkClick}
              >
                Cennik
              </Button>
            </Link>

            <Link href="/kontakt">
              <Button
                variant={isActive("/kontakt") ? "default" : "ghost"}
                className="text-base font-medium"
                onClick={handleLinkClick}
              >
                Kontakt
              </Button>
            </Link>

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
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  className="w-full justify-start text-base font-medium"
                  onClick={handleLinkClick}
                >
                  Strona Główna
                </Button>
              </Link>

              <Link href="/o-nas">
                <Button
                  variant={isActive("/o-nas") ? "default" : "ghost"}
                  className="w-full justify-start text-base font-medium"
                  onClick={handleLinkClick}
                >
                  O Nas
                </Button>
              </Link>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Oferta
                </div>
                <div className="ml-3 space-y-1">
                  <Link href="/oferta">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Wszystkie Atrakcje
                    </Button>
                  </Link>
                  <Link href="/oferta#namioty">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Namioty Imprezowe
                    </Button>
                  </Link>
                  <Link href="/oferta#dmuchance">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Dmuchane Atrakcje
                    </Button>
                  </Link>
                  <Link href="/oferta#sprzet-gastro">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Sprzęt Gastronomiczny
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Foto
                </div>
                <div className="ml-3 space-y-1">
                  <Link href="/galeria">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Wszystkie Zdjęcia
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-namioty">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Namioty
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-dmuchance">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Dmuchańce
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-wata">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Wata Cukrowa
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-popcorn">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Popcorn
                    </Button>
                  </Link>
                  <Link href="/galeria#foto-fontanny">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={handleLinkClick}
                    >
                      Fontanny Czekoladowe
                    </Button>
                  </Link>
                </div>
              </div>

              <Link href="/cennik">
                <Button
                  variant={isActive("/cennik") ? "default" : "ghost"}
                  className="w-full justify-start text-base font-medium"
                  onClick={handleLinkClick}
                >
                  Cennik
                </Button>
              </Link>

              <Link href="/kontakt">
                <Button
                  variant={isActive("/kontakt") ? "default" : "ghost"}
                  className="w-full justify-start text-base font-medium"
                  onClick={handleLinkClick}
                >
                  Kontakt
                </Button>
              </Link>

              <div className="pt-4 space-y-3">
                <div className="flex justify-center">
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
