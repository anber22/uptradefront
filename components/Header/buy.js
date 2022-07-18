import { useState } from "react";

export default function BuyNav({ navbar }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedNavList, setSelectedNavList] = useState(navbar?.[0]?.values);

  return (
    <li className="main-menu-dropdown">
      <a title="Blog" key="blog">
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
            {navbar?.map((item) => (
              <div
                className={`buy-category-item ${
                  item.key === selectedBrand
                    ? "buy-category-item-selected"
                    : undefined
                }`}
                key={item.key}
                onClick={() => {
                  setSelectedBrand(item.key);
                  setSelectedNavList(item.values);
                }}
              >
                {item.key}
                <img src="/svg/arrow-right.svg" width="20" height="20" />
              </div>
            ))}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a id="all-product" href="/buy-phone">
              See All Products
            </a>
          </div>
          <div className="buy-dropdown-right">
            <div className="buy-nav-list">
              {selectedNavList?.map((x, index) => (
                // eslint-disable-next-line react/jsx-key
                <a className="nav-link-item" href={x.url} key={index}>
                  {x.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mobile-by-dropdown">
          {navbar?.map((item) => (
            <li className="mobile-by-dropdown-item" key={item.key}>
              <h3
                className="header-nav-item"
                onClick={() => {
                  if (selectedBrand === item.key) {
                    setSelectedBrand("");
                    return;
                  }
                  setSelectedBrand(item.key);
                  setSelectedNavList(item.values);
                }}
              >
                <span>{item.key}</span> <i className="arrow-right"></i>
              </h3>
              <div
                className="header-nav-content"
                style={{
                  display: item.key === selectedBrand ? "flex" : "none",
                }}
              >
                {item.values.map((x, index) => (
                  <a href={x.url} className="value-item" key={index}>
                    {x.value}
                  </a>
                ))}
              </div>
            </li>
          ))}
          <li className="mobile-by-dropdown-item">
            <a id="all-product" style={{ padding: 0 }} href="/buy-phone">
              See All Products
            </a>
          </li>
        </div>
      </ul>
    </li>
  );
}
