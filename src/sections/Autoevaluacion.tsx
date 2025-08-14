import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Autoevaluacion = () => {
  const { t } = useLanguage();
  return (
    <section id="autoevaluacion" className="py-16 border-t">
      <div className="container text-center">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">{t('evaluation.title.part1')}</span>
            <span className="text-hero">{t('evaluation.title.part2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('evaluation.description')}
          </p>
        </header>

        <Card className="max-w-2xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">
             {t('evaluation.template.title')}
            </CardTitle>
            <p className="text-muted-foreground">
             {t('evaluation.template.subtitle')}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-hero">
                <Download size={24} />
                <span className="font-semibold">{t('evaluation.download')}</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ {t('evaluation.list.item1')}</li>
                <li>✓ {t('evaluation.list.item2')}</li>
                <li>✓ {t('evaluation.list.item3')}</li>
                <li>✓ {t('evaluation.list.item4')}</li>
              </ul>
            </div>
            <Button size="lg" className="bg-hero hover:bg-hero-strong text-hero-foreground font-semibold" asChild>
              <a href="/Simulation-Template.xlsx" download>
                <Download className="mr-2" size={20} />
                {t('evaluation.download')}
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">
            {t('evaluation.question.completed')}
          </h3>
          <p className="text-muted-foreground mb-6">
            {t('evaluation.contact.text')}
          </p>
          <Button size="lg" variant="outline" className="border-hero text-hero hover:bg-hero hover:text-hero-foreground" asChild>
            <a href="#contacto">
              <Phone className="mr-2" size={20} />
              {t('evaluation.contact.cta')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Autoevaluacion;