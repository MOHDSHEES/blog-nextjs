import React from "react";
import CarouselSmall from "./carouselSmall";
import CategorySmall2 from "./categorySmall2";
// import Card4 from "../card4";

const RecentBlogs = ({ recent }) => {
  return (
    <div className="most-recent-area" style={{ paddingBottom: "10px" }}>
      {/* Section Tittle */}
      <div className="small-tittle mb-20">
        <h4>Most Recent</h4>
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
          <CarouselSmall data={recent.slice(0, -2)} />
        </div>
      </div>
      {recent.slice(-2).map((blog) => {
        return <CategorySmall2 data={blog} />;
      })}

      {/* <CategorySmall2 /> */}
    </div>
  );
};

export default RecentBlogs;