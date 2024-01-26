import Link from "next/link";
import FooterBuyNav from "./buy";
import Subscribe from "./subscribe";

export const Footer = ({ appleList, sellAppleList, buyNavbar, sellNavbar }) => {
  return (
    <>
      <footer className="UpTrade-footer">
        <div>
          <a href="/" title="Home">
            <img
              src="/svg/logo.svg"
              width="92"
              height="22"
              alt="logo"
              title="logo"
            />
          </a>
        </div>

        <div className="footer-container">
          <div className="footer-nav-container">
            <div className="footer-nav-list">
              <div className="footer-nav-title">Buy</div>
              {buyNavbar
                ?.filter((x) => x.key !== "CARRIER")
                .map((item) => (
                  <a
                    key={item.key}
                    className="footer-nav-item"
                    href={`/buy-used-refurbished-${item.key
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                  >
                    {item.key}
                  </a>
                ))}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/buy-phone" className="footer-nav-item">
                See All Products
              </a>
            </div>

            <div className="footer-nav-list">
              <div className="footer-nav-title">Trade-in</div>
              {sellNavbar?.map((item) => (
                <a
                  key={item.key}
                  className="footer-nav-item"
                  href={`/trade-in-${item.key
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                >
                  {item.key}
                </a>
              ))}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/trade-in-phone" className="footer-nav-item">
                See All Products
              </a>
            </div>

            <div className="footer-nav-list">
              <div className="footer-nav-title">Blog</div>
              <a href="/blog" className="footer-nav-item">
                All
              </a>
            </div>

            <div className="footer-nav-list">
              <div className="footer-nav-title">Resources</div>
              <a href="/faq" className="footer-nav-item">
                FAQs
              </a>
            </div>

            <div className="footer-nav-list">
              <div className="footer-nav-title">About Us</div>
              <a href="/who-we-are" className="footer-nav-item">
                Who We Are
              </a>
              <a href="/contact" className="footer-nav-item">
                Contact Us
              </a>
            </div>
          </div>
            <FooterBuyNav
              appleList={appleList}
              sellAppleList={sellAppleList}
              sellNavbar={sellNavbar}
              navbar={buyNavbar?.filter((x) => x.key !== "CARRIER")}
            />
          <div className="footer-subscribe">
            <Subscribe />
            <div className="social-network-subscribe-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/UpTrade_it"
              >
                <img width="42" height="42" src="/svg/twitter.svg" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/UpTradeit"
              >
                <img width="42" height="42" src="/svg/facebook.svg" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/uptradeit/"
              >
                <img width="42" height="42" src="/svg/instgram.svg" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCdrJKNCze37qQIk9EX3a_lw"
              >
                <img width="42" height="42" src="/svg/youtube.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="popular-container">
          <div className="popular-title">Popular Searches (Buy)</div>
          <div className="popular-list">
            {appleList?.map((x, index) => (
              <a href={x.url} className="footer-nav-item" key={index}>
                Buy Used {x.value}
              </a>
            ))}
          </div>
        </div>

        <div className="popular-container">
          <div className="popular-title">Popular Searches (Trade-in)</div>
          <div className="popular-list">
            {sellAppleList?.map((x, index) => (
              <a href={x.url} className="footer-nav-item" key={index}>
                Trade in {x.value}
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <div className="terms">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/sitemap.xml">Sitemap</a>
          <p className="desktop-terms">
            © 2022 UpTrade Networks Inc. All Rights Reserved
          </p>
        </div>
        <p className="mobile-terms">
          © 2022 UpTrade Networks Inc. All Rights Reserved
        </p>
      </div>
    </>
  );
};
