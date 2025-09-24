import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nuovo Finance. {t('footer.rights')}</p>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-muted-foreground" aria-label="Legal">
            <a href={language === 'es' ? '/privacidad' : '/privacy-policy'} className="hover:text-foreground">{t('footer.privacy')}</a>
            <a href={language === 'es' ? '/cookies' : '/cookies-policy'} className="hover:text-foreground">{t('footer.cookies')}</a>
            <a href={language === 'es' ? '/aviso-legal' : '/legal-notice'} className="hover:text-foreground">{t('footer.legal')}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/108816634" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;