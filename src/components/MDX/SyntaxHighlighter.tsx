import { Prism } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import ReactLive from './ReactLive'

type Props = {
    children: string
    className?: string
}

const SyntaxHighlighter = (props: Props) => {
    const language = props.className?.replace(/language-/, '')

    switch (language) {
        case undefined:
            return <code {...props} />

        case 'react-live':
            return <ReactLive code={props.children} />

        default:
            return (
                <Prism
                    language={language}
                    style={dracula}
                    PreTag={(props: any) => <div {...props} />}
                >
                    {props.children}
                </Prism>
            )
    }
}

export default SyntaxHighlighter
