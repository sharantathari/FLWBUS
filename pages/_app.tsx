import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Preloader from "@/components/common/Preloader";
import { loadSiteJS } from "@/lib/frontend_functions";
// import "@/styles/styles.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/normalize.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/bootstrap.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/magnific-popup.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/materialize.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/hamburger-menu.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/animate.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/animate-extends.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/slick-carousel/slick.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/vendors/slick-carousel/slick.css";
// import "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      loadSiteJS();
    }, 1800);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Component {...pageProps} />
    </>
  );
}
