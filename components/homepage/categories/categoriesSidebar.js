import Link from "next/link";
import React from "react";
import resizeImg from "../../functions/resizeImg";

const CategoriesSidebar = ({ categories }) => {
  return (
    <div>
      {/* <div class="col-lg-4"> */}
      <div
        class="d-flex align-items-center justify-content-between py-2 px-4 mb-3"
        style={{ background: "white" }}
      >
        <h3 class="m-0">Categories</h3>
        {/* <Link
          class="text-secondary font-weight-medium text-decoration-none"
          href="/categories"
        >
          View All
        </Link> */}
      </div>
      {categories &&
        categories.slice(0, 4).map((c, idx) => {
          return (
            <div
              key={idx + "id"}
              class="position-relative overflow-hidden mb-3 nav-a"
              style={{ height: "100px" }}
            >
              <img
                class="img-fluid w-100 h-100"
                src={resizeImg(c.categoryImg, 6, "h_100,c_scale")}
                // src={c.categoryImg}
                alt={c.category}
                style={{ objectFit: "cover" }}
              />
              <Link
                href={"/category/" + c.category.replace(/ /g, "-")}
                class="overlay-text-img align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                {c.category}
              </Link>
            </div>
          );
        })}

      {/* </div>  */}
    </div>
  );
};

export default CategoriesSidebar;