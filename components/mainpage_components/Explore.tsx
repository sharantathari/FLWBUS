import Link from "next/link";

export default function Explore(){
    return (
      <section id="explore">
      <div className="root">
        <div className="container">
          <div className="px-lg-6">
            <div className="px-8 px-lg-0">
              <div className="title-main align-left">
                <h4 className="primary">
                  <span>Tech Horizons</span>
                </h4>
                <p className="desc use-text-subtitle2">
                  Exploring Cutting-Edge Domains in Technology
                </p>
              </div>
            </div>
            <div className="rack" id="cat1">
              <div className="category-title">
                <h3>
                  <i className="material-icons small">palette</i>&nbsp;We Offer
                </h3>
                <a
                  className="btn-flat waves-effect primary-text view-all"
                  href="products.html"
                >
                  see all<i className="material-icons icon">arrow_forward</i>
                </a>
              </div>
              <div className="content" >
                <div
                  className="book collapsed"
                  style={{ border: "2px solid #f74e10" }}
                >
                  <figure>
                    <img src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/robotics.png" alt="title" />
                    <figcaption style={{ background: "#f74e10" }}>
                      <span>Robotics </span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">Title here</h6>
                      <p className="use-text-paragraph">
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Asperiores qui odio ut at beatae voluptate inventore a
                        repellat quisquam labore, dolores quae quibusdam repellendus
                        ad nesciunt aliquam aspernatur! Modi, exercitationem.{" "}
                      </p>
                    </div>
                    <div>
                      <div className="property">
                        {/*<div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon" title="4">star</i><i class="material-icons star-icon" title="5">star</i></div><strong>$50</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/robotics"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="book collapsed"
                  style={{ border: "2px solid #c7618c" }}
                >
                  <figure>
                    <img
                      src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/augmented-reality.png"
                      alt="title"
                    />
                    <figcaption style={{ background: "#c7618c" }}>
                      <span>Augmented Reality</span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">
                        Augmented Reality (AR)
                      </h6>
                      <p className="use-text-paragraph">
                        The works stand out for being an intellectual painter in the
                        creation of the pictorial work from scratch
                      </p>
                    </div>
                    <div>
                      <div className="property">
                        {/*<div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon" title="4">star</i><i class="material-icons star-icon-disable" title="1">star</i></div><strong>$10</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/ar"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="book collapsed"
                  style={{ border: "2px solid #e59546" }}
                >
                  <figure>
                    <img
                      src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/virtual-reality.png"
                      alt="title"
                    />
                    <figcaption style={{ background: "#e59546" }}>
                      <span>Virtual Reality</span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">
                        Virtual Reality (VR)
                      </h6>
                      <p className="use-text-paragraph">
                        The famously irreverent chef also offers playful riffs on
                        classics, reimagining tuna-and-rice bowls.
                      </p>
                    </div>
                    <div>
                      <div className="property">
                        {/*<div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon" title="4">star</i><i class="material-icons star-icon" title="5">star</i></div><strong>$50</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/vr"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="book expanded"
                  style={{ border: "2px solid #8f46e5" }}
                >
                  <figure>
                    <img src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/4.png" alt="title" />
                    <figcaption style={{ background: "#8f46e5" }}>
                      <span>Artificial Intelligence</span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">
                        Artificial Intelligence (AI)
                      </h6>
                      <p className="use-text-paragraph">
                        When people talk about the future, they usually mean virtual
                        reality.
                      </p>
                    </div>
                    <div>
                      <div className="property">
                        {/*<div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon-disable" title="1">star</i><i class="material-icons star-icon-disable" title="2">star</i></div><strong>$25</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/ai"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="book collapsed"
                  style={{ border: "2px solid #ac8a55" }}
                >
                  <figure>
                    <img
                      src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/machine-learning.png"
                      alt="title"
                    />
                    <figcaption style={{ background: "#ac8a55" }}>
                      <span>Machine Learning</span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">Machine Learning</h6>
                      <p className="use-text-paragraph">
                        Face the Music is the shocking inspirational story of one of
                        rock’s most enduring icons.
                      </p>
                    </div>
                    <div>
                      <div className="property">
                        {/*<div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon" title="4">star</i><i class="material-icons star-icon" title="5">star</i></div><strong>$50</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/ml"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="book collapsed"
                  style={{ border: "2px solid #274be3" }}
                >
                  <figure>
                    <img
                      src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/cybersecurity.png"
                      alt="title"
                    />
                    <figcaption style={{ background: "#274be3" }}>
                      <span>Cyber Security</span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">Cyber Security</h6>
                      <p className="use-text-paragraph">
                        This book clearly outlines key concepts that all geographers
                        should readily be able to explain
                      </p>
                    </div>
                    <div>
                      <div className="property">
                        {/*<div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon" title="4">star</i><i class="material-icons star-icon" title="5">star</i></div><strong>$40</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/cybersecurity"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="book collapsed"
                  style={{ border: "2px solid #6DB4A7" }}
                >
                  <figure>
                    <img src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/IoT.png" alt="title" />
                    <figcaption style={{ background: "#6DB4A7" }}>
                      <span>Internet of Things</span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">
                        Internet of Things (IoT)
                      </h6>
                      <p className="use-text-paragraph">
                        Photographs are everywhere and it has profoundly altered our
                        relationship with the world.
                      </p>
                    </div>
                    <div>
                      <div className="property">
                        {/*  <div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon" title="4">star</i><i class="material-icons star-icon" title="5">star</i></div><strong>$50</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/iot"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="book collapsed"
                  style={{ border: "2px solid #6DB4A7" }}
                >
                  <figure>
                    <img
                      src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/block-chain.png"
                      alt="title"
                    />
                    <figcaption style={{ background: "#6DB4A7" }}>
                      <span>Block Chain</span>
                    </figcaption>
                  </figure>
                  <div className="desc">
                    <div className="text">
                      <h6 className="title pb-2 text-truncate">Block Chain</h6>
                      <p className="use-text-paragraph">
                        Photographs are everywhere and it has profoundly altered our
                        relationship with the world.
                      </p>
                    </div>
                    <div>
                      <div className="property">
                       {/*<div class="rating"><i class="material-icons star-icon" title="1">star</i><i class="material-icons star-icon" title="2">star</i><i class="material-icons star-icon" title="3">star</i><i class="material-icons star-icon" title="4">star</i><i class="material-icons star-icon" title="5">star</i></div><strong>$50</strong>*/}
                      </div>
                      <Link
                        className="btn btn-outlined primary button block"
                        href="/blockchain"
                      >
                        see detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}