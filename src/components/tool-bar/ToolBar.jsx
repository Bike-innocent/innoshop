
import React from 'react'

function ToolBar() {
    return (
        <>
            {/* <!-- gotop --> */}
            <div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    {/* <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 286.138;"></path> */}
                </svg>
            </div>
            {/* <!-- /gotop --> */}

            {/* <!-- toolbar-bottom --> */}
            <div class="tf-toolbar-bottom type-1150">
                <div class="toolbar-item active">
                    <a href="#toolbarShopmb" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                        <div class="toolbar-icon">
                            <i class="icon-shop"></i>
                        </div>
                        <div class="toolbar-label">Shop</div>
                    </a>
                </div>

                <div class="toolbar-item">
                    <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                        <div class="toolbar-icon">
                            <i class="icon-search"></i>
                        </div>
                        <div class="toolbar-label">Search</div>
                    </a>
                </div>
                <div class="toolbar-item">
                    <a href="#login" data-bs-toggle="modal">
                        <div class="toolbar-icon">
                            <i class="icon-account"></i>
                        </div>
                        <div class="toolbar-label">Account</div>
                    </a>
                </div>
                <div class="toolbar-item">
                    <a href="wishlist.html">
                        <div class="toolbar-icon">
                            <i class="icon-heart"></i>
                            <div class="toolbar-count">0</div>
                        </div>
                        <div class="toolbar-label">Wishlist</div>
                    </a>
                </div>
                <div class="toolbar-item">
                    <a href="#shoppingCart" data-bs-toggle="modal">
                        <div class="toolbar-icon">
                            <i class="icon-bag"></i>
                            <div class="toolbar-count">1</div>
                        </div>
                        <div class="toolbar-label">Cart</div>
                    </a>
                </div>
            </div>

        </>
    )
}

export default ToolBar
