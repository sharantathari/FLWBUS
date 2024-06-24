import React from 'react'

export default function Search() {
  return (
    <div className="hero-banner-wrap">
    <div className="bg-deco" />
    <div className="container small-deco">
      <div />
    </div>
    <div className="container">
      <section className="search-banner">
        <div className="container max-md">
          <div className="row search-block align-items-center justify-content-center">
        
              <div className="title-main align-center">
                <h4 className="secondary">
                  <span>Make DIY Products with FLOW</span>
                </h4>
                <p className="desc use-text-subtitle2">
                  Browse over 300 million stock items. Quickly find authentic and
                  premium items.
                </p>
              </div>
              <div className="search">
                <div className="input-field">
                  <i className="material-icons prefix">search</i>
                  <input id="search_product" type="text" placeholder="Search" />
                </div>
              </div>
           
          </div>
        </div>
      </section>
    </div>
  </div>
  
  )
}

