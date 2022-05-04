import { ReactNode } from 'react'

type Children = {
    children: ReactNode
}

const Documentation = ({ children }: Children) => (
    <main className="h-full w-full overflow-y-scroll py-16">
        <article className="prose lg:prose-lg dark:prose-invert mx-auto prose-pre:bg-transparent prose-pre:!p-0">
            {children}
        </article>
    </main>
)

export default Documentation
