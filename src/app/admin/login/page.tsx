import { redirect } from 'next/navigation';
import GoogleSignInButton from './GoogleSignInButton';
import { getAdminSession, isAdminAuthConfigured } from '@/lib/auth/admin-auth';

interface LoginPageProps {
  searchParams: Promise<{
    callbackUrl?: string;
    error?: string;
  }>;
}

function safeCallbackUrl(value: string | undefined): string {
  return value?.startsWith('/admin/') ? value : '/admin/analytics';
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const session = await getAdminSession();
  if (session) redirect('/admin/analytics');

  const params = await searchParams;
  const callbackUrl = safeCallbackUrl(params.callbackUrl);
  const isConfigured = isAdminAuthConfigured();

  return (
    <section className="mx-auto max-w-md py-12 sm:py-20">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <div className="mb-7">
          <p className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            SN Academy Blog
          </p>
          <h1 className="text-2xl font-bold text-gray-950 dark:text-white">
            관리자 로그인
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            허용된 Google 계정만 방문 통계와 게시물 성과를 확인할 수 있습니다.
          </p>
        </div>

        {params.error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
            이 계정은 관리자 접근 권한이 없습니다.
          </div>
        )}

        {!isConfigured && (
          <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
            관리자 인증 환경변수가 아직 설정되지 않았습니다. 배포 환경의 Google
            OAuth 및 관리자 이메일 설정을 확인해 주세요.
          </div>
        )}

        <GoogleSignInButton
          callbackUrl={callbackUrl}
          disabled={!isConfigured}
        />
      </div>
    </section>
  );
}
