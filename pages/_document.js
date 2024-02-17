import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icons/favicon.ico" />
          <link rel="manifest" href="/icons/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

          <meta
            name="trustpilot-one-time-domain-verification-id"
            content="bd52b26a-2a95-4bdc-b090-da3954c81044"
          />
          <meta
            name="p:domain_verify"
            content="c1e7c16e8e3985f1282cd82df1e1e64f"
          />
          <meta
            name="google-site-verification"
            content="KDX93825cyhwPt5qrouMT2SW88-urVI4NOO5zpJjEmc"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
          />
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS_CLIENT_ID}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          ></script>
          {/* <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS_CLIENT_ID}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          /> */}
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
