import React from 'react'
import { Children } from '../types'

type IconFilterContextProps = {
    iconFilter: string
    setIconFilter: React.Dispatch<React.SetStateAction<string>>
}

const IconFilterContext = React.createContext({} as IconFilterContextProps)

export const IconFilterProvider = ({ children }: Children) => {
    const [iconFilter, setIconFilter] = React.useState<string>('')

    const memo = React.useMemo(
        () => ({
            iconFilter,
            setIconFilter,
        }),
        [iconFilter]
    )

    return (
        <IconFilterContext.Provider value={memo}>
            {children}
        </IconFilterContext.Provider>
    )
}

export const useIconFilter = () => React.useContext(IconFilterContext)
