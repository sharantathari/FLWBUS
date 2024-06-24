import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNav from "@/components/common/MobileNav";
import Preloader from "@/components/common/Preloader";
import Filter from "@/components/products_components/Filter";
import FilterNew from "@/components/products_components/FilterNew";
import ProSection from "@/components/products_components/ProSection";
import Search from "@/components/products_components/Search";
import Sorter from "@/components/products_components/Sorter";
import { iotProjects } from "@/components/products_components/data";
export default function Products() {
    return (
        <>
            {/* <Preloader /> */}
            <div className="m-application theme--light transition-page" id="app">
                <div className="loading" />
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="products-page">
                        <Filter />
                        <div className="main-wrap">
                            <MobileNav />
                            <Header />
                            <div className="container-wrap">
                                <Search />
                                <div className="search-content">
                                    <div className="container">
                                        <Sorter />
                                        <div className="row align-items-start justify-content-start">
                                            <FilterNew />
                                            <div className="col-lg-10 col-md-9 px-sm-3 px-0">
                                                <div className="row" id="product_result">
                                                    {iotProjects.map((product, index) => (
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}