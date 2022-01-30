import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render () {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/site.webmanifest' />
        </Head>
        <body className='text-gray-800 bg-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
