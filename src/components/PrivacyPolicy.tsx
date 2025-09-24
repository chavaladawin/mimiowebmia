import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p>
        At Nuovo Finance, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard the information we obtain through our website (nuovofinance.com).
      </p>
      <ol className="list-decimal list-inside mt-4 space-y-4">
        <li>
          <strong>Information We Collect</strong>
          <p>We collect personal data when you interact with our site, such as: - Contact data: Name, email, phone, and company (through contact forms). - Navigation data: IP address, browser type, and pages visited (to improve the site, using cookies). - We do not collect sensitive data (racial origin, health data, etc.).</p>
        </li>
        <li>
          <strong>How We Use Your Information</strong>
          <p>We use your data to: - Respond to inquiries (e.g., consultation requests). - Send information about our services (only with your consent). - Analyze site usage to improve it (anonymized data). - Comply with legal obligations.</p>
        </li>
        <li>
          <strong>Sharing Your Information</strong>
          <p>We do not sell or share your data with third parties, except: - Service providers (e.g., email tools like Mailchimp, under data protection agreements). - Legal authorities if required by law.</p>
        </li>
        <li>
          <strong>Your Rights</strong>
          <p>Under GDPR and LOPD, you have the right to: - Access, rectification, erasure, restriction, portability, and objection to your data. - Withdraw your consent at any time. - Contact info@nuovofinance.com to exercise these rights.</p>
        </li>
        <li>
          <strong>Cookies</strong>
          <p>We use technical and analytical cookies. See our Cookie Policy for details.</p>
        </li>
        <li>
          <strong>Security</strong>
          <p>We adopt technical and organizational measures to protect your data against unauthorized access, loss, or alteration.</p>
        </li>
        <li>
          <strong>Changes to this policy</strong>
          <p>We may update this policy. We will notify significant changes by email or on the site.</p>
        </li>
        <li>
          <strong>Contact</strong>
          <p>If you have questions, contact: Nuovo Finance [Full Address] Email: info@nuovofinance.com Phone: [Phone Number]</p>
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">Last update: September 24, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;