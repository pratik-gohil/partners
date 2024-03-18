export const locales = ['en', 'hi', 'tm']

const hasLocale = (pathname: string) => {
    return locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
};

export default hasLocale