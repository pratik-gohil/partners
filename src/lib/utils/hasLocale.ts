export const language_locale = {
    'en': "English",
    'hi': "Hindi",
    'gu': 'Gujarati',
    'tm': "Tamil"
}

export const locales = Object.keys(language_locale)

export const languages = Object.values(language_locale)

const hasLocale = (pathname: string) => {
    return locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
};

export default hasLocale