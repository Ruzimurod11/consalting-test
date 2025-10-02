import fetchInstance from "./fetch-instance"

// Helper function to handle query string serialization
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeParams(params: Record<string, any>): string {
    const urlParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            // Handle arrays (comma-separated like your qs config)
            urlParams.append(key, value.join(","))
        } else if (value !== undefined && value !== null) {
            urlParams.append(key, String(value))
        }
    })

    return urlParams.toString()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CustomFetchConfig = RequestInit & { params?: Record<string, any> }

// API request functions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRequest = async <T = any>(
    url: string,
    config?: CustomFetchConfig,
): Promise<T> => {
    let finalUrl = `${url}/`

    // Handle query parameters (currency removed)
    if (config?.params) {
        const queryString = serializeParams(config.params)
        if (queryString) {
            finalUrl += `?${queryString}`
        }
    }

    const response = await fetchInstance.get(finalUrl, config)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}

export const postRequest = async <T>(
    url: string,
    payload: T,
    config: RequestInit = {},
) => {
    const response = await fetchInstance.post(`${url}/`, payload, {
        headers: {
            "Content-Type": "application/json",
        },
        ...config,
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}

export const putRequest = async <T>(
    url: string,
    payload: T,
    config?: RequestInit,
) => {
    const response = await fetchInstance.put(`${url}/`, payload, config)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}

export const patchRequest = async <T>(
    url: string,
    payload: T,
    config?: RequestInit,
) => {
    const response = await fetchInstance.patch(`${url}/`, payload, config)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}

export const deleteRequest = async <T>(
    url: string,
    payload?: T,
    config?: RequestInit,
) => {
    const response = await fetchInstance.delete(`${url}/`, payload, config)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}
