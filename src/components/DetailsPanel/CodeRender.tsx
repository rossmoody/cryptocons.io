import { Prism } from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

type Props = {
    children: string
}

const CodeRender = (props: Props) => (
    <Prism
        language="jsx"
        style={theme}
        wrapLongLines
        customStyle={{
            fontSize: '14px',
            margin: 0,
            borderRadius: 0,
            padding: '24px 24px 100px',
        }}
    >
        {props.children}
    </Prism>
)

export default CodeRender
