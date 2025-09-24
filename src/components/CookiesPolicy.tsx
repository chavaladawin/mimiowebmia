const CookiesPolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p>
        At Nuovo Finance, we use cookies to improve your experience on our website (nuovofinance.com). This Cookie Policy explains what they are, how we use them, and how to manage them.
      </p>
      <ol className="list-decimal list-inside mt-4 space-y-4">
        <li>
          <strong>What are cookies?</strong>
          <p>Cookies are small text files stored on your device (computer or mobile) when you visit a website. They help remember your activity and preferences.</p>
        </li>
        <li>
          <strong>Types of cookies we use</strong>
          <p>
            - Technical cookies: Essential for site functionality (e.g., navigation, language). Do not require consent. <br />
            - Analytical cookies: To analyze traffic (e.g., Google Analytics). Collect anonymized data on visits. <br />
            - Third-party cookies: From services like WhatsApp or social media, for sharing content.
          </p>
        </li>
        <li>
          <strong>How to manage cookies</strong>
          <p>
            You can configure your browser to accept, reject, or delete cookies:
            <br />
            - Chrome: Settings &gt; Privacy &amp; Security &gt; Cookies.
            <br />
            - Firefox: Options &gt; Privacy &amp; Security &gt; Cookies.
            <br />
            - Safari: Preferences &gt; Privacy &gt; Cookies.
            <br />
            - Edge: Settings &gt; Cookies and site permissions.
          </p>
        </li>
        <li>
          <strong>Your rights</strong>
          <p>You can opt out of non-essential cookies. To withdraw consent, delete cookies or use the cookie banner.</p>
        </li>
        <li>
          <strong>Changes to this policy</strong>
          <p>We may update it. We will notify you of changes on the site.</p>
        </li>
        <li>
          <strong>Contact</strong>
          <p>For questions, contact info@nuovofinance.com.</p>
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">Last update: September 24, 2025</p>
    </div>
  );
};

export default CookiesPolicy;
