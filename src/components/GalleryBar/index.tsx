import IconButton from '../IconButton'
import Figma from '../Icons/Figma'
import FilterInput from './FilterInput'
import ShapeToggle from './ShapeToggle'

const GalleryBar = () => (
    <div className="border-b brdr py-4 px-6 flex items-center gap-3">
        <IconButton
            ariaLabel="Open filter panel"
            icon={<Figma />}
            onClick={() => {}}
            classNames="md:hidden"
        />
        <FilterInput />
        <ShapeToggle />
        <IconButton
            ariaLabel="Open filter panel"
            icon={<Figma />}
            onClick={() => {}}
        />
    </div>
)

export default GalleryBar
