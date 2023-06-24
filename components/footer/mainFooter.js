import React from "react";
import BottomArea from "./bottomArea";
import LogoAbout from "./logoAbout";
import PopularPost from "./popularPost";

const MainFooter = ({ data }) => {
  console.log(data);
  return (
    <div className="footer-main footer-bg">
      <div className="footer-area footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <LogoAbout />
            {data && data.recent && <PopularPost data={data.recent} />}

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
              <div className="single-footer-caption mb-50">
                <div className="banner">
                  <img src="images/img/gallery/body_card4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomArea />
    </div>
  );
};

export default MainFooter;
