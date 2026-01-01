'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isSignedIn && pathname.startsWith('/dashboard')) {
      router.push('/');
    }
  }, [isSignedIn, router, pathname]);

  if (!isSignedIn) {
    return null; // Redirecting to home
  }

  return <>{children}</>;
}
