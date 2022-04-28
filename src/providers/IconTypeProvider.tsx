import React from 'react'
import { Children, IconType } from '../types'

type IconTypeContextProps = {
    iconType: IconType
    setIconType: React.Dispatch<React.SetStateAction<IconType>>
}

const IconTypeContext = React.createContext({} as IconTypeContextProps)

export const IconTypeProvider = ({ children }: Children) => {
    const [iconType, setIconType] = React.useState<IconType>('badge')

    const checkedMemo = React.useMemo(
        () => ({
            iconType,
            setIconType,
        }),
        [iconType]
    )

    return (
        <IconTypeContext.Provider value={checkedMemo}>
            {children}
        </IconTypeContext.Provider>
    )
}

export const useIconType = () => React.useContext(IconTypeContext)
