import React from 'react'

function Account() {
  return (
    <>
    <section class="flat-spacing-11">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <ul class="my-account-nav">
                    <li><span class="my-account-nav-item active">Dashboard</span></li>
                    <li><a href="my-account-orders.html" class="my-account-nav-item">Orders</a></li>
                    <li><a href="my-account-address.html" class="my-account-nav-item">Addresses</a></li>
                    <li><a href="my-account-edit.html" class="my-account-nav-item">Account Details</a></li>
                    <li><a href="my-account-wishlist.html" class="my-account-nav-item">Wishlist</a></li>
                    <li><a href="login.html" class="my-account-nav-item">Logout</a></li>
                </ul>
            </div>
            <div class="col-lg-9">
                <div class="my-account-content account-dashboard">
                    <div class="mb_60">
                        <h5 class="fw-5 mb_20">Hello Themesflat</h5>
                        <p>
                            From your account dashboard you can view your <a class="text_primary" href="my-account-orders.html">recent orders</a>, manage your <a class="text_primary" href="my-account-edit-address.html">shipping and billing addresses</a>, and <a class="text_primary" href="my-account-edit.html">edit your password and account details</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Account
