'use client';

import { useUser } from '@clerk/nextjs';
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
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { api } from '../../convex/_generated/api';
import { useQuery } from 'convex/react';
import { PlusIcon, PackageIcon, TruckIcon, CheckIcon } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

export default function OrdersPage() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user's orders
  const orders = useQuery(api.orders.getForUser);

  // If user is not signed in, redirect to home
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [isSignedIn, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // Redirecting to home
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Orders</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user?.firstName || user?.username || 'User'}!
              </span>
              <UserButton />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900">Your Orders</h2>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </div>

          {orders ? (
            <div className="space-y-4">
              {orders.map(order => (
                <Card key={order._id}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle>Order #{order._id}</CardTitle>
                        <CardDescription>
                          {new Date(order.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${
                          order.status === 'delivered'
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'processing'
                              ? 'bg-yellow-100 text-yellow-800'
                              : order.status === 'shipped'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <PackageIcon className="mr-1 h-4 w-4" />
                      <span>Total: ${(order.total / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      {order.status === 'delivered' ? (
                        <>
                          <CheckIcon className="mr-1 h-4 w-4 text-green-500" />
                          <span>Delivered</span>
                        </>
                      ) : order.status === 'shipped' ? (
                        <>
                          <TruckIcon className="mr-1 h-4 w-4 text-blue-500" />
                          <span>Shipped</span>
                        </>
                      ) : (
                        <>
                          <PackageIcon className="mr-1 h-4 w-4" />
                          <span>Processing</span>
                        </>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between gap-2">
                    <Button variant="outline" className="w-full sm:w-auto">
                      View Details
                    </Button>
                    <Button className="w-full sm:w-auto">Track Order</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No orders yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Start shopping to see your orders here.
                </p>
                <Button onClick={() => router.push('/products')}>
                  Browse Products
                </Button>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}
