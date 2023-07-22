import Link from "next/link";
import React from "react";

const CarouselSideCard = ({ data }) => {
  // console.log("sidecard");
  // console.log(data);
  return (
    <div className="col-lg-12 col-md-6 col-sm-6 nav-a">
      <div className="trending-top mb-30">
        <Link
          href={
            "/blogs/" +
            data.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
            "-" +
            data.id
          }
        >
          <div className="trend-top-img" style={{ color: "red" }}>
            <img src={data.mainImg} alt={data.title} loading="lazy" />
            <div className="trend-top-cap trend-top-cap2">
              <span className="bgb">{data.category}</span>
              <h2 className="link">
                {/* <Link
                href={"/blog/" + data._id + "/" + data.title.replace(/ /g, "-")}
              > */}
                {data.title}
                {/* </Link> */}
              </h2>
              <p>{data.createdDate}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CarouselSideCard;
