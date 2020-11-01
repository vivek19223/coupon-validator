import {combineReducers} from 'redux';
import couponReducer from './couponReducer';
import validatedCoupons from './valiadatedCoupons';

export default combineReducers ({
  coupons: couponReducer,
  reducedAmount: validatedCoupons,
});
