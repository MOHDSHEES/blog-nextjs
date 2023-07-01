import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icons/favicon.ico" />
          <link rel="manifest" href="/icons/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <meta
            name="google-site-verification"
            content="KDX93825cyhwPt5qrouMT2SW88-urVI4NOO5zpJjEmc"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WH4KP2P"
      height="0" width="0" style="display:none;visibility:hidden">`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
