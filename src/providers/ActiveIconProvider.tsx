import React from 'react'
import { CryptoconNames } from '../../cryptocons/src'
import { Children } from '../types'

type ActiveIconContextProps = {
    activeIcon: CryptoconNames
    setActiveIcon: React.Dispatch<React.SetStateAction<CryptoconNames>>
}

const ActiveIconContext = React.createContext({} as ActiveIconContextProps)

export const ActiveIconProvider = ({ children }: Children) => {
    const [activeIcon, setActiveIcon] =
        React.useState<CryptoconNames>('Binance')

    const memo = React.useMemo(
        () => ({
            activeIcon,
            setActiveIcon,
        }),
        [activeIcon]
    )

    return (
        <ActiveIconContext.Provider value={memo}>
            {children}
        </ActiveIconContext.Provider>
    )
}

export const useActiveIcon = () => React.useContext(ActiveIconContext)
