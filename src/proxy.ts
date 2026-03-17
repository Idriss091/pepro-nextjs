import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;

function shouldBypassCacheControl(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    PUBLIC_FILE_PATTERN.test(pathname)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldBypassCacheControl(pathname)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Prevent CDN/browser HTML caching from serving an old document after a new deploy.
  response.headers.set(
    "Cache-Control",
    "private, no-cache, no-store, max-age=0, must-revalidate",
  );

  return response;
}

export const config = {
  matcher: "/:path*",
};
