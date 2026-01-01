'use client';

import { ReactNode } from 'react';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { useAuth } from '@clerk/nextjs';

// Check if Convex URL is available and not empty
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

// Only initialize Convex if the URL is available and not empty
const convex =
  convexUrl && convexUrl.trim() !== ''
    ? new ConvexReactClient(convexUrl)
    : null;

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  // If Convex is not configured, render children without Convex provider
  if (!convex || !convexUrl || convexUrl.trim() === '') {
    return <>{children}</>;
  }

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
