import { useState } from "react";

export default function FooterBuyNav() {
  const [selectedNav, setSelectedNav] = useState("");
  return (
    <div className="mobile-footer-nav-container react-footer">
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
          <a href="#" title="...">
            Sell My Phone
          </a>
          <a href="#" title="...">
            Smartphones
          </a>
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
          <a href="#" title="...">
            Who We Are
          </a>
          <a href="#" title="...">
            Contract Us
          </a>
          <a href="#">Buy in Bulk</a>
        </div>
      </section>
    </div>
  );
}
