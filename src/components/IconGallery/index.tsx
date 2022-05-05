import React from 'react'
import { CryptoconNames, IconProps } from '../../../cryptocons/src'
import * as iconModules from '../../../cryptocons/src/components'
import { useIcons } from '../../providers/IconsProvider'
import { useIconType } from '../../providers/IconTypeProvider'
import IconItem from '../IconItem'

const IconGallery = () => {
    const { icons, setIcons } = useIcons()
    const { iconType } = useIconType()

    React.useEffect(() => {
        const modules = Object.entries(iconModules) as [
            CryptoconNames,
            React.ForwardRefExoticComponent<
                IconProps & React.RefAttributes<SVGSVGElement>
            >
        ][]

        const filtered = modules.filter(([displayName]) => {
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
