import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Layout from '../src/layout/Layout'
import { ActiveIconProvider } from '../src/providers/ActiveIconProvider'
import { IconsProvider } from '../src/providers/IconsProvider'
import { IconTypeProvider } from '../src/providers/IconTypeProvider'
import '../src/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <IconTypeProvider>
                <IconsProvider>
                    <ActiveIconProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ActiveIconProvider>
                </IconsProvider>
            </IconTypeProvider>
        </ThemeProvider>
    )
}
