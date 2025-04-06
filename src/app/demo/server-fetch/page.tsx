import { trpc } from '@/lib/trpc/server'

export default async function Page () {
  const time = await trpc.time()

  return (
    <div>{time.toLocaleString('ja-JP')}</div>
  )
}
