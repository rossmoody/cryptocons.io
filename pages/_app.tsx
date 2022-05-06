import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import GoogleAnalytics from '../src/components/GoogleAnalytics'
import Layout from '../src/layout/Layout'
import { ActiveIconProvider } from '../src/providers/ActiveIconProvider'
import { IconFilterProvider } from '../src/providers/IconFilterProvider'
import { IconsProvider } from '../src/providers/IconsProvider'
import { IconTypeProvider } from '../src/providers/IconTypeProvider'
import '../src/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <DefaultSeo
                title="Cryptocons"
                description="Tidy cryptocurrency logos and icons for your next React project."
                canonical="https://cryptocons.io"
                openGraph={{
                    title: 'Cryptocons',
                    description:
                        'Tidy cryptocurrency logos and icons for your next React project.',
                    images: [
                        {
                            url: 'https://cryptocons.io/images/og-image.png',
                            width: 1200,
                            height: 675,
                            alt: 'Cryptocons Open Graph Image',
                            type: 'image/png',
                        },
                    ],
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://cryptocons.io',
                    site_name: 'Cryptocons',
                }}
                twitter={{
                    handle: '@_rossmoody',
                    cardType: 'summary_large_image',
                }}
            />
            <GoogleAnalytics />
            <IconTypeProvider>
                <IconsProvider>
                    <ActiveIconProvider>
                        <IconFilterProvider>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </IconFilterProvider>
                    </ActiveIconProvider>
                </IconsProvider>
            </IconTypeProvider>
        </ThemeProvider>
    )
}
