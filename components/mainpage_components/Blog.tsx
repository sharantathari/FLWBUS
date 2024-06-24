import React from "react";

function BlogComponent() {
  return (
    <section className="space-top" id="blog-home">
  <div className="root">
    <div className="modal video-popup" id="video_modal">
      <div className="modal-content">
        <div className="headline">
          <h4>Edodwaja Youtube</h4>
          <button className="btn-icon modal-close waves-effect">
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className="text-center">
          <div id="video_blog_iframe" />
        </div>
      </div>
    </div>
    <div className="hidden-sm-down">
      <div className="deco" />
    </div>
    <div className="container fixed-width">
      <div className="px-md-12 pa-2">
        <div className="title-main align-left">
          <h4 className="secondary">
            <span>Whats update?</span>
          </h4>
          <p className="desc use-text-subtitle2">
            Up-to-the-minute news, breaking news, video, audio and feature
            stories
          </p>
        </div>
      </div>
      <div className="row flex-sm-row-reverse">
        <div className="col-md-6 pa-md-8 pa-0">
          <div className="video-wrap">
            <div className="video-carousel">
              <div className="card item">
                <img
                  src="https://via.placeholder.com/700x462/8e8e8e/FFFFFF"
                  alt="Edodwaja's Updates"
                />
                <button
                  className="btn play-btn waves-effect modal-trigger"
                  data-target="video_modal"
                >
                  <i className="icon material-icons">play_arrow</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pa-md-8 pa-2">
          <div className="blog-list">
            <div
              className="wow fadeInLeftShort"
              data-wow-offset={-200}
              data-wow-delay="0s"
              data-wow-duration="0.6s"
            >
              <div className="blog-card">
                <div className="text">
                  <a className="btn-flat" href="#">
                    <span>Edodwajas Futuristic Lab On Wheels Demo</span>
                  </a>
                  <h4>
                    <a className="btn-flat waves-effect" href="#">
                      First Look Soon!
                    </a>
                  </h4>
                </div>
                <div className="date ResDatez">
                  <h3>Feb</h3>
                  <h2>08</h2>
                  <h4>2022</h4>
                </div>
              </div>
            </div>
            <div
              className="wow fadeInLeftShort"
              data-wow-offset={-200}
              data-wow-delay="0.2s"
              data-wow-duration="0.6s"
            >
              <div className="blog-card">
                <div className="text">
                  <a className="btn-flat" href="#">
                    <span>Science - Math</span>
                  </a>
                  <h4>
                    <a className="btn-flat waves-effect" href="#">
                      Vestibulum vitae tristique urna. Mauris non cursus quam
                    </a>
                  </h4>
                </div>
                <div className="date ResDatez">
                  <h3>Feb</h3>
                  <h2>08</h2>
                  <h4>2022</h4>
                </div>
              </div>
            </div>
            <div
              className="wow fadeInLeftShort"
              data-wow-offset={-200}
              data-wow-delay="0.4s"
              data-wow-duration="0.6s"
            >
              <div className="blog-card">
                <div className="text">
                  <a className="btn-flat" href="#">
                    <span>Science - Math</span>
                  </a>
                  <h4>
                    <a className="btn-flat waves-effect" href="#">
                      Vestibulum vitae tristique urna. Mauris non cursus quam
                    </a>
                  </h4>
                </div>
                <div className="date ResDatez">
                  <h3>Feb</h3>
                  <h2>08</h2>
                  <h4>2022</h4>
                </div>
              </div>
            </div>
            <a className="more secondary-text btn-flat waves-effect">more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default BlogComponent;
