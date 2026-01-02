'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser } from '@clerk/nextjs';
import { useParams, useRouter } from 'next/navigation';
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
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  ShareIcon,
  TruckIcon,
  ShieldCheckIcon,
  RotateCcwIcon,
  CheckCircleIcon,
} from 'lucide-react';
import { api } from '../../../convex/_generated/api';
import { useQuery, useMutation } from 'convex/react';
import Sidebar from '../../../components/Sidebar';

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

type Review = {
  _id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: number; // timestamp
};

export default function ProductDetailPage() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;

  // State for product and UI
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>(
    'description'
  );
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [hoveredRating, setHoveredRating] = useState(0);

  // Fetch product from Convex
  const allProducts = useQuery(api.products.getAll) || [];
  const memoizedAllProducts = useMemo(() => allProducts, [allProducts]);
  const reviews = useQuery(api.reviews.getByProduct, { productId }) || [];

  // Find the specific product
  useEffect(() => {
    if (memoizedAllProducts && productId) {
      const foundProduct = memoizedAllProducts.find(
        (p: any) => p._id === productId
      );
      if (foundProduct) {
        setProduct(foundProduct as Product);
      } else {
        // If product not found, redirect to products page
        router.push('/products');
      }
    }
  }, [memoizedAllProducts, productId, router]);

  // Handle quantity changes
  const incrementQuantity = () => {
    if (product && quantity < product.inventory) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    // In a real app, this would add the item to the cart
    console.log(`Added ${quantity} of ${product?.name} to cart`);
    // Show a success message or redirect to cart
  };

  // Handle add to wishlist
  const addToWishlist = useMutation(api.wishlist.addToWishlist);
  const handleAddToWishlist = async () => {
    if (!isSignedIn || !product) return;

    try {
      await addToWishlist({ productId: product._id });
      alert('Product added to wishlist!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert('Error adding product to wishlist. Please try again.');
    }
  };

  // Handle buy now
  const handleBuyNow = () => {
    // In a real app, this would redirect to checkout
    console.log(`Buying ${quantity} of ${product?.name}`);
    router.push('/checkout');
  };

  // Handle rating selection for new review
  const handleRatingSelect = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  // Handle review submission
  const submitReview = useMutation(api.reviews.create);
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn || !user || !product || newReview.rating === 0) return;

    try {
      await submitReview({
        productId: product._id,
        rating: newReview.rating,
        comment: newReview.comment,
      });

      // Reset form
      setNewReview({ rating: 0, comment: '' });

      // In a real app, we would refetch the reviews to show the new one
      // For now, we'll just show a success message
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    }
  };

  // Mock images for gallery
  const productImages = [
    product?.image || '/placeholder-product.jpg',
    '/placeholder-product-2.jpg',
    '/placeholder-product-3.jpg',
    '/placeholder-product-4.jpg',
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-4 text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <a href="/products" className="text-blue-600 hover:underline">
                  Products
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-500 truncate max-w-xs">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images Gallery */}
            <div>
              <div className="bg-gray-100 rounded-xl p-6 mb-4 flex items-center justify-center h-96 transition-all duration-300 hover:shadow-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, index) => (
                  <div
                    key={index}
                    className={`bg-gray-100 rounded-lg p-3 cursor-pointer transition-all duration-200 hover:scale-105 ${
                      selectedImage === index
                        ? 'ring-2 ring-blue-500 shadow-md'
                        : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-24" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>

              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < (product.rating || 0)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {reviews.length} reviews
                </span>
                <span className="text-sm text-gray-500 ml-4">
                  {product.inventory > 0 ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </span>
              </div>

              <div className="mt-4">
                <p className="text-3xl font-bold text-gray-900">
                  ${(product.price / 100).toFixed(2)}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Product Options */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {['Red', 'Blue', 'Green', 'Black'].map(color => (
                      <button
                        key={color}
                        className={`px-4 py-2 border rounded-full transition-all duration-200 ${
                          selectedOptions.color === color
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                        onClick={() =>
                          setSelectedOptions({ ...selectedOptions, color })
                        }
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button
                        key={size}
                        className={`px-4 py-2 border rounded-full transition-all duration-200 ${
                          selectedOptions.size === size
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                        onClick={() =>
                          setSelectedOptions({ ...selectedOptions, size })
                        }
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 p-0"
                  >
                    -
                  </Button>
                  <span className="mx-4 text-lg">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={incrementQuantity}
                    disabled={product ? quantity >= product.inventory : true}
                    className="h-10 w-10 p-0"
                  >
                    +
                  </Button>
                  <span className="ml-4 text-sm text-gray-500">
                    {product?.inventory} available
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="flex-1 flex items-center justify-center py-6 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    onClick={handleAddToCart}
                    disabled={product ? product.inventory <= 0 : true}
                  >
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 flex items-center justify-center py-6 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    onClick={handleAddToWishlist}
                  >
                    <HeartIcon className="h-5 w-5 mr-2" />
                    Wishlist
                  </Button>
                </div>

                <Button
                  className="w-full py-6 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  onClick={handleBuyNow}
                  disabled={product ? product.inventory <= 0 : true}
                >
                  Buy Now
                </Button>
              </div>

              {/* Product Features */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <TruckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">Free delivery</span>
                  </div>
                  <div className="flex items-center">
                    <RotateCcwIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">30-day returns</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">2-year warranty</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">Authentic products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                    activeTab === 'description'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                    activeTab === 'reviews'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  Reviews ({reviews.length})
                </button>
              </nav>
            </div>

            <div className="py-6">
              {activeTab === 'description' ? (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Product Details
                  </h3>
                  <div className="mt-4 text-gray-700 space-y-2">
                    <p>
                      This premium product is designed with attention to detail
                      and built to last. Crafted from high-quality materials, it
                      offers exceptional performance and durability.
                    </p>
                    <p>Features include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>High-quality construction for long-lasting use</li>
                      <li>Ergonomic design for comfort and ease of use</li>
                      <li>Versatile functionality to meet various needs</li>
                      <li>Easy to maintain and clean</li>
                      <li>Eco-friendly materials where possible</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Customer Reviews
                  </h3>

                  <div className="mt-6 space-y-6">
                    {reviews.length > 0 ? (
                      reviews.map((review: any) => (
                        <div
                          key={review._id}
                          className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center">
                            <h4 className="font-medium text-gray-900">
                              {user?.firstName || user?.username || 'User'}
                            </h4>
                            <div className="flex ml-4">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 ml-4">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-700">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No reviews yet. Be the first to review this product!
                      </div>
                    )}
                  </div>

                  {/* Add Review Section */}
                  <div className="mt-8">
                    <h4 className="text-md font-medium text-gray-900">
                      Write a review
                    </h4>
                    <div className="mt-4">
                      <div className="flex items-center mb-4">
                        <span className="mr-4 text-sm">Your rating:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <button
                              key={star}
                              className="text-gray-300 hover:text-yellow-400"
                              onClick={() => handleRatingSelect(star)}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                            >
                              <StarIcon
                                className={`h-6 w-6 ${
                                  star <= (hoveredRating || newReview.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <form onSubmit={handleReviewSubmit}>
                        <textarea
                          rows={4}
                          className="w-full border border-gray-300 rounded-md p-3 text-sm"
                          placeholder="Share your experience with this product..."
                          value={newReview.comment}
                          onChange={e =>
                            setNewReview({
                              ...newReview,
                              comment: e.target.value,
                            })
                          }
                          required
                        ></textarea>
                        <Button
                          type="submit"
                          className="mt-3"
                          disabled={newReview.rating === 0}
                        >
                          Submit Review
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
