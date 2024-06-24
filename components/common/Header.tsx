import Link from "next/link";

export default function Header() {
  return (
    <header className="app-bar header" id="header">
    <div className="container">
      <div className="header-content">
        <nav className="nav-menu">
          <button
            className="btn-icon waves-effect sidenav-trigger hamburger hamburger--spin show-md-down"
            id="mobile_menu"
            type="button"
            data-target="slide_menu"
          >
            <span className="hamburger-box">
              <span className="bar hamburger-inner" />
            </span>
          </button>
          <div className="logo">
            <Link href="/">
              <span className="logo-main landscape medium">
                <img
                  src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/flow-logo.svg"
                  alt="edodwaja-logo"
                />
              </span>
            </Link>
          </div>
          <div className="scrollactive-nav scrollnav show-lg-up multi-menu">
            <ul className="main-menu">
              <li>
                <a
                  className="btn btn-flat anchor-link"
                  href="#feature"
                >
                  main feature
                </a>
              </li>
              <li>
                <a
                  className="btn btn-flat anchor-link"
                  href="#popular"
                >
                  popular course
                </a>
              </li>
              <li>
                <a
                  className="btn btn-flat anchor-link"
                  href="#explore"
                >
                  Tech Horizon
                </a>
              </li>
              <li>
                <Link
                  className="btn btn-flat anchor-link"
                  href="/blogs"
                >
                  blogs
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-flat megamenu-trigger-click"
                  data-target="sample-page"
                >
                  inner Page
                  <i className="material-icons right icon">keyboard_arrow_down</i>
                </button>
                <div className="mega-menu-root dropdown-content" id="sample-page">
                  <div className="mega-menu">
                    <div className="container max-md">
                      <div className="row">
                        <div className="col-sm-3 mb-6">
                          <div className="title-mega">Company</div>
                          <img
                            className="thumb-menu"
                            src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/menu_marketing@2x.jpg"
                            alt="thumbnail"
                          />
                          <ul>
                            <li className="waves-effect">
                              <Link className="menu-list" href="/about">
                                about
                              </Link>
                            </li>
                            <li className="waves-effect">
                              <Link className="menu-list" href="/aboutteam">
                                team and culture
                              </Link>
                            </li>
                            <li className="waves-effect">
                              <Link className="menu-list" href="/blogs">
                                blog home
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3 mb-6">
                          <div className="title-mega">Form</div>
                          <img
                            className="thumb-menu"
                            src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/menu_education@2x.jpg"
                            alt="thumbnail"
                          />
                          <ul>
                            <li className="waves-effect">
                              <Link className="menu-list" href="/login">
                                login
                              </Link>
                            </li>
                            <li className="waves-effect">
                              <Link className="menu-list" href="/register">
                                register
                              </Link>
                            </li>
                            <li className="waves-effect">
                              <Link className="menu-list" href="/contact">
                                contact with map
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3 mb-6">
                          <div className="title-mega">Items</div>
                          <img
                            className="thumb-menu"
                            src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/menu_pos@2x.jpg"
                            alt="thumbnail"
                          />
                          <ul>
                            <li className="waves-effect">
                              <Link className="menu-list" href="/products">
                                product with filter
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li className="waves-effect">
                              <a
                                className="menu-list"
                                href="https://edodwaja.com/the-courses/"
                              >
                                Courses
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*<div class="col-sm-3 mb-6">*/}
                        {/*  <div class="title-mega">Utilities</div>*/}
                        {/*  <img class="thumb-menu" src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/menu_saas2@2x.jpg" alt="thumbnail" />*/}
                        {/*  <ul>*/}
                        {/*<li class="waves-effect"><a class="menu-list" href="maintenance.html">maintenance</a></li>*/}
                        {/*<li class="waves-effect"><a class="menu-list" href="coming-soon.html">coming soon</a></li>*/}
                        {/*<li class="waves-effect"><a class="menu-list" href="404.html">error not found</a></li>*/}
                        {/*  </ul>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <nav className="user-menu">
            <Link className="btn btn-flat waves-effect show-sm-up" href="/login">
              Login
            </Link>
            <Link
              className="btn waves-effect primary show-sm-up"
              href="/register"
            >
              register
            </Link>
            <span className="spacer vertical-divider show-lg-up" />
            <div className="menu-setting">
              {/* <div class="setting">
                    <button class="btn btn-icon waves-effect btn-small dropdown-trigger ma-1" data-target="dropdown_config" data-align="left" type="button">
                      <i class="icon material-icons" id="setting_icon">settings</i>
                    </button>
                    <div class="dropdown-content setting" id="dropdown_config">
                      <ul class="collection with-header">
                        <li class="collection-header">theme mode</li>
                        <li class="collection-item no-hover pl-4">
                          <div class="flex-menu">
                            <div class="switch">
                              <label>
                                light
                                <input id="theme_switcher" type="checkbox"><span class="lever"></span>
                                dark
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div> */}
            </div>
          </nav>
        </nav>
        <div id="container_menu" />
      </div>
    </div>
  </header>
  

  )
}