import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNav from "@/components/common/MobileNav";
import Preloader from "@/components/common/Preloader";

export default function BlockChain() {
    return (
        <>
            {/* <Preloader /> */}
            <div className="m-application theme--dark transition-page" id="app">
                <div className="loading" />
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="detail-product-page">
                        <div className="main-wrap">
                            <MobileNav />
                            <div className="container-general">
                            <Header />
                                <div className="list-style">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-sm-5 py-0 px-0 pa-md-6">
                                            <div className="carousel">
                                                <div className="detail-carousel" id="detail_carousel">
                                                    <div className="image" data-index={0}>
                                                        <a
                                                            className="waves-effect"
                                                            href="https://img.freepik.com/premium-vector/blockchain-background-isometric-digital-blocks-connected-circuits-forming-crypto-chain_3811-268.jpg"
                                                        >
                                                            <div className="figure">
                                                                <img
                                                                    src="https://img.freepik.com/premium-vector/blockchain-background-isometric-digital-blocks-connected-circuits-forming-crypto-chain_3811-268.jpg"
                                                                    alt="thumb"
                                                                />
                                                                <div
                                                                    className="img image-detail"
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url(https://img.freepik.com/premium-vector/blockchain-background-isometric-digital-blocks-connected-circuits-forming-crypto-chain_3811-268.jpg)"
                                                                    }}
                                                                />
                                                                <i className="material-icons zoom-icon">zoom_in</i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="image" data-index={1}>
                                                        <a
                                                            className="waves-effect"
                                                            href="https://img.freepik.com/free-vector/web-3-0-technology-isometric-concept-with-cloud-services-symbols-vector-illustration_1284-75870.jpg"
                                                        >
                                                            <div className="figure">
                                                                <img
                                                                    src="https://img.freepik.com/free-vector/web-3-0-technology-isometric-concept-with-cloud-services-symbols-vector-illustration_1284-75870.jpg"
                                                                    alt="thumb"
                                                                />
                                                                <div
                                                                    className="img image-detail"
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url(https://img.freepik.com/free-vector/web-3-0-technology-isometric-concept-with-cloud-services-symbols-vector-illustration_1284-75870.jpg)"
                                                                    }}
                                                                />
                                                                <i className="material-icons zoom-icon">zoom_in</i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="image" data-index={2}>
                                                        <a
                                                            className="waves-effect"
                                                            href="https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074561.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.1.2011221450.1694800750&semt=ais"
                                                        >
                                                            <div className="figure">
                                                                <img
                                                                    src="https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074561.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.1.2011221450.1694800750&semt=ais"
                                                                    alt="thumb"
                                                                />
                                                                <div
                                                                    className="img image-detail"
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url(https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074561.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.1.2011221450.1694800750&semt=ais)"
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
                                                    <span className="use-text-subtitle2" /> Blockchain
                                                </h4>
                                                <article className="desc">
                                                    <h6 className="use-text-paragraph">
                                                        {" "}
                                                        Blockchain is a distributed ledger technology that has gained
                                                        prominence for its ability to provide secure, transparent, and
                                                        tamper-resistant record-keeping. It operates as a decentralized
                                                        network of nodes, each holding a copy of the same ledger, ensuring
                                                        that transactions are recorded in a way that is virtually immutable.
                                                    </h6>
                                                    <h6 className="use-text-p">
                                                        This innovation, prominently recognized in cryptocurrency, extends
                                                        its applications across sectors. Beyond cryptocurrencies, industries
                                                        such as supply chain, healthcare, and finance benefit from
                                                        blockchains transparency and security. Its cryptographic techniques
                                                        ensure data security in a trustless landscape.
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
                                                                        "url(https://www.sciencebuddies.org/cdn/Files/7954/9/how-to-build-a-brushbot.jpg)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Brush Bot</h6>
                                                                <p className="use-text-paragraph">
                                                                    You may construct brushbots, a straightforward and
                                                                    entertaining form of robot, with crafting supplies.They are
                                                                    simple to construct and dont require any prior robotics
                                                                    knowledge
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://www.sciencebuddies.org/stem-activities/brushbot#:~:text=Brushbots%20are%20a%20simple%2C%20fun,even%20make%20them%20sumo%20wrestle!"
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
                                                                        "url(https://content.instructables.com/FWM/T0BO/GQBCJ794/FWMT0BOGQBCJ794.jpg?auto=webp&frame=1&width=933&height=1024&fit=bounds&md=06028d0c500f17a1130cdb957110afa1)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Simple Bots:Clack</h6>
                                                                <p className="use-text-paragraph">
                                                                    Clack, the robot, finds beauty in imperfections. With varying
                                                                    wheels, it brings unpredictability and entertainment,
                                                                    celebrating irregularity in a world of precision.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://www.instructables.com/Simple-Bots-Clack/"
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
                                                                        "url(https://hackster.imgix.net/uploads/attachments/1087364/dsc00644_n7gcbzd9Xj.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Wash Timer</h6>
                                                                <p className="use-text-paragraph">
                                                                    Promote health by washing hands thoroughly for 20 seconds. DIY
                                                                    handwashing timer at home encourages proper hand hygiene for
                                                                    your well-being and others.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://www.hackster.io/331510/wash-a-lot-bot-a-diy-hand-washing-timer-2df500"
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
                                                                        "url(https://www.sciencebuddies.org/A6p9vXnr78rEMQVL9fF_RKxizSQ=/975x698/-/https/www.sciencebuddies.org/cdn/Files/19409/5/jumping-robot.jpg)"
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Jumping Bot</h6>
                                                                <p className="use-text-paragraph">
                                                                    Engineers mimic natures jumping abilities in robots, a rare
                                                                    motion in machines, by studying animals and insects, unlocking
                                                                    innovative techniques for improved robotic jumping.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="btn btn-outlined primary button block waves-effect"
                                                                    href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p047/robotics/rubber-band-jumping-robot?from=Blog"
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}