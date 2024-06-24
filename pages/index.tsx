import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNav from "@/components/common/MobileNav";
import Preloader from "@/components/common/Preloader";
import About from "@/components/mainpage_components/About";
import App from "@/components/mainpage_components/App";
import Banner from "@/components/mainpage_components/Banner";
import BlogComponent from "@/components/mainpage_components/Blog";
import End from "@/components/mainpage_components/End";
import Explore from "@/components/mainpage_components/Explore";
import Features from "@/components/mainpage_components/Features";
import Gallery from "@/components/mainpage_components/Gallery";
import Journey from "@/components/mainpage_components/Journey";
import Popular from "@/components/mainpage_components/Popular";
import Subscribe from "@/components/mainpage_components/Subscribe";
import Tabs from "@/components/mainpage_components/Tabs";
import Tech from "@/components/mainpage_components/Tech";
import Testimonials from "@/components/mainpage_components/Testimonials";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <div className="m-application theme--dark transition-page" id="app">
        <div className="loading" />
        <div className="m-content smart smart-var" id="main-wrap">
          <div id="home">
            <div className="main-wrap">
              <MobileNav/>
              <Header/>
              <main className="container-wrap">
               <Banner/>
               <Features/>
               <Popular/>
               <Tech />
               <Explore/>
               <Gallery/>
               <About/>
               <Testimonials/>
               <Journey/>
               <Tabs/>
               <App/>
               <BlogComponent/>
              </main>
               <Footer/>
               <End/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
