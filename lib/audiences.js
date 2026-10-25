// Content for /hospitals, /insurers and /practitioners. Confirm the details with your product team.
export const AUDIENCES = [
  {
    slug: 'hospitals', title: 'Hospitals', menu: 'One record across every department',
    headline: 'One record across every department',
    intro: 'Connect wards, clinics, labs and billing so every team sees the same patient, the same way.',
    challenges: [['Information in silos', 'Each department keeps its own version of the patient.'], ['Heavy documentation', 'Clinicians spend too much time on notes and forms.'], ['Slow handoffs', 'Referrals, results and discharge details are chased by phone.']],
    helps: ['A shared patient record for every department', 'Ambient AI that drafts notes for clinician review', 'Scheduling, billing and reporting in one workflow', 'Telemedicine alongside in-person care'],
    modules: ['EHR', 'Scheduling', 'Billing', 'Analytics', 'Telemedicine', 'AI Charting'],
  },
  {
    slug: 'insurers', title: 'Insurance companies', menu: 'Cleaner data, faster decisions',
    headline: 'Cleaner data, faster decisions',
    intro: 'Work from structured information that comes straight from the provider’s record.',
    challenges: [['Manual checks', 'Eligibility and approvals depend on calls, faxes and follow-up.'], ['Inconsistent data', 'Every provider sends information in a different shape.'], ['Slow review', 'Missing documentation delays decisions for everyone.']],
    helps: ['Structured clinical and claims data from a shared record', 'Eligibility and authorization workflows', 'Clear audit trails for how data is used', 'Reporting across providers and plans'],
    modules: ['Eligibility', 'Claims Data', 'Prior Auth', 'Reporting', 'Audit Trail', 'Exchange'],
  },
  {
    slug: 'practitioners', title: 'Private practitioners', menu: 'Your whole practice in one place',
    headline: 'Your whole practice in one place',
    intro: 'Chart faster, bill cleanly and stay connected with your patients, without juggling tools.',
    challenges: [['Evenings spent charting', 'Notes pile up after the last patient leaves.'], ['Claims that bounce', 'Small documentation gaps cause rework and delays.'], ['Hard-to-reach patients', 'Reminders and routine questions take up the front desk.']],
    helps: ['Ambient AI notes you review and sign', 'Coding assist that flags gaps before claims go out', 'Reminders and an always-on assistant for patients', 'One simple system for scheduling, billing and records'],
    modules: ['EHR', 'AI Charting', 'Engagement', 'Billing', 'Telemedicine', 'Agent'],
  },
];
