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
                                <>
                                    <div className="list-style">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-4 col-sm-5 py-0 px-0 pa-md-6">
                                                <div className="carousel">
                                                    <div className="detail-carousel" id="detail_carousel">
                                                        <div className="image" data-index={0}>
                                                            <a
                                                                className="waves-effect"
                                                                href="https://img.freepik.com/premium-photo/iot-smart-farmer-concept-modern-agricultural-technology-concept-digital-farm-smart-farming-innovation_615349-1204.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais"
                                                            >
                                                                <div className="figure">
                                                                    <img
                                                                        src="https://img.freepik.com/premium-photo/iot-smart-farmer-concept-modern-agricultural-technology-concept-digital-farm-smart-farming-innovation_615349-1204.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais"
                                                                        alt="thumb"
                                                                    />
                                                                    <div
                                                                        className="img image-detail"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(https://img.freepik.com/premium-photo/iot-smart-farmer-concept-modern-agricultural-technology-concept-digital-farm-smart-farming-innovation_615349-1204.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais)"
                                                                        }}
                                                                    ></div>
                                                                    <i className="material-icons zoom-icon">zoom_in</i>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="image" data-index={1}>
                                                            <a
                                                                className="waves-effect"
                                                                href="https://img.freepik.com/free-vector/internet-things-concept-poster_1284-5515.jpg"
                                                            >
                                                                <div className="figure">
                                                                    <img
                                                                        src="https://img.freepik.com/free-vector/internet-things-concept-poster_1284-5515.jpg"
                                                                        alt="thumb"
                                                                    />
                                                                    <div
                                                                        className="img image-detail"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(https://img.freepik.com/free-vector/internet-things-concept-poster_1284-5515.jpg)"
                                                                        }}
                                                                    ></div>
                                                                    <i className="material-icons zoom-icon">zoom_in</i>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="image" data-index={2}>
                                                            <a
                                                                className="waves-effect"
                                                                href="https://img.freepik.com/free-vector/internet-things-background-with-hexagons_23-2147633063.jpg"
                                                            >
                                                                <div className="figure">
                                                                    <img
                                                                        src="https://img.freepik.com/free-vector/internet-things-background-with-hexagons_23-2147633063.jpg"
                                                                        alt="thumb"
                                                                    />
                                                                    <div
                                                                        className="img image-detail"
                                                                        style={{
                                                                            backgroundImage:
                                                                                "url(https://img.freepik.com/free-vector/internet-things-background-with-hexagons_23-2147633063.jpg)"
                                                                        }}
                                                                    ></div>
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
                                                        <span className="use-text-subtitle2" /> Internet of Things
                                                    </h4>
                                                    <article className="desc">
                                                        <h6 className="use-text-paragraph">
                                                            The Internet of Things (IoT) has transformed our interaction with
                                                            the world around us. Through a blend of physical and digital
                                                            interfaces, its reshaped industries ranging from smart homes to
                                                            healthcare, creating a new era of connectivity.
                                                        </h6>
                                                        <h6 className="use-text-p">
                                                            Equipped with advanced sensors and robust connectivity, IoT
                                                            devices offer invaluable real-time data insights. In agriculture,
                                                            these insights empower farmers, enabling monitoring of soil,
                                                            weather, and crops, thereby optimizing both yield and resource
                                                            use.
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
                                    {/* ##### END DETAIL #####*/}
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
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate">Smart Doorbell</h6>
                                                                    <p className="use-text-paragraph">
                                                                        Experience top-tier security with our Smart Wi-Fi Video
                                                                        Doorbell, blending ESP32s power with real-time visuals and
                                                                        interactive features. More than surveillance, its a
                                                                        holistic approach to home safety.
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
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate">Message Lamps</h6>
                                                                    <p className="use-text-paragraph">
                                                                        Connect emotionally through our WiFi-enabled lamps, where a
                                                                        touch conveys feelings globally. Powered by ESP8266, its a
                                                                        tangible message notifier, lighting up with sentiment
                                                                        intensity and ensuring acknowledged reception.
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
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate">LED Webserver</h6>
                                                                    <p className="use-text-paragraph">
                                                                        Embark on an IoT journey with our ESP32-based DIY LED
                                                                        webserver tutorial, blending theory with hands-on learning.
                                                                        Dive from basics to advanced, ending with both a functional
                                                                        webserver and deepened tech understanding.
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
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate">Pet Feeder</h6>
                                                                    <p className="use-text-paragraph">
                                                                        Simplify pet care with the Blynk Controlled Automatic Pet
                                                                        Feeder, merging IoT convenience with timely feedings. Set
                                                                        schedules, monitor food levels, and ensure your pets never
                                                                        miss a meal, no matter where you are.
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
                                                                            "url(https://circuitdigest.com/sites/default/files/projectimage_mic/Home-automation-with-Augment-Reality.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        Home Automation with AR
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        Dive into a new era of home automation, combining IoT and
                                                                        Augmented Reality for a transformative experience. Not just
                                                                        control, but visually immerse and interact with every device
                                                                        in your home.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://circuitdigest.com/microcontroller-projects/iot-based-home-automation-with-augmented-reality"
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
                                                                            "url(https://circuitdigest.com/sites/default/files/projectimage_mic/IoT-Smart-Garage-Door-Opener-using-Raspberry-Pi.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        Smart Garage Door Opener
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        Elevate your garage with our IoT-powered opener, harnessing
                                                                        Raspberry Pi for unmatched convenience and security.
                                                                        Control, monitor, and integrate effortlessly for a truly
                                                                        modern home experience.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://circuitdigest.com/microcontroller-projects/iot-smart-garage-door-opener-using-raspberry-pi"
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
                                                                            "url(https://how2electronics.com/wp-content/uploads/2022/05/Real-Time-GPS-Tracker-ESP8266-and-Blynk-1080x607.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        Real Time GPS Tracker
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        Track assets and loved ones with precision using our
                                                                        ESP8266-based Real Time GPS Tracker, seamlessly integrated
                                                                        with Blynk. Monitor movements, set geofencing, and access
                                                                        history for safety, logistics, and peace of mind.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://how2electronics.com/real-time-gps-tracker-using-esp8266-blynk-with-maps/"
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
                                                                            "url(https://circuitdigest.com/sites/default/files/projectimage_mic/IoT-based-Smart-Parking-System-using-ESP8266-NodeMCU.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        Smart Parking System
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        Navigate urban parking woes with our IoT Smart Parking
                                                                        System, using ESP8266 NodeMCU for real-time space
                                                                        availability. For drivers and managers alike, it simplifies
                                                                        parking and optimizes space management.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://circuitdigest.com/microcontroller-projects/iot-based-smart-parking-system-using-nodemcu"
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
                                                                            "url(https://circuitdigest.com/sites/default/files/projectimage_mic/Aquaculture-Monitoring-System-using-IoT.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        Water Quality Monitoring System
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        Guard waters purity with our Smart Water Quality Monitoring
                                                                        System, utilizing IoT sensors for real-time quality checks.
                                                                        From public supplies to private pools, ensure safety and
                                                                        proactively address issues with data alerts.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://circuitdigest.com/microcontroller-projects/arduino-nodemcu-based-smart-water-quality-monitoring-system-using-iot"
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
                                                                            "url(https://how2electronics.com/wp-content/uploads/2022/11/IoT-Solar-Power-Monitoring-System-ESP32-1200x675.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        Solar Power Monitoring System
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        Harness the sun smarter with our ESP32-based IoT system,
                                                                        offering insights into solar power dynamics. Empower your
                                                                        green journey with detailed analytics, optimizing solar
                                                                        efficiency and integration for a brighter tomorrow.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://how2electronics.com/iot-based-solar-power-monitoring-system-with-esp32/"
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
                                                                            "url(https://how2electronics.com/wp-content/uploads/2021/07/WiFi-Controlled-Robot-1080x607.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        WiFi Controlled Robot using ESP8266
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        It is a remotely operated device that leverages the ESP8266
                                                                        WiFi module for wireless communication, enabling control
                                                                        through a smartphone or computer over a WiFi network.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://how2electronics.com/wifi-controlled-robot-using-esp8266-android-app/"
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
                                                                            "url(https://i.ytimg.com/vi/XfTvKn3GnOw/maxresdefault.jpg)"
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="desc">
                                                                <div className="text">
                                                                    <h6 className="title pb-2 text-truncate1">
                                                                        IoT Face Recognition AI Robot
                                                                    </h6>
                                                                    <p className="use-text-paragraph">
                                                                        Discover the future with our Face Recognition AI Robot,
                                                                        blending robotics, AI, and IoT for personalized
                                                                        interactions. Beyond a machine, it showcases tech
                                                                        advancements and the power of human-machine synergy.
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="btn btn-outlined primary button block waves-effect"
                                                                        href="https://www.electronicsforu.com/electronics-projects/design-iot-face-recognition-ai-robot"
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
                                </>
                            </div>
                            <Footer />
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}