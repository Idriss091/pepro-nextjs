import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];

  if (host === "www.pepro.fr") {
    const redirectUrl = new URL(request.url);
    redirectUrl.protocol = "https:";
    redirectUrl.hostname = "pepro.fr";
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Preserve Next.js' route-specific caching and revalidation headers.
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
