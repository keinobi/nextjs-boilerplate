'use client'

import { useTRPC } from '@/lib/trpc/react'
import { useQuery } from '@tanstack/react-query'

export default function Page () {
  const trpc = useTRPC()
  const { data: time, isPending, isError } = useQuery(trpc.time.queryOptions(undefined, { staleTime: 5000 }))

  if (isPending) {
    return (
      <div>...loading</div>
    )
  }

  if (isError) {
    return (
      <div>Error.</div>
    )
  }

  return (
    <div>{time.toLocaleString()}</div>
  )
}
