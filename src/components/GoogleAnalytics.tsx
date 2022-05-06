import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = () => (
    <React.Fragment>
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-3YHNQ0RCFM`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3YHNQ0RCFM');
      `}
        </Script>
    </React.Fragment>
)

export default GoogleAnalytics
