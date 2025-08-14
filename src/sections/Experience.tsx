import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  return (
    <section id="experiencia" className="py-16 border-t">
      <div className="container">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">{t('experience.title.part1')}</span>
            <span className="text-hero">{t('experience.title.part2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('experience.description')}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader className="items-center text-center">
              <div className="rounded-full bg-accent/30 p-3 text-2xl">🚀</div>
              <CardTitle className="mt-2">{t('experience.card1.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-hero text-2xl font-semibold">{t('experience.card1.metric')}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('experience.card1.desc')}
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader className="items-center text-center">
              <div className="rounded-full bg-accent/30 p-3 text-2xl">🏦</div>
              <CardTitle className="mt-2">{t('experience.card2.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-hero text-2xl font-semibold">{t('experience.card2.metric')}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('experience.card2.desc')}
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader className="items-center text-center">
              <div className="rounded-full bg-accent/30 p-3 text-2xl">🎯</div>
              <CardTitle className="mt-2">{t('experience.card3.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-hero text-2xl font-semibold">{t('experience.card3.metric')}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('experience.card3.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

