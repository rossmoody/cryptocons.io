import { Tab } from '@headlessui/react'
import babel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'
import { renderToString } from 'react-dom/server'
import { Cryptocon } from '../../../cryptocons/src'
import { useActiveIcon } from '../../providers/ActiveIconProvider'
import CodeRender from './CodeRender'

const CodeTabs = () => {
    const { activeIcon } = useActiveIcon()

    const importStatement = `import { ${activeIcon} } from 'cryptocons'`
    const svgString = renderToString(<Cryptocon icon={activeIcon} />)
    const svg = format(svgString, {
        parser: 'babel',
        plugins: [babel],
    }).replace(';', '')

    return (
        <Tab.Group>
            <Tab.List>
                <Tab>SVG</Tab>
                <Tab>JSX</Tab>
                <Tab>React</Tab>
            </Tab.List>
            <Tab.Panels className="h-full">
                <Tab.Panel className="h-full">
                    <CodeRender>{svg}</CodeRender>
                </Tab.Panel>
                <Tab.Panel className="h-full">
                    <CodeRender>{svg}</CodeRender>
                </Tab.Panel>
                <Tab.Panel className="h-full">
                    <CodeRender>{importStatement}</CodeRender>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default CodeTabs
