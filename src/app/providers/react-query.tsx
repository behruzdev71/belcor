import { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { queryClient } from '@/shared/libs/query-client'

const Provider = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools buttonPosition='bottom-left'/>
            {children}
        </QueryClientProvider>
    )
}

export default Provider