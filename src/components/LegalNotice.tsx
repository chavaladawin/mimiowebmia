import { useLanguage } from "@/contexts/LanguageContext";

const LegalNotice = () => {
  const { t } = useLanguage();

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Legal Notice</h1>
      <p>
        Nuovo Finance, owner of the website nuovofinance.com, informs you of the general terms of use of the site (Legal Notice), governed by Spanish law.
      </p>
      <ol className="list-decimal list-inside mt-4 space-y-4">
        <li>
          <strong>Company Data</strong>
          <p>- Name: Nuovo Finance S.L. (or your company). - VAT Number: [Your VAT Number]. - Address: [Full Address]. - Email: info@nuovofinance.com. - Phone: [Phone Number].</p>
        </li>
        <li>
          <strong>Purpose</strong>
          <p>The website provides information about financial consulting services for higher education. Access implies acceptance of this Legal Notice.</p>
        </li>
        <li>
          <strong>Site Use</strong>
          <p>- Authorized: Personal and non-commercial access. - Prohibited: Copying, distribution, or unauthorized use of content. - Liability: Nuovo Finance is not responsible for damages from misuse or technical interruptions.</p>
        </li>
        <li>
          <strong>Intellectual Property</strong>
          <p>The content (texts, images, logos) is owned by Nuovo Finance or licensed. Reproduction without consent is prohibited.</p>
        </li>
        <li>
          <strong>Liability Exclusion</strong>
          <p>Nuovo Finance does not guarantee availability or absence of viruses. The user is responsible for their equipment.</p>
        </li>
        <li>
          <strong>Links</strong>
          <p>Links to third parties are their responsibility. Nuovo Finance does not endorse their content.</p>
        </li>
        <li>
          <strong>Applicable Law</strong>
          <p>Governed by Spanish law. Any controversy is submitted to the Courts of [city, e.g. Madrid].</p>
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">Last update: September 24, 2025</p>
    </div>
  );
};

export default LegalNotice;