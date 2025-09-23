import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Rocket, Handshake, Target } from "lucide-react";

const HowWeWork = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto">
        {/* Roadmap */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-foreground">{t('methodology.title.part1')}</span>
          <span className="text-hero">{t('methodology.title.part2')}</span>
        </h2>
        <div className="space-y-8">
          {/* Fase 1 */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <Rocket className="text-hero w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t('methodology.step1.title')}</h3>
              <p className="text-muted-foreground">{t('methodology.step1.desc')}</p>
            </div>
          </div>
          {/* Fase 2 */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <Handshake className="text-hero w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t('methodology.step2.title')}</h3>
              <p className="text-muted-foreground">{t('methodology.step2.desc')}</p>
            </div>
          </div>
          {/* Fase 3 */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <Target className="text-hero w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t('methodology.step3.title')}</h3>
              <p className="text-muted-foreground">{t('methodology.step3.desc')}</p>
            </div>
          </div>
        </div>

        {/* ¿Todavía tienes dudas? */}
        <div className="mt-12 bg-green-50 py-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('methodology.doubts.title')}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{t('methodology.doubts.desc')}</p>
          <Button
            size="xl"
            asChild
            aria-label={t('methodology.cta')}
            className="bg-white text-hero hover:bg-white/90 shadow-lg font-bold px-8 py-4 text-lg border-2 border-white"
          >
            <Link to="/#contacto">{t('methodology.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
