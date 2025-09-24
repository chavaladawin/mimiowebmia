import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.methodology': 'Nuestra Metodología',
    'nav.about': 'Nosotros',

    // Hero
    'hero.title.part1': 'Realizamos ',
    'hero.title.rentable': 'consultoría financiera',
    'hero.title.part2': '',
    'hero.title.estrategia': 'especializada en <span class="underline">educación superior</span>',
    'hero.title.part3': '',
    'hero.subtitle': 'Ayudamos a las universidades y entidades de educación superior a gestionar sus finanzas',
    'hero.cta': 'Solicita una consultoría',
    'hero.whatsapp': 'Háblanos por WhatsApp',
    'hero.whatsappMessage': 'Hola, quiero más información sobre Nuovo Finance',

    // Finance Intro
    'financeIntro.title.part1': 'Por qué necesitas una ',
    'financeIntro.title.part2': 'consultoría financiera?',
    'financeIntro.bullet1': 'Porque nos especializamos en educación superior a nivel internacional',
    'financeIntro.bullet2': 'Porque somos profesionales en finanzas de la administración pública',
    'financeIntro.bullet3': 'Porque tenemos experiencia y conocimiento del sector público',
    'financeIntro.bullet4': 'Porque ofrecemos soluciones personalizadas para optimizar tu estrategia financiera',

    // Services
    'services.title.part1': 'Cuándo necesitas una ',
    'services.title.part2': 'consultoría financiera?',
    'services.example1': 'Aumento de gastos de tu entidad',
    'services.example2': 'Necesidad de un nuevo presupuesto',
    'services.example3': 'Implementación de nuevas normativas económicas',
    'services.example4': 'Justificación de subvenciones',
    'services.example5': 'Relaciones con tu entidad gubernamental',
    'services.example6': 'Establecer relaciones con entidades de educación superior',
    'services.example7': 'Gestionar acuerdos de desempeño',
    'services.example8': 'Necesidad de nuevas fuentes de financiación',
    'services.example9': 'Desarrollo de estrategia y objetivos',
    'services.example10': 'Acuerdos con otras entidades públicas',

    // Methodology
    'methodology.title.part1': 'Nuestra ',
    'methodology.title.part2': 'Metodología',
    'methodology.step1.title': 'Contacto Inicial',
    'methodology.step1.desc': 'Produciéndose así la primera interacción con las partes interesadas (clientes, equipo, colaboradores) para definir el propósito, alcance y expectativas del proyecto.',
    'methodology.step2.title': 'Puesta en Común y Acuerdos Preliminares',
    'methodology.step2.desc': 'Pacto de acuerdos respecto a las expectativas y presentación de resultados o avances iniciales para validar el enfoque del proyecto.',
    'methodology.step3.title': 'Investigación',
    'methodology.step3.desc': 'Se profundiza en la ejecución del proyecto mediante investigación, análisis o desarrollo de soluciones específicas.',
    'methodology.step4.title': 'Entrega',
    'methodology.step4.desc': 'Finalización del proyecto entregando los resultados acordados y evaluando el cumplimiento de los objetivos.',
    'methodology.doubts.title': '¿Todavía tienes dudas?',
    'methodology.doubts.bullet1': 'Trabajamos con universidades internacionales',
    'methodology.doubts.bullet2': 'Con gobiernos de alrededor del mundo',
    'methodology.doubts.bullet3': 'Contactos especializados en educación superior',
    'methodology.doubts.bullet4': 'Somos especialistas en modelos de financiación y presupuestos',
    'methodology.doubts.bullet5': 'Conocemos las normativas y subvenciones europeas y nacionales',
    'methodology.cta': 'Solicita una consultoría',

    // About Us
    'aboutUs.title.part1': 'Sobre ',
    'aboutUs.title.part2': 'nosotros',
    'aboutUs.title.mission': 'Nuestra Misión',
    'aboutUs.mission.desc': "Nos dedicamos a optimizar la <span class='underline'>gestión financiera</span> de organizaciones de <span class='font-bold'>educación superior</span> a nivel nacional e internacional, mediante la creación y ejecución de <span class='underline'>acuerdos</span> estratégicos que promuevan la sostenibilidad económica, la transparencia y la eficiencia. Fortalecemos el <span class='underline'>impacto educativo</span> de estas instituciones para formar líderes y comunidades preparadas para enfrentar los desafíos globales con éxito.",
    'aboutUs.title.experience': 'Nuestra Experiencia',
    'aboutUs.experience.desc': 'Especializados en el <span class="underline">sector financiero</span> de la educación superior, actuando como <span class="font-bold">aliado estratégico</span> para instituciones educativas, gobiernos y organizaciones que buscan transformar y fortalecer los <span class="underline">sistemas educativos</span> a nivel nacional e internacional. Nuestra experiencia abarca la <span class="font-bold">gestión financiera integral</span> de universidades, la colaboración con gobiernos estatales y la creación de alianzas con entidades dedicadas a la mejora del <span class="underline">ecosistema educativo</span>. Hemos trabajado con múltiples universidades, tanto nacionales como internacionales, optimizando sus <span class="font-bold">recursos financieros</span> a través de acuerdos, contratos y convenios estratégicos. Nuestra labor ha permitido a estas instituciones alcanzar una mayor <span class="font-bold">sostenibilidad económica</span>, maximizando el impacto de sus programas académicos y de investigación. Entre nuestros logros, destacamos la gestión exitosa de <span class="underline">presupuestos institucionales</span>, la implementación de modelos financieros innovadores y la mejora de procesos administrativos para garantizar la <span class="font-bold">transparencia</span> y eficiencia. ',
    'aboutUs.experience.part2': 'Además, contamos con una sólida experiencia en la gestión de <span class="underline">fondos europeos</span> y subvenciones, lo que nos ha permitido apoyar a universidades y centros educativos. Nuestra <span class="font-bold">expertise</span> incluye la elaboración de propuestas competitivas, la gestión de proyectos financiados, <span class="underline">acuerdos de desempeño</span>, objetivos y el cumplimiento de normativas, asegurando un impacto positivo en las comunidades educativas. En colaboración con <span class="font-bold">gobiernos estatales</span> y <span class="font-bold">entidades</span> dedicadas a la mejora del sistema educativo, hemos desarrollado <span class="underline">estrategias financieras</span> que promueven la equidad, la accesibilidad y la calidad en la educación superior. Desde la planificación presupuestaria hasta la creación de modelos financieros personalizados, nuestro enfoque se centra en alinear los recursos con los <span class="font-bold">objetivos estratégicos</span> de las instituciones, contribuyendo al desarrollo de sistemas educativos más resilientes y sostenibles. Con un equipo de profesionales altamente capacitados y un enfoque basado en la <span class="font-bold">innovación</span> y la transparencia.',

    'aboutUs.cta': 'Solicita una consultoría',

    // Contact
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.description': 'Déjanos tus datos y cuéntanos tu situación.',
    'contact.company': 'Empresa',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de privacidad',
    'footer.cookies': 'Política de cookies',
    'footer.legal': 'Aviso legal',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.methodology': 'Our Methodology',
    'nav.about': 'About Us',

    // Hero
    'hero.title.part1': 'We provide ',
    'hero.title.rentable': 'financial consulting',
    'hero.title.part2': '',
    'hero.title.estrategia': 'specialized in <span class="underline">higher education</span>',
    'hero.title.part3': '',
    'hero.subtitle': 'We help universities and higher education institutions manage their finances',
    'hero.cta': 'Request a consultation',
    'hero.whatsapp': 'Talk to us on WhatsApp',
    'hero.whatsappMessage': 'Hello, I want more information about Nuovo Finance',

    // Finance Intro
    'financeIntro.title.part1': 'Why do you need a ',
    'financeIntro.title.part2': 'financial consultancy?',
    'financeIntro.bullet1': 'Because we specialize in higher education at an international level',
    'financeIntro.bullet2': 'Because we are professionals in public administration finance',
    'financeIntro.bullet3': 'Because we have experience and knowledge of the public sector',
    'financeIntro.bullet4': 'Because we offer tailored solutions to optimize your financial strategy',

    // Services
    'services.title.part1': 'When do you need a ',
    'services.title.part2': 'specialized consultancy in higher education?',
    'services.example1': 'Increase in your entity’s expenses',
    'services.example2': 'Need for a new budget',
    'services.example3': 'Implementation of new economic regulations',
    'services.example4': 'Justification of grants',
    'services.example5': 'Relations with your governmental entity',
    'services.example6': 'Establishing relations with other higher education entities',
    'services.example7': 'Managing performance agreements',
    'services.example8': 'Need for new funding sources',
    'services.example9': 'Development of strategy and objectives',
    'services.example10': 'Agreements with other public entities',

    // Methodology
    'methodology.title.part1': 'Our ',
    'methodology.title.part2': 'Methodology',
    'methodology.step1.title': 'Initial Contact',
    'methodology.step1.desc': 'This marks the first interaction with stakeholders (clients, team, collaborators) to define the project’s purpose, scope, and expectations.',
    'methodology.step2.title': 'Joint Discussion and Preliminary Agreements',
    'methodology.step2.desc': 'Agreement on expectations and presentation of initial results or progress to validate the project’s approach.',
    'methodology.step3.title': 'Research',
    'methodology.step3.desc': 'Deepening the project execution through research, analysis, or development of specific solutions.',
    'methodology.step4.title': 'Delivery',
    'methodology.step4.desc': 'Completion of the project by delivering the agreed results and evaluating the achievement of objectives.',
    'methodology.doubts.title': 'Still have questions?',
    'methodology.doubts.bullet1': 'We work with international universities',
    'methodology.doubts.bullet2': 'With governments around the world',
    'methodology.doubts.bullet3': 'Specialized contacts in higher education',
    'methodology.doubts.bullet4': 'We are experts in financing models and budgets',
    'methodology.doubts.bullet5': 'We know European and national regulations and grants',
    'methodology.cta': 'Request a consultation',

    // About Us
    'aboutUs.title.part1': 'About ',
    'aboutUs.title.part2': 'us',
    'aboutUs.title.mission': 'Our Mission',
    'aboutUs.mission.desc': 'We are dedicated to optimizing the <span class="underline">financial management</span> of <span class="font-bold">higher education</span> organizations at national and international levels through the creation and execution of <span class="underline">agreements</span> and strategic initiatives that promote economic sustainability, transparency, and efficiency. We strengthen the <span class="underline">educational impact</span> of these institutions to develop leaders and communities prepared to face global challenges successfully.',
    'aboutUs.title.experience': 'Our Experience',
    'aboutUs.experience.desc': 'Specialized in the <span class="underline">financial sector</span> of higher education, acting as a <span class="font-bold">strategic partner</span> for educational institutions, governments, and organizations seeking to transform and strengthen <span class="underline">educational systems</span> nationally and internationally. Our experience includes the <span class="font-bold">comprehensive financial management</span> of universities, collaboration with state governments, and the creation of partnerships with entities dedicated to improving the <span class="underline">educational ecosystem</span>. We have worked with numerous universities, both national and international, optimizing their <span class="font-bold">financial resources</span> through agreements, contracts, and strategic collaborations. Our efforts have enabled these institutions to achieve greater <span class="font-bold">economic sustainability</span>, maximizing the impact of their academic programs and research. Among our achievements, we highlight the successful management of <span class="underline">institutional budgets</span>, the implementation of innovative financial models, and the improvement of administrative processes to ensure <span class="font-bold">transparency</span> and efficiency. ',
    'aboutUs.experience.part2': 'Additionally, we have extensive experience in managing <span class="underline">European funds</span> and grants, supporting universities and educational institutions. Our <span class="font-bold">expertise</span> includes developing competitive proposals, managing funded projects, performance agreements, objectives, and compliance with associated regulations, ensuring a positive impact on educational communities. In collaboration with <span class="font-bold">state governments</span> and <span class="font-bold">entities</span> dedicated to improving the educational system, we have developed <span class="underline">financial strategies</span> that promote equity, accessibility, and quality in higher education. From budget planning to the creation of customized <span class="underline">financial models</span>, our approach focuses on aligning resources with the <span class="font-bold">strategic objectives</span> of institutions, contributing to the development of more resilient and sustainable educational systems. With a team of highly skilled professionals and an <span class="font-bold">innovation</span>- and transparency-based approach, our company is committed to strengthening institutions that shape the next generation of leaders.',

    'aboutUs.cta': 'Request a consultation',

    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.description': 'Leave us your details and tell us about your situation.',
    'contact.company': 'Company',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.legal': 'Legal Notice',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations[typeof language]];
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};