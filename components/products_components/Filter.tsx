import React from 'react'

export default function Filter() {
    return (
        <div className="modal bottom-sheet" id="modal_filter">
            <div className="modal-content modal-filter">
                <nav className="filter-head">
                    <div className="nav-wrapper">
                        <div className="d-flex">
                            <button
                                className="btn btn-icon btn-small invert waves-effect modal-close"
                                type="button"
                            >
                                <i className="material-icons">close</i>
                            </button>
                            <h5 className="use-text-subtitle2 mx-2 my-3 my-sm-2">Filter</h5>
                        </div>
                        <button className="modal-close btn-flat waves-effect" type="button">
                            DONE{" "}
                        </button>
                    </div>
                </nav>
                <div className="filter-style" id="filter_mobile" />
            </div>
        </div>

    )
}
