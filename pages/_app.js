import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
// import "../styles/flaticon.css";
import "../styles/slicknav.css";
import "../styles/animate.min.css";
import "../styles/magnific-popup.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// import "../styles/themify-icons.css";
import "../styles/slick.css";
import "../styles/nice-select.css";
import "../styles/style.css";
import "../styles/custom.css";
import dbConnect from "../lib/mongoose";
import blogModel from "../models/blogModel";
import { MyProvider } from "../components/context";
import TopBar from "../components/navbar/topBar";
import MidBar from "../components/navbar/midBar";
import MainNavbar from "../components/navbar/mainNavbar";
import CompleteNavbar from "../components/navbar/completeNavbar";

config.autoAddCss = false;
export default function App({ Component, pageProps, trending }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <MyProvider initialData={trending}>
        <CompleteNavbar />
        <Component {...pageProps} />
      </MyProvider>
    </>
  );
}
App.getInitialProps = async (appContext) => {
  await dbConnect();
  // Fetch the data for the Navbar from an API or any data source
  const resu = await blogModel
    .find({ status: "Active" })
    .sort({ views: -1 })
    .limit(6)
    .lean();
  // const navbarData = await response.json();
  const trending = resu.map((obj) => ({ ...obj, _id: obj._id.toString() }));

  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { pageProps, trending };
};
