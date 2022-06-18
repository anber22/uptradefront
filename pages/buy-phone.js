import Script from "next/script";
import Link from "next/link";

export const config = { amp: true };

export default function BuyPhone({ data }) {
  return (
    <div>
      <Script
        async
        custom-element="amp-list"
        src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
      ></Script>
      <Script
        async
        custom-template="amp-mustache"
        src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
      ></Script>
      <amp-state id="list">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "items": ${JSON.stringify(data)}
              }
            `,
          }}
        ></script>
      </amp-state>
      <amp-state id="carrierOptions">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: `[]`,
          }}
        ></script>
      </amp-state>
      <main className="buy-phone-page">
        <div className="buy-phone-conditions">
          <div className="conditions-content">
            <amp-accordion>
              <section className="condition-section">
                <h3 className="condition-header">
                  <span>
                    CONDITION
                    <Link href="/cosmetic-conditions">
                      <amp-img
                        className="condition-alert"
                        src="/svg/alert-circle.svg"
                        width="12"
                        height="12"
                      />
                    </Link>
                  </span>
                  <i className="arrow-right"></i>
                </h3>
                <div className="condition-content">
                  <div>Pristine</div>
                  <div>Excellent</div>
                  <div>Good</div>
                  <div>Fair</div>
                </div>
              </section>

              <section className="condition-section">
                <h3 className="condition-header">
                  <span>carrier</span>
                  <i className="arrow-right"></i>
                </h3>
                <div className="condition-content">
                  <div>All Carriers</div>
                  <div>Unlocked</div>
                  <div>Version</div>
                  <div>AT&T</div>
                  <div>T-Mobile</div>
                  <div>Sprint</div>
                  <div>Xfinity</div>
                </div>
              </section>

              <section className="condition-section">
                <h3 className="condition-header">
                  <span>Manufacturer</span>
                  <i className="arrow-right"></i>
                </h3>
                <div className="condition-content">
                  <div>All Makes</div>
                  <div>Apple</div>
                  <div>Samsung</div>
                  <div>Google</div>
                  <div>LG</div>
                  <div>OnePlus</div>
                  <div>Essential</div>
                </div>
              </section>

              <section className="condition-section">
                <h3 className="condition-header">
                  <span>Model</span>
                  <i className="arrow-right"></i>
                </h3>
                <div className="condition-content">
                  <div>All Models</div>
                  <div>iPhone XR</div>
                  <div>iPhone 8</div>
                  <div>iPhone X</div>
                  <div>iPhone 11</div>
                  <div>iPhone 12 Mini</div>
                  <div>iPhone SE 2020 2nd Gen</div>
                </div>
              </section>
              <section className="condition-section">
                <h3 className="condition-header">
                  <span>Model</span>
                  <i className="arrow-right"></i>
                </h3>
                <div className="condition-content">
                  <div>All Storages</div>
                  <div>8GB</div>
                  <div>16GB</div>
                  <div>32GB</div>
                  <div>64GB</div>
                  <div>128GB</div>
                  <div>256GB</div>
                  <div>512GB</div>
                  <div>1TB</div>
                </div>
              </section>
              <section className="condition-section">
                <h3 className="condition-header">
                  <span>Color</span>
                  <i className="arrow-right"></i>
                </h3>
                <div className="condition-content">
                  <div>All Color</div>
                  <div>Black</div>
                  <div>White</div>
                  <div>Gold</div>
                  <div>Space Grey</div>
                  <div>Silver</div>
                  <div>Red</div>
                  <div>Blue</div>
                </div>
              </section>
            </amp-accordion>
          </div>
        </div>

        <div className="buy-phone-content">
          <div className="buy-phone-page-title">
            <h1>Browse Refurbished Phones and Devices for Sale</h1>
            <h2>
              Among hundreds of used phone and device sellers, we have selected
              a handful of certified resellers and marketplaces that provide
              quality certified used or refurbished phones and devices.
            </h2>
          </div>

          <form className="buy-phone-search-form" action="#" target="_top">
            <amp-autocomplete filter="none">
              <input
                type="text"
                placeholder="Search phone manufacturer and model"
              />
            </amp-autocomplete>
            <button className="btn btn-primary">Search</button>
            <svg
              className="form-search-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </form>
          <amp-selector
            className="carrier-options"
            data-amp-bind-selected="carrierOptions"
            multiple=""
            on="select: AMP.setState({
              carrierOptions: event.selectedOptions
            })"
          >
            <div className="carrier-option" option="Unlocked">
              Unlocked
            </div>
            <div className="carrier-option" option="Verizon">
              Verizon
            </div>
            <div className="carrier-option" option="AT&T">
              AT&T
            </div>
            <div className="carrier-option" option="T-Mobile">
              T-Mobile
            </div>
            <div className="carrier-option" option="Sprint">
              Sprint
            </div>
            <div className="carrier-option" option="Xfinity">
              Xfinity
            </div>
          </amp-selector>
          <div className="option-controllers">
            <div className="filter-controller">
              <label className="dropdown">
                <span
                  on="tap:AMP.setState({ filterDrawerOpen: true })"
                  tabIndex=""
                  role=""
                >
                  <amp-img src="/svg/filter.svg" width="20" height="12" />
                  <span>Filters</span>
                </span>
                <div
                  className="filter-drawer-close"
                  data-amp-bind-class="filterDrawerOpen ? 'filter-drawer-show' : 'filter-drawer-close'"
                >
                  <div
                    className="filter-drawer-backdrop"
                    on="tap:AMP.setState({ filterDrawerOpen: false })"
                    tabIndex=""
                    role=""
                  ></div>
                  <div className="filter-drawer-content">
                    <div className="buy-phone-conditions">
                      <div className="conditions-content">
                        <amp-accordion>
                          <section className="condition-section">
                            <h3 className="condition-header">
                              <span>CONDITION</span>
                              <Link href="/cosmetic-conditions">
                                <amp-img
                                    className="condition-alert"
                                    src="/svg/alert-circle.svg"
                                    width="12"
                                    height="12"
                                />
                              </Link>
                              <i className="arrow-right"></i>
                            </h3>
                            <div className="condition-content">
                              <div>Pristine</div>
                              <div>Excellent</div>
                              <div>Good</div>
                              <div>Fair</div>
                            </div>
                          </section>

                          <section className="condition-section">
                            <h3 className="condition-header">
                              <span>carrier</span>
                              <i className="arrow-right"></i>
                            </h3>
                            <div className="condition-content">
                              <div>All Carriers</div>
                              <div>Unlocked</div>
                              <div>Version</div>
                              <div>AT&T</div>
                              <div>T-Mobile</div>
                              <div>Sprint</div>
                              <div>Xfinity</div>
                            </div>
                          </section>

                          <section className="condition-section">
                            <h3 className="condition-header">
                              <span>Manufacturer</span>
                              <i className="arrow-right"></i>
                            </h3>
                            <div className="condition-content">
                              <div>All Makes</div>
                              <div>Apple</div>
                              <div>Samsung</div>
                              <div>Google</div>
                              <div>LG</div>
                              <div>OnePlus</div>
                              <div>Essential</div>
                            </div>
                          </section>

                          <section className="condition-section">
                            <h3 className="condition-header">
                              <span>Model</span>
                              <i className="arrow-right"></i>
                            </h3>
                            <div className="condition-content">
                              <div>All Models</div>
                              <div>iPhone XR</div>
                              <div>iPhone 8</div>
                              <div>iPhone X</div>
                              <div>iPhone 11</div>
                              <div>iPhone 12 Mini</div>
                              <div>iPhone SE 2020 2nd Gen</div>
                            </div>
                          </section>
                          <section className="condition-section">
                            <h3 className="condition-header">
                              <span>Model</span>
                              <i className="arrow-right"></i>
                            </h3>
                            <div className="condition-content">
                              <div>All Storages</div>
                              <div>8GB</div>
                              <div>16GB</div>
                              <div>32GB</div>
                              <div>64GB</div>
                              <div>128GB</div>
                              <div>256GB</div>
                              <div>512GB</div>
                              <div>1TB</div>
                            </div>
                          </section>
                          <section className="condition-section">
                            <h3 className="condition-header">
                              <span>Color</span>
                              <i className="arrow-right"></i>
                            </h3>
                            <div className="condition-content">
                              <div>All Color</div>
                              <div>Black</div>
                              <div>White</div>
                              <div>Gold</div>
                              <div>Space Grey</div>
                              <div>Silver</div>
                              <div>Red</div>
                              <div>Blue</div>
                            </div>
                          </section>
                        </amp-accordion>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="checkbox" className="dropdown-input" />
              </label>
            </div>
            <div className="sort-controller">
              <label className="dropdown">
                <span
                  className="dropdown-toggle"
                  on="tap:AMP.setState({ sortDrawerOpen: true })"
                  tabIndex=""
                  role=""
                >
                  <amp-img src="/svg/sort.svg" width="20" height="15" />
                  <span className="desktop-sort">Sort By: Lowest Price</span>
                  <span className="mobile-sort">Sort</span>
                  <div
                    className="sort-drawer-close"
                    data-amp-bind-class="sortDrawerOpen ? 'sort-drawer-show' : 'sort-drawer-close'"
                  >
                    <div
                      className="sort-drawer-backdrop"
                      on="tap:AMP.setState({ sortDrawerOpen: false })"
                      tabIndex=""
                      role=""
                    ></div>
                    <div className="sort-drawer-content">
                      <amp-selector on="select: AMP.setState({ sortRule: event.targetOption })">
                        <li className="sort-item" option="lowest" selected>
                          <span>Lowest Price</span>

                          <img width="20" height="20" src="/svg/check.svg" />
                        </li>
                        <li className="sort-item" option="highest">
                          <span>Highest Price</span>
                          <img width="20" height="20" src="/svg/check.svg" />
                        </li>
                        <li className="sort-item" option="best">
                          <span>Best Condition</span>
                          <img width="20" height="20" src="/svg/check.svg" />
                        </li>
                      </amp-selector>
                    </div>
                  </div>
                </span>
                <input type="checkbox" className="dropdown-input" id="sort" />
                <ul className="dropdown-menu">
                  <amp-selector on="select: AMP.setState({ sortRule: event.targetOption })">
                    <li className="dropdown-item" option="lowest" selected>
                      <span>Lowest Price</span>

                      <img width="20" height="20" src="/svg/check.svg" />
                    </li>
                    <li className="dropdown-item" option="highest">
                      <span>Highest Price</span>
                      <img width="20" height="20" src="/svg/check.svg" />
                    </li>
                    <li className="dropdown-item" option="best">
                      <span>Best Condition</span>
                      <img width="20" height="20" src="/svg/check.svg" />
                    </li>
                  </amp-selector>
                </ul>
              </label>
            </div>
          </div>

          <div className="options-container">
            <amp-list
              layout="responsive"
              data-amp-bind-src="carrierOptions"
              width="1000"
              height="50"
              single-item=""
              items="."
              className="filter-options desktop-filter-options"
            >
              <template type="amp-mustache">
                <amp-selector on="select: AMP.setState({ carrierOptions: carrierOptions.filter(x => x != event.targetOption) })">
                  <div className="filter-option" option="{{.}}">
                    {`{{ . }}`}
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                  </div>
                </amp-selector>
              </template>
            </amp-list>

            <amp-list
              layout="fixed-height"
              data-amp-bind-src="carrierOptions"
              width="auto"
              height="0"
              data-amp-bind-height="carrierOptions.length > 4 ? 80 : carrierOptions.length == 0 ? 0 : 40"
              single-item=""
              items="."
              className="filter-options mobile-filter-options"
            >
              <template type="amp-mustache">
                <amp-selector on="select: AMP.setState({ carrierOptions: carrierOptions.filter(x => x != event.targetOption) })">
                  <div className="filter-option" option="{{.}}">
                    {`{{ . }}`}
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                  </div>
                </amp-selector>
              </template>
            </amp-list>
          </div>

          <amp-list
            layout="responsive"
            src="amp-state:list"
            width="1000"
            height="1000"
            className="phone-list desktop-phone-list"
          >
            <template type="amp-mustache">
              <a className="phone-list-item" href="#">
                <div className="img-container">
                  <amp-img width="100" height="100" src="{{ logo }}" />
                </div>
                <div className="description">
                  <span>{`{{ model }}`}</span>
                  <span className="attr">{`{{ attr }}`}</span>
                </div>

                <div className="condition {{ condition }}">
                  {`{{ condition }}`}
                </div>

                <div className="action">
                  <span className="price">${`{{ price }}`}</span>
                  <div className="view-detail">View Detail</div>
                </div>
              </a>
            </template>
          </amp-list>

          <amp-list
            layout="responsive"
            src="amp-state:list"
            width="1000"
            height="1000"
            className="phone-list mobile-phone-list"
          >
            <template type="amp-mustache">
              <a href="#" className="mobile-phone-list-item">
                <div className="top">
                  <amp-img width="50" height="50" src="{{ logo }}" />
                  <div className="condition {{ condition }}">
                    {`{{ condition }}`}
                  </div>
                </div>
                <div className="bottom">
                  <div className="description">
                    <span>{`{{ model }}`}</span>
                    <span className="attr">{`{{ attr }}`}</span>
                  </div>

                  <span className="price">${`{{ price }}`}</span>
                </div>
              </a>
            </template>
          </amp-list>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: [
        {
          model: "iphone8",
          logo: "/brand/backMarket.png",
          attr: "AT&T 64GB Red",
          condition: "Fair",
          price: 279,
        },
      ],
    },
  };
}
