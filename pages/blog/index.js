import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import { getNavBar } from "../../utils/getNavBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const config = { amp: true };

export default function Blog({
  topic,
  list,
  navbar,
  appleList,
  sellNavbar,
  sellAppleList,
}) {
  return (
    <>
      <Header navbar={navbar} sellNavbar={sellNavbar} />
      <main className="blog-page">
        <NextSeo
          title="UpTrade Blog | UpTrade"
          description="UpTrade's Blog"
          canonical={`${process.env.BASEURL}/blog`}
          openGraph={{
            title: "UpTrade Blog | UpTrade",
            type: "Website",
            images: [
              {
                url: `${process.env.BASEURL}/og_logo.png`,
                width: 200,
                height: 200,
              },
            ],
            url: `${process.env.BASEURL}/blog`,
            description: `UpTrade's Blog`,
            site_name: "UpTrade",
          }}
        />
        <div className="blog-page-title">
          <h1>Tech Talk</h1>
        </div>
        <div className="blog-main-content">
          <h2>Featured Tech Talk</h2>
          <a href={`/blog/${topic.slug}`}>
            <div className="blog-topic-card">
              {topic.thumbnailFullUrl ? (
                <amp-img
                  src={topic.thumbnailFullUrl}
                  width="1000"
                  height="500"
                  layout="responsive"
                  data-hero
                />
              ) : null}
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
            <a
              href={`/blog/${item.slug}`}
              className="blog-list-item"
              key={index}
            >
              {item.thumbnailFullUrl ? (
                <amp-img
                  src={item.thumbnailFullUrl}
                  width="700"
                  height="204"
                  layout="flex-item"
                />
              ) : null}
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
            <button on="tap: AMP.setState({ showMore: true })">
              View more
            </button>
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
                {item.thumbnailFullUrl ? (
                  <amp-img
                    src={item.thumbnailFullUrl}
                    width="700"
                    height="204"
                    layout="flex-item"
                  />
                ) : null}
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
      <Footer appleList={appleList} sellAppleList={sellAppleList} />
    </>
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

  const navBarData = await getNavBar();

  return {
    props: {
      topic,
      list,
      ...navBarData,
    },
  };
}
