import { ReactNode } from 'react'
import { CryptoconNames } from '../../../cryptocons/src'
import { useActiveIcon } from '../../providers/ActiveIconProvider'

type Props = {
    children: ReactNode
    name: CryptoconNames
}

const IconItem = ({ children, name }: Props) => {
    const { setActiveIcon } = useActiveIcon()

    const handleClick = () => setActiveIcon(name)

    return (
        <button
            onClick={handleClick}
            className="bg-slate-100 dark:bg-slate-800 rounded-md p-4 items-center flex flex-col hover:bg-slate-200 dark:hover:bg-slate-700 flex-1 justify-center"
        >
            {children}
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-4 break-all text-center">
                {name}
            </span>
        </button>
    )
}

export default IconItem
