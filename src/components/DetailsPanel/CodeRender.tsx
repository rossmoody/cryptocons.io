import { Prism } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

type Props = {
    children: string
}

const CodeRender = (props: Props) => {
    return (
        <Prism
            language="jsx"
            style={dracula}
            customStyle={{
                fontSize: '14px',
                margin: 0,
                height: '100%',
                borderRadius: 0,
                padding: '24px 24px 60px',
            }}
            wrapLongLines
        >
            {props.children}
        </Prism>
    )
}

export default CodeRender
