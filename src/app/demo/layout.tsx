import Link from 'next/link'
import React from 'react'

export default function DemoLayout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header className='container mx-auto flex h-16 items-center gap-4 px-6'>
        <Link href='/demo/server-fetch' className='underline'>Server Fetch</Link>
        <Link href='/demo/client-fetch' className='underline'>Client Fetch</Link>
      </header>
      <div className='container mx-auto p-6'>
        {children}
      </div>
    </div>
  )
}
