import React, { useEffect, useState } from "react";
import CatMainCard from "./catMainCard";
import CatSmallCard from "./catSmallCard";
import SocialFollow from "./socialFollow";
import RecentBlogs from "./recentBlogs";
import Link from "next/link";
import HorizontalAds from "../../ads/horizontalAds";

const categoryTab = ({ data }) => {
  // console.log("categoryTb");
  // console.log(data);
  const [categoryData, setCategoryData] = useState(
    data && data.categoryData ? data.categoryData : []
  );
  useEffect(() => {
    setCategoryData(data.categoryData);
  }, [data]);
  const [prevActive, setPrevActive] = useState(0);
  function toggle(id) {
    document.getElementById(id).classList.add("active", "show");
    if (prevActive !== id)
      document.getElementById(prevActive).classList.remove("active", "show");
    setPrevActive(id);
  }

  return (
    <section className="whats-news-area pt-10 pb-20 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="whats-news-wrapper">
              {/* Heading & Nav Button */}
              <div className="row justify-content-between align-items-end mb-15">
                <div className="col-xl-4">
                  <div className="section-tittle mb-30">
                    <h3>Categories</h3>
                  </div>
                </div>
                <div className="col-xl-8 col-md-9">
                  <div className="properties__button">
                    {/*Nav Button  */}
                    <nav>
                      <div
                        className="nav nav-tabs cursor-pointer"
                        id="nav-tab"
                        role="tablist"
                      >
                        {categoryData &&
                          Object.entries(categoryData).map((data, idx) => {
                            // console.log(data);
                            return (
                              <a
                                className={`nav-item nav-link ${
                                  prevActive === idx ? "active" : ""
                                }`}
                                id="nav-home-tab"
                                data-toggle="tab"
                                // href="#nav-home"
                                role="tab"
                                onClick={() => toggle(idx)}
                                aria-controls="nav-home"
                                aria-selected="true"
                              >
                                {data[0]}
                              </a>
                            );
                          })}
                      </div>
                    </nav>
                    {/*End Nav Button  */}
                  </div>
                </div>
              </div>
              {/* Tab content */}
              <div className="row">
                <div className="col-12">
                  {/* Nav Card */}
                  <div className="tab-content" id="nav-tabContent">
                    {/* card one */}
                    {categoryData &&
                      Object.entries(categoryData).map((data, idx) => {
                        // console.log(data);
                        if (data[1].length) {
                          return (
                            <div
                              key={idx}
                              className={`tab-pane fade  ${
                                idx === 0 ? "show active" : ""
                              }`}
                              id={idx}
                              role="tabpanel"
                              aria-labelledby="nav-home-tab"
                            >
                              <div className="row">
                                <CatMainCard data={data[1][0]} />
                                <div className="col-xl-6 col-lg-12">
                                  <div className="row">
                                    {data[1].slice(1, 5).map((blog, idx) => {
                                      return (
                                        <CatSmallCard key={idx} data={blog} />
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
            </div>
            {/* Banner */}
            <div className="banner-one mt-20 mb-30">
              {/* <HorizontalAds
                data-ad-format="fluid"
                data-ad-layout-key="-e8+7m+2l-ev+hk"
                data-ad-slot="8757784502"
              /> */}

              {/* <Link href="/policies/advertise">
                <img src="/ad/adGif.gif" alt="ad" loading="lazy" />
              </Link> */}
            </div>
          </div>
          <div className="col-lg-4">
            {/* Flow Socail */}
            <SocialFollow />
            {/* Most Recent Area */}
            <RecentBlogs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default categoryTab;
