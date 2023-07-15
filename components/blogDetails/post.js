import React from "react";
import parse from "html-react-parser";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Skeleton from "react-loading-skeleton";
// import Author from "./author";
import useFetch from "../useFetch";
import BlogIndex from "./blogIndex";
import NewIndex from "./newIndex";
import Image from "next/image";

const Post = ({ data }) => {
  // .match(`/<h1>(.*?)<\/h1>/gi`)
  // .map((match) => match.replace(/<\/?h1>/g, ""))
  // console.log(data);
  const { data: user } = useFetch(`userData/${data.user}`, true);
  // console.log(user);
  return (
    <div>
      <div className="single-post">
        <div className="feature-img mb-4 ">
          {/* <Image
            className="img-fluid blog-detail-img"
            src={data.mainImg}
            alt={data.category}
            cover
            fill
          /> */}
          <img
            className="img-fluid blog-detail-img"
            src={data.mainImg}
            alt={data.category}
            loading="lazy"
          />
        </div>
        <NewIndex blog={data} />
        <div className="blog_details">
          {/* <h1 id={data.title}>{data.title}</h1> */}
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
          <div id="blog-1" className="new-editor-post">
            {data && parse(data.blog)}
          </div>
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

export default Post;
