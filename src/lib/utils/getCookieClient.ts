"client only"
export const getCookieClient = (key: string) => {
    if (typeof window !== 'undefined') {
        return ('; ' + document.cookie).split(`; ${key}=`).pop()?.split(';')[0]
    }
    return ""
}