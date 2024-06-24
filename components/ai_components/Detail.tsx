export default function Detail() {
    return (
        <div className="list-style">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-5 py-0 px-0 pa-md-6">
                    <div className="carousel">
                        <div className="detail-carousel" id="detail_carousel">
                            <div className="image" data-index={0}>
                                <a
                                    className="waves-effect"
                                    href="https://img.freepik.com/premium-photo/man-ai-robot-look-each-other-concept-human-robot-war-future_878453-1318.jpg"
                                >
                                    <div className="figure">
                                        <img
                                            src="https://img.freepik.com/premium-photo/man-ai-robot-look-each-other-concept-human-robot-war-future_878453-1318.jpg"
                                            alt="thumb"
                                        />
                                        <div
                                            className="img image-detail"
                                            style={{
                                                backgroundImage:
                                                    "url(https://img.freepik.com/premium-photo/man-ai-robot-look-each-other-concept-human-robot-war-future_878453-1318.jpg)"
                                            }}
                                        />
                                        <i className="material-icons zoom-icon">zoom_in</i>
                                    </div>
                                </a>
                            </div>
                            <div className="image" data-index={1}>
                                <a
                                    className="waves-effect"
                                    href="https://img.freepik.com/premium-photo/artificial-intelligence-concept-140_953201-2098.jpg"
                                >
                                    <div className="figure">
                                        <img
                                            src="https://img.freepik.com/premium-photo/artificial-intelligence-concept-140_953201-2098.jpg"
                                            alt="thumb"
                                        />
                                        <div
                                            className="img image-detail"
                                            style={{
                                                backgroundImage:
                                                    "url(https://img.freepik.com/premium-photo/artificial-intelligence-concept-140_953201-2098.jpg)"
                                            }}
                                        />
                                        <i className="material-icons zoom-icon">zoom_in</i>
                                    </div>
                                </a>
                            </div>
                            <div className="image" data-index={2}>
                                <a
                                    className="waves-effect"
                                    href="https://img.freepik.com/premium-vector/futuristic-ai-prompt-illustration-hightech-background-concept-ready-use-command-prompt-box_514961-739.jpg"
                                >
                                    <div className="figure">
                                        <img
                                            src="https://img.freepik.com/premium-vector/futuristic-ai-prompt-illustration-hightech-background-concept-ready-use-command-prompt-box_514961-739.jpg"
                                            alt="thumb"
                                        />
                                        <div
                                            className="img image-detail"
                                            style={{
                                                backgroundImage:
                                                    "url(https://img.freepik.com/premium-vector/futuristic-ai-prompt-illustration-hightech-background-concept-ready-use-command-prompt-box_514961-739.jpg)"
                                            }}
                                        />
                                        <i className="material-icons zoom-icon">zoom_in</i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-7 pa-2 px-md-10">
                    <div className="text">
                        <h4 className="use-text-title2">
                            <span className="use-text-subtitle2" /> Artificial Intelligence
                        </h4>
                        <article className="desc">
                            <h6 className="use-text-paragraph">
                                {" "}
                                Artificial Intelligence (AI) is a rapidly advancing field of
                                computer science focused on creating systems and machines capable of
                                performing tasks that typically require human intelligence. AI
                                systems are designed to learn from data, recognize patterns, make
                                decisions, and solve complex problems.{" "}
                            </h6>
                            <h6 className="use-text-p">
                                {" "}
                                his technology has found widespread applications, from virtual
                                assistants like Siri and chatbots to more complex uses in
                                healthcare, finance, and autonomous vehicles. AIs potential impact
                                on society is profound, with the ability to automate routine tasks,
                                provide data-driven insights, and enhance decision-making processes.{" "}
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

    )
}