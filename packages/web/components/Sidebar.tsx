'use client';

import { cn } from '@jcraft/utils';
import {
  HomeIcon,
  ShoppingCartIcon,
  PackageIcon,
  UsersIcon,
  SettingsIcon,
  StoreIcon,
  MenuIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@jcraft/ui';
import { useState } from 'react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: {
    name: string;
    href: React.ComponentProps<typeof Link>['href'];
    icon: React.ElementType;
  }[] = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Products', href: '/products', icon: StoreIcon },
    { name: 'Orders', href: '/orders', icon: ShoppingCartIcon },
    { name: 'Projects', href: '/projects', icon: PackageIcon },
    // { name: 'Customers', href: '/customers', icon: UsersIcon },
    // { name: 'Settings', href: '/settings', icon: SettingsIcon },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden p-4 border-b">
        <Button
          variant="outline"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full justify-between"
        >
          <span>Menu</span>
          <MenuIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Sidebar - hidden on mobile by default, shown when menu is open */}
      <div
        className={cn(
          'fixed md:static inset-y-0 z-50 w-64 bg-white border-r h-full transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen
            ? 'translate-x-0'
            : '-translate-x-full md:translate-x-0',
          className
        )}
      >
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-gray-900">JCraft</h1>
        </div>
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-1">
            {navItems.map(item => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={cn(
                        'w-full justify-start',
                        isActive && 'bg-gray-100 text-gray-900'
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} JCraft. All rights reserved.
          </p>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
