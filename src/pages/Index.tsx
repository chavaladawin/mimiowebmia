import NouNavbar from "@/components/NouNavbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook } from "lucide-react";
import FinanceIntro from "@/sections/FinanceIntro";
import ContactSection from "@/sections/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div>
      <NouNavbar />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <FinanceIntro />
        <ContactSection />
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nuovo Finance. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm text-muted-foreground" aria-label="Legal">
              <a href="#privacidad" className="hover:text-foreground">{t('footer.privacy')}</a>
              <a href="#cookies" className="hover:text-foreground">{t('footer.cookies')}</a>
              <a href="#aviso-legal" className="hover:text-foreground">{t('footer.legal')}</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
