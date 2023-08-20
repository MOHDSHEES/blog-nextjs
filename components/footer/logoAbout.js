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
              <h2 class="mb-2 mt-n2  text-uppercase" style={{ color: "white" }}>
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
              <div class="d-flex justify-content-start mt-4 ">
                <a
                  class="btn btn-outline-secondary text-center mr-2 px-0  icons"
                  style={{
                    width: "38px",
                    height: "38px",
                  }}
                  href="https://twitter.com/_OFFTHEWEB"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bx bxl-twitter"></i>
                </a>
                <a
                  class="btn btn-outline-secondary text-center mr-2 px-0 icons"
                  style={{ width: "38px", height: "38px" }}
                  href="https://www.facebook.com/offftheweb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bx bxl-facebook"></i>
                </a>
                <a
                  class="btn btn-outline-secondary text-center mr-2 px-0 icons"
                  style={{ width: "38px", height: "38px" }}
                  href="https://www.linkedin.com/company/offtheweb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a
                  class="btn btn-outline-secondary text-center mr-2 px-0 icons"
                  style={{ width: "38px", height: "38px" }}
                  href="https://www.instagram.com/offtheweb.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bx bxl-instagram"></i>
                </a>
                <a
                  class="btn btn-outline-secondary text-center mr-2 px-0 icons"
                  style={{ width: "38px", height: "38px" }}
                  href="https://www.youtube.com/channel/UC0BxUqApESxQZ49REib5ELQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bx bxl-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAbout;
