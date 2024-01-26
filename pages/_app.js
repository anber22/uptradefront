import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Component {...pageProps} />
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
    </>
  );
}
export default MyApp;
