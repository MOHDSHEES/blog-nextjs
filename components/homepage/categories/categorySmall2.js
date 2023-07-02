import Link from "next/link";
import React from "react";
import resizeImg from "../../functions/resizeImg";

const CategorySmall2 = ({ data }) => {
  return (
    <Link
      href={
        "/blog/" +
        data.title.replace(/ /g, "-").replace(/\?/g, "") +
        "/" +
        data._id
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
        <div className="most-recent-images categorySmall2">
          <img
            src={resizeImg(data.mainImg, 6, "h_90,c_scale")}
            alt={data.category}
            loading="lazy"
          />
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
