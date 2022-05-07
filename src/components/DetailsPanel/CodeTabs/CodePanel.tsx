import { Tab } from '@headlessui/react'
import React from 'react'
import CodeRender from '../CodeRender'

type Props = {
    code: string
}

const CodePanel = ({ code }: Props) => {
    const [copy, setCopy] = React.useState('Copy')

    const handleClick = () => {
        setCopy('Copied')
        navigator.clipboard.writeText(code)
        setTimeout(setCopy, 3000, 'Copy')
    }

    return (
        <Tab.Panel className="absolute h-full w-full">
            <button
                className="absolute top-3 right-6 bg-slate-600 text-slate-200 text-sm py-1 px-2 rounded-md transition-all ease-in-out"
                onClick={handleClick}
            >
                {copy}
            </button>
            <CodeRender code={code} />
        </Tab.Panel>
    )
}

export default CodePanel
