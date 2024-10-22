import React, { useEffect, useState } from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import Image from "next/image";
import formatViews from "../../functions/formatViews";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const CarouselSmall = ({ trending }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(trending);
  }, [trending]);
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
                    <Link
                      className="color-white "
                      href={
                        "/blogs/" +
                        blog.title
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace(/\?/g, "") +
                        "-" +
                        blog.id
                      }
                      data-animation="fadeInUp"
                      data-delay=".4s"
                      data-duration="1000ms"
                    >
                      <div className="trend-top-img carouselSmall">
                        <div>
                          <Image
                            className=""
                            src={blog.mainImg}
                            alt={blog.category}
                            width={0}
                            height={0}
                            sizes="height:290px"
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "290px",
                            }}
                          />
                        </div>
                        {/* <img
                          src={blog.mainImg}
                          alt={blog.title}
                          loading="lazy"
                        /> */}
                        <div
                          className="trend-top-cap"
                          style={{ width: "80%", fontSize: "20px" }}
                        >
                          <span
                            className="bgr"
                            data-animation="fadeInUp"
                            data-delay=".2s"
                            data-duration="1000ms"
                          >
                            {blog.category}
                          </span>
                          <div className="link">
                            {/* <Link
                            className="color-white "
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
                          </div>
                          <p>
                            Views: {formatViews(blog.views)} |{" "}
                            {blog.createdDate}
                          </p>
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

export default CarouselSmall;
