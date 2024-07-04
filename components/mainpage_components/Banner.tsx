import Link from "next/link"

export default function Banner() {
    return (
        <section id="banner">
            <div className="banner-slider">
                <div className="banner-wrap">
                    <div className="bg-deco" />
                    <div className="container small-deco">
                        <div />
                    </div>
                    <div className="carousel">
                        <div className="slider" id="banner_slider">
                            <div className="slide" id="slide1">
                                <div className="inner">
                                    <div className="img background-banner">
                                        {/* <img className="img-2d3d" src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/background_3d@2x.png" data-2d="https://cdn.global.noobsverse.com/cc.flowbus/assets" data-3d="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/background_3d@2x.png" alt="background" /> */}
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 px-sm-4 px-0 d-flex align-center">
                                                <div className="text">
                                                    <div className="title title-left">
                                                        <h1
                                                            className="use-text-title"
                                                            // alt="Edodwaja Futuristic Lab On Wheels"
                                                        >
                                                            Edodwaja{" "}
                                                        </h1>
                                                    </div>
                                                    <h5 className="use-text-subtitle">
                                                        Indias First Futuristic Lab On Wheels
                                                    </h5>
                                                    <div className="btn-area">
                                                        <a
                                                            className="btn-flat waves-effect btn-large button primary-text"
                                                            href="#"
                                                        >
                                                            see detail
                                                        </a>
                                                        <Link
                                                            className="btn waves-effect button btn-large primary"
                                                            href="/register"
                                                        >
                                                            get started
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 px-6">
                                                <div className="img">
                                                    <img
                                                        className="img-2d3d img-slide1"
                                                        src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/labonwheels.png"
                                                        alt="Robot Image 3D"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide" id="slide2">
                                <div className="inner">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-7 col-lg-6 px-sm-4 px-0 d-flex align-items-center order-md-last">
                                                <div className="text">
                                                    <h4 className="use-text-title">Edodwaja Planetarium</h4>
                                                    <h5 className="use-text-subtitle">
                                                        A planetarium is a place where you can go to see what
                                                        the night sky looks like. In this room can shine images
                                                        on the domed ceiling and show you the stars and other
                                                        objects in the night sky.
                                                    </h5>
                                                    <div className="btn-area">
                                                        <a
                                                            className="btn-flat waves-effect btn-large button primary-text"
                                                            href="#"
                                                        >
                                                            see detail
                                                        </a>
                                                        <Link
                                                            className="btn waves-effect button btn-large primary"
                                                            href="/register"
                                                        >
                                                            get started
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-lg-6 order-md-first">
                                                <div className="img">
                                                    <img
                                                        className="img-2d3d img-slide2"
                                                        src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/planetarium.png"
                                                        alt="Edodwaja's Planetarium"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide center-content" id="slide3">
                                <div className="inner">
                                    <div className="container">
                                        <div className="row justify-content-end">
                                            <div className="col-12 px-lg-12 px-0">
                                                <div className="text text-center">
                                                    <div className="title-wrap">
                                                        <div className="title title-center">
                                                            <h4 className="use-text-title">Edodwaja DIY </h4>
                                                        </div>
                                                    </div>
                                                    <h5 className="use-text-subtitle">
                                                        Anywhere, anytime. Start learning today! And Get an
                                                        Exceptional Learning Experience.
                                                    </h5>
                                                    <div className="btn-area">
                                                        <a
                                                            className="btn-flat waves-effect btn-large button"
                                                            href="#"
                                                        >
                                                            see detail
                                                        </a>
                                                        <Link
                                                            className="btn waves-effect button btn-large primary"
                                                            href="/register"
                                                        >
                                                            get started
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="img h-banner">
                                                    <img
                                                        className="img-2d3d"
                                                        src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/DIY.png"
                                                        alt="Arduino"
                                                        style={{ height: "auto", width: 300 }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden-sm-down">
                        <div className="container max-md">
                            <nav className="slide-nav" id="banner_nav">
                                <a className="waves-effect active" data-slide={0}>
                                    <strong>Edodwaja</strong>Indias First Futuristic Lab On Wheels
                                </a>
                                <hr className="divider" />
                                <a className="waves-effect" data-slide={1}>
                                    <strong>Edodwaja Planetarium</strong>Where Universe comes to you
                                </a>
                                <hr className="divider" />
                                <a className="waves-effect" data-slide={2}>
                                    <strong>Edodwaja DIY Kits</strong>Where ideas meets Technology.
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section id="current-programs">
                <div className="container">
                    <h2>Current Programs That We’re Running</h2>
                    <div className="feedback">
                        <h3>Feedback of Students</h3>
                        {/* Insert student feedback here */}
                    </div>
                    <div className="faces-of-organisation">
                        <h3>Faces of the Organisation</h3>
                        <p>Showing the prominent team members involved in teaching the curriculum</p>
                        {/* Insert team member profiles here */}
                    </div>
                </div>
            </section>
        </section>
    )
}
