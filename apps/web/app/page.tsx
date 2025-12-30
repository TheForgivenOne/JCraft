import { Button } from '@jcraft/ui';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@jcraft/ui';
import { UserButton } from '@clerk/nextjs';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function HomePage() {
  return (
    <ConvexProvider client={convex}>
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to JCraft</CardTitle>
            <CardDescription>
              A modern application built with Next.js, Vercel, Convex, and Clerk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p>Get started by editing this page</p>
              <UserButton />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>
      </main>
    </ConvexProvider>
  );
}