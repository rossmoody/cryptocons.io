import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { components } from '../../src/components/MDX'
import DocumentationLayout from '../../src/layout/Documentation'

export default function Post({ source }: any) {
    return (
        <DocumentationLayout>
            <MDXRemote {...source} components={components} />
        </DocumentationLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const postPath = path.join(process.cwd(), 'src/posts/usage.mdx')
    const fileData = fs.readFileSync(postPath)
    const { content, data: frontMatter } = matter(fileData)

    const source = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
    })

    return {
        props: {
            source,
            frontMatter,
        },
    }
}
