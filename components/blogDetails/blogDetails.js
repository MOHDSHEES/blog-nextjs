import React from "react";
import Card2 from "../card2";
import Card3 from "../card3";
import Card4 from "../card4";
import RecentBlogs from "../middle/recentBlogs";
import Author from "./author";
import InstaFeeds from "./instaFeeds";
import LeaveReply from "./leaveReply";
import Newsletter from "./newsletter";
import SearchKeyword from "./searchKeyword";
import SinglePost from "./singlePost";
import TagClouds from "./tagClouds";

const BlogDetails = () => {
  return (
    <section className="blog_area single-post-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            {/* <SinglePost /> */}
            <div className="single-post">
              <div className="feature-img">
                <img
                  className="img-fluid blog-detail-img"
                  src="assets/img/blog/single_blog_1.png"
                  alt=""
                />
              </div>
              <div className="blog_details">
                <h2>
                  Second divided from form fish beast made every of seas all
                  gathered us saying he our
                </h2>
                <ul className="blog-info-link mt-3 mb-4">
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>

                <p className="excert">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>
                <div className="quote-wrapper">
                  <div className="quotes">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training.
                  </div>
                </div>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>
              </div>
            </div>

            {/* about author  */}
            <Author />
            <LeaveReply />
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              <SearchKeyword />

              <aside className="single_sidebar_widget post_category_widget">
                <h4 className="widget_title">Category</h4>
                <ul className="list cat-list">
                  <li>
                    <a href="#" className="d-flex">
                      <p>Resaurant food</p>
                      <p>(37)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Travel news</p>
                      <p>(10)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Modern technology</p>
                      <p>(03)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Product</p>
                      <p>(11)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Inspiration</p>
                      <p>(21)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Health Care</p>
                      <p>(21)</p>
                    </a>
                  </li>
                </ul>
              </aside>

              {/* <RecentBlogs /> */}
              <aside className="single_sidebar_widget popular_post_widget">
                <h3 className="widget_title">Recent Post</h3>
                <Card2 />

                {/* <div className="media post_item">
                  <img src="assets/img/post/post_1.png" alt="post" />
                  <div className="media-body">
                    <a href="single-blog.html">
                      <h3>From life was you fish...</h3>
                    </a>
                    <p>January 12, 2019</p>
                  </div>
                </div> */}
                <div className="media post_item">
                  <img src="assets/img/post/post_2.png" alt="post" />
                  <div className="media-body">
                    <a href="single-blog.html">
                      <h3>The Amazing Hubble</h3>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div className="media post_item">
                  <img src="assets/img/post/post_3.png" alt="post" />
                  <div className="media-body">
                    <a href="single-blog.html">
                      <h3>Astronomy Or Astrology</h3>
                    </a>
                    <p>03 Hours ago</p>
                  </div>
                </div>
                <div className="media post_item">
                  <img src="assets/img/post/post_4.png" alt="post" />
                  <div className="media-body">
                    <a href="single-blog.html">
                      <h3>Asteroids telescope</h3>
                    </a>
                    <p>01 Hours ago</p>
                  </div>
                </div>
              </aside>

              <TagClouds />
              <InstaFeeds />
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
