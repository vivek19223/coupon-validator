import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import CouponCard from './CouponCard';

class DashBoard extends Component {
  state = {
    type: 'flat',
  };
  componentDidMount () {
    this.props.fetchFlatCoupons ();
  }
  onValueChange = async e => {
    const type = e.target.value;
    await this.setState (() => ({type}));
    type === 'flat'
      ? this.props.fetchFlatCoupons ()
      : this.props.fetchPercentCoupons ();
  };

  renderHelper () {
    const coupons = this.props.coupons;
    if (coupons && coupons.length >= 1) {
      return (
        <div>
          <h3>Total {this.state.type} Coupon : {coupons.length}</h3>
          {coupons.map (coupon => (
            <CouponCard
              key={coupon.code}
              coupon={coupon}
              type={this.state.type}
            />
          ))}
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        <label>Browser Select</label>
        <div className="input-field col s12">
          <select className="browser-default" onChange={this.onValueChange}>
            <option value="flat" defaultValue>
              Flat Coupons
            </option>
            <option value="percent">
              Percent Coupons
            </option>
          </select>
        </div>
        {this.renderHelper ()}
      </div>
    );
  }
}

const mapStateToProps = ({coupons}) => {
  return {coupons};
};

export default connect (mapStateToProps, actions) (DashBoard);
