import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Layout } from '../src/layout/Layout'
import { IconsProvider } from '../src/providers/IconsProvider'
import { IconTypeProvider } from '../src/providers/IconTypeProvider'
import '../src/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <IconTypeProvider>
                <IconsProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </IconsProvider>
            </IconTypeProvider>
        </ThemeProvider>
    )
}
