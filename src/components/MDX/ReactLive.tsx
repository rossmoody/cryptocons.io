import dracula from 'prism-react-renderer/themes/dracula'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import {
    Binance,
    BinanceBadge,
    Cryptocon,
    CryptoconBadge,
    CryptoconLogo,
} from '../../../cryptocons/src'

const scope = {
    Binance,
    BinanceBadge,
    Cryptocon,
    CryptoconBadge,
    CryptoconLogo,
}

type Props = {
    code: string
}

const ReactLive = ({ code }: Props) => {
    const transformCode = (code: string) =>
        `<div className='flex gap-4 items-center'>${code}</div>`

    return (
        <LiveProvider
            code={code.trim()}
            scope={scope}
            language="jsx"
            transformCode={transformCode}
            disabled
        >
            <div className="flex brdr border-2 align-middle justify-center p-12 rounded-t-md">
                <LivePreview />
            </div>
            <LiveError />
            <LiveEditor
                theme={dracula}
                className="rounded-b-md"
                style={{ padding: '12px 24px' }}
            />
        </LiveProvider>
    )
}

export default ReactLive
