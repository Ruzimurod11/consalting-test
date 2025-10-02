"use client"

import { getQueryClient } from "@/lib/api/get-query-client"
import { QueryClientProvider } from "@tanstack/react-query"

export default function ReactQueryProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const queryClient = getQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
