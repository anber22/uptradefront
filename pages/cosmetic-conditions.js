import { NextSeo } from "next-seo";
import { getNavBar } from "../utils/getNavBar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const config = { amp: true };

export default function CosmeticConditions({
  navbar,
  appleList,
  sellNavbar,
  sellAppleList,
}) {
  return (
    <>
      <Header navbar={navbar} sellNavbar={sellNavbar} />
      <main className="cosmetic-condition-page">
        <NextSeo
          title="Condition Comparison of Used Phones and Devices"
          description="Compare Used Condition and Grading Definitions of UpTrade, Apple, Amazon, BackMarket, Gazelle, and other Used Phone and Device Seller"
          canonical={`${process.env.BASEURL}/cosmetic-conditions`}
        />
        <h1 className="cosmetic-condition-main-title">Cosmetic Conditions</h1>

        <h2 className="cosmetic-condition-secondary-title">Definition</h2>

        <div className="divider" />

        <p className="definition-description">
          Tips: All Certified Used Phones/Devices are fully functional. The main
          difference is cosmetic. The better the condition, the more expensive.
          If you want the cheapest, pick Fair. If you want a balanced choice,
          choose Good.
        </p>

        <div className="conditions">
          <div className="condition-item">
            <div className="condition Pristine">Pristine</div>
            <div>Near flawless. Like New.</div>
          </div>
          <div className="condition-item">
            <div className="condition Excellent">Excellent</div>
            <div>Minor Scratches (NOT visible at arm&apos;s length)</div>
          </div>
          <div className="condition-item">
            <div className="condition Good">Good</div>
            <div>Light Scratches visible at arm&apos;s length</div>
          </div>
          <div className="condition-item">
            <div className="condition Fair">Fair</div>
            <div>Heavy sign of wear and tear but still fully functional</div>
          </div>
        </div>

        <h2 className="cosmetic-condition-secondary-title">Comparison</h2>
        <div className="divider" />

        <p className="comparison-description">
          Each seller has a different definition and grading of used conditions.
          We have matched their grades to ours for your ease of use as below.
        </p>

        <table className="desktop-comparison-table">
          <thead>
            <tr>
              <th scope="col">UpTrade</th>
              <th scope="col">Apple</th>
              <th scope="col">Amazon</th>
              <th scope="col">BackMarket</th>
              <th scope="col">Gazelle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row first-th">
                <div className="condition Pristine">Pristine</div>
              </th>
              <td>Refurbished</td>
              <td>Renew Premium</td>
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row">
                <div className="condition Excellent">Excellent</div>
              </th>
              <td />
              <td>Renew</td>
              <td>Excellent</td>
              <td>Excellent</td>
            </tr>

            <tr>
              <th scope="row">
                <div className="condition Good">Good</div>
              </th>
              <td />
              <td />
              <td>Good</td>
              <td>Good</td>
            </tr>

            <tr>
              <th scope="row">
                <div className="condition Fair">Fair</div>
              </th>
              <td />
              <td />
              <td>Fair</td>
              <td>Fair</td>
            </tr>
          </tbody>
        </table>

        <div className="mobile-table-container">
          <table className="mobile-comparison-table">
            <thead>
              <tr>
                <th scope="col">UpTrade</th>
                <th scope="col">Apple</th>
                <th scope="col">Amazon</th>
                <th scope="col">BackMarket</th>
                <th scope="col">Gazelle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first-th">
                  <div className="condition Pristine">Pristine</div>
                </td>
                <td>Refurbished</td>
                <td>Renew Premium</td>
                <td />
                <td />
              </tr>
              <tr>
                <td className="first-th">
                  <div className="condition Excellent">Excellent</div>
                </td>
                <td />
                <td>Renew</td>
                <td>Excellent</td>
                <td>Excellent</td>
              </tr>

              <tr>
                <td className="first-th">
                  <div className="condition Good">Good</div>
                </td>
                <td />
                <td />
                <td>Good</td>
                <td>Good</td>
              </tr>

              <tr>
                <td className="first-th">
                  <div className="condition Fair">Fair</div>
                </td>
                <td />
                <td />
                <td>Fair</td>
                <td>Fair</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer
        appleList={appleList}
        sellAppleList={sellAppleList}
        buyNavbar={navbar}
        sellNavbar={sellNavbar}
      />
    </>
  );
}

export async function getStaticProps() {
  const navBarData = await getNavBar();

  return {
    props: {
      ...navBarData,
    },
  };
}
