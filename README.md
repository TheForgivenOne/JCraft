# JCraft

A monorepo for the JCraft project, built with Next.js, Vercel, Convex, Clerk, and Shadcn UI.

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

## Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean all node_modules