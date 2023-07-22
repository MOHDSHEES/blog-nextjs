import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card4 = ({ data }) => {
  return (
    <div className="nav-a">
      <Link
        href={
          "/blogs/" +
          data.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
          "-" +
          data.id
        }
      >
        <div className="whats-right-single mb-20 ">
          {/* <Link
        href={
          "/blog/" +
          data.title.replace(/ /g, "-").replace(/\?/g, "") +
          "/" +
          data._id
        }
      > */}
          <div className="whats-right-img card4-img">
            <Image
              src={data.mainImg}
              alt={data.category}
              width={0}
              height={0}
              sizes="height:80px "
              style={{
                objectFit: "cover",
                width: "width:80px",
                height: "80px",
              }}
            />
            {/* <img src={data.mainImg} alt={data.category} loading="lazy" /> */}
          </div>
          {/* </Link> */}
          <div className="whats-right-cap">
            <h4 className=" color-white">
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
            <p>{data.createdDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card4;
