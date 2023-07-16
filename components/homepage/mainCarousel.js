import React, { useEffect, useState } from "react";
import { staticCategories } from "../functions/categories";
import Carousel from "./carousel";
import CarouselSideCard from "./carouselSideCard";
import axios from "axios";
import CategoriesSidebar from "./categories/categoriesSidebar";
import Image from "next/image";

const MainCarousel = ({ data }) => {
  const [categories, setcategories] = useState(staticCategories);
  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/api/categories");
      if (data && data.length) setcategories(data);
    })();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Set the desired loading time in milliseconds

    // Clear the timer when the component is unmounted or the loading state changes
    return () => clearTimeout(timer);
  }, []);
  // console.log(categories);
  // console.log("carousel");
  // console.log(data);
  return (
    <div className="trending-area fix pt-25 gray-bg">
      <div className="container">
        <div className="trending-main">
          <div className="row">
            <div className="col-lg-8">
              {/* Trending Top */}
              {data && data.recent && !isLoading ? (
                <Carousel data={data.recent} />
              ) : (
                <div className="slider-active nav-a main-carousel-img-wrapper">
                  <div className="single-slider">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img carousel-img">
                        <div className="main-carousel-img-wrapper">
                          <Image
                            className="img-fluid"
                            src="https://res.cloudinary.com/domyp6djh/image/upload/v1688630261/technology%20webp/ezgif.com-gif-maker_9_wcnzll.webp"
                            alt="carousel-img"
                            // priority={true}
                            //  blurDataURL={blog.mainImg}
                            //  placeholder="blur"
                            cover
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Right content */}
            {/* <div className=""> */}
            <div className="col-lg-4 carouselSideCard">
              {data && data.categoryData && (
                <div className="row">
                  <CategoriesSidebar categories={categories} />
                  {/* <CarouselSideCard
                    data={
                      data.categoryData.Business &&
                      data.categoryData.Business[0]
                    }
                  /> */}

                  {/* {data && data.categoryData.Sports && (
                    <CarouselSideCard data={data.categoryData.Sports[0]} />
                  )} */}
                </div>
              )}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
