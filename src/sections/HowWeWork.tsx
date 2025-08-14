import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    n: 1,
    title: "Análisis sectorial",
    desc: "Evaluamos en profundidad tu mercado, competidores directos e indirectos, y las tendencias del sector para identificar oportunidades y amenazas específicas de tu entorno empresarial.",
  },
  {
    n: 2,
    title: "Análisis de documentación",
    desc: "Revisamos detalladamente tus cuentas anuales, estados financieros, procesos contables clave y documentación relevante para obtener una radiografía completa de tu situación actual.",
  },
  {
    n: 3,
    title: "Muestreo y simulaciones",
    desc: "Realizamos pruebas exhaustivas con diferentes escenarios económicos y estrategias financieras posibles, evaluando el impacto de cada decisión en la salud de tu empresa.",
  },
  {
    n: 4,
    title: "Informe y plan de acción",
    desc: "Te entregamos un informe detallado con conclusiones específicas y un plan de acción claro, priorizado y ejecutable para optimizar las finanzas de tu empresa de forma inmediata.",
  },
];

const HowWeWork = () => {
  const { t } = useLanguage();
  return (
    <section id="como-trabajamos" className="py-16 border-t">
      <div className="container text-center">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">{t('methodology.title.part1')}</span>
            <span className="text-hero">{t('methodology.title.part2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t('methodology.subtitle')}</p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, index) => (
              <div key={s.n} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 rounded-full bg-hero text-hero-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                      {s.n < 10 ? `0${s.n}` : s.n}
                    </div>
                  </div>
                   <div className="bg-card rounded-lg p-6 shadow-sm border relative">
                     <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                       <span className="text-2xl">
                         {s.n === 1 && "🔍"}
                         {s.n === 2 && "📊"}  
                         {s.n === 3 && "🧪"}
                         {s.n === 4 && "📋"}
                       </span>
                        {t(`methodology.step${s.n}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm">{t(`methodology.step${s.n}.desc`)}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
