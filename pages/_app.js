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
import Script from "next/script";
import MainFooter from "../components/footer/mainFooter";
import { Analytics } from "@vercel/analytics/react";

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
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-292819350-1"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'UA-292819350-1');
        </script>

        {/* {`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-WH4KP2P');
      `} */}
      </Script>
      <MyProvider initialData={trending}>
        <CompleteNavbar />
        <Component {...pageProps} />
        <MainFooter />
      </MyProvider>
      <Analytics />
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
