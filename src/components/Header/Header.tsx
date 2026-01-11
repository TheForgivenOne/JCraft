'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          JCraft
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>

        {/* Auth and User Menu */}
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 hidden md:block">
                Dashboard
              </Link>
              <UserButton />
            </>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Sign In
              </button>
            </SignInButton>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            {isSignedIn && (
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}