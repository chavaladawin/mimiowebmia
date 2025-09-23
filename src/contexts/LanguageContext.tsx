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

    // Hero (restaurando el original con ajustes)
    'hero.title.part1': 'Realizamos ',
    'hero.title.rentable': 'consultoría financiera',
    'hero.title.part2': ' especializada en ',
    'hero.title.estrategia': 'educación superior',
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
    'services.example6': 'Establecer relaciones con otras entidades de educación superior',

    // Methodology
    'methodology.title.part1': 'Nuestra ',
    'methodology.title.part2': 'Metodología',
    'methodology.step1.title': 'Análisis Estratégico',
    'methodology.step1.desc': 'Evaluamos las necesidades financieras y los objetivos estratégicos de la institución educativa para diseñar un plan personalizado.',
    'methodology.step2.title': 'Acuerdos Preliminares',
    'methodology.step2.desc': 'Establecemos convenios y contratos con gobiernos y entidades educativas para optimizar recursos y garantizar sostenibilidad.',
    'methodology.step3.title': 'Implementación y Seguimiento',
    'methodology.step3.desc': 'Ejecutamos el plan financiero y realizamos un seguimiento continuo para asegurar el cumplimiento de los objetivos establecidos.',
    'methodology.doubts.title': '¿Todavía tienes dudas?',
    'methodology.doubts.desc': 'Contáctanos y descubre cómo podemos ayudarte a optimizar las finanzas de tu institución educativa.',
    'methodology.cta': 'Solicita una consultoría',

    // About Us
    'aboutUs.title.part1': 'Sobre ',
    'aboutUs.title.part2': 'nosotros',
    'aboutUs.title.mission': 'Nuestra Misión',
    'aboutUs.mission.desc': 'Optimizar la <span class="underline">gestión financiera</span> de organizaciones de <span class="font-bold">educación superior</span> a nivel nacional e internacional, mediante la creación y ejecución de <span class="underline">acuerdos</span>, <span class="underline">contratos</span> y <span class="underline">convenios estratégicos</span> con <span class="font-bold">gobiernos</span>, entidades de <span class="font-bold">educación superior</span> y centros educativos. Nos comprometemos a promover la <span class="underline">sostenibilidad económica</span>, la <span class="underline">transparencia</span> y la <span class="underline">eficiencia</span>, fortaleciendo el <span class="underline">impacto educativo</span> de estas instituciones para formar <span class="underline">líderes</span> y <span class="underline">comunidades</span> preparadas para los desafíos globales.',
    'aboutUs.title.experience': 'Nuestra Experiencia',
    'aboutUs.experience.desc': 'Somos especialistas en el <span class="underline">sector financiero</span> de la <span class="font-bold">educación superior</span>, actuando como aliados estratégicos para <span class="underline">instituciones educativas</span>, <span class="font-bold">gobiernos</span> y organizaciones que buscan transformar y fortalecer los <span class="underline">sistemas educativos</span> a nivel nacional e internacional. Nuestra experiencia abarca la <span class="underline">gestión financiera integral</span> de <span class="underline">universidades</span>, la colaboración con <span class="font-bold">gobiernos estatales</span> y la creación de <span class="underline">alianzas</span> con entidades dedicadas a la mejora del <span class="underline">ecosistema educativo</span>. Hemos trabajado con múltiples <span class="underline">universidades</span>, optimizando sus <span class="underline">recursos financieros</span> a través de <span class="underline">acuerdos estratégicos</span>, <span class="underline">contratos</span> y <span class="underline">convenios</span>. Nuestra labor ha permitido alcanzar una mayor <span class="font-bold">sostenibilidad económica</span>, maximizando el impacto de sus <span class="underline">programas académicos</span> y de <span class="underline">investigación</span>. Entre nuestros logros, destacamos la gestión exitosa de <span class="underline">presupuestos institucionales</span>, la implementación de <span class="underline">modelos financieros innovadores</span> y la mejora de <span class="underline">procesos administrativos</span> para garantizar la <span class="font-bold">transparencia</span> y <span class="font-bold">eficiencia</span>. Además, contamos con experiencia en la gestión de <span class="underline">fondos europeos</span> y <span class="underline">subvenciones</span>, apoyando a <span class="underline">universidades</span> y <span class="underline">centros educativos</span> en la obtención y administración eficiente de <span class="underline">recursos financieros</span>. Nuestra expertise incluye la elaboración de <span class="underline">propuestas competitivas</span>, la gestión de <span class="underline">proyectos financiados</span>, <span class="underline">acuerdos de desempeño</span> y el cumplimiento de <span class="underline">normativas</span>, asegurando un impacto positivo en las <span class="underline">comunidades educativas</span>. En colaboración con <span class="font-bold">gobiernos estatales</span>, hemos desarrollado <span class="underline">estrategias financieras</span> que promueven la <span class="underline">equidad</span>, la <span class="underline">accesibilidad</span> y la <span class="underline">calidad</span> en la <span class="font-bold">educación superior</span>. Desde la <span class="underline">planificación presupuestaria</span> hasta la creación de <span class="underline">modelos financieros personalizados</span>, nuestro enfoque alinea los <span class="underline">recursos</span> con los <span class="underline">objetivos estratégicos</span>, contribuyendo a <span class="underline">sistemas educativos</span> más resilientes y <span class="font-bold">sostenibles</span>.',

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

    // Hero (restaurando el original con ajustes)
    'hero.title.part1': 'We provide ',
    'hero.title.rentable': 'financial consulting',
    'hero.title.part2': ' specialized in ',
    'hero.title.estrategia': 'higher education',
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
    'services.title.part2': 'financial consultancy?',
    'services.example1': 'Increase in your entity’s expenses',
    'services.example2': 'Need for a new budget',
    'services.example3': 'Implementation of new economic regulations',
    'services.example4': 'Justification of grants',
    'services.example5': 'Relations with your governmental entity',
    'services.example6': 'Establishing relations with other higher education entities',

    // Methodology
    'methodology.title.part1': 'Our ',
    'methodology.title.part2': 'Methodology',
    'methodology.step1.title': 'Strategic Analysis',
    'methodology.step1.desc': 'We evaluate the financial needs and strategic objectives of the educational institution to design a personalized plan.',
    'methodology.step2.title': 'Preliminary Agreements',
    'methodology.step2.desc': 'We establish agreements and contracts with governments and educational entities to optimize resources and ensure sustainability.',
    'methodology.step3.title': 'Implementation and Monitoring',
    'methodology.step3.desc': 'We execute the financial plan and conduct continuous monitoring to ensure compliance with the established objectives.',
    'methodology.doubts.title': 'Still have questions?',
    'methodology.doubts.desc': 'Contact us and discover how we can help you optimize your educational institution’s finances.',
    'methodology.cta': 'Request a consultation',

    // About Us
    'aboutUs.title.part1': 'About ',
    'aboutUs.title.part2': 'us',
    'aboutUs.title.mission': 'Our Mission',
    'aboutUs.mission.desc': 'Optimize the <span class="underline">financial management</span> of <span class="font-bold">higher education</span> organizations at a national and international level through the creation and execution of <span class="underline">agreements</span>, <span class="underline">contracts</span>, and <span class="underline">strategic partnerships</span> with <span class="font-bold">governments</span>, <span class="font-bold">higher education</span> entities, and educational institutions. We are committed to promoting <span class="underline">economic sustainability</span>, <span class="underline">transparency</span>, and <span class="underline">efficiency</span>, strengthening the <span class="underline">educational impact</span> of these institutions to train <span class="underline">leaders</span> and <span class="underline">communities</span> prepared for global challenges.',
    'aboutUs.title.experience': 'Our Experience',
    'aboutUs.experience.desc': 'We are specialists in the <span class="underline">financial sector</span> of <span class="font-bold">higher education</span>, acting as strategic partners for <span class="underline">educational institutions</span>, <span class="font-bold">governments</span>, and organizations aiming to transform and strengthen <span class="underline">educational systems</span> nationally and internationally. Our expertise encompasses the <span class="underline">comprehensive financial management</span> of <span class="underline">universities</span>, collaboration with <span class="font-bold">state governments</span>, and the creation of <span class="underline">partnerships</span> with entities dedicated to improving the <span class="underline">educational ecosystem</span>. We have worked with multiple <span class="underline">universities</span>, optimizing their <span class="underline">financial resources</span> through <span class="underline">strategic agreements</span>, <span class="underline">contracts</span>, and <span class="underline">partnerships</span>. Our efforts have enabled greater <span class="font-bold">economic sustainability</span>, maximizing the impact of their <span class="underline">academic programs</span> and <span class="underline">research</span>. Our achievements include the successful management of <span class="underline">institutional budgets</span>, the implementation of <span class="underline">innovative financial models</span>, and the improvement of <span class="underline">administrative processes</span> to ensure <span class="font-bold">transparency</span> and <span class="font-bold">efficiency</span>. Additionally, we have expertise in managing <span class="underline">European funds</span> and <span class="underline">grants</span>, supporting <span class="underline">universities</span> and <span class="underline">educational institutions</span> in the efficient acquisition and management of <span class="underline">financial resources</span>. Our expertise includes developing <span class="underline">competitive proposals</span>, managing <span class="underline">funded projects</span>, <span class="underline">performance agreements</span>, and ensuring compliance with <span class="underline">regulations</span>, delivering a positive impact on <span class="underline">educational communities</span>. In collaboration with <span class="font-bold">state governments</span>, we have developed <span class="underline">financial strategies</span> that promote <span class="underline">equity</span>, <span class="underline">accessibility</span>, and <span class="underline">quality</span> in <span class="font-bold">higher education</span>. From <span class="underline">budget planning</span> to the creation of <span class="underline">customized financial models</span>, our approach aligns <span class="underline">resources</span> with <span class="underline">strategic objectives</span>, contributing to more resilient and <span class="font-bold">sustainable</span> <span class="underline">educational systems</span>.',

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
  }
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