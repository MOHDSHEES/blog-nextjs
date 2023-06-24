import React from "react";

const LogoAbout = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8">
      <div className="single-footer-caption mb-50">
        <div className="single-footer-caption mb-30">
          {/* logo */}
          <div className="footer-logo">
            <a href="index.html">
              <img src="images/img/logo/logo2_footer.png" alt="" />
            </a>
          </div>
          <div className="footer-tittle">
            <div className="footer-pera">
              <p className="info1">
                Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <p className="info2">
                198 West 21th Street, Suite 721 New York,NY 10010
              </p>
              <p className="info2">
                Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAbout;
