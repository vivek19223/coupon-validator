import {VALIDATE_COUPON} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case VALIDATE_COUPON:
      return action.payload;
    default:
      return state;
  }
}
