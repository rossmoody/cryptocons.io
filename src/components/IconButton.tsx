import { ReactNode } from 'react'

type Props = {
    ariaLabel: string
    onClick: () => void
    icon: ReactNode
    classNames?: string
}

const IconButton = ({ ariaLabel, onClick, icon, classNames }: Props) => {
    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            className={`w-8 h-8 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-md items-center flex justify-center ${classNames}`}
        >
            {icon}
        </button>
    )
}

export default IconButton
