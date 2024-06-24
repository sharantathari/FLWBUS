import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNav from "@/components/common/MobileNav";
import Preloader from "@/components/common/Preloader";
import Filter from "@/components/products_components/Filter";
import FilterNew from "@/components/products_components/FilterNew";
import ProSection from "@/components/products_components/ProSection";
import Search from "@/components/products_components/Search";
import Sorter from "@/components/products_components/Sorter";

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
                                            <ProSection />
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