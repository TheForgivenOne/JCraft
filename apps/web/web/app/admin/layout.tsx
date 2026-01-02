'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';
import { Button } from '@jcraft/ui/button';
import { User, Package, ShoppingCart, BarChart3, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"
              >
                <User className="h-5 w-5" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/products"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"
              >
                <Package className="h-5 w-5" />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/orders"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/analytics"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/settings"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="md:ml-64 p-6 pt-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
