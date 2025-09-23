import NouNavbar from "@/components/NouNavbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import FinanceIntro from "@/sections/FinanceIntro";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
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
                <li>Previa a <strong>auditoría</strong> financiera</li>
                <li><strong>Crisis</strong> financiera</li>
                <li>Gestión de la <strong>deuda</strong> ineficiente</li>
                <li><strong>Recursos</strong> ociosos</li>
                <li>Gestión de <strong>riesgos</strong> y sostenibilidad</li>
              </ul>

              <ul className="text-lg text-muted-foreground list-disc list-inside space-y-2">
                <li>Control <strong>presupuestario</strong></li>
                <li>Análisis de la <strong>salud</strong> financiera</li>
                <li><strong>Cambios</strong> en el sector</li>
                <li>Eres una <strong>universidad</strong></li>
                <li>Eres una <strong>entidad</strong> relacionada con educación superior</li>
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

      <Footer />
    </div>
  );
};

export default Index;