import LegalPage from '../../components/LegalPage';

export const metadata = { title: 'Terms of Use | OneRxiv' };

const SECTIONS = [
  ['About these terms', 'These terms cover your use of the OneRxiv website. OneRxiv is a business-to-business healthcare software company. Customers who buy our products sign a separate agreement.'],
  ['Acceptance', 'By using this website you agree to these terms. If you do not agree, please do not use the site.'],
  ['Who this site is for', 'This site is intended for businesses and professionals. It is not intended for patients or the general public seeking medical help.'],
  ['No patient or health information', 'Please do not send patient or other health information through the contact form, the newsletter box or the AI assistant.'],
  ['AI assistant', 'The assistant gives general information about OneRxiv. It may be wrong, and it is not medical, legal or compliance advice.'],
  ['Acceptable use', 'Do not misuse the site, including attempting to break its security, scraping it, sending spam, or submitting false information.'],
  ['Intellectual property', 'The OneRxiv name, logo, text, design and software on this site belong to OneRxiv or its licensors.'],
  ['Third-party links', 'We are not responsible for the content or practices of other websites we link to.'],
  ['No warranties and limits of liability', 'The site is provided as is. To the extent allowed by law, OneRxiv is not liable for losses arising from use of the site.'],
  ['Changes', 'We may update the site and these terms. The date above shows when they were last changed.'],
  ['Governing law', '[Add the country or region whose law applies, and where disputes are handled.]'],
];

export default function Terms() {
  return <LegalPage title="Terms of Use" intro="Please read these terms before using the OneRxiv website." sections={SECTIONS} />;
}
