import type { IconProps } from '../cryptocons/src'

export type Children = {
    children: React.ReactNode
}

export type IconType = 'logo' | 'badge'

export type IconModule = [
    string,
    React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
    >
]
