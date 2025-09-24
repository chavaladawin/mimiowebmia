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
        <section id="productos" className="py-16 border-t bg-green-100/50">
          <div className="container text-center">
            <header className="mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">{t('services.title.part1')}</span>
                <span className="text-hero">{t('services.title.part2')}</span>
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start text-left">
              <ul className="text-lg text-muted-foreground list-disc list-inside space-y-2">
                <li>{t('services.example1')}</li>
                <li>{t('services.example2')}</li>
                <li>{t('services.example3')}</li>
                <li>{t('services.example4')}</li>
                <li>{t('services.example5')}</li>
              </ul>

              <ul className="text-lg text-muted-foreground list-disc list-inside space-y-2">
                <li>{t('services.example6')}</li>
                <li>{t('services.example7')}</li>
                <li>{t('services.example8')}</li>
                <li>{t('services.example9')}</li>
                <li>{t('services.example10')}</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-hero hover:bg-hero-strong text-hero-foreground font-semibold px-8" asChild>
                <a href="#contacto">{t('hero.cta')}</a>
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