'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { TRPCReactProvider } from '@/lib/trpc/react'
import { HeroUIProvider } from '@heroui/react'

export function Providers ({ children }: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <TRPCReactProvider>
      <HeroUIProvider locale='ja-JP' navigate={router.push}>
        {children}
      </HeroUIProvider>
    </TRPCReactProvider>
  )
}
