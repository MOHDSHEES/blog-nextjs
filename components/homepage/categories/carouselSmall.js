import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const CarouselSmall = ({ trending }) => {
  return (
    <div className="slider-active nav-a">
      {/* {trending && trending.length && trending[0].views} */}
      {trending && (
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
          {trending.map((blog) => {
            return (
              <div class="item" key={blog._id}>
                <div className="single-slider">
                  <div className="trending-top ">
                    <div className="trend-top-img carouselSmall">
                      <img src={blog.mainImg} alt="" />
                      <div className="trend-top-cap" style={{ width: "80%" }}>
                        <span
                          className="bgr"
                          data-animation="fadeInUp"
                          data-delay=".2s"
                          data-duration="1000ms"
                        >
                          {blog.category}
                        </span>
                        <div>
                          <a
                            href="latest_news.html"
                            data-animation="fadeInUp"
                            data-delay=".4s"
                            data-duration="1000ms"
                          >
                            {blog.title}
                          </a>
                        </div>
                        <p
                          data-animation="fadeInUp"
                          data-delay=".6s"
                          data-duration="1000ms"
                        >
                          Views: {blog.views} | {blog.createdDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </div>
  );
};

export default CarouselSmall;
