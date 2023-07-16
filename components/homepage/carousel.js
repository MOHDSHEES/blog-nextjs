import React, { useEffect, useState } from "react";
// import OwlCarousel from "react-owl-carousel";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import Image from "next/image";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Carousel = ({ data }) => {
  const [da, setDa] = useState(null);
  // console.log("carousel");
  // console.log(data);
  useEffect(() => {
    setDa(data);
  }, [data]);
  return (
    <div className="slider-active nav-a main-carousel-img-wrapper">
      {data && (
        <OwlCarousel
          className="owl-theme"
          loop
          items={1}
          dots={false}
          margin={10}
          autoplay
          key={data.length}
          autoplayTimeout={3000}
          autoplayHoverPause
        >
          {data.map((blog) => {
            return (
              <div class="item" key={blog._id}>
                <div className="single-slider">
                  <div className="trending-top mb-30">
                    <Link
                      href={
                        "/blog/" +
                        blog.title.replace(/ /g, "-").replace(/\?/g, "") +
                        "/" +
                        blog._id
                      }
                    >
                      <div className="trend-top-img carousel-img">
                        {/* <Link
                        href={
                          "/blog/" +
                          blog._id +
                          "/" +
                          blog.title.replace(/ /g, "-")
                        }
                      > */}
                        <div className="main-carousel-img-wrapper">
                          <Image
                            className="img-fluid"
                            src={blog.mainImg}
                            alt={blog.category}
                            // priority={true}
                            blurDataURL={blog.mainImg}
                            placeholder="blur"
                            cover
                            fill
                          />
                          {/* <img
                            src={blog.mainImg}
                            // objectFit="cover"
                            // width="100%"
                            alt={blog.category}
                            loading="lazy"
                          /> */}
                        </div>
                        {/* </Link> */}
                        <div className="image-background-opacity">
                          <div className="trend-top-cap">
                            <span
                              className="bgr"
                              data-animation="fadeInUp"
                              data-delay=".2s"
                              data-duration="1000ms"
                            >
                              {blog.category}
                            </span>
                            <h2 className=" link">
                              {/* <Link
                            href={
                              "/blog/" +
                              blog._id +
                              "/" +
                              blog.title.replace(/ /g, "-")
                            }
                            data-animation="fadeInUp"
                            data-delay=".4s"
                            data-duration="1000ms"
                          > */}
                              {blog.title}
                              {/* </Link> */}
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
                    </Link>
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

export default Carousel;
