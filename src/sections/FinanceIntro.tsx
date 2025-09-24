import { useLanguage } from "@/contexts/LanguageContext";

const FinanceIntro = () => {
  const { t } = useLanguage();

  return (
    <section id="importancia" className="py-16 border-t">
      <div className="container text-center">
        {/* Cabecera */}
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">{t('financeIntro.title.part1')}</span>
            <span className="text-hero">{t('financeIntro.title.part2')}</span>
          </h2>
        </header>

        {/* Lista introductoria */}
        <ul className="text-lg text-muted-foreground max-w-3xl mx-auto list-disc list-inside space-y-2 mb-12">
          <li>
            {t('financeIntro.bullet1.part1')} <strong>{t('financeIntro.bullet1.bold')}</strong>{t('financeIntro.bullet1.part2')}
            </li>
          <li>
            {t('financeIntro.bullet2.part1')} <strong>{t('financeIntro.bullet2.bold')}</strong>{t('financeIntro.bullet2.part2')}
          </li>
          <li>
            {t('financeIntro.bullet3.part1')} <strong>{t('financeIntro.bullet3.bold')}</strong>{t('financeIntro.bullet3.part2')}
          </li>
          <li>
            {t('financeIntro.bullet4.part1')} <strong>{t('financeIntro.bullet4.bold')}</strong>{t('financeIntro.bullet4.part2')}
          </li>
          <li>
            {t('financeIntro.bullet5.part1')} <strong>{t('financeIntro.bullet5.bold')}</strong>{t('financeIntro.bullet5.part2')}
          </li>
          <li>
            {t('financeIntro.bullet6.part1')} <strong>{t('financeIntro.bullet6.bold')}</strong>{t('financeIntro.bullet6.part2')}
          </li>
	</ul>
      </div>
    </section>
  );
};

export default FinanceIntro;