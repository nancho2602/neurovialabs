import Script from "next/script"

export default function Analytics() {
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    return null
  }
  const id = process.env.NEXT_PUBLIC_GA_ID
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  )
}
