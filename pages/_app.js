import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps, navbar }) {
  return (
    <>
      <Head>
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

      {Component.name !== "Redirect" ? <Header navbar={navbar} /> : null}
      <Component {...pageProps} />
      {Component.name !== "Redirect" ? (
        <>
          <Footer />
          <div className="copy-right">
            <div className="terms">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
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

  return {
    navbar: navbarResponse.data,
  };
};

export default MyApp;
