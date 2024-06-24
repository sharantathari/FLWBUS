export default function Subscribe(){
    return(
        <section className="bottom-deco-wrap space-top" id="subscribe">
  <div className="footer-top-deco">
    <div
      className="wow zoomInShort"
      data-wow-offset={0}
      data-wow-delay="0.2s"
      data-wow-duration="0.3s"
    >
      <img
        className="img-2d3d"
        src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/right.png"
        data-2d="Futuristic Images"
        data-3d="Futuristic Images"
        alt="footer"
      />
    </div>
  </div>
  <div className="subsribe-form">
    <div className="root">
      <div className="container max-sm">
        <h3 className="use-text-title2 mb-4">Subscribe our newsletter</h3>
        <p className="use-text-subtitle2">Subscribe our newsletter</p>
        <div className="form">
          <form method="POST" action="emailsave.php">
            <div className="field outlined">
              <div className="input-field dark full-width solo">
                <input
                  type="email"
                  name="email"
                  placeholder="What is your email? *"
                  required
                />
              </div>
            </div>
            <button className="btn primary button waves-effect" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}