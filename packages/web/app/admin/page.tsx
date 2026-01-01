'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';
import { Button } from '@jcraft/ui/button';
import { User, Package, ShoppingCart, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Admin Dashboard</CardTitle>
          <CardDescription>Manage your application from here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/admin/users">
              <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Users</CardTitle>
                      <p className="text-sm text-gray-500">Manage users</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/admin/products">
              <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Package className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Products</CardTitle>
                      <p className="text-sm text-gray-500">Manage products</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/admin/orders">
              <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <ShoppingCart className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Orders</CardTitle>
                      <p className="text-sm text-gray-500">View orders</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/admin/analytics">
              <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <BarChart3 className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Analytics</CardTitle>
                      <p className="text-sm text-gray-500">View analytics</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/admin/products/new">Add New Product</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/users">Manage Users</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/settings">Admin Settings</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
