import FilterInput from './FilterInput'
import ShapeToggle from './ShapeToggle'

const GalleryBar = () => (
    <div className="border-b brdr h-16 px-4 flex items-center gap-3">
        <FilterInput />
        <ShapeToggle />
    </div>
)

export default GalleryBar
