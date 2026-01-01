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
import {
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
  XIcon,
  TruckIcon,
  CreditCardIcon,
  CheckCircleIcon,
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

// Mock cart data
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
  {
    id: '3',
    productId: 'prod-3',
    name: 'Bluetooth Speaker',
    price: 7999,
    quantity: 1,
    image: '/placeholder-product-3.jpg',
    options: { color: 'Red' },
  },
];

export default function CartPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Initialize cart
  useEffect(() => {
    // In a real app, we would fetch cart from Convex or localStorage
    setCartItems(MOCK_CART_ITEMS);
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

  // Handle quantity changes
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Handle checkout
  const handleCheckout = () => {
    router.push('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Your Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
              <ShoppingCartIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Looks like you haven&rsquo;t added anything to your cart yet
              </p>
              <Button onClick={() => router.push('/products')}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map(item => (
                  <Card key={item.id} className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl m-4 flex-shrink-0" />

                    <div className="flex-1 p-4">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          {item.options && (
                            <div className="mt-1 text-sm text-gray-500">
                              {Object.entries(item.options).map(
                                ([key, value]) => (
                                  <span key={key}>
                                    {key}: {value}
                                    {key !==
                                    Object.keys(item.options)[
                                      Object.keys(item.options).length - 1
                                    ]
                                      ? ', '
                                      : ''}
                                  </span>
                                )
                              )}
                            </div>
                          )}
                          <p className="mt-2 font-semibold text-gray-900">
                            ${(item.price / 100).toFixed(2)}
                          </p>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <XIcon className="h-5 w-5" />
                        </Button>
                      </div>

                      <div className="mt-4 flex items-center">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <span className="mx-4 text-lg">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="ml-6 font-semibold text-gray-900">
                          ${((item.price * item.quantity) / 100).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Cart Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => router.push('/products')}
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setCartItems([])} // This would be an "Update Cart" in a real app
                  >
                    Update Cart
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                      <span>Total</span>
                      <span>${(total / 100).toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button className="w-full mb-3" onClick={handleCheckout}>
                      Proceed to Checkout
                    </Button>

                    <div className="text-xs text-gray-500 mt-4">
                      <div className="flex items-center mb-1">
                        <TruckIcon className="h-4 w-4 mr-2 text-green-500" />
                        <span>Free delivery on orders over $35</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                        <span>30-day returns</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>

                {/* Promo Code */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Discount Code</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Button
                        variant="outline"
                        className="rounded-l-none rounded-r-md"
                      >
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
