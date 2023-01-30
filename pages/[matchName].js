import Head from "next/head";
import urlcat from "urlcat";
import { NextSeo } from "next-seo";
import { promises as fs } from "fs";
import path from "path";
import dayjs from "dayjs";
import { getNavBar } from "../utils/getNavBar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const config = { amp: true };

const carrierDescription = {
  Unlocked: `An unlocked phone will work with any carrier. Buying an unlocked phone is a great choice if you aren’t sure which carrier you want to use yet, or if you want to be sure it works with your current carrier. An unlocked phone is also a great gift option since it will work with any carrier or service plan someone may already be using.`,
  Verizon: `Verizon Wireless is one of the largest wireless phone carriers in the U.S., with over 100 million users. Refurbished Verizon phone will be compatible with Verizon’s network. If you are using the Verizon network, it’s recommended to purchase a Verizon-compatible used phone.`,
  ["AT&T"]: `AT&T Wireless is one of the largest wireless phone carriers in the U.S., with over 100 million users. Refurbished AT&T phone will be compatible with AT&T’s network. If you are an AT&T user, it’s recommended to purchase a AT&T-compatible used phone.`,
  ["T-Mobile"]: `T-Mobile is one of the largest wireless phone carriers in the U.S., with over 100 million users. Refurbished T-Mobile phone will be compatible with T-Mobile’s network. If you are using the T-Mobile network, it’s recommended to purchase a T-Mobile-compatible used phone.`,
  Sprint: `Sprint was one of the largest wireless phone carriers in the U.S. It merged into T-Mobile in 2020. Refurbished Sprint phone will be compatible with their network. If you are using the Sprint network, it’s recommended to purchase a Sprint-compatible used phone.`,
  [`Xfinity Mobile`]: `Comcast launched Xfinity Mobile in 2017. Xfinity Mobile is a Mobile Virtual Network Operator (MVNO) operating on the Verizon mobile network. An Unlocked or Xfinity Used Phone can work on the Xfinity network. Scroll down to find an Xfinity refurbished phone on sale.`,
  [`MetroPCS`]: `Metro by T-Mobile (formerly known as MetroPCS and also known simply as Metro) mainly provides pre-paid wireless services. The company was acquired by T-Mobile in 2013. It used to run on its independent CDMA network but later merged into T-Mobile network after the acquisition. An Unlocked or Metro Used Phone can work on the Metro network. Scroll down to find a Metro refurbished phone on sale.`,
  Cricket: `Cricket Wireless mainly provides pre-paid wireless services. The company was acquired by AT&T in 2014. It used to run on its independent CDMA network but later merged into the AT&T network after the acquisition. An Unlocked or Cricket Used Phone can work on the Cricket network. Scroll down to find a Cricket refurbished phone on sale.`,
  [`US Cellular`]: `US Cellular is an American wireless phone service provider. It runs on its independent CDMA, 4G, and 5G networks. An Unlocked or US Cellular Used Phone can work on the US Cellular network. Scroll down to find a US Cellular refurbished phone on sale.`,
  Tracfone: `Tracfone offers pre-paid, no-contract wireless phone services. It was acquired by Verizon in 2021 involving 20 million subscribers. An Unlocked or Tracfone Used Phone can work on the Tracfone network. Scroll down to find a Tracfone refurbished phone on sale.`,
  Boost: `Boost Mobile offers mainly pre-paid wireless phone services. It is now owned by Dish Wireless. An Unlocked or Boost Mobile Used Phone can work on the Boost Mobile network. Scroll down to find a Boost Mobile refurbished phone on sale.`,
};
const defaultReviews = [
  {
    store_review_id: 1,
    reviewer: {
      first_name: "Richard",
      last_name: "Kennedy",
    },
    rating: 5,
    comments:
      "Easy to use and got my check within the time period promised. Will recommend to friends and family who want to sell their old devices.",
  },
  {
    store_review_id: 2,
    reviewer: {
      first_name: "Tonia",
      last_name: "Theriault",
    },
    rating: 5,
    comments:
      "Transaction was extremely quick easy and was kept updated every step of the way. 100% would recommend to anyone thinking of selling their items.",
  },
  {
    store_review_id: 3,
    reviewer: {
      first_name: "Liz",
      last_name: "Holland",
    },
    rating: 5,
    comments:
      "My first purchase. ( 2nd experience with your co.) A+ very happy with over all experience, product and price. I have recommended , and I will buy my next phone from you as well as sell",
  },
  {
    store_review_id: 4,
    reviewer: {
      first_name: "Philip",
      last_name: "Sizemore",
    },
    rating: 5,
    comments:
      "This was by far the easiest way to sell your old cell phone. Simple fast and got a very good price for my phone.",
  },
  {
    store_review_id: 5,
    reviewer: {
      first_name: "Kevin",
      last_name: "Hughes",
    },
    rating: 5,
    comments:
      "I was pleasantly surprised at how convenient and efficient this whole process of selling my wifes phone was. At first I was a bit skeptical but after dealing with them, I would definitely recommend.",
  },
];
function BuyModel({
  productImageUrl,
  productCategoryValueId,
  productName,
  price,
  reviewsInfo,
  relatedGoods,
  metaDescription,
  qa,
  path,
  keyword,
  title,
  brand,
  metaName,
  sku,
  gtin,
  navbar,
  appleList,
  brandCategoryValueId,
  productMobileImageUrl,
  sellNavbar,
  sellAppleList,
  type,
  pageHead,
  priceTrend,
  specs,
  skuType,
  carrier,
  storage,
  color,
}) {
  return (
    <div>
      <Head>
        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              name: "Breadcrumb",
              itemListElement: [
                {
                  name: "Home",
                  position: 1,
                  "@type": "ListItem",
                  item: `${process.env.BASEURL}`,
                },
                {
                  name: "Buy Phone",
                  position: 2,
                  "@type": "ListItem",
                  item: `${process.env.BASEURL}/buy-phone`,
                },
                {
                  name: brand,
                  position: 3,
                  "@type": "ListItem",
                  item: `${
                    process.env.BASEURL
                  }/buy-used-refurbished-${brand.toLowerCase()}`,
                },
                type !== "BRAND"
                  ? {
                      name: `Refurbished ${keyword || productName}`,
                      position: 4,
                      "@type": "ListItem",
                      item: `${
                        process.env.BASEURL
                      }/buy-used-refurbished-${productName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`,
                    }
                  : undefined,
                skuType && skuType === "CARRIER"
                  ? {
                      name: `${keyword || productName} ${carrier}`,
                      position: 5,
                      "@type": "ListItem",
                      item: `${
                        process.env.BASEURL
                      }/buy-used-refurbished-${productName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}-${carrier.toLowerCase()}`,
                    }
                  : undefined,
                skuType && skuType === "COLOR"
                  ? {
                      name: `${keyword || productName} ${color}`,
                      position: 5,
                      "@type": "ListItem",
                      item: `${
                        process.env.BASEURL
                      }/buy-used-refurbished-${productName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}-${color
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`,
                    }
                  : undefined,
                skuType && skuType === "STORAGE"
                  ? {
                      name: `${keyword || productName} ${storage}`,
                      position: 5,
                      "@type": "ListItem",
                      item: `${
                        process.env.BASEURL
                      }/buy-used-refurbished-${productName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}-${storage.toLowerCase()}`,
                    }
                  : undefined,
              ].filter(Boolean),
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: metaName,
              description: `Best deals on Certified Used and Refurbished ${
                keyword || productName
              }. Up to 70% off compared to new ✌ Free shipping ✅ 100% fully function ✅ 30 days risk free `,
              image: [
                productImageUrl ?? `${process.env.BASEURL}/default-image.png`,
              ],
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "Lillian Doherty",
                },
              },
              sku: sku,
              gtin: gtin,
              brand: {
                "@type": "Brand",
                name: brand,
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: `${price / 100 || ""}`,
                priceValidUntil: dayjs().add(90, "day").format("YYYY-MM-DD"),
                url: `${process.env.BASEURL}${path}`,
                priceCurrency: "USD",
                itemCondition: "http://schema.org/RefurbishedCondition",
                seller: {
                  "@type": "Organization",
                  name: "UpTrade",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: reviewsInfo.average_rating,
                reviewCount: reviewsInfo.total,
                bestRating: 5,
                worstRating: 1,
              },
            }),
          }}
        />

        {qa ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: Object.entries(qa).map(([title, content]) => ({
                  "@type": "Question",
                  name: title,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: content,
                  },
                })),
              }),
            }}
          />
        ) : null}
      </Head>
      <NextSeo
        title={title}
        description={metaDescription}
        canonical={`${process.env.BASEURL}${path}`}
        openGraph={{
          title: title,
          type: "Product.group",
          images: [
            {
              url: `${process.env.BASEURL}/og_logo.png`,
              width: 200,
              height: 200,
            },
          ],
          url: `${process.env.BASEURL}${path}`,
          description: metaDescription,
          site_name: "UpTrade",
        }}
        noindex={!!skuType}
        nofollow={!!skuType}
      />
      <Header navbar={navbar} sellNavbar={sellNavbar} />
      <main className="model-page buy-model-page">
        <div className="model-header-placeholder" id="top"></div>
        <div className="icon-list">
          <div className="icon-list-item">
            <amp-img src="/svg/certified.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>UpTrade Certified</strong>
              <div>Quality, fully functional, used refurbished phones</div>
            </div>
          </div>
          <div className="icon-list-item">
            <amp-img src="/svg/return.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>30 Day Free Returns</strong>
              <div>Return for any reason or no reason at all</div>
            </div>
          </div>
          <div className="icon-list-item">
            <amp-img src="/svg/secure-payment.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>Secure Payment</strong>
              <div>Visa, MasterCard, American Express</div>
            </div>
          </div>
        </div>
        <div className="model-page-description">
          <div className="breadcrumbs">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/">Home</a>
            <amp-img src="/svg/black-arrow-right.svg" width="12" height="12" />
            <a href="/buy-phone">Buy Phone</a>

            {type === "BRAND" ? (
              <>
                <amp-img
                  src="/svg/black-arrow-right.svg"
                  width="12"
                  height="12"
                />
                <span>{brand}</span>
              </>
            ) : type !== "CARRIER" ? (
              <>
                <amp-img
                  src="/svg/black-arrow-right.svg"
                  width="12"
                  height="12"
                />
                <a href={`/buy-used-refurbished-${brand.toLowerCase()}`}>
                  {brand}
                </a>
              </>
            ) : null}
            {type !== "BRAND" ? (
              <>
                <amp-img
                  src="/svg/black-arrow-right.svg"
                  width="12"
                  height="12"
                />
                <a
                  href={
                    !!skuType
                      ? `/buy-used-refurbished-${productName
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`
                      : undefined
                  }
                >
                  Refurbished {keyword || productName}
                </a>{" "}
              </>
            ) : null}
            {skuType && skuType === "CARRIER" ? (
              <>
                <amp-img
                  src="/svg/black-arrow-right.svg"
                  width="12"
                  height="12"
                />
                <a>
                  {keyword || productName} {carrier}
                </a>
              </>
            ) : null}
            {skuType && skuType === "COLOR" ? (
              <>
                <amp-img
                  src="/svg/black-arrow-right.svg"
                  width="12"
                  height="12"
                />
                <a>
                  {keyword || productName} {color}
                </a>
              </>
            ) : null}
            {skuType && skuType === "STORAGE" ? (
              <>
                <amp-img
                  src="/svg/black-arrow-right.svg"
                  width="12"
                  height="12"
                />
                <a>
                  {keyword || productName} {storage}
                </a>
              </>
            ) : null}
          </div>
          <div className="buy-model-page-description-content">{pageHead}</div>
        </div>
        <div className="model-content">
          <div className="left">
            <h1 className="buy-model-page-title">
              Best Certified Used {keyword || productName}{" "}
              {skuType && skuType === "CARRIER" ? carrier : null}
              {skuType && skuType === "COLOR" ? color : null}
              {skuType && skuType === "STORAGE" ? storage : null} and{" "}
              Refurbished {keyword || productName}{" "}
              {skuType && skuType === "CARRIER" ? carrier : null}
              {skuType && skuType === "COLOR" ? color : null}
              {skuType && skuType === "STORAGE" ? storage : null}
            </h1>
            <div className="model-info">
              <amp-img
                data-hero
                className="desktop-img"
                src={productImageUrl ? productImageUrl : "/default-image.png"}
                width="270"
                height="270"
                alt={`Certified Refurbished ${keyword || productName}`}
                title={`Certified Refurbished ${keyword || productName}`}
              />

              <div className="desktop-model-description">
                {!!skuType ? (
                  <div>
                    <div className="buy-model-tag-item">
                      <div>Brand: {brand}</div>
                    </div>
                    <div className="buy-model-tag-item">
                      <div>Model: {productName}</div>
                    </div>
                    <div className="buy-model-tag-item">
                      <div>Storage: {storage}</div>
                    </div>
                    <div className="buy-model-tag-item">
                      <div>Condition: Certified Used & Refurbished</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="buy-model-tag-item">
                      <amp-img
                        src="/svg/check-circle.svg"
                        width="15"
                        height="15"
                      />
                      <div>Professionally Refurbished</div>
                    </div>
                    <div className="buy-model-tag-item">
                      <amp-img
                        src="/svg/file-text.svg"
                        width="15"
                        height="15"
                      />
                      <div>Clean IMEI</div>
                    </div>
                    <div className="buy-model-tag-item">
                      <amp-img src="/svg/activity.svg" width="15" height="15" />
                      <div>Fully Functional</div>
                    </div>
                    <div className="buy-model-tag-item">
                      <amp-img src="/svg/award.svg" width="15" height="15" />
                      <div>30-Day Money Back Guarantee</div>
                    </div>
                  </div>
                )}

                <div className="buy-model-price">
                  {price ? (
                    <>
                      From <strong>${price / 100}</strong>
                    </>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
                <a
                  href={urlcat(
                    "/buy-phone",
                    type === "CARRIER"
                      ? { toResult: 1 }
                      : !price || type === "BRAND"
                      ? { brand, brandCategoryValueId, toResult: 1 }
                      : {
                          modelName: productName,
                          modelId: productCategoryValueId,
                          toResult: 1,
                        }
                  )}
                >
                  <button className="model-see-more">See More</button>
                </a>
              </div>
            </div>

            <div className="mobile-model-description">
              <div className="model-price">
                {price ? (
                  <>
                    From <strong>${price / 100}</strong>
                  </>
                ) : (
                  "Out of Stock"
                )}
              </div>
              {!!skuType ? (
                <>
                  <div className="model-tag-item">
                    <div>Brand: {brand}</div>
                  </div>
                  <div className="model-tag-item">
                    <div>Model: {productName}</div>
                  </div>
                  <div className="model-tag-item">
                    <div>Storage {storage}</div>
                  </div>
                  <div className="model-tag-item">
                    <div>Condition: Certified Used & Refurbished</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="model-tag-item">
                    <amp-img
                      src="/svg/check-circle.svg"
                      width="15"
                      height="15"
                    />
                    <div>Professionally Refurbished</div>
                  </div>
                  <div className="model-tag-item">
                    <amp-img src="/svg/file-text.svg" width="15" height="15" />
                    <div>Clean IMEI</div>
                  </div>
                  <div className="model-tag-item">
                    <amp-img src="/svg/activity.svg" width="15" height="15" />
                    <div>Fully Functional</div>
                  </div>
                  <div className="model-tag-item">
                    <amp-img src="/svg/award.svg" width="15" height="15" />
                    <div>30-Day Money Back Guarantee</div>
                  </div>
                </>
              )}
            </div>

            <div className="mobile-model-info-footer">
              <a
                href={urlcat(
                  "/buy-phone",
                  type === "CARRIER"
                    ? { toResult: 1 }
                    : !price || type === "BRAND"
                    ? { brand, brandCategoryValueId, toResult: 1 }
                    : {
                        modelName: productName,
                        modelId: productCategoryValueId,
                        toResult: 1,
                      }
                )}
              >
                <button className="model-see-more">See More</button>
              </a>
            </div>
          </div>
          {type !== "BRAND" ? (
            <div className="mobile-image-container">
              <amp-img
                data-hero
                className="mobile-img"
                src={
                  productMobileImageUrl
                    ? productMobileImageUrl
                    : "/default-image.png"
                }
                width="250"
                height="250"
                alt={`Certified Refurbished ${keyword || productName}`}
                title={`Certified Refurbished ${keyword || productName}`}
              />
            </div>
          ) : null}
          {type === "BRAND" ? (
            <div className="right">
              <h2 className="model-page-sub-title compatible-title">
                Compatible <br className="mobile-break-line" /> Networks
              </h2>
              <div className="divider" style={{ margin: "16px 0" }} />
              <p className="unlocked-network-tip">
                Unlocked means being compatible with all networks.
              </p>
              <div className="unlocked-networks">
                <div>Verizon</div>
                <div> AT&T</div>
                <div>T-Mobile</div>
                <div>Sprint</div>
                <div>US Cellular</div>
                <div>Cricket</div>
                <div>Tracfone</div>
                <div>Boost</div>
                <div>MetroPCS</div>
                <div>Dish Wireless</div>
                <div>Spectrum</div>
                <div>Xfinity Mobile</div>
                <div>Mint Mobile</div>
                <div>Consumer Cellular</div>
                <div>Google Fi</div>
                <div>Visible</div>
                <div>Simple Mobile</div>
                <div>Total Wireless</div>
                <div>Straight Talk</div>
                <div>Ultra Mobile</div>
                <div>H2O Wireless</div>
                <div>Tello</div>
                <div>Ultra Mobile</div>
                <div>US Mobile</div>
                <div>Ting</div>
                <div>Net 10</div>
                <div>Family Mobile</div>
                <div>Wing</div>
                <div>Unreal Mobile</div>
                <div>& more...</div>
              </div>
            </div>
          ) : type === "CARRIER" ? (
            <div className="right">
              <h2
                className="model-page-sub-title compatible-title"
                style={{ marginBottom: 0, fontSize: 22 }}
              >
                About {brand}
              </h2>
              <div className="divider" style={{ margin: "16px 0" }}></div>
              <div className="carrier-description">
                <div className="carrier-content">
                  {carrierDescription[brand]}
                </div>
              </div>
            </div>
          ) : specs ? (
            <div className="right">
              <h2
                className="model-page-sub-title"
                style={{ marginBottom: 0, fontSize: 22 }}
              >
                Specs
              </h2>
              <div className="divider" style={{ margin: "16px 0" }}></div>
              <div
                dangerouslySetInnerHTML={{ __html: specs }}
                className="specs-table"
              ></div>
            </div>
          ) : null}
        </div>

        {type !== "BRAND" ? (
          <div className="model-related-content">
            <div className="desktop-phone-list">
              {relatedGoods?.map((item) => (
                <a
                  key={item.productId}
                  href={urlcat(`/redirect/:gradeAndMerchant`, {
                    gradeAndMerchant: `buy-${item.name?.replace(/\s*/g, "")}-${
                      item.condition
                    }-${item.merchant}`,
                    redirectUrl: item.buyUrl,
                    productId: item.productId,
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="phone-list-item"
                >
                  <div className="img-container">
                    {item.brandLogoUrl ? (
                      <amp-img
                        width="100"
                        height="100"
                        src={item.brandLogoUrl}
                      />
                    ) : null}
                  </div>
                  <div className="description">
                    <span>{item.name}</span>
                    <span className="attr">
                      {`${item.carrier} ${item.storage} ${item.color}`}
                    </span>
                  </div>

                  <div className="condition-container">
                    <div className={`condition ${item.condition} `}>
                      {item.condition}
                    </div>
                  </div>

                  <div className="action">
                    <span className="price">${item.currentPrice / 100}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mobile-phone-list">
              {relatedGoods?.map((item) => (
                <a
                  key={item.productId}
                  href={urlcat(`/redirect/:gradeAndMerchant`, {
                    gradeAndMerchant: `buy-${item.name?.replace(/\s*/g, "")}-${
                      item.condition
                    }-${item.merchant}`,
                    redirectUrl: item.buyUrl,
                    productId: item.productId,
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="phone-list-item"
                >
                  <div className="top">
                    {item.brandLogoUrl ? (
                      <amp-img width="50" height="50" src={item.brandLogoUrl} />
                    ) : null}
                    <div className={`condition ${item.condition} `}>
                      {item.condition}
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="description">
                      <span className="attr-name">{item.name}</span>
                      <span className="attr">
                        {`${item.carrier} ${item.storage} ${item.color}`}
                      </span>
                    </div>

                    <span className="price">${item.currentPrice / 100}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="model-related-content-footer">
              <a
                href={urlcat(
                  "/buy-phone",
                  type === "CARRIER"
                    ? { toResult: 1 }
                    : !price || type === "BRAND"
                    ? { brand, brandCategoryValueId, toResult: 1 }
                    : {
                        modelName: productName,
                        modelId: productCategoryValueId,
                        toResult: 1,
                      }
                )}
              >
                <button>See More</button>
              </a>
            </div>
          </div>
        ) : (
          <div className="other-content">
            <h2 className="model-page-sub-title" style={{ marginTop: 24 }}>
              Used {keyword} <br className="mobile-break-line" /> for Sale
            </h2>
            <div className="phone-list-show">
              {relatedGoods.map((x, index) => (
                <a
                  href={`/buy-used-refurbished-${x.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  key={index}
                >
                  <div className="phone-card" key={index}>
                    <div className="image-container">
                      {x.modelImageUrl ? (
                        <amp-img
                          alt="phone"
                          width="120"
                          height="120"
                          src={x.modelImageUrl}
                        />
                      ) : null}
                    </div>
                    <div className="phone-info">
                      <strong>{x.name} Refurbished</strong>
                      <div>
                        {x.currentPrice ? (
                          <>
                            As low as /
                            <span className="price">
                              ${x.currentPrice / 100}
                            </span>
                          </>
                        ) : (
                          "Sold Out"
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a
              className="view-all-button"
              href={urlcat(
                "/buy-phone",
                type === "CARRIER"
                  ? { toResult: 1 }
                  : !price || type === "BRAND"
                  ? { brand, brandCategoryValueId, toResult: 1 }
                  : {
                      modelName: productName,
                      modelId: productCategoryValueId,
                      toResult: 1,
                    }
              )}
            >
              <button className="primary-button">View All</button>
            </a>
          </div>
        )}
        {type !== "BRAND" ? (
          <div className="other-content">
            <div className="desktop-divider divider"></div>
            <h2 className="model-page-sub-title" style={{ marginBottom: 24 }}>
              About <br className="mobile-break-line" /> Used Condition
            </h2>

            <div className="mobile-divider divider"></div>
            <div className="used-condition-content">
              <p className="tips" style={{ marginBottom: 24 }}>
                Tips: All Certified Used Phones/Devices are fully functional.
                The main difference is cosmetic. The better the condition, the
                more expensive. If you want the cheapest, pick{" "}
                <strong>Fair</strong>. If you want a balanced choice, choose{" "}
                <strong>Good</strong>.
              </p>
              <div className="conditions">
                <div className="model-page-condition-item">
                  <div className="model-page-condition-card Pristine">
                    Pristine
                  </div>
                  <div className="description">Near flawless. Like New.</div>
                </div>
                <div className="model-page-condition-item">
                  <div className="model-page-condition-card Excellent">
                    Excellent
                  </div>
                  <div className="description">
                    Minor Scratches (NOT visible at arm&apos;s length)
                  </div>
                </div>
                <div className="model-page-condition-item">
                  <div className="model-page-condition-card Good">Good</div>
                  <div className="description">
                    Light Scratches visible at arm&apos;s length
                  </div>
                </div>
                <div className="model-page-condition-item">
                  <div className="model-page-condition-card Fair">Fair</div>
                  <div className="description">
                    Heavy sign of wear and tear but still fully functional
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {type !== "BRAND" && type !== "CARRIER" ? (
          <div className="other-content">
            <div className="desktop-divider divider"></div>
            <h2 className="model-page-sub-title">
              Price Trend of <br className="mobile-break-line" /> Last 7 Days
            </h2>
            <div className="mobile-divider divider"></div>

            <div className="price-trend-table">
              <div className="price-trend-table-title">
                <span>Date</span>
                <span>Cheapest Price</span>
              </div>
              {Object.entries(priceTrend).map(([key, value]) => (
                <div className="price-trend-item" key={key}>
                  <span>{key}</span>
                  <span>${Math.floor(value / 100)}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {type === "BRAND" ? (
          <div
            className="other-content mobile-compatible"
            style={{ marginBottom: 32 }}
          >
            <h2 className="model-page-sub-title">
              Compatible <br /> Networks
            </h2>
            <div className="mobile-divider divider" />
            <p className="unlocked-network-tip">
              Unlocked means being compatible with all networks.
            </p>
            <div className="unlocked-networks">
              <div>Verizon</div>
              <div> AT&T</div>
              <div>T-Mobile</div>
              <div>Sprint</div>
              <div>US Cellular</div>
              <div>Cricket</div>
              <div>Tracfone</div>
              <div>Boost</div>
              <div>MetroPCS</div>
              <div>Dish Wireless</div>
              <div>Spectrum</div>
              <div>Xfinity Mobile</div>
              <div>Mint Mobile</div>
              <div>Consumer Cellular</div>
              <div>Google Fi</div>
              <div>Visible</div>
              <div>Simple Mobile</div>
              <div>Total Wireless</div>
              <div>Straight Talk</div>
              <div>Ultra Mobile</div>
              <div>H2O Wireless</div>
              <div>Tello</div>
              <div>Ultra Mobile</div>
              <div>US Mobile</div>
              <div>Ting</div>
              <div>Net 10</div>
              <div>Family Mobile</div>
              <div>Wing</div>
              <div>Unreal Mobile</div>
              <div>& more...</div>
            </div>
          </div>
        ) : null}

        <div className="other-content mobile-reviews">
          <div className="mobile-reviews-title">
            <div className="reviews-title">
              <h2>Customer reviews</h2>
              <div className="reviews-from">
                <span>Data From</span>
                <amp-img src="/svg/reviewsio-logo.svg" width="80" height="11" />
              </div>
            </div>

            <div className="reviews-subtitle">
              {reviewsInfo.average_rating} Rating based on{" "}
              <a href="/reviews">{reviewsInfo.total} Reviews</a>
            </div>
          </div>

          <div className="divider mobile-divider" />

          <amp-carousel
            type="slides"
            height="290"
            role="region"
            layout="flex-item"
          >
            {reviewsInfo.reviews.map((x) => {
              return (
                <div key={x.store_review_id} className="review-card">
                  <div className="review-author">{`${x.reviewer.first_name} ${x.reviewer.last_name}`}</div>
                  <div className="review-info">
                    <div className="review-ratings">
                      {new Array(x.rating).fill("").map((x, index) => (
                        <amp-img
                          key={index}
                          width="24"
                          height="24"
                          alt="rating"
                          src="/rating.svg"
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    className="review-content"
                    dangerouslySetInnerHTML={{ __html: x.comments }}
                  ></div>
                </div>
              );
            })}
          </amp-carousel>
        </div>

        <div className="home-reviews">
          <div className="desktop-divider divider"></div>
          <h2 className="model-page-sub-title" style={{ marginBottom: 24 }}>
            Customer Reviews
          </h2>

          <div className="reviews-subtitle">
            <span>
              {reviewsInfo.average_rating} Rating based on{" "}
              <a href="/reviews">{reviewsInfo.total} Reviews </a>
            </span>
            <span style={{ marginLeft: 24 }}>
              Data From
              <amp-img src="/svg/reviewsio-logo.svg" width="80" height="11" />
            </span>
          </div>

          <div className="reviews-list desktop-reviews-list">
            {reviewsInfo.reviews.slice(0, 3).map((x, index) => (
              <div className="review-card" key={index}>
                <div className="review-info">
                  <div className="review-ratings">
                    {new Array(x.rating).fill("").map((x, index) => (
                      <amp-img
                        key={index}
                        width="30"
                        height="30"
                        alt="rating"
                        src="/rating.svg"
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="review-content"
                  dangerouslySetInnerHTML={{ __html: x.comments }}
                />
                <div className="review-author">{`${x.reviewer.first_name} ${x.reviewer.last_name}`}</div>
              </div>
            ))}
          </div>
        </div>
        {type === "CARRIER" ? (
          <div className="other-content mobile-specs">
            <h2
              className="model-page-sub-title compatible-title"
              style={{ marginBottom: 0 }}
            >
              About {brand}
            </h2>
            <div className="divider" style={{ margin: "16px 0" }}></div>
            <div className="carrier-description">
              <div className="carrier-content">{carrierDescription[brand]}</div>
            </div>
          </div>
        ) : type !== "BRAND" && specs ? (
          <div className="other-content mobile-specs">
            <h2 className="model-page-sub-title">Specs</h2>
            <div className="divider"></div>
            <div
              dangerouslySetInnerHTML={{ __html: specs }}
              className="specs-table"
            ></div>
          </div>
        ) : null}
        {qa ? (
          <div className="other-content">
            <div className="desktop-divider divider"></div>
            <h2 className="model-page-sub-title">FAQ</h2>
            <div className="divider mobile-divider"></div>
            <amp-accordion>
              {Object.entries(qa).map(([title, content], index) => (
                <>
                  <section className="buy-model-page-faq-item">
                    <h3 className="buy-model-page-faq-title">
                      <img
                        src="/svg/arrow-down.svg"
                        alt="arrow-down"
                        style={{
                          width: 24,
                          height: 24,
                          display: "inline-block",
                        }}
                      />
                      <div
                        className="buy-model-faq-title-content"
                        style={{
                          display: "inline-block",
                          paddingLeft: 24,
                          marginTop: -24,
                        }}
                      >
                        {title}
                      </div>
                    </h3>
                    <div
                      className="buy-model-page-faq-content"
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                  </section>
                </>
              ))}
            </amp-accordion>
          </div>
        ) : null}

        <div
          className="other-content buy-model-page-footer"
          style={{ marginTop: 32 }}
        >
          <button
            className="second-button back-to-top"
            on={`tap:AMP.scrollTo(id="top", position="top")`}
          >
            Back To Top
          </button>
          <a
            className="see-more"
            href={urlcat(
              "/buy-phone",
              type === "CARRIER"
                ? { toResult: 1 }
                : !price || type === "BRAND"
                ? { brand, brandCategoryValueId, toResult: 1 }
                : {
                    modelName: productName,
                    modelId: productCategoryValueId,
                    toResult: 1,
                  }
            )}
          >
            <button className="primary-button">See Products</button>
          </a>
        </div>
      </main>
      <Footer
        appleList={appleList}
        sellAppleList={sellAppleList}
        buyNavbar={navbar}
        sellNavbar={sellNavbar}
      />
    </div>
  );
}

function SellModel({
  productImageUrl,
  productCategoryValueId,
  productName,
  price,
  reviewsInfo,
  relatedGoods,
  metaDescription,
  qa,
  path,
  keyword,
  title,
  brand,
  metaName,
  sku,
  gtin,
  navbar,
  appleList,
  brandCategoryValueId,
  productMobileImageUrl,
  sellNavbar,
  sellAppleList,
  type,
}) {
  return (
    <div>
      <Head>
        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              name: "Breadcrumb",
              itemListElement: [
                {
                  name: "Home",
                  position: 1,
                  "@type": "ListItem",
                  item: `${process.env.BASEURL}`,
                },
                {
                  name: "Trade In Phone",
                  position: 2,
                  "@type": "ListItem",
                  item: `${process.env.BASEURL}/trade-in-phone`,
                },
                {
                  name: brand,
                  position: 3,
                  "@type": "ListItem",
                  item: `${
                    process.env.BASEURL
                  }/trade-in-${brand.toLowerCase()}`,
                },
                type !== "BRAND"
                  ? {
                      name: `Sell ${keyword || productName}`,
                      position: 4,
                      "@type": "ListItem",
                    }
                  : undefined,
              ],
            }),
          }}
        />

        {qa ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: Object.entries(qa).map(([title, content]) => ({
                  "@type": "Question",
                  name: title,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: content,
                  },
                })),
              }),
            }}
          />
        ) : null}
      </Head>
      <NextSeo
        title={title}
        description={metaDescription}
        canonical={`${process.env.BASEURL}${path}`}
        openGraph={{
          title: title,
          type: "Product.group",
          images: [
            {
              url: `${process.env.BASEURL}/og_logo.png`,
              width: 200,
              height: 200,
            },
          ],
          url: `${process.env.BASEURL}${path}`,
          description: metaDescription,
          site_name: "UpTrade",
        }}
      />
      <Header navbar={navbar} sellNavbar={sellNavbar} hiddenSearch />
      <main className="model-page">
        <div className="model-header-placeholder" id="top"></div>
        <div className="icon-list">
          <div className="icon-list-item">
            <amp-img src="/svg/dollar-sign.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>Cash Option</strong>
              <div>If you just want cash</div>
            </div>
          </div>
          <div className="icon-list-item">
            <amp-img src="/svg/award.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>Best Offer</strong>
              <div>Guaranteed Most Value</div>
            </div>
          </div>
          <div className="icon-list-item">
            <amp-img src="/svg/truck.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>Free Shipping</strong>
              <div>Free shipping to sell your phone</div>
            </div>
          </div>
          <div className="icon-list-item">
            <amp-img src="/svg/certified.svg" width="31" height="33" />
            <div className="item-list-item-description">
              <strong>UpTrade Certified</strong>
              <div>Certified and Trusted Companies</div>
            </div>
          </div>
        </div>
        <div className="model-page-description">
          <div className="breadcrumbs">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/">Home</a>
            <amp-img src="/svg/black-arrow-right.svg" width="12" height="12" />
            <a href="/trade-in-phone">Trade In Phone</a>
            <amp-img src="/svg/black-arrow-right.svg" width="12" height="12" />
            {type === "BRAND" ? (
              <span>{brand}</span>
            ) : (
              <a href={`/trade-in-${brand.toLowerCase()}`}>{brand}</a>
            )}
            {type !== "BRAND" ? (
              <>
                <amp-img
                  src="/svg/black-arrow-right.svg"
                  width="12"
                  height="12"
                />
                <a>Sell {keyword || productName}</a>{" "}
              </>
            ) : null}
          </div>
          <div className="model-page-description-content">
            {metaDescription}
          </div>
        </div>
        <div className="model-content">
          <div className="left">
            <h1 className="model-page-title">
              Trade in {keyword || productName} or Sell {keyword || productName}
            </h1>
            <div className="model-info">
              <amp-img
                data-hero
                className="desktop-img"
                src={productImageUrl ? productImageUrl : "/default-image.png"}
                width="270"
                height="270"
              />

              <div className="desktop-model-description">
                <div className="model-tag-item">
                  <amp-img src="/svg/dollar-sign.svg" width="15" height="15" />
                  <div>Most Cash/Value</div>
                </div>
                <div className="model-tag-item">
                  <amp-img src="/svg/truck.svg" width="15" height="15" />
                  <div>Free Shipping</div>
                </div>
                <div className="model-tag-item">
                  <amp-img src="/svg/check-circle.svg" width="15" height="15" />
                  <div>Trusted Companies</div>
                </div>
                <div className="model-tag-item">
                  <amp-img src="/svg/file-text.svg" width="15" height="15" />
                  <div>Easy to compare</div>
                </div>

                <div className="model-price">
                  {price ? (
                    <>
                      Worth up to <strong>${price / 100}</strong>
                    </>
                  ) : (
                    "No Offer"
                  )}
                </div>
              </div>
            </div>

            <div className="mobile-model-description">
              <div className="model-price">
                {price ? (
                  <>
                    Worth up to <strong>${price / 100}</strong>
                  </>
                ) : (
                  "No Offer"
                )}
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/dollar-sign.svg" width="15" height="15" />
                <div>Most Cash/Value</div>
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/truck.svg" width="15" height="15" />
                <div>Free Shipping</div>
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/check-circle.svg" width="15" height="15" />
                <div>Trusted Companies</div>
              </div>
              <div className="model-tag-item">
                <amp-img src="/svg/file-text.svg" width="15" height="15" />
                <div>Easy to compare</div>
              </div>
            </div>

            <div className="model-info-footer">
              <a
                href={urlcat("/trade-in-phone", {
                  modelName: productName,
                })}
              >
                <button className="model-see-more">Get Quotes</button>
              </a>
            </div>
          </div>
          <div className="mobile-image-container">
            <amp-img
              data-hero
              className="mobile-img"
              src={
                productMobileImageUrl
                  ? productMobileImageUrl
                  : "/default-image.png"
              }
              width="250"
              height="250"
            />
          </div>
          <div className="right">
            <div className="desktop-reviews-title">
              <h2 className="reviews-title">Customer reviews</h2>
              <div className="reviews-from">
                <span>Data From</span>
                <amp-img src="/svg/reviewsio-logo.svg" width="80" height="11" />
              </div>
              <div className="reviews-subtitle">
                {reviewsInfo.average_rating} Rating based on{" "}
                <a href="/reviews">{reviewsInfo.total} Reviews</a>
              </div>
            </div>

            <div className="mobile-reviews-title">
              <h2 className="reviews-title">
                <span>Customer reviews</span>
                <div className="reviews-from">
                  <span>Data From</span>
                  <amp-img
                    src="/svg/reviewsio-logo.svg"
                    width="80"
                    height="11"
                  />
                </div>
              </h2>

              <div className="reviews-subtitle">
                {reviewsInfo.average_rating} Rating based on{" "}
                <a href="/reviews">{reviewsInfo.total} Reviews</a>
              </div>
            </div>

            <div className="divider" />

            <amp-carousel
              type="slides"
              height="290"
              role="region"
              layout="flex-item"
            >
              {reviewsInfo.reviews.map((x) => {
                return (
                  <div key={x.store_review_id} className="review-card">
                    <div className="review-author">{`${x.reviewer.first_name} ${x.reviewer.last_name}`}</div>
                    <div className="review-info">
                      <div className="review-ratings">
                        {new Array(x.rating).fill("").map((x, index) => (
                          <amp-img
                            key={index}
                            width="24"
                            height="24"
                            alt="rating"
                            src="/rating.svg"
                          />
                        ))}
                      </div>
                    </div>
                    <div
                      className="review-content"
                      dangerouslySetInnerHTML={{ __html: x.comments }}
                    ></div>
                  </div>
                );
              })}
            </amp-carousel>

            <div className="model-reviews-footer">
              <a href="/reviews">
                <button>See All Reviews</button>
              </a>
            </div>
          </div>
        </div>

        {qa ? (
          <div className="model-page-faq">
            {Object.entries(qa).map(([title, content], index) => (
              <div className="model-page-faq-item" key={index} id={title}>
                <div className="model-page-faq-title">{title}</div>
                <div
                  className="model-page-faq-content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="model-related-content">
          <div className="desktop-phone-list">
            {relatedGoods?.map((item) => (
              <a
                key={item.productId}
                href={urlcat(`/redirect/:gradeAndMerchant`, {
                  gradeAndMerchant: `tradein-${item.model?.replace(
                    /\s*/g,
                    ""
                  )}-${item.condition}-${item.merchant.replace("-", "")}`,
                  redirectUrl: item.url,
                  productId: item.sku,
                })}
                target="_blank"
                rel="noreferrer"
                className="phone-list-item"
              >
                <div className="img-container">
                  {item.merchantLogoUrl ? (
                    <amp-img
                      width="100"
                      height="100"
                      src={item.merchantLogoUrl}
                    />
                  ) : null}
                </div>
                <div className="description">
                  <span>{item.model}</span>
                  <span className="attr">
                    {`${item.carrier} ${item.storage}`}
                  </span>
                </div>

                <div className="condition-container">
                  <div
                    className={`condition ${item.condition
                      ?.split(" ")
                      .join("-")}`}
                  >
                    {item.condition}
                  </div>
                </div>

                <div className="action">
                  <span className="price">${item.price / 100}</span>
                  <div className={`condition ${item.type}`}>{item.type}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mobile-phone-list">
            {relatedGoods?.map((item) => (
              <a
                key={item.productId}
                href={urlcat(`/redirect/:gradeAndMerchant`, {
                  gradeAndMerchant: `tradein-${item.model?.replace(
                    /\s*/g,
                    ""
                  )}-${item.condition}-${item.merchant.replace("-", "")}`,
                  redirectUrl: item.url,
                  productId: item.sku,
                })}
                target="_blank"
                rel="noreferrer"
                className="phone-list-item"
              >
                <div className="top">
                  {item.merchantLogoUrl ? (
                    <amp-img
                      width="50"
                      height="50"
                      src={item.merchantLogoUrl}
                    />
                  ) : null}
                  <div
                    className={`condition ${item.condition
                      ?.split(" ")
                      .join("-")} `}
                  >
                    {item.condition}
                  </div>
                </div>
                <div className="bottom mobile-sell-model-bottom">
                  <div className="description">
                    <span className="attr-name">{item.model}</span>
                    <span className="attr">
                      {`${item.carrier} ${item.storage}`}
                    </span>
                  </div>

                  <span className="price">
                    ${item.price / 100}
                    <div className={`condition ${item.type}`}>{item.type}</div>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div
            className="model-related-content-footer"
            style={{ marginBottom: 32 }}
          >
            <a
              href={urlcat("/trade-in-phone", {
                modelName: productName,
              })}
            >
              <button>See More</button>
            </a>
          </div>
        </div>
      </main>
      <Footer
        appleList={appleList}
        sellAppleList={sellAppleList}
        buyNavbar={navbar}
        sellNavbar={sellNavbar}
      />
    </div>
  );
}

export default function Model({ pageType, ...props }) {
  return pageType === "buy" ? (
    <BuyModel {...props} />
  ) : (
    <SellModel {...props} />
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://api.276qa.com/product/search/low-price"
  ).then((response) => response.json());

  const skuResponse = {
    isSuccess: true,
  };

  if (!response.success || !skuResponse.isSuccess)
    return { paths: [], fallback: false };

  const result = [...response.data];

  await fs.writeFile(
    path.join(process.cwd(), "cache.json"),
    JSON.stringify(result)
  );

  const buyPaths = result.map((x) => {
    if (x.skuType === "CARRIER") {
      return {
        params: {
          matchName: `buy-used-refurbished-${x.productName
            .split(" ")
            .join("-")
            .toLowerCase()}-${x.carrier
            .replaceAll("&", "")
            .replaceAll("-", "")
            .split(" ")
            .join("-")
            .toLowerCase()}`,
        },
      };
    }

    if (x.skuType === "COLOR") {
      return {
        params: {
          matchName: `buy-used-refurbished-${x.productName
            .split(" ")
            .join("-")
            .toLowerCase()}-${x.color.split(" ").join("-").toLowerCase()}`,
        },
      };
    }

    if (x.skuType === "STORAGE") {
      return {
        params: {
          matchName: `buy-used-refurbished-${x.productName
            .split(" ")
            .join("-")
            .toLowerCase()}-${x.storage.toLowerCase()}`,
        },
      };
    }

    if (x.type === "BRAND") {
      return {
        params: {
          matchName: `buy-used-refurbished-${x.brand
            .split(" ")
            .join("-")
            .toLowerCase()}`,
        },
      };
    }

    if (x.type === "CARRIER") {
      return {
        params: {
          matchName: `buy-used-refurbished-${x.brand
            .replaceAll("&", "")
            .replaceAll("-", "")
            .split(" ")
            .join("-")
            .toLowerCase()}-phones`,
        },
      };
    }

    return {
      params: {
        matchName: `buy-used-refurbished-${x.productName
          .split(" ")
          .join("-")
          .toLowerCase()}`,
      },
    };
  });

  const sellResponse = await fetch(
    "https://api.276qa.com/product/trade-in/statics-data"
  ).then((response) => response.json());

  const sellResult = sellResponse.data;

  await fs.writeFile(
    path.join(process.cwd(), "sellCache.json"),
    JSON.stringify(sellResult)
  );

  const sellPaths = sellResult.map((x) => {
    if (x.type === "BRAND") {
      return {
        params: {
          matchName: `trade-in-${x.brand.split(" ").join("-").toLowerCase()}`,
        },
      };
    }

    if (x.type === "CARRIER") {
      return {
        params: {
          matchName: `trade-in-${x.brand
            .replaceAll("&", "")
            .replaceAll("-", "")
            .split(" ")
            .join("-")
            .toLowerCase()}-phones`,
        },
      };
    }

    return {
      params: {
        matchName: `trade-in-${x.productName
          .split(" ")
          .join("-")
          .toLowerCase()}`,
      },
    };
  });

  return { paths: [...buyPaths, ...sellPaths], fallback: false };
}

let reviewsResponseCache = null;

async function getBuyProps(params) {
  let reviewsResponse = null;
  if (reviewsResponseCache) {
    reviewsResponse = reviewsResponseCache;
  } else {
    reviewsResponse = await fetch(
      "https://api.reviews.io/merchant/reviews?page=0&per_page=1000&order=rating&sort=highest_rated&store=uptradeit-com"
    ).then((response) => response.json());

    reviewsResponseCache = reviewsResponse;
  }

  const cache = await fs.readFile(path.join(process.cwd(), "cache.json"));
  const searchResponse = JSON.parse(cache);

  const products = searchResponse.filter((x) => {
    if (x.skuType == "CARRIER") {
      return (
        params.matchName ===
        `buy-used-refurbished-${x.productName
          .split(" ")
          .join("-")
          .toLowerCase()}-${x.carrier
          .replaceAll("&", "")
          .replaceAll("-", "")
          .split(" ")
          .join("-")
          .toLowerCase()}`
      );
    }
    if (x.skuType === "COLOR") {
      return (
        params.matchName ===
        `buy-used-refurbished-${x.productName
          .split(" ")
          .join("-")
          .toLowerCase()}-${x.color.split(" ").join("-").toLowerCase()}`
      );
    }

    if (x.skuType === "STORAGE") {
      return (
        params.matchName ===
        `buy-used-refurbished-${x.productName
          .split(" ")
          .join("-")
          .toLowerCase()}-${x.storage.toLowerCase()}`
      );
    }

    if (x.type === "BRAND")
      return (
        params.matchName ===
        `buy-used-refurbished-${x.brand.split(" ").join("-").toLowerCase()}`
      );
    else if (x.type === "CARRIER")
      return (
        params.matchName ===
        `buy-used-refurbished-${x.brand
          .replaceAll("&", "")
          .replaceAll("-", "")
          .split(" ")
          .join("-")
          .toLowerCase()}-phones`
      );

    return (
      params.matchName ===
      `buy-used-refurbished-${x.productName.split(" ").join("-").toLowerCase()}`
    );
  });

  const product = products[0];

  const reviewsInfo = {
    total: reviewsResponse.stats.total_reviews,
    average_rating: reviewsResponse.stats.average_rating,
    reviews: reviewsResponse.reviews.slice(0, 5),
  };

  const title = !!product.skuType
    ? `Buy Refurbished & Used ${
        product.keyword || product.productName
      } ${product[
        product.skuType?.toLowerCase()
      ]?.toLowerCase()} for Sale - UpTrade®`
    : `Buy Refurbished & Used ${
        product.keyword || product.productName
      } for Sale - UpTrade®`;

  const metaName =
    product.type !== "MODEL"
      ? `Certified Used ${product.keyword} phone`
      : `Certified Used ${product.productName}`;

  const sku =
    product.type === "BRAND"
      ? product.brand === "Apple"
        ? "apple-iphone"
        : `${product.brand.toLowerCase()}-phone`
      : product.type === "CARRIER"
      ? `${product.brand.toLowerCase()}-phone`
      : `${product.brand}-${product.productName.split(" ").join("-")}`;

  const navbar = await getNavBar();

  return {
    props: {
      ...product,
      pageType: "buy",
      title,
      metaName,
      sku,
      productImageUrl: product.productImageUrl?.replaceAll(" ", "%20") ?? null,
      productMobileImageUrl:
        product.productMobileImageUrl?.replaceAll(" ", "%20") ?? null,
      path: `/${params.matchName}`,
      relatedGoods: product.relatedGoods,
      reviewsInfo,
      ...navbar,
    },
  };
}

async function getSellProps(params) {
  let reviewsResponse = null;
  if (reviewsResponseCache) {
    reviewsResponse = reviewsResponseCache;
  } else {
    reviewsResponse = await fetch(
      "https://api.reviews.io/merchant/reviews?page=0&per_page=1000&order=rating&sort=highest_rated&store=uptradeit-com"
    ).then((response) => response.json());

    reviewsResponseCache = reviewsResponse;
  }

  const cache = await fs.readFile(path.join(process.cwd(), "sellCache.json"));
  const searchResponse = JSON.parse(cache);

  const products = searchResponse.filter((x) => {
    if (x.type === "BRAND")
      return (
        params.matchName ===
        `trade-in-${x.brand.split(" ").join("-").toLowerCase()}`
      );
    else if (x.type === "CARRIER")
      return (
        params.matchName ===
        `trade-in-${x.brand
          .replaceAll("&", "")
          .replaceAll("-", "")
          .split(" ")
          .join("-")
          .toLowerCase()}-phones`
      );

    return (
      params.matchName ===
      `trade-in-${x.productName.split(" ").join("-").toLowerCase()}`
    );
  });

  const product = products[0];

  const reviewsInfo = {
    total: reviewsResponse.stats.total_reviews,
    average_rating: reviewsResponse.stats.average_rating,
    reviews: defaultReviews,
  };

  const title =
    product.type === "BRAND"
      ? `Best ${
          product.keyword || product.productName
        } Trade In Value Or Sell ${
          product.keyword || product.productName
        } For Cash | UpTrade`
      : product.type === "CARRIER"
      ? `Best ${product.brand} Phones Trade In Value Or Sell ${product.brand} Phones For Cash | UpTrade`
      : `Best ${
          product.keyword || product.productName
        } Trade In Value Or Sell ${
          product.keyword || product.productName
        } For Cash | UpTrade`;

  const metaName =
    product.type !== "MODEL"
      ? `${product.keyword} phone trade-in`
      : `${product.productName} trade-in`;

  const sku =
    product.type === "BRAND"
      ? product.brand === "Apple"
        ? "apple-iphone"
        : `${product.brand.toLowerCase()}-phone`
      : product.type === "CARRIER"
      ? `${product.brand.toLowerCase()}-phone`
      : `${product.brand}-${product.productName.split(" ").join("-")}`;

  const navbar = await getNavBar();

  return {
    props: {
      ...product,
      pageType: "sell",
      title,
      metaName,
      sku,
      productImageUrl: product.productImageUrl?.replaceAll(" ", "%20") ?? null,
      productMobileImageUrl:
        product.productMobileImageUrl?.replaceAll(" ", "%20") ?? null,
      path: `/${params.matchName}`,
      relatedGoods: product.relatedGoods,
      reviewsInfo,
      ...navbar,
    },
  };
}

export async function getStaticProps({ params }) {
  return params.matchName.includes("trade-in")
    ? getSellProps(params)
    : getBuyProps(params);
}
