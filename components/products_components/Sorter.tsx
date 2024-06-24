import React from 'react'

export default function Sorter() {
    return (
        <div className="row sorter align-items-center flex-sm-row-reverse">
            <div className="col-lg-3 col-sm-8 py-1 px-0">
                <div className="d-flex justify-content-sm-end justify-content-center align-items-center">
                    <a
                        className="modal-trigger btn btn-outlined primary waves-effect me-4 show-sm-down"
                        id="open_filter"
                        href="#modal_filter"
                    >
                        <i className="material-icons left">filter_list</i>Filter
                    </a>
                    <div className="toggle-btn-group me-4 show-sm-up" id="switch_view">
                        <button
                            className="btn btn-outlined primary active"
                            type="button"
                            data-value="grid"
                        >
                            <i className="material-icons">grid_on</i>
                        </button>
                        <button
                            className="btn btn-outlined primary"
                            type="button"
                            data-value="list"
                        >
                            <i className="material-icons">view_list</i>
                        </button>
                    </div>
                    <div className="input-field dark primary">
                        <select className="select" id="sort_by">
                            <option value="" disabled selected>
                                Sort By:
                            </option>
                            <option value="title-asc">Title A to Z</option>
                            <option value="title-desc">Title Z to A</option>
                            <option value="price-asc">Highest Price</option>
                            <option value="price-desc">Lowest Price</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-sm-4 py-1 px-0">
                <h2 className="use-text-subtitle">
                    <span id="result_length">27</span>&nbsp; Items Found{" "}
                </h2>
            </div>
        </div>

    )
}
