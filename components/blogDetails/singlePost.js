import React from "react";
import parse from "html-react-parser";
import { TwitterTweetEmbed } from "react-twitter-embed";
import resizeImg from "../functions/resizeImg";
import Skeleton from "react-loading-skeleton";

const SinglePost = ({ data }) => {
  return (
    <div>
      <div className="single-post">
        <div className="feature-img mb-4 ">
          <img
            className="img-fluid blog-detail-img"
            src={data.mainImg}
            alt={data.category}
          />
        </div>
        <div className="blog_details">
          <h1>{data.title}</h1>
          <ul className="blog-info-link mt-2 mb-4">
            <li>
              <a href="#">
                <i className="fa fa-user"> {data.category}</i>
              </a>
              {/* <i className="fa fa-user"></i> */}
            </li>
            <i className="fa fa-user">
              <li>
                <a href="#">
                  <i className="fa fa-comments"> Views: {data.views}</i>
                </a>
                {/* <i className="fa fa-comments"></i> */}
              </li>
              {/* <i className="fa fa-comments"></i> */}
            </i>
          </ul>
          {data &&
            data.blog &&
            data.blog.map((bl, key) => {
              return (
                <div key={key}>
                  {bl.tag === "P" ? (
                    bl.text.split("\n").map((str) => (
                      <p
                        className="excert"
                        style={{
                          textAlign: "justify",
                        }}
                      >
                        {parse(str)}
                      </p>
                    ))
                  ) : bl.tag === "H" ? (
                    <h4
                      id={bl.text}
                      style={{ whiteSpace: "break-spaces" }}
                      class="mb-3"
                    >
                      {parse(bl.text)}
                    </h4>
                  ) : bl.tag === "IT" ? (
                    <div className="it-singlePost">
                      {" "}
                      <img
                        src={resizeImg(bl.img, 6, "h_200,c_scale")}
                        // src={bl.img}
                        alt={bl.img}
                      />
                      {bl.text.split("\n").map((str, key) => (
                        <p
                          key={key}
                          style={{
                            // whiteSpace: "break-spaces",
                            textAlign: "justify",
                          }}
                        >
                          {parse(str)}
                        </p>
                      ))}
                      {/* <p>{bl.text}</p> */}
                    </div>
                  ) : bl.tag === "TI" ? (
                    <div className=" ti-singlePost">
                      <img
                        src={resizeImg(bl.img, 6, "h_200,c_scale")}
                        // src={bl.img}
                        alt={bl.img}
                      />
                      {bl.text.split("\n").map((str) => (
                        <p
                          style={{
                            // whiteSpace: "break-spaces",
                            textAlign: "justify",
                          }}
                        >
                          {parse(str)}
                        </p>
                      ))}
                    </div>
                  ) : (
                    bl.tag === "TW" && (
                      <div class="mb-3 scrollbarT">
                        <TwitterTweetEmbed
                          placeholder={
                            <Skeleton
                              baseColor="#cdcbcb"
                              highlightColor="#e6e5e5"
                              // width={window.screen.width < 775 ? 280 : 490}
                              height={200}
                              width={300}
                              duration={2}
                            />
                          }
                          tweetId={bl.text}
                        />
                      </div>
                    )
                  )}
                </div>
              );
            })}
          {/* <p className="excert">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p> */}
          {/* <p>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training. who has the willpower to
            actually
          </p> */}
          {/* <div className="quote-wrapper">
            <div className="quotes">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower to
              actually sit through a self-imposed MCSE training.
            </div>
          </div> */}
        </div>
        <i className="fa fa-user">
          <i className="fa fa-comments"></i>
        </i>
      </div>
      <i className="fa fa-user">
        <i className="fa fa-comments"></i>
      </i>
    </div>
  );
};

export default SinglePost;
