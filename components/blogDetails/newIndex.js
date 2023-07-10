import React, { useEffect, useState } from "react";

const NewIndex = ({ blog }) => {
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi; // Regular expression to match the <h2> tag with any attributes and capture its content
  // Find all matches of the regular expression in the string
  const [index, setIndex] = useState([]);
  useEffect(() => {
    const matches = blog.blog.match(regex);
    const extractedTexts =
      matches && matches.map((match) => match.replace(/<\/?h2[^>]*>/g, ""));
    setIndex(extractedTexts);
    //   console.log(extractedTexts);
  }, [blog]);
  //   console.log(index);
  //   const handleClickScroll = (id) => {
  //     // console.log(id);
  //     const element = document.getElementById(id);
  //     if (element) {
  //       // 👇 Will scroll smoothly to the top of the next section
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  const scrollToHeading = (index) => {
    const container = document.getElementById("blog-1");
    if (index === -1) {
      const headings = container.querySelectorAll("h1");
      headings[0].scrollIntoView({ behavior: "smooth" });
    } else {
      const headings = container.querySelectorAll("h2");
      if (index >= 0 && index < headings.length) {
        headings[index].scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className="blog-index mb-3">
      <div style={{ textAlign: "center" }}>
        <h5 style={{ color: "#ed1c24" }}>Index</h5>
      </div>
      <ul style={{ paddingLeft: "24px" }}>
        <li className="index-ul  p-link">
          <p
            onClick={() => scrollToHeading(-1)}
            //   href={"#" + blog.text}
            className=" mb-2 "
          >
            Introduction
          </p>
        </li>
        {index.length !== 0 &&
          index.map((text, idx) => {
            return (
              <li key={idx} className="index-ul p-link">
                <p
                  onClick={() => scrollToHeading(idx)}
                  //   href={"#" + blog.text}
                  className=" mb-2"
                >
                  {text}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default NewIndex;
