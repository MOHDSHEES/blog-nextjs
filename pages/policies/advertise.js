import React, { useContext } from "react";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";
import AdvertiseComponent from "../../components/policies/advertise";

const Advertise = () => {
  const { trending } = useContext(MyContext);
  return (
    <section className="blog_area single-post-area section-padding">
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
                {trending &&
                  trending.length !== 0 &&
                  trending.slice(0, 3).map((blog, idx) => {
                    return <Card2 data={blog} key={idx} />;
                  })}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
