import NouNavbar from "@/components/NouNavbar";
import HowWeWork from "@/sections/HowWeWork";
import AboutUs from "@/sections/AboutUs";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Facebook } from "lucide-react";

const Methodology = () => {
  const { t } = useLanguage();
  return (
    <div>
      <NouNavbar />
      <main>
        <HowWeWork />
        <AboutUs />
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

export default Methodology;