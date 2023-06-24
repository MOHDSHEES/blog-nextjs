import React from "react";
import parse from "html-react-parser";

const CatMainCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="col-xl-6 col-lg-12 nav-a">
      <div className="whats-news-single mb-40 mb-40">
        <div className="whates-img">
          <img src={data.mainImg} alt="" />
        </div>
        <div className="whates-caption">
          <h4>
            <a href="latest_news.html">{data.title}</a>
          </h4>
          <span>{data.createdDate}</span>
          <p className="break-line-3">{parse(data.blog[0].text)}</p>
        </div>
      </div>
    </div>
  );
};

export default CatMainCard;
