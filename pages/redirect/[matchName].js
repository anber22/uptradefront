import { useLocation } from "react-use";
import { useEffect, useLayoutEffect, useState } from "react";
import urlcat from "urlcat";

export default function Redirect() {
  const location = useLocation();

  const [merchant, setMerchant] = useState("");

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const path = location.pathname?.replace("/redirect/", "");
    const [grade, merchant] = path?.split("-") ?? [];
    setMerchant(merchant);
  }, [location]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(location.search);
    const redirectUrl = params.get("redirectUrl");
    if (!redirectUrl) return;

    const url = urlcat(redirectUrl, {
      utm_source: "uptradeit.com",
      utm_medium: "affiliate",
      utm_campaign: "buy",
    });

    window.location.href = url;
  }, [location]);

  return (
    <main className="redirect-page">
      <h1>We are redirecting to the deal...</h1>
      <h2>UpTrade &gt; &gt; {merchant}</h2>
    </main>
  );
}
