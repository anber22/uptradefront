import Document, { Html, Head, Main, NextScript } from "next/document";
import ampCss from "!raw-loader!../styles/amp-nano.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          <style
            amp-custom=""
            dangerouslySetInnerHTML={{
              __html: ampCss,
            }}
          />
          {initialProps.styles}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://d3shkncr7uztfs.cloudfront.net/sell-website/build/buy/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
              dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXWLTL3" height="0" width="0" style="display: none; visibility: hidden;" />`,
              }}
          />
        </body>
      </Html>
    );
  }
}
