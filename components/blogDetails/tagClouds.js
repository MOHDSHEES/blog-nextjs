import React from "react";

const TagClouds = ({ keywords }) => {
  return (
    <aside className="single_sidebar_widget tag_cloud_widget">
      <h4 className="widget_title">Keywords</h4>
      <ul className="list">
        {keywords &&
          keywords
            .split(",")
            .slice(0, 10)
            .map((keyword) => {
              return (
                <li key={keyword}>
                  <a href="#">{keyword}</a>
                </li>
              );
            })}
        {/* <li>
          <a href="#">project</a>
        </li>
        <li>
          <a href="#">love</a>
        </li>
        <li>
          <a href="#">technology</a>
        </li>
        <li>
          <a href="#">travel</a>
        </li>
        <li>
          <a href="#">restaurant</a>
        </li>
        <li>
          <a href="#">life style</a>
        </li>
        <li>
          <a href="#">design</a>
        </li>
        <li>
          <a href="#">illustration</a>
        </li> */}
      </ul>
    </aside>
  );
};

export default TagClouds;
