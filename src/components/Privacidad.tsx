import { useLanguage } from "@/contexts/LanguageContext";

const Privacidad = () => {
  const { t } = useLanguage();

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p>
        En Nuovo Finance, respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información que obtenemos a través de nuestro sitio web (nuovofinance.com).
      </p>
      <ol className="list-decimal list-inside mt-4 space-y-4">
        <li>
          <strong>Información que recopilamos</strong>
          <p>Recopilamos datos personales cuando interactúas con nuestro sitio, como: - Datos de contacto: Nombre, email, teléfono y empresa (a través de formularios de contacto). - Datos de navegación: Dirección IP, tipo de navegador y páginas visitadas (para mejorar el sitio, con cookies). - No recopilamos datos sensibles (origen racial, datos de salud, etc.).</p>
        </li>
        <li>
          <strong>Cómo usamos tu información</strong>
          <p>Usamos tus datos para: - Responder a consultas (por ejemplo, solicitudes de consultoría). - Enviar información sobre nuestros servicios (solo con tu consentimiento). - Analizar el uso del sitio para mejorarlo (datos anonimizados). - Cumplir con obligaciones legales.</p>
        </li>
        <li>
          <strong>Compartir tu información</strong>
          <p>No vendemos ni compartimos tus datos con terceros, salvo: - Proveedores de servicios (por ejemplo, herramientas de email como Mailchimp, con contratos de protección de datos). - Autoridades legales si es requerido por ley.</p>
        </li>
        <li>
          <strong>Tus derechos</strong>
          <p>De acuerdo con el RGPD y LOPD, tienes derecho a: - Acceso, rectificación, supresión, limitación, portabilidad y oposición a tus datos. - Retirar tu consentimiento en cualquier momento. - Contacta a info@nuovofinance.com para ejercer estos derechos.</p>
        </li>
        <li>
          <strong>Cookies</strong>
          <p>Usamos cookies técnicas y analíticas. Ver nuestra Política de Cookies para detalles.</p>
        </li>
        <li>
          <strong>Seguridad</strong>
          <p>Adoptamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdidas o alteraciones.</p>
        </li>
        <li>
          <strong>Cambios a esta política</strong>
          <p>Podemos actualizar esta política. Te notificaremos cambios significativos por email o en el sitio.</p>
        </li>
        <li>
          <strong>Contacto</strong>
          <p>Si tienes dudas, contacta a: Nuovo Finance [Dirección completa] Email: info@nuovofinance.com Teléfono: [Número de teléfono]</p>
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">Última actualización: 24 de septiembre de 2025</p>
    </div>
  );
};

export default Privacidad;