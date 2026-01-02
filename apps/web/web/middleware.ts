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
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
