import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';
import { Button } from '@jcraft/ui/button';
import { Search, Plus, MoreHorizontal, User, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function DocsUsersPage() {
  // Mock data for documentation contributors
  const contributors = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", pages: 12, lastActive: "2023-10-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", pages: 8, lastActive: "2023-10-14" },
    { id: 3, name: "Alex Johnson", email: "alex@example.com", role: "Editor", pages: 15, lastActive: "2023-10-12" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", role: "Contributor", pages: 5, lastActive: "2023-10-10" },
    { id: 5, name: "Mike Brown", email: "mike@example.com", role: "Contributor", pages: 3, lastActive: "2023-10-08" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Documentation Contributors</h1>
          <p className="text-muted-foreground">
            Manage team members with access to documentation
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/docs/users/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Contributor
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="grid grid-cols-2 gap-4">
          <div>
            <CardTitle>Manage Contributors</CardTitle>
            <CardDescription>
              View and manage documentation team members
            </CardDescription>
          </div>
          <div className="flex items-center justify-end">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search contributors..."
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
                  <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Role</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Pages</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Last Active</th>
                  <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contributors.map((contributor) => (
                  <tr key={contributor.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-full mr-3">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        {contributor.name}
                      </div>
                    </td>
                    <td className="p-4">{contributor.email}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        contributor.role === 'Admin' ? 'bg-red-100 text-red-800' :
                        contributor.role === 'Editor' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {contributor.role}
                      </span>
                    </td>
                    <td className="p-4">{contributor.pages}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        {contributor.lastActive}
                      </div>
                    </td>
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
