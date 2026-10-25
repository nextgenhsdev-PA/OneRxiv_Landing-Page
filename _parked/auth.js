import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './lib/db';

const list = (v) => (v || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
// Super admins come from the SUPER_ADMIN_EMAILS setting, never from the database or the screen.
export const isSuper = (email) => list(process.env.SUPER_ADMIN_EMAILS).includes((email || '').toLowerCase());

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'database' },
  providers: [Google({ allowDangerousEmailAccountLinking: true })], // safe: Google verifies emails
  pages: { signIn: '/login', error: '/login' },
  callbacks: {
    async signIn({ user }) {
      const email = user.email?.toLowerCase();
      if (!email) return false;
      if (isSuper(email)) return true;
      const existing = await db.user.findUnique({ where: { email } });
      if (existing) return existing.active;                 // invited by an admin
      return process.env.ALLOW_PUBLIC_SIGNUP === 'true';    // otherwise invite-only
    },
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.role = isSuper(user.email) ? 'SUPER_ADMIN' : user.role;
      session.user.accountType = user.accountType;
      return session;
    },
  },
});
