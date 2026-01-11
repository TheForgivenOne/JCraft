# JCraft - Premium Craftsmanship Website

JCraft is a personal business website for a skilled craftsman, designed to showcase exceptional craftsmanship and custom creations. The site features a portfolio of work, contact capabilities, and user authentication. In the future, it may expand to become a marketplace for multiple craftsmen.

## Features

- **Portfolio Showcase**: Display crafted items with images and descriptions
- **Contact Form**: Allow customers to reach out for custom orders
- **Authentication**: Secure user accounts with Clerk
- **Database Integration**: Store portfolio items and user data with Convex
- **Responsive Design**: Works on all device sizes
- **Dashboard**: User management interface

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Convex
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

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Then add your Clerk and Convex credentials:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `CONVEX_DEPLOYMENT_URL`
   - `CONVEX_PRIVATE_KEY`

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

You'll need to create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
CONVEX_DEPLOYMENT_URL=https://your-convex-app.convex.cloud
CONVEX_PRIVATE_KEY=your_convex_private_key
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/             # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── Portfolio/
│   ├── Contact/
│   ├── Auth/
│   └── UI/
├── lib/                    # Utility functions
├── types/                  # Type definitions
├── hooks/                  # Custom React hooks
└── convex/                 # Convex database schema and queries
```

## Development

This project follows a modular, expandable, and dynamic structure with simple, relevant file names that reflect functionality. When adding new features, create appropriate components in the `/components` directory and corresponding pages in the `/app` directory.

## Future Plans

- Expand to a marketplace supporting multiple craftsmen
- Add e-commerce capabilities
- Implement advanced filtering and search
- Add customer reviews and ratings

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feat/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.