import Head from "next/head";

export const config = { amp: true };

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>UpTrade Mission Statement - Who We Are | UpTrade</title>
      </Head>
      <main className="about-page">
        <div className="title-content">
          <h1>Out Mission</h1>
        </div>
        <div className="mission-statement-content">
          <div className="mission-statement-description">
            <div className="description-container">
              <h2 className="mission-statement-title">Mission Statement</h2>
              <p className="description-content">
                Our mission is to make technology affordable; to empower the
                world by extending the life of used electronics through the
                hands of others. We are committed to providing a safe and
                trustworthy service for everyone.
              </p>
            </div>
          </div>

          <amp-img
            src="/who-we-are-background.jpg"
            width="840"
            height="561"
            className="mission-background"
          />
        </div>

        <div className="our-values">
          <h2 className="our-values-title">Our Values</h2>

          <div className="values-group">
            <div className="values-item">
              <amp-img
                src="/svg/checkcircle.svg"
                width="38"
                height="38"
                className="value-icon"
              />
              <h3 className="value-title">{"Customer's First"}</h3>
              <p className="value-content">
                Treat customers great and great customers will treat you well.
                We are customer focused and continuously measure against our
                customer’s success.
              </p>
            </div>
            <div className="values-item">
              <amp-img
                src="/svg/recycle.svg"
                width="38"
                height="38"
                className="value-icon"
              />
              <h3 className="value-title">Think Sustainably</h3>
              <p className="value-content">
                Make environmentally sustainable decisions that last for
                generations through recycling, reusing, or trading.
              </p>
            </div>
            <div className="values-item">
              <amp-img
                src="/svg/shield.svg"
                width="38"
                height="38"
                className="value-icon"
              />
              <h3 className="value-title">Earn Trust Through Service</h3>
              <p className="value-content">
                Be honest and transparent through every interaction with
                customers, employees, and partners.
              </p>
            </div>
            <div className="values-item">
              <amp-img
                src="/svg/cubeopen.svg"
                width="38"
                height="38"
                className="value-icon"
              />
              <h3 className="value-title">Invent and Simplify</h3>
              <p className="value-content">
                Never settle for what has been done. Be creative and innovative
                using first principle thinking while reducing complexity.
              </p>
            </div>
            <div className="values-item">
              <amp-img
                src="/svg/star.svg"
                width="38"
                height="38"
                className="value-icon"
              />
              <h3 className="value-title">Do Good and Be Responsible</h3>
              <p className="value-content">
                Be kind and take care of your neighbor. Do what is right, do
                what is good, and find balance.
              </p>
            </div>
            <div className="values-item">
              <amp-img
                src="/svg/group.svg"
                width="38"
                height="38"
                className="value-icon"
              />
              <h3 className="value-title">Collaborative Teamwork</h3>
              <p className="value-content">
                We believe in fostering an inclusive work environment where all
                ideas are heard by building a positive culture and family
                spirit.
              </p>
            </div>
          </div>
          <div className="our-team">
            <h2>Our Team</h2>
            <div className="member-group">
              <div className="member-item">
                <amp-img
                  src="/Marco.jpg"
                  width="210"
                  height="210"
                  className="member-avatar"
                />
                <h3>Marco Mai</h3>
                <div className="member-position">Head of Operations</div>
              </div>
              <div className="member-item">
                <amp-img
                  src="/Esteban.jpg"
                  width="210"
                  height="210"
                  className="member-avatar"
                />
                <h3>Esteban Facundo</h3>
                <div className="member-position">Head of Customer Service</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <button className='btn shop-button'>
              Shop Certified Used Devices
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
