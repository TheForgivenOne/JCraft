import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, req) => {
  // Get the pathname of the request
  const { pathname } = req.nextUrl;

  // Define public routes that don't require authentication
  const isPublicRoute =
    pathname === '/' ||
    pathname.startsWith('/api/webhook') ||
    pathname.startsWith('/sign-in') ||
    pathname.startsWith('/sign-up') ||
    pathname.startsWith('/products') ||
    pathname.startsWith('/categories') ||
    pathname.startsWith('/search') ||
    pathname.startsWith('/cart') ||
    pathname.startsWith('/checkout') ||
    pathname.startsWith('/deals');

  // If it's a public route, return nothing (allow access)
  if (isPublicRoute) {
    return;
  }

  // For all other routes, require authentication
  // Clerk will handle the authentication logic
});

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - images, other media files, and other static extensions
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:css|js|png|svg|jpg|jpeg|gif|webp|ico|ttf|woff|woff2)$).*)',
  ],
};
