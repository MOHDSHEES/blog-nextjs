import React from "react";

const Card2 = ({ data }) => {
  return (
    <div
      classname="weekly2-single"
      style={{ marginLeft: "15px", marginRight: "15px" }}
    >
      <div classname="weekly2-img" style={{ marginBottom: "20px" }}>
        <img src={data.mainImg} alt={data.category} style={{ width: "100%" }} />
      </div>
      <div classname="weekly2-caption ">
        <h4 className="nav-a">
          <a
            href="#!"
            className="hover-red"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "1.3",
              display: "block",
              paddingRight: "20px",
            }}
          >
            {data.title}
          </a>
        </h4>
        <p style={{ fontSize: "12px" }}>
          {data.createdDate} | Views: {data.views}
        </p>
      </div>
    </div>
  );
};

export default Card2;
