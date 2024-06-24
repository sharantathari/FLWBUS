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
            <Preloader />
            <div className="m-application theme--dark transition-page" id="app">
                <div className="loading" />
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="about-page">
                        <div className="main-wrap">
                            <MobileNav />
                            <Header />
                            <div className="container-general">
                                <div className="form-style">
                                    <div className="page-wrap">
                                        <div className="inner-wrap">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-md-6 pe-md-0 wrap-deco">
                                                    <div className="card form-box">
                                                        <div className="form">
                                                            <div className="title-main align-center">
                                                                <h4 className="primary">
                                                                    <span>Say Hello to Us</span>
                                                                </h4>
                                                                <p className="desc use-text-subtitle2" />
                                                            </div>
                                                            <p className="use-text-subtitle2 text-center">
                                                                Vestibulum faucibus eget erat eget pretium. Donec commodo
                                                                convallis eget suscipit orci. Lorem ipsum dolor sit amet,
                                                                consectetur adipiscing elit.
                                                            </p>
                                                            <form id="contact_form">
                                                                <div className="row mx-0 spacing6">
                                                                    <div className="col-sm-12">
                                                                        <div className="input-field dark primary filled">
                                                                            <input
                                                                                className="validate"
                                                                                id="name"
                                                                                type="text"
                                                                                required
                                                                            />
                                                                            <label htmlFor="name">What is your name? *</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="input-field dark primary filled">
                                                                            <input
                                                                                className="validate"
                                                                                id="email"
                                                                                type="email"
                                                                                required
                                                                            />
                                                                            <label htmlFor="email">What is your email? *</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="input-field dark primary filled">
                                                                            <input id="phone" type="tel" />
                                                                            <label htmlFor="phone">
                                                                                What is your phone number?
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="input-field dark primary filled">
                                                                            <input id="company" type="text" />
                                                                            <label htmlFor="company">What is your company?</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="input-field dark primary filled">
                                                                            <textarea
                                                                                className="materialize-textarea"
                                                                                id="message"
                                                                                rows={6}
                                                                                defaultValue={""}
                                                                            />
                                                                            <label htmlFor="message">Write your message here</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="px-2">
                                                                    <div className="form-control-label">
                                                                        <label>
                                                                            <input
                                                                                className="filled-in secondary"
                                                                                type="checkbox"
                                                                                required
                                                                            />
                                                                            <span>
                                                                                I have read and accept the Terms of <br />
                                                                                <a className="link" href="#">
                                                                                    Service &amp; Privacy Policy *
                                                                                </a>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="btn-area">
                                                                        <button
                                                                            className="btn block primary btn-large waves-effect"
                                                                            type="submit"
                                                                        >
                                                                            Send Message
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ps-md-0">
                                                    <div className="card map">
                                                        <div id="map" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
