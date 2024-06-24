import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer"
import MobileNav from "@/components/common/MobileNav";
import Preloader from "@/components/common/Preloader";
import Banner from "@/components/blog_components/Banner";
import Brief from "@/components/blog_components/Brief";
export default function contact() {
    return (
        <>
            {/* <Preloader /> */}
            <div className="m-application theme--dark transition-page" id="app">
                <div className="loading" />
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="blog-page">
                        <div className="main-wrap">
                            <MobileNav />
                            <Header />
                            <div className="container-general">
                                <div className="container mt-12 mt-sm-0">
                                    <div className="row">
                                        <Banner/>
                                       <Brief/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>

        </>
    )
}