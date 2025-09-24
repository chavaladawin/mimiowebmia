import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Handshake, Search, Package } from "lucide-react"; // Íconos para cada fase

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
            <User className="text-hero w-8 h-8" /> {/* Ícono para Contacto Inicial */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t('methodology.step1.title')}</h3>
              <p className="text-muted-foreground">{t('methodology.step1.desc')}</p>
            </div>
          </div>
          {/* Fase 2 */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <Handshake className="text-hero w-8 h-8" /> {/* Ícono para Puesta en Común */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t('methodology.step2.title')}</h3>
              <p className="text-muted-foreground">{t('methodology.step2.desc')}</p>
            </div>
          </div>
          {/* Fase 3 */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <Search className="text-hero w-8 h-8" /> {/* Ícono para Investigación */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t('methodology.step3.title')}</h3>
              <p className="text-muted-foreground">{t('methodology.step3.desc')}</p>
            </div>
          </div>
          {/* Fase 4 */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <Package className="text-hero w-8 h-8" /> {/* Ícono para Entrega */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t('methodology.step4.title')}</h3>
              <p className="text-muted-foreground">{t('methodology.step4.desc')}</p>
            </div>
          </div>
        </div>

        {/* ¿Todavía tienes dudas? */}
        <div className="mt-12 bg-green-50 py-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('methodology.doubts.title')}</h2>
          <ul className="text-muted-foreground mb-8 max-w-2xl mx-auto space-y-2 list-disc list-inside">
            <li>{t('methodology.doubts.bullet1')}</li>
            <li>{t('methodology.doubts.bullet2')}</li>
            <li>{t('methodology.doubts.bullet3')}</li>
            <li>{t('methodology.doubts.bullet4')}</li>
            <li>{t('methodology.doubts.bullet5')}</li>
          </ul>
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