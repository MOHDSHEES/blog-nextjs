import Link from "next/link";
import React from "react";
import resizeImg from "../../functions/resizeImg";

const CategorySmall2 = ({ data }) => {
  return (
    <div className="most-recent-single nav-a">
      <Link href={"/blog/" + data._id + "/" + data.title.replace(/ /g, "-")}>
        <div className="most-recent-images categorySmall2">
          <img
            src={resizeImg(data.mainImg, 6, "h_90,c_scale")}
            alt={data.category}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="most-recent-capt">
        <h4>
          <Link
            href={"/blog/" + data._id + "/" + data.title.replace(/ /g, "-")}
          >
            {data.title}
          </Link>
        </h4>
        <p>
          {data.createdDate} | Views: {data.views}
        </p>
      </div>
    </div>
  );
};

export default CategorySmall2;
