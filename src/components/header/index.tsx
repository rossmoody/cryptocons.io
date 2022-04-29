import { CodeIcon, LibraryIcon } from '@heroicons/react/outline'
import { NavItem } from '../../types'
import { Figma } from '../icons/Figma'
import { GitHub } from '../icons/Github'
import Logo from './Logo'
import MobileNav from './MobileNav'
import Nav from './Nav'

const navItems: NavItem[] = [
    {
        name: 'Icons',
        href: '/',
        description: 'View the Cryptocon library',
        ariaLabel: 'Navigate home',
        icon: LibraryIcon,
    },
    {
        name: 'How to use',
        href: '/documentation',
        description: 'Learn how to use the Cryptocon components',
        ariaLabel: 'Navigate to documentation',
        icon: CodeIcon,
    },
    {
        name: 'Figma',
        href: 'https://www.figma.com/community/file/1100964857221715143/Cryptocurrency-Logos-and-Icons',
        description: 'Figma assets and component resources',
        ariaLabel: 'Navigate to Figma documentation',
        icon: Figma,
    },
    {
        name: 'GitHub',
        href: 'https://github.com/rossmoody/cryptocons',
        description:
            'The open-source respository for coded cryptocon components',
        ariaLabel: 'Navigate to GitHub repository',
        icon: GitHub,
    },
]

const Header = () => (
    <header className="flex justify-between h-14 items-center px-8 border-b brdr">
        <Logo />
        <Nav data={navItems} />
        <MobileNav data={navItems} />
    </header>
)

export default Header
