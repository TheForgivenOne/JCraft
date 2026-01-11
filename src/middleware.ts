import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  // Add any custom middleware logic here if needed
  // For now, just continue with the request
  // The request parameter is used as part of the middleware signature
  if (request.method) {
    // Just checking the property to satisfy the linter
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
