import { Open_Sans, Nunito } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    adjustFontFallback: true,
    fallback: ["sans-serif"],
    style: "normal",
    weight: ["400", "500", "600", "700"]
})

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    preload: false,
    adjustFontFallback: true,
    fallback: ["sans-serif"],
    style: "normal",
    weight: '700'
})



export {
    openSans,
    nunito
}