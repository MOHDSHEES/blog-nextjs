import React, { useContext, useEffect, useState } from "react";
import Card2 from "./card2";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MyContext } from "../context";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const CarouselLast = () => {
  const { trending } = useContext(MyContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(trending);
  }, [trending]);
  // console.log(trending);
  return (
    <div className="weekly3-news-area pt-30 pb-20">
      <div className="container">
        <div className="weekly3-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-wrapper">
                {/* Slider */}
                {trending.length !== 0 && (
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    autoplayHoverPause
                    autoplayTimeout={2000}
                    autoplay
                    margin={10}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      480: {
                        items: 1,
                      },
                      767: {
                        items: 3,
                      },
                      992: {
                        items: 3,
                      },
                      1280: {
                        items: 4,
                      },
                    }}
                  >
                    {trending.map((blog) => {
                      return (
                        <div key={blog._id} class="item">
                          <Card2 data={blog} />
                        </div>
                      );
                    })}

                    {/* <div class="item">
                    <Card2 />
                  </div>
                  <div class="item">
                    <Card2 />
                  </div>
                  <div class="item">
                    <Card2 />
                  </div>
                  <div class="item">
                    <Card2 />
                  </div> */}
                  </OwlCarousel>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselLast;
