import React from "react";

const MemberCard = ({ src, post, name }) => {
  return (
    // <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
    <div className="single-team mb-30">
      <div
        className="team-img"
        style={{
          width: "100%",
          margin: "auto",
          height: "363px",
          backgroundColor: "#a59f9f30",
        }}
      >
        <img
          src={src}
          style={{ width: "100%", height: "363px", objectFit: "cover" }}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="team-caption">
        <h3>
          <a href="#">{name}</a>
        </h3>
        <span>{post}</span>
      </div>
    </div>
    // </div>
  );
};

export default MemberCard;
