import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const FinanceIntro = () => {
  const { t } = useLanguage();

  const needs = [
    "Previa a auditoría financiera",
    "Crisis financiera",
    "Gestión de la deuda ineficiente",
    "Recursos ociosos",
    "Gestión de riesgos y sostenibilidad",
    "Control presupuestario",
    "Análisis de la salud financiera",
    "Cambios en el sector",
    "Eres una universidad",
    "Eres una entidad relacionada con educación superior",
  ];

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
          <li>Porque nos especializamos en <strong>educación superior</strong> a nivel internacional</li>
          <li>Porque somos profesionales en <strong>finanzas</strong> de la administración pública</li>
          <li>Porque tenemos experiencia y conocimiento del <strong>sector público</strong></li>
          <li>Porque ofrecemos soluciones personalizadas para optimizar tu <strong>estrategia financiera</strong></li>
          <li>Porque tenemos relaciones con otras <strong>entidades de educación</strong> a nivel internacional</li>
          <li>Porque quieres gestionar mejor los <strong>asuntos burocráticos</strong> en cada institución</li>
        </ul>

        {/* Sección "Cuando necesitas una consultoría" */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6">
            Cuando necesitas una <span className="underline">consultoría especializada en la educación superior</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {needs.map((item, index) => (
              <div key={index} className="text-lg text-muted-foreground list-disc list-inside text-left md:text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Botón CTA */}
        <Button size="lg" className="bg-hero hover:bg-hero-strong text-hero-foreground font-semibold px-8" asChild>
          <a href="#contacto">Solicita una consultoría</a>
        </Button>
      </div>
    </section>
  );
};

export default FinanceIntro;
