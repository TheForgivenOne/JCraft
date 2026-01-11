'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Mock authentication state since we're not using Clerk anymore
  const isSignedIn = false;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 dark:border-stone-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">carpenter</span>
          <Link href="/" className="text-xl font-bold tracking-tight text-deep-oak dark:text-stone-100">
            JCraft
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {!isSignedIn ? (
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">
                Get a Quote
              </button>
            </Link>
          ) : (
            <Link href="/dashboard" className="hidden md:block">
              <div className="size-10 rounded-full bg-gray-200 border-2 border-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">A</span>
              </div>
            </Link>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-deep-oak dark:text-stone-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark py-4 px-6 border-t border-stone-200 dark:border-stone-800">
          <nav className="flex flex-col gap-4">
            <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            {!isSignedIn ? (
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            ) : (
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
            )}
          </nav>
        </div>
      )}
    </nav>
  );
}