import Link from "next/link";
import React from "react";

const BlogIndex = ({ blog }) => {
  //   console.log(blog);
  const handleClickScroll = (id) => {
    // console.log(id);
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // console.log(blog);
  return (
    <div className="blog-index mb-3">
      <div style={{ textAlign: "center" }}>
        <h5 style={{ color: "#ed1c24" }}>Index</h5>
      </div>
      <ul style={{ paddingLeft: "24px" }}>
        <li className="index-ul  p-link">
          <p
            onClick={() => handleClickScroll(blog.title)}
            //   href={"#" + blog.text}
            className=" mb-2 "
          >
            Introduction
          </p>
        </li>
        {blog &&
          blog.blog &&
          blog.blog.map((blog) => {
            return (
              <>
                {blog.tag === "H" && (
                  <li className="index-ul p-link">
                    <p
                      onClick={() => handleClickScroll(blog.text)}
                      //   href={"#" + blog.text}
                      className=" mb-2"
                    >
                      {" "}
                      {blog.text}
                    </p>
                  </li>
                )}
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default BlogIndex;
