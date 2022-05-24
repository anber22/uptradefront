export const Header = () => {
  return (
    <header className="mega-menu UpTrade-header">
      <div className="container full-width">
        <div className="row">
          <div className="header">
            <div className="container full-width">
              <nav className="main-menu" id="main-menu">
                <label htmlFor="mobile" id="mobile-menu">
                  <a href="#" title="...">
                    <amp-img
                      alt="..."
                      title="..."
                      src="/svg/logo.svg"
                      width="92"
                      height="22"
                      className="img-logo"
                    ></amp-img>
                    <span className="logo">
                      Google AMP <strong>Mobile</strong> Navigation
                    </span>
                  </a>

                  <span className="main-menu-dropdown-icon">
                    <i className="hamburger"></i>
                  </span>
                </label>

                <input type="checkbox" id="mobile" />

                <ul
                  className="main-menu"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <li className="main-menu-logo">
                    <a href="#" title="..." style={{ display: "flex" }}>
                      <amp-img
                        alt="logo"
                        title="logo"
                        src="/svg/logo.svg"
                        width="92"
                        height="22"
                        className="img-logo"
                        
                      ></amp-img>
                    </a>
                  </li>

                  <form
                    className="search-form"
                    action="https://amp.dev/documentation/examples/api/echo"
                    target="_top"
                  >
                    <amp-autocomplete filter="substring">
                      <input placeholder="Search phone manufacturer and model" />
                    </amp-autocomplete>
                    <amp-img
                      className="search-icon"
                      width="24"
                      height="24"
                      layout="responsive"
                      src="/svg/search.svg"
                      
                    />
                  </form>


                  <li className="main-menu-dropdown">
                    <a title="...">
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
                        <a href="#" title="...">
                          Sell My Phone
                        </a>
                      </li>
                      <li>
                        <a href="#" title="...">
                          Smartphones
                        </a>
                      </li>
                    </ul>
                  </li>


                  <li className="main-menu-dropdown">
                    <a title="...">
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
                    <input type="checkbox" id="main-menu-dropdown-list-resources" />

                    <ul className="main-menu-dropdown-list">
                      <li>
                        <a href="#" title="...">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="#" title="...">
                          Return and Exchange Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" title="...">
                          Shipping Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" title="...">
                          Protection Plan
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="main-menu-dropdown">
                    <a title="...">
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
                    <input type="checkbox" id="main-menu-dropdown-list-about-us" />

                    <ul className="main-menu-dropdown-list">
                      <li>
                        <a href="#" title="...">
                          Who We Are
                        </a>
                      </li>
                      <li>
                        <a href="#" title="...">
                          Contract Us
                        </a>
                      </li>
                      <li>
                        <a href="#" title="...">
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
