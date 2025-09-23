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

        {/* Sección "Cuándo necesitas una consultoría" */}
        <section id="productos" className="py-16 border-t">
          <div className="container text-center">
            <header className="mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">Cuando necesitas una </span>
                <span className="text-hero">consultoría especializada en educación superior?</span>
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start text-left">
              <ul className="text-lg text-muted-foreground list-disc list-inside space-y-2">
                <li>Previa a auditoría financiera</li>
                <li>Crisis financiera</li>
                <li>Gestión de la deuda ineficiente</li>
                <li>Recursos ociosos</li>
                <li>Gestión de riesgos y sostenibilidad</li>
              </ul>

              <ul className="text-lg text-muted-foreground list-disc list-inside space-y-2">
                <li>Control presupuestario</li>
                <li>Análisis de la salud financiera</li>
                <li>Cambios en el sector</li>
                <li>Eres una <strong>universidad</strong></li>
                <li>Eres una <strong>entidad relacionada con educación superior</strong></li>
              </ul>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-hero hover:bg-hero-strong text-hero-foreground font-semibold px-8" asChild>
                <a href="#contacto">Solicita una consultoría</a>
              </Button>
            </div>
          </div>
        </section>

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
