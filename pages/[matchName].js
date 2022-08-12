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
                  name: "All",
                  position: 1,
                  "@type": "ListItem",
                  item: `${process.env.BASEURL}/buy-phone`,
                },
                {
                  name: `Refurbished ${keyword || productName}`,
                  position: 2,
                  "@type": "ListItem",
                },
              ],
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
              description: `Sell ${
                keyword || productName
              } for cash or trade in for credit`,
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
                "@type": "Demand",
                availability: "https://schema.org/Demand",
                price: `${price / 100 || ""}`,
                priceValidUntil: dayjs().add(90, "day").format("YYYY-MM-DD"),
                url: `${process.env.BASEURL}${path}`,
                priceCurrency: "USD",
                itemCondition: "https://schema.org/UsedCondition",
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
      <Header navbar={navbar} sellNavbar={sellNavbar} />
      <main className="model-page">
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
            <a href="/buy-phone">All</a>
            <amp-img src="/svg/black-arrow-right.svg" width="12" height="12" />
            <a>Refurbished {keyword || productName}</a>
          </div>
          <div className="model-page-description-content">
            {metaDescription}
          </div>
        </div>
        <div className="model-content">
          <div className="left">
            <h1 className="model-page-title">
              Best Certified Used {keyword || productName} and Refurbished{" "}
              {keyword || productName}
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
                  <amp-img src="/svg/check-circle.svg" width="15" height="15" />
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

                <div className="model-price">
                  {price ? (
                    <>
                      From <strong>${price / 100}</strong>
                    </>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
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
              <div className="model-tag-item">
                <amp-img src="/svg/check-circle.svg" width="15" height="15" />
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
            </div>

            <div className="model-info-footer">
              <a
                href={urlcat(
                  "/buy-phone",
                  price
                    ? {
                        modelName: productName,
                        modelId: productCategoryValueId,
                      }
                    : { brand, brandCategoryValueId }
                )}
              >
                <button className="model-see-more">See More</button>
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
                <div className="model-page-faq-content">{content}</div>
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
                  gradeAndMerchant: `${item.productId}-${item.condition}-${item.merchant}`,
                  redirectUrl: item.buyUrl,
                })}
                target="_blank"
                rel="noreferrer"
                className="phone-list-item"
              >
                <div className="img-container">
                  {item.brandLogoUrl ? (
                    <amp-img width="100" height="100" src={item.brandLogoUrl} />
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
                  <div className="view-detail">View Detail</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mobile-phone-list">
            {relatedGoods?.map((item) => (
              <a
                key={item.productId}
                href={urlcat(`/redirect/:gradeAndMerchant`, {
                  gradeAndMerchant: `${item.productId}-${item.condition}-${item.merchant}`,
                  redirectUrl: item.buyUrl,
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
                price
                  ? {
                      modelName: productName,
                      modelId: productCategoryValueId,
                    }
                  : { brand, brandCategoryValueId }
              )}
            >
              <button>See More</button>
            </a>
          </div>
        </div>
      </main>
      <Footer appleList={appleList} sellAppleList={sellAppleList} />
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
                  name: "All",
                  position: 1,
                  "@type": "ListItem",
                  item: `${process.env.BASEURL}/buy-phone`,
                },
                {
                  name: `Refurbished ${keyword || productName}`,
                  position: 2,
                  "@type": "ListItem",
                },
              ],
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
                  name: "Pat OBrien",
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
                itemCondition: "https://schema.org/RefurbishedCondition",
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
      <Header navbar={navbar} hiddenSearch />
      <main className="model-page">
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
            <a href="/trade-in-phone">All</a>
            <amp-img src="/svg/black-arrow-right.svg" width="12" height="12" />
            <a>
              {keyword || productName} Trade In or Sell $
              {keyword || productName}
            </a>
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
                    "Out of Stock"
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
                  "Out of Stock"
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
                href={urlcat(
                  "/buy-phone",
                  price
                    ? {
                        modelName: productName,
                        modelId: productCategoryValueId,
                      }
                    : { brand, brandCategoryValueId }
                )}
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
                <div className="model-page-faq-content">{content}</div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="model-related-content">
          <div className="desktop-phone-list">
            {relatedGoods?.map((item) => (
              <a
                key={item.productId}
                href={item.url}
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
                  <div className={`condition ${item.condition} `}>
                    {item.condition}
                  </div>
                </div>

                <div className="action">
                  <span className="price">${item.price / 100}</span>
                  <div className="view-detail">View Detail</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mobile-phone-list">
            {relatedGoods?.map((item) => (
              <a
                key={item.productId}
                href={item.url}
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
                  <div className={`condition ${item.condition} `}>
                    {item.condition}
                  </div>
                </div>
                <div className="bottom">
                  <div className="description">
                    <span className="attr-name">{item.model}</span>
                    <span className="attr">
                      {`${item.carrier} ${item.storage}`}
                    </span>
                  </div>

                  <span className="price">${item.price / 100}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="model-related-content-footer">
            <a
              href={urlcat(
                "/trade-in-phone",
                price
                  ? {
                      modelName: productName,
                      modelId: productCategoryValueId,
                    }
                  : { brand, brandCategoryValueId }
              )}
            >
              <button>See More</button>
            </a>
          </div>
        </div>
      </main>
      <Footer appleList={appleList} sellAppleList={sellAppleList} />
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

  if (!response.success) return { paths: [], fallback: false };

  const result = response.data;

  await fs.writeFile(
    path.join(process.cwd(), "cache.json"),
    JSON.stringify(result)
  );

  const buyPaths = result.map((x) => {
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

  const title = `Used & Refurbished ${product.keyword || product.productName} for Sale - UpTrade®`

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
    reviews: reviewsResponse.reviews.slice(0, 5),
  };

  const title =
    product.type === "BRAND"
      ? `Best ${
          product.brand === "Apple" ? "iPhones" : `${product.brand} Phones`
        } Trade In Value Or Sell ${
          product.brand === "Apple" ? "iPhones" : `${product.brand} Phones`
        } For Cash | UpTrade`
      : product.type === "CARRIER"
      ? `Best ${product.brand} Phones Trade In Value Or Sell ${product.brand} Phones For Cash | UpTrade`
      : `Best ${
          product.keyword || product.productName
        } Trade In Value Or Sell ${product.brand} For Cash | UpTrade`;

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
