import config from "../../../next.config.mjs";

function http(url: string | URL | Request, init?: RequestInit): Promise<Response> {
    return (
        typeof url === 'string' && url.startsWith('/')
            ? fetch(config.baseUrl + url, init)
            : 
            fetch(url, init)
    )
}

export default http;