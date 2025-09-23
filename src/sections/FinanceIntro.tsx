import { useLanguage } from "@/contexts/LanguageContext";

const FinanceIntro = () => {
  const { t } = useLanguage();
  return (
    <section id="importancia" className="py-16 border-t">
      <div className="container text-center">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">{t('financeIntro.title.part1')}</span>
            <span className="text-hero">{t('financeIntro.title.part2')}</span>
          </h2>
        </header>
        <ul className="text-lg text-muted-foreground max-w-3xl mx-auto list-disc list-inside space-y-2">
          <li>{t('financeIntro.bullet1')}</li>
          <li>{t('financeIntro.bullet2')}</li>
          <li>{t('financeIntro.bullet3')}</li>
          <li>{t('financeIntro.bullet4')}</li>
        </ul>
      </div>
    </section>
  );
};

export default FinanceIntro;