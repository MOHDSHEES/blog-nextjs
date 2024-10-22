import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../components/context";
import Card2 from "../../../components/homepage/card2";
import dbConnect from "../../../lib/mongoose";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

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
import uBlogModel from "../../../models/ublogModel";
import Post from "../../../components/blogDetails/post";
import TagClouds from "../../../components/blogDetails/tagClouds";

// export async function getServerSideProps({ params }) {
//   await dbConnect();
//   const id = params.title.slice(-10);
//   //   console.log(id);
//   const data = await uBlogModel
//     .findOne(
//       { id: id },
//       {
//         _id: 0,
//       }

//     )
//     .collation({
//       locale: "en",
//       strength: 2,
//     })
//     .lean();

//   let imgUrl = null;
//   if (data && data.mainImg) {
//     let urlArray = data.mainImg.split("/");
//     urlArray.splice(6, 0, "w_0.2,c_scale");
//     imgUrl = urlArray.join("/");
//   }

//   return {
//     props: {
//       data,
//       imgUrl,
//     },
//   };
// }

// export async function getStaticPaths() {
//   // const res = await fetch("https://.../posts");
//   await dbConnect();
//   const posts = await uBlogModel
//     .find({ status: "Active" })
//     .select({ title: 1, id: 1 })
//     .lean();

//   const paths = posts.map((post) => ({
//     params: {
//       title:
//         post.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
//         "-" +
//         post.id,
//     },
//   }));

//   return { paths, fallback: "blocking" };
// }

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
const Preview = ({ data, imgUrl }) => {
  //   console.log(data);
  const router = useRouter();
  // console.log(title);/
  // console.log(data);
  const { trending } = useContext(MyContext);

  const [updatedData, setUpdatedData] = useState(null);
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
  //   useEffect(() => {
  //     setUpdatedData(data);
  const [id, setId] = useState(null);
  //   }, [data]);
  useEffect(() => {
    const { title } = router.query;
    let id;
    if (title) setId(title.slice(-10));
  }, [router]);

  useEffect(() => {
    if (!updatedData && id) {
      // if (data) setUpdatedData(data);

      //   console.log(id);
      // console.log(id);
      //   const id = match && match[1];
      // console.log("in");
      (async () => {
        const { data: da } = await axios.post("/api/blogs/id", {
          id: id,
          preview: true,
        });
        // console.log(da);
        setUpdatedData(da);
        // setloading(true);
        // const currentDate = new Date().toLocaleDateString();
        // let seen = null;
        // if (data && data.id) seen = sessionStorage.getItem(data.id) || null;
        // if (id && seen !== currentDate) {
        //   const { data: da } = await axios.post("/api/blogs/views", {
        //     id: id,
        //   });
        //   setUpdatedData(da);
        //   sessionStorage.setItem(id, currentDate);
        // } else if (id) {

        //   const { data: da } = await axios.post("/api/blogs/id", {
        //     id: id,
        //   });
        //   setUpdatedData(da);
        // }
        // setloading(false);
      })();
    }
  }, [id]);

  //     console.log(trending);
  //   console.log(data);
  //   console.log(updatedData);
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
              {updatedData.status === "Rejected" && updatedData.message && (
                <div class="alert alert-danger" role="alert">
                  <h4 class="alert-heading">Oops! Blog got Rejected.</h4>
                  <p style={{ color: "#58151c" }}>
                    <strong>Reason:</strong> {updatedData.message}
                  </p>
                  <p style={{ color: "#58151c" }}>
                    Make sure all the above specified criteria are met before
                    trying to submit your application again.
                  </p>
                  <hr
                    style={{
                      borderBottom: "1px solid #58151c",
                      margin: "10px 0",
                    }}
                  />

                  <p style={{ color: "#58151c" }} className="mb-0">
                    If you have any questions or require additional assistance,
                    please do not hesitate to{" "}
                    <a
                      href="https://www.offtheweb.in/contact"
                      class="alert-link"
                    >
                      contact us.
                    </a>
                  </p>
                </div>
              )}
              <div className="col-lg-8 posts-list">
                {/* <SinglePost data={updatedData} /> */}

                <Post data={updatedData} preview={true} />
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
          loading...
        </div>
      )}
    </div>
  );
};

export default Preview;
