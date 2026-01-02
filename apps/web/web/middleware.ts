import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhook',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/products(.*)', // Allow access to all product pages
    '/categories(.*)', // Allow access to all category pages
    '/search(.*)', // Allow access to search functionality
    '/cart(.*)', // Allow access to cart (guests can add items)
    '/checkout(.*)', // Allow access to checkout (for guest checkout)
    '/deals(.*)', // Allow access to deals/promotions
  ]
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
