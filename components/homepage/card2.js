import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card2 = ({ data }) => {
  return (
    <Link
      href={
        "/blogs/" +
        data.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
        "-" +
        data.id
      }
    >
      <div
        classname="weekly2-single "
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        {/* <Link
        href={
          "/blog/" +
          data.title.replace(/\?/g, "").replace(/ /g, "-") +
          "/" +
          data._id
        }
        className="hover-red"
      > */}
        <div
          classname="weekly2-img"
          style={{ marginBottom: "20px", color: "red", position: "relative" }}
        >
          <Image
            className=""
            src={data.mainImg}
            alt={data.category}
            width={0}
            height={0}
            sizes="height:150px "
            style={{
              objectFit: "cover",
              width: "100%",
              height: "150px",
            }}
          />
          {/* <img
            className="card2-img"
            src={data.mainImg}
            alt={data.category}
            loading="lazy"
          /> */}
        </div>
        {/* </Link> */}
        <div classname="weekly2-caption ">
          <h4 className="">
            {/* <Link
            href={
              "/blog/" +
              data.title.replace(/ /g, "-").replace(/\?/g, "") +
              "/" +
              data._id
            }
            className="hover-red"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "1.3",
              display: "block",
              paddingRight: "20px",
            }}
          > */}
            {data.title}
            {/* </Link> */}
          </h4>
          <p style={{ fontSize: "12px" }}>
            {data.createdDate} | Views: {data.views}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card2;
