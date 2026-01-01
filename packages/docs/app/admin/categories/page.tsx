import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';
import { Button } from '@jcraft/ui/button';
import { Search, Plus, MoreHorizontal, Folder } from 'lucide-react';
import Link from 'next/link';

export default function DocsCategoriesPage() {
  // Mock data for documentation categories
  const categories = [
    { id: 1, name: "Introduction", description: "Getting started guides", pages: 3, color: "bg-blue-500" },
    { id: 2, name: "Setup", description: "Installation and configuration", pages: 5, color: "bg-green-500" },
    { id: 3, name: "Development", description: "API and implementation guides", pages: 8, color: "bg-purple-500" },
    { id: 4, name: "Security", description: "Authentication and authorization", pages: 4, color: "bg-red-500" },
    { id: 5, name: "Production", description: "Deployment and maintenance", pages: 2, color: "bg-yellow-500" },
    { id: 6, name: "Troubleshooting", description: "Common issues and solutions", pages: 6, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Documentation Categories</h1>
          <p className="text-muted-foreground">
            Organize your documentation into categories
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/docs/categories/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="grid grid-cols-2 gap-4">
          <div>
            <CardTitle>Manage Categories</CardTitle>
            <CardDescription>
              View and edit your documentation categories
            </CardDescription>
          </div>
          <div className="flex items-center justify-end">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search categories..."
                className="pl-8 pr-4 py-2 border rounded-md w-full md:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`${category.color} p-2 rounded-lg`}>
                        <Folder className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {category.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {category.pages} pages
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
