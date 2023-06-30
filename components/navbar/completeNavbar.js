import React from "react";
import MainNavbar from "./mainNavbar";
import MidBar from "./midBar";
import Navbar from "./navbar";
import TopBar from "./topBar";

const CompleteNavbar = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          <TopBar />
          <MidBar />
          {/* <Navbar /> */}
          <MainNavbar />
        </div>
      </div>
    </header>
  );
};

export default CompleteNavbar;
