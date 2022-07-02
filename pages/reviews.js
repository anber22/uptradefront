import urlcat from "urlcat";
import Pagination from "rc-pagination";
import { useState } from "react";
import { useAsync } from "react-use";

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
          order: "rating",
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
            <select
              className="reviews-page-select"
              name="sort"
              value={params.sort}
              onChange={(event) =>
                setParams((prev) => ({ ...prev, sort: event.target.value }))
              }
            >
              <option value="desc">Most Recent</option>
              <option value="highest_rated">Highest Rated</option>
            </select>
          </span>
          <span>
            Filter By
            <select
              className="reviews-page-select"
              name="sort"
              value={params.filterValue}
              onChange={(event) =>
                setParams((prev) => ({
                  ...prev,
                  filterValue: event.target.value,
                }))
              }
            >
              <option value="0">None</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 stars</option>
            </select>
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
      order: "rating",
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
