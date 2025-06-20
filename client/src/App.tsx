import React, { useEffect, useRef } from "react";
import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta";
import Galeria from "./pages/Galeria";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import ONas from "./pages/ONas";
import Regulamin from "@/components/Regulamin";
import PolitykaPrywatnosci from "@/components/PolitykaPrywatnosci";
import NotFound from "./pages/not-found";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import {
  getLocalizedPath,
  findPageKeyByLocalizedPath,
  PAGE_KEYS,
  defaultLang,
  getInternalRoutePath,
  getLocalizedSlug,
  Language,
} from "@/config/paths";
import SEOHead from "@/components/SEOHead";

const APP_DEBUG_MODE = false;

function ScrollRestoration() {
  const [wouterLocation] = useLocation();

  useEffect(() => {
    const hashValue = window.location.hash.replace("#", "");
    if (!hashValue) {
      window.scrollTo(0, 0);
    } else {
      const scrollTimeoutId = setTimeout(() => {
        const element = document.getElementById(hashValue);
        if (element) {
          element.scrollIntoView({ block: "start" });
        }
      }, 200);
      return () => clearTimeout(scrollTimeoutId);
    }
  }, [wouterLocation]);
  return null;
}

function LanguageRouterLogic() {
  const [wouterLocation, navigate] = useLocation();
  const {
    language: contextLanguage,
    setLanguage: setGlobalLanguage,
    isLanguageInitialized,
  } = useLanguage();

  const logicRunCounter = useRef(0);
  const userInitiatedLangChangeRef = useRef<Language | null>(null);

  const normalizePathForComparison = (p: string) => {
    const [pathPart, hashPart] = p.split("#");
    const normalizedPath = pathPart.replace(/\/+$/, "") || "/";
    return hashPart ? `${normalizedPath}#${hashPart}` : normalizedPath;
  };

  useEffect(() => {
    if (!isLanguageInitialized) {
      return;
    }

    if (userInitiatedLangChangeRef.current === contextLanguage) {
      return;
    }

    userInitiatedLangChangeRef.current = contextLanguage;
    logicRunCounter.current = 0;

    const currentBrowserFullPath =
      window.location.pathname + window.location.search + window.location.hash;
    const {
      pageKey: currentPageKeyFromUrl,
      lang: langCurrentlyInUrl,
      hashKey: currentHashKeyFromUrl,
    } = findPageKeyByLocalizedPath(currentBrowserFullPath);

    if (langCurrentlyInUrl !== contextLanguage) {
      const targetPageKeyForNav =
        currentPageKeyFromUrl && currentPageKeyFromUrl !== PAGE_KEYS.NOT_FOUND
          ? currentPageKeyFromUrl
          : PAGE_KEYS.HOME;

      const newAbsolutePathTarget = getLocalizedPath(
        targetPageKeyForNav,
        contextLanguage,
        currentHashKeyFromUrl || undefined
      );

      let relativePathForNavigate = getInternalRoutePath(
        targetPageKeyForNav,
        contextLanguage
      );
      if (currentHashKeyFromUrl) {
        const hashSlug = getLocalizedSlug(
          currentHashKeyFromUrl,
          contextLanguage
        );
        if (hashSlug) relativePathForNavigate += `#${hashSlug}`;
      }

      const normalizedCurrent = normalizePathForComparison(
        currentBrowserFullPath
      );
      const normalizedNewTargetAbsolute = normalizePathForComparison(
        newAbsolutePathTarget
      );

      if (normalizedCurrent !== normalizedNewTargetAbsolute) {
        navigate(relativePathForNavigate, { replace: true });
      } else {
        userInitiatedLangChangeRef.current = null;
      }
    } else {
      userInitiatedLangChangeRef.current = null;
    }
  }, [contextLanguage, isLanguageInitialized, navigate]);

  useEffect(() => {
    if (!isLanguageInitialized) {
      return;
    }

    const currentBrowserFullPathForCheck =
      window.location.pathname + window.location.search + window.location.hash;
    const { lang: langInCurrentUrlCheck } = findPageKeyByLocalizedPath(
      currentBrowserFullPathForCheck
    );

    if (
      userInitiatedLangChangeRef.current === contextLanguage &&
      langInCurrentUrlCheck !== contextLanguage
    ) {
      return;
    }

    logicRunCounter.current += 1;
    const runId = logicRunCounter.current;
    const currentBrowserFullPath =
      window.location.pathname + window.location.search + window.location.hash;

    if (runId > 6) {
      logicRunCounter.current = 0;
      userInitiatedLangChangeRef.current = null;
      return;
    }

    const {
      pageKey: parsedPageKeyFromUrl,
      lang: langDetectedInUrl,
      hashKey: parsedHashKeyFromUrl,
    } = findPageKeyByLocalizedPath(currentBrowserFullPath);

    if (langDetectedInUrl !== contextLanguage) {
      setGlobalLanguage(langDetectedInUrl, { preventNavigation: true });
      return;
    }

    const pageKeyToUse =
      parsedPageKeyFromUrl && parsedPageKeyFromUrl !== PAGE_KEYS.NOT_FOUND
        ? parsedPageKeyFromUrl
        : PAGE_KEYS.HOME;
    const canonicalAbsolutePath = getLocalizedPath(
      pageKeyToUse,
      contextLanguage,
      parsedHashKeyFromUrl || undefined
    );
    const normalizedCurrent = normalizePathForComparison(
      currentBrowserFullPath
    );
    const normalizedCanonical = normalizePathForComparison(
      canonicalAbsolutePath
    );

    if (normalizedCurrent !== normalizedCanonical) {
      let relativePathForNavigate = getInternalRoutePath(
        pageKeyToUse,
        contextLanguage
      );
      if (parsedHashKeyFromUrl) {
        const hashSlug = getLocalizedSlug(
          parsedHashKeyFromUrl,
          contextLanguage
        );
        if (hashSlug) relativePathForNavigate += `#${hashSlug}`;
      }
      navigate(relativePathForNavigate, { replace: true });
      return;
    } else {
      logicRunCounter.current = 0;
      if (userInitiatedLangChangeRef.current === contextLanguage) {
        userInitiatedLangChangeRef.current = null;
      }
    }
  }, [
    wouterLocation,
    contextLanguage,
    isLanguageInitialized,
    setGlobalLanguage,
    navigate,
  ]);

  return null;
}

function AppRoutes() {
  const { language } = useLanguage();
  return (
    <Switch>
      <Route
        path={getInternalRoutePath(PAGE_KEYS.HOME, language)}
        component={Home}
      />
      <Route
        path={getInternalRoutePath(PAGE_KEYS.ABOUT, language)}
        component={ONas}
      />
      <Route
        path={getInternalRoutePath(PAGE_KEYS.OFFER, language)}
        component={Oferta}
      />
      <Route
        path={getInternalRoutePath(PAGE_KEYS.GALLERY, language)}
        component={Galeria}
      />
      <Route
        path={getInternalRoutePath(PAGE_KEYS.PRICING, language)}
        component={Cennik}
      />
      <Route
        path={getInternalRoutePath(PAGE_KEYS.CONTACT, language)}
        component={Kontakt}
      />
      <Route
        path={getInternalRoutePath(PAGE_KEYS.TERMS, language)}
        component={Regulamin}
      />
      <Route
        path={getInternalRoutePath(PAGE_KEYS.PRIVACY_POLICY, language)}
        component={PolitykaPrywatnosci}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppMainContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ScrollRestoration />
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function LanguageAwareRouter() {
  const { language, isLanguageInitialized } = useLanguage();

  if (!isLanguageInitialized) {
    return null;
  }

  const base = language === defaultLang ? "" : `/${language}`;
  const routerKey = `main-router-${base || "root"}`;

  return (
    <WouterRouter key={routerKey} base={base}>
      <SEOHead />
      <LanguageRouterLogic />
      <AppMainContent />
    </WouterRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <LanguageAwareRouter />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
