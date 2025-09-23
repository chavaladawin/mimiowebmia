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
          <li>Porque nos especializamos en <strong>educación superior</strong> a nivel internacional</li>
          <li>Porque somos profesionales en <strong>finanzas</strong> de la administración pública</li>
          <li>Porque tenemos experiencia y conocimiento del <strong>sector público</strong></li>
          <li>Porque ofrecemos soluciones personalizadas para optimizar tu <strong>estrategia financiera</strong></li>
          <li>Porque tenemos relaciones con otras <strong>entidades de educación</strong> a nivel internacional</li>
          <li>Porque quieres gestionar mejor los <strong>asuntos burocráticos</strong> en cada institución</li>
        </ul>
      </div>
    </section>
  );
};

export default FinanceIntro;
