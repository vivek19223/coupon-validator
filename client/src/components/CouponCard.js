import React, {Component} from 'react';
import moment from 'moment';
import * as actions from '../actions';
import {connect} from 'react-redux';

class CouponCard extends Component {
  state = {
    cartValue: '',
    error: undefined,
    data: '',
  };

  onValueChange = async e => {
    const cartValue = e.target.value;
    await this.setState (() => ({cartValue}));
  };

  onValidate = async e => {
    e.preventDefault ();
    const cartValue = this.state.cartValue;
    await this.props.validateCoupon (
      this.props.type,
      this.props.coupon.code,
      cartValue
    );
    const deductedAmount = this.props.reducedAmount;
    if (this.props.coupon.minimumCartvalue > cartValue) {
      this.setState (() => ({
        error: `Minimum cart value for this coupon is : ${this.props.coupon.minimumCartvalue}`,
        data: '',
      }));
    } else {
      if (deductedAmount.value) {
        this.setState (() => ({
          data: `Coupon Applied Successfully..!! Total Paybal Amount : ${deductedAmount.value}`,
          error: '',
        }));
      } else {
        this.setState (() => ({
          error: `Coupon Expired`,
          data: '',
        }));
      }
    }
  };
  render () {
    return (
      <div className="row">
        <div className="row s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.coupon.code}</span>
              <p>
                COUPON VALIDITY : &nbsp;
                {moment (this.props.coupon.startDate).format ('MMM Do YYYY')}
                &nbsp;&nbsp;-&nbsp;&nbsp;
                {moment (this.props.coupon.endDate).format ('MMM Do YYYY')}
              </p>
              <p>MINIMUM CART VALUE : {this.props.coupon.minimumCartvalue} </p>
              <div>
                {this.props.type === 'flat'
                  ? <p>Flat Discount : {this.props.coupon.flatDiscount}</p>
                  : <p>
                      Percent Discount : {this.props.coupon.percentDiscount}
                    </p>}
              </div>
              {this.props.type === 'percent' &&
                <p>Max Discount : {this.props.coupon.maxAllowedDiscount}</p>}
            </div>
            <div className="card-action" style={{margin: 0, padding: 0}}>
              <form onSubmit={this.onValidate}>
                <div>
                  <div className="row" style={{margin: 0, padding: 0}}>
                    <div
                      className="col s12"
                      style={{marginRight: 10, padding: 0}}
                    >
                      Cart Value:
                      <div
                        className="input-field inline"
                        style={{marginLeft: 10, padding: 0}}
                      >
                        <input
                          id="cartValue"
                          type="number"
                          value={this.state.cartValue}
                          onChange={this.onValueChange}
                        />
                        <button
                          className="btn waves-effect waves-light right"
                          type="submit"
                          name="action"
                        >
                          Validate
                          <i className="material-icons right">done</i>
                        </button>
                        {this.state.error || false
                          ? <p>{this.state.error}</p>
                          : <p>{this.state.data}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({reducedAmount}) => {
  return {reducedAmount};
};

export default connect (mapStateToProps, actions) (CouponCard);
