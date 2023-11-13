import { useLocation } from "react-use";
import { useEffect, useLayoutEffect, useState } from "react";
import urlcat from "urlcat";
import { NextSeo } from "next-seo";

export default function Redirect() {
  const location = useLocation();
  const [redirectUrl, setRedirectUrl] = useState()
  const [matchName, setMatchName] = useState()
  const [id, setId] = useState()
  const [type, setType] = useState()
  const [merchant, setMerchant] = useState("");

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const path = location.pathname?.replace("/redirect/", "");
    const [type, model, grade, merchant] = path?.split("-") ?? [];
  }, [location]);
  useEffect(() => {
    if(window && window.urlObj){
      setMerchant(window.urlObj.merchant); // 要改的
      setRedirectUrl(window.urlObj.redirectUrl)
      setMatchName(window.urlObj.matchName)
      setId(window.urlObj.id)
      setType(window.urlObj.type)
      setMerchant(window.urlObj.merchant);

      console.log(window.urlObj.redirectUrl)
      if (!window.urlObj.redirectUrl) return;
  
      const path = location.pathname?.replace("/redirect/", "");
      const [type] = path?.split("-") ?? [];
  
      fetch("https://api-single.uptradeit.com/statistics/request-record", {
        method: "POST",
        headers: {
          ["Content-Type"]: "application/json",
        },
        body: JSON.stringify({
          productId: window.urlObj.id,
          targetUrl: window.urlObj.redirectUrl,
          type: window.urlObj.type === "tradein" ? "TRADE_IN" : "BUY",
        }),
      }).finally(() => {
        const url = urlcat(window.urlObj.redirectUrl, {
          utm_source: "uptradeit.com",
          utm_medium: "affiliate",
          utm_campaign: "uptradeit.com",
        });
        console.log('url', url)
        window.location.href = url;
      });
    } else if(window && !window.urlObj) {
      window.location.replace(window.origin)
    }
  }, []);


  return (
    <main className="redirect-page">
      <NextSeo 
        title={ type === "tradein" ? "UpTrade Trade-In Redirect" : "UpTrade Buy Redirect" }
        noindex 
        nofollow
      />
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
