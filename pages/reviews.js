import urlcat from "urlcat";
import Pagination from "rc-pagination";
import { useState } from "react";
import { useAsync } from "react-use";
import Select from "react-select";
export default function Reviews({ data: initData }) {
  const [params, setParams] = useState({
    page: 0,
    sort: "highest_rated",
    filterValue: 0,
  });

  const { value: data = initData } = useAsync(async () => {
    if (
      params.page === 0 &&
      params.sort === "highest_rated" &&
      params.filterValue === 0
    )
      return initData;

    try {
      return fetch(
        urlcat("https://api.reviews.io/merchant/reviews", {
          page: params.page,
          per_page: 10,
          order: "asc",
          sort: params.sort,
          store: "uptradeit-com",
          min_rating: params.filterValue,
          max_rating: params.filterValue,
        })
      ).then((response) => response.json());
    } catch {
      return initData;
    }

    return initData;
  }, [initData, params]);

  return (
    <main className="reviews-page">
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
          <span>
            Sort By
            <Select
              className="reviews-page-select"
              name="sort"
              defaultValue={{ label: "Highest Rated", value: "highest_rated" }}
              onChange={({ value }) =>
                setParams((prev) => ({ ...prev, sort: value }))
              }
              options={[
                { label: "Most Recent", value: "desc" },
                { label: "Highest Rated", value: "highest_rated" },
              ]}
            />
          </span>
          <span>
            Filter By
            <Select
              className="reviews-page-select"
              name="sort"
              defaultValue={{ label: "None", value: "0" }}
              onChange={({ value }) =>
                setParams((prev) => ({
                  ...prev,
                  filterValue: value,
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
  );
}

export async function getStaticProps({ params }) {
  const reviewsResponse = await fetch(
    urlcat("https://api.reviews.io/merchant/reviews", {
      page: 0,
      per_page: 10,
      order: "asc",
      sort: "highest_rated",
      store: "uptradeit-com",
      min_rating: 0,
      max_rating: 0,
    })
  ).then((response) => response.json());

  return {
    props: { data: reviewsResponse },
  };
}
