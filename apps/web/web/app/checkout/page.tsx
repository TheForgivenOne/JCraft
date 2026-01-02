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
import { Input } from '@jcraft/ui';
import { Label } from '@jcraft/ui';
import {
  CreditCardIcon,
  MapPinIcon,
  UserIcon,
  CheckCircleIcon,
  TruckIcon,
} from 'lucide-react';
import Sidebar from '../../components/Sidebar';

// Define types
type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number; // in cents
  quantity: number;
  image?: string;
  options?: Record<string, string>;
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
const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: '1',
    productId: 'prod-1',
    name: 'Premium Wireless Headphones',
    price: 12999,
    quantity: 1,
    image: '/placeholder-product.jpg',
    options: { color: 'Black' },
  },
  {
    id: '2',
    productId: 'prod-2',
    name: 'Smart Watch Series 5',
    price: 24999,
    quantity: 2,
    image: '/placeholder-product-2.jpg',
    options: { color: 'Silver' },
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

export default function CheckoutPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [step, setStep] = useState<number>(1); // 1: Address, 2: Payment, 3: Review, 4: Confirmation
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [newAddress, setNewAddress] = useState<
    Omit<Address, 'id' | 'isDefault'>
  >({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
  });
  const [newPayment, setNewPayment] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardholderName: '',
  });
  const [loading, setLoading] = useState(true);

  // Initialize data
  useEffect(() => {
    // In a real app, we would fetch from Convex
    setCartItems(MOCK_CART_ITEMS);
    setAddresses(MOCK_ADDRESSES);
    setPaymentMethods(MOCK_PAYMENT_METHODS);

    // Set default selections if available
    const defaultAddress = MOCK_ADDRESSES.find(addr => addr.isDefault);
    if (defaultAddress) {
      setSelectedAddress(defaultAddress.id);
    }

    const defaultPayment = MOCK_PAYMENT_METHODS.find(pm => pm.isDefault);
    if (defaultPayment) {
      setSelectedPayment(defaultPayment.id);
    }

    setLoading(false);
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 599 : 0; // $5.99 shipping if items in cart
  const tax = Math.round(subtotal * 0.08); // 8% tax
  const total = subtotal + shipping + tax;

  // Handle address selection
  const handleAddressSelect = (id: string) => {
    setSelectedAddress(id);
  };

  // Handle payment selection
  const handlePaymentSelect = (id: string) => {
    setSelectedPayment(id);
  };

  // Handle new address submission
  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to Convex
    const newAddr: Address = {
      ...newAddress,
      id: `addr-${Date.now()}`,
      isDefault: false,
    };
    setAddresses([...addresses, newAddr]);
    setSelectedAddress(newAddr.id);
    setStep(2); // Move to payment step
  };

  // Handle new payment submission
  const handleAddNewPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to Convex
    const newPay: PaymentMethod = {
      id: `pay-${Date.now()}`,
      type: 'credit',
      lastFour: newPayment.cardNumber.slice(-4),
      expiry: newPayment.expiry,
      isDefault: false,
    };
    setPaymentMethods([...paymentMethods, newPay]);
    setSelectedPayment(newPay.id);
    setStep(3); // Move to review step
  };

  // Handle place order
  const handlePlaceOrder = () => {
    // In a real app, this would create an order in Convex
    setStep(4); // Move to confirmation step
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading checkout...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map(s => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= s
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {s}
                  </div>
                  <span
                    className={`ml-2 hidden sm:block ${
                      step >= s ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}
                  >
                    {s === 1 && 'Address'}
                    {s === 2 && 'Payment'}
                    {s === 3 && 'Review'}
                    {s === 4 && 'Confirmation'}
                  </span>
                  {s < 4 && (
                    <div
                      className={`w-16 h-1 mx-2 ${
                        step > s ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="font-medium">
                        Select an existing address
                      </h3>
                      {addresses.map(address => (
                        <div
                          key={address.id}
                          className={`border rounded-lg p-4 cursor-pointer ${
                            selectedAddress === address.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                          onClick={() => handleAddressSelect(address.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">
                                {address.firstName} {address.lastName}
                              </p>
                              <p>{address.address}</p>
                              <p>
                                {address.city}, {address.state}{' '}
                                {address.zipCode}
                              </p>
                              <p>{address.country}</p>
                            </div>
                            {address.isDefault && (
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                Default
                              </span>
                            )}
                          </div>
                        </div>
                      ))}

                      <div className="mt-6">
                        <h3 className="font-medium mb-3">
                          Or add a new address
                        </h3>
                        <form onSubmit={handleAddNewAddress}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName">First Name</Label>
                              <Input
                                id="firstName"
                                value={newAddress.firstName}
                                onChange={e =>
                                  setNewAddress({
                                    ...newAddress,
                                    firstName: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input
                                id="lastName"
                                value={newAddress.lastName}
                                onChange={e =>
                                  setNewAddress({
                                    ...newAddress,
                                    lastName: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <Label htmlFor="address">Address</Label>
                              <Input
                                id="address"
                                value={newAddress.address}
                                onChange={e =>
                                  setNewAddress({
                                    ...newAddress,
                                    address: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="city">City</Label>
                              <Input
                                id="city"
                                value={newAddress.city}
                                onChange={e =>
                                  setNewAddress({
                                    ...newAddress,
                                    city: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="state">State</Label>
                              <Input
                                id="state"
                                value={newAddress.state}
                                onChange={e =>
                                  setNewAddress({
                                    ...newAddress,
                                    state: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="zipCode">ZIP Code</Label>
                              <Input
                                id="zipCode"
                                value={newAddress.zipCode}
                                onChange={e =>
                                  setNewAddress({
                                    ...newAddress,
                                    zipCode: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="country">Country</Label>
                              <Input
                                id="country"
                                value={newAddress.country}
                                onChange={e =>
                                  setNewAddress({
                                    ...newAddress,
                                    country: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                          </div>
                          <div className="mt-6 flex justify-end">
                            <Button type="submit">Save Address</Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => router.push('/cart')}
                    >
                      Back to Cart
                    </Button>
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedAddress}
                    >
                      Continue to Payment
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCardIcon className="h-5 w-5 mr-2" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="font-medium">Select a payment method</h3>
                      {paymentMethods.map(payment => (
                        <div
                          key={payment.id}
                          className={`border rounded-lg p-4 cursor-pointer ${
                            selectedPayment === payment.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                          onClick={() => handlePaymentSelect(payment.id)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">
                                {payment.type === 'credit'
                                  ? 'Credit Card'
                                  : payment.type === 'debit'
                                    ? 'Debit Card'
                                    : 'PayPal'}
                              </p>
                              <p>•••• •••• •••• {payment.lastFour}</p>
                              <p className="text-sm text-gray-500">
                                Expires {payment.expiry}
                              </p>
                            </div>
                            {payment.isDefault && (
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                Default
                              </span>
                            )}
                          </div>
                        </div>
                      ))}

                      <div className="mt-6">
                        <h3 className="font-medium mb-3">
                          Or add a new payment method
                        </h3>
                        <form onSubmit={handleAddNewPayment}>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input
                                id="cardNumber"
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                value={newPayment.cardNumber}
                                onChange={e =>
                                  setNewPayment({
                                    ...newPayment,
                                    cardNumber: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input
                                  id="expiry"
                                  type="text"
                                  placeholder="MM/YY"
                                  value={newPayment.expiry}
                                  onChange={e =>
                                    setNewPayment({
                                      ...newPayment,
                                      expiry: e.target.value,
                                    })
                                  }
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                  id="cvv"
                                  type="text"
                                  placeholder="123"
                                  value={newPayment.cvv}
                                  onChange={e =>
                                    setNewPayment({
                                      ...newPayment,
                                      cvv: e.target.value,
                                    })
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="cardholderName">
                                Cardholder Name
                              </Label>
                              <Input
                                id="cardholderName"
                                type="text"
                                value={newPayment.cardholderName}
                                onChange={e =>
                                  setNewPayment({
                                    ...newPayment,
                                    cardholderName: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                          </div>
                          <div className="mt-6 flex justify-end">
                            <Button type="submit">Save Payment Method</Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back to Address
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!selectedPayment}
                    >
                      Continue to Review
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Review Your Order</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Selected Address */}
                      <div>
                        <h3 className="font-medium mb-2">Shipping Address</h3>
                        <div className="border rounded-lg p-4 bg-gray-50">
                          {addresses
                            .filter(addr => addr.id === selectedAddress)
                            .map(address => (
                              <div key={address.id}>
                                <p className="font-medium">
                                  {address.firstName} {address.lastName}
                                </p>
                                <p>{address.address}</p>
                                <p>
                                  {address.city}, {address.state}{' '}
                                  {address.zipCode}
                                </p>
                                <p>{address.country}</p>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Selected Payment */}
                      <div>
                        <h3 className="font-medium mb-2">Payment Method</h3>
                        <div className="border rounded-lg p-4 bg-gray-50">
                          {paymentMethods
                            .filter(pm => pm.id === selectedPayment)
                            .map(payment => (
                              <div key={payment.id}>
                                <p className="font-medium">
                                  {payment.type === 'credit'
                                    ? 'Credit Card'
                                    : payment.type === 'debit'
                                      ? 'Debit Card'
                                      : 'PayPal'}
                                </p>
                                <p>•••• •••• •••• {payment.lastFour}</p>
                                <p className="text-sm text-gray-500">
                                  Expires {payment.expiry}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Order Items */}
                      <div>
                        <h3 className="font-medium mb-2">Order Items</h3>
                        <div className="border rounded-lg overflow-hidden">
                          {cartItems.map(item => (
                            <div
                              key={item.id}
                              className="flex items-center p-4 border-b last:border-b-0"
                            >
                              <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-xl mr-4" />
                              <div className="flex-1">
                                <p className="font-medium">{item.name}</p>
                                {item.options &&
                                  Object.keys(item.options).length > 0 && (
                                    <p className="text-sm text-gray-500">
                                      {Object.entries(item.options).map(
                                        ([key, value], index, array) => (
                                          <span key={key}>
                                            {key}: {value}
                                            {index < array.length - 1
                                              ? ', '
                                              : ''}
                                          </span>
                                        )
                                      )}
                                    </p>
                                  )}
                              </div>
                              <div className="text-right">
                                <p className="font-medium">
                                  ${(item.price / 100).toFixed(2)}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Qty: {item.quantity}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back to Payment
                    </Button>
                    <Button onClick={handlePlaceOrder}>Place Order</Button>
                  </CardFooter>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <CardHeader className="text-center py-12">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                      <CheckCircleIcon className="h-10 w-10 text-green-600" />
                    </div>
                    <CardTitle className="mt-4 text-2xl">
                      Order Confirmed!
                    </CardTitle>
                    <p className="mt-2 text-gray-600">
                      Thank you for your order. Your order number is{' '}
                      <span className="font-semibold">#ORD-{Date.now()}</span>
                    </p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      You will receive an email confirmation shortly with
                      tracking information.
                    </p>
                    <div className="mt-6 bg-blue-50 rounded-lg p-4 inline-block">
                      <div className="flex items-center text-blue-800">
                        <TruckIcon className="h-5 w-5 mr-2" />
                        <span>
                          Estimated delivery:{' '}
                          {new Date(
                            Date.now() + 5 * 24 * 60 * 60 * 1000
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button onClick={() => router.push('/orders')}>
                      View Order History
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="text-gray-600">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">
                        ${((item.price * item.quantity) / 100).toFixed(2)}
                      </p>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${(subtotal / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${(shipping / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${(tax / 100).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(total / 100).toFixed(2)}</span>
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
