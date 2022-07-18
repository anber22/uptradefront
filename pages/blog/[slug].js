import urlcat from "urlcat";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import { getNavBar } from "../../utils/getNavBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function BlogDetail({ data, navbar, appleList }) {
  return (
    <>
      <Header navbar={navbar} />
      <main className="blog-page">
        <NextSeo
          title={data?.title}
          description={data?.seoDesc}
          canonical={`${process.env.BASEURL}/blog/${data?.slug}`}
          openGraph={{
            title: data?.title,
            type: "Website",
            images: [
              {
                url: `${process.env.BASEURL}/og_logo.png`,
                width: 200,
                height: 200,
              },
            ],
            url: `${process.env.BASEURL}/blog/${data?.slug}`,
            description: data?.seoDesc,
            site_name: "UpTrade",
          }}
        />
        <div className="blog-page-title">
          <div>Tech Talk</div>
        </div>
        <div className="blog-main-content">
          <div className="blog-detail-main">
            <h1>{data.title}</h1>
            <div className="detail-release-data">
              <div>{dayjs(data.releaseDt).format("MMM DD, YYYY")}</div>
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
      <Footer appleList={appleList} />
      <div className="copy-right">
        <div className="terms">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>

        <p>© 2022 UP Trade Technologies, Inc.</p>
      </div>
    </>
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

  const navbarData = await getNavBar();
  return {
    props: {
      data: {
        title: blogDetailResponse.data.title,
        releaseDt: blogDetailResponse.data.releaseDt,
        content: blogDetailResponse.data.content,
        slug: blogDetailResponse.data.slug,
        seoDesc: blogDetailResponse.data.seoDesc,
      },
      ...navbarData,
    },
  };
}
