import React from "react";

const CarouselSideCard = ({ data }) => {
  return (
    <div className="col-lg-12 col-md-6 col-sm-6 nav-a">
      <div className="trending-top mb-30">
        <div className="trend-top-img">
          <img src={data.mainImg} alt="" />
          <div className="trend-top-cap trend-top-cap2">
            <span className="bgb">{data.category}</span>
            <h2>
              <a href="latest_news.html">{data.title}</a>
            </h2>
            <p>{data.createdDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSideCard;
