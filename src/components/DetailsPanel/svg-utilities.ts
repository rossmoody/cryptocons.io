import { isString } from 'lodash'
import babel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'
import { ElementNode } from 'svg-parser'
import { parse } from '../../../cryptocons/scripts/parser'
import { stringifyAttributes } from '../../../cryptocons/scripts/stringifier'
import { transform } from '../../../cryptocons/scripts/transformer'

function stringify(node: ElementNode): string {
    if (isString(node)) return node

    const properties = stringifyAttributes(node.properties!)
    const buffer = `<${node.tagName}${properties}>`

    const childrensBuffer = node.children.reduce(
        (accumulator: string, childrenNode: any) => {
            return accumulator + stringify(childrenNode)
        },
        buffer
    )

    return childrensBuffer + `</${node.tagName}>`
}

function createJsx(string: string) {
    const parsed = parse(string)
    const transformed = transform(parsed)
    return stringify(transformed)
}

const formatWithPrettier = (string: string) =>
    format(string, {
        parser: 'babel',
        plugins: [babel],
    }).replace(';', '')

/**
 * Create the formatted svg string
 */
export const svgString = (svgString: string) => formatWithPrettier(svgString)

/**
 * Create a JSX version of the svg string
 */
export const jsxString = (svgString: string) =>
    formatWithPrettier(createJsx(svgString))

/**
 * Create the import statement for the icon module
 */
export const importStatement = (activeIcon: string) =>
    formatWithPrettier(`import { ${activeIcon} } from 'cryptocons'`)
