import Link from "next/link";
import React from "react";

const CategorySmall2 = ({ data }) => {
  return (
    <div className="most-recent-single nav-a">
      <div className="most-recent-images categorySmall2">
        <img src={data.mainImg} alt={data.category} loading="lazy" />
      </div>
      <div className="most-recent-capt">
        <h4>
          <Link href={"/blog/" + data.title.replace(/ /g, "-")}>
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
