import { NextSeo } from "next-seo";
import pageCss from "!raw-loader!../../styles/redirect-coupon.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCopyToClipboard, useLocation } from "react-use";
import urlcat from "urlcat";
export default function RedirectCoupon() {
  const location = useLocation();
  const router = useRouter();
  const { matchName, redirectUrl, id, type } = router.query;
  const [state, handleCopy] = useCopyToClipboard();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (!id) return;

    fetch("https://api-v2.276qa.com/statistics/request-record", {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body: JSON.stringify({
        productId: id.split("?")[0],
        targetUrl: location.href,
        type: type === "tradein" ? "TRADE_IN" : "BUY",
      }),
    });
  }, [id, type]);

  return (
    <>
      <Head>
        <style
          amp-custom=""
          dangerouslySetInnerHTML={{
            __html: pageCss,
          }}
        />
      </Head>
      <main className="redirect-page">
        <NextSeo nofollow noindex />
        <h1>25% Off Your Order</h1>
        <div className="copy-input">
          <div className="coupon-code">UPTRADE25</div>
          <button
            className="primary-button copy-button"
            onClick={() => handleCopy("UPTRADE25")}
          >
            {state.value ? "COPIED!" : "COPY"}
          </button>
        </div>
        <div className="tip">
          Copy the code and visit{" "}
          <a
            className="redirect-url"
            href={redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {matchName === "smartphonesplus" ? "SmartphonesPLUS" : matchName}
          </a>
        </div>

        <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
          <button className="primary-button next-button">NEXT</button>
        </a>
      </main>
    </>
  );
}
