import Link from 'next/link'
import React from 'react'

export default function FilterNew() {
    return (
        <div className="col-lg-2 col-md-3 pa-0">
            <div className="hidden-sm-down">
                {/* #### FILTER ####*/}
                <div className="filter-style" id="filter_sidebar">
                    <aside>
                        <div className="filter-block filter_category">
                            <ul className="collection with-header">
                                <li className="collection-header">Filter Categories</li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item active"
                                        data-value="all"
                                        href="/products"
                                    >
                                        All Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item"
                                        data-value="cat-a"
                                        href="/products/robotics"
                                    >
                                        Robotics
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item"
                                        data-value="cat-b"
                                        href="/products/vr"
                                    >
                                        Augmented Reality &amp; Virtual Reality
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item"
                                        data-value="cat-c"
                                        href="/products/iot"
                                    >
                                        Internet of Things (IoT)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item"
                                        data-value="cat-d"
                                        href="/products/ai"
                                    >
                                        Artificial Intelligence(AI)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item"
                                        data-value="cat-e"
                                        href="/products/ml"
                                    >
                                        Machine Learning(ML)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item"
                                        data-value="cat-f"
                                        href="/products/cs"
                                    >
                                        Cybersecurity
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="waves-effect collection-item"
                                        data-value="cat-g"
                                        href="/product/blockchain"
                                    >
                                        Blockchain Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="filter-block filter_radio"> */}
                        {/* <ul class="collection with-header"> */}
                        {/* <li class="collection-header">Filter Radio</li>
                          <li class="collection-item waves-effect active">
                            <label class="label-block"><input class="with-gap" name="filter_radio" type="radio" value="all" checked /><span>All categories</span></label>
                          </li>
                          <li class="collection-item waves-effect">
                            <label class="label-block"><input class="with-gap" name="filter_radio" type="radio" value="radio-a" /><span>Radio A</span></label>
                          </li>
                          <li class="collection-item waves-effect">
                            <label class="label-block"><input class="with-gap" name="filter_radio" type="radio" value="radio-b" /><span>Radio B</span></label>
                          </li>
                          <li class="collection-item waves-effect">
                            <label class="label-block"><input class="with-gap" name="filter_radio" type="radio" value="radio-c" /><span>Radio C</span></label>
                          </li>
                          <li class="collection-item waves-effect">
                            <label class="label-block"><input class="with-gap" name="filter_radio" type="radio" value="radio-d" /><span>Radio D</span></label>
                          </li>
                          <li class="collection-item waves-effect">
                            <label class="label-block"><input class="with-gap" name="filter_radio" type="radio" value="radio-e" /><span>Radio E</span></label>
                          </li>
                          <li class="collection-item waves-effect">
                            <label class="label-block"><input class="with-gap" name="filter_radio" type="radio" value="radio-f" /><span>Radio F</span></label>
                          </li> */}
                        {/* </ul>
                      </div> */}
                        {/* <div class="filter-block filter_tags">
                        <div class="collection with-header">
                          <div class="px-2"><span class="btn-tag"><input id="tag_one" type="checkbox" value="tag-one" checked/><label class="waves-effect" for="tag_one">Tag One</label></span><span class="btn-tag"><input id="tag_two" type="checkbox" value="tag-two" checked/><label class="waves-effect" for="tag_two">Tag Two</label></span><span class="btn-tag"><input id="tag_three" type="checkbox" value="tag-three" checked/><label class="waves-effect" for="tag_three">Tag Three</label></span><span class="btn-tag"><input id="tag_four" type="checkbox" value="tag-four" checked/><label class="waves-effect" for="tag_four">Tag Four</label></span></div>
                        </div>
                      </div>
                      <div class="filter-block filter_price">
                        <div class="collection with-header">
                          <div class="px-4">
                            <div class="d-flex">
                              <div class="input-field dark pa-0"><input class="py-0" id="price_from" placeholder="$ From" type="text" value="0" /></div>
                              <div class="strip">-</div>
                              <div class="input-field dark pa-0"><input class="py-0" id="price_to" placeholder="$ To" type="text" value="100" /></div>
                          </div>
                        </div>
                      </div> */}
                        <div className="filter-block filter_check">
                            <ul className="collection with-header">
                                <li className="collection-header">Filter Check</li>
                                <li className="collection-item waves-effect active select_all_categories">
                                    Select All
                                </li>
                                <li className="collection-item waves-effect">
                                    <label className="label-block">
                                        <input
                                            className="primary filled-in"
                                            type="checkbox"
                                            defaultValue="check-a"
                                            defaultChecked
                                        />
                                        <span>Basics</span>
                                    </label>
                                </li>
                                <li className="collection-item waves-effect">
                                    <label className="label-block">
                                        <input
                                            className="primary filled-in"
                                            type="checkbox"
                                            defaultValue="check-b"
                                            defaultChecked
                                        />
                                        <span>Beginner</span>
                                    </label>
                                </li>
                                <li className="collection-item waves-effect">
                                    <label className="label-block">
                                        <input
                                            className="primary filled-in"
                                            type="checkbox"
                                            defaultValue="check-c"
                                            defaultChecked
                                        />
                                        <span>Intermediate</span>
                                    </label>
                                </li>
                                <li className="collection-item waves-effect">
                                    <label className="label-block">
                                        <input
                                            className="primary filled-in"
                                            type="checkbox"
                                            defaultValue="check-d"
                                            defaultChecked
                                        />
                                        <span>Expert</span>
                                    </label>
                                </li>
                                <li className="collection-item waves-effect">
                                    <label className="label-block">
                                        <input
                                            className="primary filled-in"
                                            type="checkbox"
                                            defaultValue="check-e"
                                            defaultChecked
                                        />
                                        <span>Advanced</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

    )
}
