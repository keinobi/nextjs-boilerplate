import Link from 'next/link'

export default function Home () {
  return (
    <div className='grid min-h-screen place-content-center'>
      <h1 className='text-9xl'>Hello.</h1>
      <Link href='/demo' className='text-lg underline'>Demo</Link>
    </div>
  )
}
