import React from "react";

const AboutServices = () => {
  return (
    <div
      className="support-company-area pt-100 pb-100 section-bg fix"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/domyp6djh/image/upload/v1688413234/aboutBack_m1njkp.jpg)",
      }}
      // data-background="https://res.cloudinary.com/domyp6djh/image/upload/v1688413234/aboutBack_m1njkp.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="support-location-img">
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
              {/* Section Tittle */}
              <div className="section-tittles section-tittles2 mb-50">
                <span>Our Top Services</span>
                <h2>Our Best Services</h2>
              </div>
              <div className="support-caption">
                <p className="pera-top">
                  Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
                  cillum dolore egru lofrre dsu quality mollit anim laborumuis
                  au dolor in voluptate velit cillu.
                </p>
                <p className="mb-65">
                  Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd
                  re voluptate velit esscillumlore eu quife nrulla parihatur.
                  Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
                  dhjinulpadeserunt moll.
                </p>
                <a href="about.html" className="btn post-btn ">
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
