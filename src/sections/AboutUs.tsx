import NouNavbar from "@/components/NouNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50">
      <NouNavbar />
      <main>
        <section id="sobre-nosotros" className="py-16">
          <div className="container max-w-5xl mx-auto px-4">
            {/* Nuestra Misión */}
            <header className="mb-12 text-center">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                <span className="text-foreground">{t('aboutUs.title.part1')}</span>
                <span className="text-hero">{t('aboutUs.title.mission')}</span>
              </h2>
            </header>
            <div className="text-center max-w-3xl mx-auto bg-green-100/50 p-4">
              <div
                className="text-lg text-gray-700 leading-relaxed mb-4 text-justify"
                dangerouslySetInnerHTML={{ __html: t('aboutUs.mission.desc') }}
              />
            </div>

            {/* Nuestra Experiencia */}
            <header className="mt-16 mb-12 text-center">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                <span className="text-foreground">{t('aboutUs.title.part1')}</span>
                <span className="text-hero">{t('aboutUs.title.experience')}</span>
              </h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
              <div
                className="text-gray-700 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('aboutUs.experience.desc') }}
              />
              <div
                className="text-gray-700 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('aboutUs.experience.part2') }}
              />
            </div>
            <div className="mt-12 text-center">
              <Button
                size="xl"
                asChild
                aria-label={t('aboutUs.cta') || t('methodology.cta')}
                className="bg-white text-hero hover:bg-white/90 shadow-lg font-bold px-8 py-4 text-lg border-2 border-white"
              >
                <a href="#contacto">{t('methodology.cta')}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;