import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Methodology from "./pages/Methodology";
import AboutUs from "./sections/AboutUs"; // Corregido a sections
import Privacidad from "./components/Privacidad";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Cookies from "./components/Cookies";
import CookiesPolicy from "./components/CookiesPolicy";
import AvisoLegal from "./components/AvisoLegal";
import LegalNotice from "./components/LegalNotice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;