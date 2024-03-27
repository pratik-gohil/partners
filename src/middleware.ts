import { NextRequest, NextResponse, userAgent } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import hasLocale, { locales } from "./lib/utils/hasLocale";
import { translatePages } from "./lib/constants/common";
import { removeLocale } from "./lib/utils/removeLocale";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  const defaultLocale = "en"

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = match(languages, locales, defaultLocale)
  return locale
}

const setLocale = (response: NextResponse<unknown>, locale: string, pathname: string) => {
  const path = removeLocale(pathname) || "/"
  if (translatePages.includes(path)) {
    response.cookies.set("locale", locale);
  }
  return response
}

export function middleware(request: NextRequest) {
  const { device } = userAgent(request)
  const agent = device.type || "desktop"

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl

  const pathnameHasLocale = hasLocale(pathname)

  if (pathnameHasLocale) {
    const response = NextResponse.next()
    response.cookies.set('userAgent', agent)
    return setLocale(response, pathnameHasLocale, pathname)
  }

  // Redirect if there is no locale
  const locale = getLocale(request)
  if (locale === 'en') {
    const response = NextResponse.rewrite(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
    response.cookies.set('userAgent', agent)
    return setLocale(response, locale, pathname)
  }

  request.nextUrl.pathname = `/${locale}${pathname}`

  let response = NextResponse.redirect(request.nextUrl)
  response.cookies.set('userAgent', agent)
  return setLocale(response, locale, pathname)
}

export const config = {
  matcher: [
    '/(hi|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}