'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
  UserIcon,
  PackageIcon,
  HeartIcon,
} from 'lucide-react';
import { Button } from '@jcraft/ui';
import { Input } from '@jcraft/ui';
import { cn } from '@jcraft/utils';

const Header = () => {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch wishlist items
  useEffect(() => {
    if (isSignedIn) {
      // In a real implementation, we would fetch from Convex
      // For now, we'll set an empty array or mock data
      setWishlistItems([]);
    }
  }, [isSignedIn]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Deals', href: '/deals' },
  ] as const;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white border-b transition-all duration-300',
        isScrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with quick links */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm bg-gray-50 border-b">
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="flex items-center">
                <span>Need Help?</span>
              </span>
            </Link>
            <Link
              href="/orders"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="/orders"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Returns & Refunds
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/wishlist"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
            >
              <HeartIcon className="h-4 w-4 mr-1" />
              Wishlist
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-2"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              JCraft
            </Link>
          </div>

          {/* Logo - hidden on mobile */}
          <div className="hidden md:block">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              JCraft
            </Link>
          </div>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex md:ml-10">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-blue-600',
                      pathname === item.href
                        ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                        : 'text-gray-700'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search bar */}
          <div className="hidden lg:flex-1 lg:max-w-2xl lg:mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search products, brands and categories..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* User actions */}
          <div className="hidden md:flex items-center space-x-6">
            {isSignedIn ? (
              <>
                <Link
                  href="/cart"
                  className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                    3
                  </span>
                </Link>
                <Link
                  href="/wishlist"
                  className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <HeartIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {wishlistItems.length}
                  </span>
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 group"
                >
                  <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <UserIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors hidden lg:block">
                    {user?.firstName || user?.username || 'Account'}
                  </span>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href={'/sign-in' as any}>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href={'/sign-up' as any}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile user actions */}
          <div className="md:hidden flex items-center space-x-3">
            <Link href="/cart" className="relative p-2 text-gray-700">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                3
              </span>
            </Link>
            {isSignedIn ? (
              <Link href="/dashboard" className="p-2 text-gray-700">
                <UserIcon className="h-6 w-6" />
              </Link>
            ) : (
              <Link href={'/sign-in' as any}>
                <Button size="sm" variant="outline">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile search bar - only visible on mobile */}
        <div className="lg:hidden py-3">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </form>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <ul className="space-y-4">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
                    className={cn(
                      'block py-2 text-base font-medium',
                      pathname === item.href
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-600'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/wishlist"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PackageIcon className="h-5 w-5 mr-2" />
                  Your Orders
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
