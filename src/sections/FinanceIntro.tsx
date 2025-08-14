import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const FinanceIntro = () => {
  const { t } = useLanguage();
  return (
    <section id="introduccion" className="py-16 border-t">
      <div className="container text-center">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">{t('financeIntro.title.part1')}</span>
            <span className="text-hero">{t('financeIntro.title.part2')}</span>
          </h2>
          <div className="text-lg text-muted-foreground max-w-5xl mx-auto space-y-4">
            <p>
              {t('financeIntro.description.p1')}
            </p>
            <p>
              {t('financeIntro.description.p2')}
            </p>
          </div>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg p-8">
            <CardHeader className="items-center text-center">
              <div className="w-16 h-16 rounded-full bg-hero/10 flex items-center justify-center text-3xl mb-4">📈</div>
              <CardTitle className="text-xl font-semibold">{t('financeIntro.card1.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center text-base">
              {t('financeIntro.card1.desc')}
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg p-8">
            <CardHeader className="items-center text-center">
              <div className="w-16 h-16 rounded-full bg-hero/10 flex items-center justify-center text-3xl mb-4">💼</div>
              <CardTitle className="text-xl font-semibold">{t('financeIntro.card2.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center text-base">
              {t('financeIntro.card2.desc')}
              Genera confianza con informes claros y una estructura financiera robusta.
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg p-8">
            <CardHeader className="items-center text-center">
              <div className="w-16 h-16 rounded-full bg-hero/10 flex items-center justify-center text-3xl mb-4">💸</div>
              <CardTitle className="text-xl font-semibold">{t('financeIntro.card3.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center text-base">
              {t('financeIntro.card3.desc')}
              Reduce el coste financiero optimizando tu estructura de capital.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinanceIntro;
