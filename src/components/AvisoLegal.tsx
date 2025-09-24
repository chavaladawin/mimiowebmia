import { useLanguage } from "@/contexts/LanguageContext";

const AvisoLegal = () => {
  const { t } = useLanguage();

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>
      <p>
        En Nuovo Finance, responsable del sitio web nuovofinance.com, te informamos de las condiciones generales de uso del sitio (Aviso Legal), que se regirán por la legislación española.
      </p>
      <ol className="list-decimal list-inside mt-4 space-y-4">
        <li>
          <strong>Datos de la empresa</strong>
          <p>- Denominación: Nuovo Finance S.L. (o tu empresa). - NIF: [Tu NIF]. - Domicilio: [Dirección completa]. - Email: info@nuovofinance.com. - Teléfono: [Número].</p>
        </li>
        <li>
          <strong>Objeto</strong>
          <p>El sitio web proporciona información sobre servicios de consultoría financiera para educación superior. El acceso implica aceptación de este Aviso Legal.</p>
        </li>
        <li>
          <strong>Uso del sitio</strong>
          <p>- Autorizado: Acceso personal y no comercial. - Prohibido: Copia, distribución, o uso no autorizado del contenido sin permiso. - Responsabilidad: Nuovo Finance no se hace responsable de daños por uso indebido o interrupciones técnicas.</p>
        </li>
        <li>
          <strong>Propiedad intelectual</strong>
          <p>El contenido (textos, imágenes, logos) es propiedad de Nuovo Finance o licenciados. Queda prohibida su reproducción sin consentimiento.</p>
        </li>
        <li>
          <strong>Exclusión de responsabilidad</strong>
          <p>Nuovo Finance no garantiza la disponibilidad o ausencia de virus. El usuario es responsable de su equipo.</p>
        </li>
        <li>
          <strong>Enlaces</strong>
          <p>Los enlaces a terceros son responsabilidad de estos. Nuovo Finance no respalda su contenido.</p>
        </li>
        <li>
          <strong>Ley aplicable</strong>
          <p>Se rige por la legislación española. Cualquier controversia se somete a los Juzgados de [ciudad, ej. Madrid].</p>
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">Última actualización: 24 de septiembre de 2025</p>
    </div>
  );
};

export default AvisoLegal;