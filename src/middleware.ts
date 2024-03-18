import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import hasLocale, { locales } from "./lib/utils/hasLocale";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  const defaultLocale = "en"

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = match(languages, locales, defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = hasLocale(pathname)

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  if (locale === 'en') {
    return NextResponse.rewrite(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }

  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /pricing
  // The new URL is now /en/pricing
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)',
    '/(hi|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}