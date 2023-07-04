import React from "react";

const MemberCard = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
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
            src="assets/img/gallery/team2.png"
            style={{ width: "100%", height: "363px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="team-caption">
          <h3>
            <a href="#">Ethan Welch</a>
          </h3>
          <span>UX Designer</span>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
