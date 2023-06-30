import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import resizeImg from "../../functions/resizeImg";

const CatMainCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="col-xl-6 col-lg-12 nav-a">
      <div className="whats-news-single mb-40 mb-40">
        <div className="whates-img">
          <img
            src={resizeImg(data.mainImg, 6, "h_520,c_scale")}
            alt={data.category}
            loading="lazy"
          />
        </div>
        <div className="whates-caption">
          <h4>
            <Link
              href={"/blog/" + data._id + "/" + data.title.replace(/ /g, "-")}
            >
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
