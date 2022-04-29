import { ReactNode } from 'react'
import Header from '../components/Head'

type Children = {
    children: ReactNode
}

export const Layout = ({ children }: Children) => (
    <div className="h-screen w-screen overflow-hidden">
        <Header />
        {children}
    </div>
)
