import React from 'react';
import { All } from './data';

export default function ProSection() {
    return (
        <div className="col-lg-10 col-md-9 px-sm-3 px-0">
            <div className="row" id="product_result">
                {All.map((product, index) => (
                    <div key={index} className="col col-lg-4 col-sm-6 px-sm-3 px-0">
                        <div className="card product-card portrait round">
                            <a className="waves-effect hidden-link" href={product.href} target="_blank" rel="noopener noreferrer">
                                &nbsp;
                            </a>
                            <div className="figure">
                                <div className="responsive-img"
                                style={{ backgroundImage: `url(${product.img})` }}
                                >   
                                </div>
                            </div>
                            <div className="desc">
                                <div className="text">
                                    <h6 className="title pb-2 text-truncate">{product.title}</h6>
                                    <p className="use-text-paragraph">{product.description}</p>
                                </div>
                                <div>
                                    <a className="btn btn-outlined primary button block waves-effect" href={product.href} target="_blank" rel="noopener noreferrer">
                                        See detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
