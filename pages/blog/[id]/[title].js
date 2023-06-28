import Head from "next/head";
import React, { useContext } from "react";
import SinglePost from "../../../components/blogDetails/singlePost";
import TagClouds from "../../../components/blogDetails/tagClouds";
import { MyContext } from "../../../components/context";
import Card2 from "../../../components/homepage/card2";
import dbConnect from "../../../lib/mongoose";
import blogModel from "../../../models/blogModel";
import parse from "html-react-parser";
export async function getServerSideProps(context) {
  const { title, id } = context.query;
  // console.log(context);
  //   console.log(title);
  //   console.log(id);
  // let homepageData;
  await dbConnect();
  const data = await blogModel
    .findOne(
      { _id: id, status: "Active" }
      // { $inc: { views: 1 } },
      // { new: true }
    )
    .lean();
  if (data && data._id) data._id = data._id.toString();
  let urlArray = data.mainImg.split("/");
  urlArray.splice(6, 0, "w_0.2,c_scale");
  let imgUrl = urlArray.join("/");

  // const homePagedata = await HomepageDataModel.findOne({}, { _id: 0 });
  // let data = homePagedata.toObject();

  // const trending = resu.toObject();
  // const trending = resu.map((obj) => ({ ...obj, _id: obj._id.toString() }));
  // console.log(trending);

  return {
    props: { data, imgUrl },
  };
}
const BlogDetail = ({ data, imgUrl }) => {
  // console.log(title);/
  // console.log(data);
  const { trending } = useContext(MyContext);
  //   console.log(trending);
  return (
    <div>
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
                  {trending &&
                    trending.length !== 0 &&
                    trending.map((blog, idx) => {
                      return <Card2 data={blog} key={idx} />;
                    })}
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
