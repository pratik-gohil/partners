'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.preconnect('https://www.miraeassetpartners.com')
    ReactDOM.prefetchDNS('https://www.miraeassetpartners.com')

    ReactDOM.preload("/OpenSans.woff2", {
        as: "font"
    })

    // ReactDOM.preconnect('https://www.googletagmanager.com')
    // ReactDOM.prefetchDNS('https://www.googletagmanager.com')

    // ReactDOM.preconnect('https://www.google-analytics.com')
    // ReactDOM.prefetchDNS('https://www.google-analytics.com')

    // ReactDOM.preload("https://www.googletagmanager.com/gtm.js?id=GTM-NTX7SZZG", {
    //     as: "script"
    // })

    return null
}