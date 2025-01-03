import React from 'react'
import { Link } from 'react-router-dom'


function Address() {
    return (
        <>
            
                <section class="flat-spacing-11">
                    <div class="container">

                        <Link to="/account/create-address">Create new address</Link>
                        <div class="row">

                            <div class="col-12">
                                <div class=" account-address">
                                    <div class="">
                                    <p>this is the structure of the address, am working on the user logic for the full functionality</p>
                                        <div>
                                            <h6 class="mb_20">Default</h6>
                                            <p>themesflat</p>
                                            <p>1234 Fashion Street, Suite 567</p>
                                            <p>New York</p>
                                            
                                            <p class="mb_10">(212) 555-1234</p>
                                            <div class="d-flex gap-10">
                                                <a href="#" class="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center">
                                                    <span>Edit</span>
                                                </a>
                                                <a href="#" class="tf-btn btn-outline animate-hover-btn rounded-0 justify-content-center">
                                                    <span>Delete</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           

        </>
    )
}

export default Address
