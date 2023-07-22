import Head from "next/head";
import MainCarousel from "../components/homepage/mainCarousel";
import CategoryTab from "../components/homepage/categories/categoryTab";
import { useContext, useEffect, useState } from "react";
import HomepageDataModel from "../models/homepageDataModel";
import CarouselLast from "../components/homepage/carouselLast";
// import blogModel from "../models/blogModel";
// import MainFooter from "../components/footer/mainFooter";
import { MyContext } from "../components/context";
import dbConnect from "../lib/mongoose";
import useFetch from "../components/useFetch";
import uBlogModel from "../models/ublogModel";

export async function getStaticProps() {
  // let homepageData;
  await dbConnect();
  const homePagedata = await HomepageDataModel.findOne({}, { _id: 0 });
  let data = homePagedata.toObject();
  const resu = await uBlogModel
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
    revalidate: 1,
  };
}
export default function Home({ data, trending }) {
  const { setTrending, setData } = useContext(MyContext);

  const [home, setHome] = useState(data);
  // console.log("index");
  // console.log(home);
  // console.log(data);
  // console.log(trend);
  // console.log(dat);
  // const { data: homePageData } = useFetch("homePage", true);
  // console.log(data);
  // console.log(homePageData);
  // console.log(homePageData);
  useEffect(() => {
    setHome(data);
    setTrending(trending);
  }, [data]);

  // useEffect(() => {
  //   setTrending(trending);

  //   if (homePageData) setHome(homePageData);
  // }, [trending, data, homePageData]);
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
      <Head>
        <title>OFFTHEWEB</title>
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
          content="OFFTHEWEB,OFF THE WEB, THE WEB, OFF WEB, technology trends,trending"
        />
      </Head>
      <MainCarousel data={home} />
      <CategoryTab data={home} />
      <CarouselLast />
      {/* <MainFooter data={home} /> */}
    </div>
  );
}
