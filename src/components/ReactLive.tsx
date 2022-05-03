import { Language } from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import {
    Binance,
    BinanceBadge,
    Cryptocon,
    CryptoconBadge,
    CryptoconLogo,
} from '../../cryptocons/src'

type Props = {
    code: string
    preview?: boolean
    language?: Language
}

const scope = {
    Binance,
    BinanceBadge,
    Cryptocon,
    CryptoconBadge,
    CryptoconLogo,
}

const ReactLive = ({ code, preview = true, language = 'jsx' }: Props) => (
    <LiveProvider code={code.trim()} scope={scope} language={language}>
        {preview && (
            <>
                <div className="flex brdr border-2 align-middle justify-center p-12 rounded-t-md">
                    <LivePreview />
                </div>
                <LiveError />
            </>
        )}
        <LiveEditor theme={dracula} className="rounded-b-md" />
    </LiveProvider>
)

export default ReactLive
