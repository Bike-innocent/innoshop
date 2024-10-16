import React from 'react'

function Featured() {
    return (
        <>

            <div class="tf-control-sorting d-flex justify-content-end">
                <div class="tf-dropdown-sort" data-bs-toggle="dropdown">
                    <div class="btn-select">
                        <span class="text-sort-value">Featured</span>
                        <span class="icon icon-arrow-down"></span>
                    </div>
                    <div class="dropdown-menu">
                        <div class="select-item active">
                            <span class="text-value-item">Featured</span>
                        </div>
                        <div class="select-item">
                            <span class="text-value-item">Best selling</span>
                        </div>
                        <div class="select-item">
                            <span class="text-value-item">Alphabetically, A-Z</span>
                        </div>
                        <div class="select-item">
                            <span class="text-value-item">Alphabetically, Z-A</span>
                        </div>
                        <div class="select-item">
                            <span class="text-value-item">Price, low to high</span>
                        </div>
                        <div class="select-item">
                            <span class="text-value-item">Price, high to low</span>
                        </div>
                        <div class="select-item">
                            <span class="text-value-item">Date, old to new</span>
                        </div>
                        <div class="select-item">
                            <span class="text-value-item">Date, new to old</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Featured
