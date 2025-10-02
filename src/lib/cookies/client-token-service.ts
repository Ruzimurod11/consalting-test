const ACCESS_TOKEN_KEY = "ACCESS_TOKEN"
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN"

export const ClientTokenService = {
    // Access Token methods
    getAccessToken: (): string | null => {
        return localStorage.getItem(ACCESS_TOKEN_KEY)
    },

    setAccessToken: (token: string): void => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token)
    },

    removeAccessToken: (): void => {
        localStorage.removeItem(ACCESS_TOKEN_KEY)
    },

    // Refresh Token methods
    getRefreshToken: (): string | null => {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    setRefreshToken: (token: string): void => {
        localStorage.setItem(REFRESH_TOKEN_KEY, token)
    },

    removeRefreshToken: (): void => {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    },

    // Utility methods
    clearAllTokens: (): void => {
        ClientTokenService.removeAccessToken()
        ClientTokenService.removeRefreshToken()
    },

    hasTokens: (): boolean => {
        return !!(
            ClientTokenService.getAccessToken() &&
            ClientTokenService.getRefreshToken()
        )
    },
}
