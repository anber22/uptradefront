import { useAmp } from "next/amp";
import BuyNav from "./buy";
import Search from "./search";

export const Header = ({ navbar }) => {
  const isAmp = useAmp();
  return (
    <header className="mega-menu UpTrade-header">
      <amp-state id="buyNavbar">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navbar) }}
        ></script>
      </amp-state>
      <amp-state id="filterNavBar">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: `{ "items": ${JSON.stringify(navbar[0].values)} }`,
          }}
        ></script>
      </amp-state>
      <div className="container full-width">
        <div className="row">
          <div className="header">
            <div className="container full-width">
              <nav className="main-menu" id="main-menu">
                <label htmlFor="mobile" id="mobile-menu">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a className="logo-link" href="/" title="Uptrade">
                    {isAmp ? (
                      <amp-img
                        alt="logo"
                        title="logo"
                        src="/svg/logo.svg"
                        width="92"
                        height="22"
                        className="img-logo"
                      ></amp-img>
                    ) : (
                      <img
                        src="/svg/logo.svg"
                        width="92"
                        height="22"
                        className="img-logo"
                        alt=""
                      />
                    )}
                  </a>

                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a href="/buy-phone" className="search-icon-container">
                    {isAmp ? (
                      <amp-img
                        src="/svg/search.svg"
                        width="24"
                        height="24"
                        alt="search"
                      />
                    ) : (
                      <img
                        src="/svg/search.svg"
                        width="24"
                        height="24"
                        alt="search"
                      />
                    )}
                  </a>
                  <span className="main-menu-dropdown-icon">
                    <i className="hamburger"></i>
                  </span>
                </label>

                <input type="checkbox" id="mobile" />

                <ul id="desktop" className="main-menu">
                  <li className="main-menu-logo">
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/" title="Uptrade" style={{ display: "flex" }}>
                      {isAmp ? (
                        <amp-img
                          alt="logo"
                          title="logo"
                          src="/svg/logo.svg"
                          width="92"
                          height="22"
                          className="img-logo"
                        ></amp-img>
                      ) : (
                        <img
                          src="/svg/logo.svg"
                          width="92"
                          height="22"
                          className="img-logo"
                          alt="logo"
                        />
                      )}
                    </a>
                  </li>

                  {isAmp ? (
                    <form className="search-form" action="#" target="_top">
                      <amp-autocomplete
                        filter="substring"
                        src="https://api.276qa.com/search/product"
                        query="name"
                        filter-value="name"
                        items="data"
                        on={`select: AMP.navigateTo(url=event.valueAsObject.url)`}
                      >
                        <input
                          type="search"
                          placeholder="Search phone manufacturer and model"
                        />
                        <template type="amp-mustache">
                          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                          <div
                            data-value="{{name}}"
                            data-json="{{objToJson}}"
                          >{`{{name}}`}</div>
                        </template>
                      </amp-autocomplete>
                      <amp-img
                        className="search-icon"
                        width="24"
                        height="24"
                        layout="responsive"
                        src="/svg/search.svg"
                      />
                    </form>
                  ) : (
                    <form className="search-form" action="#" target="_top">
                      <Search />
                      <img
                          className="search-icon"
                          width="24"
                          height="24"
                          src="/svg/search.svg"
                      />
                    </form>
                  )}

                  {isAmp ? (
                    <li className="main-menu-dropdown">
                      <a title="Buy">
                        Buy
                        <span className="main-menu-dropdown-icon">
                          <i className="arrow-down"></i>
                        </span>
                      </a>
                      <label
                        className="main-menu-dropdown-icon"
                        htmlFor="main-menu-dropdown-list-buy"
                      >
                        <i className="arrow-down arrow-down-mobile"></i>
                      </label>
                      <input type="checkbox" id="main-menu-dropdown-list-buy" />

                      <ul
                        className="main-menu-dropdown-list"
                        id="desktop-buy-menu-dropdown-list"
                      >
                        <div id="desktop-buy-dropdown">
                          <div className="buy-dropdown-left">
                            <amp-selector
                              on={`select: AMP.setState({ filterNavBar: { items: buyNavbar.filter(a => event.targetOption == a.key)[0].values } })`}
                            >
                              {navbar?.map((item) => (
                                <div
                                  className="buy-category-item"
                                  option={item.key}
                                  key={item.key}
                                  selected={item.key === "Apple"}
                                >
                                  {item.key}
                                  <amp-img
                                    src="/svg/arrow-right.svg"
                                    width="20"
                                    height="20"
                                  />
                                </div>
                              ))}
                            </amp-selector>

                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a id="all-product" href="/buy-phone">
                              Sell all product
                            </a>
                          </div>
                          <div className="buy-dropdown-right">
                            <amp-list
                              layout="flex-item"
                              src="amp-state:filterNavBar"
                              data-amp-bind-src="filterNavBar.items"
                              width="400"
                              height="300"
                              binding="no"
                            >
                              <template type="amp-mustache">
                                <a
                                  className="nav-link-item"
                                  href="{{url}}"
                                >{`{{value}}`}</a>
                              </template>
                            </amp-list>
                          </div>
                        </div>

                        <div id="mobile-buy-dropdown">
                          <amp-accordion>
                            {navbar?.map((item) => (
                              <section
                                className="mobile-by-dropdown-item"
                                key={item.key}
                              >
                                <h3>
                                  <span>{item.key}</span>{" "}
                                  <i className="arrow-right"></i>
                                </h3>

                                <div className="value-container">
                                  {item.values.map((x) => (
                                    <a
                                      className="value-item"
                                      href={x.url}
                                      key={x.valueId}
                                    >
                                      {x.value}
                                    </a>
                                  ))}
                                </div>
                              </section>
                            ))}
                          </amp-accordion>
                        </div>
                      </ul>
                    </li>
                  ) : (
                    <BuyNav navbar={navbar} />
                  )}

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
                        <a href="#" title="Buy Used Phones">
                          Buy Used Phones
                        </a>
                      </li>
                      <li>
                        <a href="/blog" title="Smartphones">
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
                        <a href="#" title="Who We Are">
                          Who We Are
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Contract Us">
                          Contract Us
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Buy in Bulk">
                          Buy in Bulk
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
