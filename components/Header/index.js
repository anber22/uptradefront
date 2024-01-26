import BuyNav from "./buy";
import Search from "./search";

export const Header = ({ navbar, sellNavbar, hiddenSearch }) => {
  return (
    <header className="mega-menu UpTrade-header">
      <div className="container full-width">
        <div className="row">
          <div className="header">
            <div className="container full-width">
              <nav className="main-menu" id="main-menu">
                <label htmlFor="mobile" id="mobile-menu">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a className="logo-link" href="/" title="Uptrade">
                  <img
                    src="/svg/logo.svg"
                    width="92"
                    height="22"
                    className="img-logo"
                    alt=""
                  />
                  </a>

                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  {!hiddenSearch ? (
                    <a href="/buy-phone" className="search-icon-container">
                      <img
                        src="/svg/search.svg"
                        width="24"
                        height="24"
                        alt="search"
                      />
                    </a>
                  ) : null}
                  <span className="main-menu-dropdown-icon">
                    <i className="hamburger"></i>
                  </span>
                </label>

                <input type="checkbox" id="mobile" />

                <ul id="desktop" className="main-menu">
                  <li className="main-menu-logo">
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/" title="Uptrade" style={{ display: "flex" }}>
                      <img
                        src="/svg/logo.svg"
                        width="92"
                        height="22"
                        className="img-logo"
                        alt="logo"
                      />
                    </a>
                  </li>

                  <form
                    className="search-form"
                    action="#"
                    target="_top"
                    style={{
                      visibility: hiddenSearch ? "hidden" : undefined,
                    }}
                  >
                    <Search />
                  </form>
                  <BuyNav navbar={navbar} />
          
                  <BuyNav navbar={sellNavbar} type="Sell" />

                  <li className="main-menu-dropdown">
                    <a title="Blog">
                      Blog
                      <span className="main-menu-dropdown-icon">
                        <i className="arrow-down"></i>
                      </span>
                    </a>
                    <label
                      className="main-menu-dropdown-icon"
                      htmlFor="main-menu-dropdown-list-blog"
                    >
                      <i className="arrow-down arrow-down-mobile"></i>
                    </label>
                    <input type="checkbox" id="main-menu-dropdown-list-blog" />

                    <ul className="main-menu-dropdown-list">
                      <li>
                        <a href="/blog" title="Blog">
                          All
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="main-menu-dropdown">
                    <a title="Resources">
                      Resources
                      <span className="main-menu-dropdown-icon">
                        <i className="arrow-down"></i>
                      </span>
                    </a>
                    <label
                      className="main-menu-dropdown-icon"
                      htmlFor="main-menu-dropdown-list-resources"
                    >
                      <i className="arrow-down arrow-down-mobile"></i>
                    </label>
                    <input
                      type="checkbox"
                      id="main-menu-dropdown-list-resources"
                    />

                    <ul className="main-menu-dropdown-list">
                      <li>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/faq" title="FAQ">
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="main-menu-dropdown">
                    <a title="About Us">
                      About Us
                      <span className="main-menu-dropdown-icon">
                        <i className="arrow-down"></i>
                      </span>
                    </a>
                    <label
                      className="main-menu-dropdown-icon"
                      htmlFor="main-menu-dropdown-list-about-us"
                    >
                      <i className="arrow-down arrow-down-mobile"></i>
                    </label>
                    <input
                      type="checkbox"
                      id="main-menu-dropdown-list-about-us"
                    />

                    <ul className="main-menu-dropdown-list">
                      <li>
                        <a href="/who-we-are" title="Who We Are">
                          Who We Are
                        </a>
                      </li>
                      <li>
                        <a href="/contact" title="Contact Us">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
