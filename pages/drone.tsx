import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer"
import MobileNav from "@/components/common/MobileNav";
import Detail from "@/components/ai_components/Detail";
import Related from "@/components/ai_components/RelatedItems";
import Preloader from "@/components/common/Preloader";
export default function contact() {
    return (
        <>
            {/* <Preloader /> */}
            <div className="m-application theme--light transition-page" id="app">
                <div className="loading"></div>
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="detail-product-page">
                        <div className="main-wrap">
                            <MobileNav />
                            <Header />
                            <div className="container-general">
                                <Detail />
                            </div>
                            {/* <div className="slider-wrap"> */}
                                <Related />
                                <Footer />
                            {/* </div> */}
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}