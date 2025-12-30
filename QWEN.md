# JCraft Project Context

## Project Overview

JCraft is a modern monorepo project built with Next.js, Vercel, Convex, Clerk, and Shadcn UI. It follows a monorepo architecture with separate apps and shared packages to promote code reusability and maintainability.

### Architecture

- **Monorepo Structure**: Uses pnpm workspaces to manage multiple applications and shared packages
- **Frontend**: Next.js 15+ with App Router, TypeScript, and Tailwind CSS
- **Authentication**: Clerk for user authentication and management
- **Database**: Convex for real-time database functionality
- **UI Components**: Custom Shadcn UI implementation with shared components
- **Deployment**: Vercel-ready configuration

### Directory Structure

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

## Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Deployment**: Vercel
- **Database**: Convex
- **Authentication**: Clerk
- **UI Components**: Shadcn UI (custom implementation)
- **Styling**: Tailwind CSS
- **Type Checking**: TypeScript
- **Package Manager**: pnpm
- **Icons**: Lucide React

## Security

The project has been updated to address CVE-2025-55182, a critical remote code execution vulnerability in React Server Components. Next.js has been updated to version 15.0.5 or later which contains the security patch.

## Building and Running

### Prerequisites

- Node.js >= 18.17.0 (as specified in .nvmrc)
- pnpm package manager

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add required environment variables for Convex and Clerk

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean all node_modules

## Development Conventions

### Code Structure

- Components are organized in the `packages/ui` directory
- Shared utilities are in `packages/utils`
- Shared types are in `packages/types`
- Configuration files are in `packages/config`

### Component Development

- New UI components should be added to the `packages/ui` directory
- Components should be properly exported in the `index.ts` file
- Follow the existing patterns for component structure and styling

### Adding Shadcn UI Components

To add new components from Shadcn UI, run:

```bash
cd apps/web
npx shadcn-ui@latest add [component-name]
```

The CLI will automatically install the component to the correct location and update import paths.

### Environment Variables

- Use `.env.local` for local development variables
- The `.env.example` file contains examples of required environment variables
- Never commit actual environment variable values to the repository

## Project Status

### Completed

- ✅ Initialize git repository
- ✅ Create monorepo structure (apps and packages directories)
- ✅ Set up package.json with workspaces
- ✅ Create shared packages (ui, types, utils, config)
- ✅ Set up main web app with Next.js
- ✅ Set up docs app with Next.js
- ✅ Configure TypeScript across the monorepo
- ✅ Configure Tailwind CSS
- ✅ Set up basic UI components (Button, Card, Input, Label)
- ✅ Integrate Clerk for authentication
- ✅ Integrate Convex for database
- ✅ Create .gitignore and .env.example
- ✅ Create documentation
- ✅ Configure shadcn/ui for monorepo
- ✅ Update to patched Next.js version for CVE-2025-55182

### Remaining Tasks

- [ ] Install and configure pnpm
- [ ] Set up ESLint and Prettier
- [ ] Add more UI components as needed
- [ ] Implement Convex schema and functions
- [ ] Set up CI/CD pipeline
- [ ] Add unit and integration tests
- [ ] Deploy to Vercel

## Key Files and Directories

- `package.json` - Root workspace configuration
- `pnpm-workspace.yaml` - Workspace definitions
- `apps/web/` - Main application
- `apps/docs/` - Documentation application
- `packages/ui/` - Shared UI components
- `packages/utils/` - Shared utilities
- `packages/types/` - Shared TypeScript types
- `packages/config/` - Shared configuration files

## Convex Integration

The project includes Convex integration with:

- Client setup in the main page component
- Environment variable for Convex URL
- Ready for schema and function implementation

## Clerk Integration

The project includes Clerk integration with:

- User authentication via UserButton component
- Ready for additional authentication flows

## UI Components

The project includes a custom Shadcn UI implementation with:

- Button component with variants
- Card component with header, title, description, content, and footer
- Input component
- Label component
- Utility functions for class name merging
