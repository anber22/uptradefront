import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useAmp } from "next/amp";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary" />
        <script
          async
          custom-element="amp-autocomplete"
          src="https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js"
        />
        <script
          async
          custom-element="amp-form"
          src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
        />
        <script
          async
          custom-element="amp-bind"
          src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-selector"
          src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-accordion"
          src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
        ></script>
        <script
          async
          custom-template="amp-mustache"
          src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
        ></script>
        <script
          async
          custom-element="amp-list"
          src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
        ></script>
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-TXWLTL3');`}
      </Script>
      <Component {...pageProps} />
      {isAmp ? (
        <a href="/contact" className="global-help" target="_blank">
          <amp-img
            src="/svg/help-pc.svg"
            className="help-pc"
            width="105"
            height="34"
          />
          <amp-img
            src="/svg/help-mobile.svg"
            width="36"
            height="36"
            className="help-mobile"
          />
        </a>
      ) : (
        <a href="/contact" className="global-help" target="_blank">
          <img
            src="/svg/help-pc.svg"
            className="help-pc"
            width="105"
            height="34"
          />
          <img
            src="/svg/help-mobile.svg"
            width="36"
            height="36"
            className="help-mobile"
          />
        </a>
      )}
    </>
  );
}
export default MyApp;
