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
    'nav.home': '',
    'nav.methodology': 'Nuestra Metodología',
    'nav.about': 'Nosotros',

    // Hero
    'hero.title.part1': 'Haz tu empresa más ',
    'hero.title.rentable': 'rentable',
    'hero.title.part2': ' con una estrategia ',
    'hero.title.estrategia': 'financiera',
    'hero.title.part3': ' ',
    'hero.subtitle': 'sea cual sea tu sector',
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
    'methodology.subtitle': 'Proceso estructurado en 4 pasos que garantiza resultados precisos y accionables',
    'methodology.step1.title': 'Análisis sectorial',
    'methodology.step1.desc': 'Evaluamos en profundidad tu mercado, competidores directos e indirectos, y las tendencias del sector para identificar oportunidades y amenazas específicas de tu entorno empresarial con un enfoque detallado y personalizado.',
    'methodology.step2.title': 'Análisis de documentación',
    'methodology.step2.desc': 'Revisamos detalladamente tus cuentas anuales, estados financieros, procesos contables clave y documentación relevante para obtener una radiografía completa de tu situación actual y detectar áreas de mejora.',
    'methodology.step3.title': 'Muestreo y simulaciones',
    'methodology.step3.desc': 'Realizamos pruebas exhaustivas con diferentes escenarios económicos y estrategias financieras posibles, evaluando el impacto de cada decisión en la salud de tu empresa mediante análisis predictivos avanzados.',
    'methodology.step4.title': 'Informe y plan de acción',
    'methodology.step4.desc': 'Te entregamos un informe detallado con conclusiones específicas y un plan de acción claro, priorizado y ejecutable para optimizar las finanzas de tu empresa de forma inmediata y sostenible en el tiempo.',

    // About Us
    'aboutUs.title.part1': 'Sobre ',
    'aboutUs.title.part2': 'nosotros',
    'aboutUs.desc.p1': 'En Nuovo Finance contamos con más de 5 años de experiencia en finanzas corporativas. Ayudamos a compañías a tomar decisiones con rigor técnico y visión estratégica a través de Análisis financiero, Tendencias de mercado, Cuentas anuales y Preauditorías que ordenan la información y preparan a tu empresa para crecer.',
    'aboutUs.desc.p2': 'Diseñamos Modelos financieros, optimizamos la Gestión del presupuesto, creamos Informes financieros con Power BI y alineamos tus procesos con ISO 32210 para impulsar la sostenibilidad financiera. Todo con un enfoque práctico, claro y orientado a resultados.',
    'aboutUs.card1': 'Conocimientos',
    'aboutUs.card2': 'Experiencia',
    'aboutUs.card3': 'Estándares ISO',

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
    'nav.home': '',
    'nav.methodology': 'Our Methodology',
    'nav.about': 'About Us',

    // Hero
    'hero.title.part1': 'Drive growth and ',
    'hero.title.rentable': 'maximize profits',
    'hero.title.part2': ' with a ',
    'hero.title.estrategia': 'financial',
    'hero.title.part3': ' strategy',
    'hero.subtitle': 'whatever your industry',
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
    'methodology.subtitle': 'Structured 4-step process that guarantees precise and actionable results',
    'methodology.step1.title': 'Sector analysis',
    'methodology.step1.desc': 'We evaluate in depth your market, direct and indirect competitors, and sector trends to identify specific opportunities and threats in your business environment with a detailed and personalized approach.',
    'methodology.step2.title': 'Documentation analysis',
    'methodology.step2.desc': 'We review in detail your annual accounts, financial statements, key accounting processes and relevant documentation to obtain a complete picture of your current situation and detect areas for improvement.',
    'methodology.step3.title': 'Sampling and simulations',
    'methodology.step3.desc': 'We perform exhaustive tests with different economic scenarios and possible financial strategies, evaluating the impact of each decision on your company\'s health through advanced predictive analysis.',
    'methodology.step4.title': 'Report and action plan',
    'methodology.step4.desc': 'We deliver a detailed report with specific conclusions and a clear, prioritized and executable action plan to optimize your company\'s finances immediately and sustainably over time.',

    // About Us
    'aboutUs.title.part1': 'About ',
    'aboutUs.title.part2': 'us',
    'aboutUs.desc.p1': 'At Nuovo Finance we have more than 5 years of experience in corporate finance. We help companies make decisions with technical rigor and strategic vision through Financial Analysis, Market Trends, Annual Accounts and Pre-audits that organize information and prepare your company to grow.',
    'aboutUs.desc.p2': 'We design Financial Models, optimize Budget Management, create Financial Reports with Power BI and align your processes with ISO 32210 to drive financial sustainability. All with a practical, clear and results-oriented approach.',
    'aboutUs.card1': 'Knowledge',
    'aboutUs.card2': 'Experience',
    'aboutUs.card3': 'ISO Standards',

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