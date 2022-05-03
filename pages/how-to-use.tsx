import ReactLive from '../src/components/ReactLive'
import Documentation from '../src/layout/Documentation'

const exampleOne = `
<>
  <Binance />
  <Binance height="48px" width="48px" />
  <Binance id="binance-id" />
</>
`

const exampleTwo = `
<>
  <BinanceBadge size={64} />
  <BinanceBadge height={64} width={64} />
  <BinanceBadge size="64" />
  <BinanceBadge height="64" width="64" />
  <BinanceBadge size="64px" />
  <BinanceBadge height="64px" width="64px" />
</>
`
const exampleThree = `
<>
  <Binance size={64} badgeRadius={12} /> {/** No effect **/}
  <BinanceBadge size={64} badgeRadius={4} />
  <BinanceBadge size={64} badgeRadius={1} />
  <BinanceBadge size={64} badgeRadius={100} />
  <BinanceBadge size={64} />
</>
`

const exampleFour = `
import { Icon, createIcon } from 'cryptocons'

const ExampleIcon = () => (
    <Icon viewBox="0 0 24 24">
        <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
)

const ExampleIcon = createIcon({
    path: (
        <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    ),
})
`

const exampleFive = `
<>
  <Cryptocon icon="Binance" />
  <Cryptocon icon="CardanoBadge" />
  <Cryptocon icon="BitcoinBadge" />
</>
`

const exampleSix = `
<>
  <CryptoconBadge icon="CardanoBadge" />
  <CryptoconBadge icon="BitcoinBadge" />
</>
`

const exampleSeven = `
<>
  <CryptoconLogo icon="Cardano" />
  <CryptoconLogo icon="Bitcoin" />
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
            Once the package is installed, importing and using icons is a pretty
            simple process. Import individual icon modules as named exports.
        </p>
        <ReactLive
            preview={false}
            code={`import { Binance, Coinbase } from 'cryptocons`}
            language="jsx"
        />
        <p>
            Each icon is wrapped in a <code>forwardRef</code> that exposes the
            underlying SVG element. Any valid SVG property can be added to an
            icon.
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
        <h3>Changing badge radius</h3>
        <p>
            Another component property exclusive to Badge icon types is{' '}
            <code>badgeRadius</code>. Setting a <code>badgeRadius</code> will
            round the corners from a square to a circle depending on the number.
            Setting a badgeRadius on an icon that isn&apos;t a Badge will have
            no effect. The default radius is 8.
        </p>
        <ReactLive code={exampleThree} />
        <h3>Higher order components</h3>
        <p>
            There are three available higher order components that bundle
            available icons into a single component and use intellisense to
            autocomplete available icons by name.
        </p>
        <h4>Cryptocon</h4>
        <p>
            All available icons can be referenced with the <code>icon</code>{' '}
            property.
        </p>
        <ReactLive code={exampleFive} />
        <h4>CryptoconBadge</h4>
        <p>
            All available <i>Badge</i> icons can be referenced with the{' '}
            <code>icon</code> property.
        </p>
        <ReactLive code={exampleSix} />
        <h4>CryptoconLogo</h4>
        <p>
            All available <i>Logo</i> icons can be referenced with the{' '}
            <code>icon</code> property.
        </p>
        <ReactLive code={exampleSeven} />
        <hr />
        <h2>Creating custom icons</h2>
        <p>There are two methods for creating your own cryptocons.</p>
        <h3>
            The <code>Icon</code> component
        </h3>
        <p>
            The Icon component renders an SVG element to create custom
            cryptocons on the fly. The Icon component will need supplied a{' '}
            <code>viewBox</code>.
        </p>
        <h3>
            The <code>createIcon</code> convenience function
        </h3>
        <p>
            The <code>createIcon</code> function is a convenience wrapper
            allowing you to achieve the same result with less effort. The
            default <code>viewBox</code> is <code>0 0 24 24</code> when using
            the <code>createIcon</code> function.
        </p>
        <p>Every example below creates the same icon.</p>
        <ReactLive preview={false} code={exampleFour} />
    </Documentation>
)

export default HowToUse
