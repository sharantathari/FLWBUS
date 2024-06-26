import Link from "next/link";

export default function About() {
    return (
        <section className="space-top-short" id="about">
        <div className="root">
          <div className="container fixed-width">
            <div className="row">
              <div className="col-md-6 illu-wrap">
                <div
                  className="wow fadeInLeftShort"
                  data-wow-offset={-100}
                  data-wow-delay="0.2s"
                  data-wow-duration="0.6s"
                >
                  <div className="illustration">
                    <img
                      className="img-2d3d"
                      src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/About.png"
                      data-2d="https://cdn.global.noobsverse.com/cc.flowbus/assets"
                      data-3d="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/About.png"
                      alt="about"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-md-start text-center">
                  <div className="title-main align-left">
                    <h4 className="secondary">
                      <span>About us</span>
                    </h4>
                    <p className="desc use-text-subtitle2">
                      Edodwa education on latest
                      technology to the creative minds through our concept Lab on
                      Wheels. We always focus on providing the right tech and
                      guidance for them in process of achieving their goals.
                    </p>
                  </div>
                  <Link className="btn secondary waves-effect" href="/about">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}