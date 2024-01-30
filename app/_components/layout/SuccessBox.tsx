import React from 'react'

export default function SuccessBox({ children }: any) {
    return (
        <div className="text-center bg-green-200 p-4 rounded-lg border border-green-300">{children}</div>
    )
}
