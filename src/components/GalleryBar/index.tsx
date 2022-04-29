import { FilterIcon } from '@heroicons/react/outline'
import IconButton from '../IconButton'
import FilterInput from './FilterInput'
import ShapeToggle from './ShapeToggle'

const GalleryBar = () => (
    <div className="border-b brdr py-4 px-4 flex items-center gap-3">
        <IconButton
            ariaLabel="Open filter panel"
            icon={<FilterIcon height={20} />}
            onClick={() => {}}
            classNames="lg:hidden"
        />
        <FilterInput />
        <ShapeToggle />
    </div>
)

export default GalleryBar
