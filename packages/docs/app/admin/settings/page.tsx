import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui/card';
import { Button } from '@jcraft/ui/button';
import { Settings, Globe, Lock, Eye, Code, Save } from 'lucide-react';

export default function DocsSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documentation Settings</h1>
        <p className="text-muted-foreground">
          Configure how your documentation site behaves and appears
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-primary" />
                <CardTitle>General Settings</CardTitle>
              </div>
              <CardDescription>
                Configure the basic information and behavior of your documentation site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Site Title</label>
                  <input
                    type="text"
                    defaultValue="JCraft Documentation"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Site Description</label>
                  <textarea
                    defaultValue="Your comprehensive guide to the JCraft project"
                    className="w-full p-2 border rounded-md min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Default Language</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                <CardTitle>Access Control</CardTitle>
              </div>
              <CardDescription>
                Manage who can view and edit your documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Public Access</h3>
                    <p className="text-sm text-muted-foreground">Allow anyone to view documentation</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Require Authentication</h3>
                    <p className="text-sm text-muted-foreground">Users must log in to edit</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Allow Comments</h3>
                    <p className="text-sm text-muted-foreground">Enable user comments on pages</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-primary" />
                <CardTitle>Appearance</CardTitle>
              </div>
              <CardDescription>
                Customize the look and feel of your documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Theme</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Primary Color</label>
                  <div className="flex space-x-2">
                    {['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'].map((color) => (
                      <div
                        key={color}
                        className="w-8 h-8 rounded-full border cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Logo</label>
                  <div className="border-2 border-dashed rounded-md p-4 text-center">
                    <p className="text-sm text-muted-foreground">Upload logo (SVG, PNG, JPG)</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                <CardTitle>Advanced</CardTitle>
              </div>
              <CardDescription>
                Technical settings for your documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Enable Search</h3>
                    <p className="text-sm text-muted-foreground">Include search functionality</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Versioning</h3>
                    <p className="text-sm text-muted-foreground">Track documentation versions</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Analytics</h3>
                    <p className="text-sm text-muted-foreground">Track page views and engagement</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
