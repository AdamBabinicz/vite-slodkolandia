import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta";
import Galeria from "./pages/Galeria";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import ONas from "./pages/ONas";
import NotFound from "./pages/not-found";
import { LanguageProvider } from "@/hooks/useLanguage";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/o-nas" component={ONas} />
          <Route path="/oferta" component={Oferta} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/cennik" component={Cennik} />
          <Route path="/kontakt" component={Kontakt} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTopButton />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;