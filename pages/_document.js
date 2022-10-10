import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="My SEO React app with Next JS" />
          <meta name="keywords" content="next react seo" />
          <meta name="author" content="William Hu" />
          <Script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js" strategy="beforeInteractive"></Script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}