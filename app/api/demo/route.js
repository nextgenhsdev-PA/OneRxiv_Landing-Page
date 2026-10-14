// Replace with your CRM call (HubSpot / Salesforce). Never log or store PHI.
export async function POST(req) {
  const data = Object.fromEntries(await req.formData());
  console.log('demo request', { email: data.email, size: data.size });
  return Response.redirect(new URL('/?thanks=1#contact', req.url), 303);
}
