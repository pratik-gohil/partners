function http(url: string | URL | Request, init: RequestInit = {}, {ssr}: {ssr: boolean} = {ssr: false}): Promise<Response> {
    return (
        typeof url === 'string' && url.startsWith('/')
            ? fetch((ssr ? process.env.BASE_URL : process.env.NEXT_PUBLIC_BASE_URL)  + url, init)
            : fetch(url, init)
    )
}

export default http;