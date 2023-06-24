import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const TopBar = ({ trending }) => {
  return (
    <div className="header-top black-bg ">
      <div className="container">
        <div className="col-xl-12">
          <div className="topbar-flex">
            <div className="header-info-left topbar-top-heading">
              <p className="title">Trending </p>
            </div>
            <div className="top-mid-carousel">
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
                      <li className="break-line-1">{blog.title}</li>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
            <div className="header-info-right topbar-time">
              <ul className="header-date">
                <li>
                  <span className="flaticon-calendar" />{" "}
                  {new Date().toLocaleString("en-US", { weekday: "long" })},{" "}
                  {new Date().toLocaleString("en-US", { month: "long" })},{" "}
                  {new Date().getDate()}, {new Date().getFullYear()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
