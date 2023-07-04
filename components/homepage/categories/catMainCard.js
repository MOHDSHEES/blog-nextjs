import React from "react";
import parse from "html-react-parser";
import Link from "next/link";

const CatMainCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="col-xl-6 col-lg-12 nav-a">
      <Link href={"/blog/" + data.title.replace(/ /g, "-") + "/" + data._id}>
        <div className="whats-news-single mb-40 mb-40">
          {/* <Link href={"/blog/" + data.title.replace(/ /g, "-") + "/" + data._id}> */}
          <div className="whates-img">
            <img src={data.mainImg} alt={data.category} loading="lazy" />
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
            <p className="break-line-3">
              {parse(data.blog[0].text.replace(/<[^>]+>/g, ""))}
            </p>
            {/* </Link> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CatMainCard;
