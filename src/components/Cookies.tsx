const Cookies = () => {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
      <p>
        En Nuovo Finance, usamos cookies para mejorar tu experiencia en nuestro sitio web (nuovofinance.com). Esta Política de Cookies explica qué son, cómo las usamos y cómo gestionarlas.
      </p>
      <ol className="list-decimal list-inside mt-4 space-y-4">
        <li>
          <strong>¿Qué son las cookies?</strong>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora o móvil) cuando visitas un sitio web. Ayudan a recordar tu actividad y preferencias.</p>
        </li>
        <li>
          <strong>Tipos de cookies que usamos</strong>
          <p>
            - Cookies técnicas: Esenciales para el funcionamiento del sitio (ej. navegación, idioma). No requieren consentimiento.
            - Cookies analíticas: Para analizar el tráfico (ej. Google Analytics). Recopilan datos anonimizados sobre visitas.
            - Cookies de terceros: De servicios como WhatsApp o redes sociales, para compartir contenido.
          </p>
        </li>
        <li>
          <strong>Cómo gestionar las cookies</strong>
          <p>
            Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies:
            <br />
            - Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies.
            <br />
            - Firefox: Opciones &gt; Privacidad y seguridad &gt; Cookies.
            <br />
            - Safari: Preferencias &gt; Privacidad &gt; Cookies.
            <br />
            - Edge: Configuración &gt; Cookies y permisos de sitio.
          </p>
        </li>
        <li>
          <strong>Tus derechos</strong>
          <p>Puedes oponerte al uso de cookies no esenciales. Para retirar consentimiento, borra las cookies o usa el banner de cookies.</p>
        </li>
        <li>
          <strong>Cambios a esta política</strong>
          <p>Podemos actualizarla. Te notificaremos cambios en el sitio.</p>
        </li>
        <li>
          <strong>Contacto</strong>
          <p>Para dudas, contacta a info@nuovofinance.com.</p>
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">Última actualización: 24 de septiembre de 2025</p>
    </div>
  );
};

export default Cookies;