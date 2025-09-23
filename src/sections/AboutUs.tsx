import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre-nosotros" className="py-16 border-t">
      <div className="container text-center max-w-4xl mx-auto">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Nuestra</span>
            <span className="text-hero">Misión</span>
          </h2>
        </header>

        <p className="text-muted-foreground mb-6 text-lg">
          Optimizar la gestión financiera de organizaciones de educación superior a nivel nacional e internacional, mediante la creación y ejecución de acuerdos, contratos y convenios estratégicos con gobiernos, entidades de educación superior y centros educativos. Nos comprometemos a promover la sostenibilidad económica, la transparencia y la eficiencia, fortaleciendo el impacto educativo de estas instituciones para formar líderes y comunidades preparadas para los desafíos globales.
        </p>

        <p className="text-muted-foreground text-sm">
          Especializados en el sector financiero de la educación superior, actuando como aliado estratégico para instituciones educativas, gobiernos y organizaciones que buscan transformar y fortalecer los sistemas educativos a nivel nacional e internacional. Nuestra experiencia abarca la gestión financiera integral de universidades, la colaboración con gobiernos estatales y la creación de alianzas con entidades dedicadas a la mejora del ecosistema educativo. Hemos trabajado con múltiples universidades, tanto nacionales como internacionales, optimizando sus recursos financieros a través de acuerdos, contratos y convenios estratégicos. Nuestra labor ha permitido a estas instituciones alcanzar una mayor sostenibilidad económica, maximizando el impacto de sus programas académicos y de investigación. Entre nuestros logros, destacamos la gestión exitosa de presupuestos institucionales, la implementación de modelos financieros innovadores y la mejora de procesos administrativos para garantizar la transparencia y eficiencia. Además, contamos con una sólida experiencia en la gestión de fondos europeos y subvenciones, lo que nos ha permitido apoyar a universidades y centros educativos en la obtención y administración eficiente de recursos financieros provenientes de programas europeos y otras fuentes de financiación. Nuestra expertise incluye la elaboración de propuestas competitivas, la gestión de proyectos financiados, acuerdos de desempeño, objetivos y el cumplimiento de normativas asociadas, asegurando un impacto positivo en las comunidades educativas. En colaboración con gobiernos estatales y entidades dedicadas a la mejora del sistema educativo, hemos desarrollado estrategias financieras que promueven la equidad, la accesibilidad y la calidad en la educación superior. Desde la planificación presupuestaria hasta la creación de modelos financieros personalizados, nuestro enfoque se centra en alinear los recursos con los objetivos estratégicos de las instituciones, contribuyendo al desarrollo de sistemas educativos más resilientes y sostenibles. Con un equipo de profesionales altamente capacitados y un enfoque basado en la innovación y la transparencia, nuestra compañía está comprometida con el fortalecimiento de instituciones que forman a las próximas generaciones de líderes.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
