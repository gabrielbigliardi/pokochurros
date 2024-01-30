'use client'
import { SessionProvider } from 'next-auth/react'

export function AppProvider({ children }: any) {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}
