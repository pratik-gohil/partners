'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.preconnect('https://www.miraeassetpartners.com')
    ReactDOM.prefetchDNS('https://www.miraeassetpartners.com'

    )
    ReactDOM.preconnect('https://www.googletagmanager.com')
    ReactDOM.prefetchDNS('https://www.googletagmanager.com')

    ReactDOM.preconnect('https://www.google-analytics.com')
    ReactDOM.prefetchDNS('https://www.google-analytics.com')

    ReactDOM.preload("/OpenSans.woff2", {
        as: "font"
    })

    return null
}