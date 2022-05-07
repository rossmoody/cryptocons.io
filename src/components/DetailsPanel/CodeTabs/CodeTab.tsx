import { Tab } from '@headlessui/react'
import classNames from '../../../utils/classnames'

type Props = {
    label: string
}

const CodeTab = ({ label }: Props) => (
    <Tab
        className={({ selected }) =>
            classNames(
                'text-sm inline-flex items-center hover:text-indigo-500 dark:hover:text-indigo-400 h-10 px-1',
                selected
                    ? 'font-semibold border-b-4 pt-1 border-b-indigo-500'
                    : 'text-slate-800 dark:text-slate-300'
            )
        }
    >
        {label}
    </Tab>
)

export default CodeTab
