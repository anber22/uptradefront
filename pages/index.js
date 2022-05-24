import Head from "next/head";
import { Header } from "../components/Header";

export const config = { amp: true };

export default function Home() {
  return (
    <div>
      <Head>
        <title>UpTrade</title>
        <meta name="description" content="Experience the UpTrade Difference. Buy the Best Certified Used Phones for Less. High Quality Refurbished Phones. Money Back Guarantee. Sell Your Used Phone For More. Fast and Easy. Free Shipping." />
      </Head>
      <main className="home-page">
        <div className="home-content">
          <div className="home-left">
            <h1>
              Buy The Best Used <br />
              Phones For Less.
            </h1>

            <h3 className="sub-title">Buy a Phone</h3>

            <div className="brands">
              <div>
                <div className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="apple"
                    title="apple"
                    src="/brand/Apple.svg"
                  />
                </div>
                <div className="brand-name">Apple</div>
              </div>
              <div>
                <div className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="Samsung"
                    title="Samsung"
                    src="/brand/Samsung.svg"
                  />
                </div>
                <div className="brand-name">Samsung</div>
              </div>
              <div>
                <div className="brand">
                  <amp-img
                    width="70"
                    height="70"
                    alt="Google"
                    title="Google"
                    src="/brand/Google.svg"
                  />
                </div>
                <div className="brand-name">Google</div>
              </div>
            </div>
          </div>

          <amp-img
            src="/Home.png"
            alt="home"
            title="home"
            width="380"
            height="413"
            id='desktop-home-content-img'
          />
        </div>

        <div className="home-phones">
          <h2 className="home-secondary-title">
            Browse Newly Listed Certified Used Phones
          </h2>

          <amp-selector role="tablist" className="brands">
            <div role="tab" selected option="apple">
              Apple
            </div>
            <div role="tab" option="samsung">
              Samsung
            </div>
          </amp-selector>

          <div className="phones-list">
            <div className="phone-card">
              <div className="image-container">
                <amp-img
                  alt="phone"
                  width="120"
                  height="120"
                  src="https://d5ps8hbhb8roq.cloudfront.net/sell/web/iPhone11promax_eedb783825e14920837709e0f4398db4_d556175dc62d4ac58a259a0fe0fc4701_ce63a1f4048f45ef8117773162911856.jpeg"
                />
              </div>
              <div className="phone-info">
                <strong>iPhone XS</strong>
                <div>
                  As low as / <span className="price">$260</span>
                </div>
              </div>
            </div>

            <div className="phone-card">
              <div className="image-container">
                <amp-img
                  alt="phone"
                  width="120"
                  height="120"
                  src="https://d5ps8hbhb8roq.cloudfront.net/sell/web/iPhone11promax_eedb783825e14920837709e0f4398db4_d556175dc62d4ac58a259a0fe0fc4701_ce63a1f4048f45ef8117773162911856.jpeg"
                />
              </div>
              <div className="phone-info">
                <strong>iPhone XS</strong>
                <div>
                  As low as / <span className="price">$260</span>
                </div>
              </div>
            </div>
          </div>

          <div className="button-container">
            <button className="btn btn-primary">View All</button>
          </div>
        </div>

        <div className="home-reviews">
          <h2 className="home-secondary-title">
            See Why Customers Love UpTrade
          </h2>

          <a href="#" className="view-more-link">
            {"View more >"}
          </a>

          <div className="reviews-list">
            <div className="review-card">
              <div className="review-info">
                <div className="review-ratings">
                  <amp-img
                    width="30"
                    height="30"
                    alt="rating"
                    src="/rating.svg"
                  />
                  <amp-img
                    width="30"
                    height="30"
                    alt="rating"
                    src="/rating.svg"
                  />
                  <amp-img
                    width="30"
                    height="30"
                    alt="rating"
                    src="/rating.svg"
                  />
                  <amp-img
                    width="30"
                    height="30"
                    alt="rating"
                    src="/rating.svg"
                  />
                  <amp-img
                    width="30"
                    height="30"
                    alt="rating"
                    src="/rating.svg"
                  />
                </div>
                <amp-timeago
                  className="m1"
                  height="20"
                  datetime="2022-05-14T00:37:33.809Z"
                >
                  Tuesday 14 March 2017 00.37
                </amp-timeago>
              </div>
              <div className="review-content">
                Phone was as promised and was delivered as stated. Would do
                business with them again
              </div>

              <div className="review-author">Anonymous</div>
            </div>
          </div>
        </div>

        <div className="home-experts">
          <h2 className="home-secondary-title">
            See What Experts Say About UpTrade
          </h2>

          <amp-img
            src="/brand/abc.png"
            width="178"
            height="150"
            alt="abc news"
            title="abc news"
          />

          <p>
            UpTrade is where technology meets affordability. It&apos;s one of
            the leading websites for Certified Used Smartphones.
          </p>

          <amp-img
            src="/brand/bbc.png"
            width="180"
            height="116"
            alt="bbc news"
            title="bbc news"
          />

          <p>
            UpTrade offers Certified Preowned iPhone and Android at incredible
            prices.
          </p>

          <amp-img
            src="/brand/gear.png"
            width="300"
            height="44"
            title="gear patrol"
            alt="gear patrol"
          />

          <p>
            If you want to be sure your child has a quality phone for back to
            school, but can&apos;t justify the cost of a new one, look to
            UpTrade — you&apos;ll often save between 50 and 70 percent off the
            retail price.
          </p>

          <amp-img
            src="/brand/android-central.png"
            width="300"
            height="100"
            title="android central"
            alt="android central"
          />

          <p>
            Best places to buy a used phone <br />
            UpTrade is another good choice if you want to keep the process of
            buying or selling a used phone as simple as it can be.
          </p>

          <amp-img
            src="/brand/ios-hacker.png"
            width="320"
            height="56"
            title="ios hacker"
            alt="ios hacker"
          />

          <p>
            The Best Place to Buy Used iPhones <br />
            There’s a lot of ways to buy used phones, but out of all the
            options, UpTrade has proven itself to be the best.
          </p>
        </div>
      </main>
    </div>
  );
}
