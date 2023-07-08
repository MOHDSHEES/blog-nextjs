import React from "react";

const AboutServices = () => {
  return (
    <div
      className="support-company-area  pb-50 section-bg fix"
      // style={{
      //   backgroundImage:
      //     "url(https://res.cloudinary.com/domyp6djh/image/upload/v1688413234/aboutBack_m1njkp.jpg)",
      // }}
      // // data-background="https://res.cloudinary.com/domyp6djh/image/upload/v1688413234/aboutBack_m1njkp.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="aboutServices">
            <div className="aboutServices-img">
              <img
                style={{ borderRadius: "7%" }}
                src="/images/name.jpeg"
                alt="offtheweb"
                loading="lazy"
              />
            </div>
            <div className="aboutServices-content">
              <div className="section-tittles section-title-2 mb-20">
                <span style={{ fontSize: "30px" }}>About Us</span>
              </div>
              <p className="mb-4">
                OFFTHEWEB is a blog website that aims to provide a refreshing
                break from the online world that surrounds us. In a world where
                we are constantly connected to the internet, Off The Web offers
                a space for readers to disconnect and explore topics that are
                often overlooked in the digital realm. From lifestyle and travel
                to personal growth and well-being.
              </p>
              <p className="">
                Off The Web provides a wide range of content that encourages
                readers to step away from their screens and engage with the
                world around them. Join us on a journey of discovery and
                self-reflection as we explore the world Off The Web.
              </p>
            </div>
          </div>

          {/*           
          <div className="col-xl-6 col-lg-6">
            <div className="support-location-img">
              <img
                style={{ borderRadius: "5px" }}
                src="/images/name.jpeg"
                alt="offtheweb"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
             
              <div className="section-tittles section-tittles2 mb-50">
                <span style={{ fontSize: "45px" }}>About Us</span>
              </div>
              <div className="support-caption">
                <p className="mb-4">
                  OFFTHEWEB is a blog website that aims to provide a refreshing
                  break from the online world that surrounds us. In a world
                  where we are constantly connected to the internet, Off The Web
                  offers a space for readers to disconnect and explore topics
                  that are often overlooked in the digital realm. From lifestyle
                  and travel to personal growth and well-being.
                </p>
                <p className="mb-65">
                  Off The Web provides a wide range of content that encourages
                  readers to step away from their screens and engage with the
                  world around them. Join us on a journey of discovery and
                  self-reflection as we explore the world Off The Web.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
