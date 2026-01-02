'use client';

import { Button } from '@jcraft/ui';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@jcraft/ui';
import {
  BookOpen,
  FolderGit,
  Server,
  Shield,
  Palette,
  Code,
} from 'lucide-react';

export default function DocsPage() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Comprehensive Documentation',
      description: 'Detailed guides and API references for all components',
    },
    {
      icon: <FolderGit className="h-6 w-6" />,
      title: 'Monorepo Structure',
      description: 'Well-organized codebase with shared packages',
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Modern Stack',
      description: 'Built with Next.js, Convex, and Clerk',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Auth',
      description: 'Clerk-powered authentication system',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'UI Components',
      description: 'Beautifully designed Shadcn UI components',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Type Safe',
      description: 'Full TypeScript support throughout',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            JCraft Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your comprehensive guide to the JCraft project
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Source
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Project Overview</CardTitle>
            <CardDescription>
              Learn about the architecture and technologies used in JCraft
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <h2>Getting Started</h2>
              <p>
                This documentation site provides information about the JCraft
                project, including setup instructions, API documentation, and
                best practices.
              </p>

              <h3>Project Structure</h3>
              <p>The JCraft monorepo is organized as follows:</p>
              <ul>
                <li>
                  <code className="bg-muted px-1.5 py-0.5 rounded">
                    apps/web
                  </code>{' '}
                  - Main Next.js web application
                </li>
                <li>
                  <code className="bg-muted px-1.5 py-0.5 rounded">
                    apps/docs
                  </code>{' '}
                  - Documentation site
                </li>
                <li>
                  <code className="bg-muted px-1.5 py-0.5 rounded">
                    packages/ui
                  </code>{' '}
                  - Shared UI components
                </li>
                <li>
                  <code className="bg-muted px-1.5 py-0.5 rounded">
                    packages/utils
                  </code>{' '}
                  - Shared utilities
                </li>
                <li>
                  <code className="bg-muted px-1.5 py-0.5 rounded">
                    packages/types
                  </code>{' '}
                  - Shared TypeScript types
                </li>
                <li>
                  <code className="bg-muted px-1.5 py-0.5 rounded">
                    packages/config
                  </code>{' '}
                  - Shared configuration
                </li>
              </ul>

              <h3>Technologies Used</h3>
              <p>The JCraft project utilizes the following technologies:</p>
              <ul>
                <li>Next.js 14 with App Router</li>
                <li>Vercel for deployment</li>
                <li>Convex for database</li>
                <li>Clerk for authentication</li>
                <li>Shadcn UI for components</li>
                <li>Tailwind CSS for styling</li>
                <li>TypeScript for type safety</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
