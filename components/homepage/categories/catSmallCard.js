import Link from "next/link";
import React from "react";
import resizeImg from "../../functions/resizeImg";

const CatSmallCard = ({ data }) => {
  return (
    <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10 nav-a ">
      <div className="whats-right-single mb-20">
        <Link href={"/blog/" + data._id + "/" + data.title.replace(/ /g, "-")}>
          <div className="whats-right-img catSmallCard">
            <img
              src={resizeImg(data.mainImg, 6, "h_100,c_scale")}
              alt={data.category}
              loading="lazy"
            />
          </div>
        </Link>
        <div className="whats-right-cap">
          <span className="colorb">{data.category}</span>
          <h4>
            <Link
              href={"/blog/" + data._id + "/" + data.title.replace(/ /g, "-")}
            >
              {data.title}
            </Link>
          </h4>
          <p>{data.createdDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CatSmallCard;
