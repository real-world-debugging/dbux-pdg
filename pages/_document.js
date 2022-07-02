import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


const requiredScripts = [
  '//d3js.org/d3.v5.min.js',
  'https://unpkg.com/@hpcc-js/wasm@0.3.11/dist/index.min.js',
  'https://unpkg.com/d3-graphviz@3.0.5/build/d3-graphviz.js',
];

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {requiredScripts.map((s, i) =>
          <Script
            key={i}
            src={s}
            strategy="beforeInteractive"
          />
        )}
      </body>
    </Html>
  )
}
