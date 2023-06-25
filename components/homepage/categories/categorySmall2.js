import React from "react";

const CategorySmall2 = ({ data }) => {
  return (
    <div className="most-recent-single nav-a">
      <div className="most-recent-images categorySmall2">
        <img src={data.mainImg} alt="" />
      </div>
      <div className="most-recent-capt">
        <h4>
          <a href="latest_news.html">{data.title}</a>
        </h4>
        <p>
          {data.createdDate} | Views: {data.views}
        </p>
      </div>
    </div>
  );
};

export default CategorySmall2;
