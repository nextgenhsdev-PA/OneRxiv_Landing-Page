import LegalPage from '../../components/LegalPage';

export const metadata = { title: 'Privacy Policy | OneRxiv' };

const SECTIONS = [
  ['What we collect', 'Details you give us: your name, work email, phone number, organization type and message when you use the contact form, and your email if you join the newsletter. We also keep basic technical data needed to run and secure the site.'],
  ['Why we collect it', 'To reply to your enquiry, send updates you asked for, keep the site secure and understand how it is used.'],
  ['Health information', 'This site is not meant to receive patient or health information. Please do not send any.'],
  ['Who we share it with', 'Only with service providers that help us run the site, such as our hosting and email services, under appropriate terms. We do not sell your personal data.'],
  ['How long we keep it', '[Add retention periods, for example how long enquiries and newsletter records are kept.]'],
  ['Security', 'We take reasonable steps to protect the information you send us, and we limit who can access it.'],
  ['Cookies and analytics', '[Describe any cookies or analytics tools used, and how visitors can opt out.]'],
  ['Your rights', 'You can ask to see, correct or delete the personal data we hold about you, or to stop receiving emails, by contacting us.'],
];

export default function Privacy() {
  return <LegalPage title="Privacy Policy" intro="This page explains what information OneRxiv collects through this website and how we use it." sections={SECTIONS} />;
}
