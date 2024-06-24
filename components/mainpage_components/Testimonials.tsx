export default function Testimonials() {
    return (

        <>
            <iframe
                src="https://s3.ap-south-1.amazonaws.com/assets.edodwaja.com/testimonials.html"
                frameBorder={0}
                scrolling="no"
                className="testimonials-perfect"
            />
            <section className="bus">
                <iframe
                    src="https://s3.ap-south-1.amazonaws.com/assets.edodwaja.com/firstfuturistic.html"
                    frameBorder={0}
                    scrolling="no"
                    style={{ height: 700, width: "100%", }}

                />
            </section>
            <section>
                <h2
                    className="learn"
                    style={{
                        marginBottom: 20,
                        marginTop: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    Our
                    <strong
                        className="theme-gradient"
                        id="practical"
                        style={{ marginLeft: 10 }}
                    >
                        Journey
                    </strong>
                </h2>
                <iframe
                    src="https://s3.ap-south-1.amazonaws.com/assets.edodwaja.com/timeline.html"
                    frameBorder={0}
                    style={{ height: "60vh", width: "100%" }}
                    scrolling="no"
                />
            </section>
            {/* #####    TIMELINE END    ##### */}
            {/* #####  ##### */}
            <section>
                <h2
                    className="learn"
                    style={{
                        marginBottom: 20,
                        marginTop: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    Snap
                    <strong className="theme-gradient" id="practical">
                        shots
                    </strong>
                </h2>
                <iframe
                    src="https://s3.ap-south-1.amazonaws.com/assets.edodwaja.com/gallery.html"
                    frameBorder={0}
                    style={{ height: "60vh", width: "100%" }}
                    scrolling="no"
                />
            </section>
        </>


    )
}