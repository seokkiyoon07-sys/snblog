import 'server-only';

import { getServerSession, type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { redirect } from 'next/navigation';

function getAdminEmailSet(): Set<string> {
  return new Set(
    (process.env.ADMIN_EMAILS ?? '')
      .split(',')
      .map(email => email.trim().toLowerCase())
      .filter(Boolean)
  );
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return getAdminEmailSet().has(email.trim().toLowerCase());
}

export function isAdminAuthConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.NEXTAUTH_SECRET &&
      getAdminEmailSet().size > 0
  );
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? 'missing-google-client-id',
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ?? 'missing-google-client-secret',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 8 * 60 * 60,
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    async signIn({ account, profile, user }) {
      const googleProfile = profile as { email_verified?: boolean } | undefined;

      return Boolean(
        isAdminAuthConfigured() &&
          account?.provider === 'google' &&
          googleProfile?.email_verified === true &&
          isAdminEmail(user.email)
      );
    },
  },
};

export async function getAdminSession() {
  const session = await getServerSession(authOptions);
  return session?.user?.email && isAdminEmail(session.user.email)
    ? session
    : null;
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login?callbackUrl=/admin/analytics');
  }
  return session;
}
