import Link from "next/link";
import { useAmp } from "next/amp";
import FooterBuyNav from "./buy";
import Subscribe from "./subscribe";

export const Footer = ({ appleList }) => {
  const isAmp = useAmp();
  return (
    <footer className="UpTrade-footer">
      <div>
        <Link href="/" title="Home">
          {isAmp ? (
            <amp-img
              src="/svg/logo.svg"
              width="92"
              height="22"
              alt="logo"
              title="logo"
            />
          ) : (
            <img
              src="/svg/logo.svg"
              width="92"
              height="22"
              alt="logo"
              title="logo"
            />
          )}
        </Link>
      </div>

      <div className="footer-container">
        <div className="footer-nav-container">
          <div className="footer-nav-list">
            <div className="footer-nav-title">Popular Searches</div>
            {appleList?.map((x, index) => (
              <a href={x.url} className="footer-nav-item" key={index}>
                Buy Used {x.value}
              </a>
            ))}
          </div>

          <div className="footer-nav-list">
            <div className="footer-nav-title">Buy</div>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/buy-phone" className="footer-nav-item">
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

        {isAmp ? (
          <div
            className="mobile-footer-nav-container"
            id="mobile-footer-nav-container"
          >
            <amp-accordion>
              <section className="footer-nav-section">
                <h3 className="footer-nav">
                  <span>Popular Searchs</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  <a href="/buy-used-refurbished-apple">Buy Used iPhone</a>
                  {appleList?.map((x, index) => (
                    <a href={x.url} key={index}>
                      Buy Used {x.value}
                    </a>
                  ))}
                </div>
              </section>
              <section className="footer-nav-section">
                <h3 className="footer-nav">
                  <span>Blog</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  <a href="/blog" title="All">
                    All
                  </a>
                </div>
              </section>
              <section className="footer-nav-section">
                <h3 className="footer-nav">
                  <span>Buy</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a href="/buy-phone">See All Products</a>
                </div>
              </section>
              <section className="footer-nav-section">
                <h3 className="footer-nav">
                  <span>Resources</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  <a href="/faq" title="...">
                    FAQs
                  </a>
                </div>
              </section>
              <section className="footer-nav-section">
                <h3 className="footer-nav">
                  <span>About Us</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  <a href="/who-we-are" title="Who we are">
                    Who We Are
                  </a>
                  <a href="/contact" title="Contact Us">
                    Contact Us
                  </a>
                </div>
              </section>
            </amp-accordion>
          </div>
        ) : (
          <FooterBuyNav appleList={appleList} />
        )}
        <div className="footer-subscribe">
          {isAmp ? (
            <>
              <div className="footer-subscribe-title">
                Subscribe To Our Newsletter
              </div>

              <form
                className="subscribe-form"
                method="post"
                action-xhr="https://api-gateway.uptradeit.com/api/message_books/subscribed"
                custom-validation-reporting="show-all-on-submit"
                on="submit-error: AMP.setState({ subSuccess: true })"
                target="_top"
              >
                <div className="subscribe-form-input">
                  <input type="email" name="email" id="email5" required on="change: AMP.setState({ subSuccess: false })" />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
                <div>
                  <span
                    visible-when-invalid="valueMissing"
                    validation-for="email5"
                  >
                    Please enter an valid email.
                  </span>
                  <span
                    visible-when-invalid="typeMismatch"
                    validation-for="email5"
                  >
                    Invalid email address, only letters, numbers, periods (‘.’),
                    and underscores (‘_’) are allowed in your user name and
                    domain.
                  </span>
                </div>
              </form>

              <div
                className="subscribe-hidden"
                data-amp-bind-class="subSuccess ? 'subscribe-success' : 'subscribe-hidden'"
              >
                Succeed to subscribe
              </div>
            </>
          ) : (
            <Subscribe />
          )}

          {isAmp ? (
            <div className="social-network-subscribe-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/UpTrade_it"
              >
                <amp-img width="42" height="42" src="/svg/twitter.svg" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/UpTradeit"
              >
                <amp-img width="42" height="42" src="/svg/facebook.svg" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/uptradeit/"
              >
                <amp-img width="42" height="42" src="/svg/instgram.svg" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCdrJKNCze37qQIk9EX3a_lw"
              >
                <amp-img width="42" height="42" src="/svg/youtube.svg" />
              </a>
            </div>
          ) : (
            <div className="social-network-subscribe-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https:///twitter.com/UpTrade_it"
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
          )}
        </div>
      </div>
    </footer>
  );
};
