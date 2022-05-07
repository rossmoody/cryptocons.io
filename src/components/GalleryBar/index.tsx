import FilterInput from './FilterInput'
import ShapeToggle from './ShapeToggle'

const GalleryBar = () => (
    <div className="border-b brdr px-4 items-center gap-3 flex flex-col sm:flex-row h-28 sm:h-16 justify-center">
        <FilterInput />
        <ShapeToggle />
    </div>
)

export default GalleryBar
