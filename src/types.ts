interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: string | number
    badgeRadius?: number
}

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

export type NavItem = {
    name: string
    href: string
    ariaLabel: string
    description?: string
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}
