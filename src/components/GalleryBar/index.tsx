import { MenuAlt1Icon, MenuAlt2Icon } from '@heroicons/react/outline'
import IconButton from '../IconButton'
import FilterInput from './FilterInput'
import ShapeToggle from './ShapeToggle'

const GalleryBar = () => (
    <div className="border-b brdr py-4 px-4 flex items-center gap-3">
        <IconButton
            ariaLabel="Open filter panel"
            icon={<MenuAlt1Icon height={20} />}
            onClick={() => {}}
            classNames="md:hidden"
        />
        <FilterInput />
        <ShapeToggle />
        <IconButton
            ariaLabel="Open filter panel"
            icon={<MenuAlt2Icon height={20} />}
            onClick={() => {}}
            classNames="md:hidden"
        />
    </div>
)

export default GalleryBar
