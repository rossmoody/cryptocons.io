import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { renderToString } from 'react-dom/server'
import { Cryptocon } from '../../../../cryptocons/src'
import { useActiveIcon } from '../../../providers/ActiveIconProvider'
import { importStatement, jsxString, svgString } from '../svg-utilities'
import CodePanel from './CodePanel'
import CodeTab from './CodeTab'

const CodeTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { activeIcon } = useActiveIcon()

    const svg = renderToString(<Cryptocon icon={activeIcon} />)

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex gap-4 px-4">
                <CodeTab label="SVG" />
                <CodeTab label="JSX" />
                <CodeTab label="React" />
            </Tab.List>
            <Tab.Panels className="relative flex-1">
                <CodePanel code={svgString(svg)} />
                <CodePanel code={jsxString(svg)} />
                <CodePanel code={importStatement(activeIcon)} />
            </Tab.Panels>
        </Tab.Group>
    )
}

export default CodeTabs
