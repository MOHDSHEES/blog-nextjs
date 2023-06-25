import Head from "next/head";
import React, { useContext } from "react";
import SinglePost from "../../components/blogDetails/singlePost";
import TagClouds from "../../components/blogDetails/tagClouds";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";

const Title = () => {
  const { trending } = useContext(MyContext);
  //   console.log(trending);
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog page" data-rh="true" />
      </Head>
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <SinglePost />
            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <TagClouds />
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  {trending &&
                    trending.length &&
                    trending.map((blog, idx) => {
                      return <Card2 data={blog} key={idx} />;
                    })}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
