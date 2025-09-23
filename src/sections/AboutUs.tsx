import NouNavbar from "@/components/NouNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <NouNavbar />
      <main>
        <section id="sobre-nosotros" className="py-16 border-t">
          <div className="container text-center max-w-4xl mx-auto">
            {/* Nuestra Misión */}
            <header className="mb-12">
              <h2 className="text-4xl font-bold mb-4">{t('aboutUs.title.mission')}</h2>
            </header>
            <p
              className="text-muted-foreground mb-12 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('aboutUs.mission.desc') }}
            />

            {/* Nuestra Experiencia */}
            <header className="mb-12">
              <h2 className="text-4xl font-bold mb-4">{t('aboutUs.title.experience')}</h2>
            </header>
            <p
              className="text-muted-foreground text-base leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: t('aboutUs.experience.desc') }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;