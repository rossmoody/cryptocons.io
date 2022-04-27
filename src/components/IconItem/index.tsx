import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    name: string
}

const IconItem = ({ children, name }: Props) => {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 rounded-md p-4 w-40 shrink-30 grow items-center flex flex-col">
            {children}
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                {name}
            </span>
        </div>
    )
}

export default IconItem
