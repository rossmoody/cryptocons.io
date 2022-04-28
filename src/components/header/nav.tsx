import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem } from '../../types'
import classNames from '../../utils/classnames'
import ThemeToggle from './ThemeToggle'

type Props = {
    data: NavItem[]
}
const Nav = ({ data }: Props) => {
    const { pathname } = useRouter()

    return (
        <div className="items-center gap-4 h-inherit hidden sm:flex h-full">
            <div className="flex items-center gap-8 h-full">
                {data.map((item) => {
                    const navIcon =
                        item.name === 'GitHub' || item.name === 'Figma'

                    const isExternal = item.href.includes('http')
                        ? '_blank'
                        : ''

                    return (
                        <Link href={item.href} key={item.name} passHref>
                            <a
                                target={isExternal}
                                aria-label={item.ariaLabel}
                                className={classNames(
                                    pathname === item.href
                                        ? 'font-semibold border-b-4 pt-1 border-b-indigo-500 '
                                        : 'text-slate-800 dark:text-slate-300',
                                    'text-sm inline-flex gap-1 items-center hover:text-indigo-500 dark:hover:text-indigo-400 h-full'
                                )}
                            >
                                {navIcon && <item.icon />}
                                {item.name}
                            </a>
                        </Link>
                    )
                })}
            </div>
            <div className="lg:block h-4 border-r-2 brdr" />
            <ThemeToggle />
        </div>
    )
}

export default Nav
