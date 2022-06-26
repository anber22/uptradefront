import Head from "next/head";

export const config = { amp: true };

export default function Model({
  productImageUrl,
  productName,
  price,
  reviewsInfo,
  relatedGoods,
}) {
  return (
    <div>
      <Head>
        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
        ></script>
        <link rel="preload" as="image" href={productImageUrl} type="image" />
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
        <div className="model-content">
          <div className="left">
            <h1 className="model-page-title">
              Best Certified Used {productName} and Refurbished {productName}
            </h1>
            <div className="model-info">
              <amp-img
                src={productImageUrl}
                width="270"
                height="270"
                className="desktop-img"
              />
              <amp-img
                src={productImageUrl}
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
                  From <strong>${price / 100}</strong>
                </div>
              </div>
            </div>

            <div className="mobile-model-description">
              <div className="model-price">
                From <strong>${price / 100}</strong>
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
              <button className="model-see-more">See More</button>
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
              <a href="#">{reviewsInfo.total} Reviews</a>
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

        <div className="model-related-content">
          <div className="desktop-phone-list">
            {relatedGoods?.map((item) => (
              <a key={item.productId} href="#" className="phone-list-item">
                <div className="img-container">
                  <img width="100" height="100" src={item.brandLogoUrl} />
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
                  <img width="50" height="50" src={item.brandLogoUrl} />
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
            <button>See More</button>
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

  if (!response.success) return { paths: [] };

  const result = response.data;

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

export async function getStaticProps({ params }) {
  const reviewsResponse = await fetch(
    "https://api.reviews.io/merchant/reviews?page=0&per_page=1000&order=rating&sort=highest_rated&store=uptradeit-com"
  ).then((response) => response.json());

  const reviewsInfo = {
    total: reviewsResponse.stats.total_reviews,
    average_rating: reviewsResponse.stats.average_rating,
    reviews: reviewsResponse.reviews.slice(0, 5),
  };

  return {
    props: {
      productName: "iPhone 11",
      price: 35595,
      productImageUrl:
        "https://d3c745jesl5pj3.cloudfront.net/sell/web/iPhone_11_113d9fe4b48f435b9dbc25f4993da897.jpg",
      brand: "Apple",
      relatedGoods: [
        {
          productId: 1540387824360267776,
          name: "iPhone 6S",
          brand: "Apple",
          merchant: "Amazon",
          brandLogoUrl:
            "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
          buyUrl:
            "https://www.amazon.com/Apple-iPhone-GSM-Unlocked-64GB/dp/B07DWJVR3D/ref=sr_1_26?crid=1GQBZEMCLN6ET&keywords=Apple+iPhone+AT%26T+renewed&qid=1655009172&sprefix=apple+iphone+at%26t+renewed%2Caps%2C137&sr=8-26",
          currentPrice: 11999,
          CONDITION: "Excellent",
          CARRIER: "T-Mobile",
          STORAGE: "64GB",
          COLOR: "64GB",
        },
        {
          productId: 1540387830496534528,
          name: "iPhone 7",
          brand: "Apple",
          merchant: "Amazon",
          brandLogoUrl:
            "https://uptrade-public-static-resources.s3.us-east-2.amazonaws.com/amazon+logo.png",
          buyUrl:
            "https://www.amazon.com/Apple-iPhone-GSM-Unlocked-128GB/dp/B078WZ86Y9/ref=sr_1_36?crid=11WN1BJE4EX8X&keywords=Apple+iPhone+AT%26T+renewed&qid=1655009238&sprefix=apple+iphone+at%26t+renewed%2Caps%2C166&sr=8-36",
          currentPrice: 13900,
          CONDITION: "Excellent",
          CARRIER: "T-Mobile",
          STORAGE: "64GB",
          COLOR: "64GB",
        },
      ],
      reviewsInfo,
    },
  };
}
