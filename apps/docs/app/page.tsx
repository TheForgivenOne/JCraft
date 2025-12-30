import { Button } from '@jcraft/ui';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@jcraft/ui';

export default function DocsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">JCraft Documentation</CardTitle>
          <CardDescription>
            Welcome to the documentation for the JCraft project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <h2>Getting Started</h2>
            <p>
              This documentation site provides information about the JCraft project,
              including setup instructions, API documentation, and best practices.
            </p>
            
            <h3>Project Structure</h3>
            <p>
              The JCraft monorepo is organized as follows:
            </p>
            <ul>
              <li><code>apps/web</code> - Main Next.js web application</li>
              <li><code>apps/docs</code> - Documentation site</li>
              <li><code>packages/ui</code> - Shared UI components</li>
              <li><code>packages/utils</code> - Shared utilities</li>
              <li><code>packages/types</code> - Shared TypeScript types</li>
              <li><code>packages/config</code> - Shared configuration</li>
            </ul>
            
            <h3>Technologies Used</h3>
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
    </main>
  );
}