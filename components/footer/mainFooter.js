import React, { useContext } from "react";
import { MyContext } from "../context";
import BottomArea from "./bottomArea";
import LogoAbout from "./logoAbout";
import PopularPost from "./popularPost";

const MainFooter = ({}) => {
  const { trending: data } = useContext(MyContext);
  // console.log(data);
  return (
    <div className="footer-main footer-bg pt-100">
      <div className="footer-area footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <LogoAbout />
            {data && <PopularPost data={data} />}

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
              <div className="single-footer-caption mb-50">
                <div className="banner">
                  <img src="/images/img/gallery/body_card4.png" alt="" />
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
