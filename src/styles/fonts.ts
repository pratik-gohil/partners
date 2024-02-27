import localFont from 'next/font/local'

const OpenSansRegular = localFont({
    src: '../fonts/OpenSans-Regular.woff2',
    style: 'normal',
    adjustFontFallback: 'Times New Roman',
    fallback: ['sans-serif'],
    preload: true,
    weight: '400',
    variable: '--OpenSansRegular'
})

const OpenSansMedium = localFont({
    src: '../fonts/OpenSans-Medium.woff2',
    style: 'normal',
    adjustFontFallback: 'Times New Roman',
    fallback: ['sans-serif'],
    preload: true,
    weight: '500',
    variable: '--OpenSansMedium'
})

const OpenSansSemiBold = localFont({
    src: '../fonts/OpenSans-SemiBold.woff2',
    style: 'normal',
    adjustFontFallback: 'Times New Roman',
    fallback: ['sans-serif'],
    preload: true,
    weight: '600',
    variable: '--OpenSansSemiBold'
})

const OpenSansBold = localFont({
    src: '../fonts/OpenSans-Bold.woff2',
    style: 'normal',
    adjustFontFallback: 'Times New Roman',
    fallback: ['sans-serif'],
    preload: true,
    weight: '700',
    variable: '--OpenSansBold'
})

const NunitoBold = localFont({
    src: '../fonts/Nunito-Bold.woff2',
    style: 'normal',
    adjustFontFallback: 'Times New Roman',
    fallback: ['sans-serif'],
    preload: true,
    weight: '700',
    variable: '--NunitoBold'
})

export { OpenSansRegular, OpenSansMedium, OpenSansSemiBold, OpenSansBold, NunitoBold }