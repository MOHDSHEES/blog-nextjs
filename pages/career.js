import React, { useContext } from "react";
import CareerComponent from "../components/policies/career";
import { MyContext } from "../components/context";
import Card2 from "../components/homepage/card2";
import Head from "next/head";
import HorizontalAds from "../components/ads/horizontalAds";

const Career = () => {
  const { trending } = useContext(MyContext);
  return (
    <section className="blog_area single-post-area section-padding">
      <Head>
        <title>Carrer</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/domyp6djh/image/upload/v1688851669/common/ezgif.com-gif-maker_xrbea2.webp"
        />
        <meta
          name="description"
          content="Unlock your potential with OffTheWeb - your go-to destination for career insights and guidance. Explore our career page to discover expert advice, practical tips, and valuable resources that will empower you to thrive in your professional journey. From job search strategies to interview tips, career development to personal branding, OffTheWeb provides the knowledge and inspiration you need to make impactful career choices. Visit us now and take the next step towards a fulfilling and successful career."
          data-rh="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Unlock your potential with OffTheWeb - your go-to destination for career insights and guidance. Explore our career page to discover expert advice, practical tips, and valuable resources that will empower you to thrive in your professional journey. From job search strategies to interview tips, career development to personal branding, OffTheWeb provides the knowledge and inspiration you need to make impactful career choices. Visit us now and take the next step towards a fulfilling and successful career."
        />
        <meta property="og:title" content="OFFTHEWEB" />
        <meta
          name="keywords"
          content="OFFTHEWEB,OFF THE WEB, THE WEB, OFF WEB, technology trends,trending,career offtheweb,career.jobs,offtheweb jobs"
        />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <CareerComponent />
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              {/* <TagClouds keywords={data && data.keywords} /> */}

              <aside className="single_sidebar_widget popular_post_widget">
                <h3 className="widget_title">Recent Post</h3>
                <div className="trending-sidebar scrollbar-over">
                  {trending &&
                    trending.length !== 0 &&
                    trending.map((blog, idx) => {
                      if (idx === 1) {
                        return (
                          <div style={{ textAlign: "center" }}>
                            <HorizontalAds
                              data-ad-format="fluid"
                              data-ad-layout-key="-7q+f1-x-5f+d4"
                              data-ad-slot="2644107188"
                            />
                          </div>
                        );
                      }
                      return <Card2 data={blog} key={idx} />;
                    })}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
