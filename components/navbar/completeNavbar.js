import React from "react";
import MainNavbar from "./mainNavbar";
import MidBar from "./midBar";
import TopBar from "./topBar";

const CompleteNavbar = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          <TopBar />
          <MidBar />
          <MainNavbar />
        </div>
      </div>
    </header>
  );
};

export default CompleteNavbar;
