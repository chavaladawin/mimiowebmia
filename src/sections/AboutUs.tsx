import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre-nosotros" className="py-16 border-t">
      <div className="container text-center">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">{t('aboutUs.title.part1')}</span>
            <span className="text-hero">{t('aboutUs.title.part2')}</span>
          </h2>
        </header>
        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            {t('aboutUs.desc.p1')}
          </p>
          <p className="text-muted-foreground">
            {t('aboutUs.desc.p2')}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-md border bg-card p-4 text-center">
            <div className="text-2xl">🎓</div>
            <p className="mt-2 text-sm">{t('aboutUs.card1')}</p>
          </div>
          <div className="rounded-md border bg-card p-4 text-center">
            <div className="text-2xl">🧠</div>
            <p className="mt-2 text-sm">{t('aboutUs.card2')}</p>
          </div>
          <div className="rounded-md border bg-card p-4 text-center">
            <div className="text-2xl">🛡️</div>
            <p className="mt-2 text-sm">{t('aboutUs.card3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;