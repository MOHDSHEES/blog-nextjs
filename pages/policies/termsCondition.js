import Head from "next/head";
import React, { useContext } from "react";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";
import TermsConditionComponent from "../../components/policies/termsCondition";

const TermsCondition = () => {
  const { trending } = useContext(MyContext);
  return (
    <section className="blog_area single-post-area section-padding">
      <Head>
        <title>Terms and Conditions</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/domyp6djh/image/upload/v1697286123/common/offtheweb_kenlou.jpg"
        />
        <meta
          name="description"
          content="Read our concise terms and conditions for a clear understanding of your rights and obligations when using OffTheWeb. Your agreement to these terms is appreciated. Visit our terms and conditions page for details."
          data-rh="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Read our concise terms and conditions for a clear understanding of your rights and obligations when using OffTheWeb. Your agreement to these terms is appreciated. Visit our terms and conditions page for details."
        />
        <meta property="og:title" content="OFFTHEWEB" />
        <meta
          name="keywords"
          content="OFFTHEWEB,OFF THE WEB, THE WEB, OFF WEB, technology trends,trending,terms and condition offtheweb,terms and condition"
        />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <TermsConditionComponent />
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              {/* <TagClouds keywords={data && data.keywords} /> */}

              <aside className="single_sidebar_widget popular_post_widget">
                <h3 className="widget_title">Recent Post</h3>
                <div className="trending-sidebar scrollbar-over">
                  {trending &&
                    trending.length !== 0 &&
                    trending.slice(0, 4).map((blog, idx) => {
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

export default TermsCondition;
