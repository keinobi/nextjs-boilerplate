import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { createCallerFactory, createTRPCRouter, publicProcedure } from '.'

export const appRouter = createTRPCRouter({
  time: publicProcedure.query(() => new Date())
})

// export type definition of API
export type AppRouter = typeof appRouter
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter)
