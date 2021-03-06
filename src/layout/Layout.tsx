import { ReactNode } from 'react'
import Header from '../components/Header'

type Children = {
    children: ReactNode
}

const Layout = ({ children }: Children) => (
    <div className="h-screen w-screen overflow-hidden">
        <Header />
        {children}
    </div>
)

export default Layout
