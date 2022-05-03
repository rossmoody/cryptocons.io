import ReactLive from '../src/components/ReactLive'
import Documentation from '../src/layout/Documentation'

const exampleOne = `
// import { Binance } from 'cryptocons'
            
<Binance />
`

const exampleTwo = `
<>
  <BinanceBadge size={64} />
  <BinanceBadge height={64} width={64} />
  <BinanceBadge size="64" />
  <BinanceBadge height="64" width="64" />
</>
`

const HowToUse = () => (
    <Documentation>
        <h1>Cryptocons</h1>
        <p>
            Cryptocons is a collection of named icon modules and utility
            functions making it easier to manage cryptocurreny icons in your
            project. Each icon is placed on a 24x24 grid and available as two
            types:
        </p>
        <ol>
            <li>
                <b>Logo:</b> Plain logomark icons
            </li>
            <li>
                <b>Badge:</b> Logomark icons contained in a shape that can be
                configured with different border radiuses from square to circle.
            </li>
        </ol>

        <h2>Installation</h2>
        <p>To install the package in your project run:</p>

        <ReactLive
            preview={false}
            code={`yarn add cryptocons`}
            language="bash"
        />
        <br />

        <ReactLive preview={false} code={`npm i cryptocons`} language="bash" />

        <h2>Usage</h2>

        <h3>Basic usage</h3>
        <p>
            Each icon is wrapped in a <code>forwardRef</code> that exposes the
            underlying SVG element. Any valid SVG property can be added to an
            icon.
        </p>
        <p>
            Once the package is installed, importing and using icons is a pretty
            simple process.
        </p>
        <ReactLive code={exampleOne} />
        <h3>Changing icon size </h3>
        <p>
            Aside from regular SVG properties, each icon has a limited set of
            component properties. One of them is <code>size</code>. The size
            property is equivalent to setting the height and width of the SVG.
            The following examples are all fuctionally the same.
        </p>
        <ReactLive code={exampleTwo} />
    </Documentation>
)

export default HowToUse
