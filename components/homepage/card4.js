import React from "react";

const Card4 = ({ data }) => {
  return (
    <div className="whats-right-single mb-20">
      <div className="whats-right-img card4-img">
        <img src={data.mainImg} alt={data.category} />
      </div>
      <div className="whats-right-cap">
        <h4 className="nav-a">
          <a href="latest_news.html">{data.title}</a>
        </h4>
        <p>{data.createdDate}</p>
      </div>
    </div>
  );
};

export default Card4;
