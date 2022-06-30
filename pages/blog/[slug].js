import urlcat from "urlcat";

export default function BlogDetail({ data }) {
  return (
    <main className="blog-page">
      <div className="blog-page-title">
        <div>Tech Talk</div>
      </div>
      <div className="blog-main-content">
        <div className="blog-detail-main">
          <h1>{data.title}</h1>
          <div className="detail-release-data">
            <div>{data.releaseDt}</div>
            <div>
              <img src="/svg/twitter-s.svg" width="24" height="14" />
              <img src="/svg/facebook-s.svg" width="24" height="14" />
              <img src="/svg/email.svg" width="24" height="14" />
            </div>
          </div>
          <div
            className="blog-detail-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
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

  const list = [...blogListResponse.data.list, ...blogResponse.data.list];

  const paths = list.map((x) => ({
    params: {
      slug: x.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blogDetailResponse = await fetch(
    urlcat("https://api-gateway.uptradeit.com/api/market/blog/slug", {
      slug: params.slug,
    })
  ).then((response) => response.json());

  return {
    props: {
      data: {
        title: blogDetailResponse.data.title,
        releaseDt: blogDetailResponse.data.releaseDt,
        content: blogDetailResponse.data.content,
      },
    },
  };
}
