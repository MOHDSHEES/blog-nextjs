import Link from "next/link";
import React from "react";

const CategoriesSidebar = ({ categories }) => {
  return (
    <div>
      {/* <div class="col-lg-4"> */}
      {/* <div
        class="d-flex align-items-center justify-content-between py-2 px-4 mb-3"
        style={{ background: "white" }}
      >
        <h3 class="m-0">Categories</h3>
     
      </div> */}
      {categories &&
        categories.slice(0, 4).map((c, idx) => {
          return (
            <div
              key={idx + "id"}
              class="position-relative overflow-hidden mb-3 nav-a mt-2"
              style={{ height: "115px" }}
            >
              <img
                class="img-fluid w-100 h-100"
                src={c.categoryImg}
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
