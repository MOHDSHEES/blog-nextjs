import Head from "next/head";
// import { getSortedPostsData } from "../lib/posts";

import MainCarousel from "../components/homepage/mainCarousel";
import CategoryTab from "../components/homepage/categories/categoryTab";
import { useEffect } from "react";
import TopBar from "../components/navbar/topBar";
import MidBar from "../components/navbar/midBar";
import MainNavbar from "../components/navbar/mainNavbar";
import dbConnect from "../lib/mongoose";
import HomepageDataModel from "../models/homepageDataModel";
import CarouselLast from "../components/homepage/carouselLast";
import blogModel from "../models/blogModel";
import MainFooter from "../components/footer/mainFooter";

export async function getStaticProps() {
  // let homepageData;
  await dbConnect();
  const homePagedata = await HomepageDataModel.findOne({}, { _id: 0 });
  let data = homePagedata.toObject();
  const resu = await blogModel
    .find({ status: "Active" })
    .sort({ views: -1 })
    .limit(6)
    .lean();

  // const trending = resu.toObject();
  const trending = resu.map((obj) => ({ ...obj, _id: obj._id.toString() }));
  // console.log(trending);

  return {
    props: {
      data,
      trending,
    },
  };
}
export default function Home({ data, trending }) {
  // console.log(trending);
  // console.log(data);
  // console.log(homepageData);
  // useEffect(() => {
  //   console.log("in");
  //   fetch("/api/homePage")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <div>
      <header>
        <div className="header-area">
          <div className="main-header">
            <TopBar trending={trending} />
            <MidBar />
            <MainNavbar />
          </div>
        </div>
      </header>
      <MainCarousel data={data} trending={trending} />

      <CategoryTab data={data} />
      <CarouselLast trending={trending} />
      <MainFooter data={data} />
    </div>
  );
}
