import React, { ChangeEvent } from 'react'
import { useIconFilter } from '../../providers/IconFilterProvider'
import { useIcons } from '../../providers/IconsProvider'

const FilterInput = () => {
    const { icons } = useIcons()
    const { setIconFilter } = useIconFilter()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIconFilter(event.target.value)
    }

    return (
        <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </span>
            <label className="hidden" htmlFor="filter-input">
                Filter by tag or keyword
            </label>
            <input
                type="text"
                onChange={handleChange}
                className="h-8 bg-slate-100 dark:bg-slate-800 w-full pl-9 pr-4 text-gray-700 rounded-md dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-500 focus:outline-none focus:ring text-sm"
                placeholder={`Filter ${icons.length} icons by tag or keyword`}
                id="filter-input"
            />
        </div>
    )
}
export default FilterInput
