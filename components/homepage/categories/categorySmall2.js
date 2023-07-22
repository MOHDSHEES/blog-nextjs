import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySmall2 = ({ data }) => {
  return (
    <Link
      href={
        "/blogs/" +
        data.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
        "-" +
        data.id
      }
    >
      <div className="most-recent-single ">
        {/* <Link
        href={
          "/blog/" +
          data.title.replace(/ /g, "-").replace(/\?/g, "") +
          "/" +
          data._id
        }
      > */}
        <div
          style={{ position: "relative" }}
          className="most-recent-images categorySmall2"
        >
          <Image
            className=""
            src={data.mainImg}
            alt={data.category}
            width={100}
            height={80}
            // sizes="height:80px width:120px"
            style={{
              objectFit: "cover",
              width: "100px",
              height: "80px",
            }}
          />
          {/* <img src={data.mainImg} alt={data.category} loading="lazy" /> */}
        </div>
        {/* </Link> */}
        <div className="most-recent-capt">
          <h4>
            {/* <Link
            href={
              "/blog/" +
              data.title.replace(/ /g, "-").replace(/\?/g, "") +
              "/" +
              data._id
            }
          > */}
            {data.title}
            {/* </Link> */}
          </h4>
          <p>
            {data.createdDate} | Views: {data.views}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategorySmall2;
