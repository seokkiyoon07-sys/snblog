'use server';
import { revalidateTag } from 'next/cache';
import { requireAdmin } from '@/lib/auth/admin-auth';

export async function refreshAnalytics() {
  await requireAdmin();
  revalidateTag('admin-analytics');
}
