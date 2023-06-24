import React from "react";

const MidBar = () => {
  return (
    <div className="header-mid gray-bg">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
            <div className="logo">
              <a href="index.html">
                <img src="images/img/logo/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9">
            <div className="header-banner f-right ">
              <img src="images/img/gallery/header_card.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBar;
