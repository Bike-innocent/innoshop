import React from 'react'

function CheckOutForm() {
  return (
    <>
      
      <div class="tf-page-cart-item">
                        <h5 class="fw-5 mb_20">Billing details</h5>
                        <form class="form-checkout">
                            <div class="box grid-2">
                                <fieldset class="fieldset">
                                    <label for="first-name">First Name</label>
                                    <input type="text" id="first-name" placeholder="Themesflat"/>
                                </fieldset>
                                <fieldset class="fieldset">
                                    <label for="last-name">Last Name</label>
                                    <input type="text" id="last-name"/>
                                </fieldset>
                            </div>
                            <fieldset class="box fieldset">
                                <label for="country">Country/Region</label>
                                <div class="select-custom">
                                    <select class="tf-select w-100" id="country" name="address[country]" data-default="">
                                        <option value="---" data-provinces="[]">---</option>
                                        <option value="Australia" data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]">Australia</option>
                                        <option value="Austria" data-provinces="[]">Austria</option>
                                        <option value="Belgium" data-provinces="[]">Belgium</option>
                                       
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset class="box fieldset">
                                <label for="city">Town/City</label>
                                <input type="text" id="city"/>
                            </fieldset>
                            <fieldset class="box fieldset">
                                <label for="address">Address</label>
                                <input type="text" id="address"/>
                            </fieldset>
                            <fieldset class="box fieldset">
                                <label for="phone">Phone Number</label>
                                <input type="number" id="phone"/>
                            </fieldset>
                            <fieldset class="box fieldset">
                                <label for="email">Email</label>
                                <input type="email" id="email"/>
                            </fieldset>
                            <fieldset class="box fieldset">
                                <label for="note">Order notes (optional)</label>
                                <textarea name="note" id="note"></textarea>
                            </fieldset>
                        </form>
                    </div>
    </>
  )
}

export default CheckOutForm
