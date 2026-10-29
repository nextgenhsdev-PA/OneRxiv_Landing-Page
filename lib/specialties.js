// Content for /specialties/[slug]. Confirm the details with your clinical team.
export const SPECIALTIES = [
  {
    slug: 'primary-care', title: 'Primary care', menu: 'Continuity of care, visit after visit',
    headline: 'Continuity of care, visit after visit',
    intro: 'One record that follows the patient through preventive visits, chronic care and referrals.',
    challenges: [['High patient volume', 'Short visits leave little time for documentation.'], ['Notes after hours', 'Charts pile up once the last patient leaves.'], ['Coordinating referrals', 'Results and letters travel by phone and paper.']],
    helps: ['Templates for annual physicals and routine follow-ups', 'Ambient AI notes you review and sign', 'Referrals and results kept in the same chart', 'Reminders for preventive care and follow-ups'],
    modules: ['EHR', 'AI Charting', 'Scheduling', 'Engagement', 'Billing', 'Telemedicine'],
  },
  {
    slug: 'behavioral-health', title: 'Behavioral health', menu: 'Notes that fit the conversation',
    headline: 'Notes that fit the conversation',
    intro: 'Documentation built for evaluations, therapy sessions and medication follow-ups, with sensitive records handled with care.',
    challenges: [['Long, detailed notes', 'Sessions are rich and notes take time to write.'], ['Sensitive information', 'Records need tighter control over who can see them.'], ['Many sessions a day', 'Back-to-back appointments leave little room to write up.']],
    helps: ['Templates for intake, therapy and medication visits', 'Ambient AI notes you review and approve', 'Role-based access to sensitive records', 'Telemedicine sessions in the same record'],
    modules: ['EHR', 'AI Charting', 'Telemedicine', 'Scheduling', 'Billing', 'Engagement'],
  },
  {
    slug: 'pain-and-spine', title: 'Pain and spine', menu: 'Procedures and follow-ups in one flow',
    headline: 'Procedures and follow-ups in one flow',
    intro: 'Consultations, procedure notes, long-term follow-ups and approvals kept together in one chart.',
    challenges: [['Heavy procedure documentation', 'Every procedure needs a detailed, accurate note.'], ['Approvals slowing care', 'Prior authorizations can hold up treatment.'], ['Long follow-up cycles', 'Chronic patients need consistent tracking over time.']],
    helps: ['Templates for consultations, procedures and follow-ups', 'Ambient AI drafting for clinician review', 'Support for prior authorization steps', 'Long-term history in one view'],
    modules: ['EHR', 'AI Charting', 'Prior Auth', 'Billing', 'Scheduling', 'Reporting'],
  },
];
