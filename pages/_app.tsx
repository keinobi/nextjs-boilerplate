import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '@/styles/main.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo title='App' />
      <Component {...pageProps} />
    </>
  )
}
