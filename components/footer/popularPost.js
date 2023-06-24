import React from "react";
import Card4 from "../homepage/card4";

const PopularPost = ({ data }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
      <div className="single-footer-caption mb-50">
        <div className="footer-tittle">
          <h4>Popular post</h4>
        </div>
        {data.slice(2).map((blog, idx) => {
          return <Card4 data={blog} key={idx} />;
        })}
        {/*         
        <Card4 />
        <Card4 /> */}
      </div>
    </div>
  );
};

export default PopularPost;
