import React from "react";
import AboutServices from "../components/aboutUs/aboutServices";
import MemberCard from "../components/aboutUs/memberCard";

const AboutUs = () => {
  return (
    <div>
      <div class="about-details section-padding30">
        <div class="container">
          <div class="row">
            <div class="offset-xl-1 col-lg-8">
              <div class="about-details-cap mb-50">
                <h4>Our Mission</h4>
                <p>
                  <i>Offtheweb.in</i> is a blog website that provides a
                  refreshing break from the online world that surrounds us. We
                  offer a wide range of content that encourages readers to step
                  away from their screens and explore topics that are often
                  overlooked in the digital realm . Our mission is to inspire
                  our readers to live more mindful and intentional lives.
                </p>
              </div>
              <div class="about-details-cap mb-50">
                <h4>Our Vision</h4>
                <p>
                  We envision a world where people are less connected to their
                  screens and more connected to explore topics that are often
                  overlooked in the digital realm. We believe that by providing
                  our readers with a space to disconnect from the social media
                  world and connect them to new and trending information and
                  educate, we can help them to live happier, informative, and
                  more interesting lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutServices />
      {/* Team Start */}
      <div className="team-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              {/* Section Tittle */}
              <div className="section-tittles mb-70">
                <span>Our Professional members </span>
                <h2>Our Team Mambers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* <Banner /> */}
    </div>
  );
};

export default AboutUs;
