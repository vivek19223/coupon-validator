import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Coupon Validator</h1>
      <p>Generate and validate coupons.</p>
      <div className="fixed-action-btn">
        <Link to="/create" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
