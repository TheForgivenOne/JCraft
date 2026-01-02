import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Button } from '@jcraft/ui';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@jcraft/ui';
import { UserButton } from '@clerk/nextjs';
import { api } from '../../convex/_generated/api';
import { ConvexReactClient } from 'convex/react';
import { useQuery } from 'convex/react';
import {
  PlusIcon,
  ShoppingCartIcon,
  PackageIcon,
  TrendingUpIcon,
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

// Server component that fetches user data server-side
export default async function DashboardPageServer() {
  // Get the current user server-side
  const user = await currentUser();

  // If user is not signed in, redirect to home
  if (!user) {
    redirect('/');
  }

  // Mock stats for the dashboard
  const stats = [
    {
      name: 'Total Orders',
      value: 0, // This would come from a server action
      icon: ShoppingCartIcon,
    },
    { name: 'Total Spent', value: '$0', icon: PackageIcon },
    { name: 'Favorite Category', value: 'N/A', icon: TrendingUpIcon },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 md:ml-0">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user.firstName || user.username || 'User'}!
              </span>
              <UserButton />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          {stat.name}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </div>

          <Card>
            <CardContent className="py-12 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No orders yet
              </h3>
              <p className="text-gray-500 mb-4">
                Start shopping to see your orders here.
              </p>
              <Button onClick={() => {}}>Browse Products</Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
