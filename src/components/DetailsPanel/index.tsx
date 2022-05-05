import { Cryptocon } from '../../../cryptocons/src'
import { useActiveIcon } from '../../providers/ActiveIconProvider'

const DetailsPanel = () => {
    const { activeIcon } = useActiveIcon()

    return (
        <aside className="w-80 border-l brdr h-full z-10 absolute md:flex md:relative drop-shadow-md md:drop-shadow-none -right-80 md:right-0 transition-all ease-in-out flex-col">
            <header className="h-16 px-5 border-b brdr items-center flex">
                <h2 className="text-xl font-semibold">{activeIcon}</h2>
            </header>
            <section className="border-b brdr flex items-center justify-center h-48">
                <Cryptocon icon={activeIcon} size={100} />
            </section>
        </aside>
    )
}

export default DetailsPanel
