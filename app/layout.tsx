import '@/styles/main.css'

export default function RootLayout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className='text-gray-800 bg-white'>
        {children}
      </body>
    </html>
  )
}
