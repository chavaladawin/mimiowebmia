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
    'nav.evaluation': 'Autoevaluación',
    'nav.faq': 'Preguntas frecuentes',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title.part1': 'Haz tu empresa más ',
    'hero.title.rentable': 'rentable',
    'hero.title.part2': ' con una ',
    'hero.title.estrategia': 'estrategia financiera',
    'hero.title.part3': ' sólida',
    'hero.subtitle': 'sea cual sea tu sector',
    'hero.cta': 'Solicita una consultoría',

    // Finance Intro
    'financeIntro.title.part1': 'La importancia de las ',
    'financeIntro.title.part2': 'finanzas corporativas',
    'financeIntro.description.p1': 'Las finanzas corporativas son la base para que cualquier empresa, sin importar su tamaño o sector, pueda crecer de forma sostenible. Una gestión financiera sólida permite aumentar la rentabilidad, reducir costes de deuda, atraer inversión y generar confianza entre accionistas, clientes y empleados.',
    'financeIntro.description.p2': 'En Nuovo Finance ayudamos a microempresas, pymes y startups a tomar el control de sus finanzas, anticiparse a los riesgos y diseñar estrategias claras que impulsan resultados positivos y duraderos. Nuestro objetivo es que dispongas de la información y las herramientas necesarias para competir en tu sector, aprovechar oportunidades y construir un futuro empresarial más sólido.',
    'financeIntro.card1.title': 'Mejora tus resultados',
    'financeIntro.card1.desc': 'Optimiza ingresos y márgenes con decisiones basadas en datos.',
    'financeIntro.card2.title': 'Aumenta tu capital',
    'financeIntro.card2.desc': 'Genera confianza con informes claros y una estructura financiera robusta.',
    'financeIntro.card3.title': 'Reduce tus gastos',
    'financeIntro.card3.desc': 'Reduce el coste financiero optimizando tu estructura de capital.',

    // Services
    'services.title.part1': 'Servicios ',
    'services.title.part2': 'financieros',
    'services.subtitle': 'Compara y solicita la alternativa que mejor se adapte a tu empresa.',
    'services.analysis.title': 'Análisis financiero',
    'services.analysis.desc': 'Analizamos la situación financiera de tu empresa y la comparamos con tu sector para detectar mejoras en rentabilidad, liquidez y eficiencia, dándote una visión clara para tomar decisiones estratégicas.',
    'services.preaudit.title': 'Preauditoría',
    'services.preaudit.desc': 'Realiza una pre-auditoría por parte de nuestros expertos financieros para poder comprobar y mejorar la salud financiera de tu compañía.',
    'services.models.title': 'Modelos financieros',
    'services.models.desc': 'Creamos modelos financieros a medida que reflejan la realidad de tu sector y empresa. Te ayudan a anticipar distintos escenarios, evaluar riesgos y definir estrategias que impulsen el crecimiento sostenible.',
    'services.iso.title': 'ISO 32210',
    'services.iso.desc': 'Te ayudamos a adaptar las finanzas de tu empresa a la norma ISO 32210 de sostenibilidad financiera, asegurando transparencia, control y sostenibilidad para cumplir con las tendencias y exigencias del mercado.',
    'services.cta': 'Quiero saber más',

    // Evaluation
    'evaluation.title.part1': 'Auto',
    'evaluation.title.part2': 'evaluación',
    'evaluation.description': 'En esta misma página tienes una herramienta para autoevaluar y hacer el diagnóstico de tu empresa, conocer la salud financiera y saber dónde están los fallos clave. Eres libre de probarla o checkear tus estados de forma gratuita.',
    'evaluation.download': 'Descargar plantilla PDF',
    'evaluation.contact.text': 'Si ya lo has hecho y necesitas nuestros servicios contáctanos aquí:',
    'evaluation.contact.cta': 'Necesito vuestros servicios',
    'evaluation.template.title': 'Plantilla de Diagnóstico Financiero',
    'evaluation.template.subtitle': 'Descarga nuestra plantilla PDF gratuita para evaluar tu empresa y conocer tu estado financiero actual',
    'evaluation.list.item1': 'Análisis de ratios financieros',
    'evaluation.list.item2': 'Evaluación de liquidez y solvencia',
    'evaluation.list.item3': 'Diagnóstico de rentabilidad',
    'evaluation.list.item4': 'Identificación de áreas de mejora',
    'evaluation.completed.title': '¿Ya has completado tu autoevaluación?',

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

    // Experience
"experience": {
  "title": {
    "part1": "Nuestra",
    "part2": "Experiencia"
  },
  "description": "Estos son algunos ejemplos de cómo ayudamos a nuestros clientes a mejorar su salud financiera y su posicionamiento en el mercado:",
  "card1": {
    "title": "Startup tecnológica",
    "metric": "30% de reducción de intereses",
    "desc": "Tras optimizar estructura financiera y renegociar condiciones."
  },
  "card2": {
    "title": "Aseguradora nacional",
    "metric": "Aumento de liquidez del 45%",
    "desc": "Gracias a la reducción en los días de cobro y a procesos eficientes."
  },
  "card3": {
    "title": "E-commerce",
    "metric": "100% confianza",
    "desc": "4 ajustes menores realizados en preauditoría, sin observaciones críticas."
  }
},

    // FAQ
    'faq.title.part1': 'Preguntas ',
    'faq.title.part2': 'frecuentes',
    'faq.description': 'Resolvemos las dudas más comunes sobre nuestros servicios',
    'faq.q1.question': '¿Cuánto tiempo toma una preauditoría?',
    'faq.q1.answer': 'El tiempo de ejecución varía según el tamaño y complejidad de la empresa, pero generalmente oscila entre 2-4 semanas para completar el análisis completo.',
    'faq.q2.question': '¿Qué documentos necesito preparar?',
    'faq.q2.answer': 'Necesitarás estados financieros de los últimos 2-3 años, documentación contable, registros de transacciones relevantes y cualquier auditoría previa realizada.',
    'faq.q3.question': '¿Cómo garantizan la confidencialidad?',
    'faq.q3.answer': 'Cumplimos estrictamente con todas las normativas de protección de datos y firmamos acuerdos de confidencialidad. Toda la información se maneja con los más altos estándares de seguridad.',
    'faq.q4.question': '¿Cumple con el RGPD?',
    'faq.q4.answer': 'Sí, todos nuestros procesos cumplen completamente con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea.',
    'faq.q5.question': '¿Qué entregables recibo al final?',
    'faq.q5.answer': 'Recibirás un informe detallado con análisis de riesgos, recomendaciones específicas, plan de acción y seguimiento post-entrega durante 30-90 días según el paquete contratado.',
    'faq.q6.question': '¿Puedo solicitar cambios después de la entrega?',
    'faq.q6.answer': 'Sí, incluimos un período de soporte post-entrega donde puedes solicitar aclaraciones y ajustes menores. El tiempo de soporte varía según el paquete contratado (30-90 días).',

    // About Us
    'aboutUs.title.part1': 'Sobre ',
    'aboutUs.title.part2': 'nosotros',
    'aboutUs.desc.p1': 'En Nuovo Finance contamos con más de 5 años de experiencia en finanzas corporativas. Ayudamos a compañías a tomar decisiones con rigor técnico y visión estratégica a través de Análisis financiero, Tendencias de mercado, Cuentas anuales y Preauditorías que ordenan la información y preparan a tu empresa para crecer.',
    'aboutUs.desc.p2': 'Diseñamos Modelos financieros, optimizamos la Gestión del presupuesto, creamos Informes financieros con Power BI y alineamos tus procesos con ISO 32210 para impulsar la sostenibilidad financiera. Todo con un enfoque práctico, claro y orientado a resultados.',
    'aboutUs.card1': 'Conocimientos',
    'aboutUs.card2': 'Experiencia',
    'aboutUs.card3': 'Estándares ISO',

    // Contact

    // Contact
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    "contact.description": "Déjanos tus datos y cuéntanos tu situación.",
    "contact.company": "Empresa",


    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de privacidad',
    'footer.cookies': 'Política de cookies',
    'footer.legal': 'Aviso legal',
  },
  en: {
    // Navbar
    'nav.home': '',
    'nav.evaluation': 'Self-Assessment',
    'nav.faq': 'Frequently Asked Questions',
    'nav.contact': 'Contact',

    // Hero
    'hero.title.part1': 'Drive growth and ',
    'hero.title.rentable': 'maximize profits',
    'hero.title.part2': ' with a solid ',
    'hero.title.estrategia': 'financial a proven',
    'hero.subtitle': 'whatever your industry',
    'hero.cta': 'Request a consultation',

    // Finance Intro
    'financeIntro.title.part1': 'The relevance of ',
    'financeIntro.title.part2': 'corporate finance',
    'financeIntro.description.p1': 'Corporate finance is the foundation for any company, regardless of size or sector, to grow sustainably. Solid financial management allows increasing profitability, reducing debt costs, attracting investment and generating confidence among shareholders, customers and employees.',
    'financeIntro.description.p2': 'At Nuovo Finance we help micro-companies, SMEs and startups take control of their finances, anticipate risks and design clear strategies that drive positive and lasting results. Our goal is for you to have the information and tools necessary to compete in your sector, seize opportunities and build a more solid business future.',
    'financeIntro.card1.title': 'Improve your results',
    'financeIntro.card1.desc': 'Optimize revenue and margins with data-driven decisions.',
    'financeIntro.card2.title': 'Increase your capital',
    'financeIntro.card2.desc': 'Build trust with clear reports and a robust financial structure.',
    'financeIntro.card3.title': 'Reduce your expenses',
    'financeIntro.card3.desc': 'Reduce financial costs by optimizing your capital structure.',

    // Services
    'services.title.part1': 'Financial ',
    'services.title.part2': 'services',
    'services.subtitle': 'Compare and request the alternative that best suits your company.',
    'services.analysis.title': 'Financial analysis',
    'services.analysis.desc': 'We analyze your company\'s financial situation and compare it with your sector to detect improvements in profitability, liquidity and efficiency, giving you a clear vision to make strategic decisions.',
    'services.preaudit.title': 'Pre-audit',
    'services.preaudit.desc': 'Perform a pre-audit by our financial experts to be able to check and improve the financial health of your company.',
    'services.models.title': 'Financial models',
    'services.models.desc': 'We create custom financial models that reflect the reality of your sector and company. They help you anticipate different scenarios, assess risks and define strategies that drive sustainable growth.',
    'services.iso.title': 'ISO 32210',
    'services.iso.desc': 'We help you adapt your company\'s finances to the ISO 32210 financial sustainability standard, ensuring transparency, control and sustainability to comply with market trends and requirements.',
    'services.cta': 'Request a consultation',

    // Evaluation
    'evaluation.title.part1': 'Financial',
    'evaluation.title.part2': 'self-assessment',
    'evaluation.description': 'On this same page you have a tool to self-assess and diagnose your company, know the financial health and know where the key failures are. You are free to try it or check your statements for free.',
    'evaluation.download': 'Download PDF template',
    'evaluation.contact.text': 'If you have already done it and need our services contact us here:',
    'evaluation.contact.cta': 'Request a consultation',
    'evaluation.template.title': 'Financial Diagnosis Template',
    'evaluation.template.subtitle': 'Download our free PDF template to assess your company and understand its current financial status',
    'evaluation.list.item1': 'Analysis of financial ratios',
    'evaluation.list.item2': 'Assessment of liquidity and solvency',
    'evaluation.list.item3': 'Profitability diagnosis',
    'evaluation.list.item4': 'Identification of improvement areas',
    'evaluation.completed.title': 'Have you completed your self-assessment?',


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

    // Experience
"experience": {
  "title": {
    "part1": "Our",
    "part2": "Experience"
  },
  "description": "Here are some examples of how we help our clients improve their financial health and market positioning:",
  "card1": {
    "title": "Tech Startup",
    "metric": "30% interest reduction",
    "desc": "After optimizing financial structure and renegotiating terms."
  },
  "card2": {
    "title": "National Insurance Company",
    "metric": "45% increase in liquidity",
    "desc": "Thanks to reduced collection days and efficient processes."
  },
  "card3": {
    "title": "E-commerce",
    "metric": "100% confidence",
    "desc": "4 minor adjustments made during pre-audit, with no critical observations."
  }
},

    // FAQ
    'faq.title.part1': 'FA',
    'faq.title.part2': 'Q',
    'faq.description': 'We answer the most common questions about our services',
    'faq.q1.question': 'How long does a pre-audit take?',
    'faq.q1.answer': 'Execution time varies depending on the size and complexity of the company, but it generally takes between 2-4 weeks to complete the full analysis.',
    'faq.q2.question': 'What documents do I need to prepare?',
    'faq.q2.answer': 'You will need financial statements for the last 2-3 years, accounting documentation, records of relevant transactions, and any previous audits conducted.',
    'faq.q3.question': 'How do you ensure confidentiality?',
    'faq.q3.answer': 'We strictly comply with all data protection regulations and sign confidentiality agreements. All information is handled with the highest security standards.',
    'faq.q4.question': 'Is it GDPR compliant?',
    'faq.q4.answer': 'Yes, all our processes fully comply with the European Union\'s General Data Protection Regulation (GDPR).',
    'faq.q5.question': 'What deliverables do I receive at the end?',
    'faq.q5.answer': 'You will receive a detailed report with risk analysis, specific recommendations, an action plan, and post-delivery follow-up for 30-90 days depending on the package purchased.',
    'faq.q6.question': 'Can I request changes after delivery?',
    'faq.q6.answer': 'Yes, we include a post-delivery support period where you can request clarifications and minor adjustments. Support time varies depending on the package purchased (30-90 days).',

    // About Us
    'aboutUs.title.part1': 'About ',
    'aboutUs.title.part2': 'us',
    'aboutUs.desc.p1': 'At Nuovo Finance we have more than 5 years of experience in corporate finance. We help companies make decisions with technical rigor and strategic vision through Financial Analysis, Market Trends, Annual Accounts and Pre-audits that organize information and prepare your company to grow.',
    'aboutUs.desc.p2': 'We design Financial Models, optimize Budget Management, create Financial Reports with Power BI and align your processes with ISO 32210 to drive financial sustainability. All with a practical, clear and results-oriented approach.',
    'aboutUs.card1': 'Knowledge',
    'aboutUs.card2': 'Experience',
    'aboutUs.card3': 'ISO Standards',

    // Contact

    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    "contact.description": "Leave us your details and tell us about your situation.",
    "contact.company": "Company",

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
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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