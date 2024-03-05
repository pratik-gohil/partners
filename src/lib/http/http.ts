function http(url: string | URL | Request, init?: RequestInit): Promise<Response> {
    return (
        typeof url === 'string' && url.startsWith('/')
            ? fetch(process.env.NEXT_PUBLIC_BASE_URL + url, init)
            : fetch(url, init)
    )
}

export default http;