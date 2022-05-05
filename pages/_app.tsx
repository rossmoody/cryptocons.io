import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Layout from '../src/layout/Layout'
import { ActiveIconProvider } from '../src/providers/ActiveIconProvider'
import { IconFilterProvider } from '../src/providers/IconFilterProvider'
import { IconsProvider } from '../src/providers/IconsProvider'
import { IconTypeProvider } from '../src/providers/IconTypeProvider'
import '../src/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
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
