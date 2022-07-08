import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useAmp } from "next/amp";

function MyApp({ Component, pageProps, navbar, appleList }) {
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

      {Component.name !== "Redirect" ? (
        <Header navbar={navbar} />
      ) : null}
      <Component {...pageProps} />
      {isAmp ? (
        <a href="/contact" className="global-help">
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
        <a href="/contact" className="global-help">
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
      {Component.name !== "Redirect" ? (
        <>
          <Footer appleList={appleList} />
          <div className="copy-right">
            <div className="terms">
              <a href="/terms">Terms & Conditions</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>

            <p>© 2021 UP Trade Technologies, Inc.</p>
          </div>
        </>
      ) : null}
    </>
  );
}

MyApp.getInitialProps = async () => {
  const navbarResponse = await fetch(
    "https://api.276qa.com/search/category/buy/navigation/bar"
  ).then((response) => response.json());

  const appleList = navbarResponse.data.find((x) => x.key === "Apple").values;
  return {
    navbar: navbarResponse.data,
    appleList: appleList,
  };
};

export default MyApp;
