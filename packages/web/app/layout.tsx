import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ConvexClientProvider from '@/components/ConvexClientProvider';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JCraft - E-commerce Store',
  description:
    'A modern e-commerce platform built with Next.js, Vercel, Convex, and Clerk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <ConvexClientProvider>{children}</ConvexClientProvider>
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
