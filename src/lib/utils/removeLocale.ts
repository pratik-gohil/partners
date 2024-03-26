import hasLocale from "./hasLocale";

export const removeLocale = (pathname: string) => hasLocale(pathname) ? pathname.slice(3) : pathname