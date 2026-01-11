"use client";

import { useState } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/UI/MaterialIcon";
import Nav from "@/components/Header/Nav";
import Button from "@/components/UI/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Mock authentication state since we're not using Clerk anymore
  const isSignedIn = false;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 dark:border-stone-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MaterialIcon icon="carpenter" className="text-primary text-3xl" />
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-deep-oak dark:text-stone-100"
          >
            JCraft
          </Link>
        </div>

        <Nav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isSignedIn={isSignedIn}
        />

        <div className="flex items-center gap-4">
          {!isSignedIn ? (
            <Link href="/contact">
              <Button variant="primary" size="md">
                Get a Quote
              </Button>
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
            <MaterialIcon icon="menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}
