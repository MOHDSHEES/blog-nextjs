import React from "react";
import Carousel from "./carousel";
import CarouselSideCard from "./carouselSideCard";

const MainCarousel = ({ data }) => {
  // console.log(data);
  return (
    <div className="trending-area fix pt-25 gray-bg">
      <div className="container">
        <div className="trending-main">
          <div className="row">
            <div className="col-lg-8">
              {/* Trending Top */}
              <Carousel />
            </div>
            {/* Right content */}
            {/* <div className=""> */}
            <div className="col-lg-4 carouselSideCard">
              {data && data.categoryData && (
                <div className="row">
                  <CarouselSideCard data={data.categoryData.Technology[0]} />
                  <CarouselSideCard data={data.categoryData.Sports[0]} />
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
