import { useLocation } from "react-use";
import { useEffect, useLayoutEffect, useState } from "react";
import urlcat from "urlcat";
import { NextSeo } from "next-seo";

export default function Redirect() {
  const location = useLocation();

  const [merchant, setMerchant] = useState("");
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const path = location.pathname?.replace("/redirect/", "");
    const [type, model, grade, merchant] = path?.split("-") ?? [];
    setMerchant(merchant);
  }, [location]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(location.search);
    const redirectUrl = params.get("redirectUrl");
    const productId = params.get("id");
    if (!redirectUrl) return;

    const path = location.pathname?.replace("/redirect/", "");
    const [type] = path?.split("-") ?? [];

    fetch("https://api.276qa.com/statistics/request-record", {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body: JSON.stringify({
        productId: productId.split("?")[0],
        targetUrl: location.href,
        type: type === "tradein" ? "TRADE_IN" : "BUY",
      }),
    }).finally(() => {
      const url = urlcat(redirectUrl, {
        utm_source: "uptradeit.com",
        utm_medium: "affiliate",
        utm_campaign: "uptradeit.com",
      });
      window.location.href = url;
    });
  }, []);

  return (
    <main className="redirect-page">
      <NextSeo noindex nofollow />
      <h1>We are redirecting to the deal...</h1>
      <h2>
        UpTrade &gt; &gt;{" "}
        {merchant === "TMobile"
          ? "T-Mobile"
          : merchant.toLowerCase() === "bestbuy"
          ? "Best Buy"
          : merchant
              ?.replace("%26", "&")
              ?.replace(/^\S/, (s) => s.toUpperCase())}
      </h2>
    </main>
  );
}
