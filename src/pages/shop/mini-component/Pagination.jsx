import React from 'react'

function Pagination() {
    return (
        <>

            {/* <!-- pagination --> */}
            <ul class="tf-pagination-wrap tf-pagination-list">
                <li class="active">
                    <a href="#" class="pagination-link">1</a>
                </li>
                <li>
                    <a href="#" class="pagination-link animate-hover-btn">2</a>
                </li>
                <li>
                    <a href="#" class="pagination-link animate-hover-btn">3</a>
                </li>
                <li>
                    <a href="#" class="pagination-link animate-hover-btn">4</a>
                </li>
                <li>
                    <a href="#" class="pagination-link animate-hover-btn">
                        <span class="icon icon-arrow-right"></span>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Pagination
