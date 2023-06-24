import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const MainNavbar = () => {
  return (
    <div className="header-bottom header-sticky">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
            <div className="sticky-logo">
              <a href="index.html">
                <img src="assets/img/logo/logo.png" alt="" />
              </a>
            </div>
            <div className="main-menu d-none d-md-block nav-a">
              <nav>
                <ul id="navigation">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">about</a>
                  </li>
                  <li>
                    <a href="categori.html">Category</a>
                  </li>
                  <li>
                    <a href="latest_news.html">Latest News</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog_details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="elements.html">Element</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="header-right f-right d-none d-lg-block">
              <ul className="header-social">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
              <div className="nav-search search-switch">
                <i className="fa fa-search" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="mobile_menu d-block d-md-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
