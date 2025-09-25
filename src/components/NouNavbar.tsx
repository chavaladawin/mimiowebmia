import { Home, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const NouNavbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Nuovo Finance"
          className="text-xl font-semibold bg-hero-gradient bg-clip-text text-transparent"
        >
          Nuovo Finance
        </Link>

        {/* Menú de navegación para escritorio */}
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground" aria-label="Primary">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={16} />
            {t('nav.home')}
          </Link>
          <Link to="/methodology" className="hover:text-foreground transition-colors">
            {t('nav.methodology')}
          </Link>
          <Link to="/about-us" className="hover:text-foreground transition-colors">
            {t('nav.about')}
          </Link>
        </nav>

        {/* Selector de idioma para escritorio */}
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <a
            href="#"
            className={`hover:text-foreground transition-colors font-medium ${
              language === 'es' ? 'text-foreground font-bold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              setLanguage('es');
            }}
          >
            ES
          </a>
          <span>|</span>
          <a
            href="#"
            className={`hover:text-foreground transition-colors font-medium ${
              language === 'en' ? 'text-foreground font-bold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              setLanguage('en');
            }}
          >
            EN
          </a>
        </div>

        {/* Botón de hamburguesa para móviles */}
        <button
          className="md:hidden text-muted-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav
            className="container flex flex-col items-center gap-4 py-4 text-sm text-muted-foreground"
            aria-label="Mobile"
          >
            <Link
              to="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
              onClick={toggleMenu}
            >
              <Home size={16} />
              {t('nav.home')}
            </Link>
            <Link
              to="/methodology"
              className="hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.methodology')}
            </Link>
            <Link
              to="/about-us"
              className="hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.about')}
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a
                href="#"
                className={`hover:text-foreground transition-colors font-medium ${
                  language === 'es' ? 'text-foreground font-bold' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setLanguage('es');
                  toggleMenu();
                }}
              >
                ES
              </a>
              <span>|</span>
              <a
                href="#"
                className={`hover:text-foreground transition-colors font-medium ${
                  language === 'en' ? 'text-foreground font-bold' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setLanguage('en');
                  toggleMenu();
                }}
              >
                EN
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NouNavbar;
