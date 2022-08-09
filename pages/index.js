import Head from "next/head";
import { NextSeo } from "next-seo";
import { getNavBar } from "../utils/getNavBar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const config = { amp: true };

export default function Home({
  listedProduct,
  reviews,
  navbar,
  sellNavbar,
  appleList,
  sellAppleList,
  sellListData,
}) {
  return (
    <div>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="xqixprug1s29tiyy50ug7ydb5cup5f"
        />
        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
        ></script>
      </Head>
      <NextSeo
        title="Buy Used Phones | Sell My Phone | UpTrade"
        description="Experience the UpTrade Difference. Buy the Best Certified Used Phones for Less. High Quality Refurbished Phones. Money Back Guarantee. Sell Your Used Phone For More. Fast and Easy. Free Shipping."
        canonical={process.env.BASEURL}
        openGraph={{
          title: "Buy Used Phones | Sell My Phone | UpTrade",
          type: "Website",
          images: [
            {
              url: `${process.env.BASEURL}/og_logo.png`,
              width: 200,
              height: 200,
            },
          ],
          url: process.env.BASEURL,
          description:
            "Experience the UpTrade Difference. Buy the Best Certified Used Phones for Less. High Quality Refurbished Phones. Money Back Guarantee. Sell Your Used Phone For More. Fast and Easy. Free Shipping.",
          site_name: "UpTrade",
        }}
      />
      <amp-state id="currentTab">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: `{ "current": "apple" }`,
          }}
        ></script>
      </amp-state>
      <Header navbar={navbar} sellNavbar={sellNavbar} />
      <main className="home-page">
        <div className="home-content">
          <div className="home-left">
            <h1>
              Buy The Best Used <br />
              Phones For Less.
            </h1>

            <amp-selector
              role="tablist"
              className="brand-tablist"
              on={`select: AMP.setState({ currentType: { current: event.targetOption } })`}
            >
              <h3 className="sub-title" role="tab" selected option="buy">
                Buy a Phone
              </h3>
              <h3 className="sub-title" option="sell">
                Trade in/Sell
              </h3>
            </amp-selector>

            <div
              className="brands"
              data-amp-bind-class="currentType.current == 'buy' ? 'brands' : 'brands-hidden'"
            >
              <div>
                <a href="/buy-used-refurbished-apple" className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="apple"
                    title="apple"
                    src="/brand/Apple.svg"
                  />
                </a>
                <div className="brand-name">Apple</div>
              </div>
              <div>
                <a href="/buy-used-refurbished-samsung" className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="Samsung"
                    title="Samsung"
                    src="/brand/Samsung.svg"
                  />
                </a>
                <div className="brand-name">Samsung</div>
              </div>
              <div>
                <a href="/buy-used-refurbished-google" className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="Google"
                    title="Google"
                    src="/brand/Google.svg"
                  />
                </a>
                <div className="brand-name">Google</div>
              </div>
            </div>

            <div
              className="brands-hidden"
              data-amp-bind-class="currentType.current == 'sell' ? 'brands' : 'brands-hidden'"
            >
              <div>
                <a href="/buy-used-refurbished-apple" className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="apple"
                    title="apple"
                    src="/brand/Apple.svg"
                  />
                </a>
                <div className="brand-name">Apple</div>
              </div>
              <div>
                <a href="/buy-used-refurbished-samsung" className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="Samsung"
                    title="Samsung"
                    src="/brand/Samsung.svg"
                  />
                </a>
                <div className="brand-name">Samsung</div>
              </div>
              <div>
                <a href="/buy-used-refurbished-google" className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="Google"
                    title="Google"
                    src="/svg/dot.svg"
                    className="three-dot"
                  />
                </a>
                <div className="brand-name">Other</div>
              </div>
            </div>
          </div>

          <amp-img
            src="/Home.png"
            alt="home"
            title="home"
            width="380"
            height="413"
            id="desktop-home-content-img"
          />
        </div>

        <div className="home-phones">
          <h2 className="home-secondary-title">
            Buy Newly Listed Certified Used Phones
          </h2>

          <amp-selector
            role="tablist"
            className="brands"
            on={`select: AMP.setState({ currentTab: { current: event.targetOption } })`}
          >
            <div role="tab" selected option="apple">
              Apple
            </div>
            <div role="tab" option="samsung">
              Samsung
            </div>
          </amp-selector>

          <div
            className="phone-list-show"
            data-amp-bind-class="currentTab.current == 'apple' ? 'phone-list-show' : 'phone-list-hidden'"
          >
            {listedProduct["Apple"].map((x, index) => (
              <a href={x.url} key={index}>
                <div className="phone-card" key={index}>
                  <div className="image-container">
                    {x.photoUrl ? (
                      <amp-img
                        alt="phone"
                        width="120"
                        height="120"
                        src={x.photoUrl}
                      />
                    ) : null}
                  </div>
                  <div className="phone-info">
                    <strong>{x.name}</strong>
                    <div>
                      {x.lowPrice ? (
                        <>
                          As low as /
                          <span className="price">${x.lowPrice / 100}</span>
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

          <div
            className="phone-list-hidden"
            data-amp-bind-class="currentTab.current == 'samsung' ? 'phone-list-show' : 'phone-list-hidden'"
          >
            {listedProduct["Samsung"].map((x, index) => (
              <a href={x.url} key={index}>
                <div className="phone-card" key={index}>
                  <div className="image-container">
                    {x.photoUrl ? (
                      <amp-img
                        alt="phone"
                        width="120"
                        height="120"
                        src={x.photoUrl}
                      />
                    ) : null}
                  </div>
                  <div className="phone-info">
                    <strong>{x.name}</strong>
                    <div>
                      {x.lowPrice ? (
                        <>
                          As low as /
                          <span className="price">${x.lowPrice / 100}</span>
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

          <div className="button-container">
            <a href="/buy-phone">
              <button className="btn btn-primary">View All</button>
            </a>
          </div>
        </div>

        <div className="home-phones border-top">
          <h2 className="home-secondary-title">Trade in / Sell Your Phone</h2>

          <amp-selector
            role="tablist"
            className="brands"
            on={`select: AMP.setState({ currentSellTab: { current: event.targetOption } })`}
          >
            <div role="tab" selected option="apple">
              Apple
            </div>
            <div role="tab" option="samsung">
              Samsung
            </div>
          </amp-selector>

          <div
            className="phone-list-show"
            data-amp-bind-class="currentSellTab.current == 'apple' ? 'phone-list-show' : 'phone-list-hidden'"
          >
            {sellListData["Apple"].map((x, index) => (
              <a href={x.url} key={index}>
                <div className="phone-card" key={index}>
                  <div className="image-container">
                    {x.photoUrl ? (
                      <amp-img
                        alt="phone"
                        width="120"
                        height="120"
                        src={x.photoUrl}
                      />
                    ) : null}
                  </div>
                  <div className="phone-info">
                    <strong>{x.name}</strong>
                    <div>
                      {x.price ? (
                        <>
                          Up to <span className="price">${x.price / 100}</span>
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

          <div
            className="phone-list-hidden"
            data-amp-bind-class="currentSellTab.current == 'samsung' ? 'phone-list-show' : 'phone-list-hidden'"
          >
            {sellListData["Samsung"].map((x, index) => (
              <a href={x.url} key={index}>
                <div className="phone-card" key={index}>
                  <div className="image-container">
                    {x.photoUrl ? (
                      <amp-img
                        alt="phone"
                        width="120"
                        height="120"
                        src={x.photoUrl}
                      />
                    ) : null}
                  </div>
                  <div className="phone-info">
                    <strong>{x.name}</strong>
                    <div>
                      {x.price ? (
                        <>
                          Up to <span className="price">${x.price / 100}</span>
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

          <div className="button-container">
            <a href="/buy-phone">
              <button className="btn btn-primary">View All</button>
            </a>
          </div>
        </div>

        <div className="home-reviews">
          <h2 className="home-secondary-title">
            See Why Customers Love UpTrade
          </h2>

          <a href="/reviews" className="view-more-link">
            {"View more >"}
          </a>

          <div className="reviews-list desktop-reviews-list">
            {reviews.map((x, index) => (
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

          <div className="reviews-list mobile-review-list">
            <amp-carousel
              type="slides"
              height="290"
              role="region"
              layout="flex-item"
              controls
              // className="reviews-list mobile-reviews-list"
            >
              {reviews.map((x, index) => (
                <div
                  className="review-card"
                  key={`${x.store_review_id}-${index}`}
                >
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
            </amp-carousel>
          </div>
        </div>

        <div className="home-experts">
          <h2 className="home-secondary-title">
            See What Experts Say About UpTrade
          </h2>

          <amp-img
            src="/brand/abc.png"
            width="178"
            height="168"
            alt="abc news"
            title="abc news"
          />

          <a
            href="https://abc7chicago.com/go-back-to-school-going-2021-kids/10955158"
            target="_blank"
            rel="noreferrer"
          >
            UpTrade is where technology meets affordability. It&apos;s one of
            the leading websites for Certified Used Smartphones.
          </a>

          <amp-img
            src="/brand/bbc.png"
            width="180"
            height="116"
            alt="bbc news"
            title="bbc news"
          />

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.nbcnewyork.com/entertainment/the-scene/new-york-live/early-cyber-monday-deals-with-couponology-com/3414992/"
          >
            UpTrade offers Certified Preowned iPhone and Android at incredible
            prices.
          </a>

          <amp-img
            src="/brand/gear.png"
            width="300"
            height="44"
            title="gear patrol"
            alt="gear patrol"
          />

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.gearpatrol.com/tech/a37211440/uptrade-used-smartphones/"
          >
            If you want to be sure your child has a quality phone for back to
            school, but can&apos;t justify the cost of a new one, look to
            UpTrade — you&apos;ll often save between 50 and 70 percent off the
            retail price.
          </a>

          <amp-img
            src="/brand/android-central.png"
            width="300"
            height="100"
            title="android central"
            alt="android central"
          />

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.androidcentral.com/best-places-buy-used-phone"
          >
            Best places to buy a used phone <br />
            UpTrade is another good choice if you want to keep the process of
            buying or selling a used phone as simple as it can be.
          </a>

          <amp-img
            src="/brand/ios-hacker.png"
            width="320"
            height="56"
            title="ios hacker"
            alt="ios hacker"
          />

          <a
            href="https://ioshacker.com/iphone/the-best-place-to-buy-used-iphones"
            target="_blank"
            rel="noreferrer"
          >
            The Best Place to Buy Used iPhones <br />
            There’s a lot of ways to buy used phones, but out of all the
            options, UpTrade has proven itself to be the best.
          </a>
        </div>
      </main>

      <Footer
        appleList={appleList}
        sellAppleList={sellAppleList}
        buyNavbar={navbar}
      />
    </div>
  );
}

export async function getStaticProps() {
  const listedProduct = await fetch(
    "https://api.276qa.com/search/newly-listed-product"
  ).then((response) => response.json());

  const reviewsResponse = await fetch(
    "https://api.reviews.io/merchant/reviews?page=0&per_page=1000&order=rating&sort=highest_rated&store=uptradeit-com"
  ).then((response) => response.json());

  const sellListData = await fetch(
    "https://api.276qa.com/search/trade-in/sell-your-phone"
  ).then((response) => response.json());
  const navBarData = await getNavBar();

  return {
    props: {
      listedProduct: listedProduct.data,
      sellListData: sellListData.data,
      reviews: reviewsResponse.reviews.slice(0, 3),
      ...navBarData,
    },
  };
}
