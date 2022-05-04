import DetailsPanel from '../components/DetailsPanel'
import GalleryBar from '../components/GalleryBar'
import IconGallery from '../components/IconGallery'

const HomeLayout = () => (
    <div className="h-full flex">
        <main className="flex flex-1 flex-col pb-16">
            <GalleryBar />
            <IconGallery />
        </main>
        <DetailsPanel />
    </div>
)

export default HomeLayout
