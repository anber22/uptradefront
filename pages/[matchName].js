import Head from "next/head";
import urlcat  from "urlcat";
import { promises as fs } from "fs";
import path from "path";

export const config = { amp: true };

export default function Model({
  productImageUrl,
  productCategoryValueId,
  productName,
  price,
  reviewsInfo,
  relatedGoods,
  metaDescription,
  qa,
}) {
  return (
    <div>
      <Head>
        <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>
        {metaDescription ? (
          <meta name="description" content={metaDescription} />
        ) : null}
      </Head>
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
            <a>Refurbished {productName}</a>
          </div>
          <div className="model-page-description-content">
            {metaDescription}
          </div>
        </div>
        <div className="model-content">
          <div className="left">
            <h1 className="model-page-title">
              Best Certified Used {productName} and Refurbished {productName}
            </h1>
            <div className="model-info">
              <amp-img
                src={productImageUrl ?? "/default-image.png"}
                data-hero
                width="270"
                height="270"
                className="desktop-img"
              />
              <amp-img
                data-hero
                src={productImageUrl ?? "/default-image.png"}
                width="270"
                height="270"
                layout="responsive"
                className="mobile-img"
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
                href={urlcat("/buy-phone", {
                  modelName: productName,
                  modelId: productCategoryValueId,
                })}
              >
                <button className="model-see-more">See More</button>
              </a>
            </div>
          </div>
          <div className="right">
            <h2 className="reviews-title">Customer Reviews</h2>
            <div className="reviews-from">
              <span>Data From</span>
              <amp-img src="/svg/reviewsio-logo.svg" width="80" height="11" />
            </div>
            <div className="reviews-subtitle">
              {reviewsInfo.average_rating} Rating based on{" "}
              <a href="/reviews">{reviewsInfo.total} Reviews</a>
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
              <a href="#">
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
              <a key={item.productId} href="#" className="phone-list-item">
                <div className="img-container">
                  <amp-img width="100" height="100" src={item.brandLogoUrl} />
                </div>
                <div className="description">
                  <span>{item.name}</span>
                  <span className="attr">
                    {`${item.CARRIER} ${item.STORAGE} ${item.COLOR}`}
                  </span>
                </div>

                <div className="condition-container">
                  <div className={`condition ${item.CONDITION} `}>
                    {item.CONDITION}
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
              <a key={item.productId} href="#" className="phone-list-item">
                <div className="top">
                  <amp-img width="50" height="50" src={item.brandLogoUrl} />
                  <div className={`condition ${item.CONDITION} `}>
                    {item.CONDITION}
                  </div>
                </div>
                <div className="bottom">
                  <div className="description">
                    <span>{item.name}</span>
                    <span className="attr">
                      {`${item.CARRIER} ${item.STORAGE} ${item.COLOR}`}
                    </span>
                  </div>

                  <span className="price">${item.currentPrice / 100}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="model-related-content-footer">
            <a
              href={urlcat("/buy-phone", {
                modelName: productName,
                modelId: productCategoryValueId,
              })}
            >
              <button>See More</button>
            </a>
          </div>
        </div>
      </main>
    </div>
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

  const paths = result.map((x) => ({
    params: {
      matchName: `buy-used-refurbished-${x.productName
        .split(" ")
        .join("-")
        .toLowerCase()}`,
    },
  }));

  return { paths, fallback: false };
}

let reviewsResponseCache = null;

export async function getStaticProps({ params }) {
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

  const product = searchResponse.find(
    (x) =>
      params.matchName ===
      `buy-used-refurbished-${x.productName.split(" ").join("-").toLowerCase()}`
  );

  const reviewsInfo = {
    total: reviewsResponse.stats.total_reviews,
    average_rating: reviewsResponse.stats.average_rating,
    reviews: reviewsResponse.reviews.slice(0, 5),
  };

  return {
    props: {
      ...product,
      relatedGoods: product.relatedGoods
        .filter((x) => !!x.specs)
        .map((item) => {
          const specs = item.specs.reduce(
            (acc, { key, value }) => ({ ...acc, [key]: value }),
            {}
          );
          return {
            ...item,
            ...specs,
          };
        }),
      reviewsInfo,
    },
  };
}
