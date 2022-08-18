import { useState } from "react";

export default function FooterBuyNav({
  appleList,
  sellAppleList,
  sellNavbar,
  navbar,
}) {
  const [selectedNav, setSelectedNav] = useState("");
  return (
    <div className="mobile-footer-nav-container react-footer">
      <section className="footer-nav-section">
        <h3
          className="footer-nav footer-nav-item"
          onClick={() =>
            setSelectedNav(selectedNav !== "popular-buy" ? "popular-buy" : "")
          }
        >
          <span>Popular Searchs (Buy)</span> <i className="arrow-right"></i>
        </h3>
        <div
          className="footer-nav-content"
          style={{ display: selectedNav === "popular-buy" ? "flex" : "none" }}
        >
          {appleList?.map((x, index) => (
            <a href={x.url} key={index}>
              Buy Used {x.value}
            </a>
          ))}
        </div>
      </section>
      <section className="footer-nav-section">
        <h3
          className="footer-nav footer-nav-item"
          onClick={() =>
            setSelectedNav(
              selectedNav !== "popular-trade-in" ? "popular-trade-in" : ""
            )
          }
        >
          <span>Popular Searchs (Trade-in)</span>{" "}
          <i className="arrow-right"></i>
        </h3>
        <div
          className="footer-nav-content"
          style={{
            display: selectedNav === "popular-trade-in" ? "flex" : "none",
          }}
        >
          {sellAppleList?.map((x, index) => (
            <a href={x.url} key={index}>
              Buy Used {x.value}
            </a>
          ))}
        </div>
      </section>
      <section className="footer-nav-section">
        <h3
          className="footer-nav footer-nav-item"
          onClick={() => setSelectedNav(selectedNav !== "blog" ? "blog" : "")}
        >
          <span>Blog</span> <i className="arrow-right"></i>
        </h3>
        <div
          className="footer-nav-content"
          style={{ display: selectedNav === "blog" ? "flex" : "none" }}
        >
          <a href="/blog" title="blog">
            All
          </a>
        </div>
      </section>

      <section className="footer-nav-section">
        <h3
          className="footer-nav footer-nav-item"
          onClick={() => setSelectedNav(selectedNav !== "buy" ? "buy" : "")}
        >
          <span>Buy</span> <i className="arrow-right"></i>
        </h3>
        <div
          className="footer-nav-content"
          style={{ display: selectedNav === "buy" ? "flex" : "none" }}
        >
          {navbar?.map((x, index) => (
            <a
              key={x.key}
              href={`/buy-used-refurbished-${x.key
                .split(" ")
                .join("-")
                .toLowerCase()}`}
            >
              {x.key}
            </a>
          ))}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/buy-phone">See All Products</a>
        </div>
      </section>

      <section className="footer-nav-section">
        <h3
          className="footer-nav footer-nav-item"
          onClick={() =>
            setSelectedNav(selectedNav !== "trade-in" ? "trade-in" : "")
          }
        >
          <span>Trade in</span> <i className="arrow-right"></i>
        </h3>
        <div
          className="footer-nav-content"
          style={{ display: selectedNav === "trade-in" ? "flex" : "none" }}
        >
          {sellNavbar?.map((x, index) => (
            <a
              key={x.key}
              href={`/trade-in-${x.key.split(" ").join("-").toLowerCase()}`}
            >
              {x.key}
            </a>
          ))}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/trade-in-phone">See All Products</a>
        </div>
      </section>

      <section className="footer-nav-section">
        <h3
          className="footer-nav footer-nav-item"
          onClick={() =>
            setSelectedNav(selectedNav !== "resource" ? "resource" : "")
          }
        >
          <span>Resources</span> <i className="arrow-right"></i>
        </h3>
        <div
          className="footer-nav-content"
          style={{ display: selectedNav === "resource" ? "flex" : "none" }}
        >
          <a href="/faq" title="...">
            FAQs
          </a>
        </div>
      </section>

      <section className="footer-nav-section">
        <h3
          className="footer-nav footer-nav-item"
          onClick={() =>
            setSelectedNav(selectedNav !== "about-us" ? "about-us" : "")
          }
        >
          <span>About Us</span> <i className="arrow-right"></i>
        </h3>
        <div
          className="footer-nav-content"
          style={{ display: selectedNav === "about-us" ? "flex" : "none" }}
        >
          <a href="/who-we-are" title="Who we are">
            Who We Are
          </a>
          <a href="/contact" title="Contact Us">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
