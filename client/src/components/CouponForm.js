import React, {Component} from 'react';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../actions';

class CouponForm extends Component {
  state = {
    type: 'flat',
    code: '',
    startDate: moment (),
    endDate: moment (),
    minimumCartvalue: '',
    flatDiscount: '',
    percentDiscount: '',
    maxAllowedDiscount: '',
    calenderFocused: null,
    error: undefined,
  };

  onTypeChange = e => {
    this.setState (prevState => ({
      type: prevState.type === 'flat' ? 'percent' : 'flat',
    }));
  };

  onCodeChange = e => {
    const code = e.target.value;
    this.setState (() => ({code}));
  };

  onDatesChange = ({startDate, endDate}) => {
    this.setState (() => ({startDate, endDate}));
  };

  onFocusChange = calenderFocused => {
    this.setState (() => ({calenderFocused}));
  };

  onCartValueChange = e => {
    const minimumCartvalue = e.target.value;
    this.setState (() => ({minimumCartvalue}));
  };

  onDiscountChange = e => {
    let flatDiscount, percentDiscount;
    if (this.state.type === 'flat') {
      flatDiscount = e.target.value;
      this.setState (() => ({flatDiscount}));
    } else {
      percentDiscount = e.target.value;
      this.setState (() => ({percentDiscount}));
    }
  };

  onMaxAllowedDiscountChange = e => {
    const maxAllowedDiscount = e.target.value;
    this.setState (() => ({maxAllowedDiscount}));
  };

  onFormSubmit = e => {
    e.preventDefault ();
    if (this.state.type === 'flat') {
      this.props.postFlatCoupon (this.state);
    } else {
      this.props.postPercentCoupon (this.state);
    }
    this.props.history.push ('/dashboard');
  };

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>

          <div className="switch row" style={{margin: 10}}>
            <label style={{marginRight: 20}}>
              Type of coupons
            </label>
            <label>
              FlatDiscount
              <input type="checkbox" onChange={this.onTypeChange} />
              <span className="lever" />
              PercentDiscount
            </label>
          </div>

          <div className="row">
            <div className="col s12">
              Coupon Code:
              <div className="input-field inline">
                <input
                  id="code"
                  type="text"
                  onChange={this.onCodeChange}
                  value={this.state.code}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              Coupon Validity
              <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                showClearDates={false}
                isOutsideRange={() => false}
              />
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              Minimum Cart Value:
              <div className="input-field inline">
                <input
                  id="minimumCartvalue"
                  type="number"
                  onChange={this.onCartValueChange}
                  value={this.state.minimumCartvalue}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div>
                {this.state.type === 'flat'
                  ? 'Flat Discount'
                  : 'Percentage Discount'}
                <div className="input-field inline">
                  <input
                    id="discount"
                    type="number"
                    onChange={this.onDiscountChange}
                    required
                    value={
                      this.state.type === 'flat'
                        ? this.state.flatDiscount
                        : this.state.percentDiscount
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {this.state.type === 'percent' &&
            <div className="row">
              <div className="col s12">
                <div>
                  Max Allowed Discount :
                  <div className="input-field inline">
                    <input
                      id="maxAllowedDiscount"
                      type="number"
                      onChange={this.onMaxAllowedDiscountChange}
                      required
                      value={this.state.maxAllowedDiscount}
                    />
                  </div>
                </div>
              </div>
            </div>}

          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>

        </form>
      </div>
    );
  }
}

export default connect (null, actions) (withRouter (CouponForm));
