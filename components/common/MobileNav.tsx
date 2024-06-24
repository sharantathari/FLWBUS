import Link from "next/link"
export default function MobileNav() {
    return (
        <div className="sidenav mobile-nav" id="slide_menu">
        <div className="side-multilv">
          <div className="collection side-multilv">
            <ul className="collapsible expandable">
              <li className="collection-item">
                <a className="sidenav-close  menu-list" href="#feature">
                  main feature
                </a>
              </li>
              <li className="collection-item ">
                <a className="sidenav-close  menu-list" href="#popular">
                  popular course
                </a>
              </li>
              <li className="collection-item">
                <a className="sidenav-close  menu-list" href="#explore">
                  Tech Horizon
                </a>
              </li>
              <li className="collection-item">
                <a className="sidenav-close menu-list" href="blog.html">
                  blog
                </a>
              </li>
              <li className="collection-item group-child has-child">
                <div className="collapsible-header">
                  <a className=" text-truncate menu-list" href="#!">
                    Inner Page
                    <i className="material-icons right">keyboard_arrow_down</i>
                  </a>
                </div>
                <div className="collapsible-body">
                  <div className="collection side-group">
                    <ul className="group-child">
                      <li className="collection-header">
                        <div className="title-mega">Company</div>
                      </li>
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="/about"
                        >
                          about
                        </Link>
                      </li>
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="/aboutteam"
                        >
                          team
                        </Link>
                      </li>
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="/blog"
                        >
                          blog
                        </Link>
                      </li>
                    </ul>
                    <ul className="group-child">
                      <li className="collection-header">
                        <div className="title-mega">Form</div>
                      </li>
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="/login"
                        >
                          login
                        </Link>
                      </li>
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="/register"
                        >
                          register
                        </Link>
                      </li>
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="/contact"
                        >
                          contact map
                        </Link>
                      </li>
                    </ul>
                    <ul className="group-child">
                      <li className="collection-header">
                        <div className="title-mega">Items</div>
                      </li>
                      {/*<li class="collection-item side-group-link">*/}
                      {/*  <a class="waves-effect text-truncate menu-list" href="collection.html">card</a>*/}
                      {/*</li>*/}
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="https://edodwaja.com/the-courses"
                        >
                          Courses
                        </Link>
                      </li>
                      <li className="collection-item side-group-link">
                        <Link
                          className="waves-effect text-truncate menu-list"
                          href="products.html"
                        >
                          product detail
                        </Link>
                      </li>
                    </ul>
                    {/*<ul class="group-child">*/}
                    {/*  <li class="collection-header">*/}
                    {/*    <div class="title-mega">Utilities</div>*/}
                    {/*  </li>*/}
                    {/*  <li class="collection-item side-group-link">*/}
                    {/*    <a class="waves-effect text-truncate menu-list" href="pricing.html">pricing</a>*/}
                    {/*  </li>*/}
                    {/*  <li class="collection-item side-group-link">*/}
                    {/*    <a class="waves-effect text-truncate menu-list" href="faq.html">faq</a>*/}
                    {/*  </li>*/}
                    {/*  <li class="collection-item side-group-link">*/}
                    {/*    <a class="waves-effect text-truncate menu-list" href="maintenance.html">maintenance</a>*/}
                    {/*  </li>*/}
                    {/*  <li class="collection-item side-group-link">*/}
                    {/*    <a class="waves-effect text-truncate menu-list" href="coming-soon.html">coming soon</a>*/}
                    {/*  </li>*/}
                    {/*  <li class="collection-item side-group-link">*/}
                    {/*    <a class="waves-effect text-truncate menu-list" href="404.html">error</a>*/}
                    {/*  </li>*/}
                    {/*</ul>*/}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="dropdown-divider" />
          <div className="collection">
            <ul>
              <li className="collection-item">
                <Link className="sidenav-close waves-effect menu-list" href="/login">
                  Login
                </Link>
              </li>
              <li className="collection-item">
                <Link
                  className="sidenav-close waves-effect menu-list"
                  href="/register"
                >
                  register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      


    )
}