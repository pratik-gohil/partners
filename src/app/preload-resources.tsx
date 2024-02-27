'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.preconnect('https://www.miraeassetpartners.com')
    ReactDOM.prefetchDNS('https://www.miraeassetpartners.com')

    return null
}