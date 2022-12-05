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
      </head>
      <body className='bg-white text-gray-800'>
        <Header />
        {children}
      </body>
    </html>
  )
}
