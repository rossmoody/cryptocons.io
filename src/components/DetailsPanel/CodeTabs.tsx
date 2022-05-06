import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { renderToString } from 'react-dom/server'
import { Cryptocon } from '../../../cryptocons/src'
import { useActiveIcon } from '../../providers/ActiveIconProvider'
import classNames from '../../utils/classnames'
import CodeRender from './CodeRender'
import { importStatement, jsxString, svgString } from './svg-utilities'

const CodeTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { activeIcon } = useActiveIcon()

    const svg = renderToString(<Cryptocon icon={activeIcon} />)

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex gap-4 px-4">
                <CustomTab label="SVG" />
                <CustomTab label="JSX" />
                <CustomTab label="React" />
            </Tab.List>
            <Tab.Panels className="relative flex-1">
                <Tab.Panel className="absolute h-full w-full">
                    <CodeRender>{svgString(svg)}</CodeRender>
                </Tab.Panel>
                <Tab.Panel className="absolute h-full w-full">
                    <CodeRender>{jsxString(svg)}</CodeRender>
                </Tab.Panel>
                <Tab.Panel className="absolute h-full w-full">
                    <CodeRender>{importStatement(activeIcon)}</CodeRender>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

const CustomTab = ({ label }: { label: string }) => (
    <Tab
        className={({ selected }) =>
            classNames(
                'text-md inline-flex items-center hover:text-indigo-500 dark:hover:text-indigo-400 h-10 px-1',
                selected
                    ? 'font-semibold border-b-4 pt-1 border-b-indigo-500'
                    : 'text-slate-800 dark:text-slate-300'
            )
        }
    >
        {label}
    </Tab>
)

export default CodeTabs
