import React from 'react'
import { Children, IconModule } from '../types'

type IconsContextProps = {
    icons: IconModule[]
    setIcons: React.Dispatch<React.SetStateAction<IconModule[]>>
}

const IconsContext = React.createContext({} as IconsContextProps)

export const IconsProvider = ({ children }: Children) => {
    const [icons, setIcons] = React.useState<IconModule[]>([])

    const memo = React.useMemo(
        () => ({
            icons,
            setIcons,
        }),
        [icons]
    )

    return (
        <IconsContext.Provider value={memo}>{children}</IconsContext.Provider>
    )
}

export const useIcons = () => React.useContext(IconsContext)
