import {FETCH_COUPON, POST_COUPON, VALIDATE_COUPON} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_COUPON:
      return action.payload;
    case POST_COUPON:
      return action.payload;
    default:
      return state;
  }
}
