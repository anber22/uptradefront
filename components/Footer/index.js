import Link from "next/link";
import { useAmp } from "next/amp";
import FooterBuyNav from "./buy";

export const Footer = () => {
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
            <a href="#" className="footer-nav-item">
              Buy Used iPhone
            </a>
            <a href="#" className="footer-nav-item">
              Buy Used iPhone 7
            </a>
            <a href="#" className="footer-nav-item">
              Buy Used iPhone 8
            </a>
            <a href="#" className="footer-nav-item">
              Buy Used iPhone X
            </a>
            <a href="#" className="footer-nav-item">
              Buy Used iPhone XR
            </a>
          </div>

          <div className="footer-nav-list">
            <div className="footer-nav-title">Blog</div>
            <a href="#" className="footer-nav-item">
              Sell My Phone
            </a>
            <a href="#" className="footer-nav-item">
              Smartphones
            </a>
          </div>

          <div className="footer-nav-list">
            <div className="footer-nav-title">Resources</div>
            <a href="#" className="footer-nav-item">
              FAQs
            </a>
            <a href="#" className="footer-nav-item">
              Return and Exchange Policy
            </a>
            <a href="#" className="footer-nav-item">
              Shipping Policy
            </a>
            <a href="#" className="footer-nav-item">
              Protection Plan
            </a>
          </div>

          <div className="footer-nav-list">
            <div className="footer-nav-title">About Us</div>
            <a href="#" className="footer-nav-item">
              Who We Are
            </a>
            <a href="#" className="footer-nav-item">
              Contract Us
            </a>
            <a href="#" className="footer-nav-item">
              Buy in Bulk
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
                  <span>Blog</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  <a href="#" title="...">
                    Sell My Phone
                  </a>
                  <a href="#" title="...">
                    Smartphones
                  </a>
                </div>
              </section>
              <section className="footer-nav-section">
                <h3 className="footer-nav">
                  <span>Resources</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  <a href="#" title="...">
                    FAQs
                  </a>
                  <a href="#" title="...">
                    Return and Exchange Policy
                  </a>
                  <a href="#">Shipping Policy</a>
                  <a href="#">Protection Plan</a>
                </div>
              </section>
              <section className="footer-nav-section">
                <h3 className="footer-nav">
                  <span>About Us</span> <i className="arrow-right"></i>
                </h3>

                <div className="footer-nav-list">
                  <a href="#" title="...">
                    Who We Are
                  </a>
                  <a href="#" title="...">
                    Contract Us
                  </a>
                  <a href="#">Buy in Bulk</a>
                </div>
              </section>
            </amp-accordion>
          </div>
        ) : <FooterBuyNav />}
        <div className="footer-subscribe">
          <div className="footer-subscribe-title">
            Subscribe To Our Newsletter
          </div>
          <form className="subscribe-form" action="#" target="_top">
            {isAmp ? (
              <amp-autocomplete filter="none">
                <input placeholder="Email" type="text" />
              </amp-autocomplete>
            ) : (
              <input placeholder="Email" type="email" />
            )}
            <button className="btn btn-primary">Subscribe</button>
          </form>

          {isAmp ? (
            <div className="social-network-subscribe-container">
              <a href="#">
                <amp-img width="42" height="42" src="/svg/twitter.svg" />
              </a>
              <a href="#">
                <amp-img width="42" height="42" src="/svg/facebook.svg" />
              </a>
              <a href="#">
                <amp-img width="42" height="42" src="/svg/instgram.svg" />
              </a>
              <a href="#">
                <amp-img width="42" height="42" src="/svg/youtube.svg" />
              </a>
            </div>
          ) : (
            <div className="social-network-subscribe-container">
              <a href="#">
                <img width="42" height="42" src="/svg/twitter.svg" />
              </a>
              <a href="#">
                <img width="42" height="42" src="/svg/facebook.svg" />
              </a>
              <a href="#">
                <img width="42" height="42" src="/svg/instgram.svg" />
              </a>
              <a href="#">
                <img width="42" height="42" src="/svg/youtube.svg" />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
