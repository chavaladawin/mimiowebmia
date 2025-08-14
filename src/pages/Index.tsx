import NouNavbar from "@/components/NouNavbar";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, PiggyBank, CreditCard, Linkedin, Facebook } from "lucide-react";
import FinanceIntro from "@/sections/FinanceIntro";
import HowWeWork from "@/sections/HowWeWork";
import Experience from "@/sections/Experience";
import AboutUs from "@/sections/AboutUs";
import Autoevaluacion from "@/sections/Autoevaluacion";
import FAQ from "@/sections/FAQ";
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
        <section id="productos" className="py-16">
          <div className="container text-center">
            <header className="mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">{t('services.title.part1')}</span>
                <span className="text-hero">{t('services.title.part2')}</span>
              </h2>
              <p className="text-lg text-muted-foreground">{t('services.subtitle')}</p>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center"><PiggyBank className="text-hero" /> {t('services.analysis.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t('services.analysis.desc')}
                </CardContent>
              </Card>
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center"><CreditCard className="text-hero" /> {t('services.preaudit.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t('services.preaudit.desc')}
                </CardContent>
              </Card>
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center"><Building2 className="text-hero" /> {t('services.models.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t('services.models.desc')}
                </CardContent>
              </Card>
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center"><Building2 className="text-hero" /> {t('services.iso.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t('services.iso.desc')}
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-hero hover:bg-hero-strong text-hero-foreground font-semibold px-8" asChild>
                <a href="#contacto">{t('services.cta')}</a>
              </Button>
            </div>
          </div>
        </section>

        <Autoevaluacion />

        <HowWeWork />

        <Experience />

        <AboutUs />

        <FAQ />

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
