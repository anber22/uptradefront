import urlcat from "urlcat";
import Pagination from "rc-pagination";
import { useState } from "react";
import { useAsync } from "react-use";
import Select from "react-select";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { getNavBar } from "../utils/getNavBar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Reviews({
  data: initData,
  navbar,
  appleList,
  sellNavbar,
  sellAppleList,
}) {
  const [params, setParams] = useState({
    page: 0,
    sort: "highest",
    filterValue: 0,
  });

  const { value: data = initData } = useAsync(async () => {
    if (
      params.page === 0 &&
      params.sort === "highest" &&
      params.filterValue === 0
    )
      return initData;

    try {
      return fetch(
        urlcat("https://api.reviews.io/merchant/reviews", {
          page: params.page,
          per_page: 10,
          order: "desc",
          store: "uptradeit-com",
          min_rating:
            params.sort === "highest" && params.filterValue === 0
              ? 5
              : params.filterValue,
          max_rating:
            params.sort === "highest" && params.filterValue === 0
              ? 5
              : params.filterValue,
        })
      ).then((response) => response.json());
    } catch {
      return initData;
    }

    return initData;
  }, [initData, params]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/rc.css" />
      </Head>
      <Header navbar={navbar} sellNavbar={sellNavbar} />
      <main className="reviews-page">
        <NextSeo
          title="Customer Reviews | UpTrade"
          description="Experience the UpTrade Difference. Buy the Best Certified Used Phones for Less. High Quality Refurbished Phones. Money Back Guarantee. Sell Your Used Phone For More. Fast and Easy. Free Shipping. | Reviews"
          canonical={`${process.env.BASEURL}/reviews`}
          openGraph={{
            title: "Customer Reviews | UpTrade",
            type: "Website",
            images: [
              {
                url: `${process.env.BASEURL}/og_logo.png`,
                width: 200,
                height: 200,
              },
            ],
            url: `${process.env.BASEURL}/reviews`,
            description: `Experience the UpTrade Difference. Buy the Best Certified Used Phones for Less. High Quality Refurbished Phones. Money Back Guarantee. Sell Your Used Phone For More. Fast and Easy. Free Shipping. | Reviews`,
            site_name: "UpTrade",
          }}
        />
        <div className="reviews-page-content">
          <h1 className="reviews-page-title">UpTrade Reviews</h1>

          <div className="reviews-page-average_rating">
            {new Array(Math.ceil(+data.stats.average_rating))
              .fill("")
              .map((x, index) => (
                <img
                  key={index}
                  width="24"
                  height="24"
                  alt="rating"
                  src="/rating.svg"
                />
              ))}
          </div>

          <div className="reviews-page-desc">
            <span>{data.stats.average_rating} Rating</span>
            <span>
              Data From
              <img src="/svg/reviewsio-logo.svg" width="80" height="11" />
            </span>
          </div>

          <div className="reviews-controller">
            {params.filterValue === 0 ? (
              <span>
                Sort By
                <Select
                  className="reviews-page-select"
                  name="sort"
                  defaultValue={{
                    label: "Highest Rated",
                    value: "highest_rated",
                  }}
                  onChange={({ value }) =>
                    setParams((prev) => ({ ...prev, page: 0, sort: value }))
                  }
                  options={[
                    { label: "Most Recent", value: "desc" },
                    { label: "Highest Rated", value: "highest" },
                  ]}
                />
              </span>
            ) : null}
            <span>
              Filter By
              <Select
                className="reviews-page-select"
                name="sort"
                defaultValue={{ label: "None", value: "0" }}
                onChange={({ value }) =>
                  setParams((prev) => ({
                    ...prev,
                    page: 0,
                    filterValue: Number(value),
                  }))
                }
                options={[
                  { label: "None", value: "0" },
                  { label: "5 stars", value: "5" },
                  { label: "4 stars", value: "4" },
                  { label: "3 stars", value: "3" },
                  { label: "2 stars", value: "2" },
                  { label: "1 stars", value: "1" },
                ]}
              />
            </span>
          </div>

          <div className="reviews-list">
            {data.reviews.map((x) => {
              return (
                <div key={x.store_review_id} className="review-card">
                  <div className="review-author">
                    {`${x.reviewer.first_name} ${x.reviewer.last_name}`}
                    <div className="review-ratings">
                      {new Array(x.rating).fill("").map((x, index) => (
                        <img
                          key={index}
                          width="24"
                          height="24"
                          alt="rating"
                          src="/rating.svg"
                        />
                      ))}
                      {new Array(5 - x.rating).fill("").map((x, index) => (
                        <img
                          key={index}
                          width="24"
                          height="24"
                          alt="rating"
                          src="/svg/grey-rating.svg"
                        />
                      ))}
                    </div>
                  </div>

                  <div
                    className="review-content"
                    dangerouslySetInnerHTML={{ __html: x.comments }}
                  ></div>

                  <div className="review-date">{x.timeago}</div>
                </div>
              );
            })}
          </div>

          <div className="reviews-pagination">
            <Pagination
              onChange={(value) =>
                setParams((prev) => ({
                  ...prev,
                  page: value - 1,
                }))
              }
              current={params.page + 1}
              total={data.total_pages * 10}
              pageSize={10}
            />
          </div>
        </div>
      </main>
      <Footer appleList={appleList} sellAppleList={sellAppleList} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const reviewsResponse = await fetch(
    urlcat("https://api.reviews.io/merchant/reviews", {
      page: 0,
      per_page: 10,
      order: "desc",
      store: "uptradeit-com",
      min_rating: 5,
      max_rating: 5,
    })
  ).then((response) => response.json());

  const navBarData = await getNavBar();

  return {
    props: { data: reviewsResponse, ...navBarData },
  };
}
