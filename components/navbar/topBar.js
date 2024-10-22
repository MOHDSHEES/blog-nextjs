import React, { useContext, useEffect, useState } from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MyContext } from "../context";
import useFetch from "../useFetch";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const TopBar = () => {
  const { trending, setTrending } = useContext(MyContext);
  const [trend, setTrend] = useState([]);
  const { data } = useFetch("trending", true);
  // const { data} = useSWR("/api/recent", fetcher);
  useEffect(() => {
    // console.log(trending);
    setTrend(trending);
    if (data) {
      setTrend(data);
      setTrending(data);
    }
  }, [trending, data]);

  // console.log(trending);

  // // Set the initial data in the context if it hasn't been set yet
  // if (!trending && trend) {
  //   setTrending(trend);
  // }
  return (
    <div className="header-top black-bg ">
      <div className="container">
        <div className="col-xl-12">
          <div className="topbar-flex">
            <div className="header-info-left topbar-top-heading">
              <p className="title">Trending </p>
            </div>
            <div className="top-mid-carousel">
              {trend && trend.length !== 0 && (
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
                  {trend.map((blog) => {
                    return (
                      <div class="item nav-a" key={blog._id}>
                        <Link
                          href={
                            "/blogs/" +
                            blog.title
                              .toLowerCase()
                              .replace(/ /g, "-")
                              .replace(/\?/g, "") +
                            "-" +
                            blog.id
                          }
                        >
                          <li
                            className="break-line-1"
                            style={{ color: "white" }}
                          >
                            {blog.title}
                          </li>
                        </Link>
                      </div>
                    );
                  })}
                </OwlCarousel>
              )}
            </div>
            <div className="header-info-right topbar-time">
              <ul className="header-date" style={{ marginBottom: 0 }}>
                <li style={{ color: "white" }}>
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
