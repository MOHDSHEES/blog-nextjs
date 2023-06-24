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

config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
