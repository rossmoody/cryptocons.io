import React from 'react'
import * as iconModules from '../../../cryptocons/src/components'
import { useIcons } from '../../providers/IconsProvider'
import { useIconType } from '../../providers/IconTypeProvider'
import IconItem from '../IconItem'

const IconGallery = () => {
    const { icons, setIcons } = useIcons()
    const { iconType } = useIconType()

    React.useEffect(() => {
        const filtered = Object.entries(iconModules).filter(([displayName]) => {
            switch (iconType) {
                case 'all':
                    return true

                case 'badge':
                    return displayName.includes('Badge')

                case 'logo':
                    return !displayName.includes('Badge')
            }
        })
        setIcons(filtered)
    }, [setIcons, iconType])

    return (
        <div className="h-full flex-1 p-4 overflow-y-scroll">
            <div className="flex flex-wrap gap-3">
                {icons.map(([displayName, Icon]) => (
                    <IconItem key={displayName} name={displayName}>
                        <Icon size={48} />
                    </IconItem>
                ))}
            </div>
        </div>
    )
}

export default IconGallery
