export type Children = {
    children: React.ReactNode
}

export type IconType = 'logo' | 'badge'

export type IconModule = [
    string,
    React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>
]

export type NavItem = {
    name: string
    href: string
    ariaLabel: string
    description?: string
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}
