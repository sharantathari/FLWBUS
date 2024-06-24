import Header from "@/components/common/Header";
import Preloader from "@/components/common/Preloader";
import MobileNav from "@/components/common/MobileNav";
import Banner from "@/components/about_components/Banner";
import Mission from "@/components/about_components/Mission";
import Vision from "@/components/about_components/Vision";
import Call from "@/components/about_components/CallAction";
import Footer from "@/components/common/Footer";
export default function about() {
  return (
    <>
      {/* <Preloader /> */}
      <div className="m-application theme--dark transition-page" id="app">
        <div className="loading" />
        <div className="m-content smart smart-var" id="main-wrap">
          <div id="about-page">
            <div className="main-wrap">
              <MobileNav />
              <Header />
              <div className="container-front">
                <Banner />
                <Mission />
                <Vision />
              </div>
              <Call/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
