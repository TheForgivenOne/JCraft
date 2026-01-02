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
import { PlusIcon, UserIcon, MailIcon, CalendarIcon } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

export default function CustomersPage() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all users
  const users = useQuery(api.users.getAll);

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
        <p>Loading customers...</p>
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
            <h1 className="text-xl font-semibold text-gray-900">Customers</h1>
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
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Management
            </h2>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Customer
            </Button>
          </div>

          {users ? (
            <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Join Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Orders
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map(customer => (
                    <tr key={customer._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <div className="flex items-center">
                          <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                          {customer.name || 'N/A'}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MailIcon className="h-4 w-4 text-gray-400 mr-1" />
                          {customer.email}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                          {new Date(customer.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {/* TODO: Count orders for this customer */}
                        <span className="text-gray-900">0</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No customers yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Your customer list will appear here once users sign up.
                </p>
                <Button>
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Import Customers
                </Button>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}
