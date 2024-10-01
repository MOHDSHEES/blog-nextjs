import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context";
import CarouselSmall from "./carouselSmall";
import CategorySmall2 from "./categorySmall2";
import Link from "next/link";
import HorizontalAds from "../../ads/horizontalAds";
// import Card4 from "../card4";

const RecentBlogs = () => {
  const { trending } = useContext(MyContext);

  // console.log(trending);
  return (
    <div
      className="most-recent-area"
      style={{ paddingBottom: "10px", paddingTop: "10px" }}
    >
      {/* Section Tittle */}
      <div className="small-tittle mb-20">
        <h4>Trending Topics</h4>
      </div>
      {/* Details */}
      {/* <div className="most-recent mb-40">
        <div className="most-recent-img">
          <img src="assets/img/gallery/most_recent.png" alt="" />
          <div className="most-recent-cap">
            <span className="bgbeg">Vogue</span>
            <h4>
              <a href="latest_news.html">
                What to Wear: 9+ Cute Work <br />
                Outfits to Wear This.
              </a>
            </h4>
            <p>Jhon | 2 hours ago</p>
          </div>
        </div>
      </div> */}

      <div className="trending-area fix gray-bg mb-20">
        <div className="trending-main">
          <CarouselSmall trending={trending.slice(0, -2)} />
        </div>
      </div>
      {trending.slice(-2).map((blog) => {
        return (
          <Link
            href={
              "/blogs/" +
              blog.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
              "-" +
              blog.id
            }
          >
            <div className="most-recent-single ">
              <CategorySmall2 data={blog} />
            </div>
          </Link>
        );
      })}

      {/* <div className="most-recent-single "> */}
      <HorizontalAds
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-slot="6922601847"
      />

      {/* </div> */}

      {/* <CategorySmall2 /> */}
    </div>
  );
};

export default RecentBlogs;
