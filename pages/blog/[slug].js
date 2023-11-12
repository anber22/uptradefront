import urlcat from "urlcat";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import { getNavBar } from "../../utils/getNavBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Head from "next/head";
export const config = { amp: true };

export default function BlogDetail({
  data,
  navbar,
  appleList,
  sellNavbar,
  sellAppleList,
  thumbnailFullUrl,
}) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: data?.title,
              image: [data.thumbnailFullUrl],
              datePublished: data.releaseDt,
              dateModified: data.editDt,
              author: [
                {
                  "@type": "Person",
                  name: data.author,
                  url: `${process.env.BASEURL}/who-we-are`,
                },
              ],
            }),
          }}
        />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebPage",
              name: data?.title,
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: [".blog-detail-content"],
              },
              url: `${process.env.BASEURL}/blog/${data?.slug}`,
            }),
          }}
        /> */}
      </Head>
      <Header navbar={navbar} sellNavbar={sellNavbar} />
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
                url: data.thumbnailFullUrl,
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
              <div>
                {dayjs(data.releaseDt).format("MMM DD, YYYY")}{" "}
                <span style={{ marginLeft: 8 }}>{data.author}</span>
              </div>
            </div>
            <div
              className="blog-detail-content"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
          </div>
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

export async function getStaticPaths() {
  const blogResponse = await fetch(
    "https://api-single-test.uptradeit.com/api/api/market/blog/search",
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

  console.log("fetch blog list");
  const blogListResponse = await fetch(
    "https://api-single-test.uptradeit.com/api/api/market/blog/search",
    {
      method: "POST",
      headers: {
        ["Content-Type"]: "application/json",
      },
      body: JSON.stringify({
        tagSlug: "",
        featured: false,
        all: true,
      }),
    }
  ).then((response) => response.json());

  const list = [...blogListResponse.data.data, ...blogResponse.data.data];

  const paths = list.map((x) => ({
    params: {
      slug: x.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log("fetch blog detail");
  const blogDetailResponse = await fetch(
    urlcat("https://api-single-test.uptradeit.com/api/api/market/blog/slug", {
      slug: params.slug,
    })
  ).then((response) => response.json());

  const navbarData = await getNavBar();
  return {
    props: {
      data: {
        title: blogDetailResponse.data.title,
        releaseDt: blogDetailResponse.data.releaseDt,
        editDt: blogDetailResponse.data.editDt,
        content: blogDetailResponse.data.content
          .replaceAll("!important", "")
          .replaceAll("target", "")
          .replaceAll("img", `amp-img layout="responsive"`),
        slug: blogDetailResponse.data.slug,
        seoDesc: blogDetailResponse.data.seoDesc,
        thumbnailFullUrl: blogDetailResponse.data.thumbnailFullUrl,
        author: blogDetailResponse.data.author,
      },
      ...navbarData,
    },
  };
}
