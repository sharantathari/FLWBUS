export default function Related() {
    return (
        <div className="carousel1">
            <button className="btn-floating nav prev waves-effect" id="prev_testi">
                <i className="ion-ios-arrow-back" />
            </button>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 py-6 px-sm-0 px-md-6">
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
            <button className="btn-floating nav prev waves-effect1" id="prev_testi">
                <i className="ion-ios-arrow-forward" />
            </button>
            {/* ##### END RELATED #####*/}
        </div>

    )
}