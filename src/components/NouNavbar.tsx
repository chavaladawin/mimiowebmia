import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NouNavbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Nuovo Finance" className="text-xl font-semibold bg-hero-gradient bg-clip-text text-transparent">
          Nuovo Finance
        </Link>

        {/* Menú de navegación */}
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex" aria-label="Primary">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={16} />
            {t('nav.home')}
          </Link>
          <Link to="/methodology" className="hover:text-foreground transition-colors">{t('nav.methodology')}</Link>
          <Link to="/about-us" className="hover:text-foreground transition-colors">{t('nav.about')}</Link>
        </nav>

        {/* Selector de idioma */}
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <a 
            href="#" 
            className={`hover:text-foreground transition-colors font-medium ${language === 'es' ? 'text-foreground font-bold' : ''}`}
            onClick={(e) => { e.preventDefault(); setLanguage('es'); }}
          >
            ES
          </a>
          <span>|</span>
          <a 
            href="#" 
            className={`hover:text-foreground transition-colors font-medium ${language === 'en' ? 'text-foreground font-bold' : ''}`}
            onClick={(e) => { e.preventDefault(); setLanguage('en'); }}
          >
            EN
          </a>
        </div>
      </div>
    </header>
  );
};

export default NouNavbar;