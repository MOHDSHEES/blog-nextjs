import React from "react";

const TagClouds = ({ keywords }) => {
  return (
    <aside
      className="single_sidebar_widget tag_cloud_widget"
      style={{ marginBottom: "15px" }}
    >
      <h4 className="widget_title">Keywords</h4>
      <ul className="list" style={{ paddingLeft: 0 }}>
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
      </ul>
    </aside>
  );
};

export default TagClouds;
