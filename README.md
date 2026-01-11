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

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feat/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.