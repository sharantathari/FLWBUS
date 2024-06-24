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
                                <div className="list-style">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-sm-5 py-0 px-0 pa-md-6">
                                            <div className="carousel">
                                                <div className="detail-carousel" id="detail_carousel">
                                                    <div className="image" data-index={0}>
                                                        <a
                                                            className="waves-effect"
                                                            href="https://img.freepik.com/premium-vector/men-with-glasses-reality-augmented-smartphone_24877-62432.jpg"
                                                        >
                                                            <div className="figure">
                                                                <img
                                                                    src="https://img.freepik.com/premium-vector/men-with-glasses-reality-augmented-smartphone_24877-62432.jpg"
                                                                    alt="thumb"
                                                                />
                                                                <div
                                                                    className="img image-detail"
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url(https://img.freepik.com/premium-vector/men-with-glasses-reality-augmented-smartphone_24877-62432.jpg)"
                                                                    }}
                                                                />
                                                                <i className="material-icons zoom-icon">zoom_in</i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="image" data-index={1}>
                                                        <a
                                                            className="waves-effect"
                                                            href="https://img.freepik.com/free-vector/augmented-reality-concept_52683-52552.jpg"
                                                        >
                                                            <div className="figure">
                                                                <img
                                                                    src="https://img.freepik.com/free-vector/augmented-reality-concept_52683-52552.jpg"
                                                                    alt="thumb"
                                                                />
                                                                <div
                                                                    className="img image-detail"
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url(https://img.freepik.com/free-vector/augmented-reality-concept_52683-52552.jpg)"
                                                                    }}
                                                                />
                                                                <i className="material-icons zoom-icon">zoom_in</i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="image" data-index={2}>
                                                        <a
                                                            className="waves-effect"
                                                            href="https://img.freepik.com/free-vector/virtual-reality-friends-cartoons_18591-52208.jpg"
                                                        >
                                                            <div className="figure">
                                                                <img
                                                                    src="https://img.freepik.com/free-vector/virtual-reality-friends-cartoons_18591-52208.jpg"
                                                                    alt="thumb"
                                                                />
                                                                <div
                                                                    className="img image-detail"
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url(https://img.freepik.com/free-vector/virtual-reality-friends-cartoons_18591-52208.jpg)"
                                                                    }}
                                                                />
                                                                <i className="material-icons zoom-icon">zoom_in</i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-7 pa-13 px-md-10">
                                            <div className="text">
                                                <h4 className="use-text-title2">
                                                    <span className="use-text-subtitle2" /> Augmented Reality
                                                </h4>
                                                <article className="desc">
                                                    <h6 className="use-text-paragraph">
                                                        Augmented Reality (AR) has seamlessly merged the physical and
                                                        digital worlds, offering innovative ways to interact with
                                                        information. It finds applications in various sectors, from
                                                        enhancing consumer experiences to transforming healthcare and
                                                        industry processes.
                                                    </h6>
                                                    <h6 className="use-text-p">
                                                        {" "}
                                                        In agriculture, AR empowers farmers with real-time data overlays on
                                                        soil conditions, weather, and crop health through AR devices. This
                                                        data-driven experience enables instant decision-making, optimizing
                                                        crop yield and resource use. AR, like IoT in data collection,
                                                        enhances efficiency across industries, making it a game-changer for
                                                        agriculture and beyond.
                                                    </h6>
                                                    <div className="btn-area">
                                                        <a className="btn-flat text-btn">
                                                            <i className="ion-android-share-alt" />
                                                            Share
                                                        </a>
                                                        <a className="btn-flat text-btn">
                                                            <i className="ion-film-marker" />
                                                            Video
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-general">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-md-13 py-6 px-sm-0 px-md-6">
                                            <h4 className="use-text-subtitle mb-3">Related Projects</h4>
                                            <div className="row scroll-tablet mb-0">
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={0}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">
                                                            &nbsp;
                                                        </a>
                                                        <div className="figure">
                                                            <div
                                                                className="responsive-img"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(https://circuitdigest.com/sites/default/files/projectimage_mic/Smart-Wi-Fi-Video-Doorbell-using-ESP32-and-Camera_0.jpg)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h3 className="title pb-2 text-truncate">Smart Doorbell</h3>
                                                                <p className="use-text-paragraph">
                                                                    Explore IoT with our step-by-step ESP32 LED webserver
                                                                    tutorial, offering insights into web creation, LED control,
                                                                    and wireless communication. Perfect for all skill levels.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://circuitdigest.com/microcontroller-projects/diy-smart-wifi-video-doorbell-using-esp32-and-camera"
                                                                >
                                                                    see detail
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={1}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">
                                                            &nbsp;
                                                        </a>
                                                        <div className="figure">
                                                            <div
                                                                className="responsive-img"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(https://www.electronicsforu.com/wp-contents/uploads/2018/01/circuit-1.jpg)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Message Lamps</h6>
                                                                <p className="use-text-paragraph">
                                                                    ESP8266 lamps convey emotions globally through touch,
                                                                    mirroring WhatsApps Blue Tick feature for modern emotional
                                                                    connectivity.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://www.electronicsforu.com/electronics-projects/prototypes/connected-lamps-esp8266-iot-projects"
                                                                >
                                                                    see detail
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={2}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">
                                                            &nbsp;
                                                        </a>
                                                        <div className="figure">
                                                            <div
                                                                className="responsive-img"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(https://circuitdigest.com/sites/default/files/projectimage_mic/ESP32-LED-Webserver.jpg)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">LED Webserver</h6>
                                                                <p className="use-text-paragraph">
                                                                    ESP32 IoT tutorial: Craft DIY LED webserver, explore web
                                                                    creation, LED control, wireless comms. Ideal for learners and
                                                                    experts.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://circuitdigest.com/microcontroller-projects/building-diy-led-webserver-with-esp32"
                                                                >
                                                                    see detail
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">
                                                            &nbsp;
                                                        </a>
                                                        <div className="figure">
                                                            <div
                                                                className="responsive-img"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(https://circuitdigest.com/sites/default/files/projectimage_mic/Automatic-Pet-Feeder.jpg)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Pet Feeder</h6>
                                                                <p className="use-text-paragraph">
                                                                    Tech Pet Feeder: Schedule, control, monitor remotely with
                                                                    Blynk. Timer ensures timely meals. Care for pets, peace for
                                                                    owners.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://circuitdigest.com/microcontroller-projects/blynk-controlled-automatic-pet-feeder-with-timer"
                                                                >
                                                                    see detail
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <Footer />
                            {/* </div> */}
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}