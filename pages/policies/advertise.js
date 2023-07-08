import Head from "next/head";
import React, { useContext } from "react";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";
import AdvertiseComponent from "../../components/policies/advertise";

const Advertise = () => {
  const { trending } = useContext(MyContext);
  return (
    <section className="blog_area single-post-area section-padding">
      <Head>
        <title>Advertise</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/domyp6djh/image/upload/v1688851669/common/ezgif.com-gif-maker_xrbea2.webp"
        />
        <meta
          name="description"
          content="Advertise with OffTheWeb - Reach your target audience effectively through our tailored advertising solutions. Explore our advertise page now and boost your brand's visibility and engagement with OffTheWeb's engaged readership."
          data-rh="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Advertise with OffTheWeb - Reach your target audience effectively through our tailored advertising solutions. Explore our advertise page now and boost your brand's visibility and engagement with OffTheWeb's engaged readership. "
        />
        <meta property="og:title" content="OFFTHEWEB" />
        <meta
          name="keywords"
          content="OFFTHEWEB,OFF THE WEB, THE WEB, OFF WEB, technology trends,trending,advertise offtheweb,advertise,ad"
        />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <AdvertiseComponent />
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              {/* <TagClouds keywords={data && data.keywords} /> */}

              <aside className="single_sidebar_widget popular_post_widget">
                <h3 className="widget_title">Recent Post</h3>
                <div className="trending-sidebar scrollbar-over">
                  {trending &&
                    trending.length !== 0 &&
                    trending.slice(0, 3).map((blog, idx) => {
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

export default Advertise;
