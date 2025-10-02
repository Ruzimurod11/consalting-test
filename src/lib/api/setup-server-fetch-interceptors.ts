"use server"

import { getLocale } from "next-intl/server"
import fetchInstance from "./fetch-instance"

// Setup server-side interceptors
export async function setupServerFetchInterceptors() {
    // Get locale before adding the interceptor
    const locale = await getLocale()

    // Request interceptor
    fetchInstance.addRequestInterceptor((config) => {
        return {
            ...config,
            headers: {
                ...config.headers,
                "Accept-Language": locale,
            },
        }
    })

    // Response interceptor
    fetchInstance.addResponseInterceptor({
        fulfilled: (response) => {
            if (response?.status === 401) {
                // Agar kerak bo‘lsa shu yerda 401 uchun boshqa custom handling yozishingiz mumkin
            }
            return response
        },
        rejected: async (error) => {
            console.error("Server fetch error:", error)
            throw error
        },
    })
}

// Initialize interceptors
// await setupServerFetchInterceptors()
