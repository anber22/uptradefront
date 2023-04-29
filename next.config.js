/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: "raw-loader",
    });
    return config;
  },
  env: {
    BASEURL: "https://276qa.com",
  },
  staticPageGenerationTimeout: 300,
  async redirects() {
    return [
      {
        source: "/account",
        destination: "/",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-xfinity-phones",
        destination: "/buy-used-refurbished-xfinity-mobile-phones",
        permanent: true,
      },
      {
        source: "/buy",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-phone/:path",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy/iphone",
        destination: "/buy-used-refurbished-apple",
        permanent: true,
      },
      {
        source: "/buy/ipad",
        destination: "/buy-used-refurbished-apple",
        permanent: true,
      },
      {
        source: "/buy/galaxy",
        destination: "/buy-used-refurbished-samsung",
        permanent: true,
      },
      {
        source: "/buy/google",
        destination: "/buy-used-refurbished-google",
        permanent: true,
      },
      {
        source: "/buy/oneplus",
        destination: "/buy-used-refurbished-oneplus",
        permanent: true,
      },
      {
        source: "/buy/lg",
        destination: "/buy-used-refurbished-lg",
        permanent: true,
      },
      {
        source: "/buy/essential",
        destination: "/buy-used-refurbished-essential",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-lg-g6-t-mobile",
        destination: "/buy-used-refurbished-lg-g6-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-google-pixel-3a-t-mobile",
        destination: "/buy-used-refurbished-google-pixel-3a-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-12-t-mobile",
        destination: "/buy-used-refurbished-iphone-12-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-galaxy-s10e-t-mobile",
        destination: "/buy-used-refurbished-galaxy-s10e-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone8plus",
        destination: "/buy-used-refurbished-iphone-8-plus",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-xs-t-mobile",
        destination: "/buy-used-refurbished-iphone-xs-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-lg-aristo-2-plus-t-mobile",
        destination: "/buy-used-refurbished-iphone-xs-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-lg-aristo-2-plus-t-mobile",
        destination: "/buy-used-refurbished-lg-aristo-2-plus-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-galaxy-s21-ultra-t-mobile",
        destination: "/buy-used-refurbished-galaxy-s21-ultra-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-se-",
        destination: "/buy-used-refurbished-iphone-se",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-xr-t-mobile",
        destination: "/buy-used-refurbished-iphone-xr-tmobile",
        permanent: true,
      },
      {
        source: "/is-the-iphone-x-still-a-good-buy",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/how-long-does-an-iphone-last",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/url",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/smartphoneplus",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-wifi-phones",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-long-does-an-iphone-last",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/verizon-trade-in-program-how-does-it-stack-up",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/coronavirus-uptrade-update",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/how-to-fix-water-damaged-iphone",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/apple/iphone-xs",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-metropcs",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/jkW",
        destination: "/",
        permanent: true,
      },
      {
        source: "/limitation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cart",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sell-my-phone",
        destination: "/trade-in-phone",
        permanent: true,
      },
      {
        source: "/blog/how-to-transfer",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-phone/iphone-xs-max",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-phone/galaxy-s10-5g",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy/iphone-8-64gb-gold-unlocked-478/94074130OQ",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-x-t-mobile",
        destination: "/buy-used-refurbished-iphone-x-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-galaxy-s22-t-mobile",
        destination: "/buy-used-refurbished-galaxy-s22-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-galaxy-note-10-t-mobile",
        destination: "/buy-used-refurbished-galaxy-note-10-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-google-pixel-3a-xl-purpleish",
        destination: "/buy-used-refurbished-google-pixel-3a-xl",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-12-pro-max-t-mobile",
        destination: "/buy-used-refurbished-iphone-12-pro-max-tmobile",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-ipad-pro-11-inch-2018-wifi-cellular",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-ipad",
        destination: "/buy-used-refurbished-apple",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-galaxy-s20-plus-5g",
        destination: "/buy-used-refurbished-galaxy-s20%2B",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-galaxy-s9-plus",
        destination: "/buy-used-refurbished-galaxy-s9%2B",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-galaxy-s10-plus",
        destination: "/buy-used-refurbished-galaxy-s10%2B",
        permanent: true,
      },
      {
        source: "/trade-in-lg-k22%2B",
        destination: "/trade-in-lg-k22",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-phones-for-all-carriers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-factory-reset-android-phone",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shipping-policy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-sell-my-home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/filter-more",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-factory-reset-iphone",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-transfer-contacts-from-iphone-to-android",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-long-do-smartphones-last",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feedBack",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-sell-your-old-phone-for-cash",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sell-broken-iphone",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-tell-if-a-phone-is-unlocked",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/what-is-a-blacklisted-phone",
        destination: "/",
        permanent: true,
      },
      {
        source: "/filter",
        destination: "/",
        permanent: true,
      },
      {
        source: "/order",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-much-is-my-phone-worth",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shipping-policy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/similar",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/what-to-test-or-check-when-buying-used-phones",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/verizon-trade-in-program-how-does-it-stack-up",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/how-to-tell-if-a-phone-is-unlocked",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/is-a-used-iPhone-worth-buying",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/sell-broken-iphone",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/att-phone-trade-in-is-it-worth-it",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/author/user",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/phone-comparisons",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/samsung/galaxy-s10e",
        destination: "/buy-used-refurbished-galaxy-s10e",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-se-2020-2nd-gen",
        destination: "/buy-used-refurbished-iphone-se-2nd-gen",
        permanent: true,
      },
      {
        source: "/apple/iphone-xr",
        destination: "/buy-used-refurbished-iphone-xr",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-se-2020-2nd-gen",
        destination: "/buy-used-refurbished-iphone-xr",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-se-(2nd-gen)",
        destination: "/buy-used-refurbished-iphone-xr",
        permanent: true,
      },
      {
        source: "/apple/iphone-7-plus",
        destination: "/buy-used-refurbished-iphone-7-plus",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-6-plus",
        destination: "/buy-used-refurbished-iphone-7-plus",
        permanent: true,
      },
      {
        source: "/sell-phone/huawei/nova-5t",
        destination: "/trade-in-phone",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-6",
        destination: "/trade-in-phone",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-at&t-phones",
        destination: "/",
        permanent: true,
      },
      {
        source: "/t/whyuptradeit",
        destination: "/",
        permanent: true,
      },
      {
        source: "/t/whyuptradeit",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mdjnedzcz.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/detail",
        destination: "/",
        permanent: true,
      },
      {
        source: "/p/1130/huawei-comet",
        destination: "/",
        permanent: true,
      },
      {
        source: "/i9O",
        destination: "/",
        permanent: true,
      },
      {
        source: "/coronavirus-uptrade-update",
        destination: "/",
        permanent: true,
      },
      {
        source: "/page/1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/p/1114/htc-tilt-8925",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uNz",
        destination: "/",
        permanent: true,
      },
      {
        source: "/att-phone-trade-in-is-it-worth-it",
        destination: "/",
        permanent: true,
      },
      {
        source: "/c/22/blackberry",
        destination: "/",
        permanent: true,
      },
      {
        source: "/buy-used-refurbished-iphone-8-lus",
        destination: "/",
        permanent: true,
      },
      {
        source: "/p/1620/samsung-omnia-i910",
        destination: "/",
        permanent: true,
      },
      {
        source: "/p/1396/nokia-3650",
        destination: "/",
        permanent: true,
      },
      {
        source: "/p/936/samsung-infuse-4g-i997",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/author/user",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/phone-comparisons",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/sell-phone/apple",
        destination: "/trade-in-apple",
        permanent: true,
      },
      {
        source: "/sell-phone/samsung",
        destination: "/trade-in-samsung",
        permanent: true,
      },
      {
        source: "/sell-phone/google",
        destination: "/trade-in-google",
        permanent: true,
      },
      {
        source: "/sell-phone/oneplus",
        destination: "/trade-in-oneplus",
        permanent: true,
      },
      {
        source: "/sell-phone/lg",
        destination: "/trade-in-lg",
        permanent: true,
      },
      {
        source: "/sell-phone/essential",
        destination: "/trade-in-essential",
        permanent: true,
      },
      {
        source: "/buy/:path/beta",
        destination: "/buy-used-refurbished-:path",
        permanent: true,
      },
      {
        source: "/buy/:path/(.*)",
        destination: "/buy-used-refurbished-:path",
        permanent: true,
      },
      {
        source: "/buy/:path",
        destination: "/buy-used-refurbished-:path",
        permanent: true,
      },
      {
        source: "/sell-phone/phone/offer",
        destination: "/trade-in-phone",
        permanent: true,
      },
      {
        source: "/sell-phone/(.*)/:path/(.*)",
        destination: "/trade-in-:path",
        permanent: true,
      },
      {
        source: "/sell-phone/(.*)/:path",
        destination: "/trade-in-:path",
        permanent: true,
      },
      {
        source: "/sell-checkout/info",
        destination: "/trade-in-phone",
        permanent: true,
      },
      {
        source: "/sell-checkout/prepare-ship",
        destination: "/trade-in-phone",
        permanent: true,
      },
      {
        source: "/sell-checkout/shipping-payment",
        destination: "/trade-in-phone",
        permanent: true,
      },
      {
        source: "/buy/:path",
        destination: "/buy-used-refurbished-:path",
        permanent: true,
      },
      {
        source: "/check-order",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-checkorder/checkorder/order",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-checkout",
        destination: "/",
        permanent: true,
      },
      {
        source: "/facebook/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/protection/payment",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sell-checkout/:path",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/:path",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tiktok/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/TikTok/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/twitter/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uptrade/protect",
        destination: "/",
        permanent: true,
      },
      {
        source: "/buy-in-bulk",
        destination: "/buy-phone",
        permanent: true,
      },
      {
        source: "/buy-t-landing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cart",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-sell-my-phone",
        destination: "/",
        permanent: true,
      },
      {
        source: "/limitation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/more",
        destination: "/",
        permanent: true,
      },
      {
        source: "/return-policy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sell",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sell-phone",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sell-in-bulk",
        destination: "/",
        permanent: true,
      },
      {
        source: "/seller-listing-policy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/student-discount",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
