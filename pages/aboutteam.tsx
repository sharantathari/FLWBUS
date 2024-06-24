import Counter from "@/components/aboutTeam/Counter";
import Photo from "@/components/aboutTeam/Photo";
import Team from "@/components/aboutTeam/Team";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNav from "@/components/common/MobileNav";
import Preloader from "@/components/common/Preloader";
import End from "@/components/mainpage_components/End";

export default function AboutTeam() {
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
                                <div className="hero-banner-wrap">
                                    <div className="bg-deco" />
                                    <div className="container small-deco">
                                        <div />
                                    </div>
                                    <div className="container">
                                        <div className="banner-basic">
                                            <div className="banner-wrap">
                                                <div className="inner">
                                                    <div className="row d-flex justify-content-center align-items-center">
                                                        <div className="col-md-6 px-sm-5 px-0 py-4">
                                                            <div className="text">
                                                                <div className="title title-left">
                                                                    <h4 className="use-text-title2">
                                                                        Pellentesque habitant morbi tristique senectus{" "}
                                                                    </h4>
                                                                </div>
                                                                <h5 className="use-text-subtitle2">
                                                                    Multiple lines of text that form the lede, informing new
                                                                    readers quickly and efficiently about whats most interesting
                                                                    in this posts contents
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 px-sm-5 py-4">
                                                            <div className="img">
                                                                <img
                                                                    className="img-2d3d"
                                                                    src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/team_3D@2x.png"
                                                                    data-2d="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/team_2D@2x.png"
                                                                    data-3d="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/team_3D@2x.png"
                                                                    alt="services 3d"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Counter />
                                <Team />
                                <Photo />
                                <section className="bottom-deco-wrap space-top space-bottom-short">
                                    <div className="footer-top-deco">
                                        <div
                                            className="wow zoomInShort"
                                            data-wow-offset={0}
                                            data-wow-delay="0.2s"
                                            data-wow-duration="0.3s"
                                        >
                                            <img
                                                className="img-2d3d"
                                                src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/footer_3d@2x.png"
                                                data-2d="https://cdn.global.noobsverse.com/cc.flowbus/assets"
                                                data-3d="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/footer_3d@2x.png"
                                                alt="footer"
                                            />
                                        </div>
                                    </div>
                                    <div className="call-to-action">
                                        <div className="container fixed-width-md-up">
                                            <div className="root">
                                                <div className="card paper">
                                                    <div className="row align-items-center mb-0">
                                                        <div className="col-md-8 pa-0">
                                                            <h4 className="use-text-title2 pb-2 use-text-primary">
                                                                Ready to get started ?
                                                            </h4>
                                                            <p className="use-text-subtitle2">
                                                                Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4 pa-0">
                                                            <div className="d-flex align-items-center justify-content-end">
                                                                <a
                                                                    className="waves-effect btn button primary"
                                                                    href="contact.html"
                                                                >
                                                                    contact us
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <Footer />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}