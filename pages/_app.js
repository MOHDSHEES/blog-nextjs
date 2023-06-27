import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
// import "../styles/flaticon.css";
// import "../styles/slicknav.css";
import "../styles/animate.min.css";
import "../styles/magnific-popup.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// import "../styles/themify-icons.css";
import "../styles/slick.css";
import "../styles/nice-select.css";
import "../styles/style.css";
import "../styles/custom.css";
import { MyProvider } from "../components/context";
import CompleteNavbar from "../components/navbar/completeNavbar";
import { Router } from "next/dist/client/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "react-loading-skeleton/dist/skeleton.css";

NProgress.configure({ showSpinner: false });

config.autoAddCss = false;
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

// connectDB();
export default function App({ Component, pageProps, trending }) {
  // const router = useRouter();
  // useEffect(() => {
  //   console.log("in");

  // }, [router]);
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  return (
    <>
      <MyProvider initialData={trending}>
        <CompleteNavbar />
        <Component {...pageProps} />
      </MyProvider>
    </>
  );
}
// App.getInitialProps = async (appContext) => {
//   const resu = await blogModel
//     .find({ status: "Active" })
//     .sort({ views: -1 })
//     .limit(6)
//     .lean();
//   // const navbarData = await response.json();
//   const trending = resu.map((obj) => ({ ...obj, _id: obj._id.toString() }));

//   let pageProps = {};

//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   }

//   return { pageProps, trending };
// };
