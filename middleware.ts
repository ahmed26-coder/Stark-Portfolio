import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";
  const pathname = request.nextUrl.pathname;

  const isStaticAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/trpc") ||
    pathname.startsWith("/_vercel") ||
    pathname.match(/\.\w+$/); // exclude static files

  // Get locale from path or fallback
  const locale =
    routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) ??
    routing.defaultLocale;

  const isComingSoonPage = pathname === `/${locale}/coming-soon`;

  // ✅ If maintenance mode is on, redirect everything except coming soon
  if (isMaintenance && !isComingSoonPage && !isStaticAsset) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/coming-soon`;
    return NextResponse.redirect(url);
  }

  // ✅ Otherwise, use next-intl middleware normally
  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!.*\\..*|_next|api|trpc|_vercel).*)",
};
