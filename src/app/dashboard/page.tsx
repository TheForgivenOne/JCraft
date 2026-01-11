'use client';

import { useUser } from '@clerk/nextjs';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function DashboardPage() {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Access denied. Please sign in.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Welcome, {user?.firstName || user?.username || 'User'}!</h2>
            <p className="text-gray-600">
              Manage your profile, portfolio items, and customer inquiries from this dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Portfolio Items</h3>
              <p className="text-3xl font-bold text-blue-600">12</p>
              <p className="text-gray-500 mt-2">Total items</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">New Inquiries</h3>
              <p className="text-3xl font-bold text-green-600">3</p>
              <p className="text-gray-500 mt-2">Pending responses</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-purple-600">$2,450</p>
              <p className="text-gray-500 mt-2">This month</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}