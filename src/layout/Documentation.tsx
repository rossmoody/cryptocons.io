import { ReactNode } from 'react'

type Children = {
    children: ReactNode
}

const Documentation = ({ children }: Children) => (
    <main className="h-full w-full overflow-y-scroll pt-16 px-4 pb-48">
        <article className="prose lg:prose-lg dark:prose-invert mx-auto prose-pre:bg-transparent prose-pre:!p-0">
            {children}
        </article>
    </main>
)

export default Documentation
