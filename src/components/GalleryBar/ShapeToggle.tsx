import { RadioGroup } from '@headlessui/react'
import { useIconType } from '../../providers/IconTypeProvider'
import { IconType } from '../../types'

const ShapeToggle = () => {
    const { iconType, setIconType } = useIconType()

    return (
        <RadioGroup
            value={iconType}
            onChange={setIconType}
            className="flex text-sm bg-slate-100 h-8 rounded-md dark:bg-slate-800"
        >
            <RadioGroup.Label className="hidden">Type</RadioGroup.Label>
            <RadioItem value="logo" label="Logo" />
            <RadioItem value="badge" label="Badge" />
        </RadioGroup>
    )
}

type RadioItemProps = {
    value: IconType
    label: string
}

const RadioItem = ({ value, label }: RadioItemProps) => (
    <RadioGroup.Option value={value} className="h-8">
        {({ checked }) => (
            <span
                className={`${
                    checked ? 'bg-indigo-500 text-white' : ''
                } rounded-md px-2 cursor-pointer h-full flex items-center`}
            >
                {label}
            </span>
        )}
    </RadioGroup.Option>
)

export default ShapeToggle
