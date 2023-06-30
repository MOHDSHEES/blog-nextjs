import Link from "next/link";
import React from "react";

const Card4 = ({ data }) => {
  return (
    <div className="whats-right-single mb-20">
      <div className="whats-right-img card4-img">
        <img src={data.mainImg} alt={data.category} loading="lazy" />
      </div>
      <div className="whats-right-cap">
        <h4 className="nav-a">
          <Link href={"/blog/" + data.title.replace(/ /g, "-")}>
            {data.title}
          </Link>
        </h4>
        <p>{data.createdDate}</p>
      </div>
    </div>
  );
};

export default Card4;
