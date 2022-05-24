import "../styles/globals.css";
import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
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
          custom-element="amp-timeago"
          src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
        ></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <div className="copy-right">
        <div className='terms'>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <p>© 2021 UP Trade Technologies, Inc.</p>
      </div>
    </>
  );
}

export default MyApp;
