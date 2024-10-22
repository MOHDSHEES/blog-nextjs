import Link from "next/link";
import React from "react";

const MidBar = () => {
  return (
    <div className="header-mid gray-bg mid-bar-laptop">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
            <div className="logo nav-a">
              <Link href="/" shallow={true}>
                <h1
                  class="mb-2 mt-n2  text-uppercase "
                  style={{ color: "black", fontWeight: 900 }}
                >
                  <span style={{ color: "red" }}>OFF</span>THE
                  <span style={{ color: "red" }}>WEB</span>
                </h1>
                {/* <img src="images/img/logo/logo.png" alt="" /> */}
              </Link>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9">
            <a href="https://www.technboost.com/" target="_blank">
              <div className="header-banner f-right ">
                <img src="/ad/AD.gif" alt="ad" loading="lazy" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBar;
