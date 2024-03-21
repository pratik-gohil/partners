export const locales = ['en', 'hi', 'tm']

const hasLocale = (pathname: string) => {
    return locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
};

export default hasLocale