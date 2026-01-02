'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser } from '@clerk/nextjs';
import { useSearchParams, useRouter } from 'next/navigation';
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
import {
  GridIcon,
  ListIcon,
  StarIcon,
  FilterIcon,
  SlidersHorizontalIcon,
  ShoppingCartIcon,
  SearchIcon,
} from 'lucide-react';
import { api } from '../../convex/_generated/api';
import { useQuery } from 'convex/react';
import Sidebar from '../../components/Sidebar';

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

// Mock categories for filtering
const CATEGORIES = [
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Books',
  'Beauty',
  'Sports',
  'Toys',
  'Automotive',
];

// Mock price ranges for filtering
const PRICE_RANGES = [
  { label: 'Under $25', min: 0, max: 2500 },
  { label: '$25 to $50', min: 2500, max: 5000 },
  { label: '$50 to $100', min: 5000, max: 10000 },
  { label: '$100+', min: 10000, max: Infinity },
];

export default function SearchPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // State for products and UI
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchInput, setSearchInput] = useState(query);

  // Filter and sort states
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('relevance');

  // Fetch products from Convex
  const allProducts = useQuery(api.products.getAll) || [];
  const memoizedAllProducts = useMemo(() => allProducts, [allProducts]);

  // Initialize products and handle search params
  useEffect(() => {
    if (memoizedAllProducts) {
      setProducts(memoizedAllProducts as Product[]);
      setLoading(false);
    }
  }, [memoizedAllProducts]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Apply search filter based on query parameter
    if (query) {
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(
        product =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply price filter
    if (priceRange) {
      result = result.filter(
        product =>
          product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    // Apply rating filter
    if (minRating) {
      result = result.filter(
        product => product.rating && product.rating >= minRating
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        // Assuming we have a createdAt field
        // result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'relevance':
      default:
        // For relevance, prioritize products that match the search term in the name
        if (query) {
          result.sort((a, b) => {
            const aMatchesName = a.name
              .toLowerCase()
              .includes(query.toLowerCase())
              ? 1
              : 0;
            const bMatchesName = b.name
              .toLowerCase()
              .includes(query.toLowerCase())
              ? 1
              : 0;
            if (aMatchesName !== bMatchesName) {
              return bMatchesName - aMatchesName; // Products matching name first
            }
            return 0; // Otherwise maintain original order
          });
        }
        break;
    }

    setFilteredProducts(result);
  }, [products, query, selectedCategory, priceRange, minRating, sortBy]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  // Handle filter changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    setPriceRange(
      priceRange?.min === range.min && priceRange?.max === range.max
        ? null
        : range
    );
  };

  const handleRatingChange = (rating: number) => {
    setMinRating(minRating === rating ? null : rating);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading search results...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* Search header */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">
                Search Results for &quot;{query}&quot;
              </h1>
            </div>
            <p className="text-gray-600">
              {filteredProducts.length} result
              {filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Search bar */}
          <div className="mb-6">
            <form onSubmit={handleSearch} className="flex">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                className="flex-1 rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                <SearchIcon className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>

          {/* Controls and filters */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Results count */}
              <p className="text-gray-600">
                Showing {filteredProducts.length} result
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>

              {/* View mode and sort controls */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="px-3"
                  >
                    <GridIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="px-3"
                  >
                    <ListIcon className="h-4 w-4" />
                  </Button>
                </div>

                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="border rounded-md px-3 py-2 text-sm"
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest Arrivals</option>
                </select>

                {/* Mobile filter button */}
                <Button
                  variant="outline"
                  className="md:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontalIcon className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters sidebar - hidden on mobile unless toggled */}
            <aside
              className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
            >
              {/* Category filter */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`cat-${category}`}
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`cat-${category}`}
                        className="ml-2 text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-lg mb-3">Price Range</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`price-${index}`}
                        checked={
                          priceRange?.min === range.min &&
                          priceRange?.max === range.max
                        }
                        onChange={() => handlePriceRangeChange(range)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`price-${index}`}
                        className="ml-2 text-gray-700"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating filter */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-lg mb-3">Customer Reviews</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(stars => (
                    <div key={stars} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`rating-${stars}`}
                        checked={minRating === stars}
                        onChange={() => handleRatingChange(stars)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`rating-${stars}`}
                        className="ml-2 text-gray-700 flex items-center"
                      >
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <StarIcon
                          className={`h-4 w-4 ${stars >= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                        <StarIcon
                          className={`h-4 w-4 ${stars >= 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                        <span className="ml-1">& Up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product grid/list */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                  <SearchIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory(null);
                      setPriceRange(null);
                      setMinRating(null);
                      setSearchInput('');
                      router.push('/products');
                    }}
                  >
                    Browse All Products
                  </Button>
                </div>
              ) : (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }
                >
                  {filteredProducts.map(product => (
                    <Card
                      key={product._id}
                      className={`hover:shadow-md transition-shadow cursor-pointer ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                      onClick={() => router.push(`/products/${product._id}`)}
                    >
                      <div
                        className={
                          viewMode === 'list'
                            ? 'flex flex-col sm:flex-row w-full'
                            : ''
                        }
                      >
                        {/* Product image */}
                        <div
                          className={`${viewMode === 'list' ? 'w-full sm:w-48 flex-shrink-0' : ''}`}
                        >
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                        </div>

                        <div
                          className={
                            viewMode === 'list' ? 'flex-1 flex flex-col' : ''
                          }
                        >
                          <CardHeader
                            className={viewMode === 'list' ? 'pb-2' : ''}
                          >
                            <CardTitle className="text-lg">
                              {product.name}
                            </CardTitle>
                            <div className="flex items-center mt-1">
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
                              <span className="text-sm text-gray-500 ml-1">
                                ({product.reviewCount || 0})
                              </span>
                            </div>
                          </CardHeader>

                          <CardContent
                            className={viewMode === 'list' ? 'flex-1 pb-2' : ''}
                          >
                            <p className="text-gray-700 mb-2">
                              {product.description.substring(0, 100)}...
                            </p>
                            <div className="flex items-center justify-between">
                              <p className="text-lg font-bold text-gray-900">
                                ${(product.price / 100).toFixed(2)}
                              </p>
                              <Badge
                                variant={
                                  product.inventory > 10
                                    ? 'default'
                                    : 'destructive'
                                }
                                className="text-xs"
                              >
                                {product.inventory > 10
                                  ? 'In Stock'
                                  : product.inventory > 0
                                    ? `${product.inventory} Left`
                                    : 'Out of Stock'}
                              </Badge>
                            </div>
                          </CardContent>

                          <CardFooter
                            className={viewMode === 'list' ? 'pb-4' : ''}
                          >
                            <div className="flex w-full space-x-2">
                              <Button
                                variant="outline"
                                className="flex-1"
                                onClick={e => {
                                  e.stopPropagation();
                                  // Add to wishlist functionality
                                }}
                              >
                                Wishlist
                              </Button>
                              <Button
                                className="flex-1"
                                onClick={e => {
                                  e.stopPropagation();
                                  // Add to cart functionality
                                }}
                              >
                                <ShoppingCartIcon className="h-4 w-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="default" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
