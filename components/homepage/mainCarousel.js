import React, { useEffect, useState } from "react";
import { staticCategories } from "../functions/categories";
import Carousel from "./carousel";
import CarouselSideCard from "./carouselSideCard";
import axios from "axios";
import CategoriesSidebar from "./categories/categoriesSidebar";

const MainCarousel = ({ data }) => {
  const [categories, setcategories] = useState(staticCategories);
  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/api/categories");
      if (data && data.length) setcategories(data);
    })();
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
              <Carousel data={data.recent} />
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
