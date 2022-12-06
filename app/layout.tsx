import {
  GoogleTagManager,
  GoogleTagManagerNoScript
} from './GoogleTagManager'
import { Header } from './Header'
import '@/styles/main.css'

export default function RootLayout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <head>
        <meta name='viewport' content='width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <GoogleTagManager />
      </head>
      <body className='bg-white text-gray-800'>
        <GoogleTagManagerNoScript />
        <Header />
        {children}
      </body>
    </html>
  )
}
