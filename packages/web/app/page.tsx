'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@jcraft/ui';
import { Card, CardContent } from '@jcraft/ui';
import { api } from '../convex/_generated/api';
import { useQuery } from 'convex/react';
import {
  StarIcon,
  ShoppingCartIcon,
  GridIcon,
  PackageIcon,
  TrendingUpIcon,
  TruckIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
} from 'lucide-react';
import { useStoreUserEffect } from '@/hooks/useStoreUserEffect';

// Define types
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number; // in cents
  category: string;
  inventory: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
};

// Mock categories for featured categories section
const CATEGORIES = [
  { name: 'Electronics', icon: '🔌', color: 'bg-blue-100 text-blue-800' },
  { name: 'Home & Kitchen', icon: '🏠', color: 'bg-green-100 text-green-800' },
  { name: 'Clothing', icon: '👕', color: 'bg-purple-100 text-purple-800' },
  { name: 'Beauty', icon: '💄', color: 'bg-pink-100 text-pink-800' },
  { name: 'Sports', icon: '⚽', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Books', icon: '📚', color: 'bg-indigo-100 text-indigo-800' },
];

export default function HomePage() {
  const { isSignedIn } = useUser();
  const { isAuthenticated } = useStoreUserEffect();
  const router = useRouter();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([]);

  // Fetch products from Convex
  const allProducts = useQuery(api.products.getAll) || [];

  // Set featured and best selling products
  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      // For now, just take the first few products as featured
      // In a real app, these would be determined by business logic
      setFeaturedProducts(allProducts.slice(0, 4) as Product[]);
      setBestSellingProducts(allProducts.slice(4, 8) as Product[]);
    }
  }, [allProducts]);

  // If user is authenticated, redirect to products page instead of dashboard
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/products');
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null; // Redirecting to products
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to JCraft
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover premium crafted goods at unbeatable prices. Quality you can
            trust, service you deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => router.push('/products')}
            >
              Shop Now
            </Button>
            {!isSignedIn && (
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                onClick={() => router.push('/sign-up')}
              >
                Join Free
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <TruckIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $35</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <ShieldCheckIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <HeadphonesIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover products across our most popular categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() =>
                  router.push(
                    `/products?category=${category.name.toLowerCase()}`
                  )
                }
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Button
              variant="outline"
              onClick={() => router.push('/products')}
              className="flex items-center"
            >
              View All
              <GridIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <Card
                  key={product._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => router.push(`/products/${product._id}`)}
                >
                  <div className="p-4 flex justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-40 h-40 flex items-center justify-center" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < (product.rating || 0)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.reviewCount || 0})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900">
                        ${(product.price / 100).toFixed(2)}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={e => {
                          e.stopPropagation();
                          // Add to cart functionality
                        }}
                      >
                        <ShoppingCartIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading featured products...</p>
            </div>
          )}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Best Selling</h2>
            <Button
              variant="outline"
              onClick={() => router.push('/products')}
              className="flex items-center"
            >
              View All
              <TrendingUpIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {bestSellingProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellingProducts.map(product => (
                <Card
                  key={product._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => router.push(`/products/${product._id}`)}
                >
                  <div className="p-4 flex justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-40 h-40 flex items-center justify-center" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < (product.rating || 0)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.reviewCount || 0})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900">
                        ${(product.price / 100).toFixed(2)}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={e => {
                          e.stopPropagation();
                          // Add to cart functionality
                        }}
                      >
                        <ShoppingCartIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading best selling products...</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get 10% off your first order
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
