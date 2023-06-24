import React from "react";

const CatSmallCard = ({ data }) => {
  return (
    <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10 nav-a">
      <div className="whats-right-single mb-20">
        <div className="whats-right-img catSmallCard">
          <img src={data.mainImg} alt="" />
        </div>
        <div className="whats-right-cap">
          <span className="colorb">{data.category}</span>
          <h4>
            <a href="latest_news.html">{data.title}</a>
          </h4>
          <p>{data.createdDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CatSmallCard;
