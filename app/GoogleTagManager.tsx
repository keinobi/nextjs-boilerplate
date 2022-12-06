import Script from 'next/script'

const containerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || ''

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function GoogleTagManager () {
  if (!containerId) {
    return
  }

  return (
    <Script id='gtm'>
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${containerId}');
      `}
    </Script>
  )
}

export function GoogleTagManagerNoScript () {
  if (!containerId) {
    return
  }

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}
    />
  )
}
