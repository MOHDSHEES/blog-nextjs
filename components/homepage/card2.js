import Link from "next/link";
import React from "react";

const Card2 = ({ data }) => {
  return (
    <div
      classname="weekly2-single"
      style={{ marginLeft: "15px", marginRight: "15px" }}
    >
      <div classname="weekly2-img" style={{ marginBottom: "20px" }}>
        <img
          className="card2-img"
          src={data.mainImg}
          alt={data.category}
          loading="lazy"
        />
      </div>
      <div classname="weekly2-caption ">
        <h4 className="nav-a">
          <Link
            href={"/blog/" + data.title.replace(/ /g, "-")}
            className="hover-red"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "1.3",
              display: "block",
              paddingRight: "20px",
            }}
          >
            {data.title}
          </Link>
        </h4>
        <p style={{ fontSize: "12px" }}>
          {data.createdDate} | Views: {data.views}
        </p>
      </div>
    </div>
  );
};

export default Card2;
