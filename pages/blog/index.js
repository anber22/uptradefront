import dayjs from "dayjs";

export const config = { amp: true };

export default function Blog({ topic, list }) {
  return (
    <main className="blog-page">
      <div className="blog-page-title">
        <h1>Tech Talk</h1>
      </div>
      <div className="blog-main-content">
        <h2>Featured Teach Talk</h2>
        <a href={`/blog/${topic.slug}`}>
          <div className="blog-topic-card">
            <amp-img
              src={topic.thumbnailFullUrl}
              width="1000"
              height="500"
              layout="responsive"
              data-hero
            />
            <div className="blog-topic-card-content">
              <h3>{topic.title}</h3>
              <div className="topic-desc">{topic.seoDesc}</div>
              <div className="topic-release">
                {dayjs(topic.releaseDt).format("MMM DD, YYYY")}
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="blog-list-content">
        {list.slice(0, 3).map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <a href={`/blog/${item.slug}`} className="blog-list-item" key={index}>
            <amp-img
              src={item.thumbnailFullUrl}
              width="700"
              height="204"
              layout="flex-item"
            />
            <div className="blog-list-item-content">
              <div className="blog-list-item-title">{item.title}</div>
              <div className="blog-list-item-release">
                {dayjs(item.releaseDt).format("MMM DD, YYYY")}
              </div>
              <p className="blog-list-item-desc">{item.seoDesc}</p>
            </div>
          </a>
        ))}

        <div
          className="button-container"
          data-amp-bind-class="showMore ? 'more-blog-list-hidden' : 'button-container'"
        >
          <button on="tap: AMP.setState({ showMore: true })">View more</button>
        </div>

        <div
          className="more-blog-list-hidden"
          data-amp-bind-class="showMore ? 'more-blog-list-show' : 'more-blog-list-hidden'"
        >
          {list.slice(3).map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <a
              href={`/blog/${item.slug}`}
              className="blog-list-item"
              key={index}
            >
              <amp-img
                src={item.thumbnailFullUrl}
                width="700"
                height="204"
                layout="flex-item"
              />
              <div className="blog-list-item-content">
                <div className="blog-list-item-title">{item.title}</div>
                <div className="blog-list-item-release">
                  {dayjs(item.releaseDt).format("MMM DD, YYYY")}
                </div>
                <p className="blog-list-item-desc">{item.seoDesc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const blogResponse = await fetch(
    "https://api-gateway.uptradeit.com/api/market/blog/search",
    {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body: JSON.stringify({
        pageIndex: 0,
        pageSize: 10,
        featured: true,
      }),
    }
  ).then((response) => response.json());

  const blogListResponse = await fetch(
    "https://api-gateway.uptradeit.com/api/market/blog/search",
    {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body: JSON.stringify({
        tagSlug: "",
        featured: false,
        pageNum: 0,
        pageSize: 0,
        all: false,
      }),
    }
  ).then((response) => response.json());

  const topic = blogResponse.data.list[0];
  const list = blogListResponse.data.list.slice(1).map((x) => ({
    thumbnailFullUrl: x.thumbnailFullUrl,
    title: x.title,
    releaseDt: x.releaseDt,
    seoDesc: x.seoDesc,
    slug: x.slug,
  }));

  return {
    props: {
      topic,
      list,
    },
  };
}
