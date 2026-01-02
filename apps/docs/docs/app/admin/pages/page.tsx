import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';
import { Button } from '@jcraft/ui/button';
import { Search, Plus, MoreHorizontal, FileText } from 'lucide-react';
import Link from 'next/link';

export default function DocsPagesPage() {
  // Mock data for documentation pages
  const pages = [
    {
      id: 1,
      title: 'Getting Started',
      category: 'Introduction',
      lastUpdated: '2023-10-15',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Installation Guide',
      category: 'Setup',
      lastUpdated: '2023-10-12',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'API Reference',
      category: 'Development',
      lastUpdated: '2023-10-10',
      author: 'Alex Johnson',
    },
    {
      id: 4,
      title: 'Authentication',
      category: 'Security',
      lastUpdated: '2023-10-08',
      author: 'Sarah Williams',
    },
    {
      id: 5,
      title: 'Deployment',
      category: 'Production',
      lastUpdated: '2023-10-05',
      author: 'Mike Brown',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Documentation Pages
          </h1>
          <p className="text-muted-foreground">
            Manage and organize your documentation content
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/docs/pages/new">
            <Plus className="h-4 w-4 mr-2" />
            Add New Page
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="grid grid-cols-2 gap-4">
          <div>
            <CardTitle>Manage Pages</CardTitle>
            <CardDescription>
              View and edit your documentation pages
            </CardDescription>
          </div>
          <div className="flex items-center justify-end">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search pages..."
                className="pl-8 pr-4 py-2 border rounded-md w-full md:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Title
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Category
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Last Updated
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Author
                  </th>
                  <th className="text-right p-4 font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {pages.map(page => (
                  <tr
                    key={page.id}
                    className="border-b hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        {page.title}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                        {page.category}
                      </span>
                    </td>
                    <td className="p-4">{page.lastUpdated}</td>
                    <td className="p-4">{page.author}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
