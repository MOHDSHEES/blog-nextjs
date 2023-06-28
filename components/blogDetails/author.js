import React from "react";

const Author = ({ data }) => {
  // console.log(data);
  return (
    <div className="blog-author">
      <div className="media align-items-center">
        <img src="/images/profile.png" alt="Profile" />
        <div className="media-body">
          <a href="#">
            <h4>
              {data.fname} {data.lname}
            </h4>
          </a>
          {/* <p>
            Second divided from form fish beast made. Every of seas all gathered
            use saying you're, he our dominion twon Second divided from
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Author;
