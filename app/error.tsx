'use client'

import { useEffect } from 'react'

export default function Error ({ error, reset }: {
  error: Error,
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='p-4'>
      <p>Error: {error?.message}</p>
      <button className='p-2 border border-current rounded' type='button' onClick={() => reset()}>Try Again</button>
    </div>
  )
}
