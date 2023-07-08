import React from "react";
import AboutServices from "../components/aboutUs/aboutServices";
import MemberCard from "../components/aboutUs/memberCard";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
// import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>OFFTHEWEB</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/domyp6djh/image/upload/v1688851669/common/ezgif.com-gif-maker_xrbea2.webp"
        />
        <meta
          name="description"
          content="Explore the captivating world of OffTheWeb.in - a captivating blog website that delves into a myriad of topics, from technology to business, sports to cyber security. Immerse yourself in our thought-provoking articles, engage in enlightening discussions, and stay informed with our expertly curated content. Join us on OffTheWeb.in and embark on a journey of discovery, inspiration, and endless possibilities."
          data-rh="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Explore the captivating world of OffTheWeb.in - a captivating blog website that delves into a myriad of topics, from technology to business, sports to cyber security. Immerse yourself in our thought-provoking articles, engage in enlightening discussions, and stay informed with our expertly curated content. Join us on OffTheWeb.in and embark on a journey of discovery, inspiration, and endless possibilities."
        />
        <meta property="og:title" content="OFFTHEWEB" />
        <meta
          name="keywords"
          content="OFFTHEWEB,OFF THE WEB, THE WEB, OFF WEB, technology trends,trending,about offtheweb"
        />
      </Head>
      <div
        class="about-details section-padding30"
        style={{ paddingBottom: "40px" }}
      >
        <div class="container">
          <div class="row">
            <div class="offset-xl-1 col-lg-8">
              <div class="about-details-cap mb-50">
                <h4>Our Mission</h4>
                <p style={{ textAlign: "justify" }}>
                  OFFTHEWEB is a blog website that provides a refreshing break
                  from the online world that surrounds us. We offer a wide range
                  of content that encourages readers to step away from their
                  screens and explore topics that are often overlooked in the
                  digital realm . Our mission is to inspire our readers to live
                  more mindful and intentional lives.
                </p>
              </div>
              <div class="about-details-cap mb-50">
                <h4>Our Vision</h4>
                <p style={{ textAlign: "justify" }}>
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
      <div className="team-area pb-20 pt-70">
        <div className="container">
          <div className="row">
            {/* <div className="cl-xl-7 col-lg-8 col-md-10"> */}
            {/* Section Tittle */}
            <div className="section-tittles section-title-2 mb-30">
              <span
                style={{
                  fontSize: "25px",
                  marginBottom: "40px",
                  marginTop: "20px",
                }}
                className="mb-20"
              >
                Our Professional members
              </span>
              <h3 style={{ textAlign: "center", fontWeight: "700" }}>
                Management Team
              </h3>
            </div>
            {/* </div> */}
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            // items={3}
            dots={false}
            margin={30}
            autoplay
            // key={data.length}
            autoplayTimeout={3000}
            autoplayHoverPause
            responsive={{
              0: {
                items: 1,
              },
              480: {
                items: 1,
              },
              767: {
                items: 2,
              },
              992: {
                items: 2,
              },
              1280: {
                items: 3,
              },
            }}
          >
            <MemberCard
              name={"MOHD SHEES"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688824318/employees/ceo_owuczd.jpg"
              }
              post={"Founder and CEO"}
            />
            <MemberCard
              name={"DEEPAK KUMAR"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688824322/employees/Deepak_kumar_yvnwvd.webp"
              }
              post={"Co-Founder and COO"}
            />
            <MemberCard
              name={"ANAS ADNAN"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688841805/employees/Anas_Adnan_y87a04_1_nuzwei.webp"
              }
              post={"Project Manager"}
            />
            <MemberCard
              name={"RAMSHA FARHEEN"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688825964/employees/Ramsha_farheen_dbjanl.webp"
              }
              post={"Human Resource Manager"}
            />
          </OwlCarousel>
          {/* <div className="row">
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div> */}
        </div>
      </div>
      {/* Team End */}
      {/* <Banner /> */}

      <div className="team-area pb-20 pt-20">
        <div className="container">
          <div className="row">
            {/* <div className="cl-xl-7 col-lg-8 col-md-10"> */}
            {/* Section Tittle */}
            <div className="section-tittles mb-30">
              {/* <span>Our Professional members </span> */}
              <h3 style={{ textAlign: "center", fontWeight: "700" }}>
                Content Writing Team
              </h3>
            </div>
            {/* </div> */}
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            // items={4}
            dots={false}
            margin={30}
            autoplay
            // key={data.length}
            autoplayTimeout={3000}
            autoplayHoverPause
            responsive={{
              0: {
                items: 1,
              },
              480: {
                items: 1,
              },
              767: {
                items: 2,
              },
              992: {
                items: 2,
              },
              1280: {
                items: 3,
              },
            }}
          >
            <MemberCard
              name={"GAURAV BISHT"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688825405/employees/Gaurav_Bisht_czwr48.webp"
              }
              post={"Content Writer"}
            />
            <MemberCard
              name={"GULSHAN YADAV"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688825406/employees/Gulshan_Yadav_oungfw.webp"
              }
              post={"Content Writer"}
            />
            <MemberCard
              name={"ADITYA MISHRA"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688827137/employees/Aditya_Mishra_j0jfcf.webp"
              }
              post={"Content Writer"}
            />
            <MemberCard
              name={"SOBHA JUYAL"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688825408/employees/Sobha_juyal_nrqgvd.webp"
              }
              post={"Content Writer"}
            />
            <MemberCard
              name={"DIPALI DHANWANI"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688825405/employees/Dipali_Dhanwani_xsxu4k.webp"
              }
              post={"Content Writer"}
            />
            <MemberCard
              name={"PANKAJ KUMAR"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688831046/employees/Teamboy_zqv9yx.webp"
              }
              post={"Content Writer"}
            />
            <MemberCard
              name={"VAISHNAVI S KALE"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688831062/employees/Teamgirl_q0c1zd.webp"
              }
              post={"Content Writer"}
            />
          </OwlCarousel>
          {/* <div className="row">
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div> */}
        </div>
      </div>

      <div className="team-area pb-20 pt-20">
        <div className="container">
          <div className="row">
            {/* <div className="cl-xl-7 col-lg-8 col-md-10"> */}
            {/* Section Tittle */}
            <div className="section-tittles mb-30">
              {/* <span>Our Professional members </span> */}
              <h3 style={{ textAlign: "center", fontWeight: "700" }}>
                Digital Marketing Team
              </h3>
            </div>
            {/* </div> */}
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            items={2}
            dots={false}
            margin={30}
            autoplay
            // key={data.length}
            autoplayTimeout={3000}
            autoplayHoverPause
            responsive={{
              0: {
                items: 1,
              },
              480: {
                items: 1,
              },
              767: {
                items: 2,
              },
              992: {
                items: 2,
              },
              1280: {
                items: 3,
              },
            }}
          >
            <MemberCard
              name={"RIYA KUKREJA"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688825405/employees/Riya_kukreja_cwlrma.webp"
              }
              post={"Digital Marketing and SEO"}
            />

            <MemberCard
              name={"DEEKSHA SHIVDAS"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688825404/employees/Deeksha_shivdas_ok2od6.webp"
              }
              post={"Digital Marketing and SEO"}
            />
            <MemberCard
              name={"NAMAN GOYAL"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688828941/employees/Naman_Goyal_bwckwm.webp"
              }
              post={"Digital Marketing and SEO"}
            />
            <MemberCard
              name={"HIDA PARVEEN"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688831062/employees/Teamgirl_q0c1zd.webp"
              }
              post={"Digital Marketing and SEO"}
            />
            <MemberCard
              name={"NEHA N"}
              src={
                "https://res.cloudinary.com/domyp6djh/image/upload/v1688831062/employees/Teamgirl_q0c1zd.webp"
              }
              post={"Digital Marketing and SEO"}
            />
          </OwlCarousel>
          {/* <div className="row">
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
