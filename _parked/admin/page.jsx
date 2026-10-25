import Link from 'next/link';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { auth, signOut, isSuper } from '../../auth';
import { db } from '../../lib/db';
import { Wordmark } from '../../components/ui';

export const metadata = { title: 'Admin | OneRxiv', robots: { index: false } };
export const dynamic = 'force-dynamic';

const str = (v) => String(v || '').trim().slice(0, 120) || null;
const kind = (v) => (v === 'COMPANY' ? 'COMPANY' : 'INDIVIDUAL');
const box = 'w-full rounded-lg border border-blush-300 bg-white px-3 py-2 text-sm disabled:bg-blush-50 disabled:text-slate2';
const btn = 'rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-[#a90d26]';

// ---- every action re-checks permissions on the server ----
async function actor() {
  const s = await auth();
  if (!s?.user || !['ADMIN', 'SUPER_ADMIN'].includes(s.user.role)) throw new Error('Forbidden');
  return s.user;
}
const canManage = (me, t) => !isSuper(t.email) && (me.role === 'SUPER_ADMIN' || t.role === 'USER');

async function createUser(fd) {
  'use server';
  const me = await actor();
  const email = String(fd.get('email') || '').trim().toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(email)) return;
  let role = String(fd.get('role'));
  if (me.role !== 'SUPER_ADMIN' || !['USER', 'ADMIN'].includes(role)) role = 'USER';
  await db.user.upsert({
    where: { email }, update: {},
    create: { email, name: str(fd.get('name')), accountType: kind(fd.get('accountType')), companyName: str(fd.get('companyName')), role },
  });
  revalidatePath('/admin');
}

async function updateUser(fd) {
  'use server';
  const me = await actor();
  const t = await db.user.findUnique({ where: { id: String(fd.get('id')) } });
  if (!t || !canManage(me, t)) return;
  let role = String(fd.get('role'));
  if (me.role !== 'SUPER_ADMIN' || !['USER', 'ADMIN'].includes(role)) role = t.role;
  const active = fd.get('active') === 'on';
  await db.user.update({ where: { id: t.id }, data: { role, active, accountType: kind(fd.get('accountType')), companyName: str(fd.get('companyName')) } });
  if (!active) await db.session.deleteMany({ where: { userId: t.id } }); // signs them out immediately
  revalidatePath('/admin');
}

async function deleteUser(fd) {
  'use server';
  const me = await actor();
  const t = await db.user.findUnique({ where: { id: String(fd.get('id')) } });
  if (!t || t.id === me.id || !canManage(me, t)) return;
  await db.user.delete({ where: { id: t.id } });
  revalidatePath('/admin');
}

export default async function Admin() {
  const s = await auth();
  if (!s?.user) redirect('/login');
  const me = s.user;
  const out = async () => { 'use server'; await signOut({ redirectTo: '/' }); };
  const isAdmin = ['ADMIN', 'SUPER_ADMIN'].includes(me.role);

  const Top = (
    <header className="border-b border-blush-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link href="/" aria-label="OneRxiv home"><Wordmark /></Link>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-slate2">{me.email} · <b className="font-medium text-ink">{me.role.replace('_', ' ')}</b></span>
          <form action={out}><button className="rounded-full border border-ink/20 px-4 py-2 hover:border-brand hover:text-brand">Sign out</button></form>
        </div>
      </div>
    </header>
  );

  if (!isAdmin) return (
    <>{Top}<main className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold">You’re signed in</h1>
      <p className="mt-3 text-slate2">Your {me.accountType === 'COMPANY' ? 'company' : 'individual'} account is active. It doesn’t have admin access.</p>
      <Link href="/" className="mt-6 inline-block font-medium text-brand hover:underline">Back to the website</Link>
    </main></>
  );

  const users = await db.user.findMany({ orderBy: { createdAt: 'desc' } });
  const stat = [['Users', users.length], ['Companies', users.filter((u) => u.accountType === 'COMPANY').length], ['Individuals', users.filter((u) => u.accountType === 'INDIVIDUAL').length], ['Admins', users.filter((u) => u.role !== 'USER' || isSuper(u.email)).length]];

  return (
    <>
      {Top}
      <main className="mx-auto max-w-6xl px-5 py-10">
        <h1 className="font-display text-4xl font-semibold">User management</h1>
        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stat.map(([l, v]) => (<div key={l} className="rounded-2xl bg-blush-50 p-4"><dt className="text-sm text-slate2">{l}</dt><dd className="font-display text-3xl font-semibold text-brand">{v}</dd></div>))}
        </dl>

        <section className="mt-8 rounded-3xl border border-blush-200 p-6">
          <h2 className="text-lg font-semibold">Add a user</h2>
          <p className="text-sm text-slate2">They can sign in with Google once added.</p>
          <form action={createUser} className="mt-4 grid items-end gap-3 md:grid-cols-6">
            <input name="email" type="email" required placeholder="Google email *" className={`${box} md:col-span-2`} />
            <input name="name" placeholder="Name" className={box} />
            <select name="accountType" className={box}><option value="INDIVIDUAL">Individual</option><option value="COMPANY">Company</option></select>
            <input name="companyName" placeholder="Company name" className={box} />
            {me.role === 'SUPER_ADMIN'
              ? <select name="role" className={box}><option value="USER">User</option><option value="ADMIN">Admin</option></select>
              : <input type="hidden" name="role" value="USER" />}
            <button className={`${btn} md:col-span-6 md:justify-self-start`}>Add user</button>
          </form>
        </section>

        <ul className="mt-8 space-y-3">
          {users.map((u) => {
            const sup = isSuper(u.email), locked = !canManage(me, u);
            return (
              <li key={u.id} className="rounded-2xl border border-blush-200 bg-white p-4">
                <form action={updateUser} className="grid items-center gap-3 md:grid-cols-6">
                  <input type="hidden" name="id" value={u.id} />
                  <div className="md:col-span-2">
                    <p className="font-medium">{u.name || '—'} {sup && <span className="ml-1 rounded-full bg-brand px-2 py-0.5 text-xs text-white">Super admin</span>}</p>
                    <p className="break-all text-sm text-slate2">{u.email}</p>
                  </div>
                  <select name="accountType" defaultValue={u.accountType} disabled={locked} className={box}><option value="INDIVIDUAL">Individual</option><option value="COMPANY">Company</option></select>
                  <input name="companyName" defaultValue={u.companyName || ''} placeholder="Company name" disabled={locked} className={box} />
                  <select name="role" defaultValue={sup ? 'SUPER_ADMIN' : u.role} disabled={locked || me.role !== 'SUPER_ADMIN'} className={box}>
                    {sup && <option value="SUPER_ADMIN">Super admin</option>}<option value="USER">User</option><option value="ADMIN">Admin</option>
                  </select>
                  <div className="flex items-center justify-between gap-3">
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="active" defaultChecked={u.active} disabled={locked} />Active</label>
                    {!locked && <button className="rounded-full bg-ink px-4 py-2 text-sm text-white">Save</button>}
                  </div>
                </form>
                {!locked && u.id !== me.id && (
                  <details className="mt-2 text-sm">
                    <summary className="cursor-pointer text-slate2 hover:text-brand">Delete user</summary>
                    <form action={deleteUser} className="mt-2"><input type="hidden" name="id" value={u.id} /><button className="rounded-full border border-brand px-4 py-1.5 text-brand hover:bg-brand hover:text-white">Yes, delete {u.email}</button></form>
                  </details>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
