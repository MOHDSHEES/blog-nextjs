import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import HorizontalAds from "../../ads/horizontalAds";

const CatMainCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="col-xl-6 col-lg-12 nav-a">
      <Link
        href={
          "/blogs/" +
          data.title.toLowerCase().replace(/ /g, "-").replace(/\?/g, "") +
          "-" +
          data.id
        }
      >
        <div className="whats-news-single mb-40 mb-40">
          {/* <Link href={"/blog/" + data.title.replace(/ /g, "-") + "/" + data._id}> */}
          <div className="whates-img">
            <Image
              className=""
              src={data.mainImg}
              alt={data.category}
              width={0}
              height={0}
              sizes="height:100% "
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            {/* <img src={data.mainImg} alt={data.category} loading="lazy" /> */}
          </div>
          {/* </Link> */}
          <div className="whates-caption" style={{ color: "black" }}>
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
            <span>{data.createdDate}</span>
            {/* <Link
            href={
              "/blog/" +
              data.title.replace(/ /g, "-").replace(/\?/g, "") +
              "/" +
              data._id
            }
          > */}{" "}
            <div className="break-line-3">
              {data && data.description && parse(data.description)}
              {/* {parse(data.blog[0].text.replace(/<[^>]+>/g, ""))} */}
            </div>
            {/* </Link> */}
          </div>
        </div>
      </Link>
      <HorizontalAds
        data-ad-format="fluid"
        data-ad-layout-key="-e8+7m+2l-ev+hk"
        data-ad-slot="8757784502"
      />
    </div>
  );
};

export default CatMainCard;
