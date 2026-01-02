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
import { useMutation } from 'convex/react';
import {
  SettingsIcon,
  CreditCardIcon,
  ShieldIcon,
  BellIcon,
  UserIcon,
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

export default function SettingsPage() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

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
        <p>Loading settings...</p>
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
            <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user?.firstName || user?.username || 'User'}!
              </span>
              <UserButton />
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Account Settings
            </h2>

            <div className="space-y-6">
              {/* Profile Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserIcon className="mr-2 h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your profile information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={user?.firstName || ''}
                        disabled
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={user?.lastName || ''}
                        disabled
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={
                          user?.emailAddresses?.[0]?.emailAddress || ''
                        }
                        disabled
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button className="ml-2">Save Changes</Button>
                </CardFooter>
              </Card>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BellIcon className="mr-2 h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Manage your notification settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Order Updates
                        </p>
                        <p className="text-sm text-gray-500">
                          Receive notifications about your orders
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Promotional Emails
                        </p>
                        <p className="text-sm text-gray-500">
                          Receive marketing and promotional emails
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Restock Notifications
                        </p>
                        <p className="text-sm text-gray-500">
                          Get notified when products are back in stock
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldIcon className="mr-2 h-5 w-5" />
                    Security
                  </CardTitle>
                  <CardDescription>
                    Manage your account security
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        Password
                      </h3>
                      <Button variant="outline">Change Password</Button>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        Two-Factor Authentication
                      </h3>
                      <Button variant="outline">Set up 2FA</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
