import Link from "next/link";
import React, { useContext } from "react";
import resizeImg from "../../components/functions/resizeImg";
import CatMainCard from "../../components/homepage/categories/catMainCard";
import dbConnect from "../../lib/mongoose";
import blogModel from "../../models/blogModel";
import categoriesModel from "../../models/categoryModels";
import parse from "html-react-parser";
import TagClouds from "../../components/blogDetails/tagClouds";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";

export async function getStaticProps({ params }) {
  // console.log(params.title);
  await dbConnect();

  const resu = await blogModel
    .find({
      category: params.category.replace("-", " "),
      status: "Active",
    })
    .lean();
  // let trending = resu.map((a) => a.title);

  const categories = resu.map((obj) => ({ ...obj, _id: obj._id.toString() }));

  return {
    props: {
      categories,
    },
    revalidate: 43200, // In seconds
  };
}

export async function getStaticPaths() {
  await dbConnect();
  const resu = await categoriesModel.findOne({
    _id: "644779adaba2893aa8117eb4",
  });

  // res.json(resu.categories);
  // const posts = await blogModel
  //   .find({ status: "Active" })
  //   .select({ title: 1, _id: 1 })
  //   .lean();
  const categories = resu.categories;

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { category: category.category.replace(/ /g, "-") },
  }));

  return { paths, fallback: "blocking" };
}
const Category = ({ categories }) => {
  const { trending } = useContext(MyContext);
  // console.log(categories);
  return (
    <div>
      <section className="blog_area single-post-area section-padding gray-bg">
        <div className="container category-container">
          <div className="row">
            <div
              className="col-lg-8 posts-list"
              style={{ marginBottom: "20px" }}
            >
              <div>
                <div
                  style={{ background: "white" }}
                  class="d-flex align-items-center justify-content-center  py-2 px-4 mb-3"
                >
                  <h2 className="">{categories[0].category} </h2>
                </div>
              </div>
              <div className="categories-container row">
                {categories.map((data) => {
                  return (
                    <div
                      class="card categories-card col-lg-5"
                      style={{ padding: 0, margin: "10px" }}
                    >
                      <Link
                        href={
                          "/blog/" +
                          data.title.replace(/ /g, "-") +
                          "/" +
                          data._id
                        }
                      >
                        <img
                          class="card-img-top"
                          src={data.mainImg}
                          alt={data.category}
                        />
                      </Link>
                      <div class="card-body">
                        <h5 class="card-title">
                          <Link
                            href={
                              "/blog/" +
                              data.title.replace(/ /g, "-") +
                              "/" +
                              data._id
                            }
                          >
                            {data.title}
                          </Link>
                        </h5>
                        <Link
                          href={
                            "/blog/" +
                            data.title.replace(/ /g, "-") +
                            "/" +
                            data._id
                          }
                          style={{ color: "#506172" }}
                        >
                          <p
                            class="card-text break-line-4"
                            style={{ lineHeight: "25px" }}
                          >
                            {parse(data.blog[0].text.replace(/<[^>]+>/g, ""))}
                          </p>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                {/* <TagClouds keywords={data && data.keywords} /> */}

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

    // <div className="gray-bg">
    //   <div className="row" style={{ width: "100%" }}>
    //     {categories.map((data) => {
    //       return (
    //         <div className="categories-card nav-a">
    //           <div className="whats-news-single mb-40 mb-40">
    //             <div className="whates-img">
    //               <img
    //                 src={resizeImg(data.mainImg, 6, "h_520,c_scale")}
    //                 alt={data.category}
    //                 loading="lazy"
    //               />
    //             </div>
    //             <div className="whates-caption categories-card-p">
    //               <h4>
    //                 <Link
    //                   href={
    //                     "/blog/" +
    //                     data._id +
    //                     "/" +
    //                     data.title.replace(/ /g, "-")
    //                   }
    //                 >
    //                   {data.title}
    //                 </Link>
    //               </h4>
    //               <span>{data.createdDate}</span>
    //               <p className="break-line-3">{parse(data.blog[0].text)}</p>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Category;
