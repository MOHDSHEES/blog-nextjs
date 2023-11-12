import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import TagClouds from "../../components/blogDetails/tagClouds";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";
import dbConnect from "../../lib/mongoose";
import parse from "html-react-parser";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import uBlogModel from "../../models/ublogModel";
import Post from "../../components/blogDetails/post";
import HorizontalAds from "../../components/ads/horizontalAds";
import CategorySmall2 from "../../components/homepage/categories/categorySmall2";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export async function getStaticProps({ params }) {
  // console.log(params.title);
  // console.log(params);
  await dbConnect();
  // console.log(params);
  //   const regex = /-([a-zA-Z0-9]+)$/;
  //   const match = params.title.match(regex);
  //   const id = match && match[1];
  const id = params.title.slice(-10);
  //   console.log(id);
  const data = await uBlogModel
    .findOne(
      { id: id, status: "Active" },
      {
        _id: 0,
      }
      // { $inc: { views: 1 } },
      // { new: true }
    )
    .collation({
      locale: "en",
      strength: 2,
    })
    .lean();
  //   if (data && data._id) data._id = data._id.toString();

  // console.log(data);
  let imgUrl = null;
  if (data && data.mainImg) {
    let urlArray = data.mainImg.split("/");
    urlArray.splice(6, 0, "w_0.2,c_scale");
    imgUrl = urlArray.join("/");
  }

  return {
    props: {
      data,
      imgUrl,
    },
    revalidate: 1,
    // revalidate: 43200, // In sec
  };
}

export async function getStaticPaths() {
  // const res = await fetch("https://.../posts");
  await dbConnect();
  const posts = await uBlogModel
    .find({ status: "Active" })
    .select({ title: 1, id: 1 })
    .lean();
  // console.log(posts);
  // console.log(resu);
  // let titles = resu.map((a) => a.title);
  // console.log(titles);
  // const posts = [{ id: "6447a13deb22555a15b58185", title: "test 1" }];
  // const posts = await res.json();
  // const regex = /<h1>(.*?)<\/h1>/gi;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: {
      title:
        post.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
        "-" +
        post.id,
    },
  }));
  // id: post._id.toString()
  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  // fallback: "blocking"
  return { paths, fallback: "blocking" };
}

// export async function getServerSideProps(context) {

//   const { title, id } = context.query;
//   await dbConnect();
//   const data = await blogModel
//     .findOne(
//       { _id: id, status: "Active" }
//       // { $inc: { views: 1 } },
//       // { new: true }
//     )
//     .lean();
//   if (data && data._id) data._id = data._id.toString();
//   let urlArray = data.mainImg.split("/");
//   urlArray.splice(6, 0, "w_0.2,c_scale");
//   let imgUrl = urlArray.join("/");
//   return {
//     props: { data, imgUrl },
//   };
// }
const BlogDetail = ({ data, imgUrl }) => {
  const router = useRouter();
  // console.log(title);/
  // console.log(data);
  const { trending } = useContext(MyContext);

  const [updatedData, setUpdatedData] = useState(data);
  // useEffect(() => {
  //   (async () => {
  //     // setloading(true);
  //     if (data && data._id) {
  //       const { d } = await axios.post("/api/views", {
  //         id: data._id,
  //       });
  //       // console.log(da);
  //       // console.log(data);
  //       // setUpdatedData(da);
  //     }
  //     // setloading(false);
  //   })();
  // }, [data]);
  const [keywords, setKeywords] = useState(data && data.keywords);
  useEffect(() => {
    setUpdatedData(data);
    if (data && data.keywords) setKeywords(data.keywords);
  }, [data]);

  const [similarBlogs, setSimilarBlogs] = useState(null);
  let keyFlag = 1;
  useEffect(() => {
    if (keyFlag) {
      if (updatedData && updatedData.keywords)
        setKeywords(updatedData.keywords);
      (async () => {
        const { data } = await axios.post("/api/blogs/similarBlogs", {
          keywords: keywords.split(","),
        });
        if (data && data.length) {
          const bl = data.filter((blog) => blog.id !== updatedData.id);
          setSimilarBlogs(bl);
        }
      })();

      // console.log(updatedData.keywords);
    }
    keyFlag = 0;
  }, [keywords, keyFlag]);

  let flag = 1;
  useEffect(() => {
    if (flag) {
      flag = 0;
      if (data) setUpdatedData(data);
      const { title } = router.query;
      // console.log(title);
      //   const regex = /-([a-zA-Z0-9]+)$/;
      //   const match = title.match(regex);
      let id;
      if (title) id = title.slice(-10);

      //   console.log(id);
      //   const id = match && match[1];
      // console.log("in");
      (async () => {
        // setloading(true);
        const currentDate = new Date().toLocaleDateString();
        let seen = null;
        if (data && data.id) seen = sessionStorage.getItem(data.id) || null;
        if (id && seen !== currentDate) {
          const { data: da } = await axios.post("/api/blogs/views", {
            id: id,
          });
          setKeywords(da.keywords);
          if (da.keywords !== keywords) {
            keyFlag = 1;
            setUpdatedData(da);
          }
          sessionStorage.setItem(id, currentDate);
        } else if (id) {
          const { data: da } = await axios.post("/api/blogs/id", {
            id: id,
          });
          if (da.keywords !== keywords) {
            keyFlag = 1;
            setKeywords(da.keywords);
          }
          setUpdatedData(da);
        }
        // setloading(false);
      })();
    }
  }, [flag]);
  // console.log(updatedData);
  //   console.log(trending);
  // console.log(data);
  // console.log(updatedData);
  return (
    <div className="gray-bg">
      <Head>
        <title>{data && data.title}</title>
        <meta name="keywords" content={data && data.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={data && data.description} />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:title" content={data && data.title} />
        <meta
          name="description"
          content={data && data.description}
          data-rh="true"
        />
      </Head>

      {updatedData ? (
        <section className="blog_area single-post-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list ">
                {/* <SinglePost data={updatedData} /> */}
                <Post data={updatedData} />

                {similarBlogs && similarBlogs.length !== 0 && (
                  <section className="whats-news-area pt-10 pb-20 gray-bg mt-50">
                    <div className="container">
                      <div className="row">
                        <div
                          className="most-recent-area"
                          style={{ paddingBottom: "10px", paddingTop: "10px" }}
                        >
                          <div
                            className="small-tittle mb-20"
                            style={{ padding: "5px", paddingLeft: "10px" }}
                          >
                            <h4>Similar Topics</h4>
                          </div>
                          <OwlCarousel
                            className="owl-theme"
                            loop
                            autoplayHoverPause
                            autoplayTimeout={2000}
                            autoplay
                            margin={10}
                            responsive={{
                              0: {
                                items: 1,
                              },
                              480: {
                                items: 1,
                              },
                              767: {
                                items: 2,
                              },
                              992: {
                                items: 2,
                              },
                              1280: {
                                items: 2,
                              },
                            }}
                          >
                            {similarBlogs.map((blog) => {
                              return (
                                <Link
                                  key={blog.id}
                                  href={
                                    "/blogs/" +
                                    blog.title
                                      .toLowerCase()
                                      .replace(/ /g, "-")
                                      .replace(/\?/g, "") +
                                    "-" +
                                    blog.id
                                  }
                                >
                                  <div className="most-recent-single ">
                                    <CategorySmall2 data={blog} />
                                  </div>
                                </Link>
                              );
                            })}
                          </OwlCarousel>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <TagClouds keywords={updatedData && updatedData.keywords} />
                  <div style={{ textAlign: "center" }}>
                    <HorizontalAds
                      data-ad-slot="6105584909"
                      data-ad-format="auto"
                      data-full-width-responsive="true"
                    />
                  </div>
                  <aside
                    className="single_sidebar_widget tag_cloud_widget"
                    style={{ marginTop: "15px" }}
                  >
                    <h4
                      className="widget_title"
                      style={{ marginBottom: "15px" }}
                    >
                      Social Share
                    </h4>
                    <ul
                      className="list social-share-ul"
                      style={{ paddingLeft: 0 }}
                    >
                      <li>
                        <WhatsappShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                        >
                          <WhatsappIcon size={30} round={true} />
                        </WhatsappShareButton>
                      </li>
                      <li>
                        <FacebookShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                        >
                          <FacebookIcon size={30} round={true} />
                        </FacebookShareButton>
                      </li>
                      <li>
                        <LinkedinShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                          //   summary={parse(updatedData.blog[0].text)}
                        >
                          <LinkedinIcon size={30} round={true} />
                        </LinkedinShareButton>
                      </li>
                      <li>
                        <TelegramShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                        >
                          <TelegramIcon size={30} round={true} />
                        </TelegramShareButton>
                      </li>
                      <li>
                        <TwitterShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                        >
                          <TwitterIcon size={30} round={true} />
                        </TwitterShareButton>
                      </li>
                      <li>
                        <PinterestShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                          media={updatedData.mainImg}
                        >
                          <PinterestIcon size={30} round={true} />
                        </PinterestShareButton>
                      </li>
                      <li>
                        <EmailShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                          media={updatedData.mainImg}
                        >
                          <EmailIcon size={30} round={true} />
                        </EmailShareButton>
                      </li>
                      <li>
                        <RedditShareButton
                          url={"https://www.offtheweb.in" + router.asPath}
                          media={updatedData.mainImg}
                        >
                          <RedditIcon size={30} round={true} />
                        </RedditShareButton>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    <div className="trending-sidebar scrollbar-over">
                      {trending &&
                        trending.length !== 0 &&
                        trending.map((blog, idx) => {
                          if (idx === 1) {
                            return (
                              <div
                                style={{
                                  textAlign: "center",
                                  padding: "10px 0",
                                }}
                              >
                                <HorizontalAds
                                  data-ad-format="fluid"
                                  data-ad-layout-key="-7q+f1-x-5f+d4"
                                  data-ad-slot="2644107188"
                                />
                              </div>
                            );
                          }
                          return <Card2 data={blog} key={idx} />;
                        })}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div
          style={{
            height: "200px",
            background: "white",
            textAlign: "center",
            marginTop: "90px",
          }}
        >
          Oops, page you're looking has been moved to another URL or has been
          completely removed.
          <br />
          <Link href="/" className="btn btn-secondary mt-3">
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
