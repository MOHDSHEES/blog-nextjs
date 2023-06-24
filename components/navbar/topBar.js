import React from "react";

const TopBar = () => {
  return (
    <div className="header-top black-bg d-none d-sm-block">
      <div className="container">
        <div className="col-xl-12">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="header-info-left">
              <ul>
                <li className="title">
                  <span className="flaticon-energy" /> trending-title
                </li>
                <li>Class property employ ancho red multi level mansion</li>
              </ul>
            </div>
            <div className="header-info-right">
              <ul className="header-date">
                <li>
                  <span className="flaticon-calendar" /> +880166 253 232
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
