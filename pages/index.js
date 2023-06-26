import Head from "next/head";
import MainCarousel from "../components/homepage/mainCarousel";
import CategoryTab from "../components/homepage/categories/categoryTab";
import { useContext, useEffect } from "react";
import HomepageDataModel from "../models/homepageDataModel";
import CarouselLast from "../components/homepage/carouselLast";
import blogModel from "../models/blogModel";
import MainFooter from "../components/footer/mainFooter";
import { MyContext } from "../components/context";
import dbConnect from "../lib/mongoose";
import useFetch from "../components/useFetch";

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
  const { setTrending, setData } = useContext(MyContext);

  // console.log(trend);
  // console.log(dat);
  const { data: homePageData } = useFetch("homePage", true);
  console.log(data);
  console.log(homePageData);
  useEffect(() => {
    setData(homePageData);
  }, [homePageData]);
  useEffect(() => {
    setTrending(trending);
    setData(data);
  }, [trending, data]);
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
        <title>OFF THE WEB</title>

        <meta
          name="description"
          content="Stay ahead of the curve with OFFTHEWEB - your source for the latest in tech and beyond."
          data-rh="true"
        />
      </Head>
      <MainCarousel data={data} />
      <CategoryTab data={data} />
      <CarouselLast />
      <MainFooter data={data} />
    </div>
  );
}
