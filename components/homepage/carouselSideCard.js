import Link from "next/link";
import React from "react";

const CarouselSideCard = ({ data }) => {
  // console.log("sidecard");
  // console.log(data);
  return (
    <div className="col-lg-12 col-md-6 col-sm-6 nav-a">
      <div className="trending-top mb-30">
        <div className="trend-top-img">
          <img src={data.mainImg} alt={data.title} loading="lazy" />
          <div className="trend-top-cap trend-top-cap2">
            <span className="bgb">{data.category}</span>
            <h2>
              <Link
                href={"/blog/" + data._id + "/" + data.title.replace(/ /g, "-")}
              >
                {data.title}
              </Link>
            </h2>
            <p>{data.createdDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSideCard;
