export default function App() {
  return (
    <section className="app-section">
      <iframe
        src="https://s3.ap-south-1.amazonaws.com/assets.edodwaja.com/app.html"
        frameBorder={0}
        scrolling="no"
        style={{
          height: "70vh",
          width: "100%",
          overflow: "hidden",
          display: "none"
        }}
      />
      <div className="about-section snipcss-F8oKS" id="About">
        <div className="container">
          <div className="new-row">
            <div className="col-lg-6">
              <div
                className="about-thumb wow fadeInUp animated animated style-LVoPz"
                id="style-LVoPz"
              >
                <img
                  src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/Mobile.png"
                  style={{ height: "auto", width: 520, background: "no-repeat" }}
                  alt="Download Edodwaja Application"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-title wow fadeInRight animated animated style-ebSVK"
                id="style-ebSVK"
              >
                <h5>Learn in new way</h5>
                <h3>
                  <span>Download Our App now!</span>
                </h3>
              </div>
              <div
                className="about-disc wow fadeInLeft animated animated style-Z6Tkg"
                id="style-Z6Tkg"
              >
                <p>
                  The Edodwaja app is a comprehensive platform offering technical
                  courses in AR, VR, robotics, drones, and more. It features an
                  innovative AR mobile lab experience, enabling students to engage
                  in hands-on learning. Users can undertake challenges to build
                  their own tech projects, earn certificates, access detailed
                  tutorials, and purchase project components online.
                </p>
              </div>
              <div
                className="about-disc2 wow fadeInLeft animated animated style-zocJK"
                id="style-zocJK"
              >
                <p>
                  <br />
                  <strong>Install Now</strong>
                </p>
                <div
                  className="download-app"
                  style={{ width: "30%", height: "30%", display: "flex" }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt=" https://play.google.com/store/apps/details?id=com.edodwaja.app "
                    height="90px"
                    className="android"
                    style={{ marginRight: 20 }}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
                    alt=" https://apps.apple.com/us/app/Releasing Soon/ "
                    height="50px"
                    className="apple"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}