import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const russianOnlyFunnels = new Set(["v2", "v3"]);

function getRussianOnlyFunnel(pathname: string) {
  const match = pathname.match(/^\/(?:(ru|cs)\/)?lp\/([^/]+)\/?$/);

  if (!match) {
    return null;
  }

  const [, localePrefix, slug] = match;

  if (!russianOnlyFunnels.has(slug)) {
    return null;
  }

  return { localePrefix, slug };
}

export default function middleware(request: NextRequest) {
  const funnel = getRussianOnlyFunnel(request.nextUrl.pathname);

  if (funnel) {
    const canonicalPath = `/lp/${funnel.slug}`;

    if (funnel.localePrefix) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = canonicalPath;
      return NextResponse.redirect(redirectUrl, 308);
    }

    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/ru${canonicalPath}`;
    return NextResponse.rewrite(rewriteUrl);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
