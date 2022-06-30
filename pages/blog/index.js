export const config = { amp: true };

export default function Blog({ topic }) {
  return (
    <main className="blog-page">
      <div className="blog-page-title">
        <h1>Tech Talk</h1>
      </div>
      <div className="blog-main-content">
        <h2>Featured Teach Talk</h2>
        <div className="blog-topic-card">
          <amp-img
            src={topic.thumbnailFullUrl}
            width="1000"
            height="500"
            layout="responsive"
          />
          <div className="blog-topic-card-content">
            <h3>{topic.title}</h3>
            <div className="topic-desc">{topic.seoDesc}</div>
            <div className="topic-release">{topic.releaseDt}</div>
          </div>
        </div>
      </div>
      <div className="blog-tag-content">
        <amp-selector></amp-selector>
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

  const topic = blogResponse.data.list[0];

  return {
    props: {
      topic,
    },
  };
}
