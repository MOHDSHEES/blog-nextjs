import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Skeleton from "react-loading-skeleton";
// import Author from "./author";
import useFetch from "../useFetch";
import BlogIndex from "./blogIndex";
import NewIndex from "./newIndex";
import Image from "next/image";
import HorizontalAds from "../ads/horizontalAds";
import ReactDOM from "react-dom";
// import { useRouter } from "next/router";
import { createPortal } from "react-dom";

const Post = ({ data }) => {
  // .match(`/<h1>(.*?)<\/h1>/gi`)
  // .map((match) => match.replace(/<\/?h1>/g, ""))
  // console.log(data);
  const { data: user } = useFetch(`userData/${data.user}`, true);
  // const router = useRouter();
  const [blogContent, setBlogContent] = useState(data.blog);
  // const blogContentHTML = `<div><h2>Heading 1</h2><p>Content for Heading 1</p><h2>Heading 2</h2><p>Content for Heading 2</p></div>`;
  const blogContainerRef = useRef(null);
  // console.log(router.query);
  useEffect(() => {
    if (data) setBlogContent(data.blog);
  }, [data]);
  let flag = 1;
  useEffect(() => {
    // Indexes of the target h2 elements
    const container = blogContainerRef.current;

    const h2Elements = container.querySelectorAll("h2");
    const targetH2Indexes = [0, h2Elements.length - 1];
    // console.log(h2Elements);
    if (h2Elements.length && flag) {
      flag = 0;
      // Create new div elements for each target h2 element
      targetH2Indexes.forEach((index, idx) => {
        if (index !== 0 || idx === 0) {
          const h2Element = h2Elements[index];
          const newDiv = document.createElement("div");

          // Render the MyCustomComponent inside the new div using createPortal
          const customComponent = (
            <HorizontalAds
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-slot="8469191657"
            />
          );
          ReactDOM.render(createPortal(customComponent, newDiv), newDiv);

          // Insert the new div before the target h2 element
          h2Element.insertAdjacentElement("beforebegin", newDiv);
        }
      });
    }
  }, [blogContent]);

  // let ad = 1;
  // const [createdElements, setCreatedElements] = useState([]);
  // useEffect(() => {
  //   const createDivs = () => {
  //     const container = document.querySelector(".blog-details-container");
  //     if (container && data) {
  //       const h2Elements = container.querySelectorAll("h2");
  //       const elementsToCreate = [0, h2Elements.length - 1].map(
  //         (index, idx) => {
  //           if (index !== 0 || idx === 0) {
  //             const h2Element = h2Elements[index];
  //             const newElement = document.createElement("div");
  //             const customComponent = "<h1>asd</h1>";
  //             // <HorizontalAds
  //             //   data-ad-layout="in-article"
  //             //   data-ad-format="fluid"
  //             //   data-ad-slot="8469191657"
  //             // />
  //             ReactDOM.render(customComponent, newElement);
  //             h2Element.insertAdjacentElement("beforebegin", newElement);
  //             return newElement;
  //           }
  //         }
  //       );
  //       setCreatedElements(elementsToCreate);
  //     }
  //   };

  //   if (ad && data) {
  //     ad = 0;
  //     createDivs();
  //   }
  //   const handleRouteChange = () => {
  //     // Remove the dynamically created divs when the route changes
  //     createdElements.forEach((element) => {
  //       ReactDOM.unmountComponentAtNode(element);
  //       element.parentNode.removeChild(element);
  //     });
  //     setCreatedElements([]); // Clear the state of created elements
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [data]);

  // console.log(user);
  return (
    <div className="blog-details-container">
      <div className="single-post">
        <div className="feature-img mb-4">
          <Image
            className="img-fluid"
            src={data.mainImg}
            alt={data.category}
            width={0}
            height={0}
            sizes="(max-width: 768px) height:200px "
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxHeight: "500px",
            }}
          />
          {/* <img
            className="img-fluid blog-detail-img"
            src={data.mainImg}
            alt={data.category}
            loading="lazy"
          /> */}
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
            {/* {data && parse(data.blog)} */}
            <div
              ref={blogContainerRef}
              dangerouslySetInnerHTML={{ __html: blogContent }}
            />
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
