import React, { useState, useEffect, useRef } from "react";
import { Link as WouterLink } from "wouter";
import { Menu, X, Phone, Globe, MessageCircle, Star } from "lucide-react";
import { BsMessenger } from "react-icons/bs";
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
import {
  getLocalizedPath,
  findPageKeyByLocalizedPath,
  PAGE_KEYS,
  PageKey,
  Language,
  defaultLang,
  getInternalRoutePath,
} from "@/config/paths";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const { language, setLanguage: setContextLanguage, t } = useLanguage();
  const navRef = useRef<HTMLElement>(null);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const width = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(width > 0 ? width : 0);
    };
    calculateScrollbarWidth();
    window.addEventListener("resize", calculateScrollbarWidth);
    return () => window.removeEventListener("resize", calculateScrollbarWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    const navElement = navRef.current;
    if (!navElement || scrollbarWidth === undefined) return;
    const initialNavRight = navElement.style.right || "";
    const initialNavPaddingRight = navElement.style.paddingRight || "";

    const observer = new MutationObserver(() => {
      const bodyIsLocked = body.style.overflow === "hidden";
      const bodyHasSufficientPadding =
        (parseFloat(body.style.paddingRight) || 0) >= scrollbarWidth;

      if (bodyIsLocked && !bodyHasSufficientPadding && scrollbarWidth > 0) {
        navElement.style.right = `${scrollbarWidth}px`;
        navElement.style.paddingRight = "0px";
      } else {
        navElement.style.right = initialNavRight;
        navElement.style.paddingRight = initialNavPaddingRight;
      }
    });
    observer.observe(body, { attributes: true, attributeFilter: ["style"] });
    return () => {
      observer.disconnect();
      if (navElement) {
        navElement.style.right = initialNavRight;
        navElement.style.paddingRight = initialNavPaddingRight;
      }
    };
  }, [scrollbarWidth]);

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const switchLanguage = (newLang: Language) => {
    if (newLang === language) {
      closeMobileMenu();
      return;
    }
    setContextLanguage(newLang, { preventNavigation: false });
    closeMobileMenu();
  };

  const isActive = (pageKeyToCheck: PageKey) => {
    const {
      pageKey: currentPageKey,
      lang: currentLangFromUrl,
      hashSlug: currentHashSlugValue,
    } = findPageKeyByLocalizedPath(
      window.location.pathname + window.location.hash
    );

    if (currentLangFromUrl !== language) return false;
    if (currentPageKey !== pageKeyToCheck) return false;
    return !currentHashSlugValue;
  };

  const handleLinkClick = (closeMenu = true, targetPath?: string) => {
    if (closeMenu) {
      closeMobileMenu();
    }
    const homePathForCurrentLang = getLocalizedPath(PAGE_KEYS.HOME, language);
    if (
      targetPath === homePathForCurrentLang &&
      window.location.pathname === targetPath.split("#")[0] &&
      !window.location.hash
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinkHref = (pageKey: PageKey): string => {
    if (pageKey === PAGE_KEYS.HOME) {
      return "/";
    }
    return getInternalRoutePath(pageKey, language);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 shadow-lg"
            : "bg-white dark:bg-slate-900"
        )}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <WouterLink
              href={navLinkHref(PAGE_KEYS.HOME)}
              onClick={() =>
                handleLinkClick(
                  true,
                  getLocalizedPath(PAGE_KEYS.HOME, language)
                )
              }
            >
              <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <img
                  src="/img/logo.avif"
                  alt={t("hero.title")}
                  className="w-10 h-10"
                />
                <span className="brand-title text-xl font-bold text-slate-800 dark:text-white whitespace-nowrap">
                  <span className="brand-main">
                    {t("hero.title")?.split(" wita:")[0]}
                  </span>
                  {t("hero.title")?.includes(" wita:") && (
                    <span className="brand-suffix"> wita:</span>
                  )}
                </span>
              </div>
            </WouterLink>

            <div className="hidden lg:flex items-center space-x-4">
              <WouterLink href={navLinkHref(PAGE_KEYS.HOME)}>
                <Button
                  variant={isActive(PAGE_KEYS.HOME) ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium px-3",
                    !isActive(PAGE_KEYS.HOME) &&
                      "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                  onClick={() =>
                    handleLinkClick(
                      true,
                      getLocalizedPath(PAGE_KEYS.HOME, language)
                    )
                  }
                >
                  {t("nav.home")}
                </Button>
              </WouterLink>
              <WouterLink href={navLinkHref(PAGE_KEYS.ABOUT)}>
                <Button
                  variant={isActive(PAGE_KEYS.ABOUT) ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium px-3",
                    !isActive(PAGE_KEYS.ABOUT) &&
                      "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                  onClick={() => handleLinkClick(true)}
                >
                  {t("nav.about")}
                </Button>
              </WouterLink>
              <WouterLink href={navLinkHref(PAGE_KEYS.OFFER)}>
                <Button
                  variant={isActive(PAGE_KEYS.OFFER) ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium px-3",
                    !isActive(PAGE_KEYS.OFFER) &&
                      "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                  onClick={() => handleLinkClick(true)}
                >
                  {t("nav.offer")}
                </Button>
              </WouterLink>
              <WouterLink href={navLinkHref(PAGE_KEYS.GALLERY)}>
                <Button
                  variant={isActive(PAGE_KEYS.GALLERY) ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium px-3",
                    !isActive(PAGE_KEYS.GALLERY) &&
                      "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                  onClick={() => handleLinkClick(true)}
                >
                  {t("nav.photo")}
                </Button>
              </WouterLink>
              <WouterLink href={navLinkHref(PAGE_KEYS.PRICING)}>
                <Button
                  variant={isActive(PAGE_KEYS.PRICING) ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium px-3",
                    !isActive(PAGE_KEYS.PRICING) &&
                      "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                  onClick={() => handleLinkClick(true)}
                >
                  {t("nav.pricing")}
                </Button>
              </WouterLink>
              <WouterLink href={navLinkHref(PAGE_KEYS.CONTACT)}>
                <Button
                  variant={isActive(PAGE_KEYS.CONTACT) ? "default" : "ghost"}
                  className={cn(
                    "text-base font-medium px-3",
                    !isActive(PAGE_KEYS.CONTACT) &&
                      "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  )}
                  onClick={() => handleLinkClick(true)}
                >
                  {t("nav.contact")}
                </Button>
              </WouterLink>

              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t(
                      "nav.changeLanguage",
                      undefined,
                      "Zmień język"
                    )}
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => switchLanguage("pl")}>
                    🇵🇱 Polski
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => switchLanguage("en")}>
                    🇬🇧 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeToggle />
              <a
                href="https://m.me/wata.cukrowa.popcorn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Messenger"
              >
                <BsMessenger className="h-5 w-5" />
              </a>
              <Dialog
                open={isReviewModalOpen}
                onOpenChange={setIsReviewModalOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-amber-600 hover:text-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900/20"
                    title={t("nav.review")}
                  >
                    <Star className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md z-[60]">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      {t("reviewModal.title", { companyName: t("hero.title") })}
                    </DialogTitle>
                    <DialogDescription className="text-center dark:text-white/80">
                      {t("reviewModal.description")}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center space-y-4 py-4">
                    <div className="bg-white p-4 rounded-lg shadow-inner">
                      <img
                        src="/qr-opinia.png"
                        alt={t("reviewModal.qrAlt")}
                        className="w-48 h-48"
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-100 text-center">
                      {t("reviewModal.qrLabelLine1")}
                      <br />
                      {t("reviewModal.qrLabelLine2")}
                    </p>
                    <a
                      href="https://g.page/r/CWM4dGuLyfXlEAE/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      {t("reviewModal.googleButton")}
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
              <a
                href="tel:+48531890827"
                className="btn-gradient text-white px-3 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2 whitespace-nowrap text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>531 890 827</span>
              </a>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden fixed inset-x-0 top-16 z-40 bg-white/95 dark:bg-slate-900/95 overflow-y-auto"
              style={{
                WebkitOverflowScrolling: "touch",
                maxHeight: "calc(100vh - 4rem)",
              }}
            >
              <div className="px-4 pt-2 pb-24 space-y-1">
                <WouterLink href={navLinkHref(PAGE_KEYS.HOME)}>
                  <Button
                    variant={isActive(PAGE_KEYS.HOME) ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-base font-medium py-3",
                      !isActive(PAGE_KEYS.HOME) &&
                        "text-slate-700 dark:text-slate-200"
                    )}
                    onClick={() =>
                      handleLinkClick(
                        true,
                        getLocalizedPath(PAGE_KEYS.HOME, language)
                      )
                    }
                  >
                    {t("nav.home")}
                  </Button>
                </WouterLink>
                <WouterLink href={navLinkHref(PAGE_KEYS.ABOUT)}>
                  <Button
                    variant={isActive(PAGE_KEYS.ABOUT) ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-base font-medium py-3",
                      !isActive(PAGE_KEYS.ABOUT) &&
                        "text-slate-700 dark:text-slate-200"
                    )}
                    onClick={() => handleLinkClick(true)}
                  >
                    {t("nav.about")}
                  </Button>
                </WouterLink>

                <WouterLink href={navLinkHref(PAGE_KEYS.OFFER)}>
                  <Button
                    variant={isActive(PAGE_KEYS.OFFER) ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-base font-medium py-3",
                      !isActive(PAGE_KEYS.OFFER) &&
                        "text-slate-700 dark:text-slate-200"
                    )}
                    onClick={() => handleLinkClick(true)}
                  >
                    {t("nav.offer")}
                  </Button>
                </WouterLink>

                <WouterLink href={navLinkHref(PAGE_KEYS.GALLERY)}>
                  <Button
                    variant={isActive(PAGE_KEYS.GALLERY) ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-base font-medium py-3",
                      !isActive(PAGE_KEYS.GALLERY) &&
                        "text-slate-700 dark:text-slate-200"
                    )}
                    onClick={() => handleLinkClick(true)}
                  >
                    {t("nav.photo")}
                  </Button>
                </WouterLink>

                <WouterLink href={navLinkHref(PAGE_KEYS.PRICING)}>
                  <Button
                    variant={isActive(PAGE_KEYS.PRICING) ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-base font-medium py-3",
                      !isActive(PAGE_KEYS.PRICING) &&
                        "text-slate-700 dark:text-slate-200"
                    )}
                    onClick={() => handleLinkClick(true)}
                  >
                    {t("nav.pricing")}
                  </Button>
                </WouterLink>
                <WouterLink href={navLinkHref(PAGE_KEYS.CONTACT)}>
                  <Button
                    variant={isActive(PAGE_KEYS.CONTACT) ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start text-base font-medium py-3",
                      !isActive(PAGE_KEYS.CONTACT) &&
                        "text-slate-700 dark:text-slate-200"
                    )}
                    onClick={() => handleLinkClick(true)}
                  >
                    {t("nav.contact")}
                  </Button>
                </WouterLink>
                <div className="pt-4 space-y-3 border-t border-slate-200 dark:border-slate-700 mt-3">
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => switchLanguage("pl")}
                      className={
                        language === "pl" ? "bg-sky-100 dark:bg-sky-900" : ""
                      }
                    >
                      🇵🇱 PL
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => switchLanguage("en")}
                      className={
                        language === "en" ? "bg-sky-100 dark:bg-sky-900" : ""
                      }
                    >
                      🇬🇧 EN
                    </Button>
                    <ThemeToggle onToggle={closeMobileMenu} />
                  </div>
                  <Button
                    onClick={() => {
                      setIsReviewModalOpen(true);
                      handleLinkClick(true);
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold flex items-center justify-center space-x-2"
                  >
                    <Star className="h-4 w-4" />
                    <span>{t("nav.review")}</span>
                  </Button>
                  <a
                    href="https://m.me/wata.cukrowa.popcorn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 w-full"
                    onClick={() => handleLinkClick(true)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Messenger</span>
                  </a>
                  <a
                    href="tel:+48531890827"
                    className="btn-gradient text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 w-full"
                    onClick={() => handleLinkClick(true)}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Zadzwoń: 531 890 827</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence>
        {isReviewModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/10 z-[55]"
            onClick={() => setIsReviewModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
