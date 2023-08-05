import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySmall2 = ({ data }) => {
  return (
    // <Link
    //   href={
    //     "/blogs/" +
    //     data.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
    //     "-" +
    //     data.id
    //   }
    // >
    //   <div className="most-recent-single ">
    <>
      <div
        style={{ position: "relative" }}
        className="most-recent-images categorySmall2"
      >
        <Image
          className=""
          src={data.mainImg}
          alt={data.category}
          width={100}
          height={100}
          style={{
            objectFit: "cover",
            width: "100px",
            height: "100px",
          }}
        />
      </div>
      <div className="most-recent-capt">
        <h4>{data.title}</h4>
        <p>
          {data.createdDate} | Views: {data.views}
        </p>
      </div>
    </>
    //   </div>
    // </Link>
  );
};

export default CategorySmall2;
