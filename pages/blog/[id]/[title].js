import Head from "next/head";
import React, { useContext } from "react";
import SinglePost from "../../../components/blogDetails/singlePost";
import TagClouds from "../../../components/blogDetails/tagClouds";
import { MyContext } from "../../../components/context";
import Card2 from "../../../components/homepage/card2";
import dbConnect from "../../../lib/mongoose";
import parse from "html-react-parser";
import blogModel from "../../../models/blogModel";

export async function getStaticProps({ params }) {
  // console.log(params.title);
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
  let imgUrl;
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
  const posts = await blogModel.find({}).select({ title: 1, _id: 1 }).lean();
  // console.log(posts);
  // console.log(resu);
  // let titles = resu.map((a) => a.title);
  // console.log(titles);
  // const posts = [{ id: "6447a13deb22555a15b58185", title: "test 1" }];
  // const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post._id.toString(), title: post.title },
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
  // console.log(title);/
  // console.log(data);
  const { trending } = useContext(MyContext);
  //   console.log(trending);
  return (
    <div className="gray-bg">
      <Head>
        <title>{data.title}</title>
        <meta name="keywords" content={data.keywords} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={"<p>" + data.blog[0].text.slice(0, 250) + "</p>"}
        />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:title" content={data.title} />
        {/* <link rel="icons" content={JSON.stringify(meta)} /> */}
        <meta
          name="description"
          content={"<p>" + data.blog[0].text.slice(0, 250) + "</p>"}
          data-rh="true"
        />
      </Head>
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <SinglePost data={data} />
            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <TagClouds keywords={data && data.keywords} />

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
    </div>
  );
};

export default BlogDetail;
