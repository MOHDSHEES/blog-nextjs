import React from "react";
import parse from "html-react-parser";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Skeleton from "react-loading-skeleton";
// import Author from "./author";
import useFetch from "../useFetch";
import BlogIndex from "./blogIndex";

const SinglePost = ({ data }) => {
  // console.log(data);
  const { data: user } = useFetch(`userData/${data.user}`, true);
  // console.log(user);
  return (
    <div>
      <div className="single-post">
        <div className="feature-img mb-4 ">
          <img
            className="img-fluid blog-detail-img"
            src={data.mainImg}
            alt={data.category}
            loading="lazy"
          />
        </div>
        <BlogIndex blog={data} />
        <div className="blog_details">
          <h1 id={data.title}>{data.title}</h1>
          <ul className="blog-info-link mt-2 mb-4" style={{ paddingLeft: 0 }}>
            <li>
              {user && (
                <a href="#">
                  Author ~ {user.fname && user.fname} {user.lname && user.lname}
                </a>
              )}
              {/* <i className="fa fa-user"></i> */}
            </li>
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
                      <img
                        loading="lazy"
                        src={bl.img}
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
                        loading="lazy"
                        src={bl.img}
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
                              height={350}
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
        </div>
        {/* <i className="fa fa-user">
          <i className="fa fa-comments"></i>
        </i> */}
      </div>

      {/* {user && <Author data={user} />} */}
      {/* <i className="fa fa-user">
        <i className="fa fa-comments"></i>
      </i> */}
    </div>
  );
};

export default SinglePost;
