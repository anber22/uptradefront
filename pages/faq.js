import Head from "next/head";

export const config = { amp: true };

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>Frequently Asked Questions | UpTrade</title>
      </Head>

      <main className="faq-page">
        <h1 className="faq-page-title">
          Frequently Asked Questions about Used Phones
        </h1>
        <div>
          <div>
            <h2>General</h2>
          </div>
          <amp-accordion>
            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>Why Choose UpTrade?</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                UpTrade was in the business of selling phones. We understand
                what is required to have the best possible experience for our
                customers. We hand select our sellers and hold them to the
                highest integrity for our customers. We will provide you the
                do’s and don’t when buying used. We are committed to saving you
                money and avoiding the hassle of purchasing from dishonest
                sellers.
              </div>
            </section>

            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>What does “Certified Used Phone” mean?</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                Typically, a “Certified Used Phone” means that the seller has
                gone through significant testing measures to ensure that the
                device is fully functional and ready to be used.
              </div>
            </section>

            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>Difference between Used and Certified Used</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                Most, if not all of our sellers sell Certified Used devices. All
                phones have gone through multiple inspection points to ensure
                you get the best device possible. A typical used phone just
                indicates that it has been used and is not new out of the box
                when you receive it.
              </div>
            </section>

            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>Difference between Refurbished and Certified Used</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                By definition, a &quot;Refurbished&quot; phone means that it has
                been repaired or reconditioned by the seller, while Certified
                Used is not repaired. However, there is no clear line between
                these two. Each merchant has its own definition. Therefore, they
                are basically the same. Both have been thoroughly tested by the
                seller to guarantee functionality. They can both offer great
                value.
              </div>
            </section>
          </amp-accordion>
        </div>

        <div>
          <div>
            <h2>Buying Used Phones / Devices</h2>
          </div>
          <amp-accordion>
            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>Am I buying from UpTrade?</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                UpTrade is not directly selling you the device, rather we are
                partnered with sellers that are held to the highest of
                standards. We provide the simplicity of finding the best deal in
                one place.
              </div>
            </section>

            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>How do I know which phone to choose?</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                There are so many factors that go into choosing the right
                device. The most important considerations to weigh out are:
                <br />
                1. The model you want. <br />
                2. The condition of the device. <br /> 3. The price. <br />
                4. The “extras” that are offered such as warranty, insurance,
                and accessories.
              </div>
            </section>

            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>Are Certified Used/Refurbished phones worth it?</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                Absolutely! Mobile devices diminish in price year over year
                (Sometimes day to day!) as new models are constantly being
                released. We are in a time where these changes are subtle with
                every new device release, and you can do almost anything that a
                new phone can do with the older model, potentially saving
                hundreds of dollars in the process.
              </div>
            </section>
          </amp-accordion>
        </div>

        <div>
          <div>
            <h2>Warranty and Support</h2>
          </div>
          <amp-accordion>
            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>Does UpTrade provide warranty and support?</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                As the phones are not sold by us directly, we are not able to
                provide warranty support. You may contact the merchant (e.g.
                Amazon, Gazelle etc.) for the warranty information. We will work
                with you to hold the seller accountable based on each of their
                terms and conditions if problems arise.
              </div>
            </section>

            <section className="faq-section">
              <h3 className="faq-section-title">
                <span>Is UpTrade Protection still available for purchase?</span>
                <i className="arrow-right"></i>
              </h3>

              <div className="faq-section-content">
                Our UpTrade Protection has been discontinued and is no longer
                available.
              </div>
            </section>
          </amp-accordion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            marginTop: 36,
          }}
        >
          <button className="btn faq-button">Contract Us</button>
        </div>
      </main>
    </div>
  );
}
