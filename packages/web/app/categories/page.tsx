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
  ChevronRightIcon,
  GridIcon,
  ListIcon,
  StarIcon,
  ShoppingCartIcon,
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

type Category = {
  id: string;
  name: string;
  description: string;
  image?: string;
  subcategories?: Category[];
  productCount?: number;
};

// Mock categories data with hierarchy
const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-electronics',
    name: 'Electronics',
    description: 'Gadgets, devices, and tech accessories',
    image: '/placeholder-category-electronics.jpg',
    productCount: 120,
    subcategories: [
      {
        id: 'cat-computers',
        name: 'Computers & Tablets',
        description: 'Laptops, desktops, and tablets',
        productCount: 45,
      },
      {
        id: 'cat-phones',
        name: 'Cell Phones',
        description: 'Smartphones and accessories',
        productCount: 32,
      },
      {
        id: 'cat-acc',
        name: 'Accessories',
        description: 'Chargers, cases, and more',
        productCount: 43,
      },
    ],
  },
  {
    id: 'cat-clothing',
    name: 'Clothing',
    description: 'Fashion for men, women, and kids',
    image: '/placeholder-category-clothing.jpg',
    productCount: 210,
    subcategories: [
      {
        id: 'cat-mens',
        name: "Men's Fashion",
        description: 'Shirts, pants, shoes and accessories',
        productCount: 85,
      },
      {
        id: 'cat-womens',
        name: "Women's Fashion",
        description: 'Dresses, tops, and accessories',
        productCount: 95,
      },
      {
        id: 'cat-kids',
        name: "Kids' Clothing",
        description: 'Clothing for children',
        productCount: 30,
      },
    ],
  },
  {
    id: 'cat-home',
    name: 'Home & Kitchen',
    description: 'Furniture, decor, and kitchen essentials',
    image: '/placeholder-category-home.jpg',
    productCount: 180,
    subcategories: [
      {
        id: 'cat-furniture',
        name: 'Furniture',
        description: 'Sofas, tables, and bedroom sets',
        productCount: 65,
      },
      {
        id: 'cat-decor',
        name: 'Home Decor',
        description: 'Art, lighting, and decorative items',
        productCount: 72,
      },
      {
        id: 'cat-kitchen',
        name: 'Kitchen & Dining',
        description: 'Cookware, utensils, and appliances',
        productCount: 43,
      },
    ],
  },
  {
    id: 'cat-books',
    name: 'Books',
    description: 'Fiction, non-fiction, and educational',
    image: '/placeholder-category-books.jpg',
    productCount: 95,
    subcategories: [
      {
        id: 'cat-fiction',
        name: 'Fiction',
        description: 'Novels, short stories, and poetry',
        productCount: 40,
      },
      {
        id: 'cat-nonfiction',
        name: 'Non-Fiction',
        description: 'Biographies, history, and science',
        productCount: 35,
      },
      {
        id: 'cat-education',
        name: 'Education',
        description: 'Textbooks and learning materials',
        productCount: 20,
      },
    ],
  },
  {
    id: 'cat-beauty',
    name: 'Beauty & Health',
    description: 'Skincare, makeup, and personal care',
    image: '/placeholder-category-beauty.jpg',
    productCount: 75,
    subcategories: [
      {
        id: 'cat-skincare',
        name: 'Skincare',
        description: 'Moisturizers, cleansers, and treatments',
        productCount: 30,
      },
      {
        id: 'cat-makeup',
        name: 'Makeup',
        description: 'Foundation, lipstick, and cosmetics',
        productCount: 25,
      },
      {
        id: 'cat-hair',
        name: 'Hair Care',
        description: 'Shampoo, conditioner, and styling',
        productCount: 20,
      },
    ],
  },
  {
    id: 'cat-sports',
    name: 'Sports & Outdoors',
    description: 'Equipment, apparel, and outdoor gear',
    image: '/placeholder-category-sports.jpg',
    productCount: 110,
    subcategories: [
      {
        id: 'cat-fitness',
        name: 'Fitness',
        description: 'Equipment and accessories',
        productCount: 40,
      },
      {
        id: 'cat-outdoor',
        name: 'Outdoor Recreation',
        description: 'Camping, hiking, and adventure',
        productCount: 35,
      },
      {
        id: 'cat-team',
        name: 'Team Sports',
        description: 'Equipment for various sports',
        productCount: 35,
      },
    ],
  },
];

export default function CategoriesPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);

  // Fetch products from Convex to count products per category
  const allProducts = useQuery(api.products.getAll) || [];

  // Initialize categories
  useEffect(() => {
    // In a real app, we would fetch categories from Convex
    setCategories(MOCK_CATEGORIES);
    setLoading(false);
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading categories...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Shop by Category
            </h1>
            <p className="mt-2 text-gray-600">
              Browse our wide selection of products organized by category
            </p>
          </div>

          {/* Category browsing */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                All Categories
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">View:</span>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="px-3"
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="px-3"
                >
                  <ListIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {categories.map(category => (
                <Card
                  key={category.id}
                  className={`hover:shadow-md transition-shadow cursor-pointer ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  onClick={() =>
                    router.push(`/products?category=${category.name}`)
                  }
                >
                  <div
                    className={
                      viewMode === 'list'
                        ? 'flex flex-col sm:flex-row w-full'
                        : ''
                    }
                  >
                    {/* Category image */}
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
                      <CardHeader className={viewMode === 'list' ? 'pb-2' : ''}>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">
                            {category.name}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {category.productCount} products
                          </Badge>
                        </div>
                        <p className="text-gray-600 mt-1">
                          {category.description}
                        </p>
                      </CardHeader>

                      <CardContent
                        className={viewMode === 'list' ? 'flex-1 pb-2' : ''}
                      >
                        {category.subcategories && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                              Subcategories:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {category.subcategories
                                .slice(0, 3)
                                .map(subcat => (
                                  <span
                                    key={subcat.id}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                  >
                                    {subcat.name}
                                  </span>
                                ))}
                              {category.subcategories.length > 3 && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  +{category.subcategories.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className={viewMode === 'list' ? 'pb-4' : ''}>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={e => {
                            e.stopPropagation();
                            router.push(`/products?category=${category.name}`);
                          }}
                        >
                          Browse Products
                          <ChevronRightIcon className="h-4 w-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular categories section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.slice(0, 6).map(category => (
                <div
                  key={category.id}
                  className="bg-white rounded-lg shadow-sm border p-4 text-center cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() =>
                    router.push(`/products?category=${category.name}`)
                  }
                >
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {category.productCount} products
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
