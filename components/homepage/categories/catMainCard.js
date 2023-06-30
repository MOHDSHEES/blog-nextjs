import React from "react";
import parse from "html-react-parser";
import Link from "next/link";

const CatMainCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="col-xl-6 col-lg-12 nav-a">
      <div className="whats-news-single mb-40 mb-40">
        <div className="whates-img">
          <img src={data.mainImg} alt={data.category} loading="lazy" />
        </div>
        <div className="whates-caption">
          <h4>
            <Link href={"/blog/" + data.title.replace(/ /g, "-")}>
              {data.title}
            </Link>
          </h4>
          <span>{data.createdDate}</span>
          <p className="break-line-3">{parse(data.blog[0].text)}</p>
        </div>
      </div>
    </div>
  );
};

export default CatMainCard;
