# JCraft - E-commerce Store

A modern e-commerce platform built with Next.js, Vercel, Convex, Clerk, and Shadcn UI.

## Project Structure

```
apps/
├── web/          # Main Next.js web application
├── docs/         # Documentation site
packages/
├── ui/           # Shared UI components
├── types/        # Shared TypeScript types
├── utils/        # Shared utilities
└── config/       # Shared configuration
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Deployment**: Vercel
- **Database**: Convex
- **Authentication**: Clerk
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Type Checking**: TypeScript
- **Package Manager**: pnpm

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Security Notice

**Important Security Update**: This project has been updated to address CVE-2025-55182, a critical remote code execution vulnerability in React Server Components. Next.js has been updated to version 15.0.5 or later which contains the security patch. For more information about this vulnerability, see the [React security blog post](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components).

## Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean all node_modules
