'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';
import { Button } from '@jcraft/ui/button';
import {
  FileText,
  BookOpen,
  Settings,
  Users,
  Plus,
  BarChart3,
  Eye,
  Activity,
} from 'lucide-react';
import Link from 'next/link';

export default function DocsAdminPage() {
  const stats = [
    {
      name: 'Total Pages',
      value: '24',
      icon: <FileText className="h-5 w-5" />,
    },
    { name: 'Categories', value: '6', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Contributors', value: '8', icon: <Users className="h-5 w-5" /> },
    { name: 'Views (30d)', value: '1.2K', icon: <Eye className="h-5 w-5" /> },
  ];

  const quickActions = [
    {
      name: 'Add New Page',
      href: '/admin/docs/pages/new',
      icon: <Plus className="h-4 w-4" />,
    },
    {
      name: 'Manage Categories',
      href: '/admin/docs/categories',
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      name: 'Documentation Settings',
      href: '/admin/docs/settings',
      icon: <Settings className="h-4 w-4" />,
    },
    {
      name: 'View Analytics',
      href: '/admin/docs/analytics',
      icon: <BarChart3 className="h-4 w-4" />,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Documentation Admin
        </h1>
        <p className="text-muted-foreground">
          Manage and monitor your documentation content
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
              <CardDescription>
                Manage documentation pages, categories, and contributors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/admin/docs/pages" className="block">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Pages</h3>
                        <p className="text-sm text-muted-foreground">
                          Manage documentation pages
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/docs/categories" className="block">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-green-100 text-green-600">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Categories</h3>
                        <p className="text-sm text-muted-foreground">
                          Organize documentation
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/docs/users" className="block">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Contributors</h3>
                        <p className="text-sm text-muted-foreground">
                          Manage team members
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/docs/settings" className="block">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                        <Settings className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Settings</h3>
                        <p className="text-sm text-muted-foreground">
                          Configure documentation
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Perform common tasks quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={action.href}>
                      {action.icon}
                      <span className="ml-2">{action.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest changes to documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New page created</p>
                    <p className="text-xs text-muted-foreground">
                      by John Doe • 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Category updated</p>
                    <p className="text-xs text-muted-foreground">
                      by Jane Smith • 5 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-0.5">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Documentation published
                    </p>
                    <p className="text-xs text-muted-foreground">
                      by Alex Johnson • 1 day ago
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
