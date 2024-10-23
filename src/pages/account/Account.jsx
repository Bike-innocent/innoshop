import React from 'react';
import AccountLayout from './AccountLayout';

function Account() {
  return (
    <AccountLayout activePage="dashboard">
      <div className="my-account-content account-dashboard">
        <div className="mb_60">
          <h5 className="fw-5 mb_20">Hello Themesflat</h5>
          <p>
            From your account dashboard you can view your{' '}
            <a className="text_primary" href="/orders">recent orders</a>, manage your{' '}
            <a className="text_primary" href="/addresses">shipping and billing addresses</a>, and{' '}
            <a className="text_primary" href="/account-details">edit your password and account details</a>.
          </p>
        </div>
      </div>
    </AccountLayout>
  );
}

export default Account;
