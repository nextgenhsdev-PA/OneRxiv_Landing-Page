// [question, answer, showOnHome]. Edit answers freely; confirm anything marked TODO with your team.
export const FAQ_GROUPS = [
  ['Why one platform', [
    ['Why use one connected platform instead of separate systems?', 'When scheduling, charting, billing and messaging share one record, information is entered once and seen by everyone who needs it. That means less re-typing, fewer errors and fewer handoffs to chase.', true],
    ['What problems come from disconnected systems?', 'Each system holds its own version of the patient. Staff re-enter data, results arrive late, claims bounce over missing documentation, and nobody has the full picture.', true],
    ['How does one patient record help care and patient safety?', 'Clinicians see the same history, medications and results in one place, which helps avoid missed information and duplicate work.'],
    ['Can OneRxiv still connect to our labs, pharmacies and other systems?', 'We design for connections with outside systems. The exact integrations depend on your setup, so we confirm them with you in your first call.'], // TODO confirm integrations
    ['Will we be locked in, and can we export our data?', 'We go through data export options and terms with you before you sign, so you know exactly how it works.'], // TODO confirm
  ]],
  ['Clinical', [
    ['Which specialties do you support?', 'Primary care, behavioral health, pain and spine, and multi-location groups, with templates you can tailor. Tell us your specialty and we will show you how it fits.', true],
    ['Can we customize templates and workflows?', 'Yes. Templates and workflows are designed to be tailored to how your practice works.'],
    ['How does AI documentation work, and does it replace the clinician?', 'Ambient AI drafts the note from the visit conversation. The clinician always reviews, edits and signs. It supports the clinician and does not replace them.', true],
    ['Is telemedicine built in?', 'Yes. Virtual visits run inside the same record and schedule as in-person visits.'],
    ['How do prescriptions and refills work?', 'Prescriptions and refill requests are prepared for the clinician to review and approve. Prescribing rules differ by country, so we confirm what applies to you.'], // TODO confirm
  ]],
  ['Patients', [
    ['I’m a patient. How do I book an appointment or get my records?', 'OneRxiv serves healthcare organizations, not individual patients. Please contact your clinic or hospital, or use their patient portal. Please do not send health information through this website.', true],
    ['How do patients get reminders, fill in forms and message their clinic?', 'Clinics can send reminders, collect forms before a visit and handle routine messages through their OneRxiv setup. Available features depend on what your organization turns on.'],
    ['Who can see a patient’s information?', 'Access is designed around roles, so people see only what their job requires, and organizations control who has access.'],
    ['Can patients use it on their phone or in their own language?', 'We are working to make patient-facing tools easy to use on phones and in more languages. Ask us what is available for your region.'], // TODO confirm
  ]],
  ['Security', [
    ['How do you protect patient information?', 'Security and privacy are core design priorities, including role-based access and activity tracking. Ask us for our current security overview.', true],
    ['Which regulations and standards do you follow?', 'We share our current compliance documentation, and the standards that apply to your region, on request. We only state what we can document.', true], // TODO list real certifications here
    ['Who owns our data, and where is it stored?', 'You stay in control of your organization’s data. Hosting location and retention options are covered in your agreement and discussed in your first call.'],
    ['What happens if there is a security incident?', 'Our incident response and notification process is explained in our security documentation, which you can request.'],
  ]],
  ['Getting started', [
    ['How long does implementation take?', 'It depends on your size and current systems. In your first call we scope a plan together, from mapping workflows to go-live.', true],
    ['Can you migrate our existing records?', 'We can plan a migration from your current system and validate it with you before launch. The scope depends on what you use today.', true],
    ['How is our team trained, and what support do you offer?', 'We train your team during onboarding and support you afterwards. Details are agreed for your organization.'],
    ['How much does it cost?', 'Pricing depends on your number of clinicians, locations and the modules you choose. Request a quote and we will give you a clear figure.', true],
    ['Do you work with hospitals, insurers and private practices?', 'Yes. We serve hospitals, insurance companies and private practitioners from the same shared record.'],
    ['Can we see a demo first?', 'Of course. Book a short walkthrough tailored to your organization, with no obligation.'],
  ]],
];
export const ALL_FAQ = FAQ_GROUPS.flatMap(([, qs]) => qs);
