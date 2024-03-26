export const locales = ['en', 'hi', 'gu' ,'tm']

const hasLocale = (pathname: string) => {
    return locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
};

export default hasLocale