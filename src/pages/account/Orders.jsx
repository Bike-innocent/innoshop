import React from 'react';
import AccountLayout from './AccountLayout';

function Orders() {
  return (
    <AccountLayout activePage="orders">
      <div className="my-account-content">
        <h5 className="fw-5 mb_20">Your Orders</h5>
        <p>You have no orders yet.</p>
      </div>
    </AccountLayout>
  );
}

export default Orders;
