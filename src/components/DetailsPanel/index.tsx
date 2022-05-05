import babel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'
import { renderToString } from 'react-dom/server'
import { Cryptocon } from '../../../cryptocons/src'
import { useActiveIcon } from '../../providers/ActiveIconProvider'
import CodeRender from './CodeRender'

const DetailsPanel = () => {
    const { activeIcon } = useActiveIcon()

    const code = () => {
        const svg = renderToString(<Cryptocon icon={activeIcon} />)
        return format(svg, { parser: 'babel', plugins: [babel] }).replace(
            ';',
            ''
        )
    }

    return (
        <aside className="w-96 border-l brdr h-full z-10 absolute md:flex md:relative drop-shadow-md md:drop-shadow-none -right-96 md:right-0 transition-all ease-in-out flex-col">
            <header className="h-16 px-5 border-b brdr items-center flex">
                <h2 className="text-xl font-semibold">{activeIcon}</h2>
            </header>
            <section className="border-b brdr flex items-center justify-center h-52">
                <Cryptocon icon={activeIcon} size={100} />
            </section>
            <CodeRender>{code()}</CodeRender>
        </aside>
    )
}

export default DetailsPanel
