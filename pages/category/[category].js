import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import resizeImg from "../../components/functions/resizeImg";
import CatMainCard from "../../components/homepage/categories/catMainCard";
import dbConnect from "../../lib/mongoose";
// import blogModel from "../../models/blogModel";
import categoriesModel from "../../models/categoryModels";
import parse from "html-react-parser";
import TagClouds from "../../components/blogDetails/tagClouds";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";
import Head from "next/head";
import axios from "axios";
import uBlogModel from "../../models/ublogModel";

export async function getStaticProps({ params }) {
  // console.log(params.title);
  await dbConnect();

  const resu = await uBlogModel
    .find({
      category: params.category.replace("-", " "),
      status: "Active",
    })
    .lean();
  // let trending = resu.map((a) => a.title);

  const categori = resu.map((obj) => ({ ...obj, _id: obj._id.toString() }));
  let categories = categori.reverse();

  return {
    props: {
      categories,
    },
    revalidate: 1, // In seconds
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
  const [categoryData, setCategoryData] = useState(categories);
  // const { data: homePageData } = useFetch("categoryPage", true);
  // console.log(data);
  // console.log(homePageData);
  // console.log(homePageData);

  // console.log(categories);
  // console.log(categoryData);
  useEffect(() => {
    setCategoryData(categories);
    (async () => {
      if (categories && categories.length) {
        const { data: da } = await axios.post("/api/categoryPage", {
          category: categories[0].category,
        });
        if (da && da.length) setCategoryData(da.reverse());
        else setCategoryData(categories);
      }
    })();
  }, [categories]);
  // console.log(categories);
  return (
    <div>
      <section className=" single-post-area section-padding gray-bg">
        <Head>
          <title>
            {categories && categories.length
              ? categories[0].category
              : "Category"}
          </title>
          <meta
            property="og:image"
            content="https://res.cloudinary.com/domyp6djh/image/upload/v1688851669/common/ezgif.com-gif-maker_xrbea2.webp"
          />
          <meta
            name="description"
            content="Explore the captivating world of OffTheWeb.in - a captivating blog website that delves into a myriad of topics, from technology to business, sports to cyber security. Immerse yourself in our thought-provoking articles, engage in enlightening discussions, and stay informed with our expertly curated content. Join us on OffTheWeb.in and embark on a journey of discovery, inspiration, and endless possibilities."
            data-rh="true"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Explore the captivating world of OffTheWeb.in - a captivating blog website that delves into a myriad of topics, from technology to business, sports to cyber security. Immerse yourself in our thought-provoking articles, engage in enlightening discussions, and stay informed with our expertly curated content. Join us on OffTheWeb.in and embark on a journey of discovery, inspiration, and endless possibilities."
          />
          <meta property="og:title" content="OFFTHEWEB" />
          <meta
            name="keywords"
            content="OFFTHEWEB,OFF THE WEB, THE WEB, OFF WEB, technology trends,trending,categories,category,technology,sports,cybersecurity,business"
          />
        </Head>
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
                  <h2 className="">
                    {categories && categories.length !== 0
                      ? categories[0].category
                      : "No blogs found..."}
                  </h2>
                </div>
              </div>
              <div className="categories-container row">
                {categoryData.map((data) => {
                  return (
                    <div
                      class="card categories-card col-lg-5"
                      style={{ padding: 0, margin: "10px" }}
                    >
                      <Link
                        href={
                          "/blogs/" +
                          data.title
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/\?/g, "") +
                          "-" +
                          data.id
                        }
                      >
                        <img
                          class="card-img-top"
                          loading="lazy"
                          src={data.mainImg}
                          alt={data.category}
                        />
                        {/* </Link> */}
                        <div class="card-body">
                          <h5 class="card-title" style={{ color: "black" }}>
                            {/* <Link
                            href={
                              "/blog/" +
                              data.title.replace(/ /g, "-").replace(/\?/g, "") +
                              "/" +
                              data._id
                            }
                          > */}
                            {data.title}
                            {/* </Link> */}
                          </h5>
                          {/* <Link
                          href={
                            "/blogs/" +
                            data.title
                              .toLowerCase()
                              .replace(/ /g, "-")
                              .replace(/\?/g, "") +
                            "-" +
                            data.id
                          }
                          style={{ color: "#506172" }}
                        > */}
                          <p
                            class="card-text break-line-4"
                            style={{ lineHeight: "25px" }}
                          >
                            {data.description}
                            {/* {parse(data.blog[0].text.replace(/<[^>]+>/g, ""))} */}
                          </p>
                          {/* </Link> */}
                        </div>
                      </Link>
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
