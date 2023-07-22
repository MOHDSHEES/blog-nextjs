import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatSmallCard = ({ data }) => {
  return (
    <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10 nav-a ">
      <Link
        href={
          "/blogs/" +
          data.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
          "-" +
          data.id
        }
      >
        <div className="whats-right-single mb-20">
          {/* <Link
          href={
            "/blog/" +
            data.title.replace(/ /g, "-").replace(/\?/g, "") +
            "/" +
            data._id
          }
        > */}
          <div className="whats-right-img catSmallCard">
            <Image
              className=""
              src={data.mainImg}
              alt={data.category}
              width={0}
              height={0}
              sizes="height:100px "
              style={{
                objectFit: "cover",
                width: "100px",
                height: "100px",
              }}
            />
            {/* <img src={data.mainImg} alt={data.category} loading="lazy" /> */}
          </div>
          {/* </Link> */}
          <div className="whats-right-cap">
            <span className="colorb">{data.category}</span>
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
            <p>{data.createdDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CatSmallCard;
