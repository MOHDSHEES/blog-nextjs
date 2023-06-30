import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const SocialFollow = () => {
  return (
    <div className="single-follow mb-30 nav-a">
      <div className="single-box">
        <div className="follow-us d-flex align-items-center">
          <div className="follow-social">
            <a href="https://www.facebook.com/offftheweb">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ color: "#3b5998" }}
                size="2xl"
              />
            </a>
            {/* <a href="">
              <img src="images/img/news/icon-fb.png" alt="facebook" />
            </a> */}
          </div>
          <div className="follow-count">
            <a href="https://www.facebook.com/offftheweb">
              <span>Facebook</span>
              {/* <p>Fans</p> */}
            </a>
          </div>
        </div>
        <div className="follow-us d-flex align-items-center">
          <div className="follow-social">
            <a href="https://twitter.com/_OFFTHEWEB">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="2xl"
                style={{ color: "#00acee" }}
              />
            </a>
          </div>
          <div className="follow-count">
            <a href="https://twitter.com/_OFFTHEWEB">
              <span>Twitter</span>
            </a>
            {/* <p>Fans</p> */}
          </div>
        </div>

        <div className="follow-us d-flex align-items-center">
          <div className="follow-social">
            <a href="https://www.linkedin.com/company/offtheweb/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#0072b1" }}
              />
              {/* <FontAwesomeIcon icon={faUser} /> */}
              {/* <img src="images/img/news/icon-ins.png" alt="" /> */}
            </a>
          </div>
          <div className="follow-count">
            <a href="https://www.linkedin.com/company/offtheweb/">
              <span>LinkedIn</span>
            </a>
            {/* <p>Fans</p> */}
          </div>
        </div>
        <div className="follow-us d-flex align-items-center">
          <div className="follow-social">
            <a href="https://www.youtube.com/channel/UC0BxUqApESxQZ49REib5ELQ">
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                size="2xl"
                style={{ color: "#FF0000" }}
              />
            </a>
          </div>
          <div className="follow-count">
            <a href="https://www.youtube.com/channel/UC0BxUqApESxQZ49REib5ELQ">
              <span>Youtube</span>
              {/* <p>Fans</p> */}
            </a>
          </div>
        </div>
        <div className="follow-us d-flex align-items-center">
          <div className="follow-social">
            <a href="https://www.instagram.com/offtheweb.in/">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size="2xl"
                style={{ color: "#833AB4" }}
              />
            </a>
          </div>
          <div className="follow-count">
            <a href="https://www.instagram.com/offtheweb.in/">
              <span>Instagram</span>
              {/* <p>Fans</p> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFollow;
