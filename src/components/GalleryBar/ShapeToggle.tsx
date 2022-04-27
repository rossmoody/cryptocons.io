import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const ShapeToggle = () => {
    const [shape, setShape] = useState('logo')

    return (
        <RadioGroup
            value={shape}
            onChange={setShape}
            className="flex text-sm bg-slate-100 h-8 rounded-md"
        >
            <RadioGroup.Label className="hidden">Type</RadioGroup.Label>
            <RadioItem value="logo" label="Logo" />
            <RadioItem value="badge" label="Badge" />
        </RadioGroup>
    )
}

type RadioItemProps = {
    value: string
    label: string
}

const RadioItem = ({ value, label }: RadioItemProps) => (
    <RadioGroup.Option value={value} className="h-8 p-1">
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
