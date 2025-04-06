import 'server-only'

import { headers } from 'next/headers'
import { cache } from 'react'
import { TRPCError } from '@trpc/server'
import { createCaller } from '@/server/trpc/root'
import { createTRPCContext } from '@/server/trpc'

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  const heads = new Headers(await headers())
  heads.set('x-trpc-source', 'rsc')

  return createTRPCContext({
    headers: heads
  })
})

export const trpc = createCaller(createContext)

/**
 * To avoid leaking sensitive informations to clients, Next.js disguises unhundled exceptions
 * occurred in server components rendering.
 *
 * This handler returns error message when an error is thrown as `new TRPCError({ code, message })` manner,
 * or returns a general error message.
 */
export function errorHandler (error: Error) {
  console.error(error)

  if (error instanceof TRPCError && typeof error.cause === 'undefined') {
    return { error: error.message }
  }

  return { error: 'エラーが発生しました' }
}
