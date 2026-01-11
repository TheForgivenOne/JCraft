# JCraft - Premium Craftsmanship Website

JCraft is a personal business website for a skilled craftsman, designed to showcase exceptional craftsmanship and custom creations. The site features a portfolio of work, contact capabilities, and user dashboard. The design implements the HTML mockups provided with a focus on responsive design and dark mode support.

## Features

- **Portfolio Showcase**: Display crafted items with images and descriptions
- **Contact Form**: Allow customers to reach out for custom orders
- **Responsive Design**: Works on all device sizes
- **Dark Mode Support**: Automatic dark/light mode based on system preference
- **Dashboard**: User management interface
- **Modern UI**: Clean, accessible interface with semantic HTML

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols
- **Fonts**: Work Sans
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd jcraft
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/             # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── Portfolio/
│   ├── Contact/
│   └── UI/
├── lib/                    # Utility functions
├── types/                  # Type definitions
└── hooks/                  # Custom React hooks
```

## Development

This project follows a modular, expandable, and dynamic structure with simple, relevant file names that reflect functionality. When adding new features, create appropriate components in the `/components` directory and corresponding pages in the `/app` directory.

## Future Plans

- Add e-commerce capabilities
- Implement advanced filtering and search
- Add customer reviews and ratings
- Enhance dashboard functionality

## Continuous Integration

This project uses GitHub Actions for continuous integration. The CI workflow includes:

- Code linting with ESLint
- Type checking with TypeScript
- Production build validation
- Security scanning with CodeQL and truffleHog
- Dependency vulnerability auditing
- Code quality checks with Prettier and Knip
- Performance testing with Lighthouse CI
- Automated dependency updates with Dependabot
- Automated release creation when tags are pushed

The workflow runs on every push and pull request to the main branch.

## Git Hooks with Husky

This project uses Husky to run automated checks before commits and pushes:

- **Pre-commit**: Runs linting and type checking on staged files
- **Pre-push**: Runs build validation and comprehensive linting

These hooks help maintain code quality by catching issues early in the development process.

## Contributing

1. Fork the repository
2. After cloning, run `npx husky install` to set up Git hooks (only needed once after initial clone)
3. Create a feature branch (`git checkout -b feat/amazing-feature`)
4. Make your changes
5. Ensure your code passes linting (`npm run lint`)
6. Run type checking (`npx tsc --noEmit`)
7. Test the build (`npm run build`)
8. Commit your changes (`git commit -m 'Add amazing feature'`) - this will trigger pre-commit checks
9. Push to the branch (`git push origin feat/amazing-feature`) - this will trigger pre-push checks
10. Open a Pull Request

## License

This project is proprietary and all rights are reserved. Redistribution, commercial use, and modification of this software are prohibited without explicit written permission from the copyright holder.

For licensing inquiries, please contact the project owner.
