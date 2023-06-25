import React from "react";
// import OwlCarousel from "react-owl-carousel";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Carousel = ({ data }) => {
  return (
    <div className="slider-active nav-a">
      <OwlCarousel
        className="owl-theme"
        loop
        items={1}
        dots={false}
        margin={10}
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause
      >
        {data.map((blog) => {
          return (
            <div class="item" key={blog._id}>
              <div className="single-slider">
                <div className="trending-top mb-30">
                  <div className="trend-top-img carousel-img">
                    <img src={blog.mainImg} alt={blog.category} />
                    <div className="trend-top-cap">
                      <span
                        className="bgr"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                        data-duration="1000ms"
                      >
                        {blog.category}
                      </span>
                      <h2>
                        <a
                          href="latest_news.html"
                          data-animation="fadeInUp"
                          data-delay=".4s"
                          data-duration="1000ms"
                        >
                          {blog.title}
                        </a>
                      </h2>
                      <p
                        data-animation="fadeInUp"
                        data-delay=".6s"
                        data-duration="1000ms"
                      >
                        {blog.createdDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
