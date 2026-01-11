"use client";

import Link from "next/link";

interface NavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isSignedIn: boolean;
}

export default function Nav({
  mobileMenuOpen,
  setMobileMenuOpen,
  isSignedIn,
}: NavProps) {
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <Link
          href="/portfolio"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Portfolio
        </Link>
        <Link
          href="/shop"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark py-4 px-6 border-t border-stone-200 dark:border-stone-800">
          <nav className="flex flex-col gap-4">
            <Link
              href="/portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            {!isSignedIn ? (
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Get a Quote
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
