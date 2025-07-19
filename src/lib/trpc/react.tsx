'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { loggerLink, httpBatchStreamLink, createTRPCClient } from '@trpc/client'
import { createTRPCContext } from '@trpc/tanstack-react-query'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { useState } from 'react'
import SuperJSON from 'superjson'

import type { AppRouter } from '@/server/trpc/root'

const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10 mins
      gcTime: 1000 * 60 * 60 * 2, // 2 hours
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  }
})

let clientQueryClientSingleton: QueryClient | undefined

const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return createQueryClient()
  }

  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient())
}

export const {
  TRPCProvider,
  useTRPC
} = createTRPCContext<AppRouter>()

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>

export function TRPCReactProvider ({ children }: {
  children: React.ReactNode
}) {
  const queryClient = getQueryClient()

  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === 'development' ||
            (op.direction === 'down' && op.result instanceof Error)
        }),
        httpBatchStreamLink({
          transformer: SuperJSON,
          url: getBaseUrl() + '/api/trpc',
          headers: () => {
            const headers = new Headers()
            headers.set('x-trpc-source', 'nextjs-react')

            return headers
          }
        })
      ]
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {children}
      </TRPCProvider>
    </QueryClientProvider>
  )
}

function getBaseUrl () {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  return `http://localhost:${process.env.PORT ?? 3000}`
}
