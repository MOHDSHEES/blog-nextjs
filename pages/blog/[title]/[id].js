import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import SinglePost from "../../../components/blogDetails/singlePost";
import TagClouds from "../../../components/blogDetails/tagClouds";
import { MyContext } from "../../../components/context";
import Card2 from "../../../components/homepage/card2";
import dbConnect from "../../../lib/mongoose";
import parse from "html-react-parser";
import blogModel from "../../../models/blogModel";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

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

export async function getStaticProps({ params }) {
  // console.log(params.title);
  // console.log(params);
  await dbConnect();
  const data = await blogModel
    .findOne(
      { _id: params.id, status: "Active" }
      // { $inc: { views: 1 } },
      // { new: true }
    )
    .collation({
      locale: "en",
      strength: 2,
    })
    .lean();
  if (data && data._id) data._id = data._id.toString();

  // console.log(data);
  let imgUrl = null;
  if (data) {
    let urlArray = data.mainImg.split("/");
    urlArray.splice(6, 0, "w_0.2,c_scale");
    imgUrl = urlArray.join("/");
  }

  return {
    props: {
      data,
      imgUrl,
    },
    revalidate: 43200, // In seconds
  };
}

export async function getStaticPaths() {
  // const res = await fetch("https://.../posts");
  await dbConnect();
  const posts = await blogModel
    .find({ status: "Active" })
    .select({ title: 1, _id: 1 })
    .lean();
  // console.log(posts);
  // console.log(resu);
  // let titles = resu.map((a) => a.title);
  // console.log(titles);
  // const posts = [{ id: "6447a13deb22555a15b58185", title: "test 1" }];
  // const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: {
      id: post._id.toString(),
      title: post.title.replace(/ /g, "-").replace(/\?/g, ""),
    },
  }));
  // id: post._id.toString()
  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
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
  // console.log(data);
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
  // useEffect(() => {
  //   console.log("in");
  //   const handleRouteChange = () => {
  //     setUpdatedData(data);
  //     flag = 1;
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, []);
  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  let flag = 1;
  useEffect(() => {
    if (flag) {
      flag = 0;
      setUpdatedData(data);
      // console.log("in");
      (async () => {
        // setloading(true);
        const currentDate = new Date().toLocaleDateString();
        const seen = sessionStorage.getItem(data._id) || null;
        if (data && data._id && seen !== currentDate) {
          const { data: da } = await axios.post("/api/views", {
            id: data._id,
          });
          setUpdatedData(da);
          sessionStorage.setItem(data._id, currentDate);
        } else if (data && data._id) {
          const { data: da } = await axios.post("/api/blog/id", {
            id: data._id,
          });
          setUpdatedData(da);
        }
        // setloading(false);
      })();
    }
  }, [flag]);
  //   console.log(trending);
  return (
    <div className="gray-bg">
      <Head>
        <title>{data && data.title}</title>
        <meta name="keywords" content={data && data.keywords} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={data && data.blog[0].text.slice(0, 50)}
        />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:title" content={data && data.title} />
        {/* <link rel="icons" content={JSON.stringify(meta)} /> */}
        <meta
          name="description"
          content={data && data.blog[0].text.slice(0, 50)}
          data-rh="true"
        />
      </Head>
      {data ? (
        <section className="blog_area single-post-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <SinglePost data={updatedData} />
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <TagClouds keywords={updatedData && updatedData.keywords} />
                  <aside className="single_sidebar_widget tag_cloud_widget">
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
                          summary={parse(updatedData.blog[0].text)}
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
