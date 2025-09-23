import { useLanguage } from "@/contexts/LanguageContext";
import ContactIcon from "@/assets/icons/contact.png"; // Ejemplo de iconos
import AgreementIcon from "@/assets/icons/agreement.png";
import ResearchIcon from "@/assets/icons/research.png";
import DeliveryIcon from "@/assets/icons/delivery.png";

const phases = [
  {
    n: 1,
    title: "Contacto Inicial",
    desc: "Produciéndose así la primera interacción con las partes interesadas (clientes, equipo, colaboradores) para definir el propósito, alcance y expectativas del proyecto.",
    icon: ContactIcon
  },
  {
    n: 2,
    title: "Puesta en Común y Acuerdos Preliminares",
    desc: "Pacto de acuerdos respecto a las expectativas y presentación de resultados o avances iniciales para validar el enfoque del proyecto.",
    icon: AgreementIcon
  },
  {
    n: 3,
    title: "Investigación",
    desc: "Se profundiza en la ejecución del proyecto mediante investigación, análisis o desarrollo de soluciones específicas.",
    icon: ResearchIcon
  },
  {
    n: 4,
    title: "Entrega",
    desc: "Finalización del proyecto entregando los resultados acordados y evaluando el cumplimiento de los objetivos.",
    icon: DeliveryIcon
  },
];

const HowWeWork = () => {
  const { t } = useLanguage();

  return (
    <section id="como-trabajamos" className="py-16 border-t">
      <div className="container text-center">
        {/* Cabecera */}
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Nuestra</span>
            <span className="text-hero">Metodología</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Proceso estructurado en 4 fases que garantiza resultados precisos y accionables
          </p>
        </header>

        {/* Roadmap de fases */}
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((p) => (
            <div key={p.n} className="flex flex-col items-center text-center bg-card rounded-lg p-6 shadow border">
              <img src={p.icon} alt={p.title} className="w-16 h-16 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Segundo apartado de dudas */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">¿Todavía tienes dudas?</h3>
          <ul className="text-lg text-muted-foreground max-w-3xl mx-auto list-disc list-inside space-y-2">
            <li>Trabajamos con <strong>universidades internacionales</strong></li>
            <li>Con <strong>gobiernos</strong> de alrededor del mundo</li>
            <li>Contactos especializados en <strong>educación superior</strong></li>
            <li>Somos especialistas en <strong>modelos de financiación y presupuestos</strong></li>
            <li>Conocemos las <strong>normativas y subvenciones</strong> europeas y nacionales</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default HowWeWork;
