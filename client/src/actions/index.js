import {FETCH_COUPON, POST_COUPON, VALIDATE_COUPON} from './types';
import axios from 'axios';

export const fetchFlatCoupons = () => async dispatch => {
  const res = await axios.get ('/api/fetchFlatCoupons');
  dispatch ({type: FETCH_COUPON, payload: res.data});
};

export const fetchPercentCoupons = () => async dispatch => {
  const res = await axios.get ('/api/fetchPercentCoupons');
  dispatch ({type: FETCH_COUPON, payload: res.data});
};

export const postPercentCoupon = coupon => async dispatch => {
  const res = await axios.post ('/api/createPercentCoupon', coupon);
  dispatch ({type: POST_COUPON, payload: res.data});
};

export const postFlatCoupon = coupon => async dispatch => {
  const res = await axios.post ('/api/createFlatCoupon', coupon);
  dispatch ({type: POST_COUPON, payload: res.data});
};

export const validateCoupon = (type, code, cartValue) => async dispatch => {
  const res = await axios.post ('/api/validateCoupon', {type, code, cartValue});
  dispatch ({type: VALIDATE_COUPON, payload: res.data});
};
