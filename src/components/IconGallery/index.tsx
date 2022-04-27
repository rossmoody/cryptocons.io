import * as icons from '../../../cryptocons/src/components'
import IconItem from '../IconItem'

const IconGallery = () => {
    return (
        <div className="h-full flex-1 p-8 overflow-y-scroll">
            <div className="flex flex-wrap gap-4 ">
                {Object.entries(icons).map(([displayName, Icon]) => (
                    <IconItem key={displayName} name={displayName}>
                        <Icon size={60} />
                    </IconItem>
                ))}
            </div>
        </div>
    )
}

export default IconGallery
