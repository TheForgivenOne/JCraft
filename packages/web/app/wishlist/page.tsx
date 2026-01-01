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
import { HeartIcon, ShoppingCartIcon, XIcon, StarIcon } from 'lucide-react';
import { api } from '../../convex/_generated/api';
import { useQuery, useMutation } from 'convex/react';
import Sidebar from '../../components/Sidebar';

// Define types
type WishlistItem = {
  _id: string;
  productId: string;
  createdAt: number;
  product: {
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
};

export default function WishlistPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishlist items from Convex
  const wishlistData = useQuery(api.wishlist.getByUser);

  // Mutations
  const removeFromWishlist = useMutation(api.wishlist.removeFromWishlist);
  const addToCart = useMutation(api.cart.add); // Assuming we have a cart API

  // Initialize wishlist
  useEffect(() => {
    if (wishlistData) {
      setWishlistItems(wishlistData as WishlistItem[]);
      setLoading(false);
    }
  }, [wishlistData]);

  // Handle removing item from wishlist
  const handleRemoveFromWishlist = async (productId: string) => {
    try {
      await removeFromWishlist({ productId });
      // Update local state
      setWishlistItems(
        wishlistItems.filter(item => item.productId !== productId)
      );
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  // Handle adding item to cart
  const handleAddToCart = async (productId: string) => {
    // In a real app, this would add the item to the cart
    console.log(`Added ${productId} to cart`);
    // Redirect to cart page
    router.push('/cart');
  };

  // If user is not signed in, redirect to home
  if (!isSignedIn) {
    router.push('/');
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Your Wishlist
          </h1>

          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
              <HeartIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Save items you like for later by clicking the heart icon on
                product pages
              </p>
              <Button onClick={() => router.push('/products')}>
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map(item => (
                <Card key={item._id} className="flex flex-col">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        {item.product.name}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveFromWishlist(item.productId)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <XIcon className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < (item.product.rating || 0)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        ({item.product.reviewCount || 0})
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-gray-700 mb-2">
                      {item.product.description.substring(0, 80)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900">
                        ${(item.product.price / 100).toFixed(2)}
                      </p>
                      <Badge
                        variant={
                          item.product.inventory > 10
                            ? 'default'
                            : 'destructive'
                        }
                        className="text-xs"
                      >
                        {item.product.inventory > 10
                          ? 'In Stock'
                          : item.product.inventory > 0
                            ? `${item.product.inventory} Left`
                            : 'Out of Stock'}
                      </Badge>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        router.push(`/products/${item.product._id}`)
                      }
                    >
                      View Details
                    </Button>
                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(item.product._id)}
                      disabled={item.product.inventory <= 0}
                    >
                      <ShoppingCartIcon className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {wishlistItems.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button onClick={() => router.push('/products')}>
                Continue Shopping
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
