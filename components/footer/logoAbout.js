import Link from "next/link";
import React from "react";

const LogoAbout = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8">
      <div className="single-footer-caption mb-50">
        <div className="single-footer-caption mb-30">
          {/* logo */}
          <div className="footer-logo nav-a">
            <Link href="/">
              <h2
                class="mb-2 mt-n2  text-uppercase "
                style={{ color: "white" }}
              >
                <span style={{ color: "red" }}>OFF</span>THE
                <span style={{ color: "red" }}>WEB</span>
              </h2>
              {/* <img src="images/img/logo/logo2_footer.png" alt="" /> */}
            </Link>
          </div>
          <div className="footer-tittle">
            <div className="footer-pera">
              <p className="info1" style={{ color: "white" }}>
                Stay ahead of the curve with OFFTHEWEB - your source for the
                latest in tech and beyond.
              </p>
              {/* <p className="info2">
                198 West 21th Street, Suite 721 New York,NY 10010
              </p>
              <p className="info2">
                Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAbout;
