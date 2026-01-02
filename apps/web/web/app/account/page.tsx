'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@jcraft/ui';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@jcraft/ui';
import { Badge } from '@jcraft/ui';
import { Input } from '@jcraft/ui';
import { Label } from '@jcraft/ui';
import {
  UserIcon,
  PackageIcon,
  MapPinIcon,
  CreditCardIcon,
  SettingsIcon,
  EditIcon,
  CalendarIcon,
  TruckIcon,
  CheckCircleIcon,
  StarIcon,
} from 'lucide-react';
import { api } from '../../convex/_generated/api';
import { useQuery } from 'convex/react';
import Sidebar from '../../components/Sidebar';

// Define types
type Order = {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number; // in cents
  items: number;
};

type Address = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
};

type PaymentMethod = {
  id: string;
  type: 'credit' | 'debit' | 'paypal';
  lastFour: string;
  expiry: string;
  isDefault: boolean;
};

// Mock data
const MOCK_ORDERS: Order[] = [
  {
    id: 'ord-1',
    date: '2023-10-15',
    status: 'delivered',
    total: 12999,
    items: 2,
  },
  {
    id: 'ord-2',
    date: '2023-09-22',
    status: 'delivered',
    total: 8999,
    items: 1,
  },
  {
    id: 'ord-3',
    date: '2023-08-30',
    status: 'shipped',
    total: 24999,
    items: 3,
  },
  {
    id: 'ord-4',
    date: '2023-07-10',
    status: 'cancelled',
    total: 5999,
    items: 1,
  },
];

const MOCK_ADDRESSES: Address[] = [
  {
    id: 'addr-1',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    isDefault: true,
  },
  {
    id: 'addr-2',
    firstName: 'John',
    lastName: 'Doe',
    address: '456 Oak Ave',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90210',
    country: 'USA',
    isDefault: false,
  },
];

const MOCK_PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'pay-1',
    type: 'credit',
    lastFour: '4242',
    expiry: '12/25',
    isDefault: true,
  },
  {
    id: 'pay-2',
    type: 'debit',
    lastFour: '1234',
    expiry: '08/24',
    isDefault: false,
  },
];

export default function AccountPage() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    'profile' | 'orders' | 'addresses' | 'payments' | 'settings'
  >('profile');
  const [orders, setOrders] = useState<Order[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [profile, setProfile] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.emailAddresses[0]?.emailAddress || '',
    phone: '',
    dateOfBirth: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch user's orders from Convex
  const userOrders = useQuery(api.orders.getForUser);

  // Initialize data
  useEffect(() => {
    if (userOrders) {
      // In a real app, we would use the actual orders from Convex
      setOrders(MOCK_ORDERS);
    } else {
      setOrders(MOCK_ORDERS);
    }

    setAddresses(MOCK_ADDRESSES);
    setPaymentMethods(MOCK_PAYMENT_METHODS);
    setLoading(false);
  }, [userOrders]);

  // If user is not signed in, redirect to home
  if (!isSignedIn) {
    router.push('/');
    return null;
  }

  // Handle profile update
  const handleProfileUpdate = () => {
    // In a real app, this would update the user profile in Convex
    setIsEditing(false);
  };

  // Handle address deletion
  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  // Handle payment method deletion
  const handleDeletePayment = (id: string) => {
    setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));
  };

  // Format order status
  const formatOrderStatus = (status: string) => {
    switch (status) {
      case 'pending':
        return { text: 'Pending', color: 'bg-yellow-100 text-yellow-800' };
      case 'processing':
        return { text: 'Processing', color: 'bg-blue-100 text-blue-800' };
      case 'shipped':
        return { text: 'Shipped', color: 'bg-indigo-100 text-indigo-800' };
      case 'delivered':
        return { text: 'Delivered', color: 'bg-green-100 text-green-800' };
      case 'cancelled':
        return { text: 'Cancelled', color: 'bg-red-100 text-red-800' };
      default:
        return { text: status, color: 'bg-gray-100 text-gray-800' };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading account...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Account Dashboard
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <button
                      className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                        activeTab === 'profile'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('profile')}
                    >
                      <UserIcon className="h-5 w-5 mr-3" />
                      Profile
                    </button>
                    <button
                      className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                        activeTab === 'orders'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('orders')}
                    >
                      <PackageIcon className="h-5 w-5 mr-3" />
                      Order History
                    </button>
                    <button
                      className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                        activeTab === 'addresses'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('addresses')}
                    >
                      <MapPinIcon className="h-5 w-5 mr-3" />
                      Addresses
                    </button>
                    <button
                      className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                        activeTab === 'payments'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('payments')}
                    >
                      <CreditCardIcon className="h-5 w-5 mr-3" />
                      Payment Methods
                    </button>
                    <button
                      className={`w-full flex items-center px-4 py-2 text-left rounded-md ${
                        activeTab === 'settings'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab('settings')}
                    >
                      <SettingsIcon className="h-5 w-5 mr-3" />
                      Settings
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <UserIcon className="h-5 w-5 mr-2" />
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={profile.firstName}
                              onChange={e =>
                                setProfile({
                                  ...profile,
                                  firstName: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={profile.lastName}
                              onChange={e =>
                                setProfile({
                                  ...profile,
                                  lastName: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={e =>
                              setProfile({ ...profile, email: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={profile.phone}
                            onChange={e =>
                              setProfile({ ...profile, phone: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="dateOfBirth">Date of Birth</Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={profile.dateOfBirth}
                            onChange={e =>
                              setProfile({
                                ...profile,
                                dateOfBirth: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">First Name</p>
                            <p className="font-medium">{profile.firstName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Last Name</p>
                            <p className="font-medium">{profile.lastName}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{profile.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">
                            {profile.phone || 'Not provided'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date of Birth</p>
                          <p className="font-medium">
                            {profile.dateOfBirth || 'Not provided'}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    {isEditing ? (
                      <div className="flex space-x-3">
                        <Button onClick={handleProfileUpdate}>
                          Save Changes
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsEditing(false);
                            // Reset to original values if needed
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button onClick={() => setIsEditing(true)}>
                        <EditIcon className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PackageIcon className="h-5 w-5 mr-2" />
                      Order History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {orders.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Order
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Items
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Total
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {orders.map(order => {
                              const status = formatOrderStatus(order.status);
                              return (
                                <tr key={order.id}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    #{order.id}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center">
                                      <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                                      {new Date(
                                        order.date
                                      ).toLocaleDateString()}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <Badge className={status.color}>
                                      {status.text}
                                    </Badge>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.items}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    ${(order.total / 100).toFixed(2)}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => router.push('/orders')}
                                    >
                                      View Details
                                    </Button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <PackageIcon className="h-12 w-12 text-gray-300 mx-auto" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                          No orders yet
                        </h3>
                        <p className="mt-1 text-gray-500">
                          You haven&rsquo;t placed any orders yet. Start
                          shopping to see your order history here.
                        </p>
                        <div className="mt-6">
                          <Button onClick={() => router.push('/products')}>
                            Start Shopping
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      Saved Addresses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {addresses.map(address => (
                        <Card key={address.id} className="relative">
                          {address.isDefault && (
                            <Badge className="absolute top-2 right-2">
                              Default
                            </Badge>
                          )}
                          <CardContent className="pt-6">
                            <p className="font-medium">
                              {address.firstName} {address.lastName}
                            </p>
                            <p>{address.address}</p>
                            <p>
                              {address.city}, {address.state} {address.zipCode}
                            </p>
                            <p>{address.country}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button
                              variant={
                                address.isDefault ? 'default' : 'outline'
                              }
                              size="sm"
                              disabled={address.isDefault}
                            >
                              Set as Default
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteAddress(address.id)}
                              disabled={address.isDefault}
                            >
                              Remove
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button
                        onClick={() =>
                          alert('Add new address functionality would go here')
                        }
                      >
                        Add New Address
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Payments Tab */}
              {activeTab === 'payments' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCardIcon className="h-5 w-5 mr-2" />
                      Payment Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentMethods.map(payment => (
                        <div
                          key={payment.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex items-center">
                            <CreditCardIcon className="h-8 w-8 text-gray-400 mr-3" />
                            <div>
                              <p className="font-medium">
                                {payment.type === 'credit'
                                  ? 'Credit Card'
                                  : payment.type === 'debit'
                                    ? 'Debit Card'
                                    : 'PayPal'}
                              </p>
                              <p className="text-gray-500">
                                •••• •••• •••• {payment.lastFour}
                              </p>
                              <p className="text-sm text-gray-500">
                                Expires {payment.expiry}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {payment.isDefault && <Badge>Default</Badge>}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeletePayment(payment.id)}
                              disabled={payment.isDefault}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button
                        onClick={() =>
                          alert(
                            'Add payment method functionality would go here'
                          )
                        }
                      >
                        Add Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <SettingsIcon className="h-5 w-5 mr-2" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Communication Preferences
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-gray-500">
                              Receive order updates and promotional emails
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">SMS Notifications</p>
                            <p className="text-sm text-gray-500">
                              Receive order updates via SMS
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Security</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Change Password</p>
                            <p className="text-sm text-gray-500">
                              Update your account password
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Change
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">
                              Two-Factor Authentication
                            </p>
                            <p className="text-sm text-gray-500">
                              Add an extra layer of security
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Set up
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Account Management
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Download Data</p>
                            <p className="text-sm text-gray-500">
                              Download a copy of your account data
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Close Account</p>
                            <p className="text-sm text-gray-500">
                              Permanently delete your account
                            </p>
                          </div>
                          <Button variant="destructive" size="sm">
                            Close Account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
