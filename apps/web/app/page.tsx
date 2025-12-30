'use client';

import { useUser } from '@clerk/nextjs';
import { useStoreUserEffect } from '@/hooks/useStoreUserEffect';
import { Button } from '@jcraft/ui';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@jcraft/ui';
import { UserButton } from '@clerk/nextjs';
import { SignInButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { isSignedIn } = useUser();
  const { isAuthenticated } = useStoreUserEffect();
  const router = useRouter();

  // If user is authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null; // Redirecting to dashboard
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to JCraft</CardTitle>
          <CardDescription>
            Your one-stop shop for premium crafted goods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <p>Get started by signing in</p>
            <UserButton />
          </div>
          {!isSignedIn ? (
            <div className="mt-4">
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </div>
          ) : (
            <p className="text-sm text-gray-500 mt-2">
              Signed in successfully!
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Browse Products</Button>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
