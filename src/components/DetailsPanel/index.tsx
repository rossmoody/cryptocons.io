import babel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'
import { renderToString } from 'react-dom/server'
import { Cryptocon } from '../../../cryptocons/src'
import { useActiveIcon } from '../../providers/ActiveIconProvider'
import CodeRender from './CodeRender'

const DetailsPanel = () => {
    const { activeIcon } = useActiveIcon()

    const code = () => {
        return format(renderToString(<Cryptocon icon={activeIcon} />), {
            parser: 'babel',
            plugins: [babel],
        }).replace(';', '')
    }

    return (
        <aside className="w-96 border-l brdr z-10 -right-96 md:right-0 transition-all ease-in-out dark:bg-slate-900 bg-white flex flex-col absolute md:flex md:relative drop-shadow-md md:drop-shadow-none">
            <header className="basis-16 px-5 border-b brdr items-center flex shrink-0">
                <h2 className="text-xl font-semibold">{activeIcon}</h2>
            </header>
            <section className="border-b brdr flex items-center justify-center basis-52 shrink-0">
                <Cryptocon icon={activeIcon} size={100} />
            </section>
            <CodeRender>{code()}</CodeRender>
        </aside>
    )
}

export default DetailsPanel
